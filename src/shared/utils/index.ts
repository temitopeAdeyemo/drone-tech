import Version from '@modules/version/models/entities/Version';

export const generateReferralId = () => {
  const length = 8;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let retVal = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
export const generateOTP = () => {
  const length = 4;
  const charset = '0123456789';
  let retVal = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
export const minutesToSeconds = (minutes: number) => minutes * 60;

export const commarisedAmount = (amount: string) => {
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

export const calculateCharges = (amount: string) => {
  let charges = 0;
  if (parseInt(amount) <= 500000) {
    charges = 500;
  } else if (parseInt(amount) <= 5000000) {
    charges = 1300;
  }
  if (parseInt(amount) > 5000000) {
    charges = 3375;
  }
  return charges;
};

const versionDataSelectorObj = (selector: any, application: any) => {
  if (!selector) {
    throw new Error('Please select version fields.');
  }

  if (!Object.keys(application)) {
    throw new Error('Invalid transaction or transaction empty.');
  }

  let versions = application.versions;
  let newVersionArr = [];
  let versionObj: any = {};
  for (let version of versions) {
    selector.forEach((index: any) => {
      if (!index) '';
      else versionObj[index] = version[index];
    });
    newVersionArr.push(versionObj);
    versionObj = {};
  }

  application.versions = newVersionArr;

  return application;
};

const versionDataSelectorArr = (selector: any, applications: any) => {
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

export const versionDataSelector = (selector: (keyof Version)[], transaction: any, type: 'array' | 'single') => {
  if (!type) {
    throw new Error('Select type of transaction data.');
  }

  if (selector.length < 1) {
    throw new Error('Selector cannot be empty.');
  }

  if (type === 'array') return versionDataSelectorArr(selector, transaction);
  else if (type === 'single') return versionDataSelectorObj(selector, transaction);
};
