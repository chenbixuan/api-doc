module.exports = {
  "tags": [
    {
      "name": "wxUser",
      "description": "会员用户"
    }
  ],
  "paths": {
    "/wxUser/{wxUserId}": {
      "get": {
        "tags": ["wxUser"],
        "summary": "获取某个会员信息",
        "description": "wxUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "wxUserId",
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
              "$ref": "#/definitions/WxUser"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "WxUser not found"
          }
        }
      },
      "put": {
        "tags": ["wxUser"],
        "summary": "更新会员信息",
        "description": "wxUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "wxUserId",
            "in": "path",
            "description": "会员id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "wxUser",
            "in": "body",
            "description": "会员信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/WxUser"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/WxUser"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "WxUser not found"
          }
        }
      },
      "delete": {
        "tags": ["wxUser"],
        "summary": "删除某个会员",
        "description": "wxUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "wxUserId",
            "in": "path",
            "description": "会员id",
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
    "/wxUser": {
      "get": {
        "tags": ["wxUser"],
        "summary": "获取会员信息",
        "description": "wxUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/WxUser"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "WxUser not found"
          }
        }
      },
      "post": {
        "tags": ["wxUser"],
        "summary": "新增会员",
        "description": "wxUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "wxUser",
            "in": "body",
            "description": "会员信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/WxUser"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/WxUser"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "WxUser not found"
          }
        }
      }
    }
  },
  "definitions": {
    "WxUser": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "openId": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "nickname": {
          "type": "string"
        }
      }
    }
  }
}
