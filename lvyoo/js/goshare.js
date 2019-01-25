var title = document.querySelector('#inputtext01');
var dest = document.querySelector('#inputtext02');
var title_error = document.querySelector('#title');
var dest_error = document.querySelector('#dest');
// document.querySelector('.nextstep').onclick=function () {
//     if(title.value){
//         alert('ok')
//
//     }else{
//         alert('no')
//     }
// };


title.onchange=function(){
    if (title.value) {
        alert('ok');
        return ok;

    } else{
        title_error.innerHTML = '请输入标题';
        return no;

    }

};
