import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});


app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render('index.ejs', { adjective: randomAdj, noun: randomNoun });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "Algorithmic",
  "Binary",
  "BruteForce",
  "Optimized",
  "Recursive",
  "Greedy",
  "Dynamic",
  "Parallel",
  "Asymptotic",
  "Bitwise",
  "Inner",
  "E rrrrr",
  "HuH",
];

const noun = [
  "Coders",
  "Hackers",
  "Debuggers",
  "Compilers",
  "ProblemSolvers",
  "Contestants",
  "CodeWarriors",
  "AlgoMasters",
  "LogicLords",
  "BugHunters",
  "Peace",
  "Skrrrtttt",
  "OK",
];
