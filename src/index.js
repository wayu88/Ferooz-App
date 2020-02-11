import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {App} from './component/App';
import './style/style.css'; // webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
        <App/>,
            document.getElementById('app')
);