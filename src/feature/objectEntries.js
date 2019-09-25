import log from '../log';
// in es7
var test_1 = function () {
    log.append('title', 'test in es7:');
    const obj = {a: 1, b: 2, c: 3};
    Object.keys(obj).forEach(key => {
        log.append('content', 'key:' + key + ' value:' + obj[key]);
    });
};
// in es8
var test_2 = function () {
    log.append('title', 'test in es8:');
    const obj = {a: 1, b: 2, c: 3};
    for(let [key,value] of Object.entries(obj)){
        log.append('content', `key: ${key} value:${value}`);
    }
};
//export
export default {
    test_1,
    test_2,
}