(function () {

	var secondsHand = getHandElement('seconds');
	var minutesHand = getHandElement('minutes')
	var hoursHand = getHandElement('hours');
	var clockElement = document.querySelector('.clock');

	function getHandElement(handType) {
		return document.querySelector('.clock .' + handType + '-container');
	}

	var secondsDegree = 180;
	var minutesDegree = 180;
	var hoursDegree = 180;
	var lastSeconds = 0;
	var lastMinutes = 0;
	var lastHours = 0;

	updateClockHands();

	setInterval(updateClockHands, 1000);

	function updateClockHands() {
		var date = new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes() + (seconds/60);
		var hours = date.getHours() + (minutes/60);
		rotateSecondsHand(seconds);
		rotateMinutesHand(minutes);
		rotateHoursHand(hours, minutes);

		lastSeconds = seconds;
		lastMinutes = minutes;
		lastHours = hours;
	}

	function rotateSecondsHand(seconds) {
		if (lastSeconds > seconds) {
			lastSeconds = seconds;
		}
		secondsDegree += Math.abs((seconds - lastSeconds)) * 6;
		var secondsRotation = 'rotate(' + secondsDegree.toFixed(1) + 'deg)';

		secondsHand.style.transform = secondsRotation;
	}

	function rotateMinutesHand(minutes) {
		if (lastMinutes > minutes) {
			lastMinutes = minutes;
		}
		minutesDegree += Math.abs((lastMinutes - minutes)) * 6;
		var minutesRotation = 'rotate(' + minutesDegree + 'deg)';

		minutesHand.style.transform = minutesRotation;
	}

	function rotateHoursHand(hours, minutes) {
		if (lastHours > hours) {
			lastHours = hours;
		}
		hoursDegree += Math.abs((lastHours - hours)) * 15;
		var hoursRotation = 'rotate(' + hoursDegree.toFixed(1) + 'deg)';

		hoursHand.style.transform = hoursRotation;
	}
})();