// Ficheiro: docs/assets/javascripts/extra.js

document.addEventListener("DOMContentLoaded", function() {
  // Encontra o elemento 'span' que criámos no copyright
  var yearSpan = document.getElementById("current-year");

  // Se o elemento existir, insere o ano atual lá dentro
  if (yearSpan) {
    yearSpan.innerHTML = new Date().getFullYear();
  }
});