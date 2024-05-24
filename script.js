function putNum(value){
    var divElement = document.getElementById("textarea");
       
       divElement.style.fontSize=35+"px";
    document.getElementById("textarea").innerText += value;
    }
    function outputAnswer(){
    try {
     document.getElementById("textarea").innerHTML=eval(document.getElementById("textarea").textContent)
    
    
    } catch(error){
       var divElement = document.getElementById("textarea");
       
       divElement.style.fontSize=25+"px";
        document.getElementById("textarea").innerHTML="Invalid Format Used";
    }
    return 1;
    }
    
    function backSpace(i){
    if(i=0){
    let divElement =
    document.getElementById("textarea");
    let str = divElement.textContent;
    i=str.length
    newVal=str.slice(0,i-1);
    document.getElementById("textarea").innerHTML=newVal;
    }
    else{
        document.getElementById("textarea").innerHTML=""
    }
    return 0;
    }
    let i=0;