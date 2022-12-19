let missCounter = +localStorage.getItem('misscount') || 0
const missCounterElement = document.getElementById('miss-count')
missCounterElement.innerText = missCounter

/**
 * Event listener for button mousover
 */
const button = document.getElementById('impossible-button')
button.addEventListener('mouseover', (event) => {
	const { target } = event

	/* Show message behind button when button changes place. */
	const missMsg = document.getElementById('miss-msg')
	missMsg.style.transform = target.style.transform
	missMsg.style.opacity = 1
	setTimeout(() => missMsg.style.opacity = 0, 600);

	/* Conflip function to randomly change direction of button move. */
	const directionX = Math.random() < 0.5 ? '+' : '-'
	const directionY = Math.random() < 0.5 ? '+' : '-'
	const x = target.style.transform.substring(target.style.transform.indexOf('X(') + 2, target.style.transform.indexOf('%)'))
	const y = target.style.transform.substring(target.style.transform.indexOf('Y(') + 2, target.style.transform.lastIndexOf('%)'))

	/* Setting new translated style value */
	const newX = x ? eval(`${x} ${directionX} 100`) : eval(`0 ${directionX} 100`)
	const newY = y ? eval(`${y} ${directionY} 100`) : eval(`0 ${directionY} 100`)
	target.style.transform = `translateX(${newX}%) translateY(${newY}%)`

	/* If button out of view then reset the value to the middel of the screen */
	const buttonOutOfView = false
	if (buttonOutOfView) target.style.transform = `translateX(-50%) translateY(-50%)`

	/* Update the miss counder */
	missCounterElement.innerText = ++missCounter
	localStorage.setItem('misscount', missCounter)
})

/**
 * Event listener for smartasses who think that I would let them tab to their win.
 */
document.body.addEventListener('keydown', (event) => {
	if (event.key === 'Tab') {
		const message = document.getElementById('tab-message')
		message.style.opacity = 1
		setTimeout(() => message.style.opacity = 0, 3000)
	}
})