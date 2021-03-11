function carouselU(){
    var prueba = document.querySelector('.O-slider__slidesUsed');
   return prueba;
}

module.exports = {carouselU};

    //   var seatsU = [...document.querySelectorAll(".M-slider__listItemUsed")];

    //   if(carouselU !== null){
    //     seatsU[0].classList.add("-is-refU");
    //   }
    //   document.addEventListener("click", delegateU(toggleFilterU, toggleHandlerU));
          
    //   function delegateU(criteria, listener) {

    //     return function(eU) {
        
    //       var elU = eU.target;

    //       do {
          
    //         if (!criteria(elU)) {

    //         continue;

    //         }
          
    //         eU.delegateTarget = elU;
          
    //         listener.call(this, eU);

    //         return;
          
    //       }while ((elU = elU.parentNode));

    //     };

    //   }

    //   function toggleFilterU(elemU) {
    
    //     return (elemU instanceof HTMLElement) && elemU.matches(".M-slider__buttonU");
    //     // OR
    //     // For < IE9
    //     // return elem.classList && elem.classList.contains('btn');
    //   }

    //   function toggleHandlerU(eU) {

    //     var newSeatU;

    //     var elU = document.querySelector('.-is-refU');
        
    //     var currSliderControlU = eU.delegateTarget;

    //     elU.classList.remove('-is-refU');

    //     if (currSliderControlU.getAttribute('data-toggle') === 'nextU') {
        
    //       newSeatU = next(elU);

    //       carouselU.classList.remove('-is-reversingU');
        
    //     }else {
        
    //       newSeatU = prev(elU);
        
    //       carouselU.classList.add('-is-reversingU');

    //     }
        
    //     newSeatU.classList.add('-is-refU');

    //     newSeatU.style.order = 1;

    //     for (var i = 2; i <= seatsU.length; i++) {

    //       newSeatU = next(newSeatU);

    //       newSeatU.style.order = i;

    //     }

    //     carouselU.classList.remove('-is-setU');

    //     return setTimeout(function() {

    //       return carouselU.classList.add('-is-setU');

    //     }, 50);

    //     function next(elU) {

    //       if (elU.nextElementSibling) {

    //         return elU.nextElementSibling;

    //       }else {

    //         return carouselU.firstElementChild;

    //       }

    //     }

    //     function prev(elU) {

    //       if (elU.previousElementSibling) {

    //         return elU.previousElementSibling;

    //       } else {

    //         return carouselU.lastElementChild;

    //       }	

    //     }
    //   }

