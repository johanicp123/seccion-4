import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("pruebas en 09-promesas", () => {
  test("getheroresasync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getheroresasync debe de tener un error si hero no existe", () => {
    const id = 100;
    getHeroeByIdAsync(id)
    .catch(error => {
        expect(error).toBe(`no se enconotro heroe con${id}`);
    
    });
  });
});
