import express from 'express';

import routes from './routes';

const app = express();

// Configura para receber e retornar json
app.use(express.json());

app.use(routes);

export default app;
