import { useRef, useState } from 'react';
import Toolbar from './components/Toolbar';
import WhiteboardCanvas, {
  type WhiteboardCanvasHandle,
} from './components/WhiteboardCanvas';

function App() {
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const canvasRef = useRef<WhiteboardCanvasHandle>(null);

  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="border-b border-slate-200 bg-white px-4 py-2">
        <h1 className="text-lg font-semibold text-slate-800">Whiteboard</h1>
      </header>
      <Toolbar
        color={color}
        onColorChange={(next) => {
          setColor(next);
          setIsEraser(false);
        }}
        brushSize={brushSize}
        onBrushSizeChange={setBrushSize}
        isEraser={isEraser}
        onToggleEraser={() => setIsEraser((prev) => !prev)}
        onClear={() => canvasRef.current?.clear()}
      />
      <main className="flex-1 overflow-hidden">
        <WhiteboardCanvas
          ref={canvasRef}
          color={color}
          brushSize={brushSize}
          isEraser={isEraser}
        />
      </main>
    </div>
  );
}

export default App;
