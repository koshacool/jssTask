;
requirejs.config({
    'baseUrl': '/Public/Js',
    'paths': {
        'sort': 'App/SortArray',
        'showData': 'App/DisplayData',
    },

});

requirejs(['sort', 'showData'], function (sort, showData) {
    document.getElementById('about').addEventListener('click', function (event) {
        showData.aboutMe();
    });
    document.getElementById('sort').addEventListener('click', function (event) {
        showData.algorithms();
    });

    // var arr = [23,56,3,6,8,3,76, 4];
    // document.getElementById('sort').addEventListener('click', function (event) {
    //     sort.selection(arr);
    // });


});