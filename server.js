/** Server con Express y handlebars */ 
const express = require('express')
const app = express()
const hbs = require('hbs');
const colors = require('colors')
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 3000;// To get port env variables from heroku
const fs = require('fs')
const converter = require('./js/converter')
require('./hbs/helpers')


// Middleware - directorio publico
app.use(express.static( __dirname + '/public'))

/** Rutas a los views */ 
// Express HBS - HandleBars(engine)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/about', function (req, res) {
    res.render('about')
})

/** File upload */
app.use(fileUpload());

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  // console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/uploads/' + sampleFile.name;
  
  // Remove old file
  try {
    fs.unlinkSync('uploads/' + sampleFile.name)
   //file removed
  } catch(err) {
    console.error(err)
  }

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
    converter.print(sampleFile.name)
  });
});

/** File download */
app.get('/download', function(req, res){
  const file = `${__dirname}/public/Ambientacion.sql`;
  res.download(file); // Set disposition and send it.
});


/** Run app on port */ 
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto`.yellow + ` ${ port }`.cyan)
})

// Nota: http://localhost:3000/index.html
// Nodemon este pendiente de mas archivos => nodemon server -e js,hbs,html,css
 