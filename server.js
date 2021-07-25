/* 
Descricao :
	Arquivo de configuração dos verbos HTTP
Aluno :
	Denise Ferreira Santos
Data :
	21 / 07 / 2021
*/
const express = require('express');
const app = express();
const data = require("./data.json");
const cors = require("cors");
app.use(express.json());
app.use(cors());
// verbos HTTP
// GET : Receber
// POST : Enviar
// PUT : Atualizar
// DELETE : Deletar
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);

app.get("/clients", function(req, res) {
  res.json(data);
});

app.get("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", function(req, res) {
  const { name, email } = req.body;

  res.json({ name, email });
});

app.put("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clients/:id", function(req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});

app.listen(3000, function() {
  console.log("Servidor em execução");
});
