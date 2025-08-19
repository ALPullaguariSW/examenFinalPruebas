import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//endpoint de respuesta
app.get('/', (req, res) => {
  res.send('Integracion');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});