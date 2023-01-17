import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en 11 Async', () => { 
    
    test('getImagen debe retornar un error si no se encotrourl de la imagen', async() => { 
        const resp = await getImagen();
        expect(resp).toBe("no se encontro la imagen");
     })
 })