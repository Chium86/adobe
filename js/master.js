const isMobile = $(window).width() <= 480;  //抓出可視範圍寬度,並判斷是否<=480
// console.log(isMobile) 

function setGrid(){
    if (isMobile){
        $('#Grid').addClass('grid-2');
        return;
    }
    $('#Grid').addClass('grid-3');
}

setGrid(); //呼叫


$(window).scroll(function(){
    // console.log($(window).scrollTop());
    if($(window).scrollTop() == 0){
        $('#Nav').removeClass('nav-active')
    }else{
        $('#Nav').addClass('nav-active')
        
    }


});
