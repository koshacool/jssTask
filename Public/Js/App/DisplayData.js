;
define(['sort'], function(sort) {
	var myData = function () {
		var infoBlock = document.createElement('div');
		infoBlock.className = 'message';
		infoBlock.id = 'message';

		var title = document.createElement('h1');
		title.className = 'title';
		title.innerHTML = 'About me!';
		infoBlock.appendChild(title);

		var h1 = document.createElement('h3');
		h1.className = 'title';
		title.innerHTML = 'Roman Kushytskyy';
		infoBlock.appendChild(h1);

		var info = document.createElement('p');
		info.className = 'info';
		info.innerHTML = 'My name Roman. I very like programming. I already studied such languages: <br>';
		infoBlock.appendChild(info);


		var list = document.createElement('ul');

		var li1 = document.createElement('li');
		li1.innerHTML = 'PHP';
		list.appendChild(li1);

		var li2 = document.createElement('li');
		li2.innerHTML = 'HTML';
		list.appendChild(li2);

		var li3 = document.createElement('li');
		li3.innerHTML = 'JavaSctipt';
		list.appendChild(li3);		

		infoBlock.appendChild(list);

		return infoBlock;

	};

	var algorithmsButton = function () {
		var buttonsBLock = document.createElement('div');
		buttonsBLock.className = 'message';
		buttonsBLock.id = 'message';

		for (var key in sort) {
			var button = document.createElement('div');
			button.className = 'linkButton';
			button.id = key;

			var link = document.createElement('a');
			link.setAttribute('href', '#');
			link.innerHTML = key;
			button.appendChild(link);

			button.addEventListener('click', function (event) {
				var array = eval('sort.' + key + '()');
				showSortedArray(array);
			});

			buttonsBLock.appendChild(button);
		}
		return buttonsBLock;
	};

	var showSortedArray = function (array) {
        var div = document.createElement('div');
        div.className = 'linkButton';
        div.innerHTML = array;

        document.getElementById('message').appendChild(div);
    };

	return {		
		aboutMe: function () { 			
			var infoBlock = document.getElementById('infoBlock');
			infoBlock.replaceChild(myData(), document.getElementById('message'));
			
		},

		algorithms: function () { 			
			var infoBlock = document.getElementById('infoBlock');
			infoBlock.replaceChild(algorithmsButton(), document.getElementById('message'));
			
		},




	}
});

