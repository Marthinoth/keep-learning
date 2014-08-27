var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	var charCount = 0;
	var string = "";

	response.on("data", function(data) {
		charCount += data.length;
		string += data;
	});

	response.on("end", function(data) {
		console.log(charCount);
		console.log(string);
	});

});


/*
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
*/
