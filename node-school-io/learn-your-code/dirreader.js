var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
	fs.readdir(dir, function(err, files) {
		var filteredfiles = [];

		if(err) {
			return cb(err);
		}

		files.forEach(function(file) {
			if(path.extname(file) === '.' + ext) {
				filteredfiles[filteredfiles.length] = file;
			}
		});
		cb(null, filteredfiles);
	});
};

/*
solution_filter.js:

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

*/