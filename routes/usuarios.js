module.exports = function(app){
  var usuarios = app.controllers.usuarios;

   app.get('/usuarios', usuarios.index);
   app.get('/create', usuarios.create);
   app.post('/usuarios', usuarios.insert);
   app.get('/usuarios/edit/:id', usuarios.edit);
   app.post('/usuarios/edit/:id', usuarios.update);
   app.get('/usuarios/delete/:id', usuarios.delete);

}
