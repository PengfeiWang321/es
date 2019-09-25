import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    const number = Math.pow(2, 10);
    log.append('content', number);
};
// in es7
var test_2 = function () {
    log.append('title', 'test in es7:');
    const number = 2**10;
    log.append('content', number);
};
//export
export default {
    test_1,
    test_2,
}