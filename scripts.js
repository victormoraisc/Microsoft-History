let activeText = document.getElementById(`slide-content-1`);

function openSlide(target){
  let slide = document.getElementById(target);
  slide.classList.remove("hidden");
  resetActiveText(target);
  activeText.classList.remove("hidden");
}
function closeWindow(target){
  let slide = document.getElementById(target);
  slide.classList.add("hidden");
  activeText.classList.add("hidden");
  resetActiveText(target);
}
function resetActiveText(target)
{
  switch (target) {
    case "world":
      activeText = document.getElementById(`slide-content-1`);
      break;
    case "brazil":
      activeText = document.getElementById(`slide-content-5`);
      break;
    case "tech":
      activeText = document.getElementById(`slide-content-9`);
      break;
    case "contributions":
      activeText = document.getElementById(`slide-content-13`);
      break;
    default:
      break;
  }
  
}
function maximizeWindow(target){
  let slide = document.getElementById(target);
  slide.classList.toggle("maximized")
}
function changeText(target){
  let text = document.getElementById(`slide-content-${target}`);
  activeText.classList.add("hidden");
  activeText = text;
  text.classList.remove("hidden")
}

function atualizarHora() {
    const spanHora = document.querySelector('.time');
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const novaHora = `${horas}:${minutos}`;
    spanHora.textContent = novaHora;
  }
  
  // Chama a função inicialmente para evitar um atraso de um segundo
  atualizarHora();
  
  // Atualiza a cada segundo
  setInterval(atualizarHora, 1000);

