// testUserModel.js
const connectDB = require('../src/database');
const User = require('../src/models/User');

connectDB();

const testUser = new User({
    email: "test@example.com",
    passwordHash: "test123",
    role: "standard_user"
});

testUser.save()
    .then(user => {
        console.log('Nuevo usuario creado:', user);
        process.exit();
    })
    .catch(error => {
        console.error('Error al crear usuario:', error);
        process.exit(1);
    });
