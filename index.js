let missCounter = +localStorage.getItem('misscount') || 0
const missCounterElement = document.getElementById('miss-count')
missCounterElement.innerText = missCounter

const button = document.getElementById('impossible-button')
button.addEventListener('mouseover', (event) => {
	const { target } = event

	const missMsg = document.getElementById('miss-msg')
	missMsg.style.transform = target.style.transform
	missMsg.style.opacity = 1
	setTimeout(() => missMsg.style.opacity = 0, 600);

	const directionX = Math.random() < 0.5 ? '+' : '-'
	const directionY = Math.random() < 0.5 ? '+' : '-'
	const x = target.style.transform.substring(target.style.transform.indexOf('X(') + 2, target.style.transform.indexOf('%)'))
	const y = target.style.transform.substring(target.style.transform.indexOf('Y(') + 2, target.style.transform.lastIndexOf('%)'))

	const newX = x ? eval(`${x} ${directionX} 100`) : eval(`0 ${directionX} 100`)
	const newY = y ? eval(`${y} ${directionY} 100`) : eval(`0 ${directionY} 100`)
	target.style.transform = `translateX(${newX}%) translateY(${newY}%)`

	const buttonOutOfView = false
	if (buttonOutOfView) target.style.transform = `translateX(-50%) translateY(-50%)`

	missCounterElement.innerText = ++missCounter
	localStorage.setItem('misscount', missCounter)
})

document.body.addEventListener('keydown', (event) => {
	if (event.key === 'Tab') {
		const message = document.getElementById('tab-message')
		message.style.opacity = 1
		setTimeout(() => message.style.opacity = 0, 3000);
	}
});