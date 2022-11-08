import express from 'express'

let personas = []

const app = express()

app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('formulario', {personas});
});

app.post('/datos', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
});

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
