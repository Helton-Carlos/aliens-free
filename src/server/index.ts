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
        client: [
          {
            id: 0,
            email: "teste@gmail.com",
            password: "teste@gmail.com",
            token: "sdfdfd784ewe2fdc20150dsa23vcasvbe",
            user: "Helton Brito",
            age: "29/07/1990",
            money: "200.00",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      }));

      this.get("/money", () => ({
        moedas: [
          {
            code: "USD",
            codein: "BRL",
            name: "Dólar Americano/Real Brasileiro",
            high: "5.2941",
            low: "5.2941",
            image: "./src/assets/icon/Crypto_blue.svg",
            pctChange: "0",
            bid: "5.2938",
            ask: "5.2943",
            timestamp: "1670968803",
            create_date: "2022-12-13 19:00:03",
          },
          {
            code: "EUR",
            codein: "BRL",
            name: "Euro/Real Brasileiro",
            high: "5.631",
            low: "5.6228",
            image: "./src/assets/icon/Crypto_yellow.svg",
            pctChange: "-0.01",
            bid: "5.6252",
            ask: "5.6278",
            timestamp: "1670978335",
            create_date: "2022-12-13 21:38:55",
          },
          {
            code: "BTC",
            codein: "BRL",
            name: "Bitcoin/Real Brasileiro",
            high: "94",
            low: "89.752",
            image: "./src/assets/icon/Crypto_blue.svg",
            pctChange: "2.83",
            bid: "93.097",
            ask: "93.178",
            timestamp: "1670978056",
            create_date: "2022-12-13 21:34:16",
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
