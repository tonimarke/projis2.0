import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.status(201).json({ message: 'Hello World!!!!' });
});

export default routes;
