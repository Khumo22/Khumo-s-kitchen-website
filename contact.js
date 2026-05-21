// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const showError = (name, msg) => {
    const el = form.querySelector(`[data-error="${name}"]`);
    if (el) el.textContent = msg || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;
    ['name','email','message'].forEach(f => showError(f, ''));

    if (!data.name || data.name.trim().length < 2) { showError('name', 'Enter your name.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) { showError('email', 'Enter a valid email.'); valid = false; }
    if (!data.message || data.message.trim().length < 10) { showError('message', 'Message must be at least 10 characters.'); valid = false; }

    if (!valid) return;
    document.getElementById('contact-success').classList.add('show');
    form.reset();
  });
});
