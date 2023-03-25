 //import { nextPre } from "./SelectPre" 
const Progreso=document.querySelector(".Progreso")
export const TAnimacionProgreso=()=>{
    let couan=0
     
    const TiempoProgreso=()=> {
    const itemInocrrecto=localStorage.getItem("incorrecta")
    const parseo=JSON.parse(itemInocrrecto)
  
  if (couan>=400  ) {
    alert("Termino el tiempo")
    if (couan>=400) {
      couan=0
      couan+=10
       
      
      
      
  
    console.log(couan);
    Progreso.style.width=couan+"px"
    }
    
  }else{
    couan+=10
    console.log(couan);
    Progreso.style.width=couan+"px"
  
    
  }
  
  }
  
   
  let P=setInterval(TiempoProgreso,1000)
   
  
  }