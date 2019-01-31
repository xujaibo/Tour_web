from flask import Blueprint,request
from Project_1.app.service.jshow_service import *
import json

# user是模块的名称
jshow = Blueprint('jshow',__name__)
# restful api
@jshow.route('/')
def jshows():
    return 'welcome person jshow!!'

@jshow.route('/suzhou/',methods=['POST'])
def suzhou_h():
    city_name=request.get_json()
    result = get_suzhou(city_name)
    return result





@jshow.route('/hangzhou/')
def hangzhou_h():
    return 'welcome person hangzhou!!'