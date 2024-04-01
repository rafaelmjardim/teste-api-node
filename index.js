const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.send('Bem-vindo a API de teste!');
    return res.json({message: 'Bem-vindo'})
})

app.listen(443, () => {
    console.log(`Servidor rodando na porta 3333`);
})