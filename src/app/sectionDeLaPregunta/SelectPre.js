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






    fetch(Consulta)
.then((respuesta)=>respuesta.json())
.then((res)=>{
  let respuesta=res
 trivia.push(respuesta)
console.log(res,'esta la respueat que viene promesa');
 PainPregunta(trivia)
} )

   .catch((erro)=>{
  throw erro
})
 
 const trivia=[]
 const triviaPregunta=[]
 const triviaCorrecta=[]
 const triviaIncorrecta=[]
 console.log(triviaPregunta);
  let data=trivia
console.log(trivia);
 const PainPregunta= (res)=>{
  const data=res[0].results
for (let i = 0; i < data.length; i++) {
   triviaPregunta.push(data[i].question)
  console.log(triviaPregunta);
  }
  let resTrivi= localStorage.setItem("pregunataDeTrivia",JSON.stringify(triviaPregunta))
    let consultaPregunata = localStorage.getItem('pregunataDeTrivia');
    
    
  
  let  parseConsultaDeTrivia= JSON.parse(consultaPregunata)
    console.log("este es el pregunts",parseConsultaDeTrivia);
    let P1=parseConsultaDeTrivia[0]
 

 Pregunta.innerHTML=`${P1}`

 
 
 
 PainRespuestaCorrecta(res)
 PainIncorrecta(res)
 PintarIncorreta()
}



const PainRespuestaCorrecta =(respuesta)=>{
  
    let Correcta=respuesta[0].results
    for (let i = 0; i < Correcta.length; i++) {
      triviaCorrecta.push(Correcta[i].correct_answer)
     }
    console.log("este es el correcto",triviaCorrecta);
    let resTrivi=localStorage.setItem("Correcta",JSON.stringify(triviaCorrecta))
    let consultaDeTrivia = localStorage.getItem('Correcta');
    let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
   
    
    console.log("vamos",parseConsultaDeTrivia[0]);
    console.log(consultaDeTrivia[0]);
   
    
   }


   export const PainIncorrecta= (respuesta)=>{
    let incorrecta=respuesta[0].results
   console.log("que esta pasado",incorrecta.incorrect_answers);
  for (let i = 0; i < incorrecta.length; i++) {
    triviaIncorrecta.push( incorrecta[i].incorrect_answers )
    console.log(incorrecta[i].incorrect_answers );
   }

  let resTrivi=localStorage.setItem("Incorrecta",JSON.stringify(triviaIncorrecta))
  let consultaDeTrivia = localStorage.getItem('Incorrecta');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  

  
  
}




   export let post=0;
const NextCorrecta=()=>{
  let increpos=post++
  
   let RespuestaCorrecta = localStorage.getItem('Correcta');
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
  PintarIncorreta()
  NextCorrecta()
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

salir.addEventListener("click",function () {
  let Close=prompt("desas salir de la trivia de pregunata")
let M= Close.toLowerCase()
  console.log(M );
 if(Close=='si' ){
alert("Salido de la trivia")
location.href="http://127.0.0.1:5500/Home/index.html";
 }else{
  alert('Desea continuar ')
 }
})
      
 TAnimacionProgreso()
 ErroresYCorrecto()



 