from flask import Blueprint,request
from Project_1.app.service.user_service import *
import json

# user是模块的名称
dongtai = Blueprint('dongtai',__name__)
# restful api
@dongtai.route('/')
def dongtai_h():
    return 'welcome to 动态!!'

