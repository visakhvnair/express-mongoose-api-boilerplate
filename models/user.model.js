const mongoose = require('mongoose');
const appConstants = require("../config/constants.config.js")

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: appConstants.STATUS_ACTIVE,
  },
  roles: [{
    type: String,
  }],
},
  {
    versionKey: false
  });

module.exports = mongoose.model('User', UserSchema);
