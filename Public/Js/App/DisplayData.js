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

    var algorithmsButton = function () {
        var buttonsBLock = document.createElement('div');
        buttonsBLock.className = 'content';
        buttonsBLock.id = 'content';

        var centering = document.createElement('div');
        centering.className = 'centering';

        var p = document.createElement('p');
        p.innerHTML = 'Array: [' + sort.arr + '].<br>' +
            'To sort this array press button';
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
                    var start = new Date();
                    var array = eval('sort.' + key + '()');
                    var end = new Date();

                    alert(start.getMilliseconds() - end.getMilliseconds());
                    showSortedArray(array);
                });

                centering.appendChild(button);
            }

        }
        buttonsBLock.appendChild(centering);
        return buttonsBLock;
    };

    var showSortedArray = function (array) {
        var div = document.createElement('div');
        div.className = 'linkButton';
        div.innerHTML = array;

        document.getElementById('content').appendChild(div);
    };

    return {
        aboutMe: function () {
            var infoBlock = document.getElementById('contentBlock');
            infoBlock.replaceChild(myData(), document.getElementById('content'));
        },

        algorithms: function () {
            var infoBlock = document.getElementById('contentBlock');
            infoBlock.replaceChild(algorithmsButton(), document.getElementById('content'));
        },


    }
});

