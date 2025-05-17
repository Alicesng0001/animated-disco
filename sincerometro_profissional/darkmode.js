const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Alterna ícone do botão
  if(document.body.classList.contains("dark")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
  }
});
// Alterna entre os modos ao carregar a página