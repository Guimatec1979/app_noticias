var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if (categoria == '/tecnologia'){

			res.end("<html><body>Notícias de tecnologia</body></html>");

	} else if (categoria == '/moda') {
			res.end("<html><body>Notícias de Moda</body></html>");


	}else if(categoria == '/beleza'){
			res.end("<html><body>Notícias beleza</body></html>");

	}else if (categoria == '/index') {

		res.end('<!DOCTYPE html><html lang="pt-br"><head><meta charset="utf-8"><title>Teste</title></head><body><h1>Olá Mundo!</h1></body></html>');


	} else{
			res.end("<html><body>Portal de noticias</body></html>");


	}


});

server.listen(3000);