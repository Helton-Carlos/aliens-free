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
        reminders: [
          { id: 0, nome: "helton", numero: 5 },
          { id: 1, nome: "tayna", numero: 5 },
          { id: 2, nome: "talita", numero: 10 },
        ],
      }));
    },
  });

  return server;
}
