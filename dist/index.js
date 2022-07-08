import './styles/index.scss';
import Button from "./components/Button";
import ReactDOM from "react-dom";
import React from "react";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Button, { className: 'jeremy', size: 'lg' }, "1111")), document.getElementById('root'));
export { default as Button } from "./components/Button";
