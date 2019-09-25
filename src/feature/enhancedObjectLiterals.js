import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    var serviceBase = {port: 3000, url: 'azat.co'},
        getAccounts = function () {
            return [1, 2, 3]
        };
    var accountServiceES5 = {
        port: serviceBase.port,
        url: serviceBase.url,
        getAccounts: getAccounts,
        toString: function () {
            return JSON.stringify(this.valueOf());
        },
        getUrl: function () {
            return "http://" + this.url + ':' + this.port
        },
        valueOf_1_2_3: getAccounts()
    };

    var accountServiceES5ObjectCreate = Object.create(serviceBase);
    // accountServiceES5ObjectCreate = {
    //     getAccounts: getAccounts,
    //     toString: function () {
    //         return JSON.stringify(this.valueOf());
    //     },
    //     getUrl: function () {
    //         return "http://" + this.url + ':' + this.port
    //     },
    //     valueOf_1_2_3: getAccounts()
    // };

    log.append('content', 'accountServiceES5:');
    log.append('content', accountServiceES5);
    log.append('content', 'accountServiceES5ObjectCreate:');
    log.append('content', accountServiceES5ObjectCreate);
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    var serviceBase = {port: 3000, url: 'azat.co'},
        getAccounts = function () {
            return [1, 2, 3]
        };
    var accountService = {
        __proto__: serviceBase,
        getAccounts,
        toString() {
            return JSON.stringify((super.valueOf()));
        },
        getUrl() {
            return "http://" + this.url + ':' + this.port
        },
        ['valueOf_' + getAccounts().join('_')]: getAccounts()
    };
    log.append('content', 'serviceBase:');
    log.append('content', serviceBase);
    log.append('content', 'accountService:');
    log.append('content', accountService);
};
//export
export default {
    test_1,
    test_2,
}