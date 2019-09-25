import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    let arr = ['react', 'angular', 'vue'];
    if (arr.indexOf('react') !== -1) {
        log.append('content', 'react存在');
    }
};
// in es7
var test_2 = function () {
    log.append('title', 'test in es7:');
    let arr = ['react', 'angular', 'vue'];
    if (arr.includes('react')) {
        log.append('content', 'react存在');
    }
};
//export
export default {
    test_1,
    test_2,
}