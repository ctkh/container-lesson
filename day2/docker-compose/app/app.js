var redis = require('redis');
var redis_client = redis.createClient(6379, "app-redis");

require('http').createServer(function(req, res){
    redis_client.incr('counter', function(err, count){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(count + "回目のアクセスです！");
    });
}).listen(80);