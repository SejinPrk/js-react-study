import "./Main.css"; // 확장자명 .css없이 경로만 불러와도 된다.

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 
//    js 표현식? {10}, {number}처럼 한 줄의 코드가 특정한 값으로 평가될 수 있는 식
//    if문이나 for문을 중괄호 안에 작성하면 오류가 난다!
// 2. 숫자, 문자열, 배열 값만 렌더링된다. 
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 하나여야 한다.

const Main = () => {

  const user = {
    name : "박세진",
    isLogin : true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

//   return (
//     <>
//     { user.isLogin ? (
//       <div>로그아웃</div>
//     ) : (
//       <div>로그인</div>
//     )}
//     </>
//   );
 };

export default Main;