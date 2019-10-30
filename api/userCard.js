module.exports = {
  "tags": [
    {
      "name": "userCard",
      "description": "用户获取的卡券"
    }
  ],
  "paths": {
    "/userCard/{userCardId}": {
      "get": {
        "tags": ["userCard"],
        "summary": "get one",
        "description": "userCard",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userCardId",
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
              "$ref": "#/definitions/UserCard"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "userCard not found"
          }
        }
      },
      "put": {
        "tags": ["userCard"],
        "summary": "update one",
        "description": "userCard",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userCardId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "userCard",
            "in": "body",
            "description": "userCard info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UserCard"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UserCard"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "userCard not found"
          }
        }
      },
      "delete": {
        "tags": ["userCard"],
        "summary": "delete one",
        "description": "userCard",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userCardId",
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
    "/userCard": {
      "get": {
        "tags": ["userCard"],
        "summary": "get all",
        "description": "userCard",
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
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "object",
              "$ref": "#/definitions/UserCardList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "userCard not found"
          }
        }
      },
      "post": {
        "tags": ["userCard"],
        "summary": "add one",
        "description": "userCard",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userCard",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UserCard"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/UserCard"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "userCard not found"
          }
        }
      }
    }
  },
  "definitions": {
    "UserCard": {
      "type": "object",
      "properties": {
        "no": {
          "type": "string",
          "description": '券号',
        },
        "name": {
          "type": "string",
          "description": '卡券名称',
        },
        "type": {
          "type": 'string',
          "enum": ['CASH'],
          "default": 'CASH',
          "description": '类型：CASH-现金券',
        },
        "value": {
          "type": "integer",
          "default": 0,
          "description": '面值',
        },
        "expire": {
          "type": "integer",
          "default": 0,
          "description": '有效期',
        },
        "shopId": {
          "type": "integer",
          "default": 0,
          "description": '限定门店，0-不限制',
        },
        "userLimit": {
          "type": "string",
          "enum": ['NEW', 'OLD', 'NONE'],
          "default": 'NONE',
          "description": '限定用户：NEW-新用户，OLD-老用户，NONE-不限制',
        },
        "userId": {
          "type": "integer",
          "description": '所属用户'
        },
        "cardId": {
          "type": "integer",
          "description": '所属card',
        },
      }
    },
    "UserCardList": {
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
            "$ref": "#/definitions/UserCard"
          }
        }
      }
    }
  }
}
