// ----------- 分享 标题-----------------
var nextstep = document.querySelector('.nextstep');
var title_input = document.querySelector('#title_input');
var title_span = document.querySelector('.title_span');
var city_input = document.querySelector('#city_input');
var city_span = document.querySelector('.city_span');
nextstep.onclick = function () {
    if(checkCity() && checkTitle()){
        document.querySelector('.share_holder').style.display='none';
        document.querySelector('.upload').style.display='block';
        document.querySelector('.div_add').style.display='block';
    }
}
function checkTitle(){
    if(title_input.value){
        title_span.innerText='';
        return true
    }else {
        title_span.innerText='**标题不能为空';
        return false
    }
}
function checkCity(){
    if(city_input.value){
        city_span.innerText='';
        return true
    }else {
        city_span.innerText='**目的地不能为空';
        return false
    }
}
title_input.onchange = function () {
    checkTitle()
}
city_input.onchange = function () {
    checkCity()
}

//--------------  模态框-------------

var mode01=document.querySelector(".mode01");
var mode1_box=document.querySelector(".mode1_box");
var mask=document.querySelector("#mask");
var impress = document.querySelector('.impress');

mode01.onclick=function(){
    mask.style.display="block";
    mode1_box.style.display="block";
};
var close_mode=document.querySelector(".close_box");
close_mode.onclick=function(){
    mask.style.display="none";
    mode1_box.style.display="none";
};
var mode1_save = document.querySelector('.mode1_save');
mode1_save.onclick = function () {
    //------ 时间
    var tour_impress = document.querySelector('.tour_impress');
    var article_mode01 = document.querySelector('.article_mode01');
    if(impress.value){
        tour_impress.innerHTML+=`<span>${impress.value}</span>`
        article_mode01.style.display = 'none';
        mask.style.display="none";
        mode1_box.style.display="none";
    }


}


//   -----------------  添加照片------------
var add_btn = document.querySelector('#add_btn');
var upload_right = document.querySelector('.upload_right')
var open = document.querySelector('#open');
var view_photos = document.querySelectorAll('.view_photo');
var count = 0;
// alert(view_photos[count]);


function changepic() {
    // alert(count)
    // var view_photos = document.querySelectorAll('.view_photo');

    var reads= new FileReader();
    var f=document.getElementById('open').files[0];

    if(f){
        var view_photos = document.querySelectorAll('.view_photo');

        // upload_right.innerHTML+=` <div class="photo">
        //             <img class="view_photo" src="${''}" >
        //         </div>`
        reads.readAsDataURL(f);
        reads.onloadend=function (e) {
            // alert(count);
            // alert(view_photos[count-1]);
            view_photos[count-1].src=this.result;
            arr.push(open.value);
            // alert(arr)
        }
    }
}
// changepic();
// alert(upload_right.lastElementChild)
var arr = [];

add_btn.onclick = function () {
    document.querySelector('.upload_picture').style.display='none';
    open.click();
    // arr.push(open.value);
    // alert(arr)
    if(!upload_right.lastElementChild){  //  --- d第一次渲染---
        // alert(666)
        upload_right.innerHTML+=` <div class="photo">
                    <img class="view_photo" src="${''}" >
                </div>`
        count++;
        // changepic();

    }

    // alert(upload_right.lastElementChild.children[0].getAttribute('src',4)=='')
    if(upload_right.lastElementChild.children[0].getAttribute('src',4)){
        upload_right.innerHTML+=` <div class="photo">
                    <img class="view_photo" src="${''}" >
                </div>`
        // arr.push(open.value);
        count++;
        // changepic()
    }
    // changepic()
    // if(upload_right.lastElementChild.children[0].getAttribute('src',4)==''){
    //     upload_right.lastElementChild.style.display = 'none'
    // }
}

// changepic();
// arr.push(open.value);

var tour_date = document.querySelector('.tour_date');

//-------- 数据提交-------
var sub_data = document.querySelector('.sub_data');
var upload_right = document.querySelector('.upload_right');
var imgs = [];
function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}
sub_data.onclick=function () {
    var photo = document.querySelector('.photo')
    for(var i=0;i<arr.length;i++){
        var img = '';
        img = arr[i].substring(12,arr[i].length+1)
        imgs.push(img)
    }
    var images = uniq(imgs);
    var data = {
        "article_title":title_input.value,
        "city":city_input.value,
        "date":tour_date.value,
        "impress":impress.value,
        "images":images,
    }
    console.log(data);
}




