const isMobile = $(window).width() <= 480;  //抓出可視範圍寬度,並判斷是否<=480
// console.log(isMobile) 
const $grid = $('#Grid');
const $nav = $('#Nav');

function setGrid(){
    if (isMobile){
        $grid.addClass('grid-2');
        return;
    }
        $grid.addClass('grid-3');
}

function setScroll(){
    $(window).scroll(function() {
    // isMobile = true
    // !isMobile = false
    if (!isMobile) return;
    
    // console.log($(window).scrollTop());
    if($(window).scrollTop() == 0){
        $nav.removeClass('nav-active');
    }else{
        $nav.addClass('nav-active');
    }    
});
}

function setInit(){
    setGrid(); //呼叫
}

function setEvent(){
    setScroll();
    setFancybox();
}

function setFancybox(){
    $grid.find('a').fancybox({
        protect:true,
        loop:true,
    });
}

setInit();
setEvent();