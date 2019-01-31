# 用户模块
from . import POOL
import pymysql
import json
from Project_1.app.dao.sql.sql_user import sql_user
# 注册用户
def addUser(user):
    '''
    :param user:
    :return: 返回注册成功后用户的id；如果id为None说明注册失败，id如果为0表示该用户已经存在，id为1表示注册成功
    '''
    x=getUserById(user['telephone'])
    if not getUserById(user['telephone']):

            try:
                user_id = None
                client=POOL.connection()
                cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
                # 4. 准备sql语句
                # sql = 'insert into user(telephone,password,regist_date) ' \
                #       'values("{telephone}","{password}",CURDATE())'. \
                #     format(telephone=user['telephone'], password=user['password'])

                sql = sql_user.get('addUser').format(telephone=user['telephone'], password=user['password'])
                print(sql)
                # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
                user_id=cursor.execute(sql)
                print(user_id)
                # print(user_id)
                client.commit()
            except Exception as ex:
                client.rollback()
            finally:
                if user_id==1:
                    user_id=getUserById(user['telephone'])['id']
                    print(user_id)
                client.close()
                return user_id

    else:
        return None


def getUserById(id):
    try:
        res_user=None
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        # 4. 准备sql语句
        sql = 'select id,password,telephone,email,regist_date from user where telephone={telephone} limit 1'.format(telephone=id)
        # print(sql)
        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        cursor.execute(sql)
        res_user=cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return res_user











