ea.matchers.toArrayEqual = function(util, customTesters) {
  customTesters = customTesters || [];

  return {
    compare: function(actual, expected) {
      var result = {
        pass: true
      };

      var r = ea.utils.arrayDiff(actual, expected, customTesters);
      if (r !== true) {
        result.pass     = false;
        result.actual   = r.item1;
        result.expected = r.item2;
        result.path     = r.stack;
        result.message  = 'Object at index ' + r.stack.join('->') + ' does not match. Actual: ' + r.item1 + ' Expected: ' + r.item2 + '\n';
        var ppA = JSON.stringify(actual, undefined, 2).split('\n');
        var ppE = JSON.stringify(expected, undefined, 2).split('\n');
        var diff = [];
        var colWidth = 40;
        result.message += 'Actual' + ea.utils.charfill(' ', colWidth - 6) + ' | Expected\n'; 
        for(var i = 0, len = Math.max(ppA.length, ppE.length); i < len; i++) {
          var a = ppA[i];
          var b = ppE[i];
          var line = '';
          if(a === undefined || b === undefined || a !== b) {
            line += ea.utils.ansi.red;
            result.pass = false;
          } else {
            line += ea.utils.ansi.green;
          }
          
          if(a === undefined) {
            a = '';
          }
          if(b === undefined) {
            b = '';
          }

          line += a.substr(0, colWidth);
          line += ea.utils.charfill(' ', colWidth - Math.min(a.length, colWidth));
          line += ' | ';
          line += b.substr(0, colWidth);
          line += '\n';
          result.message += line;
        }
      }
      return result;
    }
  };
};

ea.matchers.toUnsortedArrayEqual = function(util, customTesters) {
  return {
    compare: function(actual, expected) {
      ea.utils.arrayRecursiveSort(actual);
      ea.utils.arrayRecursiveSort(expected);
      return ea.matchers.toArrayEqual(util, customTesters).compare(actual, expected);
    }
  };
};
