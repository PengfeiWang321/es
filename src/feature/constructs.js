import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    function testFor() {
        var arr = [];
        var index = 0;
        var j = 0;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (j === 5) {
                    index = j;
                }
            }
        }
        arr.push(index);
        arr.push(j);
        return arr;
    }
    function calculateTotalAmount(vip) {
        var amount = 0;
        if (vip) {
            var amount = 1;
        }
        {
            var amount = 100;
            {
                var amount = 1000;
            }
        }
        return amount;
    }

    log.append('content', testFor());
    log.append('content', calculateTotalAmount(true));
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    function calculateTotalAmount(vip) {
        let amount = 0;
        if (vip) {
            let amount = 1;
        }
        {
            let amount = 100;
            {
                let amount = 1000;
            }
        }
        return amount;
    }

    log.append('content', calculateTotalAmount(true));
};
// in es6
var test_3 = function () {
    function calculateTotalAmount(vip) {
        const amount = 0;
        if (vip) {
            const amount = 1;
        }
        {
            const amount = 100;
            {
                const amount = 1000;
            }
        }
        return amount;
    }

    log.append('content', calculateTotalAmount(true));
};
//export
export default {
    test_1,
    test_2,
    test_3,
}