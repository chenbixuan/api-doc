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
            "description": "会员id",
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
        "summary": "更新会员信息",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "bannerId",
            "in": "path",
            "description": "会员id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "banner",
            "in": "body",
            "description": "会员信息",
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
        "summary": "删除某个会员",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "bannerId",
            "in": "path",
            "description": "会员id",
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
      }
    },
    "/banner": {
      "get": {
        "tags": ["banner"],
        "summary": "获取会员信息",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
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
      "post": {
        "tags": ["banner"],
        "summary": "新增会员",
        "description": "banner",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "banner",
            "in": "body",
            "description": "会员信息",
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
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "title": {
          "type": "string"
        }
      }
    }
  }
}
