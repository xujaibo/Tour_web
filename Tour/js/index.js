
// 闭合函数
(function () {
    var login_regist=document.querySelector('.div_login_regist')
    var user_info=document.querySelector('.div_user_info')

    var token=window.localStorage && window.localStorage.getItem('token');
    var telephone=window.localStorage && window.localStorage.getItem('telephone');
    if(token && telephone){
        login_regist.style.display='none';
        user_info.style.display='block';


        // 发送请求
        // 如果发送请求返回token过期，将缓存清空，再执行判断token，显示头像或者登录注册



    }else {
        login_regist.style.display='block';
        user_info.style.display='none';
    }
})()