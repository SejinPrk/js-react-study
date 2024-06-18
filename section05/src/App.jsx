import "./App.css";
import {useState} from "react";

function App() {
  const [count, setCount]= useState(0);
  const [light, setLight] = useState("OFF");
  // let light = "OFF" 
  // JS에서처럼 let 변수를 선언하지 않고 state를 쓰는 이유가 뭘까?

  return (
  <>
    <div>
      <h1>{light}</h1>
      <button 
        onClick= { () => {
          setLight(light === "ON"? "OFF" : "ON");
          // light = light === "ON" ? "OFF" : "ON"
          // 리렌더링이 되지 않기 때문에 버튼을 아무리 눌러도 상태가 바뀌지 않는다. 
        }}
        >
          {light === 'ON' ? "끄기" : "켜기"} 
        </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button 
        onClick={ ()=> {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  </>)
}

export default App;
