'use strict'
// Iniciamos la funcion tras cargar la página newseat
window.onload = function addClass(){
  //almacenamos el slider en una constante
  var carouselS = document.querySelector('.O-slider__slidesSale');

  //almacenamos las slides en una constante y las convertimos en un array
	var seatsS = [...document.querySelectorAll(".M-slider__listItemSale")];

  //si existen slides, añadimos a la primera la clase -is-ref
	if(carouselS !== null){
    seatsS[0].classList.add("-is-refS");
  }
  //creamos evento onclick que ejecuta la funcion delegate con los parametros Filter y Handler
  document.addEventListener("click", delegateS(toggleFilterS, toggleHandlerS));
  //filtro para ejecutar la funcion sobre los elementos que nos interesen
  function delegateS(criteria, listener) {
    //pasamos un parametro a una funcion anonima
    return function(eS) {
      //almacenamos el parametro objetivo en una variable
      var elS = eS.target;

      do {
        //indicamos que si el parametro no cumple el criterio la funcion continue
        if (!criteria(elS)) {

         continue;

        }
        //delegamos la ejecucion de la funcion hasta que se cumple el criterio
        eS.delegateTarget = elS;
        //ejecutamos la funcion cuando se inicia la llamada al listener
        listener.call(this, eS);

        return;
      
      }while ((elS = elS.parentNode));

    };

  }
  //hacemos un filtro para seleccionar los elementos del DOM que nos interesan
  function toggleFilterS(elemS) {
    //iniciamos la funcion pasandole un parametro vacio e indicandole que nos devuelva todos los elementos html que coincidan con el elemento que nos interesa, en este caso una clase
    return (elemS instanceof HTMLElement) && elemS.matches(".M-slider__buttonS");
    // OR
    // For < IE9
    // return elem.classList && elem.classList.contains('btn');
  }
   //funcion de gestion de eventos
  function toggleHandlerS(eS) {
    //indicamos que al iniciarse el evento nos cree una variable vacia
    var newSeatS;
    //almacenamos en una variable el elemento que queremos modificar
    var elS = document.querySelector('.-is-refS');
    //almacenamos en otra el control del slider que estamos usando en ese momento
    var currSliderControlS = eS.delegateTarget;
    // e.target inicia el evento, e.current.target es el listener
    elS.classList.remove('-is-refS');
    //eliminamos la clase asignada
    if (currSliderControlS.getAttribute('data-toggle') === 'nextS') {
      //indicamos que si pulsamos el boton next, asigne a la variable vacia el siguiente elemento del dom
      newSeatS = next(elS);

      carouselS.classList.remove('-is-reversingS');
      //si existe, elimina la clase -is-reversing
    }else {
      //si pulsamos el otro boton, selecciona el elemento anterior del dom
      newSeatS = prev(elS);
      //y añade la clase -is-reversing si no existe
      carouselS.classList.add('-is-reversingS');

    }
  
    //añade a la clase vacia (que ahora almacena el elemento siguiente o el anterior del dom) la clase -is-ref
    newSeatS.classList.add('-is-refS');  
    //añade el estilo "order" a la clase -is-ref y lo posiciona en primer lugar
    newSeatS.style.order = 1;
    //a partir de el, le da posiciones al resto de elementos del dom
    for (var i = 2; i <= seatsS.length; i++) {

      newSeatS = next(newSeatS);

      newSeatS.style.order = i;

    }
    //eliminamos la clase -is-set para que no haya conflictos al movernos por el carrusel
    carouselS.classList.remove('-is-setS');
    return setTimeout(function() {
      //ejecutamos la funcion de añadir clase con un retardo de 50ms para que de tiempo a quitar la anterior antes de añadir la nueva
      return carouselS.classList.add('-is-setS');
      
    }, 50);
    //seleccionamos el siguiente elemento del carrusel, de no haberlo, volvemos al primero
    function next(elS) {

      if (elS.nextElementSibling) {

        return elS.nextElementSibling;

      }else {

        return carouselS.firstElementChild;

      }

    }
    //seleccionamos el anterior elemento del carrusel, de no haberlo, volvemos al ultimo
    function prev(elS) {

      if (elS.previousElementSibling) {

        return elS.previousElementSibling;

      } else {

        return carouselS.lastElementChild;

      }	

    };
  }
  


    //Carrusel Leasing
    var carouselL = document.querySelector('.O-slider__slidesLeasing');

    var seatsL = [...document.querySelectorAll(".M-slider__listItemLeasing")];

    if(carouselL !== null){
      seatsL[0].classList.add("-is-refL");
    }

    document.addEventListener("click", delegateL(toggleFilterL, toggleHandlerL));
    
    function delegateL(criteria, listener) {
      
      return function(eL) {
        
        var elL = eL.target;

        do {
          
          if (!criteria(elL)) {

          continue;

          }
        
          eL.delegateTarget = elL;
        
          listener.call(this, eL);

          return;
        
        }while ((elL = elL.parentNode));

      };

    }

    function toggleFilterL(elemL) {
    
      return (elemL instanceof HTMLElement) && elemL.matches(".M-slider__buttonL");
      // OR
      // For < IE9
      // return elem.classList && elem.classList.contains('btn');
    }
    
    function toggleHandlerL(eL) {
    
      var newSeatL;
    
      var elL = document.querySelector('.-is-refL');
      
      var currSliderControlL = eL.delegateTarget;
    
      elL.classList.remove('-is-refL');
    
      if (currSliderControlL.getAttribute('data-toggle') === 'nextL') {
      
        newSeatL = next(elL);

        carouselL.classList.remove('-is-reversingL');
      
      }else {
      
        newSeatL = prev(elL);
      
        carouselL.classList.add('-is-reversingL');

      }
      
      newSeatL.classList.add('-is-refL');
      
      newSeatL.style.order = 1;

      for (var i = 2; i <= seatsL.length; i++) {

        newSeatL = next(newSeatL);

        newSeatL.style.order = i;

      }

      carouselL.classList.remove('-is-setL');

      return setTimeout(function() {
        
        return carouselL.classList.add('-is-setL');

      }, 50);

      function next(elL) {

        if (elL.nextElementSibling) {

          return elL.nextElementSibling;

        }else {

          return carouselL.firstElementChild;

        }

      }

      function prev(elL) {

        if (elL.previousElementSibling) {

          return elL.previousElementSibling;

        } else {

          return carouselL.lastElementChild;

        }	

      }
    }



      //carrusel Used
      var carouselU = document.querySelector('.O-slider__slidesUsed');
      var seatsU = [...document.querySelectorAll(".M-slider__listItemUsed")];

      if(carouselU !== null){
        seatsU[0].classList.add("-is-refU");
      }
      document.addEventListener("click", delegateU(toggleFilterU, toggleHandlerU));
          
      function delegateU(criteria, listener) {

        return function(eU) {
        
          var elU = eU.target;

          do {
          
            if (!criteria(elU)) {

            continue;

            }
          
            eU.delegateTarget = elU;
          
            listener.call(this, eU);

            return;
          
          }while ((elU = elU.parentNode));

        };

      }

      function toggleFilterU(elemU) {
    
        return (elemU instanceof HTMLElement) && elemU.matches(".M-slider__buttonU");
        // OR
        // For < IE9
        // return elem.classList && elem.classList.contains('btn');
      }

      function toggleHandlerU(eU) {

        var newSeatU;

        var elU = document.querySelector('.-is-refU');
        
        var currSliderControlU = eU.delegateTarget;

        elU.classList.remove('-is-refU');

        if (currSliderControlU.getAttribute('data-toggle') === 'nextU') {
        
          newSeatU = next(elU);

          carouselU.classList.remove('-is-reversingU');
        
        }else {
        
          newSeatU = prev(elU);
        
          carouselU.classList.add('-is-reversingU');

        }
        
        newSeatU.classList.add('-is-refU');

        newSeatU.style.order = 1;

        for (var i = 2; i <= seatsU.length; i++) {

          newSeatU = next(newSeatU);

          newSeatU.style.order = i;

        }

        carouselU.classList.remove('-is-setU');

        return setTimeout(function() {

          return carouselU.classList.add('-is-setU');

        }, 50);

        function next(elU) {

          if (elU.nextElementSibling) {

            return elU.nextElementSibling;

          }else {

            return carouselU.firstElementChild;

          }

        }

        function prev(elU) {

          if (elU.previousElementSibling) {

            return elU.previousElementSibling;

          } else {

            return carouselU.lastElementChild;

          }	

        }
      }
};