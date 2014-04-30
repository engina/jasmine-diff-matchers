ea.utils.arrayDiff = function(arr1, arr2, customTesters, stack) {
  customTesters = customTesters || [];
  stack = stack || [];
  var result;
  for (var i = 0, l = Math.max(arr1.length, arr2.length); i < l; i++) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      stack.push(i);
      var r = ea.utils.arrayDiff(arr1[i], arr2[i], customTesters, stack);
      if (r.pass !== true) {
        return r;
      }
      stack.pop();
    } else {
      result = undefined;
      for (var j = 0; j < customTesters.length; j++) {
        var customTesterResult = customTesters[j](arr1[i], arr2[i]);
        if (customTesterResult !== undefined) {
          result = customTesterResult;
        }
      }
      if (result === undefined) {
        // No custom testers
        result = arr1[i] === arr2[i];
      }
      if (result !== true) {
        stack.push(i);
        return {
          pass: false,
          stack: stack,
          item1: arr1[i],
          item2: arr2[i]
        };
      }
    }
  }
  return {
    pass: true
  };
};

ea.utils.charfill = function(ch, n) {
  if (n < 1) {
    return '';
  }
  return new Array(n + 1).join(ch);
};

ea.utils.arrayRecursiveSort = function(arr) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] instanceof Array) {
      ea.utils.arrayRecursiveSort(arr[i]);
    }
  }
  arr.sort();
  return arr;
};

ea.utils.ansi = {
  green: '\x1B[32m',
  red: '\x1B[31m',
  yellow: '\x1B[33m',
  none: '\x1B[0m'
};