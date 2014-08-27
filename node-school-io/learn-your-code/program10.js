/* USING STRFTIME */

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function callback(socket) {
	socket.write(strftime('%F %H:%M', new Date()));
	socket.end();
});
server.listen(Number(process.argv[2]));


/* OFFICIAL

    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/



/* FIRST SOLUTION

var net = require('net');

var server = net.createServer(function callback(socket) {
	
	socket.end(createDate()+"\n");
});

server.listen(Number(process.argv[2]));

function createDate() {
	var date = new Date();
	var datetime = "";
	// "YYYY-MM-DD hh:mm"
	datetime = date.getFullYear() + "-" + getFullMonth(date) + "-" +
		date.getDate() + " " + getFullHours(date) + ":" + getFullMinutes(date);
	return datetime;
}

function getFullMonth(date) {
	var month = date.getMonth();
	month++;
	if(month <= 9) 
		return ("0" + month);
	return month;
}

function getFullHours(date) {
	var hour = date.getHours();
	if(hour <= 9) 
		return ("0"+hour);
	return hour;
}

function getFullMinutes(date) {
	var minute = date.getMinutes();
	if(minute <= 9)
		return ("0"+minute)
	return minute;
}*/