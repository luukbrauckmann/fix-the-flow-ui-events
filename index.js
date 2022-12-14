var longpressed = false
var timeout


buttonIsLongPressed = () => {
	console.log('Yes');
}

const button = document.getElementById('longpress-button')
button.addEventListener('mousedown', () => {
	timeout = setTimeout(buttonIsLongPressed, 2000)
})

button.addEventListener('mouseup', () => {
	timeout.clear
})