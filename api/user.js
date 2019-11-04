module.exports = {
  "tags": [
    {
      "name": "user",
      "description": "用户"
    }
  ],
  "paths": {
    "/user/{userId}": {
      "get": {
        "tags": ["user"],
        "summary": "get one",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "user not found"
          }
        }
      },
      "put": {
        "tags": ["user"],
        "summary": "update one",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "user",
            "in": "body",
            "description": "user info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "user not found"
          }
        }
      },
      "delete": {
        "tags": ["user"],
        "summary": "delete one",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "default": {
            "$ref": "#/definitions/DelResponse"
          }
        }
      }
    },
    "/user": {
      "get": {
        "tags": ["user"],
        "summary": "get all",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "type": "integer"
          },
          {
            "name": "pageSize",
            "in": "query",
            "type": "integer"
          },
          {
            "name": "Authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "object",
              "$ref": "#/definitions/UserList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "user not found"
          }
        }
      },
      "post": {
        "tags": ["user"],
        "summary": "add one",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "user not found"
          }
        }
      }
    },
    "/login": {
      "post": {
        "tags": ["user"],
        "summary": "login",
        "description": "user",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UserLogin"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "user not found"
          }
        }
      }
    },
  },
  "definitions": {
    "User": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string",
          "description": "用户名"
        },
        "phoneNumber": {
          "type": "string",
          "description": "手机号"
        },
        "password": {
          "type": "string",
          "description": "密码"
        },
        "accessToken": {
          "type": "string",
          "description": '登录凭证',
        },
        "enable": {
          "type": "boolean",
          "default": true,
          "description": '是否启用',
        },
        "loginIp": {
          "type": "string",
          "description": '上次登录ip',
        },
        "loginAt": {
          "type": "string",
          "description": '上次登录时间',
        },
      }
    },
    "UserList": {
      "description": "列表",
      "type": "object",
      "properties": {
        "count": {
          "type": "integer",
          "description": "总数"
        },
        "lists": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/User"
          }
        }
      }
    },
    "UserLogin": {
      "description": "列表",
      "type": "object",
      "properties": {
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      }
    },
  }
}
