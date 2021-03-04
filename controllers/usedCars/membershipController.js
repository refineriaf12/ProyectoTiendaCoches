const membership = require('../../models/Membership');
const membershipHandlers = require('./membershipHandlers');

const userReserva= {_id:1, name: 'Paco', surname: 'Martinez', dniNumber: 77777, userName: 'El Paco' ,password: 123,
email: "cqqq", membership: 'Free', membershipExpirationDate: '01/01/01'};

module.exports = {
    formCreateMembership:  (req, res) =>{
        const user = userReserva;
        res.render('templates/usedCars/membership/membershipForm',{user})
    },

    createMembership: (req, res) =>{
        membershipHandlers.create(req.body);
        res.redirect('membership/')
    },
    listMemberships : async (req, res) =>{
        const allMemberships = await membershipHandlers.list();
        res.render('templates/usedCars/membership/membershipList', {allMemberships})
    },
    details: async (req, res) =>{
        const membership = await membershipHandlers.listOne(req.params._id);
        res.render('templates/usedCars/membership/membershipDetails', {membership})

    },
    update: async(req, res) =>{
        const updatedMenbership = await membershipHandlers.update(req.params._id, req.body);
        res.redirect('membership/', { updatedMenbership })
    },
    delete: async (req, res) =>{
        const deletedMembership = await membershipHandlers.delete(req.params.id);
        res.redirect(`membership/`)
    }

}
