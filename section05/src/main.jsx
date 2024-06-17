import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const Hello = () => {
//     return <div>hello</div>;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> // 관례 상 app 컴포넌트를 root 컴포턴트라 부름
)
