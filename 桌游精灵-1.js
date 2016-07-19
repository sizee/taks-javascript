/**
 * Created by Fly-mydream on 16.7.19.
 */
function mytime(){
    var mytime=new Date();
    var h=mytime.getHours();
    var m=mytime.getMinutes();
    var s=mytime.getSeconds();
    var hh="";
    m=check(m);
    s=check(s);
    if(h>12)
    {
        h=h%12;
        hh="PM";
    }else{
        hh="AM";
    }
    document.getElementById('mytimes').innerHTML=h+":"+m+":"+s+" "+hh;
    setTimeout('mytime()',500);
}
function back(){
    window.location.href="桌游精灵-首页.html";
}
function check(i){
    if(i<10) {
        i="0"+i;
    } 
    return i;
}
