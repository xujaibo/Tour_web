from Project_1.app.app import app
from Project_1.app.route import *
from Project_1.app.config import *
if __name__ == '__main__':
    # 启动服务
    # app.run()
    # 0.0.0.0 表示外网所有人都能访问
    app.run(host=HOST, port=PORT,debug=DEBUG)