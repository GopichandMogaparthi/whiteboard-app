const SWATCHES = [
  '#000000',
  '#ef4444',
  '#f59e0b',
  '#22c55e',
  '#3b82f6',
  '#a855f7',
];

interface ToolbarProps {
  color: string;
  onColorChange: (color: string) => void;
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
  isEraser: boolean;
  onToggleEraser: () => void;
  onClear: () => void;
}

function Toolbar({
  color,
  onColorChange,
  brushSize,
  onBrushSizeChange,
  isEraser,
  onToggleEraser,
  onClear,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 bg-white px-4 py-3">
      <div className="flex items-center gap-2">
        {SWATCHES.map((swatch) => (
          <button
            key={swatch}
            type="button"
            aria-label={`Select color ${swatch}`}
            onClick={() => onColorChange(swatch)}
            className={`h-7 w-7 rounded-full border-2 transition ${
              color === swatch && !isEraser
                ? 'border-slate-800 scale-110'
                : 'border-slate-200'
            }`}
            style={{ backgroundColor: swatch }}
          />
        ))}
        <input
          type="color"
          aria-label="Custom color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-7 w-7 cursor-pointer rounded-full border-0 bg-transparent p-0"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-600">
        Brush size
        <input
          type="range"
          min={1}
          max={40}
          value={brushSize}
          onChange={(e) => onBrushSizeChange(Number(e.target.value))}
          className="w-32 accent-slate-800"
        />
        <span className="w-6 text-right tabular-nums">{brushSize}</span>
      </label>

      <button
        type="button"
        onClick={onToggleEraser}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
          isEraser
            ? 'bg-slate-800 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        Eraser
      </button>

      <button
        type="button"
        onClick={onClear}
        className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
      >
        Clear Canvas
      </button>
    </div>
  );
}

export default Toolbar;
