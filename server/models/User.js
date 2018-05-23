const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const PLM      = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  photo: String,
  role: {
    type: String,
    enum: ['USER', 'RESTAURANT', 'MASTERMIND'],
    default: 'USER'
  },
  tables: [String],
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.plugin(PLM, {usernameField: 'email'});
module.exports = mongoose.model('User', userSchema);
