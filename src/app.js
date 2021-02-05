// primeiro é necessário importar o express inteiro com:
import express from 'express';

// depois é necessário criar o routes.js e importa-lo para termos acesso as rotas
import routes from './routes';

const app = express();

// Configura para receber e retornar json
app.use(express.json());

//usa as rotas importadas com o express
app.use(routes);

export default app;
// Na maioria dos casos é encorajado utilizar apenas 
// um export default (e fazer isso só no final do módulo).
// Então você pode importar a API como o nome do próprio módulo.
