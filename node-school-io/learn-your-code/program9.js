var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var text1 = "";
var text2 = "";
var text3 = "";

var finishedStream = 0;

http.get(url1, function (response) {
	response.setEncoding('utf8');
	
	response.on("data", function (data) {
		text1 += data;
	});

	response.on("end", function (data) {
		finishedStream++;
		if (finishedStream === 3) {
			console.log(text1);
			console.log(text2);
			console.log(text3);
		}
	});
});

http.get(url2, function (response) {
	response.setEncoding('utf8');
	
	response.on("data", function (data) {
		text2 += data;
	});

	response.on("end", function (data) {
		finishedStream++;
		if (finishedStream === 3) {
			console.log(text1);
			console.log(text2);
			console.log(text3);
		}
	});
});

http.get(url3, function (response) {
	response.setEncoding('utf8');
	
	response.on("data", function (data) {
		text3 += data;
	});

	response.on("end", function (data) {
		finishedStream++;
		if (finishedStream === 3) {
			console.log(text1);
			console.log(text2);
			console.log(text3);
		}
	});
});


/*

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

*/