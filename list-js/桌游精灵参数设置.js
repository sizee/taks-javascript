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
    var n=1;                                               //判断用户是否设置玩家配比
        but.click(function(event){                        //用户点击事件
            n=2;
            var thenumber=new Array(number.val());         //创建用户所选数值的数组。

            if(number.val()>18||number.val()<6){           //判断用户所输入的大小范围
                alert("请输入6-18之间的数字");             //弹出用户输入数字范围
                event.preventDefault()   ;                  //阻止提交，比如表单。但在这里没有卵用
            }else{                                        //如果用户输入的数字在范围之内
                $(".wrap .top-right-up .color1").remove();                           // 清除上次点击所创建的节点
                var killnumber=parseInt(number.val()/5);                            //设置杀手的数量，每增加5人，在其中添加一名杀手
                for(var i=0;i<killnumber;i++){                                     //创建杀手元素节点
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleOrange.png'><span class='widtt'>杀手</span><span>1人</span></div>");
                }
                for( i=killnumber;i<number.val();i++){           //创建平民人数节点
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleBlue.png'><span class='widtt'>平民</span><span>1人</span></div>");
                }
                for(i=0;i<number.val();i++){
                    butshow.append(thenumber.sort(rand));                //将创建的文本节点插入到指定的文本中。
                }
            }
        });
    function rand(){
        return Math.random()>.5? -1:1;
    }
        but2.click(function(){                                //点击发牌按钮事件
            if(n==2) {                                          //判断用户是否设置玩家配比
                location.href = "翻拍.html";
            }else//如过以配比，转入下一个html文件
            {
                alert("请点击设置参数");                       //提醒用户进行配比。
            }
        })
    });