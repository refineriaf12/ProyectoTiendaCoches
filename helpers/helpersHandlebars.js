const Handlebars = require('handlebars');

Handlebars.registerHelper('ifEquals', function(a, b, options) {
    if (a === b) {
      return options.fn(this);
    }
  
    return options.inverse(this);
  });

  module.exports = Handlebars;