const request = require('supertest');
const app = require('../src/server');

describe('ZoomRoomsAccount API', () => {
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

    it('should create a new ZoomRoom', async () => {
        const res = await request(app)
            .post('/zoomRoomAccount')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Test Zoom Room Account',
                capacity: 10
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', 'Test Zoom Room Account');
    });

    it('should get all ZoomRoomsAccount', async () => {
        const res = await request(app)
            .get('/zoomRoomAccount')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });

});
