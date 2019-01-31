from flask import Blueprint,request
# 导入user service模块
from Project_1.app.service.user_service import *
import json
#用参数name和import_name初始化
# user是模块的名称
user = Blueprint('user',__name__)
# restful api


@user.route('/user')
def users():
    return 'welcome user page!!'

@user.route('/person/',methods=['POST', 'GET','PUT','DELETE'])
def person():
    if request.method=='GET':
        return '获取用户信息'
    elif request.method=='POST':
        if request.is_json and request.get_json():
            u=request.get_json()
            # result为添加用户的结果
            result=addUser(u)
            return result
        else:
            return json.dumps({"status_code":"40005","status_text":"数据格式不合法"})
    elif request.method=='PUT':
        return '修改用户'
    elif request.method=='DELETE':
        return '删除用户'
@user.route('/login/',methods=['POST'])
def login():
    if request.is_json and request.get_json():
        u = request.get_json()
        # result为添加用户的结果
        result = getUserById(u)
        return result
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


