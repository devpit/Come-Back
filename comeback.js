let docTitle = document.title;

  window.addEventListener("blur", () =>{
    document.title = "Hei! Volte aqui...";
  })

  window.addEventListener("focus", () =>{
    document.title = docTitle;
  })
