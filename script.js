<script>
  const gallery = document.querySelector(".inspirasjon-gallery");
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");

  if (gallery && rightBtn) {
    rightBtn.addEventListener("click", () => {
      const scrollAmount = gallery.clientWidth * 0.8;
      gallery.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }

  if (gallery && leftBtn) {
    leftBtn.addEventListener("click", () => {
      const scrollAmount = gallery.clientWidth * 0.8;
      gallery.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  }

  function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-product-image");

    if (!mainImage || !thumbnail) return;

    mainImage.src = thumbnail.src;

    document.querySelectorAll(".thumbnail").forEach((img) => {
      img.classList.remove("active");
    });

    thumbnail.classList.add("active");
  }
</script>