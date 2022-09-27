import { type Ref } from 'preact';

export interface ChartCanvasProps {
  width: number;
  height: number;
  ref: Ref<HTMLCanvasElement>;
}

export function ChartCanvas({ width, height, ref }: ChartCanvasProps) {
  return <canvas width={width} height={height} id="chart" ref={ref}></canvas>;
}
