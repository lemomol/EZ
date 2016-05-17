var tabs=function(){
    function tag(name,elem){                    //数组，存储导航栏or二级菜单
        return (elem||document).getElementsByClassName(name); //返回elem元素下的所有TagName为name的的元素存储到数组
    }
    function id(name){
        return document.getElementById(name);//获得相应ID的元素
    }
    /*      function first(elem){
     elem=elem.firstChild;
     return elem&&elem.nodeType==1? elem:next(elem);  //1元素节点
     }
     function next(elem){
     do{
     elem=elem.nextSibling;
     }while(
     elem&&elem.nodeType!=1
     )
     return elem;
     }
     */
    return {
        set:function(elemId,tabId){
            var elem=tag("m_li",id(elemId));       //导航菜单数组
            var tabs=tag("tag",id(tabId));       //二级菜单数组
            var listNum=elem.length;            //得到导航菜单长度（个数）
            var tabNum=tabs.length;            //得到二级菜单个数
            for(var i=0;i<listNum;i++){
                elem[i].onclick=(function(i){
                    return function(){
                        for(var j=0;j<tabNum;j++){
                            if(i==j){
                                tabs[j].style.display="block";       //二级菜单显示
                                //alert(elem[j].firstChild);
                                elem[j].firstChild.className="selected";  //导航菜单选中
                            }
                            else{
                                tabs[j].style.display="none";
                                elem[j].firstChild.className="";
                            }
                        }
                    }
                })(i)
            }
        }
    }
}();
tabs.set("nav","menu_con");//执行

