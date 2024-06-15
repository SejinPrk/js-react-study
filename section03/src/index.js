// 방법 1
// const moduleData = require("./math"); 

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// 방법 2
const {add, sub} = require("./math");
console.log(add(1,2));
console.log(sub(1,2));
