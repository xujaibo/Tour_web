from flask import Blueprint,request
from Project_1.app.service.user_service import *
import json

# user是模块的名称
topic = Blueprint('topic',__name__)
# restful api
@topic.route('/')
def topics():
    return 'welcome person topic!!'

@topic.route('/view/')
def views():
    return 'welcome person 某个分享!!'