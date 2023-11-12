// select element by ID and change innerText

// document.getElementById("count-el").innerText = 5;

///
// variables
//
// let count = 0;
// let myAge = 23;
// console.log(myAge)

///
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

///
// let myAge = 23
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

///
// let count = 5

// count = 3

// count = count + 1

// console.log(count)

///
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

///
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function
// function increment() {
//     console.log("The button was clicked")
// }

// Setting up the the race 🏎 🏎 🏎

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
// countdown()

// function logNumber() {
//     console.log(42)
// }

// logNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function lapSum() {
//     let totalLapTime = lap1 + lap2 + lap3
//     console.log(totalLapTime)
// }

// lapSum()

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

///
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// increse on click
// let countEl = document.getElementById("count-el") //passing an argument

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     // console.log(count)
// }

// grab the count-el element, store it in a countEl variable

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}

///
let username = "per"

// Create a variable, message, that stores the string: "You have tree new notifications"

let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

///
// strings and numbers
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
let name = "peculiar"

let greeting = "Hi, my name is"

// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = `${greeting} ${name}`
// Log myGreeting to the console
console.log(myGreeting)

console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")