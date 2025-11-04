function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile-img")

 if (html.classList.contains("light")) {
    // substitui pela imagem do modo claro
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    // imagem padrão
    img.setAttribute("src", "assets/avatar.png")
  }
}