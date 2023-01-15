import React from "react";
import  ReactDOM from "react-dom/client";
import {App} from './FirstApp';
import { HelloApp } from "./HelloApp";
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <HelloApp/>
    </React.StrictMode>
);
