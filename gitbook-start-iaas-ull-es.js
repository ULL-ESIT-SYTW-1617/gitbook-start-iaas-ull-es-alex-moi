
var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');

const GitUrlParse = require("git-url-parse");





function initialize() {
    console.log("\nmodulo initialize");

    fs.appendFile(path.join(__dirname, '..', 'gulpfile.js'),
        'gulp.task("deploy-iaas", function () {'+ 
        'var iaas = require("gitbook-start-iaas-ull-es-alex-moi"); var url = paquete.repository.url;'+
        'var iaas_ip = paquete.iaas.IP;'+
        'var iaas_path = paquete.iaas.PATH;'+
        'console.log(url)'+
        'console.log(iaas_ip)'+
        'console.log(iaas_path)'+
        'iaas.deploy(iaas_ip, iaas_path, url);'+
        '})', 'utf8', function(err){
            if(err)
                console.log(err)
        });




};

function deploy(ip, ruta, url) {

    var carpeta = GitUrlParse(url);

    console.log("\n Comenzando el deploy en Iaas");
    console.log('Direccion IP Destino: '+ip);
    console.log('Ruta de destino: '+ruta);
    console.log('Repositorio origen: '+url);
    console.log( carpeta.name);

   /* fs.existsSync(path.resolve(ruta, carpeta.name)) ? pull(): clone();
	console.log(fs.existsSync(path.resolve(ruta+carpeta.name, carpeta.name)));
    console.log(path.resolve(__dirname));

var pepe = exec('if [ -d "$'+ruta+'/'+carpeta.name+'/$i" ]; then echo "true" > '+ruta+'+'/'+'+carpeta.name+'/yes.txt else echo "false"; fi',{
          user: 'usuario',
          host: ip,
          key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
    
    },function(err){
     if(err)
    	console.log('boool errorrrrr');
    });

//console.log(pepe);

function clone(){
	console.log("esta entrando en clone");
   	 exec('cd '+ruta+';git clone '+url+'',{
          user: 'usuario',
          host: ip,
          key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
	 },function(err){
	     if(err)
	    	console.log('Ha habido un error');
	    });
  	}
  
  function pull(){
console.log("esta entrando en pull");
    exec('cd '+ruta+'/'+carpeta.name+';git pull',{
          user: 'usuario',
          host: ip,
          key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
    
    },function(err){
     if(err)
    	console.log('Ha habido un error2');
    });
}
*/

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