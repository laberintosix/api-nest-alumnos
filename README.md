<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripcion
Api desarrollada con NestJS en NodeJS, la api se conecta a una base de datos DynamoDB que se encuentra en la nuve de AWS, la automatizacion se realizo con Serverless

## Instalacion
Clonar el repositorio

```bash
$ npm install
```
## Creacion de Cuenta AWS
Para esto es necesario ir al siguiente link: https://sa-east-1.console.aws.amazon.com/console/home
Se debe crear una cuenta, se debe crear un grupo de usuarios: https://us-east-1.console.aws.amazon.com/iamv2
Por ultimo crear un usuario y agregarle roles necesarios

## Descargar el instalador AWS-CLI
AWS CLI Instalador MSI para Windows (64 bits): https://s3.amazonaws.com/aws-cli/ AWSCLI64PY 3.msi


## Running the app

```bash
Para realizar la automatizacion de serverles he utilizado un empaquetador que tiene como finalidad dejar todos los archivos con extencion TS ne un solo archivo main.js, para realizar esta ejecucion ingrese el siguiente comnado en el terminal del proyecto
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

Para ejecutar serverless localmente se debe ejecutar el siguiente comando
$ serverless offline 
```

## Test

```bash

$ npm run test


## License

Nest is [MIT licensed](LICENSE).
