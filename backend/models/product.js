const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 },
  comment: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
