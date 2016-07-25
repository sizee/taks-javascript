/**
 * Created by Fly-mydream on 16.7.25.
 */
$(function() {
    var hello=new Array();
    var but=$(".content button");
    var number=$(".content .number");
    var content_top_one=$(".content .content-top-one");
    var content_top_two=$(".content .content-top-two");
    var content_top_two_h2=$(".content-top-two h2");
    var content_top_one_recting=$(".content .content-top-one .recting .number");
    var content_top_two_recting=$(".content .content-top-two .recting .number");

    var hello=JSON.parse(localStorage.getItem('array'));
   /* console.log(hello,hello.length);
    alert(hello[0]);
   alert(hello[1]);
    alert(hello[2]);alert(hello[3]);alert(hello[4]);alert(hello[5]);*/
     var littlenumber=0;
     var somenumber=2;
     number.text(1);
    but.bind("click",function(){
         if(content_top_one.is(":visible"))
         {
             content_top_one.css("display","none");
             content_top_two.css("display","block");
             content_top_two_h2.text("角色:"+ hello[littlenumber]);
             but.text("隐藏并传递给"+somenumber+"号");
             littlenumber++;
             somenumber++;
         }
        else{
             content_top_one.css("display","block");
             content_top_two.css("display","none");
             content_top_one_recting.text(somenumber);
             content_top_two_recting.text(somenumber);

         }
        
    })
})
  