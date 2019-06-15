const request = require('request')

const url = 'https://api.darksky.net/forecast/c295e4bbc575b7c86322e1e03e9c080e/37.8267,-122.4233'

request(url, (error, response) => {
  const data = JSON.parse(response.body)
})