const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reservationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  time: String,
  date: String,
  menu: [{String}],
  people: Number
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Reservation', reservationSchema); 