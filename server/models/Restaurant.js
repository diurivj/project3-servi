const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  price: String,
  desc: String,
  photo: String,
  schedule: Date,
  menu: [{String}],
  available: Number,
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Restaurant', restaurantSchema); 