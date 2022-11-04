import mongoose from '../database/index.js';

const ProductsSchema = new mongoose.Schema({

	// Não precisamos usar o ID, pois o mongo cria automaticamente.

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Relacionando o schema ProductsSchema ao model Product no banco de dados.
const Product = mongoose.model('Product', ProductsSchema);

export default Product;