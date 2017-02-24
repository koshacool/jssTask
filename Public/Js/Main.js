;
requirejs.config({
    'baseUrl': '/Public/Js',
    'paths': {
        'sort': 'App/SortArray',
        'showData': 'App/DisplayData',
    },

});

requirejs(['sort', 'showData'], function (sort, showData) {
    var eboutMe = document.getElementById('about');//Get button 'About me'
    eboutMe.addEventListener('click', function (event) {
        showData.aboutMe();
    });//Set event for click
    eboutMe.click();//Click the button(display data about me)

    document.getElementById('sort').addEventListener('click', function (event) {
        showData.algorithms();
    });//Set event for click
});