// CommonJS
// 방법 1
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 방법 2
// const {add, sub} = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES Module
import { add, sub } from "./math.js";
import mul from "./math.js";
// default 함수는 이름을 변경하고 중괄호가 없어도 된다.
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

// 동일한 경로로부터 값을 받아오는 여러 개의 import 문은 아래처럼 합칠 수 있다.
// import mul, { add, sub } from "./math.js";
