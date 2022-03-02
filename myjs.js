
 
 document.addEventListener("DOMContentLoaded", function() {

    console.log("dom content loaded");
    

// resseting the animation but this isnt what im looking for

    const animationEndWords = document.querySelector(".words");
    animationEndWords.onanimationend = () => {
        animationEndWords.classList.remove("animate__headShake");
        setTimeout(() => {animationEndWords.classList.add("animate__headShake")},50);
        

    };
   
    const animationEndCurrency = document.querySelector(".currency");
    animationEndCurrency.onanimationend = () => {
        animationEndCurrency.classList.remove("animate__headShake");
        setTimeout(() => {animationEndCurrency.classList.add("animate__headShake")},50);

    };
// end


// transition toggle() function
    function toggle()  {

        let check1 = document.querySelector('#btncontrolwords');
        let check2 = document.querySelector('#btncontrol');
        let toggle = document.querySelector('.numberToWord');
        let choice_cards = document.querySelector('#choice-cards');

        // transition
        check1.addEventListener('change', function() {
            if (check1.checked) {
                console.log('test');
                choice_cards.style.setProperty("animation-play-state", "running")
                setTimeout(() => {choice_cards.style.display = "none"}, 2450);
                toggle.style.setProperty("animation-play-state", 'running');
                
            } 
        })
        check2.addEventListener('change', function () {
            if (check2.checked) {
                choice_cards.style.setProperty("animation-play-state", "running")
                setTimeout(() => {choice_cards.style.display = "none"}, 2450);
                toggle.style.setProperty("animation-play-state", 'running');
            }
        })
        
    };
    toggle();
// end
   
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

    const goBackButton = document.querySelector("#goBackBtn");
    goBackButton.addEventListener('click', function () {
        const ntwClass = document.querySelector(".numberToWord");
        ntwClass.classList.remove("animate__fadeIn");
        ntwClass.style.setProperty('animation-delay', '0s')
        ntwClass.classList.add("animate__fadeOut");
        setTimeout(() => {ntwClass.style.display = "none"}, 1500);

        let choice_cards = document.querySelector('#choice-cards');
       
        choice_cards.classList.add('animate__fadeIn');

    });
 //end
 });
