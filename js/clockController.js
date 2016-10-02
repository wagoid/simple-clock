(function () {

var FADE_OUT_CLASS = 'fade-out';

var clockContolButton = document.querySelector('.btn.btn-control-clock');
var clockElement = document.querySelector('.clock');
var hideClockText = 'Esconder Relógio';
var showClockText = 'Mostrar Relógio';

clockContolButton.addEventListener('click', handleClockControlClick);
clockContolButton.addEventListener('touchstart', handleClockControlClick);

function handleClockControlClick(event) {
	var hiddenClassIndex = clockElement.className.indexOf(FADE_OUT_CLASS);
	if (hiddenClassIndex === -1) {
		clockElement.classList.add(FADE_OUT_CLASS);
		clockContolButton.textContent = showClockText;
	} else {
		clockElement.classList.remove(FADE_OUT_CLASS);
		clockContolButton.textContent = hideClockText;
	}

	event.preventDefault();
}

setTimeout(function () {
	clockElement.classList.remove(FADE_OUT_CLASS);
}, 300);

})();