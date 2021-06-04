import app from "../src/app";
import request from "supertest";

describe('GET /customers - retrieve customers list', () => {

    it("should receive a response code of 200", async () => {
        const result = await request(app).get("/");
        expect(result.statusCode).toEqual(200);
    });

    it('should have the correct metadata', async () => {
        const result = await request(app).get("/customers");
        expect(result.body).toHaveProperty('data');
        expect(Array.isArray(result.body.data)).toBe(true);

    })

    it('shuld not have an error', async () => {
        const result = await request(app).get("/customers");
        expect(result.body).toHaveProperty('error');
        expect(result.body.error).toBe(null);
    })
})