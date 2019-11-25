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
              "$ref": "#/definitions/WxUserService"
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
          {
            "name": "search",
            "in": "query",
            "type": "string",
            "description": "姓名/手机号"
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
              "type": "array",
              "$ref": "#/definitions/WxUserList"
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
        "openId": {
          "type": "string",
          "description": '微信id',
        },
        "unionId": {
          "type": "string",
          "description": '微信开放平台id',
        },
        "nickname": {
          "type": "string",
          "description": '昵称',
        },
        "realName": {
          "type": "string",
          "description": '真实姓名',
        },
        "title": {
          "type": "string",
          "default": 'bm',
          "description": '称谓：bm-保密，xj-小姐，xz-小主，sx-少侠，gz-公子',
        },
        "phoneNumber": {
          "type": "string",
          "description": '手机号',
        },
        "jf": {
          "type": "integer",
          "default": 0,
          "description": '积分',
        },
        "appointmentCount": {
          "type": "integer",
          "default": 0,
          "description": '消费总次数',
        },
        "appointmentAmount": {
          "type": "number",
          "default": 0,
          "description": '消费总金额',
        },
        "avatarUrl": {
          "type": "string",
          "description": '头像url',
        },
        "gender": {
          "type": "integer",
          "default": 0,
          "description": '性别：0-未知，1-男，2-女',
        },
        "birth": {
          "type": "string",
          "description": '生日',
        },
        "country": {
          "type": "string",
          "description": '国家',
        },
        "province": {
          "type": "string",
          "description": '省'
        },
        "city": {
          "type": "string",
          "description": '城市',
        },
        "language": {
          "type": "string",
          "description": '语言：en-英文，zh_CN-简体中文，zh_TW-繁体中文',
        },
        "joinAt": {
          "type": "string",
          "description": '入会时间',
        },
        "userId": {
          "type": "integer",
          "description": '用户id',
        },
      }
    },
    "WxUserService": {
      "type": "object",
      "description": "会员消费详情",
      "properties": {
        "nickname": {
          "type": "string",
          "description": "昵称"
        },
        "realName": {
          "type": "string",
          "description": "真实姓名"
        },
        "phoneNumber": {
          "type": "string",
          "description": "手机号"
        },
        "birth": {
          "type": "string",
          "description": "出生日期"
        },
        "gender": {
          "type": "integer",
          "description": "性别：0-未知，1-男，2-女"
        },
        "avatarUrl": {
          "type": "string",
          "description": "头像url"
        },
        "appointmentAmount": {
          "type": "integer",
          "description": "消费总金额"
        },
        "total": {
          "type": "integer",
          "description": "预约次数"
        },
        "finished": {
          "type": "integer",
          "description": "实际到店"
        },
        "canceled": {
          "type": "integer",
          "description": "取消次数"
        },
        "waiting": {
          "type": "integer",
          "description": "待到店"
        },
        "hfty": {
          "type": "integer",
          "description": "汉服体验次数"
        },
        "cjyp": {
          "type": "integer",
          "description": "出街约拍次数"
        },
        "other": {
          "type": "integer",
          "description": "其他"
        },
        "avg": {
          "type": "integer",
          "description": "平均客单价"
        },
        "lastDay": {
          "type": "string",
          "description": "最近消费日"
        },
        "cardCount": {
          "type": "integer",
          "description": "优惠券数"
        },
        "cardAmount": {
          "type": "integer",
          "description": "优惠券金额"
        },
        "usedCount": {
          "type": "integer",
          "description": "已使用优惠券"
        },
        "usedAmount": {
          "type": "integer",
          "description": "已使用金额"
        }
      }
    },
    "WxUserList": {
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
            "$ref": "#/definitions/WxUser"
          }
        }
      }
    }
  }
}
