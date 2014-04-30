Jasmine Diff Matchers
=================

I was about to blind myself seeking for tiny differences in the actual and expected results so I quickly added two **diff** matchers for Jasmine.

This package introduces two new matchers *toArrayEqual* and *toStringEqual* which compares multi-dimensional arrays and strings respectively. The real perk offered is the colored output that pinpoints the error, this comes handy especially when the output is big and/or the differences are subtle.

![Array test](https://github.com/engina/jasmine-diff-matchers/raw/master/ss_array.png "Array Test")
![String test](https://github.com/engina/jasmine-diff-matchers/raw/master/ss_string.png "String Test")

Installation
--------------
You can install the package via *bower*

    bower install jasmine-diff-matchers
    
Or you can just grab the ***jasmine-diff-matchers.js*** file from ***dist*** folder.

Configuration
------------------
Then make sure you include the **jasmine-diff-matchers.js** before you run your test.

With *karma* you'd add **jasmine-diff-matchers.js** to your files list in your *karma.conf.js*.

    files: [
      ...
      'app/bower_components/jasmine-diff-matchers/dist/jasmine-diff-matchers.js',
      ...
    ],
    
Then you can use .toArrayEqual() and .toStringEqual() in your tests.