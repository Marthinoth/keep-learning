var http = require('http');
var url = require('url');

//  /api/parsetime?iso=2013-08-10T12:10:15.474Z

var parseTime = '/api/parsetime';
var unixTime = '/api/unixtime';

var server = http.createServer( function(request, response) {
	var urlData = url.parse(request.url, true);
	var resData = {};
	if (urlData.pathname === '/api/parsetime') {
		var date = new Date(urlData.query.iso);
		resData = JSON.stringify({ 
			"hour":date.getHours(),
			"minute":date.getMinutes(),
			"second":date.getSeconds()
		});
	}
	if (urlData.pathname === '/api/unixtime') {
		var date = new Date(urlData.query.iso);
		resData = JSON.stringify({ 
			"unixtime":date.getTime()
		});		
	}
	response.writeHeader(200, {'Content-Type': 'application/json'});
	response.write(resData);
	response.end();
});

server.listen(Number(process.argv[2]));

/* node -pe "require('url').parse('/test?q=1', true)"

{ protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?q=1',
  query: { q: '1' },
  pathname: '/test',
  path: '/test?q=1',
  href: '/test?q=1' }


*/


/*
OFFICIAL

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/