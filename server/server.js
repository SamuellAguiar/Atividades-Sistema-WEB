import express from 'express'
import cors from 'cors';
import { estadoRouter } from './src/routes/estados.js';
import { cidadeRouter } from './src/routes/cidades.js'
import { pessoaRouter } from './src/routes/pessoas.js';
import { tipoRouter } from './src/routes/tipos.js';
import { localRouter } from './src/routes/locais.js';
import { doacaoRouter } from './src/routes/doacoes.js';

const server = express();
const PORT = 5000

server.use(express.json())
server.use(cors());

// Routes
server.get('/', (request, response) => {
     response.json({
          message: 'Status: Server is running.'
     })
})

server.use(estadoRouter);
server.use(cidadeRouter);
server.use(pessoaRouter);
server.use(tipoRouter);
server.use(localRouter);
server.use(doacaoRouter);


server.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}!`)
})