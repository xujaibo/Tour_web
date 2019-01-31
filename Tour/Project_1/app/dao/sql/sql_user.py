


sql_user={
    "addUser":"insert into user(telephone,password,regist_date) values('{telephone}','{password}',CURDATE())",
    "getUserById":"select id,telephone,email,regist_date from user where telephone={telephone} limit 1",
    "landing_by_user":"select id from user where telephone={telephone} and password={password} limit 1"
}