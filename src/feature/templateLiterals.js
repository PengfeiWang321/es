import log from '../log';
// in es5
var test_1 = function (first = 'wang', last = 'pengfei', id = 1) {
    log.append('title', 'test in es5:');
    var name = 'Your name is ' + first + ' ' + last + '.';
    var url = 'http://localhost:3000/api/messages/' + id;
    log.append('content', 'name:' + name);
    log.append('content', 'url:' + url);
};
// in es6 编译后会用concat做连接
var test_2 = function (first = 'wang', last = 'pengfei', id = 1) {
    log.append('title', 'test in es6:');
    var name = `Your name is ${first} ${last}. `;
    var url = `http://localhost:3000/api/messages/${id}`;
    log.append('content', 'name:' + name);
    log.append('content', 'url:' + url);
};
//export
export default {
    test_1,
    test_2,
}