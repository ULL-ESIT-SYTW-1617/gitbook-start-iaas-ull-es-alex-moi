
var exec = require("ssh-exec");
var fs = require('fs');



function initialize() {
    console.log("\nmodulo initialize");

};

function deploy(ip, ruta, url) {
    console.log("\n Comenzando el deploy en Iaas");
    console.log('Direccion IP Destino: '+ip);
    console.log('Ruta de destino: '+ruta);
    console.log('Repositorio origen: '+url);
    

    exec('cd '+ruta+';git clone '+url+'',{
          user: 'usuario',
          host: ip,
          key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
    
    },function(err){
     if(err)
    	console.log('Ha habido un error');
    });

};

module.exports = {
  initialize,
  deploy
}