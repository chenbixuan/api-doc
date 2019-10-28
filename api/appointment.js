module.exports = {
  "tags": [
    {
      "name": "appointment",
      "description": "预约"
    }
  ],
  "paths": {
    "/appointment/{appointmentId}": {
      "get": {
        "tags": ["appointment"],
        "summary": "get one",
        "description": "appointment",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "appointmentId",
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
              "$ref": "#/definitions/Appointment"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "appointment not found"
          }
        }
      },
      "put": {
        "tags": ["appointment"],
        "summary": "update one",
        "description": "appointment",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "appointmentId",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "appointment",
            "in": "body",
            "description": "appointment info",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Appointment"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Appointment"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "appointment not found"
          }
        }
      },
      "delete": {
        "tags": ["appointment"],
        "summary": "delete one",
        "description": "appointment",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "appointmentId",
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
    "/appointment": {
      "get": {
        "tags": ["appointment"],
        "summary": "get all",
        "description": "appointment",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "type": "string",
            "enum": ['INDEX', 'INDEX_SERVICE', 'SERVICE1', 'SERVICE2']
          },
          {
            "in": "query",
            "name": "enable",
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "object",
              "$ref": "#/definitions/AppointmentList"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "appointment not found"
          }
        }
      },
      "post": {
        "tags": ["appointment"],
        "summary": "add one",
        "description": "appointment",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "appointment",
            "in": "body",
            "description": "信息",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Appointment"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Appointment"
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "appointment not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Appointment": {
      "type": "object",
      "properties": {
        "no": {
          "type": "string",
          "description": '单号',
        },
        "price": {
          "type": "number",
          "default": 0,
          "description": '总价'
        },
        "cardDiscounts": {
          "type": "number",
          "default": 0,
          "description": '优惠券抵扣金额'
        },
        "type": {
          "type": "string",
          "enum": ['HFTY', 'ZTSY', 'CJYP', 'DZFW'],
          "default": 'ZTSY',
          "description": '订单类型：HFTY-汉服/变装体验，ZTSY-主题摄影，CJYP-出街约拍，DZFW-定制服务',
        },
        "status": {
          "type": "string",
          "enum": ['WAITING', 'FINISHED', 'CANCELED'],
          "default": 'WAITING',
          "description": '状态；WAITING-未完成，FINISHED-已完成，CANCELED-已取消',
        },
        "date": {
          "type": "string",
          "description": '',
        },
        "period": {
          "type": "string",
          "description": '时间段',
        },
        "shopId": {
          "type": "integer",
          "description": '店铺id',
        },
        "userId": {
          "type": "integer",
          "description": '用户id'
        },
      }
    },
    "AppointmentList": {
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
            "$ref": "#/definitions/Appointment"
          }
        }
      }
    }
  }
}
