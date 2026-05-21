// Lightbox for gallery
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').getAttribute('src');
      const alt = item.querySelector('img').getAttribute('alt') || '';
      lbImg.src = src; lbImg.alt = alt;
      lightbox.classList.add('open');
    });
  });

  const close = () => { lightbox.classList.remove('open'); lbImg.src = ''; };
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
});
