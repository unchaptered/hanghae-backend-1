import request from 'supertest';

describe('API Test', () => {

    let app;

    beforeAll(async () => {
        app = await import('../../src/index');
    });

    it('GET /POST', async () => {

        const response = await request(app).get('/post').sned();
        expect(response.statusCode).toBe(201);

    });

});