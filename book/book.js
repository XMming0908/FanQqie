var li=document.getElementById("myul").getElementsByTagName("li");
for(let m=0;m<li.length;m++){

        li[m].index = m;
      
        
    }


for(let i=0;i<li.length;i++){
    console.log(i)
               
    li[i].onmouseover=function(){
        for(let m=0;m<li.length;m++){
           
            li[m].className ='myul_li';
        }

        var  index = this.index;
        li[this.index].className = 'myul_li_hove';

    }

  
    var box_div=document.getElementById("box_div")

   var h=box_div.offsetTop;
    }
    window.onscroll=function(){
        //获取滚动条位置
      var jhlheight=document.documentElement.scrollTop||document.body.scrollTop
    
      console.log(jhlheight)
      //判断滚动条位置
      if(jhlheight>=h){
        box_div.className = 'fixed';
      }else{
        box_div.className = 'box_div';
      }
      
   
    }
    
    
     //点击按钮事件

// // 停止观察
// io.unobserve(element);
 
// // 关闭观察器
// io.disconnect();

