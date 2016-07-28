/**
 *
 * Created by Fly-mydream on 16.7.27.
 */
$(function() {
    var but = $("button");
    var data = JSON.parse(localStorage.getItem("datas"));
 
    var killnumber = data[3];
    var killname = data[4];
    $(".showw").append(data[1]);
    var littleControl = JSON.parse(localStorage.getItem("control2"));
    but.bind("click",function () {
        littleControl += 1;
        localStorage.setItem("control2", JSON.stringify(littleControl));
       if(killname=="杀手"){
            --killnumber;
           data[3]=killnumber;
           localStorage.setItem("datas", JSON.stringify(data));
           if(killnumber==0){
               var bbb=2;
               data[2]=bbb;
               localStorage.setItem("datas", JSON.stringify(data));
                window.location.href="桌游精灵-游戏结束.html";
            }
           else if(littleControl%2==0){
               window.location.href="桌游精灵-流程.html";
           }
           else{
               window.location.href="杀手杀人.html";
           }
        }
        if(killname=="平民"){
            var aaa=data[5];
            --aaa;
            data[5]=aaa;
            localStorage.setItem("datas", JSON.stringify(data));
            if(aaa==0){
                var bbb=1;
                data[2]=bbb;
                localStorage.setItem("datas", JSON.stringify(data));
                window.location.href="桌游精灵-游戏结束.html";
            }
            else if(littleControl%2==0){
                window.location.href="桌游精灵-流程.html";
            }
            else{
                window.location.href="杀手杀人.html";
            }
        }


    })
})
