const { app } = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app);

describe("APIServerTesting", () => {
  it("should respond with 404 on a bad route", async () => {
    const response = await request.get("/badroute");
    expect(response.status).toEqual(404);
  });

  it("responds with 404 on a bad method", async () => {
    const response = await request.post("/");
    expect(response.status).toEqual(404);
  });
});
