const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/",(req,res) =>{
    axios.get("http://localhost:8089/clientes").then(clientes=>{
          res.render("view",{clientes:clientes.data})
    }).catch(error =>{
          console.log(error)
    })
}); 

router.get("/cliente/new",(req,res) =>{

    var sexo={
       F:"F",
       M:"M"
    }
    res.render("new",{sexo:sexo})
});


router.get("/cliente/save",(req,res) =>{
    

    var cliente ={
        nome:req.body.nome,
        cpf:req.body.cpf,
        email:req.body.email,
        telefone:req.body.telefone,
        sexo:req.body.sexo,
        data_de_nascimento:req.body.data_de_nascimento,
    }

    axios.post("http://localhost:8089/cliente/create",cliente).then(()=>{
          res.redirect("/")
    }).catch(error =>{
          console.log(error)
    })
}); 


router.post("/cliente/delete",(req,res) =>{
    var id = req.body.id
    
    axios.post("http://localhost:8089/cliente/delete",id).then(()=>{
          res.redirect("/")
    }).catch(error =>{
          console.log(error)
    })
}); 

router.get("/cliente/edit/:id",(req,res) =>{
      var id = req.params.id
      
      axios.get("/cliente/edit/:id",id).then((cliente)=>{
            res.render("edit",{cliente:cliente})
      }).catch(error =>{
            console.log(error)
      })
}); 

router.post("/cliente/upgrade",(req,res) =>{
      var cliente ={
            id:req.body.id,
            nome:req.body.nome,
            cpf:req.body.cpf,
            email:req.body.email,
            telefone:req.body.telefone,
            sexo:req.body.sexo,
            data_de_nascimento:req.body.data_de_nascimento,
      }
      
      axios.post("http://localhost:8089/cliente/update",cliente).then(()=>{
            res.redirect("/")
      }).catch(error =>{
            console.log(error)
      })
}); 
  

module.exports = router;