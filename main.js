import "./style.css"
console.log("hello from main.js")

const carousel = document.querySelectorAll(".carousel")

if (carousel != null) {
	let sliceIndex = 1
	showSlice(sliceIndex)
	setButtonFunction()

	function setButtonFunction() {
		const dots = document.querySelectorAll(".dot")
		for (let i = 0; i < dots.length; i++) {
			dots[i].addEventListener("click", () => {
				sliceIndex = i + 1
				showSlice(i + 1)
			})
		}
		const barPrev = document.getElementById("bar-prev")
		const barNext = document.getElementById("bar-next")
		barNext.addEventListener("click", () => nextSlice(sliceIndex))
		barPrev.addEventListener("click", () => prevSlice(sliceIndex))
	}

	function prevSlice(n) {
		sliceIndex = n - 1
		showSlice(sliceIndex)
	}

	function nextSlice(n) {
		sliceIndex = n + 1
		showSlice(sliceIndex)
	}

	function currentSlice(n) {
		sliceIndex = n
		showSlice(n)
	}

	function showSlice(n) {
		const carouselItems = document.querySelectorAll(".carousel-item")
		if (n > carouselItems.length) {
			sliceIndex = 1
		}
		if (n < 1) {
			sliceIndex = carouselItems.length
		}
		setAllNone(carouselItems)
		showThisCarousel(carouselItems, sliceIndex - 1)
	}

	function setAllNone(carouselItems) {
		carouselItems.forEach((item) => {
			item.className = item.className.replace(" carousel-current-item", "")
		})
		const dots = document.querySelectorAll(".dot")
		dots.forEach((dot) => {
			dot.className = dot.className.replace(" dot-active", "")
		})
	}

	function showThisCarousel(carouselItems, carousel_number) {
		carouselItems[carousel_number].className += " carousel-current-item"
		const dots = document.querySelectorAll(".dot")
		dots[carousel_number].className += " dot-active"
	}
}
