import useInput from "./../hooks/useInput";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//    const state = useState(); // 바로 오류 출력됨
// 2. 조건부(조건문, 반복문 내부에서)로 호출될 수는 없다. 
  // if (true) { //  서로다른 hook들의 호출 순서가 엉망이 되어 내부적인 오류가 발생할 수 있다. 
  //   const state = useState();
  // }
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다. 


const HookExam = () => { 
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput(); // 여러번 반복해서 사용할 수도 있다. 

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;