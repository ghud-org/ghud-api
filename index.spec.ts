import request from "supertest";
import { api, validateInteraction } from ".";

describe("API for managing interactions", () => {
  it('responds with "Hello, World!" at the root URL', async () => {
    const response = await request(api).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });

  describe("validateInteraction", () => {
    it("should indicate a valid provided interaction as validated", () => {
      const dataProvided = {
        id: "interaction",
        description: "description",
        units: 10,
        hours: 10,
        people: [
          {
            id: "person",
            name: "name",
          },
        ],
      };
      const validatedInteraction = validateInteraction({
        interaction: dataProvided,
      });
      expect(validatedInteraction.validated).toEqual(true);
    });

    it("should indicate an interaction missing an id as not validated", () => {
      const dataProvided = {
        description: "description",
        units: 10,
        hours: 10,
        people: [
          {
            id: "person",
            name: "name",
          },
        ],
      };
      const validatedInteraction = validateInteraction({
        interaction: dataProvided as any,
      });
      expect(validatedInteraction.validated).toEqual(false);
    });

    it("should indicate an interaction missing a description as not validated", () => {
      const dataProvided = {
        id: "interaction",
        units: 10,
        hours: 10,
        people: [
          {
            id: "person",
            name: "name",
          },
        ],
      };
      const validatedInteraction = validateInteraction({
        interaction: dataProvided as any,
      });
      expect(validatedInteraction.validated).toEqual(false);
    });

    it("should indicate an interaction missing a units value as not validated", () => {
      const dataProvided = {
        id: "interaction",
        description: "description",
        hours: 10,
        people: [
          {
            id: "person",
            name: "name",
          },
        ],
      };
      const validatedInteraction = validateInteraction({
        interaction: dataProvided as any,
      });
      expect(validatedInteraction.validated).toEqual(false);
    });

    it("should indicate an interaction missing an hours value as not validated", () => {
      const dataProvided = {
        id: "interaction",
        description: "description",
        units: 10,
        people: [
          {
            id: "person",
            name: "name",
          },
        ],
      };
      const validatedInteraction = validateInteraction({
        interaction: dataProvided as any,
      });
      expect(validatedInteraction.validated).toEqual(false);
    });
  });
});
