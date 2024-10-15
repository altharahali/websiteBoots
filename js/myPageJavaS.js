
$(document).ready(function(){

    $("#kroos").animate({
        "width" :"+=26px",
    },1000).css({backgroundColor:'#a56',color:"#fff"})

    $(".stuff h4").click(function(){
        $(".text p").slideToggle(300);
    })
    
});


