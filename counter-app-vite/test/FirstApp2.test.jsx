/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe("prueba en FirstApp", () => {
  const title = "Hola, soy goku";
  const subtitle = "soy un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el mensaje hola soy goku", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe mostrar el tituto en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
