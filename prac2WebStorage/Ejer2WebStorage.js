onload=function(){
  var formulario = document.forms[0];
  formulario.onsubmit = function(){
if(window.sessionStorage!=undefined){
  localStorage.nombre=nombre.value;
  localStorage.apellidos=apellidos.value;
  sessionStorage.color=color.value;
  if(H.checked){
    localStorage.sexo="H";
  }else if(M.checked){
    localStorage.sexo="M";
  }
  sessionStorage.poblacion=poblacion.value;
  if(selector.value=="C"){
    sessionStorage.selector="Castellon";
  }else if(selector.value=="V"){
    sessionStorage.selector="Valencia";
  }else if(selector.value=="A"){
    sessionStorage.selector="Alicante";
  }

  if(foro.checked==true){
    formulario.action="foro.html";
  }else if(eventos.checked==true){
    formulario.action="eventos.html"
  }
}
  }
}
