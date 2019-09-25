import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    setTimeout(function () {
        log.append('content', 'Yay!');
        setTimeout(function () {
            log.append('content', 'Wheeyee!');
        }, 1000)
    }, 1000);
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    var wait1000 = () => new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    });
    wait1000()
        .then(function () {
            log.append('content', 'Yay!');
            return wait1000()
        })
        .then(function () {
            log.append('content', 'Wheeyee!');
        });
};
//export
export default {
    test_1,
    test_2,
}