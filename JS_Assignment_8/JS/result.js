var popUp = document.getElementById('pop-up');
var popUpMsg = document.getElementById('pop-up-message');
// console.log(bodyParts);
function checklost() {
	var bodyParts = document.getElementsByClassName('figure-part');
	if (Array.from(bodyParts).every((part) => part.style.visibility == 'visible')) {
		popUpMsg.innerHTML = 'Sorry, you lost!';
		popUp.style.display = 'block';
	}
}

function checkWin() {
	var bodyParts = document.getElementsByClassName('figure-part');
	var hiddenBoxes = document.getElementsByClassName('hiddenBox');
	// console.log(hiddenBoxes);
	var what = Array.from(hiddenBoxes).every((box) => {
		return box.innerHTML ? true : false;
	});
	console.log(what);
	if (what) {
		popUpMsg.innerHTML = 'Congrats, You Won!';
		popUp.style.display = 'block';
	}
}

function restart() {
	window.location.href = window.location.pathname + window.location.search + window.location.hash;
	var popUP = document.getElementById('pop-up');
	popUP.style.display = 'none';
}
