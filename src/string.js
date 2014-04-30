ea.matchers.toStringEqual = function(util, customTesters) {
  customTesters = customTesters || [];

  return {
    compare: function(actual, expected) {
      var result = {
        pass: false
      };
      
      if(typeof actual !== 'string') {
        result.message = 'Actual result is not a string.';
        return result;
      }

      if(typeof expected !== 'string') {
        result.message = 'Expected should be a string';
        return result;
      }

      var len = Math.max(actual.length, expected.length);
      var strA = '', strB = '', color;
      function setColor(c) {
        if(color !== c) {
            color = c;
        } else {
            return;
        }
        strA += color;
        strB += color;
      }

      function escape(ch) {
        if(ch === '\x1B') {
            return '\\x1B';
        }
        return ch;
      }
      result.pass = true;
      for(var i = 0; i < len; i++) {
        var a = escape(actual[i]);
        var b = escape(expected[i]);
        if(a === undefined || b === undefined || a !== b) {
            setColor(ea.utils.ansi.red);
            result.pass = false;
        } else {
            setColor(ea.utils.ansi.green);
        }
        strA += a || '';
        strB += b || '';
      }
      setColor(ea.utils.ansi.none);

      if (result.pass !== true) {
        result.message = 'Strings are not identical\nActual  : ' + strA + '\nExpected: ' + strB;
      }
      return result;
    }
  };
};
