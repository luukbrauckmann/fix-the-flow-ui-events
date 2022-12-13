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
