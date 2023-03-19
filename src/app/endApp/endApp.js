const RespuestaCorrecta=document.querySelector(".RespuestaError1")
const CorrectaTotal=document.querySelector(".correcto")
const R=localStorage.getItem("correcta")
let parse=JSON.parse(R)
console.log(parse.length)
RespuestaCorrecta.innerHTML=parse[0]
CorrectaTotal.innerHTML="<h1>parse.length</h1>"
