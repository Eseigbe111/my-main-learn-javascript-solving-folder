//let myLeads = `["www.glassdoor.com"]`

//myLeads = JSON.parse(myLeads)

//myLeads.push("www.doors.com")

//console.log(myLeads)

myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using the typeof to verify that it's a string


myLeads = JSON.parse(myLeads)

myLeads.push("www.doors.com")

console.log(myLeads)
console.log(typeof myLeads)
console.log("*****************************")

myLeads = JSON.stringify(myLeads)
console.log(myLeads)
console.log(typeof myLeads)