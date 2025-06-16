document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.trybewarts-login');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
});
