import log from '../log';
// in es6
var test_1 = function () {
    log.append('title', 'test in es6:');
    // axios.get(`/q?query=${query}`)
    //     .then(response => response.data)
    //     .then(data => {
    //         this.props.processfetchedData(data);
    //     })
    //     .catch(error => console.log(error));
};
// in es8
var test_2 = function () {
    log.append('title', 'test in es8:');
    // async fetchData(url) => {
    //     try {
    //         const response = await axios.get(`/q?query=${query}`)
    //         const data = response.data
    //         this.props.processfetchedData(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
};
//export
export default {
    test_1,
    test_2,
}