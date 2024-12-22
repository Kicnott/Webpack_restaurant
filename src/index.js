import home from "./home.js"
import about from "./about.js"
import contact from "./contact.js"
import "./script.css"

let header = document.createElement("header")
let nav = document.createElement("nav")

let button1 = document.createElement("button");
button1.classList.add("class1"); 
button1.textContent = "Home"
nav.appendChild(button1);

let button2 = document.createElement("button");
button2.classList.add("class2");  
button2.textContent = "About"
nav.appendChild(button2);

let button3 = document.createElement("button");
button3.classList.add("class3");  
button3.textContent = "Contact"
nav.appendChild(button3);

header.appendChild(nav)
let div = document.createElement("div")
div.id = "content"
header.appendChild(div)

document.body.appendChild(header)

button1.addEventListener("click", () => {
    switchTab(home)
})

button2.addEventListener("click", () => {
    switchTab(about)
})

button3.addEventListener("click", () => {
    switchTab(contact)
})

function switchTab(content){
    while (div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(content)
}

console.log("AHHHHHHHHHHHHHH")