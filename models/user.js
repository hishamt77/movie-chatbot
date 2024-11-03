const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    subscribed: { type: Boolean, default: false }
});

UserSchema.methods.hashPassword = function() {
    return bcrypt.hashSync(this.password, 10);
};

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);