 var mode=document.getElementById("mode");
 var top_div=document.getElementById("top");
 var bodyEle = document.body;
 var span = document.body.getElementsByTagName("span");
 var imglist = document.body.getElementsByTagName("img");
 var a = document.getElementById("box").getElementsByTagName("a");
 var list1 = document.getElementById("box").children
 var boole=1;

 mode.addEventListener("click",function(){

    if(boole>0){
        bodyEle.style.backgroundColor="#0e0e0e"
        top_div.style.backgroundColor="#0e0e0e"
    
        
        for(i=1;i<list1.length;i++){
            
            list1[i].style.backgroundColor="#1c1c1c"
            console.log( list1[i])
        }
    
        for(i=0;i<span.length;i++){
            span[i].style.color="white"
          
        }
    
        for(i=0;i<a.length;i++){
            a[i].style.color="white"
          
        }
       
    }else{
        
            bodyEle.style.backgroundColor="#f2f2f2"
            top_div.style.backgroundColor="#f2f2f2"
        
            list1[1].style.backgroundColor="#f2f2f200"
            list1[2].style.backgroundColor="#f9f2e0"
            for(i=3;i<list1.length;i++){
                list1[i].style.backgroundColor="white"
              
            }
        
            for(i=0;i<span.length;i++){
                span[i].style.color="black"
              
            }
        
            for(i=0;i<a.length;i++){
                a[i].style.color="black"
              
            }

    }
   
    for(i=0;i<imglist.length;i++){
        var str=imglist[i].getAttribute("src",2);

        var name=str.substring(0, str.lastIndexOf("."));
        var s=str.substring(str.lastIndexOf(".")+1);
        if(name.substr(-4)!="hove"){
            imglist[i].setAttribute("src",name+"hove."+s);
        }else{
            imglist[i].setAttribute("src",name.substr(0,name.length-4)+"."+s);
        }
        console.log(name.substr(-4))
      
    }
    boole=-boole;
 })


 function toSheZhi(){
    window.location.href = "../font/设置.html";
 }