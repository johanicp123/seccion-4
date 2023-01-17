import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("pruebas en 08-imp-exp", () => {
  test("debe rertonar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("debe rertonar un undefined si no existe el ID", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toBeFalsy();
  });
});

describe("pruebas en 08-imp-exp", () => {
    test("debe rertonar un heroe DC", () => {
      const owner = "DC";
      const heroes = getHeroesByOwner(owner);
      console.log(heroes);
      expect(heroes.length).toBe(3);
      expect(heroes).toEqual(  [
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ])
    });
  
    test("debe rertonar un heroe MARVEL", () => {
      const marvel = "Marvel";
      const heroes = getHeroesByOwner(marvel);
      console.log(heroes);
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(  
        [{ id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }])
    });
  });
  
