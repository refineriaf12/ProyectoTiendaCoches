const {createNewUser} = require('../controllers/user/indexUser');


test('poder registrarse sin problemas',  async () => {
    const text = createNewUser();
     await expect(text).toBeTruthy();
  });

  

  
   // test('Verificar que el array',()=>{
   //     expect(createNewUser()).toContain('a');
   // });


   // test('doAsync llama a ambos callbacks',  () => {
   //    expect.assertions(6);
   //    function createNewUser(name) {
   //      expect(name).toBeTruthy();
   //    }
   //    function createNewUser(surname) {
   //      expect(surname).toBeTruthy();
   //    }
   //    function createNewUser(dniNumber) {
   //       expect(dniNumber).toBeTruthy();
   //     }
   //     function createNewUser(userName) {
   //       expect(userName).toBeTruthy();
   //     }
   //     function createNewUser(email) {
   //       expect(email).toBeTruthy();
   //     }
   //     function createNewUser(password) {
   //       expect(password).toBeTruthy();
   //     }
    
   //     doAsync(createNewUser);
   //  });


   // test('prepareState prepara un estado valido', () => {
   //    expect.hasAssertions();
   //    prepareState(state => {
   //      expect(createNewUser(estado)).toBeTruthy();
   //    });
   //    return waitOnState();
   //  });

   // test("creating a user", async (done) => {
   //    const attributes = {name: "a",surname:"b",dniNumber:"c",username:"d",email: "e", password: "f"};
   //    const { name,surname,dniNumber,userName,email,password } = await createNewUser(attributes);
   //    expect(attributes).toMatchObject({name,surname,dniNumber,userName,email,password});
   //    done();
   //  });


   // describe("test user sign up", () => {
   //    it("can sign up as new user", async () => {
   //      // we will write this function next
   //      const inbox = await createNewUser();
   //      await page.type('input[name="name"]', name);
   //      await page.type('input[name="surname"]', surname);
   //      await page.type('input[name="dniNumber"]', dniNumber);
   //      await page.type('input[name="username"]', userName);
   //      await page.type('input[name="email"]', inbox.email);
   //      await page.type('input[name="password"]', password);
        
   //    });
   //  });

   // describe('stringMatching en arrayContaining', () => {
   //    const esperado = createNewUser(surname="a");
   //    it('hace match incluso si se reciben elementos adicionales', () => {
   //      expect(['a', 'b', 'c'])
   //        .toEqual(expect.arrayContaining(esperado));
   //    });
   // });