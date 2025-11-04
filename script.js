function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile-img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a classe light, troca a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não tiver a classe light, mantém a imagem original
    img.setAttribute("src", "./assets/avatar.png")
  }
}
