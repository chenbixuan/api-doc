module.exports = {
  "tags": [
    {
      "name": "banner",
      "description": "轮播图"
    }
  ],
  "paths": {
    "/banner/{bannerId}": {
      "get": {
        "deprecated": true,
        "tags": ["banner"],
        "summary": "获取轮播图",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "bannerId",
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
              "$ref": "#/definitions/Banner"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "banner not found"
          }
        }
      },
      "put": {
        "tags": ["banner"],
        "summary": "更新banner",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "bannerId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "banner",
            "in": "body",
            "description": "banner info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Banner"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Banner"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "banner not found"
          }
        }
      },
      "delete": {
        "tags": ["banner"],
        "summary": "删除banner",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "bannerId",
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
    "/banner": {
      "get": {
        "tags": ["banner"],
        "summary": "获取轮播图",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "type": "string",
            "enum": ['INDEX', 'INDEX_SERVICE', 'SERVICE1', 'SERVICE2'],
            "description": "轮播图类型"
          },
          {
            "in": "query",
            "name": "enable",
            "type": "boolean",
            "description": "启用状态"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "object",
              "additionalProperties": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Banner"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "banner not found"
          }
        }
      },
      "post": {
        "tags": ["banner"],
        "summary": "新增banner",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "banner",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Banner"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Banner"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "banner not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Banner": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "sort": {
          "type": "integer"
        },
        "enable": {
          "type": "boolean"
        },
        "type": {
          "type": "string",
          "enum": ['INDEX', 'INDEX_SERVICE', 'SERVICE1', 'SERVICE2'],
          "description": "轮播类型：INDEX-首页轮播图，INDEX_SERVICE-首页服务轮播， SERVICE1-服务展示1， SERVICE2-服务展示2"
        },
        "picId": {
          "type": "integer"
        }
      }
    }
  }
}
