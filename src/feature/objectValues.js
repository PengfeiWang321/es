import log from '../log';
// in es7
var test_1 = function () {
    log.append('title', 'test in es7:');
    const obj = {a: 1, b: 2, c: 3};
    const vals = Object.keys(obj).map(key => obj[key]);
    log.append('content', vals);//[1, 2, 3]
};
// in es8
var test_2 = function () {
    log.append('title', 'test in es8:');
    const obj = {a: 1, b: 2, c: 3};
    const values = Object.values(obj);
    log.append('content', values);//[1, 2, 3]
};
//export
export default {
    test_1,
    test_2,
}