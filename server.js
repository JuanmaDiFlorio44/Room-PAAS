const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para servir los archivos estáticos
app.use(express.static(path.join(__dirname, "dist")));

// Ruta para manejar todas las demás peticiones y servir el index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
