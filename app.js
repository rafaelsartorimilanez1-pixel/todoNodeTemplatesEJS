const express = require('express');
//const bodyParser = require('body-parser')
const ejs = require('ejs');
const date = require(__dirname + '/date.js')

const app = express();
const port = (3000)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const items = [];
const workItems = [];



app.get('/', (req, res) => {

// Saiu daqui a data
     const day = date.getDate();

    res.render('list', {
        listTitle: day,
        newListItems: items
    })
})

app.post('/', (req, res) => {
    console.log(req.body)

    const item = req.body.newItem


    if(req.body.list === 'trabalho'){
        workItems.push(item)
        res.redirect('/trabalho')
    }else{
        items.push(item)
        res.redirect('/')
    }


})

app.listen(port, (req, res) => {
    console.log(`App rodando na porta: ${port}`)
})

app.get('/trabalho', (req,res) => {
    res.render('list', {
        listTitle: 'Trabalho',
        newListItems: workItems
    })
})

app.post('/trabalho', (req, res) => {
    let item = req.body.newItem
    workItems.push(item)

    res.redirect('/trabalho')
})

app.get('/about', (req, res) => {
    res.render('about')
})

/**
 * 
 app.get('/', (req, res) => {

    let today = new Date()
    let currentDay = today.getDay()
    let finalSemana = [0, 6]
    let day = '';


    if (finalSemana.includes(currentDay)) {
        day = 'Final de semana'
    } else {
        day = 'Dia de trabalhar muito'
    }

    const dias = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]

    let nomeDia = dias[currentDay]

    res.render('list', { day: day, nomeDia: nomeDia })
})
 */