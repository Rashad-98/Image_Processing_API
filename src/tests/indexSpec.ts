import supertest from "supertest";
import app from "..";

const request = supertest(app);

describe("End point test", () => {
  describe("santamonica image test suite", () => {
    it("should give status 200 ok for santamonica image with width 600 and height 400", async () => {
      const response = await request.get(
        "/api/images/?filename=santamonica&width=600&height=400"
      );
      expect(response.status).toBe(200);
    });
    it("should give status 200 ok for santamonica image with width 300 and height 200", async () => {
      const response = await request.get(
        "/api/images/?filename=santamonica&width=300&height=200"
      );
      expect(response.status).toBe(200);
    });
  });
  describe("encenada port image test suite", () => {
    it("should give status 200 ok for encenada port image with width 600 and height 400", async () => {
      const response = await request.get(
        "/api/images/?filename=encenadaport&width=600&height=400"
      );
      expect(response.status).toBe(200);
    });
    it("should give status 200 ok for encenada port image with width 300 and height 200", async () => {
      const response = await request.get(
        "/api/images/?filename=encenadaport&width=300&height=200"
      );
      expect(response.status).toBe(200);
    });
  });
  describe("Fjord image test suite", () => {
    it("should give status 200 ok for Fjord image with width 600 and height 400", async () => {
      const response = await request.get(
        "/api/images/?filename=Fjord&width=600&height=400"
      );
      expect(response.status).toBe(200);
    });
    it("should give status 200 ok for Fjord image with width 300 and height 200", async () => {
      const response = await request.get(
        "/api/images/?filename=Fjord&width=300&height=200"
      );
      expect(response.status).toBe(200);
    });
  });
  describe("iceland waterfall image test suite", () => {
    it("should give status 200 ok for iceland waterfall image with width 600 and height 400", async () => {
      const response = await request.get(
        "/api/images/?filename=icelandwaterfall&width=600&height=400"
      );
      expect(response.status).toBe(200);
    });
    it("should give status 200 ok for iceland waterfall image with width 300 and height 200", async () => {
      const response = await request.get(
        "/api/images/?filename=icelandwaterfall&width=300&height=200"
      );
      expect(response.status).toBe(200);
    });
  });
  describe("palm tunnel image test suite", () => {
    it("should give status 200 ok for palm tunnel image with width 600 and height 400", async () => {
      const response = await request.get(
        "/api/images/?filename=palmtunnel&width=600&height=400"
      );
      expect(response.status).toBe(200);
    });
    it("should give status 200 ok for palm tunnel image with width 300 and height 200", async () => {
      const response = await request.get(
        "/api/images/?filename=palmtunnel&width=300&height=200"
      );
      expect(response.status).toBe(200);
    });
  });
});
