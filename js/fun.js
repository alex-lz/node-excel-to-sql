
// Generar clave bancaria(Clabe) en base a la cuenta de 11 dígitos
const CLABE = (S) => {
    typeof S==="number" ? S +='':null;
    const clave = [1,3,7];// Clave de la institución(Coppel)
    const codigo = [7,3,0];// Código de producto financiero(Culiacán)
    const cuenta = S.split('').map(x=>+x);// Número del crédito/cuenta (Se concatenan 0 "ceros" del lado izquierdo para completar los 11 dígitos)

    const fullkey = clave.concat(codigo).concat(cuenta);
    const ponderacion = [3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7];
   
    let resultado = fullkey.map( (x,index)=>ponderacion[index]*x )
    let modulo10 = resultado.map( x=>x%10) ;
    let sumatoria = modulo10.reduce( (x,y)=>x+y );

    let digVerificador = 10 - (sumatoria%10);
    return '137730' + S + digVerificador;
}

/** Convertir string a number
function(x){return parseInt(x,10)}// version from techfoobar
(x)=>{return parseInt(x)}         // lambda are shorter and parseInt default is 10
(x)=>{return +x}                  // diff. with parseInt in SO but + is better in this case
x=>+x                             // no multiple args, just 1 function call
*/

const subir = () => {
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();

    formData.append("photo", photo);
    fetch('/upload', {method: "POST", body: formData});
}

module.exports = {
    subir,
    CLABE
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