const D=document
const url='https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'
const Pregunta =document.querySelector(".PreguntaDetrivia")
const Next= D.querySelector(".flechaIzq","#fleIz")
const Ul=D.querySelector("ul")
const liuno=D.querySelector(".liuno")
const lidos=D.querySelector(".lidos")
const litres=D.querySelector(".litres")
const licuatro=D.querySelector(".licuatro")
const Progreso=D.querySelector(".Progreso")


const consulta= ()=>{
    fetch(url)
.then((respuesta)=>respuesta.json())
.then((res)=>{
  
  let R=res.results
  R.forEach(element => {
    respuesta.push(element)
  });
  alert("listo")
  TAnimacionProgreso()
  PainPregunta(respuesta)
  PainPregunataCorrecta (respuesta)
  PainIncorrecta (respuesta)
  siguiente(triviaPregunta)
 

 
})
.catch((erro)=>{
 console.log("no cargo bien la pagina",erro)
}
)
 }


const respuesta= [];
console.log(respuesta);
 let respuesaDeUsuarioBien=[]
 let respuesaDeUsuarioIncorrectas=[]
let triviaPregunta=[]
let triviaCorrecta=[]
 let triviaIncorrecta=[]
 
 consulta()


 const PainPregunta=(respuesta)=>{
let data=respuesta
 
  for (let i = 0; i < data.length; i++) {
   triviaPregunta.push(data[i].question)
  
  }
 console.log("este es el pregunts",triviaPregunta);
 
}

const PainPregunataCorrecta =(respuesta)=>{
  let Correcta=respuesta
  for (let i = 0; i < Correcta.length; i++) {
    triviaCorrecta.push(Correcta[i].correct_answer)
   }
  console.log("este es el correcto",triviaCorrecta);
  siguientePain(triviaPregunta)
  
 }
 

   const PainIncorrecta= (respuesta)=>{
    let Incorrecta = respuesta
    for (let i = 0; i < Incorrecta.length; i++) {
      triviaIncorrecta.push(Incorrecta[i].incorrect_answers)
    
     }
    console.log("este es el incorrecto",triviaIncorrecta); 
    Incorrctea(triviaIncorrecta)
   
      
      }



Next.addEventListener("click",siguiente)
let posicion=-0;
console.log(posicion);
 function siguiente(triviaPregunta) {
  let TRI=triviaPregunta
  
}
const siguientePain= (LocalPregunta)=> {
 const [P1,P2,P3,P4,P5,P6,P7,P8,P9,P10]=triviaPregunta

   Pregunta.innerHTML=P1

} 

 const Incorrctea=(LocalRespuestaIncorrecta) =>{
  const [I1,I2,I3,I4,I5,I6,I7,I8,I9,I10]=LocalRespuestaIncorrecta
  console.log(I1);
  const [E1,E2,E3]=I1
  liuno.innerHTML=`<i class="bi bi-circle-fill"></i>  ${E1}`
  lidos.innerHTML=`<i class="bi bi-circle-fill"></i>  ${E2}`
  litres.innerHTML=`<i class="bi bi-circle-fill"></i>  ${E3}`
  console.log("este Incorrecta",element);



} 
let lista1=liuno.setAttribute("value","false1")
let lista2=lidos.setAttribute("value","false2")
 let lista3= litres.setAttribute("value","false3")
 let lista4= licuatro.setAttribute("value","true1")
  let valor1= liuno.getAttribute("value");
  let valor2= liuno.getAttribute("value");
  let valor3= liuno.getAttribute("value");
  let valor4= licuatro.getAttribute("value");

liuno.addEventListener("click",obtenerValorDeRespuestauno)
lidos.addEventListener("click",obtenerValorDeRespuestados)
litres.addEventListener("click",obtenerValorDeRespuestatres)
licuatro.addEventListener("click",licorrecta)
const consultaR= ()=>{
  fetch(url)
.then((respuesta)=>respuesta.json())
.then((res)=>{

let R=res.results
R.forEach(element => {
  respuesta.push(element)
});
//Loader
TAnimacionProgreso()
PainPregunta(respuesta)
PainPregunataCorrecta (respuesta)
PainIncorrecta (respuesta)
siguiente(triviaPregunta)



})
.catch((erro)=>{
console.log("no cargo bien la pagina",erro)
}
)
}
 function obtenerValorDeRespuestauno() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor1):respuesaDeUsuarioIncorrectas.push(null)
console.log(respuesaDeUsuarioIncorrectas);




}
function obtenerValorDeRespuestados() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor2):respuesaDeUsuarioIncorrectas.push(null)
  console.log(respuesaDeUsuarioIncorrectas);
  localStorage.setItem("incorrecta", JSON.stringify(respuesaDeUsuarioIncorrectas));
  const incorrectoEvalucion=JSON.parse(localStorage.getItem("incorrecta"))
  console.log(incorrectoEvalucion);
  contadorDeTrivia()
}
function obtenerValorDeRespuestatres() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor3):respuesaDeUsuarioIncorrectas.push(null)
  console.log(respuesaDeUsuarioIncorrectas);
  
}
function licorrecta() {
  "true1"==valor4?respuesaDeUsuarioBien.push(valor4):respuesaDeUsuarioBien.push(null)
  localStorage.setItem("correcta", JSON.stringify(respuesaDeUsuarioBien));
  const correctoEvalucion=JSON.parse(localStorage.getItem("correcta"))
  console.log(correctoEvalucion);
console.log(respuesaDeUsuarioBien)
}
const correcta=(LocalRespuestaCorrecta)=>{
  const [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10]=triviaIncorrecta
  let Li=licuatro.innerHTML=`<i class="bi bi-circle-fill"></i>  ${C1}`
  console.log("esta es la longuito",respuesaDeUsuarioIncorrectas.length);
}
let coun =1;
const contadorDeTrivia=()=>{
if (coun===respuesaDeUsuarioIncorrectas.length || coun===respuesaDeUsuarioBien.length) {
  console.log("esta es la longuito",respuesaDeUsuarioIncorrectas.length);
  window.open("file:///C:/Users/javacrispt/Desktop/Trivia/src/app/endApp/endApp.html");
}

}

const TAnimacionProgreso=()=>{
  let couan=0
   
  const TiempoProgreso=()=> {
  
if (couan>=400) {
  alert("Termino el tiempo")
  clearInterval(P)
  
}else{
  couan+=10
  console.log(couan);
  Progreso.style.width=couan+"px"

  
}

}
let P=setInterval(TiempoProgreso,1000)

}
