require("dotenv").config();
const express = require("express");
const db = require("./db");
db.connect();
const userRouter = require("./routes/user.routes");

const PORT = process.env.PORT || 8085;

const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
