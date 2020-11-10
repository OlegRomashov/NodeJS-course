const express = require('express');

const app = express();

app.use(express.static('public'))

// app.get('/', (req, res) => res.send('Hello, Vasya!'));

// app.get('/about', (req, res) => res.send('Nothing new about us...'));


app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.render('index.html')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server has started on PORT: ', PORT)
})
