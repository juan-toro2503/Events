//eventos

let events=document.querySelectorAll(".event")
let btnEvent=document.querySelectorAll(".btn-event")
let closeEvent=document.querySelectorAll(".close-event")


for (let i=0; i<btnEvent.length; i++){
    btnEvent[i].addEventListener("click",()=>{
        events[i].setAttribute("id","true")
        if(events[i].id=="true"){
            closeEvent[i].style.display="block"
        }
  
    })
    closeEvent[i].addEventListener("click",()=>{
        events[i].removeAttribute("id")
        closeEvent[i].style.display="none"
    })
    
}

//promotores
let promotores=document.querySelectorAll(".promotor")
let showPromotor=document.querySelectorAll(".show-promotor")
let closePromotor=document.querySelectorAll(".close-promotor")

for(let i=0; i<promotores.length; i++){
    showPromotor[i].addEventListener("click",()=>{
        promotores[i].setAttribute("id","promotorTrue")
        if(promotores[i].id=="promotorTrue"){
            showPromotor[i].style.display="none"
            closePromotor[i].style.display="block"
        }
    })

    closePromotor[i].addEventListener("click",()=>{
        promotores[i].removeAttribute("id")
        showPromotor[i].style.display="block"
        closePromotor[i].style.display="none"

    })
}


//buscador Eventos

/* let search=document.getElementById("search")
search.addEventListener("keyup",buscarEvento)
 */
/* function buscarEvento(){
    let containerEventos=document.getElementById("container-eventos")
    let items=``

    for(){
        items+=``
    }



    containerEventos.innerHTML=items
} */


//validacion del tipo de token

let typeToken="promotor"
if (typeToken=="promotor"){
    
}


//login user
let menus = document.querySelectorAll(".container-menus")
function setMenuUser(){
    let  userMenu= document.querySelectorAll(".menu-user")
    let loginUser=true; //aca va el token del usuario
    let avatars=document.querySelectorAll(".img-login")
    let logos=document.querySelectorAll(".logo-login")

    for(let menu of menus){
        if (loginUser==true){
            menu.classList.add("container-menu-sesion");
            for(let menu of userMenu){
                menu.style.display="flex";
            }
            for(let avatar of avatars){
                avatar.style.display="block"
            } 
            for(let logo of logos){
                logo.style.display="none"
            }
           
            console.log(menu)
            
        }else{
            for(let menu of userMenu){
                menu.style.display="none";
            }
            for(let avatar of avatars){
                avatar.style.display="none"
            } 
            for(let logo of logos){
                logo.style.display="block"
            }
           
           
        }

    }

}
setMenuUser()




//login promotor 

function setMenuPromotor(){
    let  promotorMenu= document.querySelectorAll(".menu-promotor")
    let loginPromotor=false;//aca va el token del promotor
    let avatars=document.querySelectorAll(".img-login")
    let logos=document.querySelectorAll(".logo-login")

    for(let menu of menus){
        if (loginPromotor==true){
            menu.classList.add("container-menu-sesion");
            for(let menu of promotorMenu){
                menu.style.display="flex";
            }
            for(let avatar of avatars){
                avatar.style.display="block"
            } 
            for(let logo of logos){
                logo.style.display="none"
            }
           
            console.log(menu)
            
        }else{
            for(let menu of promotorMenu){
                menu.style.display="none";
            }
            for(let avatar of avatars){
                avatar.style.display="none"
            } 
            for(let logo of logos){
                logo.style.display="block"
            }
           
        }

    }

}
setMenuPromotor()







