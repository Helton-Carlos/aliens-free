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

      this.get("/money", () => ({
        moedas: [
          {
            USDBRL: {
              code: "USD",
              codein: "BRL",
              name: "Dólar Americano/Real Brasileiro",
              high: "5.2941",
              low: "5.2941",
              varBid: "0",
              pctChange: "0",
              bid: "5.2938",
              ask: "5.2943",
              timestamp: "1670968803",
              create_date: "2022-12-13 19:00:03",
            },
            EURBRL: {
              code: "EUR",
              codein: "BRL",
              name: "Euro/Real Brasileiro",
              high: "5.631",
              low: "5.6228",
              varBid: "-0.0008",
              pctChange: "-0.01",
              bid: "5.6252",
              ask: "5.6278",
              timestamp: "1670978335",
              create_date: "2022-12-13 21:38:55",
            },
            BTCBRL: {
              code: "BTC",
              codein: "BRL",
              name: "Bitcoin/Real Brasileiro",
              high: "94",
              low: "89.752",
              varBid: "2564",
              pctChange: "2.83",
              bid: "93.097",
              ask: "93.178",
              timestamp: "1670978056",
              create_date: "2022-12-13 21:34:16",
            },
          },
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
