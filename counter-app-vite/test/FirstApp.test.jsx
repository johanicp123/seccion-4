/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe("prueba en FirstApp", () => {
  //test('debe de hacer match con el snapshot', () => {
  //   const title = "Hola, soy goku";
  // const {container} = render(<FirstApp title={title}/>)
  // expect(container).toMatchSnapshot();
  // });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola, soy goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    //const h1 = container.querySelector("h1");
    //expect(h1.innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy goku";
    const subtitle = "soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
