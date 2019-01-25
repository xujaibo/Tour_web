var h=document.querySelectorAll('.about h4');
var f=document.querySelectorAll('.about');
var g=document.querySelectorAll('.share_img');
for(var fs of f){
    fs.onmouseover=function () {
        for(var hs of h){
            if(this.children[0].innerText==hs.innerText){
                hs.classList.add('move1')
            }
        }
    };
    fs.onmouseleave=function () {
        for(var hs of h){
            if(this.children[0].innerText==hs.innerText){
                hs.classList.remove('move1')
            }
        }
    };
}
for(var gs of g){
    gs.onmouseover=function () {
        this.parentNode.parentNode.children[1].classList.add('move1')

        }



}
for(var gs of g){
    gs.onmouseleave=function () {
        this.parentNode.parentNode.children[1].classList.remove('move1')

    }

}