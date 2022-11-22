const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { config } = require("dotenv");

const Todo = require("./routes/todo");

config();

const app = express();
const port = 5000;

connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todo", Todo);

app.listen(port, () => {
  console.log(`Endpoint: http://localhost:${port}`);
});
