const hbs = require('hbs');


// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})