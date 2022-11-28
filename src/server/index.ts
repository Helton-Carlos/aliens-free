import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/users", () => ({
        company: [
          { id: 0, email: "teste@gmail.com", password: "teste@gmail.com" },
        ],
      }));
    },
  });

  return server;
}
