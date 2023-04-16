import express from 'express'
import { sequelize } from './databases/conecta.js'
import cors from "cors"
import routes from './routes.js'


const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db(){
    try{
        await sequelize.authenticate();
        console.log('Conexão com Banco de dados Realizada com sucesso');
        await sequelize.sync({
})
    } catch(erro){
        console.error('Erro na conexão com o banco')
    }
}

conecta_db()

app.get('/', (req, res) => {
  res.send('Projeto : API veiculo')
})

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
  })