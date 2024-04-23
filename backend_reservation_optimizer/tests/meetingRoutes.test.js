const request = require('supertest');
const app = require('../src/server');

describe('Meetings API', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app)
            .post('/users/login')
            .send({
                username: 'test5@example.com',
                password: 'pass123'
            });
        token = res.body.token;
    });

    it('should create a new meeting', async () => {
        const res = await request(app)
            .post('/meetings')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'testing case - create meeting',
                description: 'Progress meeting - testing ',
                startTime: '2023-04-05T09:00:00.000Z',
                endTime: '2023-04-05T10:00:00.000Z',
                zoomRoomId: 'abc123',
                organizerUserId: '1234567890',
                participants: ['1234567890', '0987654321']
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'testing case - create meeting');
    });

    it('should get all meetings', async () => {
        const res = await request(app)
            .get('/meetings')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });

    it('should update a meeting', async () => {
        const meeting = await request(app)
            .post('/meetings')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Meeting to Update'            });

        const res = await request(app)
            .put(`/meetings/${meeting.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Updated Meeting',
                // Otros campos actualizados
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Meeting');
    });

    it('should delete a meeting', async () => {
        const meeting = await request(app)
            .post('/meetings')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'testing case - delete meeting'
            });

        const res = await request(app)
            .delete(`/meetings/${meeting.body._id}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Meeting deleted successfully');
    });
});
