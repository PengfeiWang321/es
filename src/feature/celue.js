var calc1 = function (n) {
    if (n == 3) {
        return 5;
    } else if (n == 4) {
        return 9;
    }
};

var calc2 = function (n) {
    var map ={
        3:5,
        4:9
    };
    return map[n];
};
calc2(3);

var calc3 = function (n) {
    var map ={
        3:5,
        "aaa":9
    };
    return map[n];
};
calc2("aaa");

var exec = function (name) {
    var map = {
        "fun1": function () {
            console.log("func1 exec");
        },
        "fun12": function () {
            console.log("func2 exec");
        }
    };
    return map[name]();
};
exec("fun1");
