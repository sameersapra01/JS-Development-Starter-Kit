//Bundle : NPM packages use CommonJS pattern. Node can handle this.
//Common JS does not work in web browsers.
//Module Formats : IIFE, Asynchronous Module Definition(AMD), CommonJS, Universal Module Definition(UMD) and ES6 Modules.
//Bundlers : Browserify, Webpack, Rollup and JSPM.
//Browserify : takes all your code and npm packages and bundles.
//Webpack : bundles more than just JS. Import CSS, images, HTML, etc like JS. Bundle splitting. Hot module reloading. Webpack 2 offers tree shaking.
//Rollup : offers Tree shaking, faster loading production code. Quite new.
//JSPM : Uses systemJS, a unviersal module loader. Can load modules at runtime. Has its own package manager. Can install from npm, git.

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

//app.use : tell express others things we like to use. Integrate webpack with express.
/* eslint-disable no-console*/
app.use(require('webpack-dev-middleware')(compiler,{
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
	if(err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
	}
});
