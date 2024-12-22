
// First Practice
// Create two variables, firstName and lastName
let firstName = "Abdallah"
let lastName = "Elsyaed"
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName
// Log fullName to the console
console.log(fullName);
 

// Second  Practice 
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greetings(){
    let combine = greeting+ ', ' +name+'!' 
    console.log(combine)

}

greetings( )

// third Practice

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(){
    myPoints += myPoints + 3
}

function remove1Point(){
    myPoints -= 1
    
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// Call the functions to that the line below logs out 10
console.log(myPoints) 

//    fourth Practice

// Try to predict what each of the lines will log out
console.log("2" + 2) // it will be 22
console.log(11 + 7) //  it will be 18
console.log(6 + "5") // it will be 65
console.log("My points: " + 5 + 9) // it will be My points: 59
console.log(2 + 2) // it will be 4
console.log("11" + "14") //  it will be 1114