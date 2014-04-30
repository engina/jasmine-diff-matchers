describe('toArrayEqual', function() {
  it('finds the difference in an array and pinpoints the location', function() {
    var matcher = ea.matchers.toArrayEqual({}, []);

    var result = matcher.compare([1, 2, 3], [1, 4, 3]);

    expect(result.pass).toBe(false);
    expect(result.path).toEqual([1]);
  });

  it('also works for recursive arrays', function() {
    var matcher = ea.matchers.toArrayEqual({}, []);
    var result = matcher.compare([1, 2, [3, [4, 5, [6, 7]]], 8], [1, 2, [3, [4, 5, [6, 8]]], 8]);
    expect(result.pass).toBe(false);
    expect(result.path).toEqual([2, 1, 2, 1]);
  });
});
