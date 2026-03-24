const express = require('express');
//const bodyParser = require('body-parser')
const ejs = require('ejs');

const app = express();
const port = (3000)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

let items = [];



app.get('/', (req, res) => {

    let today = new Date()

    let option = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let day = today.toLocaleDateString('pt-BR', option)

    res.render('list', {
        day: day,
        newListItems: items
    })
}
)

app.post('/', (req, res) => {
    let item = req.body.newItem
    items.push(item)

    console.log(item, items)

    res.redirect('/')
})

app.listen(port, (req, res) => {
    console.log(`App rodando na porta: ${port}`)
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