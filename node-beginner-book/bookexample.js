var fs = require('fs'),
    sys = require('sys');

fs.readFile("./hola.txt", function(report){
	sys.puts("oh, look at all my money: "+report);
});

fs.writeFile("chau.txt", '...', function(){
	sys.puts("can't wait to hear back from her!");
});