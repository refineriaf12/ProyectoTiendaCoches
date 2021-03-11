'use strict';


this.addEventListener('DOMContentLoaded', () => {    // q escuche cuando el DOM cargue entero, incluido css
    const questions = document.querySelectorAll('.question');  // metemos en una const todas las clases question
    questions.forEach((question) => question.addEventListener('click', () => {  // foreach para q busque lo que lleva en parametros, en este caso clase question, despues creamos escuchador del evento click                                                           
        if (question.parentNode.classList.contains('active')) {   //  cuando hagamos click q busque todas las clases Active en los questions
            question.parentNode.classList.toggle('active')       // cuando las tenga, el toggle dice q si no la hay q la añada
        } else {   
            questions.forEach(question => question.parentNode.classList.remove('active'))  // le decimos q busque todas las question y q las quite 
            question.parentNode.classList.add('active')  // para despues agregarlas
        }
    }))
})


// el if la añade y el else la borra, pero si no la encuentra tiene q añadirla para despues borrarla

// lo q hace es q nunca esten dos preguntas abiertas a la vez