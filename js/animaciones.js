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

//mostrar promotores

async function ShowPromotores(){
    await fetch("")
    .then(response=>{response})
    .then(data=>{
        let container=document.getElementById("container_promotores")
        let element=``
        for (let promotor of data){
            
            element+=`
            <div class="promotor">
                    <img src="${}" alt="">
                    <div class="promotor-info">
                        <div class="title-promotor"><h3 class="promotor-title">${}</h3><ion-icon name="close-outline" class="close-promotor"></ion-icon><ion-icon name="chevron-up-outline" class="show-promotor"></ion-icon></div>
                        <h5>${}</h5>
                        <p>2022</p> 
                        <p>${}</p>
                        <h5>Contactanos:<h6>${}</h6></h5>
                        <h5>Contactanos:<h6>${}</h6></h5>

                        
                    </div>
                    <div class="promotor-footer"><ion-icon name="logo-whatsapp" href="${}"></ion-icon><ion-icon name="logo-facebook" href="${}"></ion-icon><ion-icon name="logo-twitter" href="${}"></ion-icon></div>

                </div>`
            

        }
        container.innerHTML=element
    })




}
ShowPromotores()

//mostrar eventos 
async function ShowEvents(){
    await fetch("")
    .then(response=>{response})
    .then(data=>{
        let container=document.getElementById("container_events")
        let element=``
        for (let event of data){
            
            element+=`
            <div class="event">
                <img src="${}" alt="" class="img-event">
                <div class="info-event">
                 <div class="title_event"><h2>${}</h2><ion-icon name="close-outline" class="close-event" ></ion-icon></div>
                  <h3>${}</h3>
                  <p class="description-event">-${}</p>
                  <p>-Fecha:${}</p>
                  <p>-Lugar: ${}</p>
                  <button class="btn-event" >Adquiere tu boleta</button>

                </div>
                <div class="container-buy-ticket">
                  <div class="ticket_quality">
                    <h5>Calidad</h5>
                    <select name="" id="">
                      <option value="vip">Vip</option>
                      <option value="platino">Platino</option>
                      <option value="general">General</option>
                    </select>

                  </div>
                  <div class="ticket_quantity">
                    <h5>Cantidad</h5>
                    <input type="number" value="0">
                  </div>
                  <div class="ticket_price">
                    <h5>Precio</h5>
                    <h6>$200.000</h6>
                  </div>
                  <div class="total_price">
                    <h4>Total</h4>
                    <h6>${price*cantidad}</h6>
                  </div>
                  <div class="btn-buy">
                    <button>Reservar</button>
                  </div>
                </div>

              </div>`
            

        }
        container.innerHTML=element
    })




}
ShowEvents()


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
//logos
let avatars=document.querySelectorAll(".img-login")
let logos=document.querySelectorAll(".logo-login")
//login user
let menus = document.querySelectorAll(".container-menus")
function setMenuUser(){
    let  userMenu= document.querySelectorAll(".menu-user")
    let loginUser=false; //aca va el token del usuario
    

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
    /* let avatars=document.querySelectorAll(".img-login")
    let logos=document.querySelectorAll(".logo-login") */

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







