// const container = document.getElementById("container")

// container.innerHTML = "<button onclick= 'pmsg()' >Buy!</button>"
// function pmsg(){
//     container.innerHTML += "<p>thanks for buying</p>"
// }

// const recipient = "James"
// const sender = "manus"

// const email = `
//     Hey ${recipient}!

//     How is it going? 

//     Cheers ${sender}
//  `

// console.log(email)

// localStorage.setItem("manus","www.MadTheoriez.com")
// console.log(localStorage.getItem("manus"))
// localStorage.clear()
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.hgduyavsdj.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)



// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting,name,emoji) {
//     welcomeEl.textContent = `${greeting},${name} ${emoji}`   
// }

// greetUser("Howdy","manus","🧛‍♀️")

// function add(num1,num2){
//     sum = num1+num2
// return sum;
// }

// console.log(add(3,4))
// console.log(add(9,102))



// function getFirst(arr){

//     return arr[0]

// }

// let dbbsd = getFirst(["gsa","asdv","hv"])
// console.log(dbbsd)

// Extension
let myLeads = []

const inputEl = document.getElementById("inpul-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletBtn = document.getElementById("delete-btn")
const ladsFromLS = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")

if (ladsFromLS) {
    myLeads = ladsFromLS
    render(myLeads)
}

tabBtn.addEventListener("click" , function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)

     });


    // console.log(tabs[0].url)

})



function render(leads) {
    let listitem = ""
    for (let i = 0; i < leads.length; i++) {
        // listitem += "<li><a target='_blank' herf='"+myLeads[i]+"'>" +myLeads[i]+"</a></li>"
        listitem += `
        <li>
            <a target='_blank' href='${leads[i]}'>
               ${leads[i]}
            </a>
        </li>
    `
        // console.log(listitem)
    }

    ulEl.innerHTML = listitem
} 

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

 localStorage.setItem("myLeads", JSON.stringify(myLeads))

 render(myLeads)


})

deletBtn.addEventListener("dblclick", function(){
// console.log("btn Clicked")
localStorage.clear()
myLeads = []
render(myLeads)
})

// Recap & practice

// 1)Let&Const

// SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// PLAYING THE GAME
// points += 100
// hasWon = false

// ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${ points } points and won the ${game} game!"`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// 2. Log out items in an array


// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

// function Cources(corse) {

//     for (let i = 0; i < corse.length; i++) {
//         console.log(corse[i]);
//     }
// }

//   Cources(myCourses);

//  3. save to localStorage

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("manus","420")
// a= localStorage.getItem("manus")
// console.log(a);

// 4. addEventListener and object in array

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// const kEl = document.getElementById("k-btn")

// kEl.addEventListener("click", function () {

// console.log(data[0].score)

// })

// 5. Generate sentence


// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {

}

