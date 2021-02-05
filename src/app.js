import express from 'express';

import routes from './routes';

const app = express();

// Configura para receber e retornar json
app.use(express.json());

app.use(routes);

export default app;
// Na maioria dos casos é encorajado utilizar apenas 
// um export default (e fazer isso só no final do módulo).
// Então você pode importar a API como o nome do próprio módulo.