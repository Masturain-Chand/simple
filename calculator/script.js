var is_first = 0;
var prev_value = 0;
var current_operator;
var current_value='0';

document.querySelector('.screen').value = '0';


function set_value(value){

  if (value === '0' || value=== '1' || value=== '2' || value=== '3' || value=== '4' || value=== '5' || value=== '6' || value=== '7' || value=== '8' || value === '9'){
    if(current_value == 0 || current_value == '0' || current_value == ''){
      current_value = '' + value;
    }
    else{
      current_value += value;
    }

    document.querySelector('.screen').innerText = current_value;
  }

  else if (value === '-' || value === '+' || value === '*' || value === '/' || value === '%'){

    if (current_operator){
      console.log('ok')
      equation = prev_value + current_operator + current_value;
      console.log(equation);
      res = eval(equation);
      document.querySelector('.screen').innerText = res;
      prev_value = res;
      current_value = '0';
      current_operator = value;
    }
    else{
      prev_value = current_value;
      current_value = '0'
      current_operator = value;
      document.querySelector('.screen').innerText = prev_value;
    }
  }
}

function delete_value(){
  current_value = document.querySelector('.screen').value;
  new_val = current_value.slice(0, -1);
  if(new_val === ''){
    new_val = '0';
  }
  document.querySelector('.screen').innerText = new_val;
}

function make_result(){
  value = document.querySelector('.screen').innerText;
  try{
    document.querySelector('.screen').innerText = eval(value);
  } 
  catch (error){
    document.querySelector('.screen').innerText = 'Invalid Input'
  }
  
}

function all_delete() {
  document.querySelector('.screen').innerText = '0';
  current_value = '0';
  prev_value = '0';
}

function equal(){
  if (prev_value && current_value && current_operator){
    document.querySelector('.screen').innerText = eval(prev_value + current_operator + current_value);
  }
  else{
    document.querySelector('.screen').innerText = current_value;
  }
  
}









/*


// // Select all the from document using queryselectAll
// var keys = document.querySelectorAll('#calculator span');
// // Define operators
// var operators = ['+', '-', 'x', '÷', '^'];
// // Set decimal flag for use later
// var decimalAdded = false;


// // loop through all keys
// for(var i = 0; i < keys.length; i++) {
//   //add onclick event to the keys
//   keys[i].onclick = function(e) {
//     // Get the input and button values
//     var input = document.querySelector('.screen');
//     var inputVal = input.innerHTML;
//     var btnVal = this.innerHTML;
    
//     // If clear key is pressed, erase everything
//     if(btnVal == 'C') {
//       input.innerHTML = '';
//       decimalAdded = false;
//     }
    
//     // If eval key is pressed, calculate and display the result
//     else if(btnVal == '=') {
//       var equation = inputVal; //append equation to variable
//       var lastChar = equation[equation.length - 1]; //target the end of the eval string
      
//       // Use regex to replace all instances of x, ÷, ^ with *, / and **
//       equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');
      
//       //Use regex to remove decimals from the end of an equation
//       if(operators.indexOf(lastChar) > -1 || lastChar == '.')
//         equation = equation.replace(/.$/, '');
      
//       // use javascript's eval function to get the result
      
//       if(equation)
//         input.innerHTML = eval(equation); 
//         decimalAdded = false;
//     }
    
//     // Javascript checks

//     // No two operators should be added consecutively.    
//     else if(operators.indexOf(btnVal) > -1) {
//       // Get the last character from the equation
//       var lastChar = inputVal[inputVal.length - 1];
      
//       // Only add operator if input is not empty 
//       if(inputVal != '' && operators.indexOf(lastChar) == -1) 
//         input.innerHTML += btnVal;
      
//       // Allow minus operator if the string is empty
//       else if(inputVal == '' && btnVal == '-') 
//         input.innerHTML += btnVal;
      
//       // Replace the last operator (if exists) with the newly pressed operator
//       if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
//         input.innerHTML = inputVal.replace(/.$/, btnVal);
//       }
      
//       decimalAdded =false;
//     }
//     // allow decimal point input
//     else if(btnVal == '.') {
//       if(!decimalAdded) {
//         input.innerHTML += btnVal;
//         decimalAdded = true;
//       }
//     }
    
//     // if any other key is pressed, just append it after the decimal
//     else {
//       input.innerHTML += btnVal;
//     }
    
//     // prevent page jumps
//     e.preventDefault();
//   } 
// }

// //adding keyboard input functionality
// document.onkeydown = function(event) {

//   var key_press = String.fromCharCode(event.keyCode);
//   var key_code = event.keyCode;
//   var input = document.querySelector('.screen');
//   var inputVal = input.innerHTML;
//   var btnVal = this.innerHTML;
//   var lastChar = inputVal[inputVal.length - 1];
//   var equation = inputVal;
//   // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
//   equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

 // Target each keypress and update the input screen
  
    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press; 
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press; 
  }
    if(key_press==4) {
      input.innerHTML += key_press; 
  }
    if(key_press==5) {
      input.innerHTML += key_press; 
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==7) {
      input.innerHTML += key_press; 
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==9) {
      input.innerHTML += key_press; 
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
  
//   // Cature operators and prevent from addint two consecutuve operators
  
//     if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
//       document.querySelector('.screen').innerHTML += '+';
//   }
//     if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
//       document.querySelector('.screen').innerHTML += '-';
//   }
//     if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
//       document.querySelector('.screen').innerHTML += 'x';
//   }
//     if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
//       document.querySelector('.screen').innerHTML += '÷';
//   }
//     if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
//       document.querySelector('.screen').innerHTML += '^';
//   }
//     if(key_code==13 || key_code==187 && event.shiftKey == false) {
//       input.innerHTML = eval(equation);
//       //reset decimal added flag
//       decimalAdded =false;
//   }
//     if(key_code==8 || key_code==46) {
//       input.innerHTML = '';
//       decimalAdded = false;
//   }
// }*/