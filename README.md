# Main branch
Probeer de knop in te drukken. De knop schiet telkens wanneer je eroverheen hovert een random kant op. Tab & modiel is allebij geblokkeerd, want dat is vals spelen. Er is geen afhandeling voor een button klik, want welke impossible button is nou echt daadwerkelijk te klikken?
```js
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
```
# Legacy branch
Door middel van een select kun je selecteren welke evenst je wilt testen. Deze change in de input veranderd de event listener die blijft luisteren naar de geselecteerde event. Door een knop te activeren met de geselecteerde event wordt het gekleurd en na 2 secondes weer terug gezet.

```js
colorButton = (event) => {
	const { target } = event
	if (target.matches('a')) target.classList.add('purple')
	setTimeout(() =>  target.classList.remove('purple'), 2000);
}

var activeEvent = 'click'
document.addEventListener(activeEvent, colorButton)

const select = document.getElementById('events')
	select.addEventListener('change', (event) => {
	document.removeEventListener(activeEvent, colorButton)
	activeEvent = event.target.value
	document.addEventListener(activeEvent, colorButton)
})
```
# Longpress branch
Houdt de button ingedrukt voor 2 seconden
```js
var longpressed = false
var timeout

buttonIsLongPressed = () => {
	console.log('Yes');
}

/**
* Eventlistener to detect button press
*/
const button = document.getElementById('longpress-button')
button.addEventListener('mousedown', () => {
	timeout = setTimeout(buttonIsLongPressed, 2000)
})

/**
* Eventlistener to detect button release
*/
button.addEventListener('mouseup', () => {
	timeout.clear()
})
```
