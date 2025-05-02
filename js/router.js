function loadPage(page) {
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      document.getElementById("content").innerHTML =
        "<p>Errore nel caricamento della pagina.</p>";
    });

  // NON cambiamo la musica.
  // Se vuoi puoi gestire ancora iframe (se esiste), ad esempio:
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.display = page === "home" ? "block" : "none";
  }
}

// Navigazione
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("href").replace("#", "");
      loadPage(page);
    });
  });

  loadPage("home");
});
