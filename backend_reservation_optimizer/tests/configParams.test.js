const request = require('supertest');
const app = require('../src/server');

describe('configParams API', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app)
            .post('/users/login')
            .send({
                email: 'test5@example.com',
                password: 'pass123'
            });
        token = res.body.token;
    });

    it('should create a new ConfigParams', async () => {
        const res = await request(app)
            .post('/configparam')
            .set('Authorization', `Bearer ${token}`)
            .send({
                paramName: 'Test ConfigParams',
                paramValue: 99, 
                description: 'Description for test reason'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('paramName', 'Test ConfigParams');
    });

    it('should get all configParams', async () => {
        const res = await request(app)
            .get('/configparam')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });

});
