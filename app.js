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
    'What you see is not there and what\'s there conceals itself beneath a hand, eyes will reveal the object but tolerance must be used to unveil the objective. You might have to rack your brains but will find nothing there, may be the answer is close at hand. Don’t spend too much time looking for something at one place start exploring and you will find it right in front of your eyes.';
    res.render('index', {modalContent: defaultMessage, isWrong: 0});
});


app.get('/extra', (req, res) => {
    const defaultMessage = 
    'What you see is not there and what\'s there conceals itself beneath a hand, eyes will reveal the object but tolerance must be used to unveil the objective. You might have to rack your brains but will find nothing there, may be the answer is close at hand. Don’t spend too much time looking for something at one place start exploring and you will find it right in front of your eyes.';
    res.render('extra');
});


app.post('/', (req, res) => {
    const defaultMessage = 
    'What you see is not there and what\'s there conceals itself beneath a hand, eyes will reveal the object but tolerance must be used to unveil the objective. You might have to rack your brains but will find nothing there, may be the answer is close at hand. Don’t spend too much time looking for something at one place start exploring and you will find it right in front of your eyes.';
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