/**
 * Created by Fly-mydream on 16.7.24.
 */

$(function() {
      if(window.localStorage){
          alert("这个浏览器支持本地存储");
      }else{
          alert("这个浏览器不支持本地存储");
          
      }
    var but = $(".wrap .content .top-right-down button");  //获取点击设置按钮节点
    var but2=$(".wrap #start");                            //获取去发牌按钮节点
    var number=$(".wrap .content #number");                //获取用户input的值
    var butshow = $(".wrap .top-right-up");                //获取要写入的文本的位置节点
    var judeg=1;                                           //判断用户是否设置玩家配比
        but.click(function(event){                        //用户点击事件
            judeg=2;
            var thenumber=new Array;                       //创建用户所选玩家大小 默认为6。
            if(number.val()>18||number.val()<6){           //判断用户所输入的大小范围
                alert("请输入6-18之间的数字");             //弹出用户输入数字范围
                event.preventDefault()   ;                 //阻止提交，比如表单。但在这里没有卵用
            }else{                                        //如果用户输入的数字在范围之内
                $(".wrap .top-right-up .color1").remove();                           //清除上次点击所创建的节点
                var killnumber=parseInt(number.val()/5);                            //设置杀手的数量，每增加5人，在其中添加一名杀手
                for(var i=0;i<killnumber;i++){                                     //创建杀手元素节点
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleOrange.png'><span class='widtt'>杀手</span><span>1人</span></div>");
                }
                for( i=killnumber;i<number.val();i++){                              //创建平民人数节点
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleBlue.png'><span class='widtt'>平民</span><span>1人</span></div>");
                }
                    butshow.append(thenumber.sort(rand));                            //将创建的文本节点经过随机排列插入到指定的HTML文本中。
                var hellotext =new Array;                                           //定义数组用来从HTML文件中取出所要节点文本的内容。
                var ii=0;                                                           //定义变量ii 用来立遍整个hellotext数组。
                 $(".wrap .top-right-up .color1 .widtt").each(function(){          //选取所有存储的元素的文本值，用each来逐个立遍。
                     hellotext[ii]=$(this).text();                                 //将所取到的文本内容传到定义的数组hellotext里面。
                     ii++;                                                         //为了立遍整个hellotext数组。
                 });

                localStorage.setItem("array",hellotext);                           //将数组hellotext里面的内容存储到本地的浏览器中。
            }
        });
    
    function rand(){                                              //随机生成函数。使得杀手和平民能够随机分配。
        return Math.random()>.5? -1:1;                            //返回random函数。生成随机的-1和1。
    }
    
    but2.click(function(){                                         //点击发牌按钮事件
            if(judeg==2) {                                          //判断用户是否设置玩家配比
                location.href = "翻拍.html";
            }else                                                   //如过用户没有配比，转入下一个html文件
            {
                alert("请点击设置参数");                            //提醒用户进行配比。
            }
        })
    });