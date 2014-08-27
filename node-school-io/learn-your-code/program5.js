var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, listFiles) {
	if(err) throw err;
	for(var i=0; i<listFiles.length; i++) {
		if(path.extname(listFiles[i]) === '.'+ext) {
			console.log(listFiles[i]);
		}
	};
});

/*
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/