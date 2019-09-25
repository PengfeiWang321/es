import log from '../log';
// in es8
var test_1 = function () {
    log.append('title', 'test in es8:');
    log.append('content', '0.00'.padStart(20,'#'));
    log.append('content', '10,000.00'.padStart(20));
    log.append('content', '250,000.00'.padStart(20));
};
//export
export default {
    test_1,
}