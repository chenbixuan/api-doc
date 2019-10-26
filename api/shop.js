module.exports = {
  "tags": [
    {
      "name": "shop",
      "description": "门店"
    }
  ],
  "paths": {
    "/shop/{shopId}": {
      "get": {
        "tags": ["shop"],
        "summary": "获取门店",
        "description": "shop",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "shopId",
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
              "$ref": "#/definitions/Shop"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "shop not found"
          }
        }
      },
      "put": {
        "tags": ["shop"],
        "summary": "更新shop",
        "description": "shop",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "shopId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "shop",
            "in": "body",
            "description": "shop info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Shop"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Shop"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "shop not found"
          }
        }
      },
      "delete": {
        "tags": ["shop"],
        "summary": "删除shop",
        "description": "shop",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "shopId",
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
    "/shop": {
      "get": {
        "tags": ["shop"],
        "summary": "获取门店",
        "description": "shop",
        "produces": [
          "application/json"
        ],
        "parameters": [
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Shop"
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "shop not found"
          }
        }
      },
      "post": {
        "tags": ["shop"],
        "summary": "新增shop",
        "description": "shop",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "shop",
            "in": "body",
            "description": "门店信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Shop"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Shop"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "shop not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Response1": {
      "type": "object",
      "properties": {
        "Shop": {
          "$ref": "#/definitions/Shop"
        }
      }
    },
    "Shop": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string",
          "description": '店名'
        },
        "addr": {
          "type": "string",
          "description": '地址'
        },
        "addrJc": {
          "type": "string",
          "description": '驾车地址'
        },
        "addrGj": {
          "type": "string",
          "description": '公交地铁地址'
        },
        "pic": {
          "type": "integer",
          "description": '门店背景图'
        },
        "enable": {
          "type": "boolean",
          "description": '是否启用'
        }
      }
    }
  }
}
