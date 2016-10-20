

/*var config = {
  host: '10.6.128.129',
  port: 22,
  username: 'usuario',
  privateKey: fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)
}
 
var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})
*/
  /*return gulpSSH
    .shell(['cd /home/usuario/src/sytw/iaas', 'git pull']);*/

var deploy = function(ip, ruta) {
    console.log("\nFuncionando");
    console.log(ip)
    console.log(ruta)
};


module.exports = deploy;