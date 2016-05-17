/*显示日期时间*/
var attime;
function clock(){
    var mydate=new Date();
    var myyear=mydate.getFullYear();
    var mymonth=mydate.getMonth()+1;
    var myday=mydate.getDate();
    var myweeknum=mydate.getDay();
    var myweek=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    attime= mydate.getHours()+' : '+mydate.getMinutes()+' : '+mydate.getSeconds();
    document.getElementById("Date_d").value=(myyear+"年"+mymonth+"月"+myday+"日 "+myweek[myweeknum]);
    document.getElementById("Date_t").value=(attime);
}
setInterval(clock,1000);
