import "./Header.css";
import { memo } from "react";


const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header);
// export default memoizedHeader;
// 아래처럼 단축할 수 있다.

export default memo(Header);
