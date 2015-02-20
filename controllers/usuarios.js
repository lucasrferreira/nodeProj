module.exports = function(app){

  var Usuario =  app.models.usuarios;

  var UsuarioController = {
    index: function(req, res){
      Usuario.find(function(err,data){
        if(err){
          console.log(err);
        }else{
          res.render("usuarios/index", {lista:data});
        }
      });
    },

    create: function(req,res){
      res.render("usuarios/create");
    },

    insert: function(req,res){
        var model = new Usuario(req.body);
        model.save(function(err, data){
          if(err){
            console.log(err);
          }
          res.redirect('/usuarios');
        });

      },

      edit: function(req,res){
        Usuario.findById(req.params.id, function(err, data){
          if(err){
            console.log(err);
          }else{
            res.render('usuarios/edit', {value: data});
          }
        });
      },

      delete: function(req,res){

        Usuario.remove({_id: req.params.id}, function(err, data){
          if(err){
            console.log(err);
          }else{
            res.redirect('/usuarios');
          }
        });
      },


    update: function(req,res){
      Usuario.findById(req.params.id, function(err, data){
        if(err){
          console.log(err);
        }else{
          var model = data;
          model.nome = req.body.nome;
          model.user_name = req.body.user_name;
          model.senha = req.body.senha;
          model.save(function(err, data){
            if(err){
              console.log(err);
            }else{
              res.redirect('/usuarios');
            }

          });

        }
      });
    }
  }

  return UsuarioController;

}
