const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/signals", (req, res) => {
  console.log("Signal empfangen:", req.body);
  res.json({ ok: true });
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
