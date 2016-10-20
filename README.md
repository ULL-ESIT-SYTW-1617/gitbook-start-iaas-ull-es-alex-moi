# Sistemas y Tecnologías Web. Gitbook Start iaas.ull.es


## Introducción

El objetivo de esta práctica es extender el package **NodeJS** publicado en npm en una práctica anterior con una nueva funcionalidad que permita que
los usuarios con conocimientos de **NodeJS** puedan extender la conducta del ejecutable para que este realice el despliegue en plataformas distintas
de las ya consideradas.

##Tutorial para su instalación

Instalar el paquete

```shell
npm install -g gitbook-start-alex-moi-nitesh
npm install --save gitbook-start-alex-moi-nitesh
```

Instalación ficheros

```shell
gitbook-start-alex-moi-nitesh -d [nombre directorio]
```

##Tutorial para su ejecución

Para ejecutar, ponemos el siguiente comando:

```shell
gitbook-start-alex-moi-nitesh [opciones]
```
[opciones] 
*    -a: Especificar el autor del gitbook
*    -n: Especificar el nombre del gitbook
*    -d: Especificar el nombre del directorio
*    -u: Especificar la url del repositorio git
*    -h: Help (ayuda)


Una vez instalado y ejecutado, hacemos:

```shell
npm install
gitbook install
```

Una vez completado los "ficheros.md" de nuestro book, para construirlo y publicarlo hacemos:

```shell
gulp build
gulp deploy
```

Un ejemplo de la versión final del gitbook sería: [Ejemplo](https://alu0100782851.github.io/prueba/)


## Enlaces importantes
*  [Página en NPM](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-alex-moi)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)
* Nitesh Gul Ramnani | [Página Personal](http://alu0100814651.github.io/blog/)

![Universidad de La Laguna](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-alex-moi/blob/master/images/logotipo-principal.png?raw=true)

gitbook-start-alex-moi-nitesh -c alex -d iaas-ull-es --iaas_ip 10.6.128.129 --iaas_path /scr/sytw/iaas2/iaas2 -u git@github.com:alu0100767421/iaas2.git
