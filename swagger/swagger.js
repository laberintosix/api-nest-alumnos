// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "api-nest-alumnos",
    "version": "1"
  },
  "paths": {
    "/alumnos": {
      "post": {
        "summary": "createAlumno",
        "description": "",
        "operationId": "createAlumno.post.alumnos",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "security": [
          {
            "api-key": []
          }
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "get": {
        "summary": "getAlumnos",
        "description": "",
        "operationId": "getAlumnos.get.alumnos",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "security": [
          {
            "api-key": []
          }
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/alumnos/{id}": {
      "get": {
        "summary": "getAlumnoById",
        "description": "",
        "operationId": "getAlumnoById.get.alumnos/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "security": [
          {
            "api-key": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "put": {
        "summary": "updateAlumno",
        "description": "",
        "operationId": "updateAlumno.put.alumnos/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "security": [
          {
            "api-key": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "delete": {
        "summary": "deleteAlumno",
        "description": "",
        "operationId": "deleteAlumno.delete.alumnos/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "security": [
          {
            "api-key": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {
    "api-key": {
      "type": "apiKey",
      "name": "api-key",
      "in": "header"
    }
  }
};