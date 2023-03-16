const D=document
const consultaTrivia={
  conocimientoGeneralMultiple:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
 arte_Multiple:"https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple",
 cine_multiple:"https://opentdb.com/api.php?amount=10&category=11&type=multiple",
 musiaca_multiple:"https://opentdb.com/api.php?amount=10&category=12&type=multiple",
 deporte_Pregunata_directa:"https://opentdb.com/api.php?amount=10&category=12&type=multiple",
 Video_juego_Pregunata_cerrada:"https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean"
}
const url='https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'



  

const Pregunta =document.querySelector(".PreguntaDetrivia")
const Next= D.querySelector(".flechaDerec")
const Ul=D.querySelector("ul")
const liuno=D.querySelector(".liuno")
const lidos=D.querySelector(".lidos")
const litres=D.querySelector(".litres")
const licuatro=D.querySelector(".licuatro")
const Progreso=D.querySelector(".Progreso")
const salir =D.querySelector(".salir")
const prev=D.querySelector(".flechaIzq")





const consulta= ()=>{
    fetch(url)
.then((respuesta)=>respuesta.json())
.then((res)=>{
  
  let respuestaDelaTrivia=res.results
  respuestaDelaTrivia.forEach(element => {
    respuesta.push(element)
    console.log(respuestaDelaTrivia);
    
  });
  let resTrivi=localStorage.setItem("respuesta",JSON.stringify(respuesta))
    let consultaDeTrivia = localStorage.getItem('respuesta');
    console.log(consultaDeTrivia);

  alert("Empezemos")
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

  consulta()

const respuesta= []; 

console.log(respuesta);
 let respuesaDeUsuarioBien=[]
 let respuesaDeUsuarioIncorrectas=[]
let triviaPregunta=[]
let triviaCorrecta=[]
console.log("va",triviaCorrecta);
 let triviaIncorrecta=[]
 console.log("ok",triviaIncorrecta);
 let post=0;
 const NextCorrecta=()=>{
  let increpos=post++
  alert(increpos)
  let RespuestaCorrecta = localStorage.getItem('respuesta1');
  let RepuestaCorrecta=JSON.parse(RespuestaCorrecta)
    console.log("este es el pregunts",RepuestaCorrecta);
                          
for (let i = 0; i < RepuestaCorrecta.length; i++) {
 if (i===increpos) {
 let P= RepuestaCorrecta[i]
  liuno.innerHTML=`${P}`
 }else if (increpos===i){
alert("Termino el cuestinario")
 }
  
}
 

  
  
}
NextCorrecta()

Next.addEventListener("click",nextPre)
let pos=1
function nextPre() {
  let increpos=pos++
  alert(increpos)
  let consultaPregunata0 = localStorage.getItem('pregunataDeTrivia');
  let parseConsultaDeTrivia=JSON.parse(consultaPregunata0)
    console.log("este es el pregunts",parseConsultaDeTrivia);
for (let i = 0; i < parseConsultaDeTrivia.length; i++) {
 if (i===increpos) {
 let P= parseConsultaDeTrivia[i]
  Pregunta.innerHTML=`${P}`
 }else if (increpos===i){
alert("Termino el cuestinario")
 }
}


}



 prev.addEventListener("click",prevX)

function prevX() {
 
  let increpos=post-1
  alert(increpos)
  let RespuestaCorrecta1 = localStorage.getItem('respuesta1');
  let RespuestaCorrecta=JSON.parse(RespuestaCorrecta1)
    console.log("este es el pregunts",RespuestaCorrecta);
                          
for (let i = 9; i <= RespuestaCorrecta.length; i--) {
 if (i===increpos) {
 let R= RespuestaCorrecta[i]
 liuno.innerHTML=`${R}`
 }else if (increpos===i){
alert("Termino el cuestinario")
 }
  
}}







 console.log(pos);
 const PainPregunta=(respuesta)=>{
  
let data=respuesta
 
  for (let i = 0; i < data.length; i++) {
   triviaPregunta.push(data[i].question)
  
  }
  let resTrivi=localStorage.setItem("pregunataDeTrivia",JSON.stringify(triviaPregunta))
    let consultaPregunata = localStorage.getItem('pregunataDeTrivia');
    
    
  
  let parseConsultaDeTrivia=JSON.parse(consultaPregunata)
    console.log("este es el pregunts",parseConsultaDeTrivia);
    let P1=parseConsultaDeTrivia[0]
 

 Pregunta.innerHTML=`${P1}`
 
  Next.addEventListener("click",PintarIncorreta)
 Next.addEventListener("click",NextCorrecta)
 
}

 
 


const PainPregunataCorrecta =(respuesta)=>{
  let Correcta=respuesta
  for (let i = 0; i < Correcta.length; i++) {
    triviaCorrecta.push(Correcta[i].correct_answer)
   }
  console.log("este es el correcto",triviaCorrecta);
  let resTrivi=localStorage.setItem("respuesta1",JSON.stringify(triviaCorrecta))
  let consultaDeTrivia = localStorage.getItem('respuesta1');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
  console.log("vamos",parseConsultaDeTrivia[0]);
  console.log(consultaDeTrivia[0]);
 
  
 }
  

   const PainIncorrecta= (respuesta)=>{

    let incorrecta=respuesta
    console.log("que esta pasado",respuesta[0].incorrect_answers);
  for (let i = 0; i < respuesta.length; i++) {
    triviaIncorrecta.push( incorrecta[i].incorrect_answers )
   }

  let resTrivi=localStorage.setItem("Incorrecta",JSON.stringify(triviaIncorrecta))
  let consultaDeTrivia = localStorage.getItem('Incorrecta');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  

  
  
}

let IncorrectaPosicion=0
function PintarIncorreta(){

  let Posicion=IncorrectaPosicion++
  let resTrivi=localStorage.setItem("Incorrecta",JSON.stringify(triviaIncorrecta))
  let consultaDeTrivia = localStorage.getItem('Incorrecta');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
//Logica de respuesta inocrreta

for (let index = 0; index < parseConsultaDeTrivia.length; index++) {
  const element = parseConsultaDeTrivia[pos];
  if (index===Posicion) {
    console.log(element);
     const [Incorrecta1,Incorrecta2,Incorrecta3]=element
     lidos.innerHTML=Incorrecta1
     litres.innerHTML=Incorrecta2
     licuatro.innerHTML=Incorrecta3

  }
}
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

 function obtenerValorDeRespuestauno() {
  TAnimacionProgreso()
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
const correcta=()=>{
  let consultaDeTrivia = localStorage.getItem('respuesta1');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
  console.log("vamos",parseConsultaDeTrivia[0]);
  console.log(consultaDeTrivia[0]);
  let pre=consultaDeTrivia[0]
  let Li=licuatro.innerHTML=`<i class="bi bi-circle-fill"></i>  ${pre}`
 
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
  if (couan>=400) {
    couan=0
    couan+=10

  console.log(couan);
  Progreso.style.width=couan+"px"
  }else if(couan===0){
    nextPre()
  }
  
}else{
  couan+=10
  console.log(couan);
  Progreso.style.width=couan+"px"

  
}

}

 
let P=setInterval(TiempoProgreso,1000)
 

}
