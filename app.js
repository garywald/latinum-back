const express = require('express');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const app = express();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

app.get('/', function(req, res) {
    res.send("lorem Ipsum");
})

app.get('/megaPass', function(req, res) {
    res.send(lorem.generateParagraphs(7))
})

app.listen(process.env.PORT, ()=> { 
    console.log(`App listening on http://localhost:${process.env.PORT}`)
})