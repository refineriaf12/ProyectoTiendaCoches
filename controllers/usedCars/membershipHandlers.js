'use strict';

const Membership = require('../../models/Membership')

module.exports = {
    create: (userId, userMembership) => {
        const newMembership = new Membership({ idUser:userId, membershipType: userMembership}).save();},
        
    list: async () =>{
        const allMemberships = await Membership.find().lean();
        return allMemberships;
    },
    listOne: async (id) =>{
        const membership = await Membership.findById(id).lean();
        return membership;
    },
    update: async (id, data) =>{
        const membershipUpdated = await Membership.findByIdAndUpdate(id, data, { new: true}).lean();
        return membershipUpdated;
    },
    delete: async (id) => {
        const membershipDeleted = await Membership.findByIdAndDelete(id).lean();
        return membershipDeleted;
    }
}