/**
 * Created by Administrator on 2016/5/16.
 */
window.onload=function(){
    var banner_box = document.getElementById('banner_box');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;

    //按钮显示橙色
    function  showButton(){
        for(var i = 0; i < buttons.length; i++){
            console.log(buttons.length);
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

//左右箭头控制轮播
    function animate(offset){
        var newLeft = parseInt(list.style.left) + offset;   //偏移量
        var time = 300;//位移总时间
        var interval = 10; // 位移时间间隔
        var speed = offset/(time/interval);//每次位移量

        function  go(){
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go,interval);
            }
            else {
                list.style.left = newLeft + 'px';

                if (newLeft > -750){
                    list.style.left = -2250 + 'px';
                }
                if ( newLeft < -2250){
                    list.style.left = -750 + 'px';
                }
            }
        }
        go();

    }
    next.onclick = function(){
        if(index == 3){
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        animate(-750);
    }
    prev.onclick = function(){
        if(index == 1){
            index = 3;
        }
        else {
            index -= 1;
        }
        showButton();
        animate(750);
    }
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            if(this.className == 'on'){
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -750 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }
}


































































