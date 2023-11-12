// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let savedCount = ` ${count} -`
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += savedCount
    countEl.textContent = 0
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)

}

// Google:
// innerText alternative mdn