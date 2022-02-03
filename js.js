const inputColor=document.getElementById("inputColor")
const btnVisualizar=document.getElementById("btnVisualizar")
const codigo=document.getElementById("codigo")
const cajaColor=document.getElementById("cajaColor")




btnVisualizar.addEventListener("click", function() {
    codigo.textContent=inputColor.value;
    cajaColor.style.backgroundColor=inputColor.value;
  });