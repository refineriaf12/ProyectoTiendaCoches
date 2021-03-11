'use strict';

let numberOfDays = 0;

function caculateDays(){
	let beginDate = new Date(document.querySelector('#leaseDate').value);
    console.log(beginDate);
	let endDate = new Date(document.querySelector('#leaseReturnDate').value);
    console.log(endDate);
	let today = new Date();
	console.log(today);
	
	if (today < beginDate && endDate > beginDate){
		let rentalDays= endDate.getTime() - beginDate.getTime();
		numberOfDays = Math.round(rentalDays/(1000*60*60*24));
		console.log( numberOfDays);}
	else{
		alert('fechas incorrectas');
	}
	
};

const button = document.querySelector('#confirmDates');
button.addEventListener('click', caculateDays);

let pricePerDay= parseInt(document.querySelector('#leasingPrice').textContent);
console.log(pricePerDay);

function calculatePrice(a, b){
    const finalPrice = a * b;
    console.log(finalPrice);
	return finalPrice;
}

button.addEventListener('click', function(){
	document.querySelector('#finalPrice').value = calculatePrice(numberOfDays, pricePerDay);
});
