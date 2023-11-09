import request from "supertest";
import { api } from ".";

describe("API for managing interactions", () => {
  it('responds with "Hello, World!" at the root URL', async () => {
    const response = await request(api).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
