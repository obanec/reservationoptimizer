const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'standard_user'], default: 'standard_user' }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('passwordHash')) {
        this.passwordHash = await this.passwordHash;
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
