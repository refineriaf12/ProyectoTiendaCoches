const {createNewUser} = require('../controllers/user/indexUser');


test('poder registrarse sin problemas',  async () => {
    const text = createNewUser();
     await expect(text).toBeTruthy();
  });

  test('tenner un nombre valido', async () => {
     const name  = createNewUser();
     await expect(name).toBeTruthy();
  });