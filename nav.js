/**
 * Created by Fly-mydream on 16.7.23.
 */
$(function(){
      var $wrap_nume=$(".wrap .nav-style2 .left");//获取menu的菜单
      var $wrap_style2=$(".wrap .nav-style2");
      var $wrap_style2_right=$(".wrap .nav-style2 .right");
     var $wrap_style2_p=$(".wrap .nav-style2 p")
      var $fen=$(".fen");           
    var n=0//获取fen的class
       $wrap_nume.click(function(){  
           if(n%2==0){
               $fen.fadeIn(1000);
               $fen.addClass("fenhove");
               $wrap_nume.fadeIn(1000);
               $wrap_style2.css("marginLeft","80%");
               $wrap_style2_right.css("display","none");
               $wrap_style2_p.css("display","none");
           }else{
               $fen.fadeIn(1000);
               $fen.removeClass("fenhove");
               $wrap_nume.fadeIn(1000);
               $wrap_style2.css("marginLeft","0");
               $wrap_style2_right.css("display","block");
               $wrap_style2_p.css("display","block");
           }
           n++;
       })
});