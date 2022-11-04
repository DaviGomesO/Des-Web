import { Router } from 'express';
import productsController from '../controllers/ProductsController.js'

// Importação do uuid do index.

const productsRoutes = Router();


// Todas as rotas criadas no index.
productsRoutes.get('/', productsController.index);

productsRoutes.post('/', productsController.store);

productsRoutes.put('/:id', productsController.update);

productsRoutes.delete('/:id', productsController.destroy);

export default productsRoutes;