module.exports = {
  "tags": [
    {
      "name": "card",
      "description": "系统卡券"
    }
  ],
  "paths": {
    "/card/{cardId}": {
      "get": {
        "tags": ["card"],
        "summary": "get one",
        "description": "card",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "cardId",
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
              "$ref": "#/definitions/Card"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "card not found"
          }
        }
      },
      "put": {
        "tags": ["card"],
        "summary": "update one",
        "description": "card",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "cardId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "card",
            "in": "body",
            "description": "card info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Card"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Card"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "card not found"
          }
        }
      },
      "delete": {
        "tags": ["card"],
        "summary": "delete one",
        "description": "card",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "cardId",
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
    "/card": {
      "get": {
        "tags": ["card"],
        "summary": "get all",
        "description": "card",
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
              "$ref": "#/definitions/CardList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "card not found"
          }
        }
      },
      "post": {
        "tags": ["card"],
        "summary": "add one",
        "description": "card",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "card",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Card"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Card"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "card not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Card": {
      "type": "object",
      "properties": {
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
        "userLimit": {
          "type": "string",
          "enum": ['NEW', 'OLD', 'NONE'],
          "default": 'NONE',
          "description": '限定用户：NEW-新用户，OLD-老用户，NONE-不限制',
        },
        "limitType": {
          "type": "string",
          "enum": ['REG', 'SHARE', 'NONE'],
          "default": 'NONE',
          "description": '领取条件：REG：新用户注册，SHARE：分享获取，NONE-不限制',
        },
        "shopId": {
          "type": "integer",
          "default": 0,
          "description": '限定门店，0-不限制',
        },
        "count": {
          "type": "integer",
          "default": 0,
          "description": '发放数量',
        },
        "remain": {
          "type": "integer",
          "default": 0,
          "description": '剩余数量',
        },
      }
    },
    "CardList": {
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
            "$ref": "#/definitions/Card"
          }
        }
      }
    }
  }
}
