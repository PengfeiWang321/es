import log from '../log';
// in es5
var test_1 = function () {
    log.append('title', 'test in es5:');
    var roadPoem = "Then took the other, as just as fair,nt"
        + 'And having perhaps the better claimnt'
        + 'Because it was grassy and wanted wear,nt'
        + 'Though as for that the passing therent'
        + 'Had worn them really about the same,nt';
    var fourAgreements = 'You have the right to be you.n'
        + 'You can only be you when you do your best.';
    log.append('content', 'roadPoem:' + roadPoem);
    log.append('content', 'fourAgreements:' + fourAgreements);
};
// in es6
var test_2 = function () {
    log.append('title', 'test in es6:');
    var roadPoem = `Then took the other, as just as fair,
           And having perhaps the better claim
           Because it was grassy and wanted wear,
           Though as for that the passing there
           Had worn them really about the same,`;
    var fourAgreements = `You have the right to be you.
           You can only be you when you do your best.`;
    log.append('content', 'roadPoem:' + roadPoem);
    log.append('content', 'fourAgreements:' + fourAgreements);
};
//export
export default {
    test_1,
    test_2,
}