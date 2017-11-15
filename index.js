//var script = "Weather.py";


var express = require("express");
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(require('./routes/pythonController'));
app.use(require('./routes/webPageController'));
app.use(require('./routes/newsController'));

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})


