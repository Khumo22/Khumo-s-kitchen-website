// Menu page tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      sections.forEach(s => s.classList.toggle('active', s.id === target));
    });
  });
});
