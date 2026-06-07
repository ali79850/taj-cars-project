const express = require("express");
const cors = require("cors");
const PORT = require("./config/config");
const app = express();
const adminRoutes = require("./routes/admin.routes");
const carRoutes = require("./routes/car.routes");
const contactRoutes = require("./routes/contact.routes");
const connectDB = require("./config/db");

app.use(express.json());

app.use(cors());
connectDB();
app.use("/api/admin", adminRoutes);
app.use("/api/car", carRoutes);
app.use("/api/contact", contactRoutes);
app.listen(PORT, () => {
  console.log(`Server is listening at http:localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Hey There buddies from backend of taj cars",
  });
});
