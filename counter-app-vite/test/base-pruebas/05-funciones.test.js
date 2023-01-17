import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('prueba en funciones', () => { 
    
    test("getUser debe de retorna un objeto",()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
});
});

test("getUser debe de retorna un objeto",()=>{
    const name = "Alberth";
    const testUser1 = {
        uid: 'ABC567',
        username: name
};

const user1 = getUsuarioActivo(name);

expect(testUser1).toStrictEqual(user1);
});