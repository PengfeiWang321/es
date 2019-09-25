import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    // var _this = this;
    // $('.btn').click(function(event){
    //     _this.sendData();
    // })
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    // $('#btn').click((event) =>{
    //     this.sendData();
    // })
};
// in es5
var test_3 = function () {
    log.append('title', 'test in es5:');
    var logUpperCase = function () {
        var _this = this;
        this.string = this.string.toUpperCase();
        return function () {
            return log.append('content', _this.string);
        }
    };
    logUpperCase.call({string: 'ES6 rocks'})();
};
// in es6
var test_4 = function () {
    log.append('title', 'test in es6:');
    var logUpperCase = function () {
        this.string = this.string.toUpperCase();
        return () => log.append('content', this.string);
    };
    logUpperCase.call({string: 'ES6 rocks'})();
};
// in es5
var test_5 = function () {
    log.append('title', 'test in es5:');
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages_1 = ids.map(function (value) {
        return "ID is " + value; // explicit return
    });
    var messages_2 = ids.map(function (value, index, list) {
        return 'ID of ' + index + ' element is ' + value + ' '; // explicit return
    });
    log.append('content', messages_1);
    log.append('content', messages_2);
};
// in es6
var test_6 = function () {
    log.append('title', 'test in es6:');
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages_1 = ids.map(value => `ID is ${value}`);
    //对于单个参数，括号()是可选的，但当你超过一个参数的时候你就需要他们。
    var messages_2 = ids.map((value, index, list) => `ID of ${index} element is ${value} `); // implicit return
    log.append('content', messages_1);
    log.append('content', messages_2);
};
//export
export default {
    test_1,
    test_2,
    test_3,
    test_4,
    test_5,
    test_6,
}