
const indexCard = document.querySelectorAll(".apartments-card")

indexCard.forEach((e) => {
	e.addEventListener("mouseenter", () => {
		e.firstElementChild.classList.add("_hidden-opacity")
	})
	e.addEventListener("mouseleave", () => {
		e.firstElementChild.classList.remove("_hidden-opacity")
	})
})