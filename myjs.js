
 
 document.addEventListener("DOMContentLoaded", function() {
    
    console.log("dom content loaded");


// using inline to test now to keep this file clean.
// will transfer over onclick actions from html doc to this script 
//once i have a clear idea of how to organize 
// the functions and their scope.

//PROGRAM
    const cards = document.querySelector("#choice-cards");

    const toWord = document.querySelector(".card-converter.left");

    toWord.addEventListener("click", function() {
        document.querySelector('#numberToWord').style.display='flex';
        document.querySelector('#choice-cards').style.display='none'; 
        document.querySelector('#ntf_userOutput').style.display='flex';

    });
    const toCurrency = document.querySelector(".card-converter.right");
    toCurrency.addEventListener("click", function() {
        document.getElementById('numberToWord').style.display='flex'; 
        document.getElementById('choice-cards').style.display='none'; 
        document.getElementById('decimal_formatter').style.display='flex';
    })

   

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
