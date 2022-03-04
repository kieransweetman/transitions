
 
 document.addEventListener("DOMContentLoaded", function() {

    console.log("dom content loaded");
    

// resseting the animation but this isnt what im looking for

//     const animationEndWords = document.querySelector(".words");
//     animationEndWords.onanimationend = () => {
//         animationEndWords.classList.remove("animate__swing");
//         setTimeout(() => {animationEndWords.classList.add("animate__swing")},50);
        

//     };
   
//     const animationEndCurrency = document.querySelector(".currency");
//     animationEndCurrency.onanimationend = () => {
//         animationEndCurrency.classList.remove("animate__swing");
//         setTimeout(() => {animationEndCurrency.classList.add("animate__swing")},50);

//     };
// // end


// // transition function
//     function transitionToConverter()  {

//         let check1 = document.querySelector('#btncontrolwords');
//         let check2 = document.querySelector('#btncontrol');
//         let ntwElement = document.querySelector('.numberToWord');
//         let choice_cards = document.querySelector('#choice-cards');

//         // transition

//         function checkboxChecker(element) {
//             element.addEventListener('change', function() {
//                 if(element.checked) {
//                     choice_cards.style.setProperty("animation-play-state", "running");
//                     setTimeout(() => {choice_cards.style.display = "none"}, 2450);
//                     ntwElement.style.setProperty("animation-play-state", "running");
//                 }
//             });
//         };
//         checkboxChecker(check1);
//         checkboxChecker(check2);
        
//     };
//     transitionToConverter();
// end
// 
//
   
// ntw input converter
    const input = document.querySelector("#number_to_format");
    const log = document.querySelector("#ntf_userOutput");
    const decimal = document.querySelector('#decimal_formatter')

    input.addEventListener("input", function () {
        //number to word formatter 
        writtenNumber.defaults.lang = "fr";
        
        let inputstring = input.value;

        if (inputstring.indexOf(".") > -1) {
            let newString = inputstring.split(".");
            let decimalPoint = newString.pop();
            let deci = decimalPoint.slice(0,2);
            log.textContent = writtenNumber(newString[0], {"avoidInNumberPlural": true}) + " euro et " + writtenNumber(deci, {"avoidInNumberPlural": true}) + " centimes";
        } else {
            log.textContent = writtenNumber(input.value, {"avoidInNumberPlural":true}) + " euro";
        }   
        
        decimal.textContent = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(input.value);

 });

 // return to card choices in progress 
 // a test, all of this is not very well coded.

    const goBackButton = document.querySelector("#goBackBtn");
    goBackButton.addEventListener('click', function () {
    });
 //end
 });
