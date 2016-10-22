
var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');

const GitUrlParse = require("git-url-parse");



function initialize(directorio) {
    console.log("\nmodulo initialize");

    var contenido='\ngulp.task("deploy-iaas", function () {'+ 
        '\n\tvar iaas = require("gitbook-start-iaas-ull-es-alex-moi");'+
        '\n\tvar url = paquete.repository.url;'+
        '\n\tvar iaas_ip = paquete.iaas.IP;'+
        '\n\tvar iaas_path = paquete.iaas.PATH;'+
        '\n\n\tconsole.log(url);'+
        '\n\tconsole.log(iaas_ip);'+
        '\n\tconsole.log(iaas_path);'+
        '\n\n\tiaas.deploy(iaas_ip, iaas_path, url);'+
        '\n});\n\n';

    
    fs.existsSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js')) ? console.log("Existe") : console.log("No existe");
    
    
    //añadimos la tarea
    fs.writeFileSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), contenido,  {'flag':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Añadiendo tarea gulp")
    });
    
    //copiamos gulpfile a nuestro directorio
    fs.copyFile(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), path.join(process.cwd(), directorio , 'gulpfile.js'),function(err){
        if(err)
          console.log(err);
         console.log("Tarea gulp añadida a gulpfile")
    });
    console.log("\nInstalando plugin para despliegue en iaas, espere por favor ...");

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