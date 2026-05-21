// Reservation form validation (vanilla JS)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  const dateInput = form.querySelector('[name="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  const showError = (name, msg) => {
    const el = form.querySelector(`[data-error="${name}"]`);
    if (el) el.textContent = msg || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;

    ['name','email','phone','date','time','guests'].forEach(f => showError(f, ''));

    if (!data.name || data.name.trim().length < 2) { showError('name', 'Please enter your name.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) { showError('email', 'Enter a valid email address.'); valid = false; }
    if (!data.phone || data.phone.replace(/\D/g,'').length < 7) { showError('phone', 'Enter a valid phone number.'); valid = false; }
    if (!data.date) { showError('date', 'Pick a date.'); valid = false; }
    if (!data.time) { showError('time', 'Pick a time.'); valid = false; }
    const g = parseInt(data.guests, 10);
    if (!g || g < 1 || g > 20) { showError('guests', 'Choose 1–20 guests.'); valid = false; }

    if (!valid) return;

    document.getElementById('reservation-success').classList.add('show');
    form.reset();
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
    setTimeout(() => document.getElementById('reservation-success').scrollIntoView({behavior:'smooth', block:'center'}), 100);
  });
});
