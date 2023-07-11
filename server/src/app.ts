import express from "express";
import rank from "./routes/rank";
import getRandomWords from "./routes/word";

const { wordList, scoresList } = require("./TestData.json");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/wordList", getRandomWords(wordList));

app.post("/api/rank", rank(scoresList));

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
