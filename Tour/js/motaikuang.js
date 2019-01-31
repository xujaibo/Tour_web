var login=document.querySelector("#login");
var login_box=document.querySelector(".login_box");
var mask=document.querySelector("#mask");
login.onclick=function(){
    mask.style.display="block";
    login_box.style.display="block";
};
var close_login=document.querySelector(".close_box");
close_login.onclick=function(){
    mask.style.display="none";
    login_box.style.display="none";
};