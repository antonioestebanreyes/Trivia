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
    let conocimiento='conocimientoGeneralMultiple'
    let categoria='conocimientoGeneralMultiple'
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
  LocalCategoria(conocimiento,categoria)
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          video_juego_categoria.removeEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
          localStorage.removeItem('conocimientoGeneralMultiple')
      }
      PoperMein()
}

function LocalCategoria(selection,categoria) {
    localStorage.setItem(categoria,JSON.stringify(selection))
    const local_categaria=localStorage.getItem(categoria)
     console.log(typeof local_categaria);
}
function musica() {
    let musica="musiaca_multiple"
    let categoria="musiaca_multiple"
  //  local_categaria(musica)
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
      LocalCategoria(musica,categoria)
  
      } else {
          console.log("no tiene la class");
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
          localStorage.removeItem("musiaca_multiple")
      }
      PoperMein()
}
function video() {
    let video='Video_juego_Pregunata_cerrada'
    let categoria='Video_juego_Pregunata_cerrada'
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
      LocalCategoria(video,categoria)

    } else {
        console.log("no tiene la class");
        musica_categoria.addEventListener('click',musica)
        Arte_categoria.addEventListener('click',Arte)
        CineCategoria.addEventListener('click',Cine)
        DeporteCategoria.addEventListener('click',Deporte)
        ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
        elige.innerHTML="ELIGE TU CATEGORIA"
        localStorage.removeItem('Video_juego_Pregunata_cerrada')
    }
    PoperMein()
}
function Arte() {
    let Arte='arte_Multiple'
    let Categoria='arte_Multiple'
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
        LocalCategoria(Arte,Categoria)
  
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
          localStorage.removeItem('arte_Multiple')
      }
      PoperMein()
}

function Cine() {
    let cine='cine_multiple'
    let categoria='cine_multiple'
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
  LocalCategoria(cine,categoria)
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          CineCategoria.addEventListener('click',Cine)
          DeporteCategoria.addEventListener('click',Deporte)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          Arte_categoria.addEventListener('click',Arte)
          elige.innerHTML="ELIGE TU CATEGORIA"
          localStorage.removeItem('cine_multiple')
      }
    
      PoperMein()
}
function Deporte() {
    let Deporte='deporte_Pregunata_directa'
    let categoria='deporte_Pregunata_directa'
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
  LocalCategoria(Deporte,categoria)
      } else {
          console.log("no tiene la class");
          musica_categoria.addEventListener('click',musica)
          Arte_categoria.addEventListener('click',Arte)
          CineCategoria.addEventListener('click',Cine)
          ConomientoGeneralCategoria.addEventListener('click',conocimiento) 
          video_juego_categoria.addEventListener('click',video)
          elige.innerHTML="ELIGE TU CATEGORIA"
          localStorage.removeItem('deporte_Pregunata_directa')
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
    const a =document.createElement('a')
    footer.appendChild(cerrar)
    footer.appendChild(acectar)
    acectar.appendChild(a)
    acectar.addEventListener("click",function(){
       
       let UserSelect=select.value
      const SelecionUser= localStorage.setItem("selecionUser",JSON.stringify(UserSelect))
      const GetSelect=localStorage.getItem("selecionUser")
      const ParseoSelect=JSON.parse(GetSelect)
      console.log(ParseoSelect);
       // a.href="http://127.0.0.1:5500/src/app/sectionDeLaPregunta/Pregunta.html"
        
    })
    cerrar.innerHTML="cerrar"
    a.href="http://127.0.0.1:5500/src/app/sectionDeLaPregunta/Pregunta.html"
    a.innerHTML="acectar"

    footer.classList.add("footerPoper")   
    cerrar.addEventListener("click",cerra)
    function cerra() {
        contenedor.style.display="none"
        
        acectar.addEventListener('click',Acectar)
    }
    function Acectar (){
        contenedor.style.display="none"
        const CategoriaDePregunata=select.value
        console.log(select.value);
        var SelectDePregunata = localStorage.setItem("Select", JSON.stringify(CategoriaDePregunata));
//conversion de objecto a cadena de texto
console.log(localStorage.getItem("Select"));
let = JSON.parse(localStorage.getItem("Select"));
const musica=document.querySelector('.musicaCategoria')
const arte=document.querySelector('.ArteCategoria')
const cine=document.querySelector('.CineCategoria')
const videoJuego=document.querySelector('.videoJuegoCategoria')
const Deporte=document.querySelector('.DeporteCategoria')
const ConocimientoGeneral=document.querySelector('.ConomientoGeneralCategoria')
let CatageriaMusica=musica.getAttribute('class')
let CategoriaArte=arte.getAttribute('class')
let CategoriaCine=cine.getAttribute('class')
let CategoriaVideoJuego=videoJuego.getAttribute('class')
let CategoriaDeporte=Deporte.getAttribute('class')
let MusicaLocal=localStorage.setItem('MusicaLocal',JSON.stringify(CatageriaMusica))
let CatageriaMusica1=localStorage.getItem('MusicaLocal')
console.log(CatageriaMusica1);

}
}


}
 