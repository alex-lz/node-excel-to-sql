## Convertidor de archivos

Código fuente de un servidor en Express con Handlebars(hbs) y desplegado en Heroku
para convertir tablas de Excel en consultas de sql


Ejecuta este comando para instalar 
las dependecias de la aplicación

```
npm install
```

* Inicia el servidor

```
npm start
node server
```

* Inicia el servidor con nodemon(focus files)

```
nodemon server -e js,hbs,html,css
```

* Abrir en heroku

```
heroku open
```

* Middleware - /public

```
http://localhost:3000/excel.xlsx
http://localhost:3000/assets/(file_or_dir)
```

* Rutas a los views

```
http://localhost:3000/
http://localhost:3000/about
```

* Helpers
* React: [Use React and Spring Boot to Build a Simple CRUD App](https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot)

[Uppy](https://uppy.io/)
[express-fileupload](https://github.com/richardgirges/express-fileupload/tree/master/example)
[download-a-file-from-nodejs](https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express)

