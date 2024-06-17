import "./App.css";
import Header from "./components/Header.jsx";
// vite에서는 .jsx 확장자까지는 없어도 된다.
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
