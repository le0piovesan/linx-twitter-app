const express = require('express');
const Twit = require('twit');
const { useReducer } = require('react');
const app = express();
require('dotenv').config();


var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/api/gettweets', (req, res) => {
  T.get('search/tweets', { q: '%23javascript since:2020-01-01', result_type: 'mixed', count: 100 }, function (err, data, response) {
    const tweets = data.statuses;

    const filteredTweets = tweets.filter(tweet => {
      return !tweet.text.startsWith('RT')
    })
    res.json(filteredTweets)
  })
})

app.get('/:hashtags', (req, res) => {
  T.get('search/tweets', { q: `%23${req.params.hashtags} since:2020-01-01`, result_type: 'mixed', count: 100 }, function (err, data, response) {
    const tweets = data.statuses;

    const filteredTweets = tweets.filter(tweet => {
      return !tweet.text.startsWith('RT')
    })
    res.json(filteredTweets)

  })
})



// PORTA MAQUINA LOCAL: 8888
// PORTA HEROKU: process.env.PORT
app.listen(process.env.PORT);