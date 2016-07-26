/**
 * Created by Fly-mydream on 16.7.26.
 */
$(function(){
    var number=new Array();
        number=JSON.parse(localStorage.getItem("array"));
    var boxnum=new Array(number.length);
    var but=$(".but");
   for(var i=1;i<number.length;i++){
       $(".content .wrp").append($(".content .wrp .box:first").clone(true));
   }
    but.click(function(){
        location.href="桌游精灵-流程.html";
    })

})