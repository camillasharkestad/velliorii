fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.innerHTML = data;
    }
  })
  .catch((error) => {
    console.error("Kunne ikke laste footer:", error);
  });
  