// setTimeout() = invoke a function after a milisecond
// asynchronous function (doesn't pause execution)


let firstName = "John"; // passing argument into setTimeout()
let vocative = "mate";


// when the setTimeout is invoked, it will set an ID.
// So we need to place it into a variable.
let timer1 = setTimeout(firstMassage,3000, firstName, vocative) 
let timer2 = setTimeout(secondMassage,6000)
let timer3 = setTimeout(thirdMassage,9000)

function firstMassage(firstName,vocative){
  alert(`${firstName} you wait for 3 second ${vocative}`);
}
function secondMassage(){
  alert("you wait for 6 second");
}
function thirdMassage(){
  alert("You wait for 9 second");
}

// when myButton is cliked the function is done processing
// and will proceed to print alert
document.getElementById("myButton").onclick = function(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Thanks for waiting ${firstName}!`)
}