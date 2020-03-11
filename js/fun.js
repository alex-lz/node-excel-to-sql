
const subir = () => {
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();

    formData.append("photo", photo);
    fetch('/upload', {method: "POST", body: formData});
}

module.exports = {
    subir
}

/** JavaScript
const outer  = document.getElementById('subir');

outer.addEventListener('click', onceHandler);

function onceHandler() {
  alert('outer, once');
} */


/** Handlebars
 * const hbs = require('hbs');

// Helpers
hbs.registerHelper('subir', () => {
    console.log("Hi");
})*/