interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // "x" | "y"

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  return [];
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];

sortBy(pts, 'x'); // 정상, 'x'는 'x' | 'y' 를 상속
sortBy(pts, 'y'); // 정상, 위와 동일
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // 정상, 'x' | 'y'는 'x' | 'y'를 상속
sortBy(pts, 'z'); // 'z' 형식의 인수는 'keyof Point'에 할당할 수 없음
