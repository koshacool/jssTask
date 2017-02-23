;
define(['sort'], function (sort) {


    var myData = function () {
        var infoBlock = document.createElement('div');
        infoBlock.className = 'content';
        infoBlock.id = 'content';

        var image = document.createElement('img');
        image.className = 'myImage';
        image.id = 'myImage';
        image.setAttribute('src', '/Public/Images/myImg.jpg');
        image.setAttribute('width', '250');
        image.setAttribute('height', '250');
        infoBlock.appendChild(image);

        var h1 = document.createElement('h3');
        h1.className = 'title';
        h1.innerHTML = 'Roman Kushytskyy';
        infoBlock.appendChild(h1);

        var info = document.createElement('p');
        info.className = 'info';
        info.innerHTML = 'My name Roman. I very like programming. I already studied such languages: ';

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
        info.appendChild(list);

        infoBlock.appendChild(info);

        return infoBlock;
    };

    var createArray = function () {
        var size = document.getElementById('size').value;
        if (size) {
            var array = [];
            for (var i = 0; i < size; i++) {
                array[i] = i;
            }
            document.getElementById('contentBlock').replaceChild(algorithmsButton(shuffleArray(array)), document.getElementById('content'));

        }
    };

    var getDataToCreateArray = function () {
        document.getElementById('content').style.opacity = 0.3;

        var content = document.createElement('div');
        content.className = 'content';
        content.id = 'content';

        var h2 = document.createElement('h2');
        h2.innerHTML = 'Enter a number to create array of this size!';
        content.appendChild(h2);

        var input = document.createElement('input');
        input.id = 'size';
        input.value = 100;
        content.appendChild(input);


        var buttonsBlock = document.createElement('div');
        buttonsBlock.className = 'buttons';

        var buttonYes = document.createElement('div');
        buttonYes.className = 'linkButton';
        buttonYes.id = 'Ok';
        var a1 = document.createElement('a');
        a1.setAttribute('href', '#');
        var spanA1 = document.createElement('span');
        spanA1.innerHTML = 'Ok';
        a1.appendChild(spanA1);
        buttonYes.addEventListener('click', function (event) {
            // var sortedArray = sort[this.id].call(array);
            createArray();

        });
        buttonYes.appendChild(a1);

        var buttonNo = document.createElement('div');
        buttonNo.className = 'linkButton';
        buttonNo.id = 'cancel';
        var a2 = document.createElement('a');
        a2.setAttribute('href', '/');
        var spanA2 = document.createElement('span');
        spanA2.innerHTML = 'Cancel';
        a2.appendChild(spanA2);
        buttonNo.appendChild(a2);

        buttonsBlock.appendChild(buttonYes);
        buttonsBlock.appendChild(buttonNo);
        content.appendChild(buttonsBlock);

        document.getElementById('contentBlock').replaceChild(content, document.getElementById('content'));


    };

    var shuffleArray = function (array) {
        var temp = null;
        for (var i = 0; i < array.length; i++) {
            var rand = array[0] + Math.random() * (array.length - 1 - array[0]);
            rand = Math.round(rand);
            temp = array[i];
            array[i] = array[rand];
            array[rand] = temp;
        }
        return array;
    };

    var algorithmsButton = function (array) {

        var buttonsBLock = document.createElement('div');
        buttonsBLock.className = 'content';
        buttonsBLock.id = 'content';

        var centering = document.createElement('div');
        centering.className = 'centering';
        centering.id = 'centering';

        var p = document.createElement('p');
        p.innerHTML = 'You create array: <br>' +
            array + '<br>' +
            'To sort this array and view algorithm\'s code press button';
        centering.appendChild(p);

        for (var key in sort) {
            if (key != 'arr') {
                var button = document.createElement('div');
                button.className = 'linkButton';
                button.id = key;

                var link = document.createElement('a');
                link.setAttribute('href', '#');
                link.innerHTML = key[0].toUpperCase() + key.slice(1);
                button.appendChild(link);

                button.addEventListener('click', function (event) {
                    // var sortedArray = sort[this.id].call(array);
                    showSortedArray(sort[this.id].call(array), this.id);

                });

                centering.appendChild(button);
            }

        }
        buttonsBLock.appendChild(centering);
        return buttonsBLock;
    };

    var showSortedArray = function (array, funcName) {
        document.getElementById('centering').style.opacity = 0.3;

        var div = document.createElement('div');
        div.className = 'algorithm';
        div.id = 'algorithm';
        div.textContent = array;
        alert(array);

        var infoBlock = document.getElementById('algorithm');
        document.getElementById('content').appendChild(div);

        // if (infoBlock) {
        //     document.getElementById('content').replaceChild(div, infoBlock);
        // } else {
        //     document.getElementById('content').appendChild(div);
        // }
    };

    return {
        aboutMe: function () {
            var infoBlock = document.getElementById('contentBlock');
            infoBlock.replaceChild(myData(), document.getElementById('content'));
        },

        algorithms: function () {
            getDataToCreateArray();
        },


    }
});

