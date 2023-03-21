
import { TAnimacionProgreso } from "./AnimationProgreso.js"
 export function ErroresYCorrecto(){
  
  const D=document
    let respuesaDeUsuarioBien=[]
    let respuesaDeUsuarioIncorrectas=[]
    const liuno=D.querySelector(".liuno")
    const lidos=D.querySelector(".lidos")
    const litres=D.querySelector(".litres")
    const licuatro=D.querySelector(".licuatro")
    
    
    
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



















}