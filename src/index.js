import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './style.css';
const App = () => (
  <div className="hello">
    你好,世界!!!这是我的生活!!!没有人能阻挡我前进的步伐!干！!!!!
    <Button type="danger">GO</Button>
  </div>
)

ReactDOM.render(
  <App />
  ,document.getElementById('root')
)