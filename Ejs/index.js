const express = require('express');
const app = express();
const PORT = 8080;
const router = require("./routers/rutas.js")


const server = app.listen(PORT, () =>{
    console.log('servidor levantado en el puerto ' + server.address().port)
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

/*config Ejs */
app.set('view engine', 'ejs')

app.use("/", router)


