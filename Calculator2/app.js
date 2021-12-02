const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
const equalEl = document.querySelector('.equal');
const operationEl = document.querySelectorAll('.operator');

let dis1Num= '';
let dis2Num= '';
let result= '';
let lastOperation= '';

// this prevent having dot uncessary among the numbers
let haveDot= false; 

// looping through numbers with forEach and add Click eventlistener
numbersEl.forEach( number => {

    number.addEventListener('click', (e) => {
    
            // condition to have dot in our number 
            if( e.target.innerText === '.' && !haveDot){
                haveDot = true;   

            } // helps to prevent the addition of dot after the inital dot
            else if( e.target.innerText === '.' && haveDot){
                return;
            }


            /* += means to concatenate i.e join the e.target.innerText (numbers) and
            we're storing our numbers in dis2Num */

            dis2Num += e.target.innerText;  // NOTE --> here, the number is a string not a number <--

            // to have it display, we equate  display2El.innerText to dis2Num
            display2El.innerText = dis2Num


    });
      
});


// looping through operators with  forEach and add Click eventlistener
operationEl.forEach( operation => {
    
    operation.addEventListener('click', (e) => {
        
        /* firstly we need to check if there's a number
        before an operatoion to take place */
        if (!dis2Num) return; // to check if there's a number!!!
        haveDot = false; //

        // grab the operator sign in DOM and store in operationName
        const operationName = e.target.innerText;

        // secondly, this condition will be check and if present, perform the operation
         if (dis1Num && dis2Num && lastOperation){ // if we dont have this three items show the outcome at'result'
             mathOperation();
         }else{
             result = parseFloat(dis2Num) // the parseFloat help to return dis2Num to a number.. As well in decimal form [check line 181]
         }


         clearVar(operationName); // the clearVar is called when the operator is clicked
         lastOperation = operationName;  //
    });
});

// this function helps to move number to dis1Num from dis2Num when an operator is clicked
function clearVar(name = '') {

     /* firstly  concatenate i.e join the dis2Num with operation and
    we're storing our numbers in dis1Num */
    dis1Num += dis2Num+ ' '+name+ ' ' ; // name is the name of operationwe want to do

    // to have it display, we equate  display1El.innerText to dis1Num
    display1El.innerText = dis1Num;
    display2El.innerText = ' '; // this will clear the display-2 when an operator is clicked
    dis2Num = ''; // this clear number stored in dis2Num when an operator is clicked so that a new number is added
    tempResultEl.innerText = result; // this is use to enable the result variable 

}

function mathOperation(){
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }

}


equalEl.addEventListener('click', (e) => {
    //firstly, check for this conditions
    if (!dis1Num || !dis2Num) return;
    haveDot = false;  // this prevent having dot uncessary among the numbers
    mathOperation();
    clearVar(); // this will clear the number in display2El for mathoperation when the equal-to is clicked and result is shown at tempResult
    display2El.innerText = result; // this will make the display2El to show the result after  the number for mathoperation is cleared
    tempResultEl.innerText = '';  //this will clear the final answer in tempResult after being display in  display2El
    dis2Num = result; // Now the result will be store in dis2Num
    dis1Num = '';
});


clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0'; // clear value showing in the display then Zero apears 
    display2El.innerText = '0'; // clear value showing in the display then Zero apears 
    tempResultEl.innerText = '0'; // clear value showing in the display then Zero apears 
    dis1Num = ''; // clear value store in the variable
    dis2Num = ''; // clear value store in the variable
});

clearLastEl.addEventListener('click', (e) => {
    display2El.innerText = ''; // clear value showing in the display then Zero apears 
    dis2Num = ''; // clear value store in the variable
});


window.addEventListener('keydown', (e) => {
if (e.key==='0' ||
    e.key==='1' ||
    e.key==='2' ||
    e.key==='3' ||
    e.key==='4' ||
    e.key==='5' ||
    e.key==='6' ||
    e.key==='7' ||
    e.key==='8' ||
    e.key==='9' ||
    e.key==='.' 
) {
   clickButtonEl(e.key); 
} else if (
    e.key==='*' ||
    e.key==='+' ||
    e.key==='-' ||
    e.key==='%' 
){
    
}

    
});


