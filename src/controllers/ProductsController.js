import { v4 as uuidv4 } from 'uuid';

const products = [];

export default {
  index(request, response) {
    const { category } = request.query;

    const result = category
      ? products.filter(products => products.category.includes(category))
      : products;
  
    return response.json(result);
  },

  store(request, response) {
    const { name, price, amount, category } = request.body;

    const newProduct = {
      id: uuidv4(),
      name,
      price,
      amount,
      category
    }
  
    products.push(newProduct);
  
    return response.status(201).json(newProduct);
  },

  update(request, response) {
    const { id } = request.params;
    const { name, price, amount, category } = request.body;
  
    const indexProduct = products.findIndex(p => p.id === id);
  
    if (indexProduct < 0) {
      return response.status(400).json({ error: "Produto não encontrado." });
    }
  
    const editedProduct = {
      id,
      name,
      price,
      amount,
      category
    }
  
    products[indexProduct] = editedProduct;
  
    return response.json(editedProduct);
  },

  destroy(request, response) {
    const { id } = request.params;

    const indexProduct = products.findIndex(p => p.id === id);
  
    if (indexProduct < 0) {
      return response.status(400).json({ error: "Produto não encontrado." })
    }
  
    products.splice(indexProduct, 1);
  
    return response.status(204).send();
  }
};