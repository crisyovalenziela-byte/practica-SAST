const express = require('express');
const app = express();

app.get('/run', (req, res) => {
    let userInput = req.query.code;

    // FALLO DE SEGURIDAD INTENCIONAL (Code Injection):
    // Evaluar código enviado directamente por el usuario sin sanitizar
    let result = eval(userInput);

    res.send("Resultado: " + result);
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
