import React from 'react';
import { render } from 'react-dom';
// 引入应用程序，并渲染出来
import App from './app/app.jsx';

// 渲染
render(<App page="home"></App>, document.getElementById('app'))