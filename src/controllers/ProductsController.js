import Product from '../models/Products.js';

export default {
  async index(request, response) {
    const { category } = request.query;
  
    try {
      const result = category
      ? await Product.find({"category": category})
      : await Product.find();
  
      return response.json(result);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async store(request, response) {
    const { name, price, amount, category } = request.body;
  
    const newProduct = {
      name,
      price,
      amount,
      category
    }
  
    try {
      const product = await Product.create(newProduct);
      return response.status(201).json(product);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, price, amount, category } = request.body;
  
    const editedProduct = {
      name,
      price,
      amount,
      category
    }
    
    try {
      const productUpdateInformation = await Product.updateOne({_id: id}, editedProduct)
      
      if(productUpdateInformation.matchedCount === 0){
        return response.status(404).json({ error: "Produto não encontrado." });
      }
      
      return response.json(editedProduct);
    } catch (error) {
      return response.status(500).json({ error });
    }
  },

  async destroy(request, response) {
    const { id } = request.params;
  
    try {
      const productDeleteInformation = await Product.deleteOne({_id: id})
  
      if(productDeleteInformation.deletedCount === 0){
        return response.status(404).json({ error: "Produto não encontrado." });
      }
      
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
};