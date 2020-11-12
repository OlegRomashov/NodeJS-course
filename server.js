const express = require('express');
const fs = require('fs');
const yandexTranslate = require('./yandex.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser());

const templating = require('consolidate');
const handlebars = require('handlebars');
templating.requires.handlebars = handlebars;

app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('translate', { text: '' });
    // res.json(cache);
});

app.post('/translate', async(req, res) => {
    const request = req.body;

    yandexTranslate({
        texts: [request.text],
        sourceLanguageCode: request.sourceLanguageCode,
        targetLanguageCode: request.targetLanguageCode
    }).then((yres) => {
        res.render('translate', { text: yres.data.translations[0].text })
    }).catch((err) => {
        console.log(err.message, err.response.data);
        res.status('400').render('translate', { error: err.message })
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server has started on PORT: ', PORT)
})
