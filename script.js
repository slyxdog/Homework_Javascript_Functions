var containerdiv = document.body.querySelector(".container");
var yrlyMiles = document.body.querySelector(".yearlyMiles");
var cstGas = document.body.querySelector(".costGas");
var shwMPG = document.body.querySelector(".showMPG");
var but1 = document.body.querySelector(".b1");
var shwMPGa = document.body.querySelector(".showMPGa");
var shwMPGb = document.body.querySelector(".showMPGb");
var MPG;
var Miles;
var Gas;
//Variables

function asking (){
  var inputMiles = prompt("How many miles do you drive a year?");
  var inputGas = Number(prompt ("What is the cost for a gallon of gasoline?"));
  var inputMPG = Number(prompt ("What is your Car's MPG rating?"));
  Miles = inputMiles;
  Gas = inputGas;
  MPG = inputMPG;
  answer(Miles, Gas, MPG);
}

function answer (a, b, c){
  var Total0 = Number ((a/c)*b);
  var Total1 = Number((a/12)*b);
  var Total2 = Number((a/17)*b);
  var Total3 = Number((a/26)*b);
  var Total4 = Number((a/29)*b);
  
 yrlyMiles.innerHTML = "To drive a car with a miles per gallon rating of "+ c +" for "+ a +" miles at "+ b +" dollars per gallon would cost "+ Total0;
 cstGas.innerHTML = "To drive a car with a miles per gallon rating of "+ 12 +" for "+ a +" miles at "+ b + "per gallon would cost "+ Total1;
 shwMPG.innerHTML = "To drive a car with a miles per gallon rating of "+ 17 +" for "+ a +" miles at "+ b + "per gallon would cost "+ Total2;
 shwMPGa.innerHTML = "To drive a car with a miles per gallon rating of "+ 26 +" for "+ a +" miles at "+ b + "per gallon would cost "+ Total3;
 shwMPGb.innerHTML = "To drive a car with a miles per gallon rating of "+ 29 +" for "+ a +" miles at "+ b + "per gallon would cost "+ Total4; 
  
}


but1.addEventListener("click", function(){
  asking();
})