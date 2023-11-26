let docTitle = document.title;
let docIcon = document.querySelector('link[rel="icon"]').href;

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "Hei! Volte aqui...";
    document.querySelector('link[rel="icon"]').href = "https://www.svgrepo.com/show/185493/alarm-alert.svg";
  } else {
    document.title = docTitle;
    document.querySelector('link[rel="icon"]').href = docIcon;
  }
});
