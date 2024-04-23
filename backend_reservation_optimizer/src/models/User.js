const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin', 'standard_user'], default: 'standard_user' },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('passwordHash')) {
        this.passwordHash = await this.passwordHash;
    }
    next();
});
    
const User = mongoose.model('User', userSchema);
module.exports = User;
