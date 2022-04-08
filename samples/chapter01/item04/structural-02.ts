import { calculateLength } from './structural-01';

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
const result = calculateLength(v);
console.log(result);
