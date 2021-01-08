const fizzbuzz = document.getElementById("fb");
const letsGo = document.getElementById("start");
letsGo.addEventListener("click", generate);
const customLetsGo = document.getElementById("custom");
customLetsGo.addEventListener("click", customGenerate);
var numberMin = document.getElementById("numberMin").value;
var numberMax = document.getElementById("numberMax").value;
const reset = document.getElementById("reset");
reset.addEventListener("click", resetFunction);


function resetFunction () {
    while (fizzbuzz.firstChild) {
        fizzbuzz.removeChild(fizzbuzz.firstChild);
    }
}

// function resetAll () {
//     resetFunction();
//     numberMin.value = 1;
//     numberMax.value = 100;
// }


function generate() {
resetFunction();
for (let n = 1; n <= 100; n++) {     
        let createDiv = document.createElement("div");
        let createP = document.createElement("p");
        createDiv.appendChild(createP);
        fizzbuzz.appendChild(createDiv).setAttribute("id", "myid" + n);

        if (n % 3 === 0 && n % 5 === 0) {                              
            createP.appendChild(document.createTextNode(n + " = FIZZ BUZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "fizzbuzz"); 
            console.log("FIZZBUZZ!");

        } else if (n % 3 === 0) {   
            createP.appendChild(document.createTextNode(n + " = FIZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "fizz");

        } else if (n % 5 === 0) {
            createP.appendChild(document.createTextNode(n + " = BUZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "buzz");
        }

        else {
            createP.appendChild(document.createTextNode(n));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "number");
        }
    }
}

numberMin.keyup = function(e) {
    if (numberMin.value >= 1 && numberMin.value < 100) {
        this.value = numberMin.value;
    }
    else if (numberMin.value === 0) {
        numberMin.value = null;
    }
    else {
        numberMin.value = null;
        alert("Please, enter a number bigger that 0!");
    }
};



numberMax.keyup = function(e) {
    if (numberMax.value > 1) {
        this.value = numberMin.value;
    }
    else if (numberMax.value.length === 0) {
        numberMax.value = null;
    }
    else {
        numberMax.value = null;
        alert("Please, enter a number bigger that 0!");
    }
};


function customGenerate() {
    resetFunction();
    var fizzNumber = document.getElementById("fizzNumber").value;
    var buzzNumber = document.getElementById("buzzNumber").value;
    var userNumberMin = document.getElementById("numberMin").value;
    var userNumberMax = document.getElementById("numberMax").value;
    console.log("FIZZNUMBER IS" + fizzNumber);
    console.log("minnumb"+userNumberMin);
    console.log("maxnumb"+userNumberMax);
        for(userNumberMin; userNumberMin <= userNumberMax; userNumberMin++){
            let createCustomDiv = document.createElement("div");
            let createCustomP = document.createElement("p");
            createCustomDiv.appendChild(createCustomP);
            fizzbuzz.appendChild(createCustomDiv).setAttribute("id", "myCustId" + userNumberMin);
        if (userNumberMin % fizzNumber === 0 && userNumberMin % buzzNumber === 0){
            fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "fizzbuzz");
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = FIZZ BUZZ!"));
        }

        else if (userNumberMin % fizzNumber === 0 && userNumberMin % buzzNumber !== 0) {
			fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "fizz");       
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = FIZZ!"));
        }

        else if (userNumberMin % buzzNumber === 0 && userNumberMin % fizzNumber !== 0){
            fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "buzz");
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = BUZZ!"));
        }

        else {
            fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "number");
            createCustomP.appendChild(document.createTextNode(userNumberMin));         
        }
}
}


    // if (fizzNumber === 0 || buzzNumber === 0) {
    //     alert("Dividing by 0 is a crime! You really want to feel like a gangster, don't you...");
    //     fizzNumber.value = 3;
    //     buzzNumber.value = 4;
    // }