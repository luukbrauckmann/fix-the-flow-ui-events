let missCounter = +localStorage.getItem('misscount') || 0
const missCounterElement = document.getElementById('miss-count')
missCounterElement.innerText = missCounter

const button = document.getElementById('impossible-button')
button.addEventListener('mouseover', (event) => {
	const { target } = event
	// console.log(window.innerHeight, window.innerWidth);

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

	// const positionLeft = target.getBoundingClientRect().left
	// const positionRight = target.getBoundingClientRect().top
	// console.log(positionLeft < 0 && positionLeft > window.innerWidth);
	// console.log(positionRight < 0 && positionRight > window.innerHeight);
	// const buttonOutOfView = positionLeft < 0 && positionLeft > window.innerWidth || positionRight < 0 && positionRight > window.innerHeight
	// if (buttonOutOfView) target.style.transform = `translateX(-50%) translateY(-50%)`

	missCounterElement.innerText = ++missCounter
	localStorage.setItem('misscount', missCounter)
})