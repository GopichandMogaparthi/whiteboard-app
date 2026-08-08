import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import type { Point } from '../types/whiteboard';

export interface WhiteboardCanvasHandle {
  clear: () => void;
}

interface WhiteboardCanvasProps {
  color: string;
  brushSize: number;
  isEraser: boolean;
}

const WhiteboardCanvas = forwardRef<WhiteboardCanvasHandle, WhiteboardCanvasProps>(
  ({ color, brushSize, isEraser }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isDrawingRef = useRef(false);
    const lastPointRef = useRef<Point | null>(null);

    // Keep latest tool settings in refs so the pointer handlers (bound once)
    // always see the current values without needing to be re-attached.
    const colorRef = useRef(color);
    const brushSizeRef = useRef(brushSize);
    const isEraserRef = useRef(isEraser);
    colorRef.current = color;
    brushSizeRef.current = brushSize;
    isEraserRef.current = isEraser;

    useImperativeHandle(ref, () => ({
      clear: () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      },
    }));

    // Resize the canvas to fill its container, scaling for devicePixelRatio
    // so strokes stay crisp on high-DPI screens, while preserving existing
    // drawing across resizes.
    useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const resize = () => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { width, height } = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        const snapshot = document.createElement('canvas');
        snapshot.width = canvas.width;
        snapshot.height = canvas.height;
        snapshot.getContext('2d')?.drawImage(canvas, 0, 0);

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.drawImage(snapshot, 0, 0);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      };

      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(container);
      return () => observer.disconnect();
    }, []);

    const getPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
      const rect = canvasRef.current!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const drawSegment = (from: Point, to: Point) => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = isEraserRef.current
        ? 'destination-out'
        : 'source-over';
      ctx.strokeStyle = colorRef.current;
      ctx.lineWidth = brushSizeRef.current;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      ctx.restore();
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
      canvasRef.current?.setPointerCapture(e.pointerId);
      isDrawingRef.current = true;
      const point = getPoint(e);
      lastPointRef.current = point;
      // Draw a dot for single clicks/taps that never trigger a move.
      drawSegment(point, point);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawingRef.current || !lastPointRef.current) return;
      const point = getPoint(e);
      drawSegment(lastPointRef.current, point);
      lastPointRef.current = point;
    };

    const stopDrawing = () => {
      isDrawingRef.current = false;
      lastPointRef.current = null;
    };

    return (
      <div ref={containerRef} className="h-full w-full">
        <canvas
          ref={canvasRef}
          className="h-full w-full touch-none bg-white"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
          onPointerCancel={stopDrawing}
        />
      </div>
    );
  },
);

WhiteboardCanvas.displayName = 'WhiteboardCanvas';

export default WhiteboardCanvas;
