function add(a: number, b: number): number;
function add(a: number, b: string): string;

function add(a, b) {
  return a + b;
}

const three = add(1, 2);
const twelve = add(1, '2');

console.log(three);
console.log(twelve);
