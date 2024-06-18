import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백 함수가 반환하는 함수 = cleanup, 정리 함수
    return () => {
      console.log("unmount");
    };
  }, []); // 빈 배열을 전달하면 마운트가 될 때 실행되고 언마운트될 때 종료된다.  
  return <div>짝수입니다</div>;
};

export default Even;