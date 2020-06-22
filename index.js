var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

console.log(nav)
menu.addEventListener('click', function(e) {
    nav.classList.remove('hide-mobile')	
})
console.log(nav)
exit.addEventListener('click', function(e) {
	nav.classList.add('hide-mobile')
})