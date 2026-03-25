<script>
  const gallery = document.querySelector('.inspirasjon-gallery');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');

  rightBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: 420, behavior: 'smooth' });
  });

  leftBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -420, behavior: 'smooth' });
  });
</script>