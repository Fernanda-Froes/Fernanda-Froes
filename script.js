const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const nowText = document.getElementById("nowText");
function tick(){
  const d = new Date();
  nowText.textContent = d.toLocaleString("pt-BR", { weekday:"short", hour:"2-digit", minute:"2-digit" });
}
tick();
setInterval(tick, 15000);

const toast = document.getElementById("toast");
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 900);
}

document.querySelectorAll(".chip").forEach(chip=>{
  chip.addEventListener("click", async ()=>{
    const text = chip.getAttribute("data-copy") || chip.textContent;
    try{
      await navigator.clipboard.writeText(text);
      showToast(`Copiado: ${text}`);
    }catch{
      showToast("Não deu pra copiar :(");
    }
  });
});
