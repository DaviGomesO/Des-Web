import { Router } from 'express';
import productsRoutes from './products.routes.js';

const routes = Router();

routes.use('/products', productsRoutes);

export default routes;