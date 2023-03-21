const D=document
import {consultaTrivia} from '../../services/servicesTrivia.js'
import { TAnimacionProgreso } from './AnimationProgreso.js'
import { ErroresYCorrecto } from './EroresYcorrecto.js'
const Consulta=consultaTrivia.url


const Pregunta =document.querySelector(".PreguntaDetrivia")
const Next= D.querySelector(".flechaDerec")
//const Ul=D.querySelector("ul")
const liuno=D.querySelector(".liuno")
const lidos=D.querySelector(".lidos")
const litres=D.querySelector(".litres")
const licuatro=D.querySelector(".licuatro")
const salir =D.querySelector(".salir")
const prev=D.querySelector(".flechaIzq")





const consulta= ()=>{
    fetch(Consulta)
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
let triviaPregunta=[]
let triviaCorrecta=[]
console.log("va",triviaCorrecta);
 let triviaIncorrecta=[]
 console.log("ok",triviaIncorrecta);
 let post=0;
export const NextCorrecta=()=>{
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
let pos=1
 NextCorrecta()

Next.addEventListener("click",nextPre)

export function nextPre() {
  let increpos=pos++
  alert(increpos,"pregunta")
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



 /* prev.addEventListener("click",prevX)

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

 */





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
 /* Next.addEventListener("click",NextCorrecta) */
 
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
  

   export const PainIncorrecta= (respuesta)=>{

    let incorrecta=respuesta
    console.log("que esta pasado",respuesta.incorrect_answers);
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
  let consultaDeTrivia = localStorage.getItem('Incorrecta');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
//Logica de respuesta inocrreta

for (let index = 0; index < parseConsultaDeTrivia.length; index++) {
  const element = parseConsultaDeTrivia[index];
  if (index===Posicion) {
    console.log(element);
     const [Incorrecta1,Incorrecta2,Incorrecta3]=element
     lidos.innerHTML=Incorrecta1
     litres.innerHTML=Incorrecta2
     licuatro.innerHTML=Incorrecta3

  }
}
 }

 
      
TAnimacionProgreso()
ErroresYCorrecto()



