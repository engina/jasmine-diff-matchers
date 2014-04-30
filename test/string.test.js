describe('string diff matcher', function() {
  it('should mark diffs with red', function() {
    var matcher = ea.matchers.toStringEqual({}, []);
    var result = matcher.compare('abcdef', 'abCdef');

    var ansi = {
      green: '\x1B[32m',
      red: '\x1B[31m',
      yellow: '\x1B[33m',
      none: '\x1B[0m'
    };
    var expected = 'Strings are not identical\nActual  : ' + ea.utils.ansi.green + 'ab' + ea.utils.ansi.red + 'c' + ea.utils.ansi.green + 'def' + ea.utils.ansi.none + '\nExpected: ' + ea.utils.ansi.green + 'ab' + ea.utils.ansi.red + 'C' + ea.utils.ansi.green + 'def' + ea.utils.ansi.none;
    expected = expected.replace(/\x1B/g, '\\x1b');
    var message = result.message.replace(/\x1B/g, '\\x1b');
    expect(message).toEqual(expected);
  });
});