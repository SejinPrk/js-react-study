// 1. CommonJS
// 방법 1
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 방법 2
// const {add, sub} = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// 2. ES Module
// import { add, sub } from "./math.js";
// import mul from "./math.js";
// default 함수는 이름을 변경하고 중괄호가 없어도 된다.
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

// 동일한 경로로부터 값을 받아오는 여러 개의 import 문은 아래처럼 합칠 수 있다.
// import mul, { add, sub } from "./math.js";

// 라이브러리 실습 - 경로가 아닌 이름만 가져온다. 
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// 라이브러리의 패키지를 삭제했을 경우 터미널에 npm i 또는 npm install을 입력해 이전에 dependencies에 기록된 라이브러리를 재설치해서 불러올 수 있다. 
// 그러므로 코드를 공유해야 하는 상황에서 무거운 node_modules 폴더는 삭제하고 공유해도 된다. 