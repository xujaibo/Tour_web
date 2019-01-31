# 用户模块
from . import POOL
import pymysql
import json
from Project_1.app.dao.sql.sql_jshow import sql_jshow


# 注册用户
def get_suzhou(city_name):
    '''
    :param user:
    :return: 返回注册成功后用户的id；如果id为None说明注册失败，id如果为0表示该用户已经存在，id为1表示注册成功
    '''

    try:
        city_id = None
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)

        sql = sql_jshow.get('get_suzhou').format(citys=city_name['citys'])
        # print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        cursor.execute(sql)
        city_id = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return city_id



