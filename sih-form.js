const interestForm = document.querySelector('#sih-interest-form');
const formStatus = document.querySelector('#sih-form-status');

interestForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(interestForm);
  const subject = `SIH interest from ${formData.get('name')}`;
  const body = [
    `Name: ${formData.get('name')}`,
    `Gmail: ${formData.get('email')}`,
    `Phone: ${formData.get('phone')}`,
    `Branch: ${formData.get('branch')}`,
    `Year: ${formData.get('year')}`,
    '',
    'Idea:',
    formData.get('idea')
  ].join('\n');

  formStatus.textContent = 'Opening your email app...';
  window.location.href = `mailto:harisandhusingh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
