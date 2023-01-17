/** @jest-environment jsdom */
import {render} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe('prueba en FirstApp', () => { 

    test('debe de hacer match con el snapshot', () => {  
        const title = "Hola, soy goku";
        render(<FirstApp title={title}/>)
    });
 });