export interface Point {
  x: number;
  y: number;
}

export interface Stroke {
  id: string;
  color: string;
  brushSize: number;
  isEraser: boolean;
  points: Point[];
}
