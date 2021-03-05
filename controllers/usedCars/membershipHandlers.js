'use strict';

const Membership = require('../../models/Membership')

module.exports = {
    create: (userId, userMembership) => {
        const newMembership = new Membership({ idUser:userId, membershipType: userMembership}).save();},
        
    list: async () =>{
        const allMemberships = await Membership.find().lean();
        return allMemberships;
    },
    
    delete: async (id) => {
        const membershipDeleted = await Membership.findByIdAndDelete(id).lean();
        return membershipDeleted;
    }
}