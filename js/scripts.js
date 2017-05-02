var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var number = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item  ' + number + '</li>'
});

