//es6
import defaultParameters from './feature/defaultParameters';
import templateLiterals from './feature/templateLiterals';
import multiLineStrings from './feature/multiLineStrings';
import destructuringAssignment from './feature/destructuringAssignment';
import enhancedObjectLiterals from './feature/enhancedObjectLiterals';
import arrowFunctions from './feature/arrowFunctions';
import promises from './feature/promises';
import constructs from './feature/constructs';
import classes from './feature/classes';
//es7
import includes from './feature/includes';
import exponentialOperator from './feature/exponentialOperator';
//es8
import objectValues from './feature/objectValues';
import objectEntries from './feature/objectEntries';
import stringPadding from './feature/stringPadding';
import asyncFunctions from './feature/asyncFunctions';
//log
import log from './log';

const features = [
    defaultParameters,
    templateLiterals,
    multiLineStrings,
    destructuringAssignment,
    enhancedObjectLiterals,
    arrowFunctions,
    promises,
    constructs,
    classes,
    includes,
    exponentialOperator,
    objectValues,
    objectEntries,
    stringPadding,
    asyncFunctions,
];
const featuresFunName = [
    'defaultParameters',
    'templateLiterals',
    'multiLineStrings',
    'destructuringAssignment',
    'enhancedObjectLiterals',
    'arrowFunctions',
    'promises',
    'constructs',
    'classes',
    'includes',
    'exponentialOperator',
    'objectValues',
    'objectEntries',
    'stringPadding',
    'asyncFunctions',
];
const featureFunCount = [2, 2, 2, 2, 2, 6, 2, 3, 1, 2, 2, 2, 2, 1, 2];
//execute
var execute = function () {
    log.clear();
    features.forEach((item, index) => {
        log.append('before-example', featuresFunName[index] + ' function before.', index);
        for (let i = 1; i <= featureFunCount[index]; i++) {
            const fun = item[`test_${i}`];
            fun();
        }
        log.append('after-example', featuresFunName[index] + ' function after.');
    });

    document.getElementById('execute').innerHTML = log.toHtml();
};
execute();