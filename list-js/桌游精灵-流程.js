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

    number=JSON.parse(localStorage.getItem("array"));
    kill.bind( "click",function(){                                 //点击杀人
        window.location.href = "杀手杀人.html";
    });
    /////////////////////////////////// 
    verify.bind( "click",function(){                              //点击警察验人

    });
    ///////////////////////////////////////////
    snipe.bind( "click",function(){                                //点击狙击狙人

    });
    ///////////////////////////////////////////////
    save.bind( "click",function(){                                 //点击医生救人

    });
    /////////////////////////////////////////////////////
    publish.bind( "click",function(){                              //点击亡灵发表遗言

    });
    //////////////////////////////////////////////
    publish_player.bind( "click",function(){                       //点击玩家一次发言

    });
    /////////////////////////////////////////////////
    vite.bind( "click",function(){                                 //点击投票

    });
    //////////////////////////////////////////////
});
