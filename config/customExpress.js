const consign = require('consign');
const express = require('express');
const bodyParser = require('body-parser');
module.exports = () => {
  const app = express();

  // O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Ex: (Json)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Consign serve para separar e modular as rotas (controllers)
  consign().include('controllers').into(app);
  return app;
};
