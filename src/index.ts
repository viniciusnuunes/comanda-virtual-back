import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log('Rota funcionando');
})

app.listen(3000, () => {
    console.log('Servidor Rodando...');
})
