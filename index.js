let missCounter = +localStorage.getItem('misscount') || 0
const missCounterElement = document.getElementById('miss-count')
missCounterElement.innerText = missCounter

const button = document.getElementById('impossible-button')
button.addEventListener('mouseover', (event) => {
	const { target } = event
	const directionX = Math.random() < 0.5 ? '+' : '-'
	const directionY = Math.random() < 0.5 ? '+' : '-'
	const x = target.style.transform.substring(target.style.transform.indexOf('X(') + 2, target.style.transform.indexOf('%)'))
	const y = target.style.transform.substring(target.style.transform.indexOf('Y(') + 2, target.style.transform.lastIndexOf('%)'))

	const newX = x ? eval(`${x} ${directionX} 100`) : eval(`0 ${directionX} 100`)
	const newY = y ? eval(`${y} ${directionY} 100`) : eval(`0 ${directionY} 100`)
	target.style.transform = `translateX(${newX}%) translateY(${newY}%)`

	missCounterElement.innerText = ++missCounter
	localStorage.setItem('misscount', missCounter)
})
