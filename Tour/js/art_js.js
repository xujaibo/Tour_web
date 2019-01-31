
//--------- 渲染 文章图片=---------
var atricle=
    {
        'article_name':'光影黄山',
        "city":'黄山',
        "date":'2019-01-21',
        'impress':'黄山已经连续阴雨了两个多星期，\n' +
        '                本来已经对此行不抱多大希望，\n' +
        '                然而万万没有想到，就在我们登山的两天，\n' +
        '                或者准确地说，登山的24小时，它放晴了，\n' +
        '                云海出现了，日落看到了，晚上没有月亮，\n' +
        '                明亮的银河也看到了，当然还有第二天的\n' +
        '                日出也碰到了。当时觉得下山估计会下雨\n' +
        '                了，想不到还闪现了余晖，简直运气好到\n' +
        '                不行，最后是到了酒店才开始了绵雨，感谢大黄山',


    'user_icon':'jilin.jpg',
    'liulanshu':1452,
    'dianzanshu':265,
    'xihuan':188,
    'pinglun':35,
    'images':[
            '光影黄山/1.jpg',
            '光影黄山/2.jpg',
            '光影黄山/3.jpg',
            '光影黄山/4.jpg',
            '光影黄山/5.jpg',
            '光影黄山/6.jpg',
            '光影黄山/7.jpg',
            '光影黄山/8.jpg',
            '光影黄山/9.jpg',
            '光影黄山/10.jpg',
            '光影黄山/11.jpg',
            '光影黄山/12.jpg',
            '光影黄山/13.jpg',
            '光影黄山/14.jpg',
            '光影黄山/15.jpg',
            '光影黄山/16.jpg',
            '光影黄山/17.jpg',
            '光影黄山/18.jpg',
            '光影黄山/19.jpg',
            '光影黄山/20.jpg'
            ]
    }

var users =
    {"user_icon":"share.jpg",
    "user_name":"lzx"}


//  =---------------------- 渲染页面信息--------------

// ----   描述  ----
var article_title = document.querySelector('.article_title');
article_title.innerHTML+=`<p>${atricle.article_name}</p>
                <img src="images/位置.png" alt="">
                <a href="">${atricle.city}</a>
                <div class="date_time">
                <p>那一天—你在路上:</p>
                <span>${atricle.date}</span>
</div>
                <span>${atricle.impress}
                </span>`
//--- 底部左边 文章标题-----
var foot_title = document.querySelector('.foot_title');
foot_title.innerHTML+=` <span>${atricle.article_name}</span>
            [&nbsp;<a href="">${atricle.city}</a>&nbsp;]`

//-------底部右边   点赞信息等-----
var foot_right = document.querySelector('.foot_right');
foot_right.innerHTML+=` <ul>
            <li>
                <div>
                    <img src="images/${atricle.user_icon}" alt="">
                </div>
            </li>
            <li>
                <img src="images/浏览数量.png" alt="" style="height: 23px">
                <span>${atricle.liulanshu}</span>
            </li>
            <li>
                <img src="images/点赞.png" alt="">
                <span>${atricle.dianzanshu}</span>
            </li>
            <li>
                <img src="images/喜欢.png" alt="">
                <span>${atricle.xihuan}</span>
            </li>
            <li>
                <img src="images/评论.png" alt="">
                <span>${atricle.pinglun}</span>
            </li>
            <li>
                <img src="images/分享%20(1).png" alt="">
            </li>
        </ul>`

var article_list = document.querySelector('.article_list');
for (let img of atricle.images){
    article_list.innerHTML+=`<div class="section">

                <img src="images/${img}" height="160" width="160"/>
            </div>`
}



//---- 网页的高度

var h=window.innerHeight;
// var scrollDiv=document.getElementById('scrollDiv');
var all_height = document.querySelectorAll('.section')
// scrollDiv.style.height=h+'px';
var outer = document.querySelector('#wrapper')
var comheight = document.querySelector('.share_comment');
var section_imgs = document.querySelectorAll('.section img');
for(var min_height of all_height){
    min_height.style.height = (h-80)*0.8+ 'px';
}
for(var img of section_imgs){
    img.style.height=(h-80)*0.8+ 'px';
}
comheight.style.height = h-99+ 'px';

window.onresize=function () {
    h=window.innerHeight;
    comheight.style.height = h-99+ 'px';
    // scrollDiv.style.height=h+'px';
    for(var min_height of all_height){
        min_height.style.height = (h-80)*0.8+ 'px';
    };
    for(var img of section_imgs){
        img.style.height=(h-80)*0.8+ 'px';
    };
}





// ---- conmment 界面的显示----------
var li = document.querySelectorAll('.foot_right li');
li[4].onclick = function () {
    var cmt_none = document.querySelector('.cmt_none');

    if(cmt_none){
        comheight.classList.remove('cmt_none');
    }
    // if(cmt_block)
    comheight.classList.add('cmt_block');
}
var top_close = document.querySelector('.top_close img');

