const express = require("express")
const app = express()
const PORT = 8080;

const router = require("./routers/rutas.js")


const server = app.listen(PORT, ()=>{
    console.log('servidor levantado en el puerto ' + server.address().port)
})

server.on('error', (error) => console.log(`hubo un erorr ${error}`))

/*Donde se renderizan las paginas*/
app.set('views', './views')

/*Que motor de plantilla utiliza */
app.set('view engine', 'pug')

app.use("/", router)








