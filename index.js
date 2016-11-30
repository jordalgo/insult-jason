var insult = require('./insult');
var insultJason = insult.bind(null, 'Jason Palmer');

module.exports = insultJason;
