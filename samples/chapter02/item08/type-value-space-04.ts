class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    console.log(shape); // 정상, 타입은 Cylinder
    console.log(shape.radius); // 정상, 타입은 number
  }
}
