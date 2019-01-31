var dianzan=document.querySelector('.right_bottom_1 .img_1')
var quguo=document.querySelector('.right_bottom_1 .img_2')
var dianzan_number=document.querySelector('.right_bottom #tongji')


dianzan.onclick=function () {

    if(this.getAttribute('src')=="images/dianzanhui.svg"){
        dianzan.src="images/dianzanhong.svg";
        this.parentNode.parentNode.children[0].innerText=parseInt(this.parentNode.parentNode.children[0].innerText)+1;
    }
    else {
        dianzan.src="images/dianzanhui.svg";
        this.parentNode.parentNode.children[0].innerText=parseInt(this.parentNode.parentNode.children[0].innerText)-1;
    }
}

quguo.onclick=function () {
    if(this.getAttribute('src')=="images/foot1.svg"){
        this.src="images/foot2.svg";
    }
    else {
        this.src="images/foot1.svg";
    }
}

