describe('utils.arrayDiff', function() {
  it('should find a difference in these arrays', function() {
    var actual = [
      [0, 1, 3, 4, 5, 6, 8],
      [1, 3, 4, 5, 6, 8, 10],
      [3, 4, 5, 6, 8, 10, 11],
      [4, 5, 6, 8, 10, 11, 14],
      [0, 1, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 8],
      [3, 4, 5, 6, 8, 10],
      [4, 5, 6, 8, 10, 11],
      [5, 6, 8, 10, 11, 14],
      [0, 1, 3, 4, 5],
      [1, 3, 4, 5, 6],
      [3, 4, 5, 6, 8],
      [4, 5, 6, 8, 10],
      [5, 6, 8, 10, 11],
      [6, 8, 10, 11, 14],
      [0, 1, 3, 4],
      [1, 3, 4, 5],
      [3, 4, 5, 6],
      [4, 5, 6, 8],
      [5, 6, 8, 10],
      [6, 8, 10, 11],
      [8, 10, 11, 14],
      [0, 1, 3],
      [1, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 8],
      [6, 8, 10],
      [8, 10, 11],
      [10, 11, 14],
      [0, 1],
      [1, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 8],
      [8, 10],
      [10, 11],
      [11, 14],
      [0],
      [1],
      [3],
      [4],
      [5],
      [6],
      [8],
      [10],
      [11],
      [14]
    ];
    var expected = [
      [0, 1, 3, 4, 5, 6, 8],
      [1, 3, 4, 5, 6, 8, 10],
      [3, 4, 5, 6, 8, 10, 11],
      [4, 5, 6, 8, 10, 11, 14],
      [0, 1, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 8],
      [3, 4, 5, 6, 8, 10],
      [4, 5, 6, 8, 10, 11],
      [5, 6, 8, 10, 11, 14],
      [0, 1, 3, 4, 5],
      [1, 3, 4, 5, 6],
      [3, 4, 5, 6, 8],
      [4, 5, 6, 8, 10],
      [5, 6, 8, 10, 11],
      [6, 8, 10, 11, 14],
      [0, 1, 3, 4],
      [1, 3, 4, 5],
      [3, 4, 5, 6],
      [4, 5, 6, 8],
      [5, 6, 8, 10],
      [6, 8, 10, 11],
      [8, 10, 11, 14],
      [0, 1, 3],
      [1, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 8],
      [6, 8, 10],
      [8, 10, 11],
      [10, 11, 14],
      [0, 1],
      [1, 3],
      [3, 4],
      [5, 6],
      [6, 8],
      [8, 10],
      [10, 11],
      [11, 14],
      [0],
      [1],
      [3],
      [6],
      [8],
      [10],
      [11],
      [14]
    ];
    var result = ea.utils.arrayDiff(actual, expected);
    expect(result.pass).toBe(false);
  });
});

describe('utils.arrayRecursiveSort', function() {
  it('should recursively sort arrays', function() {
    var result = ea.utils.arrayRecursiveSort([3, [4, 2], [3, 2], 1]);
    var expected = [1, [2, 3], [2, 4], 3];
    expect(result).toEqual(expected);
  });
});