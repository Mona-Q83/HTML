let message = "Your age is ";
 
let pageLoaded = true;
 
console.log("JavaScript is working");
 
function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
 
    if (birthdate == "") {
        alert("Please enter your birth date");
        return;
    }
 
    let birth = new Date(birthdate);
    let today = new Date();
 
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
 
    if (days < 0) {
        months--;
        let previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += previousMonth.getDate();
    }
 
    if (months < 0) {
        years--;
        months += 12;
    }
 
    document.getElementById("result").innerHTML =
        "Your age is " + years + " years, " +
        months + " months and " + days + " days.";
}
 
 
// Dropdown menu
function handleOption(option) {
 
    let birthdate = document.getElementById("birthdate").value;
 
    if (birthdate == "") {
        alert("Please enter your birth date");
        return;
    }
 
    let birth = new Date(birthdate);
    let today = new Date();
 
    if (option == "age") {
        calculateAge();
    }
 
    if (option == "day") {
 
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
 
        let day = days[birth.getDay()];
 
        document.getElementById("result").innerHTML =
            "You were born on " + day;
    }
 
    if (option == "days") {
 
        let diff = today - birth;
 
        let lived = Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );
 
        document.getElementById("result").innerHTML =
            "You lived about " + lived + " days.";
    }
}
 
 
// Change background color
function changeColor() {
 
    let colors = [
        "lightblue",
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lavender",
        "orange"
    ];
 
    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];
 
    document.body.style.backgroundColor = randomColor;
}
 
alert("Welcome to my Age Calculator!");
 
