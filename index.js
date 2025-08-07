const express = require('express');
const app = express();
const PORT = process.env.PORT


//ENDPOINT QUE RESPONDE A UN MENSAJE
app.get('/', (_req, res) => {
    res.send('Integracion continua funcional');
});

app.listen(PORT, ()=> {

    console.log(`Servidor corriendo en el puerto ${PORT}`);

});