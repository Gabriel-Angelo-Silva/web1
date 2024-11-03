const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.get('/rivais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rivais.html'));
});

app.get('/detalhes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'detalhes.html'));
});

app.get('/jogadores', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jogadores.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
