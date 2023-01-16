import React from "react";
import  ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import {App} from './FirstApp';
import { HelloApp } from "./HelloApp";
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <HelloApp/>
        <CounterApp value={5}/>
    </React.StrictMode>
);
