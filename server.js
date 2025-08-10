import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, name: "ListingShield API", time: new Date().toISOString() });
});

app.get("/locations", (_req, res) => res.json([]));
app.post("/locations", (req, res) => res.status(201).json({ id: "demo", ...req.body }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(\API listening on \\));
