
# Sistemas y Tecnologías Web. Gitbook Start iaas.ull.es. Plugins

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de desplegar en la máquina **iaas.ull.es** nuestra aplicación.

##Instalación

**Debemos tener** instalado el paquete principal en **global**. Con esto hecho no es necesario instalar el paquete plugin heroku puesto que al ejecutar la aplicación de la forma que se expone a continuación, ésta lo instala por nosotros.
Por tanto, ejecutamos desde el directorio de nuestro gitbook (asegúrese de haber instalado todas las dependencias antes con `npm install`:
```shell
gitbook-start-alex-moi-nitesh -d iaas-ull-es
```

##Descripción del paquete
El paquete cuenta con dos métodos, **intialize()** y **deploy()**. El primero, al ser invocado por el paquete principal [gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh) añadirá una tarea gulp al gulpfile.js de la aplicación. Esta tarea se llamará **deploy-iaas** e invocará el método **deploy()** que se encargará de desplegar la aplicación en la **máquina iaas**. 


### SSH  keys
Para conectarnos a la máquina del iaas, tenenmos que tener configurado la [vpn de la ULL](http://www.ull.es/stic/tag/vpn/), y poder configurar un alias para conectarnos más rápidamente por **ssh**.
Para ello crearemos en `~/.ssh` un fichero `config` con el siguiente contenido:
```
Host sytw
	HostName dir_ip_máquina
	User usuario
```
Con esto podremos conectarnos sin ningún problema a la máquina.
También es necesario tener generado en la máquina del iaas las claves para utilizar repositorios Github. Puede encontrar la documentación apropiada [en este link](https://help.github.com/articles/generating-an-ssh-key/).

##Funcionamiento

Después de haber ejecutado el comando del paso de **Instalación**, se instalará el paquete gitbook-start-iaas-ull-es-alex-moi automaticamente y ya podremos desplegar en la máquina iaas.
El siguiente paso es introducir en el **package.json**, nuestra **ip** y la **ruta** donde queramos desplegar el libro en la seccion "iaas". Por ejemplo:

```
"iaas": {
    "IP": "10.10.10.10",
    "PATH": "/home/nombre_usuario/ruta"
  },
```

**Es importante que no ponga '/' al final de la ruta**

Si no ha introducido en el package.json->repository.url una direccion de un repositorio, póngala(version http).

A conitnuación, ejecute lo siguiente:

1. `gulp build` le creará en la carpeta gh-pages el libro
2. Suba sus cambios a github `git add .` `git commit -m "cambios"` `git push origin master`
3. `gulp deploy-iaas` le creara en su maquina iaas su libro
4. Acceda a su maquina archivo de su máquina ip y ejecute `node server.js`
5. Accdea a su página en **http://ip:8080/**

Si en algun momento hace algún cambio en su libro, vuelva a ejecutar los anteriores comandos.

## Enlaces importantes
*  [Página en NPM gitbook-start-iaas-ull-es-alex-moi Plugin](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-alex-moi)
*  [Página en NPM gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-alex-moi)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)




