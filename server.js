const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/signals/latest", (req, res) => {
  res.json({
    symbol: "EURUSD",
    action: "BUY",
    lot: 0.10,
    sl: 30,
    tp: 60
  });
});

app.listen(PORT, () => {
  console.log(`Signal API läuft auf http://localhost:${PORT}/api/signals/latest`);
});