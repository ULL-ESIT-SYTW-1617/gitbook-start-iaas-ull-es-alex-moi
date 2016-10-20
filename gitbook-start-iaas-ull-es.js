
var exec = require("ssh-exec");
var fs = require('fs');


/* 


var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})
*/
  /*return gulpSSH
    .shell(['cd /home/usuario/src/sytw/iaas', 'git pull']);*/

function initialize() {
    console.log("\nmodulo initialize");

};

function deploy(ip, ruta, url) {
    console.log("\n Comenzando el deploy en Iaas");
    console.log('Direccion IP Destino: '+ip);
    console.log('Ruta de destino: '+ruta);
    console.log('Repositorio origen: '+url);
    
    
   /*var config = {
      host: '10.6.128.129',
      port: 22,
      username: 'usuario',
      privateKey: fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)
    }
    */
    
    exec('cd src/sytw/iaas2/iaas2/; git pull git@github.com:alu0100767421/iaas2.git', {
      user: 'usuario',
      host: '10.6.128.129',
      key: '~/.ssh/id_rsa.pub'
    });
    
  
};

module.exports = {
  initialize,
  deploy
}