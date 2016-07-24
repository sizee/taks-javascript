/**
 * Created by Fly-mydream on 16.7.24.
 */

$(function() {
    var but = $(".wrap .content .top-right-down button");
    var but2=$(".wrap #start");
    var number=$(".wrap .content #number");
    var butshow = $(".wrap .top-right-up");
    var n=1;
        but.click(function(event){
            n=2;
            var thenumber=new Array(number.val());//创建用户所选数值的数组。

            if(number.val()>18||number.val()<6){
                alert("请输入6-18之间的数字");
                event.preventDefault()
            }else{
                $(".wrap .top-right-up .color1").remove();
                var killnumber=parseInt(number.val()/5);
                for(var i=0;i<killnumber;i++){
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleOrange.png'><span class='widtt'>杀手</span><span>1人</span></div>");
                }
                for( i=killnumber;i<number.val();i++){
                    thenumber[i]=$("<div class='color1'><img src='桌游精灵-img/桌游精灵-设置页面rectangleBlue.png'><span class='widtt'>平民</span><span>1人</span></div>");
                }
                for(i=0;i<number.val();i++){
                    butshow.append(thenumber[i]);
                }
            }
        });
        but2.click(function(){
            if(n==2){
                location.href="http://www.baidu.com";
            }
            else{
                alert("请点击设置参数");
            }
        })
    });