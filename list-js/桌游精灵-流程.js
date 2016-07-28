/**
 * Created by Fly-mydream on 16.7.26.
 */

$(function(){
    var number=new Array();
   
    var kill =$(".content  .middle .right .kill");                      //杀手杀人
    var verify=$(".content .middle .right .verify");                   //警察验人
    var snipe=$(".content .middle .right .snipe");                     //狙击狙人
    var save=$(".content .middle .right .save");                       //医生救人
    var publish=$(".content .middle .right .publish");                 //亡灵发表遗言
    var publish_player=$(".content .middle .right .publish_player");   //玩家一次发言
    var vite=$(".content .right .vite");                       //投票
    var control=0;
    number=JSON.parse(localStorage.getItem("array"));
    localStorage.setItem("control2",JSON.stringify(0));
    kill.bind( "click",function(){                                 //点击杀人
        window.location.href = "杀手杀人.html";
        control=1;
        localStorage.setItem("control",JSON.stringify(control));
    });
    /////////////////////////////////// 
    verify.bind( "click",function(){                              //点击警察验人
        window.location.href = "杀手杀人.html";
        control=2;
        localStorage.setItem("control",JSON.stringify(control));
    });
    ///////////////////////////////////////////
    snipe.bind( "click",function(){                                //点击狙击狙人
        window.location.href = "杀手杀人.html";
        control=3;
        localStorage.setItem("control",JSON.stringify(control));
    });
    ///////////////////////////////////////////////
    save.bind( "click",function(){                                 //点击医生救人
        window.location.href = "杀手杀人.html";
        control=4;
        localStorage.setItem("control",JSON.stringify(control));
    });
    /////////////////////////////////////////////////////
    publish.bind( "click",function(){                              //点击亡灵发表遗言
        window.location.href = "杀手杀人.html";
        control=5;
        localStorage.setItem("control",JSON.stringify(control));
    });
    //////////////////////////////////////////////
    publish_player.bind( "click",function(){                       //点击玩家一次发言
        window.location.href = "杀手杀人.html";
        control=6;
        localStorage.setItem("control",JSON.stringify(control));
    });
    /////////////////////////////////////////////////
    vite.bind( "click",function(){                                 //点击投票
        window.location.href = "杀手杀人.html";
        control=7;
        localStorage.setItem("control",JSON.stringify(control));
    });
    //////////////////////////////////////////////
    
});
