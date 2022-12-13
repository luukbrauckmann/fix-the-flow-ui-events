Door middel van een select kun je selecteren welke evenst je wilt testen. Deze change in de input veranderd de event listener die blijft luisteren naar de geselecteerde event. Door een knop te activeren met de geselecteerde event wordt het gekleurd en na 2 secondes weer terug gezet.

```
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
