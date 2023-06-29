"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionDataSelector = exports.calculateCharges = exports.commarisedAmount = exports.minutesToSeconds = exports.generateOTP = exports.generateReferralId = void 0;
const generateReferralId = () => {
    const length = 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};
exports.generateReferralId = generateReferralId;
const generateOTP = () => {
    const length = 4;
    const charset = '0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};
exports.generateOTP = generateOTP;
const minutesToSeconds = (minutes) => minutes * 60;
exports.minutesToSeconds = minutesToSeconds;
const commarisedAmount = (amount) => {
    let arr = [];
    let strr = [];
    for (let i = amount.length - 1; i >= 0; i--) {
        strr.unshift(amount[i]);
        if (strr.length == 3) {
            arr.unshift(strr.join(''));
            strr = [];
        }
    }
    if (strr.length > 0) {
        arr.unshift(strr.join(''));
    }
    return arr.join();
};
exports.commarisedAmount = commarisedAmount;
const calculateCharges = (amount) => {
    let charges = 0;
    if (parseInt(amount) <= 500000) {
        charges = 500;
    }
    else if (parseInt(amount) <= 5000000) {
        charges = 1300;
    }
    if (parseInt(amount) > 5000000) {
        charges = 3375;
    }
    return charges;
};
exports.calculateCharges = calculateCharges;
const versionDataSelectorObj = (selector, application) => {
    if (!selector) {
        throw new Error('Please select version fields.');
    }
    if (!Object.keys(application)) {
        throw new Error('Invalid transaction or transaction empty.');
    }
    let versions = application.versions;
    let newVersionArr = [];
    let versionObj = {};
    for (let version of versions) {
        selector.forEach((index) => {
            if (!index)
                '';
            else
                versionObj[index] = version[index];
        });
        newVersionArr.push(versionObj);
        versionObj = {};
    }
    application.versions = newVersionArr;
    return application;
};
const versionDataSelectorArr = (selector, applications) => {
    if (!selector) {
        throw new Error('Please select version fields.');
    }
    if (typeof applications != 'object' || !applications.length) {
        throw new Error('Invalid transaction or transaction empty.');
    }
    let newMotherArr = [];
    for (let transaction of applications) {
        let transactionObj = versionDataSelectorObj(selector, transaction);
        newMotherArr.push(transactionObj);
    }
    return newMotherArr;
};
const versionDataSelector = (selector, transaction, type) => {
    if (!type) {
        throw new Error('Select type of transaction data.');
    }
    if (selector.length < 1) {
        throw new Error('Selector cannot be empty.');
    }
    if (type === 'array')
        return versionDataSelectorArr(selector, transaction);
    else if (type === 'single')
        return versionDataSelectorObj(selector, transaction);
};
exports.versionDataSelector = versionDataSelector;
