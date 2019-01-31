from flask import Blueprint,request
from Project_1.app.service.user_service import *
import json

# user是模块的名称
share = Blueprint('share',__name__)
# restful api
@share.route('/')
def shares():
    return 'welcome person share!!'

@share.route('/article/')
def article_h():
    return 'welcome person article!!'