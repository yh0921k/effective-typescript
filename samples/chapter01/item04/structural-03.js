"use strict";
exports.__esModule = true;
var structural_01_1 = require("./structural-01");
function normalize(v) {
    var length = (0, structural_01_1.calculateLength)(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length
    };
}
var result = normalize({ x: 3, y: 4, z: 5 });
console.log(result);
