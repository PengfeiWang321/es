import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    var data = {house: 'house', mouse: 'mouse'},//$('body').data()
        house = data.house,
        mouse = data.mouse;
    log.append('content', 'house:' + house);
    log.append('content', 'mouse:' + mouse);
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    var data = {house: 'house', mouse: 'mouse'};//$('body').data()
    var {house, mouse} = data;
    log.append('content', 'house:' + house);
    log.append('content', 'mouse:' + mouse);

    var [col1 , col2] = ['column_1', 'column_2'];//$('.column')
    var stringlist = 'str_1#str_2#str_3#str_4#str_5';
    var [line1, line2, line3, , line5] = stringlist.split('#');
    log.append('content', 'col1:' + col1);
    log.append('content', 'col2:' + col2);
    log.append('content', 'line1:' + line1);
    log.append('content', 'line2:' + line2);
    log.append('content', 'line3:' + line3);
    log.append('content', 'line5:' + line5);
};
//export
export default {
    test_1,
    test_2,
}