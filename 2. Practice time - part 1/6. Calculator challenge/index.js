let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Create four functions: add(), subtract(), divide(), multiply()

function add() {
    //console.log("add clicked")
    //console.log(num1 + num2)
    let total = num1 + num2
    document.getElementById("sum-el").textContent = "sum: " + total
}


function subtract() {
    //console.log("subtract clicked")
    //console.log(num1 - num2)
    let total = (num1 - num2)
    document.getElementById("sum-el").textContent = "sum: " + total

}

function divide() {
    //console.log("divide clicked")
    //console.log(num1 / num2)
    let total = (num1 / num2)
    document.getElementById("sum-el").textContent = "sum: " + total

}

function multiply() {
    //console.log("multiply clicked")
    //console.log(num1 * num2)
    let total = (num1 * num2)
    document.getElementById("sum-el").textContent = "sum: " + total

}

// Call the correct function when the user clicks on one of the buttons
//add()
//subtract()
//divide()
//multiply()
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


