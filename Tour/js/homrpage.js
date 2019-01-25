var h=document.querySelectorAll('.first_img h3');
var f=document.querySelectorAll('.first_img');
for(var fs of f){
    fs.onmouseover=function () {
        for(var hs of h){
            if(this.children[1].innerText==hs.innerText){
                hs.classList.add('move')
            }
        }
    };
    fs.onmouseleave=function () {
        for(var hs of h){
            if(this.children[1].innerText==hs.innerText){
                hs.classList.remove('move')
            }
        }
    };
}
