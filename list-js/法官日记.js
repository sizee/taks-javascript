/**
 * Created by Fly-mydream on 16.7.26.
 */
$(function(){
    var number=new Array();
        number=JSON.parse(localStorage.getItem("array"));
    var boxnum=new Array(number.length);
    var but=$(".but");
   for(var i=0;i<number.length;i++){
       $(".content .wrp").append("<div class='box'>" +
           "<div class='box-top'>" +
           "<h2>" +
           "</h2>" +
           "<p>" +
           (i+1)+'号' +
           "</p>" +
           "</div>" +
           "</div>");
   }
    but.click(function(){
        location.href="桌游精灵-流程.html";
    })

})