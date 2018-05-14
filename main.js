var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === "images/construction-guy.jpg") {
		myImage.setAttribute('src','images/construction-guy2.png');
	}
	else {
		myImage.setAttribute('src','images/construction-guy.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeader = document.querySelector('h1');

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeader.textContent =  storedName + ' is a construction boye';
}

myButton.onclick = function() {
	setUserName();
}

function setUserName() {
	var myName = prompt('Please enter name: ');
	localStorage.setItem('name', myName);
	myHeader.textContent = myName + ' is a construction boye';
}