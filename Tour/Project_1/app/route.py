from Project_1.app.app import app
from Project_1.app.route_user import user
from Project_1.app.route_jshow import jshow
from Project_1.app.route_share import share
from Project_1.app.route_topic import topic
from Project_1.app.route_dongtai import dongtai

# 构建蓝图
app.register_blueprint(user,url_prefix='/api/user')
app.register_blueprint(jshow,url_prefix='/api/jshow')
app.register_blueprint(share,url_prefix='/api/share')
app.register_blueprint(topic,url_prefix='/api/topic')
app.register_blueprint(dongtai,url_prefix='/api/dongtai')


@app.route('/api/v1')
def index():
    return 'INDEX'
@app.errorhandler(404)
def miss(e):
    return '该页面不存在', 404
@app.errorhandler(500)
def error(e):
    return '服务器正在维护...',500
