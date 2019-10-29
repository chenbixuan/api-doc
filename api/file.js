module.exports = {
  "tags": [
    {
      "name": "file",
      "description": "文件信息"
    }
  ],
  "paths": {
    "/file/{fileId}": {
      "get": {
        "tags": ["file"],
        "summary": "get one",
        "description": "file",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "fileId",
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
              "$ref": "#/definitions/File"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "file not found"
          }
        }
      },
      "put": {
        "tags": ["file"],
        "summary": "update one",
        "description": "file",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "fileId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "file",
            "in": "body",
            "description": "file info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/File"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/File"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "file not found"
          }
        }
      },
      "delete": {
        "tags": ["file"],
        "summary": "delete one",
        "description": "file",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "fileId",
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
    "/file": {
      "get": {
        "tags": ["file"],
        "summary": "get all",
        "description": "file",
        "produces": [
          "application/json"
        ],
        "parameters": [
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "object",
              "$ref": "#/definitions/FileList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "file not found"
          }
        }
      },
      "post": {
        "tags": ["file"],
        "summary": "add one",
        "description": "file",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "file",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/File"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/File"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "file not found"
          }
        }
      }
    }
  },
  "definitions": {
    "File": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
            "description": '文件名',
        },
        "type": {
          "type": "string",
            "enum": ['IMAGE', 'VIDEO'],
            "default": 'IMAGE',
            "description": '文件类型',
        },
        "size": {
          "type": "integer",
            "default": 0,
            "description": '文件大小',
        },
        "url": {
          "type": "string",
            "description": '相对路径',
        },
      }
    },
    "FileList": {
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
            "$ref": "#/definitions/File"
          }
        }
      }
    }
  }
}
