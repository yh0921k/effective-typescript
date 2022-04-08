import { calculateLength } from './structural-01';

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

const result = normalize({ x: 3, y: 4, z: 5 });
console.log(result);
