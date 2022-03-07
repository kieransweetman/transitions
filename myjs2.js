

document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById("container");
    const choiceChards = document.getElementById("choice-cards");
    const numberToWord = document.getElementById("numberToWord");
    const input = document.querySelector("#number_to_format");  
    const backBtn = document.querySelector("reset");  

    
    let count = 0;

    choiceChards.addEventListener('click', function(e){
                if (count <= 0){
                    const tag = e.target;  
                // fadeOut(choiceChards);
                // console.log(tag);
                    inputConverter(tag);
                    count += 1;
                } else {
                    numberToWord.removeChild(numberToWord.lastElementChild);
                    const tag = e.target;  
                    inputConverter(tag);
                    
                }

                
                
                
                   
    });

    input.addEventListener("input", function () {
        //number to word formatter 
        writtenNumber.defaults.lang = "fr";
        
        let inputstring = input.value;
        const log = document.querySelector("#ntf_userOutput");
        const decimal = document.querySelector('#decimal_formatter');
        const userChoice = numberToWord.lastElementChild.getAttribute('id');
        
        if (userChoice == "ntf_userOutput") {
            if (inputstring.indexOf(".") > -1) {
                let newString = inputstring.split(".");
                let decimalPoint = newString.pop();
                let deci = decimalPoint.slice(0,2);
                log.textContent = writtenNumber(newString[0], {"avoidInNumberPlural": true}) + " euro et " + writtenNumber(deci, {"avoidInNumberPlural": true}) + " centimes";
            } else {
                log.textContent = writtenNumber(input.value, {"avoidInNumberPlural":true}) + " euro";
            }   

        } else {
            decimal.textContent = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(input.value);
        }

 });




    function fadeIn(element){
        
            element.style.display = 'flex';
            element.style.animation = "fadeIn";
            element.style.animationDuration = '1.8s';
            element.addEventListener('animationend', () => {
                element.style.animation = "";
                element.style.animationDuration = "";   
    
        
    });
    }


    


    function fadeOut(element) {

        
            element.style.animation = "fadeOut";
            element.style.animationDuration = '1.8s';

            element.addEventListener('animationend', () => {
            element.style.animation = "";
            element.style.animationDuration = ""; 
            element.style.display = "none";
    
            })
        }
    

// to fix 
    function inputConverter(type) {
        const attrValue = type.getAttribute('value'); 
        const choiceChards = document.getElementById('choice-cards');
        const ntf_userOutput = document.getElementById('ntf_userOutput');
        const decimal_formatter = document.getElementById('decimal_formatter');
        console.log(attrValue);
        
        const p = document.createElement('p');
        if (attrValue == "Words") {
            p.setAttribute('id', 'ntf_userOutput');
            p.style.display = "flex";
            numberToWord.appendChild(p);
            fadeIn(numberToWord);
        } else {
            p.setAttribute('id', "decimal_formatter");
            p.style.display = "flex";
            numberToWord.appendChild(p);
            fadeIn(numberToWord);
        }
                
        }
});
// ----------------  functions ----------------------------



