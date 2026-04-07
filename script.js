<script>
  const gallery = document.querySelector('.inspirasjon-gallery');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');

  if (rightBtn && gallery) {
    rightBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: 420, behavior: 'smooth' });
    });
  }

  if (leftBtn && gallery) {
    leftBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: -420, behavior: 'smooth' });
    });
  }

  function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-product-image");
    if (!mainImage) return;

    mainImage.src = thumbnail.src;

    document.querySelectorAll(".thumbnail").forEach(img => {
      img.classList.remove("active");
    });

    thumbnail.classList.add("active");
  }
</script>