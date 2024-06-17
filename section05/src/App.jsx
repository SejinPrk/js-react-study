import "./App.css";
import Header from "./components/Header.jsx";
// vite에서는 .jsx 확장자까지는 없어도 된다.
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {

  const buttonProps = {
    text : "메일",
    color : "red",
    a : 1,
    b : 2,
    c : 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} >
        <Header />
      </Button>
    </>
  );
}

export default App;
