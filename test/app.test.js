import app from '../app.js';
import supertest from 'supertest';
const request = supertest(app);

describe('node-commonjs-to-esm test suite', () => {

    it('tests a GET on the main route', async () => {
        const response = await request
            .get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toStrictEqual('Hi there!');
    });

    it('tests a GET on route 1', async () => {
        const response = await request
            .get('/route1');
        expect(response.status).toBe(200);
        expect(response.body.message).toStrictEqual('Route 1');
    });

    it('tests a GET on route 2', async () => {
        const response = await request
            .get('/route2');
        expect(response.status).toBe(200);
        expect(response.body.message).toStrictEqual('Route 2');
    });

});