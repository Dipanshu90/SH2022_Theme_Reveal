const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    const defaultMessage = 
    'You have reached so far!\n\nGo to instagram handle @iitgwt and type out your answer';
    res.render('index', {modalContent: defaultMessage, isWrong: 0});
});

app.post('/', (req, res) => {
    const defaultMessage = 
    'You have reached so far!\n\nGo to instagram handle @iitgwt and type out your answer';
    var answer = req.body.answer;
    answer = answer.toLowerCase();
    if(answer == "professor"){
        res.render('success');
    }
    else{
        res.render('index', {modalContent: defaultMessage, isWrong: 1});
    }
});

const server = app.listen(3000 || process.env.PORT, () => {
    console.log('Listening to requests on port: ' + server.address().address + server.address().port);
});