<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripcion
Api desarrollada con NestJS en NodeJS, la api se conecta a una base de datos DynamoDB que se encuentra en la nuve de AWS, la automatizacion se realizo con Serverless

## Stack Tecnologico
   Nodejs: v20.14.0
   NestJS: v9
   Serverless: v4.0.24
   AWS CLI: v2
   DynamoDB: v2019
   
## Instalacion
Clonar el repositorio
https://github.com/laberintosix/api-nest-alumnos.git

```bash
$ npm install
```
## Creacion de Cuenta AWS
Para esto es necesario ir al siguiente link: https://sa-east-1.console.aws.amazon.com/console/home
Se debe crear una cuenta, se debe crear un grupo de usuarios: https://us-east-1.console.aws.amazon.com/iamv2
Por ultimo crear un usuario y agregarle roles necesarios
Lo mas importantes es crear una clave de acceso y secreta ya que estas claves se debe configurar en AWS-CLI

## Descargar el instalador AWS-CLI
AWS CLI Instalador MSI para Windows (64 bits): https://s3.amazonaws.com/aws-cli/ AWSCLI64PY 3.msi

## Automatizacion
Para realizar la automatizacion de serverles he utilizado un empaquetador que tiene como finalidad dejar todos los archivos con extencion TS en un solo archivo main.js,
para realizar esta ejecucion ingrese el siguiente comnado en el terminal del proyecto
$ nest build --webpack

Luego de de este proceso se realiza la ejecucion de serverless con el siguiente comando
$ serverless deploy
He configurado serverles las siguientes tareas:
se crean las fucciones para cada environment:
  Crear Alumnos
  Listar Alumnos
  Buscar Alumno
  Actualizar Alumno
  Eliminar Alumno

Luego de este proceso crear la tabla en dynamodb con los permisos y la ID para almecesar registros

clave principal:
AttributeName: id
AttributeType: String

Los permisos configurados son:
        - dynamodb:Scan
        - dynamodb:CreateTable
        - dynamodb:UpdateTable
        - dynamodb:DeleteTable
        - dynamodb:DescribeTable
        - dynamodb:ListTables
Modelos de datos Alumnos
  id: string
  nombre: string
  apellido: string
  curso: number
  edad: number

## Validaciones requests
para las validaciones ulitile la librearia class-validator la cual trabaja con multiples decoradores

nombre y apellido:
  validacion de tipo de dato, debe ser string
  cantidad de caracteres, mayo a 1 y menor que 50
  campo entrada de dato, no puede ser vacia
curso:
  validacion de tipo de dato, debe ser number
  campo entrada de dato, no puede ser vacia
  cantidad de caracteres, mayo a 1 y menor que 12
edad:
  validacion de tipo de dato, debe ser number
  campo entrada de dato, no puede ser vacia
  cantidad de caracteres, mayo a 5 y menor que 100

## Seguridad
  se realiza manejo de cors por dominio de origen
  se maneja los tipos de peticiones o decoradores get, post, put, delete
  se realiza clave de acceso
 
Para ejecutar serverless localmente se debe ejecutar el siguiente comando
$ serverless offline
este comando realiza la simulacion de serverless con todas sus peticiones o enpoints locales
la base de datos de dynamoDB se puede trabajar ejucatandola como jar o descargando la imagen con docker

## Test
apara ejecutar las pruebas unitarias y e2e solo es necesario ejecutar el siguiente comando:

$ npm run test
son 6 pruebas de controladores las cuales consultan a las fuciones de crear, listar, buscar, actualizar y eliminar


## Resumen
  El proyecto llamado api-nest-alumnos cubre una necesidad de administrar y mantener una lista de alumnos, para crear un alumno es necesario tener metodos en el controlador de alumons con sus validaciones correspondientes para enviar estos parametros al servicio de alumos el cual se encarga de realizar la creacion de registros en la base de datos en la nuve de AWS a la tabla manejada por DynamonDB una ves registrado
la api da un mensaje de el registro existoso, para lograr esto es necesario utilizar una clave y enviarlas solo de un dominio autorizado. Serverles realiza toda la cracion de funciones, permisos, roles, tabla y manejar los logs correspondientes. Tambien esta solucion esta contruida con pruebas automatizadas para la calidad de este. Es un gran desafio lograr desarrollarlo y estoy totalmente contento de haber aprendido en el camino algunas cosas y soltar las manos programando.

