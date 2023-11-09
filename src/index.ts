import express, { Request, Response } from "express";

export const api = express();
const port = 3000;

api.get("/", (request: Request, response: Response) => {
  response.send("Hello, World!");
});

api.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
