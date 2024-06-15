// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// commonJS 방식
// module.exports = {
//   add, 
//   sub,
// };

// ES 모듈 방식
export { add, sub };
// 대신 function 앞에 export 키워드를 붙여도 된다.
// default: 기본 값으로 내보내기 -> 중괄호 없는 새로운 import문이 필요함
export default function multiply(a, b) {
  return a * b;
}