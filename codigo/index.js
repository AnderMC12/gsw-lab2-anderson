// Dulce Hogar - API mínima de reservación de pedidos (Express)
const express = require('express');
const app = express();
const PORT = 9090;

// GET /api/saludo?nombre=Ana
app.get('/api/saludo', (req, res) => {
  const nombre = req.query.nombre || 'mundo';
  res.json({ mensaje: `Hola, ${nombre}`, desde: 'dulcehogar:9090' });
});

// GET /api/pedido?producto=pastel&cantidad=2
app.get('/api/pedido', (req, res) => {
  const { producto, cantidad } = req.query;
  res.json({
    pedidoId: 'PED-' + Date.now(),
    producto,
    cantidad,
    estado: 'recibido'
  });
});

app.listen(PORT, () => {
  console.log(`[dulcehogar.api] http://localhost:${PORT}`);
});
