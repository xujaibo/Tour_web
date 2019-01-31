import Project_1.app.dao.jshow_dao as jshowDao  # 把user_dao模块导进来
import json
from flask import make_response
from Project_1.app.utils.my_token import createToken


def get_suzhou(city_name):
    rr = jshowDao.get_suzhou(city_name)
    if rr:
        return json.dumps(rr)
        # print(rr)
    else:
        return json.dumps({"status_code": "40004", "status_text": "找不到该城市"})


if __name__ == '__main__':
    city_name = {"citys": "苏州"}
    get_suzhou(city_name)
