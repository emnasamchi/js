var pattern = /abc/;
//console.log(pattern.test("abcdef")); // true


var pattern = /abc/;
//console.log(pattern.exec("abcdef")); // ["abc"]
var pattern = /abc/i;
//console.log(pattern.test("ABC")); // true
var pattern = /abc/g;
//console.log("abcabc".match(pattern)); // ["abc", "abc"]
