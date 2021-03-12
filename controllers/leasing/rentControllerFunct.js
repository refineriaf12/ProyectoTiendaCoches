"use strict";

const {carUpdate} = require('./carControllerFunct');
const Rent = require("../../models/Rent");

function rentUpdate(rentsList) {
  const today = new Date().toLocaleDateString();
  rentsList.forEach(async (element) => {
    if (element.leaseReturnDate.toLocaleDateString() < today) {      
      await carUpdate(element.carId, { availability: "yes" });
    }
  });
}
// function getSingleRent(id){
//   return Rent.findById(id).lean();    
// }

module.exports = { rentUpdate };