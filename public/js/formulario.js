'use strict'

const formRent = document.querySelector("#formRent");

var formOk = true;

function validateForm(event){
    event.preventDefault();

    if(formOk){
        formRent.submit();
        alert("Creado nuevo coche para alquilar");
    }
}
    
formRent.addEventListener("submit",validateForm);