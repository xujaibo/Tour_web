/**
 * Created by lzhan on 2019/1/11.
 */
var tel=document.querySelector('#txt_telephone');
var tel_error=document.querySelector('#tel_error');
var password=document.querySelector('#txt_password');
var password_error=document.querySelector('#password_error');
var password_confirm=document.querySelector('#txt_password_confirm');
var confirm_error=document.querySelector('#confirm_error');
document.querySelector('#btn_regist').onclick=function () {

   if(checkPassword() && checkTelphone() && checkConfrim()){
   //    开始提交后台
       var user={"telephone":tel.value,"password":password.value};
       postData('http://192.168.2.3:8080/api/user/person/',user,function (res) {
           if(res && res.status_code=='10001'){
               alert(res.status_text);
           }else {
               alert(res.status_text);
           }
       })
   }

};

function checkTelphone() {
    var regMobile=/^1[3,5,8]\d{9}$/;
    if(tel.value){
        if(regMobile.test(tel.value)){
            tel_error.innerText='';
            return true;
        }else {
            tel_error.innerText='*手机号码格式不正确';
            return false
        }
    }else {
        tel_error.innerText='*手机号码不能为空';
        return false;
    }
}

function checkPassword() {
    var regMobile=/^\w{6,}$/;
    if(password.value){
        if(regMobile.test(password.value)){
            password_error.innerText='';
            return true;
        }else {
            password_error.innerText='*密码必须大于六位';
            return false;
        }
    }else {
        password_error.innerText='*密码不能为空';
        return false;
    }
}

function checkConfrim() {
    if(password_confirm.value==password.value){
        confirm_error.innerText=''
        return true
    }else {
        confirm_error.innerText='*两次密码不一致';
        return false;
    }
}

tel.onchange=function () {
   checkTelphone();
};

password.onchange=function () {
    checkPassword();
};

password_confirm.onblur=function () {

   checkConfrim();
};