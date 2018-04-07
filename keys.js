
var twitterKeys = {
  consumer_key: '76v2wfVWjov9lZsPFqpHBdE8b',
  consumer_secret: 'MkoSPu73B7Ase4jtkPFF2VjFOFK0hqNq7nk0WvDd4ntgT0lJ67',
  access_token_key: '982489197343924226-2cOT5GJoUg9n2kjm5Oi1wSHow7UusgL',
  access_token_secret: '982489197343924226-2cOT5GJoUg9n2kjm5Oi1wSHow7UusgL',
}
// Spotify
var spotifyKeys = {
  client_ID: 'f03514e9e2b9414cab3bf40e9b162802',
  client_secret: '8c70b1ad333c4538b35c93f78ebaaf96'
}
// OMDB
var 
omdbKey ='trinity';

module.exports.twitterKeys = twitterKeys;
module.exports.spotifyKeys = spotifyKeys;
module.exports.omdbKey = omdbKey;

//Could not get keys.js to work with .env file. If I understood correctly,keys.js would
//not hold the API keys instead keys.js would reference .env file and .env file would hold
//the API keys
