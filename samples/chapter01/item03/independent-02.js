function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
var test33 = { width: 30, height: 30 };
var result = calculateArea(test33);
console.log(result);
