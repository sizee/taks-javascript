/**
 * Created by Fly-mydream on 16.7.26.
 */
$(function(){
    var number=new Array();
    number=JSON.parse(localStorage.getItem("array"));
     for(var i=0;i<number.length;i++){
         $(".wrap .content").append("<div class='box'>" +
             "<div class='box-top'>" +
             "<h2>" +
             number[i] +
             "</h2>" +
             "<p>" +
             (i+1)+'号' +
             "</p>" +
             "</div><div class='sub'>" +
             "<a href='#'><img src='桌游精灵-img/发言讨论结束，投票---刀.png'></a>" +
             "<a href='#'><img src='桌游精灵-img/发言讨论结束，投票---放大镜.png'></a>" +
             "<a href='#'><img src='桌游精灵-img/发言讨论结束，投票---瞄准.png'></a>" +
             "<a href='#'><img src='桌游精灵-img/发言讨论结束，投票---加.png'></a>" +
             "</div>" +
             "</div>");
     }
});
