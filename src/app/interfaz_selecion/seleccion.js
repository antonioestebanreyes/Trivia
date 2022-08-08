const D=document
const contenedorP=D.querySelector("#contenedor")
const pop=D.querySelector("#poper");
const musica_categoria= D.querySelector('.musicaCategoria')
const video_juego_categoria=D.querySelector('.videoJuegoCategoria')
const Arte_categoria=D.querySelector('.ArteCategoria')
const SeleccionDeCategoria=D.querySelector('.SeleccionDeCategoria')
const elige=D.querySelector('#Elige')
const CineCategoria=D.querySelector('.CineCategoria')
const ConomientoGeneralCategoria=D.querySelector('.ConomientoGeneralCategoria')
const DeporteCategoria=D.querySelector('.DeporteCategoria')
const starAtributo= musica_categoria.getAttribute("class");
musica_categoria.addEventListener('click',musica)
 video_juego_categoria.addEventListener('click',video)
 Arte_categoria.addEventListener('click',Arte)
 CineCategoria.addEventListener('click',Cine)
 DeporteCategoria.addEventListener('click',Deporte)
ConomientoGeneralCategoria.addEventListener('click',conocimiento)   
function conocimiento() {
    elige.innerHTML=" Star"
    ConomientoGeneralCategoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
    const starAtributo=ConomientoGeneralCategoria.getAttribute("class")
    if (  starAtributo=="ConomientoGeneralCategoria star") {
        console.log("si tiene la class");
        musica_categoria.removeEventListener('click',musica)
        Arte_categoria.removeEventListener('click',Arte)
        CineCategoria.removeEventListener('click',Cine)
        DeporteCategoria.removeEventListener('click',Deporte)
        video_juego_categoria.removeEventListener('click',video)
  
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          video_juego_categoria.removeEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
      }
      PoperMein()
}
function musica() {
    elige.innerHTML=" Star"
    musica_categoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
const starAtributo=musica_categoria.getAttribute("class")
   
    if (  starAtributo=="musicaCategoria star") {
        console.log("si tiene la class");
        video_juego_categoria.removeEventListener('click',video)
        Arte_categoria.removeEventListener('click',Arte)
        CineCategoria.removeEventListener('click',Cine)
        DeporteCategoria.removeEventListener('click',Deporte)
        ConomientoGeneralCategoria.removeEventListener('click',conocimiento) 
  
      } else {
          console.log("no tiene la class");
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
      }
      PoperMein()
}
function video() {
    elige.innerHTML=" Star"
    video_juego_categoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
    const starAtributo=video_juego_categoria.getAttribute("class")
    if (  starAtributo=="videoJuegoCategoria star") {
      console.log("si tiene la class");
      musica_categoria.removeEventListener('click',musica)
      Arte_categoria.removeEventListener('click',Arte)
      CineCategoria.removeEventListener('click',Cine)
      DeporteCategoria.removeEventListener('click',Deporte)
      ConomientoGeneralCategoria.removeEventListener('click',conocimiento) 

    } else {
        console.log("no tiene la class");
        musica_categoria.addEventListener('click',musica)
        Arte_categoria.addEventListener('click',Arte)
        CineCategoria.addEventListener('click',Cine)
        DeporteCategoria.addEventListener('click',Deporte)
        ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
        elige.innerHTML="ELIGE TU CATEGORIA"
    }
    PoperMein()
}
function Arte() {
    elige.innerHTML=" Star"
    Arte_categoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
    const starAtributo=Arte_categoria.getAttribute("class")
    if (  starAtributo=="ArteCategoria star") {
        console.log("si tiene la class");
        musica_categoria.removeEventListener('click',musica)
        CineCategoria.removeEventListener('click',Cine)
        DeporteCategoria.removeEventListener('click',Deporte)
        ConomientoGeneralCategoria.removeEventListener('click',conocimiento) 
        video_juego_categoria.removeEventListener('click',video)
  
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
      }
      PoperMein()
}

function Cine() {
    elige.innerHTML=" Star"
    CineCategoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
    const starAtributo=CineCategoria.getAttribute("class")
    if (  starAtributo=="CineCategoria star") {
        console.log("si tiene la class");
        musica_categoria.removeEventListener('click',musica)
        DeporteCategoria.removeEventListener('click',Deporte)
        ConomientoGeneralCategoria.removeEventListener('click',conocimiento) 
        video_juego_categoria.removeEventListener('click',video)
        Arte_categoria.removeEventListener('click',Arte)
  
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          Arte_categoria.addEventListener('click',Arte)
          elige.innerHTML="ELIGE TU CATEGORIA"
      }
    
      PoperMein()
}
function Deporte() {
    elige.innerHTML=" Star"
    DeporteCategoria.classList.toggle('star')
    SeleccionDeCategoria.classList.toggle('star')
    const starAtributo= DeporteCategoria.getAttribute("class")
    if (  starAtributo=="DeporteCategoria star") {
        console.log("si tiene la class");
        musica_categoria.removeEventListener('click',musica)
        Arte_categoria.removeEventListener('click',Arte)
        CineCategoria.removeEventListener('click',Cine)
        ConomientoGeneralCategoria.removeEventListener('click',conocimiento) 
        video_juego_categoria.removeEventListener('click',video)
  
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
      }
      PoperMein()
}
const PoperMein=()=>{
    SeleccionDeCategoria.addEventListener("click",poper)
function poper() {
  
   const contenedor= document.createElement("div")
  const header=  document.createElement("div")
  const p=document.createElement("p")
   p.innerHTML="Selecciona el tipo de  cuestionario"
   header.classList.add("header")
   header.appendChild(p)
   const body=document.createElement("div")
   const ContenedorAppendchild= pop.appendChild(contenedor)
   const headerAppendchild=contenedor.appendChild(header)
   const bodyAppendchild=contenedor.appendChild(body)
  contenedorP.classList.add("EligirLaCategoria")
 contenedor.classList.add("EligeContenedor")
const select = document.createElement("select");
 const option1 = document.createElement("option");
option1.setAttribute("value", "Pregunata directa");
    const option1Texto = document.createTextNode("Pregunata directa");
    option1.appendChild(option1Texto);
    const option2 = document.createElement("option");
    option2.setAttribute("value", "multiple");
    const option2Texto = document.createTextNode("Opcion multiple");
    option2.appendChild(option2Texto);
     select.appendChild(option1);
    select.appendChild(option2);
    body.appendChild(select);
    select.classList.add("input")
    const footer=document.createElement("div")
    contenedor.appendChild(footer)
    const cerrar=document.createElement("button")
    const acectar=document.createElement("button")
    footer.appendChild(cerrar)
    footer.appendChild(acectar)
    cerrar.innerHTML="cerrar"
    acectar.innerHTML="acectar"
    footer.classList.add("footerPoper")   
    cerrar.addEventListener("click",cierrar)
    function cierrar() {
        contenedor.style.display="none"
    }
}
}

