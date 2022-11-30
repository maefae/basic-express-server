const { app } = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app);

describe("ValidatorServerTesting", () => {
  it("should respond with 500 if no name in the query string", async () => {
    const response = await request.get("/person");
    expect(response.status).toEqual(500);
  });

  it("should respond with 200 if the name is in the query string", async () => {
    const response = await request.get("/person?name=Megan");
    expect(response.status).toEqual(200);
  });

  it("should respond with the correct name in the query string", async () => {
    const response = await request.get("/person?name=Megan");
    expect(response.body.name).toEqual("Megan");
  });
});
