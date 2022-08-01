import "./style.css"
console.log("hello from main.js")

const headTripElement = document.getElementById("head-trip")
let trip = `
<div>hello trip</div>
`
headTripElement.insertAdjacentHTML("beforeend", trip)