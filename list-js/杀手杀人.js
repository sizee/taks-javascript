/**
 * Created by Fly-mydream on 16.7.26.
 */
$(function () {
    var number = new Array();     //定义数组number用来获取本地存储的玩家职业
    var number2=new Array();
    number2=JSON.parse(localStorage.datas);
    var control;                  //判断用户所选职业/杀手，医生，狙击或警察
    var control3;
    var control2=0;               //判断用户是否点击投死按钮
    var asd;
    var number1;
    var jf;
    var iff;
    number = JSON.parse(localStorage.getItem("array"));      //解压数组元素
    control = JSON.parse(localStorage.getItem("control"));   //解压控制位数。
    control3=JSON.parse(localStorage.getItem("control2"));
    number1=JSON.parse(localStorage.getItem("datas"));
    var littlecontrol3=control3%2;

    for (var i = 0; i < number.length; i++) {                  //for循环用于创建用户所选玩家数量。
        $(".wrap .content").append("<div class='box'>" +       //创建一个boxdiv
            "<div class='box-top'>" +
            "<h2>" +
            number1[0][i] +
            "</h2>" +
            "<p>" +
            (i + 1) + '号' +
            "</p>" +
            "</div>" +
            "<div class='sub'>" +
            "<img src='桌游精灵-img/发言讨论结束，投票---刀.png'>" +
            "<img src='桌游精灵-img/发言讨论结束，投票---放大镜.png'>" +
            "<img src='桌游精灵-img/发言讨论结束，投票---瞄准.png'>" +
            "<img src='桌游精灵-img/发言讨论结束，投票---加.png'>" +
            "</div>" +
            "</div>");
        switch (control) {                                     //为不同的控制数选择相应的方法
            case 1:
            {
                $(" .box:last .sub img:eq(0) ").css("cursor", "pointer");
                $(" .box:last .sub img:eq(1) ").css({"opacity": "0.3", "cursor": "context-menu"});  //警察图片变暗
                $(" .box:last .sub img:eq(2) ").css({"opacity": "0.3", "cursor": "context-menu"});  //狙击图片变暗
                $(".box:last .sub img:eq(3) ").css({"opacity": "0.3", "cursor": "context-menu"});   // 医生图片变暗
                break;
            }
            case 2:
            {
                $(".box:last .sub img:eq(0)>img").css({"opacity": "0.3", "cursor": "context-menu"}); //杀手图片变暗
                $(" .box:last .sub img:eq(1) ").css("cursor", "pointer");
                $(".box:last .sub img:eq(2)>img").css({"opacity": "0.3", "cursor": "context-menu"});
                $(".box:last .sub img:eq(3)>img").css({"opacity": "0.3", "cursor": "context-menu"});
                break;
            }
            case 3:
            {
                $(".box:last .sub img:eq(0)>").css({"opacity": "0.3", "cursor": "context-menu"});
                $(".box:last .sub img:eq(1)>").css({"opacity": "0.3", "cursor": "context-menu"});
                $(" .box:last .sub img:eq(2) ").css("cursor", "pointer");
                $(".box:last .sub img:eq(3)>").css({"opacity": "0.3", "cursor": "context-menu"});
                break;
            }
            case 4:
            {
                $(".box:last .sub img:eq(0)>").css({"opacity": "0.3", "cursor": "context-menu"});
                $(".box:last .sub img:eq(1)>").css({"opacity": "0.3", "cursor": "context-menu"});
                $(".box:last .sub img:eq(2)>").css({"opacity": "0.3", "cursor": "context-menu"});
                $(" .box:last .sub img:eq(3) ").css("cursor", "pointer");
                break;
            }

        }
    }

    if($(".box .box-top:contains('死亡')")){                      //检查box里面的内容是否为死亡，如过死亡添加deal类。

        $(".box .box-top:contains('死亡')").addClass("deal");
    }
    
  ////////////////////////////////////////////////////
        $(".box .sub img").click(function () {                                       //用户点击相应图标事件
            {
                $(".box .box-top:contains('平民')").removeClass("deal");
                $(".box .box-top:contains('杀手')").removeClass("deal");
                 jf = ($(this).parent().prev().children('h2')).html();            //获取用户点击玩家的类型
                 iff=($(this).parent().prev().children('p')).html();              //获取用户点击的号牌数。
                if (($(this).index() + 1) == control && jf =="平民"&&control3==0 ){                //用户点击的是杀手图标且 用户点击的是平民。
                    $(this).parent().prev().addClass("deal");                        //添加deal类
                     asd=$(this).parent().parent().index();
                    control2=1;
                }   //杀手点击
                if (($(this).index() + 1) == control && jf !="死亡"&&control3!=0 ){
                    $(this).parent().prev().addClass("deal");
                     asd=$(this).parent().parent().index();//添加deal类

                    control2=1;
                }
                number2[4]=jf;
            }
        });
    ///////////////////////////////
    
    $(".but").click(function(){
        number2[0][asd]="死亡";

        $(".content .box .box-top:eq(asd+1)").text("死亡");
        number2[1]="<p>"+iff+"玩家被杀死，真实身份是"+jf+"<p>"+number2[1];
        localStorage.setItem("datas",JSON.stringify(number2));
        if(control2==1){
            window.location.href="黑夜解密boy.html"
        }
        else{
            alert("请选择要杀死的小伙伴");
        }
    })

});
