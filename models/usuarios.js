module.exports = function(){

  var mongoose  = require("mongoose");
  var schema = mongoose.Schema;

  var usuariosSchema = new schema({
    nome: String,
    user_name: String,
    senha: String,
    cad_date: {type: Date, default: Date.now}
  });

   return mongoose.model('Usuarios', usuariosSchema);
}
