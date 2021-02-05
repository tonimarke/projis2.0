//importa o app, que faz uso do express
import app from './app';
//Deixa o servidor aguardando requisições (rest) na porta 3333
app.listen(3333, () => {
  console.log('Server is runing at port 3333');
});