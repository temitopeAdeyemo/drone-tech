let text = '499';
let pattern = /^(?:[0-4]?[0-9]{1,2}|500)$/;
let result = pattern.test(text);

console.log(result);