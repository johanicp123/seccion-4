import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('prueba en el archivo 02-template', () => { 
    test("get saludo debe retorna hola johani",()=>{
        const name = "Johani";
        const message= getSaludo(name);

        expect( message ).toBe(`Hola ${name}`);
    });
 });