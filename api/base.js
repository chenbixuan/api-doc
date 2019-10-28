module.exports = {
  "swagger": "2.0",
  "info": {
    "description": "",
    "version": "1.0.0",
    "title": "沉璧轩api"
  },
  "host": "localhost:3001",
  "basePath": "/api",
  "schemes": [
    "http",
    "https"
  ],
  "definitions": {
    "DelResponse": {
      "type": "object",
      "description": "delete...",
      "properties": {
        "200": {
          "description": "successful operation",
        },
        "401": {
          "$ref": '#/responses/Unauthorized'
        },
        "404": {
          "$ref": '#/responses/NotFound'
        }
      }
    },
    "ApiResponse": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    },
    "Error": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  },
  "responses": {
    "NotFound": {
      "description": "The specified resource was not found",
      "schema": {
        "$ref": '#/definitions/Error'
      }
    },
    "Unauthorized": {
      "description": "Unauthorized",
      "schema": {
        "$ref": '#/definitions/Error'
      }
    }
  }
}
