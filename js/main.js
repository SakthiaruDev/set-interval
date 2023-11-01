let name=document.getElementById("para");

let ingre=0;
function interval(){
    ingre++;
    let para=document.createElement("p");
    name.appendChild(para);
    para.innerHTML="welcome";
}

let set=setInterval(()=>{
    if(ingre==5){
        clearInterval(set)
    }
    else{
        interval()
    }
},1000)