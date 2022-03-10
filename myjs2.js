

document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById("container");
    const choiceCards = document.querySelectorAll("#card-converter");
    const numberToWord = document.getElementById("numberToWord");
    const input = document.querySelector("#number_to_format");  

    const div_information =document.querySelector('#information');
    const infoTitles = document.querySelectorAll('h2');
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');
    const desc = document.querySelector('p.desc');

    

   

    
    let count = 0;

    choiceCards.forEach(card => {
        card.addEventListener('click', function(card) {


            if (count <= 0){
                const tag = card.target;  
                inputConverter(tag);
                count += 1;
            } else {
                numberToWord.removeChild(numberToWord.lastElementChild);
                const tag = card.target;  
                inputConverter(tag);
                
            }
        })
    })
    
    // addEventListener('click', function(e){


    //             if (count <= 0){
    //                 const tag = e.target;  
    //             // fadeOut(choiceChards);
    //             // console.log(tag);
    //                 inputConverter(tag);
    //                 count += 1;
    //             } else {
    //                 numberToWord.removeChild(numberToWord.lastElementChild);
    //                 const tag = e.target;  
    //                 inputConverter(tag);
                    
    //             }

                
                
                
                   
    // });

    input.addEventListener("input", function () {
        //number to word formatter 
        writtenNumber.defaults.lang = "fr";
        
        let inputstring = input.value;
        const log = document.querySelector("#ntf_userOutput");
        const decimal = document.querySelector('#decimal_formatter');
        const userChoice = numberToWord.lastElementChild.getAttribute('id');
        
        if (userChoice == "ntf_userOutput") {
            
            console.log(li);
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



    

// to fix 
    function inputConverter(type) {
        const attrValue = type.getAttribute('value'); 
       
        console.log(attrValue);
        
        const p = document.createElement('p');
        if (attrValue == "Words") {

            frenchWordhistory();

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

        function frenchWordhistory() {
            infoTitles.forEach(title => {
                if (title === div_information.firstElementChild) {
                    title.textContent = "History of French numbers";
                    desc.textContent = "The reintroduction of a vigesimal system of counting by increments of 20 (e.g. soixante-dix '70' lit. 'sixty-ten'; quatre-vingts '80' lit. 'four-twenties'; quatre-vingt-dix '90' lit. 'four-twenty-ten') is due to North Germanic influence, first appearing in Normandy, in northern France.";

                    div_information.style.cssText = "display: flex; background-color: #FFFAF0; align-items: center; flex-wrap: wrap; flex-direction: row; justify-content: center; width: 970px; padding: 10px; border-style:solid; border-color: black;"

                    ul.style.display = "flex";
                    ul.style.gap = "15px";

                    
                    li.forEach(blurb => {
                        
                        blurb.style.flexShrink = '0';
                        blurb.style.width = "300px";
                    })
                    
                    li.forEach(blurb => {
                        if (blurb === ul.firstElementChild){
                            blurb.textContent = "A vigesimal or base-20 numeral system is based on twenty (in the same way in which the decimal numeral system is based on ten).";

                        } else if (blurb === ul.lastElementChild) {
                            blurb.textContent = "Vigesimal systems are also common in Africa, for example in Yoruba.";
                        } else {
                            blurb.textContent = "A reform during the French Revolution was proposed to unify the counting systems throughout the French hexagon. This counting system is simlar to the system 'score'(as in 'fourscore and seven years ago)."
                        }
                    }) 
                    
                }
            })
        }
        
});
// ----------------  functions ----------------------------


