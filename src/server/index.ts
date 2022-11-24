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
          { id: 0, nome: "correios", numero: 10 },
          { id: 1, nome: "jadlog", numero: 15 },
          { id: 2, nome: "loggi", numero: 10 },
        ],
      }));
    },
  });

  return server;
}
