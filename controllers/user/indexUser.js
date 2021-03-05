'use strict';

 const createNewUser=  async (request,response) => {
    const {name,surname,dniNumber,userName,email,password} = request.body;
    const newUser = new User ({name,surname,dniNumber,userName,email,password});
    await newUser.save();
    response.redirect("/login");

    if (
        !validateInput(name, true, false) ||
        !validateInput(surname, true, false) ||
        !validateInput(dniNumber, true, false) ||
        !validateInput(userName, true, false) ||
        !validateInput(email, true, false) ||
        !validateInput(password, true, false)
        )
                {
      return false;
           }
    
    };

  module.exports =(createNewUser)