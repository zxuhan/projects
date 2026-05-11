import { Position } from '../types/project';

const RADIUS = 1500;
// Z_STEP was 200; halved to 100 so the depth spread across 6+ cards
// (previously 0..1200) doesn't push the far cards into extreme perspective
// distortion. Smaller Z range → less per-frame perspective math during
// impress transitions, which is the biggest compositor cost at this card
// count. Visual: a slightly subtler 3D depth effect, same spiral.
const Z_STEP = 100;

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
