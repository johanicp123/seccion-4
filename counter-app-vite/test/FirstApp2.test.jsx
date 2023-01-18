/** @jest-environment jsdom */
import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe("prueba en FirstApp", () => {

  const title ="Hola, soy goku";

  test('debe de hacer match con el snapshot', () => { 
      const {container}= render(<FirstApp title={title}/>);
      expect(container).toMatchSnapshot();
   });

   test('debe de mostrar el mensaje hola soy goku', () => { 
      render(<FirstApp title={title}/>);
      expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el tituto en un h1', () => { 
      render(<FirstApp title={title}/>);
     });
});
