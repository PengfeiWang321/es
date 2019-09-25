import log from '../log';
// in es5
var test_1 = function (height, color, url) {
    log.append('title', 'test in es5:');
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'http://azat.co';
    log.append('content', 'height:' + height);
    log.append('content', 'color:' + color);
    log.append('content', 'url:' + url);
};
// in es6
var test_2 = function (height = 50, color = 'red', url = 'http:\/\/azat.co') {
    log.append('title', 'test in es6:');
    log.append('content', 'height:' + height);
    log.append('content', 'color:' + color);
    log.append('content', 'url:' + url);
};
//export
export default {
    test_1,
    test_2,
}