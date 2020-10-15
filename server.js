const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    //console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req,res){
    var weight = parseFloat(req.body.weight);
    //console.log(req.body);
    var height = parseFloat(req.body.height);
    //console.log(height);
    //console.log(weight);
    var bmi = weight/(height*height);

    res.send('Your BMI is :'+ bmi);
})
app.listen(5000, function(){
    console.log('Server running @ port: 5000');
})
