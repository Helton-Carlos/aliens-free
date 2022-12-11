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
              "The U.S. dollar is strengthening because the Fed adopted a hawkish monetary policy stance in response to skyrocketing inflation.",
            imagem: "../src/assets/icon/Aliens.svg",
          },
          {
            title: "Down of the EURO",
            context:
              "We look at three important factors that affect U.S. dollar value, and how to determine ... If the demand for the dollar increases then so does its value.",
            imagem: "../src/assets/icon/Aliens.svg",
          },
          {
            title: "Discount on purchase",
            context:
              "Purchase discount is an offer from the supplier to the purchaser, to reduce the payment amount if the payment is made within a certain period of time.",
            imagem: "./src/assets/icon/Aliens.svg",
          },
          {
            title: "Purchase options",
            context:
              "A purchase option assures the option holder of the right to purchase property at a certain price within a certain time period but without an obligation to do so.",
            imagem: "./src/assets/icon/Aliens.svg",
          },
        ],
      }));
    },
  });

  return server;
}
