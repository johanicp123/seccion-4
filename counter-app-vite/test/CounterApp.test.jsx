import { CounterApp } from "../src/CounterApp";
import {render,screen} from '@testing-library/react';

describe('pruebas en el counterApp', () => { 
    test('debe de hacer match con el snapshot', () => { 
        const {container } = render(<CounterApp value={10}/>);
        expect(container).toMatchSnapshot();
     });

     test('debe de mostrar el valor inicial de 100 conuter app', () => { 
        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();
      })
 });
 