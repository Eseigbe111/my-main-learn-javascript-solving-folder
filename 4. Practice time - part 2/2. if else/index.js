let age = 45

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
let message = ""
if (age < 6) {
    message = "free"
} else if (age >= 6 && age <= 17) {
    message = "child discount"
} else if (age >= 18 && age <= 26) {
    message = "student discount"
} else if (age >= 27 && age <= 66) {
    message = "full price" 
} else {
    message = "senior citizen discount"
}

console.log(message)
