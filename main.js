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

const articles = document.querySelectorAll(".article")
articles.forEach((article) => {
	const text = article.querySelector(".article-text")
	const img = article.querySelector(".article-img")
	article.addEventListener("mouseover", () => {
		text.classList.add("show-article")
		img.classList.add("article-img-hover")
	})
	article.addEventListener("mouseout", () => {
		img.classList.remove("article-img-hover")
		text.classList.remove("show-article")
	})
})

const destinations = document.querySelectorAll(".destination")
destinations.forEach((destination) => {
	const img = destination.querySelector(".destination-img")
	const text = destination.querySelector(".destination-text")
	const tourText = text.querySelector(".destination-view-tour")
	destination.addEventListener("mouseover", () => {
		img.classList.add("destination-hover")
		tourText.classList.add("view-tour")
	})
	destination.addEventListener("mouseout", () => {
		img.classList.remove("destination-hover")
		tourText.classList.remove("view-tour")
	})
})

const packages = document.querySelectorAll(".packages")
if (packages != null) {
	const packageTour = document.querySelectorAll(".package")
	let sliceIndex = 1
	showSlice(sliceIndex)
	setSliceBar()

	function showSlice(n) {
		console.log(n)
		if (n > packageTour.length - 2) {
			sliceIndex = 1
		}
		if (n < 1) {
			sliceIndex = packageTour.length - 2
		}
		DisplayNone()
		showPackageSet(sliceIndex - 1)
	}

	function showPackageSet(n) {
		packageTour[n].classList.add("show-package")
		packageTour[n + 1].classList.add("show-package")
		packageTour[n + 2].classList.add("show-package")
		console.log("hello")
		packageTour.forEach((trip) => {
			console.log(trip)
		})
	}

	function DisplayNone() {
		packageTour.forEach((packageSet) => {
			packageSet.classList.remove("show-package")
		})
	}

	function setSliceBar() {
		const barPrev = document.getElementById("slice-bar-prev")
		const barNext = document.getElementById("slice-bar-next")
		barPrev.addEventListener("click", () => {
			prevSlice(sliceIndex)
		})
		barNext.addEventListener("click", () => {
			nextSlice(sliceIndex)
		})
	}

	function prevSlice(n) {
		sliceIndex = n - 1
		console.log(sliceIndex)
		showSlice(sliceIndex)
	}

	function nextSlice(n) {
		sliceIndex = n + 1
		console.log(sliceIndex)
		showSlice(sliceIndex)
	}
}
