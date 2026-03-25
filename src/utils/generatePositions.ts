import { Position } from '../types/project';

const RADIUS = 1500;
const Z_STEP = 200;

export function generateSpiralPositions(count: number): Position[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI;
    const rotateY = Math.round((i / count) * 360);
    return {
      x: Math.round(RADIUS * Math.cos(angle)),
      y: Math.round(RADIUS * Math.sin(angle)),
      z: i * Z_STEP,
      rotateY,
    };
  });
}