top_close.onclick = function () {
    var cmt_block = document.querySelector('.cmt_block');

    if(cmt_block){
        comheight.classList.remove('cmt_block');
    }
    comheight.classList.add('cmt_none');
}
// var cmt_comment=document.querySelector('.cmt_comment');

//------ 点赞 评论 图标 ----------------------
// alert(li[3].children[0].nodeName)
li[3].onclick = function () {
    if (li[3].children[0].getAttribute("src", 2) == "images/喜欢.png") {
        li[3].children[0].setAttribute("src", "images/已喜欢.png");
        li[3].children[1].innerText++;  //---喜欢数
    } else {
        li[3].children[0].setAttribute("src", "images/喜欢.png");
        li[3].children[1].innerText--;
    }
}
li[2].onclick = function () {
    if (li[2].children[0].getAttribute("src", 2) == "images/点赞.png") {
        li[2].children[0].setAttribute("src", "images/已点赞.png");
        li[2].children[1].innerText++;   //  --  点赞数

    } else {

        li[2].children[0].setAttribute("src", "images/点赞.png");
        li[2].children[1].innerText--;

    }

}




//-------- 添加评论 ---------

var table = document.querySelector('#idData');
var submit = document.querySelector('#submit');
var comment_text = document.querySelector('#comment_text');
// alert(comment_text.innerText)
var a = table.innerHTML
submit.onclick=function(){
    // alert(comment_text.value)
    if(comment_text.value){
        table.innerHTML=`<tr>
                    <td>
                        <div class="cmt_user">
                            <a href="">
                                <img src="images/${users.user_icon}" height="160" width="160"/>
                            </a>
                            <div class="cmt_username">
                                <a href="">
                                    ${users.user_name}
                                </a>
                                <span>&nbsp;的声音</span>
                            </div>

                        </div>
                        <div class="cmt_info">
                            <div class="cmt_text">
                                ${comment_text.value}
                            </div>
                            <div class="cmt_time">
                                <span>2019-01-21</span>&nbsp;|&nbsp;
                                <a href="">回复</a>
                            </div>
                        </div>
                    </td>
                </tr>`+table.innerHTML
        comment_text.value='';
        goPage(1);
    }else {
        alert('评论内容不能为空')
    }
}


//------------- 分页    -----
function goPage(pno) {
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//表格所有行数(所有记录数)

    var totalPage = 0;//总页数
    var pageSize = 3;//每页显示行数
    //总共分几页
    if (num / pageSize > parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行  31
    var endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num) ? num : endRow;    //40

    //遍历显示数据实现分页
    for (var i = 1; i < (num + 1); i++) {
        var irow = itable.rows[i - 1];
        if (i >= startRow && i <= endRow) {
            irow.style.display = "table-row";
        } else {
            irow.style.display = "none";
        }
    }
    var tempStr = "";



    if (currentPage > 1) {
        tempStr += "<span class='btn btn-default' href=\"#\" onClick=\"goPage(" + (1) + ")\">首页</span>";
        tempStr += "<span class='btn btn-default page_1' href=\"#\" onClick=\"goPage(" + (currentPage - 1) + ")\">上一页</span>"
    } else {
        tempStr += "<span class='btn btn-default'>首页</span>";
        tempStr += "<span class='btn btn-default page_1'>上一页</span>";
    }

    for (var pageIndex = 1; pageIndex < totalPage + 1; pageIndex++) {
        tempStr += "<a onclick=\"goPage(" + pageIndex + ")\"><span class='btn btn-default pagecss'>" + pageIndex + "</span></a>";
    }

    if (currentPage < totalPage) {
        tempStr += "<span class='btn btn-default page_1' href=\"#\" onClick=\"goPage(" + (currentPage + 1) + ")\">下一页</span>";
        tempStr += "<span class='btn btn-default' href=\"#\" onClick=\"goPage(" + (totalPage) + ")\">尾页</span>";
    } else {
        tempStr += "<span class='btn btn-default page_1'>下一页</span>";
        tempStr += "<span class='btn btn-default'>尾页</span>";
    }

    document.querySelector("#barcon").innerHTML = tempStr;
}
goPage(1);


// table.innerHTML=`<tr>
//                     <td>
//                         <div class="cmt_user">
//                             <a href="">
//                                 <img src="images/anhui.jpg" height="160" width="160"/>
//                             </a>
//                             <div class="cmt_username">
//                                 <a href="">
//                                     username
//                                 </a>
//                                 <span>&nbsp;的声音</span>
//                             </div>
//
//                         </div>
//                         <div class="cmt_info">
//                             <div class="cmt_text">
//                                 655666
//                             </div>
//                             <div class="cmt_time">
//                                 <span>2019-01-21</span>&nbsp;|&nbsp;
//                                 <a href="">回复</a>
//                             </div>
//                         </div>
//                     </td>
//                 </tr>`+table.innerHTML



