const D=document
const liuno=D.querySelector(".liuno")
const lidos=D.querySelector(".lidos")
const litres=D.querySelector(".litres")
const licuatro=D.querySelector(".licuatro")
//import {post} from './SelectPre.js'

let post;
export const NextCorrectaOne=()=>{
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
  
} }



  
    
    
  




 
export function PintarIncorretaOne(){
 
  let Posicion=post++
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


 