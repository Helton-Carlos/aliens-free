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

      this.get("/notification", () => ({
        note: [
          {
            title: "increase in dollar",
            context:
              "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "../src/assets/icon/Aliens.svg",
          },
          {
            title: "Down of the EURO",
            context:
              "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "../src/assets/icon/Aliens.svg",
          },
          {
            title: "Discount on purchase",
            context:
              "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "./src/assets/icon/Aliens.svg",
          },
          {
            title: "Purchase options",
            context:
              "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "./src/assets/icon/Aliens.svg",
          },
        ],
      }));
    },
  });

  return server;
}
