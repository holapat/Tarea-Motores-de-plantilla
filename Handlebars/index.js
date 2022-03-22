const express = require('express') 
const handlebars = require('express-handlebars')
const app = express()
const router = require("./routers/rutas.js")


/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))


//configuración de handlebars
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use("/", router)
