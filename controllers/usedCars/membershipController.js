const membership = require('../../models/Membership');
const membershipHandlers = require('./membershipHandlers');
const User = require('../../models/user');

const userPrueba= {_id:1, name: 'Paco', surname: 'Martinez', dniNumber: 77777, userName: 'El Paco' ,password: 123,
email: "cqqq", membership: 'Free', membershipExpirationDate: '01/01/01'};

module.exports = {
    formCreateMembership:  (req, res) =>{
        const user = userPrueba; //User.findById(req.params.id)
        res.render('templates/usedCars/membership/membershipForm',{user})
    },

    createMembership: async(req, res) =>{
        const userId = req.params.id;
        const membershipType = req.body.membershipType
        await membershipHandlers.create(userId, membershipType);
        
        userPrueba.membership = membershipType;// await User.findByIdandUpdate(userId, {membership: membershipType});
        
        res.redirect('/membership/')
    },
    listMemberships : async (req, res) =>{
        const allMemberships = await membershipHandlers.list();
        res.render('templates/usedCars/membership/membershipList', {allMemberships})
    },
 
    delete: async (req, res) =>{
        const _id = req.params.id;
        // console.log(_id);
        const deletedMembership = await membershipHandlers.delete(_id);
        res.redirect(`/membership/`)
    }

}
