"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle", (req, res) => {
  const r = req.query;

  if (!r) {
    return res.status(400);
  }

  const pole = Math.PI * r.r * r.r;
  const obwod = 2 * Math.PI * r.r;

  res.json({ pole, obwod });
});

//TODO2

app.get("/math/rectangle", (req, res) => {
  const r = req.query;

  if (!r) {
    return res.status(400);
  }

  const pole = r.a * r.b;
  const obwod = 2 * (r.a + r.b);

  res.json({ pole, obwod });
});

app.get("/math/power/:base/:exponent", (req, res) => {
  const r = req.params;

  if (!r) {
    return res.status(400);
  }

  const potega = Math.pow(r.base, r.exponent);
  if (req.query.root == "true") {
    const pierwiastek = Math.sqrt(r.base);
    res.json({ potega, pierwiastek });
  } else {
    res.json({ potega });
  }
});
//TODO3

let categories = ["funnyJoke", "lameJoke"];

let funnyJoke = [
  {
    joke: "Dlaczego komputer poszedł do lekarza?",

    response: "Bo złapał wirusa!",
  },

  {
    joke: "Dlaczego komputer nie może być głodny?",

    response: "Bo ma pełen dysk!",
  },

  {
    joke: "Co mówi jeden bit do drugiego?",

    response: "„Trzymaj się, zaraz się przestawiamy!”",
  },
];

let lameJoke = [
  {
    joke: "Dlaczego programiści preferują noc?",

    response: "Bo w nocy jest mniej bugów do łapania!",
  },

  {
    joke: "Jak nazywa się bardzo szybki programista?",

    response: "Błyskawiczny kompilator!",
  },
];

app.get("/jokebook/categories", (req, res) => {
  res.json(categories);
});

app.get("/jokebook/joke", (req, res) => {
  const category = req.query.category;
  if (!category) {
    return res.status(400);
  }
  if (category === "funnyJoke") {
    const randomJoke = funnyJoke[Math.floor(Math.random() * funnyJoke.length)];
    res.json(randomJoke);
  } else {
    const randomJoke = lameJoke[Math.floor(Math.random() * lameJoke.length)];
    res.json(randomJoke);
  }
  // res.json(categories);
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
