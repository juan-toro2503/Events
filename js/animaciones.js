 let promotores=document.getElementsByClassName("promotor")

for(let promotor of promotores){
    promotor.addEventListener("click",mostrarPromotor)
    function mostrarPromotor(){
    
        if(promotor.style.position != "absolute"){
         promotor.style.position="absolute"
         promotor.style.width="700px"
         promotor.style.Maxheight="92vh"
         promotor.style.Overflow="auto"
         promotor.style.Zindex="4"
         promotor.style.margin="0px auto"
         document.querySelector(".promotor-info").style.height="auto"
         document.querySelector(".promotor-footer").style.height="40px"
     
        }else{
         promotor.style.position="relative"
         promotor.style.width="45%"
         promotor.style.height="auto"
         promotor.style.Overflow="hidden"
         promotor.style.Zindex="1"
         promotor.style.margin="30px 0px"
         document.querySelector(".promotor-info").style.height="120px"
         document.querySelector(".promotor-footer").style.height="40px"
        
        }
     }

}


 


let btns=document.getElementsByClassName("btn-event")
for(let btn_event of btns){

    btn_event.addEventListener("click",reserva)
    function reserva(){
        if(btn_event.style.display!="none"){
           btn_event.style.display="none"
           let ns=document.getElementsByClassName("event")
           for (let n of ns){
            n.style.Maxheight="auto"
           }
           let tickets=document.getElementsByClassName("container-buy-ticket")
           for(let t of tickets){
            t.style.height="140px"
            t.style.Minheight="140px"
            t.style.padding="20px"
           }
          
       }else{
           btn_event.style.display="block"
           let ns=document.getElementsByClassName("event")
           for (let n of ns){
            n.style.Maxheight="auto"
            
           }
           let tickets=document.getElementsByClassName("container-buy-ticket")
           for(let t of tickets){
            t.style.height="0px"
            t.style.padding="0px"
           }
           
           
       } 
       
   }

}

