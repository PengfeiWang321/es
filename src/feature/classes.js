import log from '../log';
// in es6
var test_1 = function () {
    log.append('title', 'test in es6:');
    class baseModel {
        constructor(options, data) {// class constructor，node.js 5.6暂时不支持options = {}, data = []这样传参
            this.name = 'Base';
            this.url = 'http://azat.co/api';
            this.data = data;
            this.options = options;
        }

        getName() { // class method
            log.append('content', `Class name: ${this.name}`);
        }
    }

    class AccountModel extends baseModel {
        constructor(options, data) {
            super({private: true}, ['32113123123', '524214691']);
            this.name = 'Account Model';
            this.url += '/accounts/';
        };

        get accountsData() {
            return this.data;
        }
    }

    let accounts = new AccountModel(5);
    accounts.getName();
    log.append('content', 'Data is :');
    log.append('content', accounts.accountsData);
};
//export
export default {
    test_1,
}