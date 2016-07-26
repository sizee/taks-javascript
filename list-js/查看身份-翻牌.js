/**
 * Created by Fly-mydream on 16.7.25.
 */
$(function() {
    var hello=new Array(localStorage.length);
    var but=$(".content button");
    var number=$(".content .number");
    var content_top_one=$(".content .content-top-one");
    var content_top_two=$(".content .content-top-two");
    var content_top_two_h2=$(".content-top-two h2");

    var hello=JSON.parse(localStorage.getItem('array'));
    
     var littlenumber=0;
     var somenumber=2;
     number.text(1);
    
    but.bind("click",function(){
        if(littlenumber==hello.length){
            window.location.href="法官日记.html";
            but.unbind();
            return false;
        }
         if(content_top_one.is(":visible"))
         {
             content_top_one.css("display","none");
             content_top_two.css("display","block");
             content_top_two_h2.text("角色:"+ hello[littlenumber]);
             but.text("隐藏并传递给"+somenumber+"号");
             littlenumber++;
         }
        else{
             content_top_one.css("display","block");
             content_top_two.css("display","none");
             but.text("查看"+somenumber+"号身份");
             number.text(somenumber);
             somenumber++;
         }
        if(littlenumber==hello.length){
            littlenumber=hello.length;
            somenumber=hello.length;
            console.log(littlenumber);
            but.text("法官日记");
        }
    });
});
  