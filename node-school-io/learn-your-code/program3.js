var fs = require("fs");

var pathToFile = process.argv[2];

var buffer = fs.readFileSync(pathToFile);

var text = buffer.toString();

var lines = text.split("\n");

console.log(lines.length -1);

/*
   var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

*/