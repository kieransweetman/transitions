
 
 document.addEventListener("DOMContentLoaded", function() {
    
    console.log("dom content loaded");


// using inline to test now to keep this file clean.
// will transfer over onclick actions from html doc to this script 
//once i have a clear idea of how to organize 
// the functions and their scope.

//PROGRAM
    
    const toWord = document.querySelector(".card-converter.left");
    const toCurrency = document.querySelector(".card-converter.right");
    toWord.addEventListener("click", function() {
        const cards = document.querySelector("#choice-cards");
        const converter = document.getElementById('numberToWord');
        animationAdder(cards);

        cards.addEventListener('animationend', function() {
            cards.style.display = "none";
            animationRemover(cards);
            converter.style.display = 'flex';
            fadeInAnimation(converter);  
        })
        
        animationRemover(converter);
    });

    toCurrency.addEventListener("click", function() {
        const cards = document.querySelector("#choice-cards");

        animationAdder(cards)
        let converter = document.getElementById('numberToWord');

        cards.addEventListener('animationend', () => {
            cards.style.display='none'; 
            animationRemover(cards);
            

            fadeInAnimation(converter);
            converter.style.display='flex';
            animationRemover(converter);
        })

    })

    function animationAdder(element) {
        element.style.setProperty('animation', 'fadeOut');
        element.style.setProperty('animation-play-state', 'running');
        element.style.setProperty('animation-duration', '2s')
        element.style.setProperty('--animate-repeat', "")
    }
    function animationRemover(element) {
        element.style.setProperty('animation', '');
        element.style.setProperty('animation-play-state', '');
        element.style.setProperty('animation-duration', '')
        element.style.setProperty('--animate-repeat', '' )
    }
   
    function fadeInAnimation(element) {
        element.style.setProperty('animation', 'fadeIn');
        element.style.setProperty('animation-play-state', 'running');
        element.style.setProperty('animation-duration', '2s')
        element.style.setProperty('--animate-repeat', "" )
    }

// ntw input converter
    const input = document.querySelector("#number_to_format");
    

    input.addEventListener("input", function () {
        //number to word formatter 
        writtenNumber.defaults.lang = "fr";
        
        let inputstring = input.value;
        const log = document.querySelector("#ntf_userOutput");
        const decimal = document.querySelector('#decimal_formatter');

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



 });
