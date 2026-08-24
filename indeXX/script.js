// message variable (String)
let message = "Your age is ";
 
// example Boolean
let pageLoaded = true;
 
console.log("JavaScript is working");
 
// function to calculate age with button
function calculateAge(){
 
let birthdate = document.getElementById("birthdate").value;
 
if(birthdate == ""){
alert("Please enter your birth date");
return;
}
 
let birth = new Date(birthdate);
let today = new Date();
 
let age = today.getFullYear() - birth.getFullYear();
 
document.getElementById("result").innerHTML = message + age + " years";
 
console.log("Age calculated: " + age);
 
}
 
 
// dropdown menu options
function handleOption(option){
 
let birthdate = document.getElementById("birthdate").value;
 
if(birthdate == ""){
alert("Please enter your birth date");
return;
}
 
let birth = new Date(birthdate);
let today = new Date();
 
 
// option 1 calculate age
if(option === "age"){
 
let age = today.getFullYear() - birth.getFullYear();
 
document.getElementById("result").innerHTML =
"Your age is " + age + " years";
 
}
 
 
// option 2 birth day
if(option === "day"){
 
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
let day = days[birth.getDay()];
 
document.getElementById("result").innerHTML =
"You were born on " + day;
 
}
 
 
// option 3 days lived
if(option === "days"){
 
let diff = today - birth;
 
let lived = Math.floor(diff / (1000*60*60*24));
 
document.getElementById("result").innerHTML =
"You lived about " + lived + " days";
 
}
 
}

function changeColor() {

 

    let colors = [

        "lightblue",

        "lightgreen",

        "lightpink",

        "lightyellow",

        "lavender",

        "orange"

    ];

 

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

 

    document.body.style.backgroundColor = randomColor;

}


alert("Welcome to my Age Calculator!");


