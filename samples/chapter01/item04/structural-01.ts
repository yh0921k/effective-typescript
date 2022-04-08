interface Vector2D {
  x: number;
  y: number;
}

export function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
