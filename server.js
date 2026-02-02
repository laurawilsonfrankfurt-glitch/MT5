const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/signals", (req, res) => {
  console.log("Signal empfangen:", req.body);
  res.json({ ok: true });
});

app.get("/api/signals/latest", (req, res) => {
  res.json({
    symbol: "EURUSD",
    action: "BUY",
    lot: 0.1,
    sl: 30,
    tp: 60
  });
});

app.listen(PORT, () => {
  console.log(`Signal API läuft auf http://localhost:${PORT}/api/signals/latest`);
});
