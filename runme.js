var readline = require('readline');
var fs = require('fs');
var foo;
var i;
foo =0;

var myInterface = readline.createInterface({
  input: fs.createReadStream('./AOC/AOC_Day1_1/input.txt')
});

myInterface.on('line', function (line) {
  console.log('Module: ' , line);
  console.log('Module Fuel: ' , Math.floor(line/3)-2);
  i = Math.floor(line/3)-2;
  while (i >= 0) {
	i = Math.floor(i/3)-2;
    if (i >= 0) foo = foo + i;
  }
  foo = foo + Math.floor(line/3)-2;
  console.log('Total Fuel: ', foo);
});
