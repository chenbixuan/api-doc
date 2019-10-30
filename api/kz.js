module.exports = {
  "tags": [
    {
      "name": "kz",
      "description": "客照"
    }
  ],
  "paths": {
    "/kz/{kzId}": {
      "get": {
        "tags": ["kz"],
        "summary": "获取客照",
        "description": "kz",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "kzId",
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
              "$ref": "#/definitions/Kz"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "kz not found"
          }
        }
      },
      "put": {
        "tags": ["kz"],
        "summary": "更新kz",
        "description": "kz",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "kzId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "kz",
            "in": "body",
            "description": "kz info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Kz"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Kz"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "kz not found"
          }
        }
      },
      "delete": {
        "tags": ["kz"],
        "summary": "删除kz",
        "description": "kz",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "kzId",
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
    "/kz": {
      "get": {
        "tags": ["kz"],
        "summary": "获取客照",
        "description": "kz",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "enable",
            "type": "boolean"
          },
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
              "$ref": "#/definitions/KzList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "kz not found"
          }
        }
      },
      "post": {
        "tags": ["kz"],
        "summary": "新增kz",
        "description": "kz",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "kz",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Kz"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Kz"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "kz not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Kz": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "客照详情"
        },
        "picIds": {
          "type": "string",
          "description": "照片id"
        },
        "enable": {
          "type": "boolean",
          "description": "开启状态"
        },
        "date": {
          "type": "string",
          "description": "显示日期"
        }
      }
    },
    "KzList": {
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
            "$ref": "#/definitions/Kz"
          }
        }
      }
    }
  }
}
