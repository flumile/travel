import "./style.css"
console.log("hello from main.js")

/*
const headTripElement = document.getElementById("head-trip")
let trip = `
<div>hello trip</div>
`
headTripElement.insertAdjacentHTML("beforeend", trip)
*/
let test = document.getElementById("test")
let testTwoElement = document.getElementById("test-two")
/*
test.addEventListener("mouseover", (event) => {
	testTwoElement.insertAdjacentHTML("beforeend", trip)
})
test.onmouseover = function (event) {
	let trip = `
    <div>hello trip ${event.data}</div>
    `
	testTwoElement.insertAdjacentHTML("beforeend", trip)
}
*/

function testHover(trip) {
	let thisTrip = trip.getAttribute("data-trip")
	let triptrip = `
    <div>hello trip ${thisTrip}</div>
    `
	testTwoElement.insertAdjacentHTML("beforeend", triptrip)
}

test.onmouseout = function () {
	testTwoElement.innerHTML = ""
}
