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

const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

checkbox.addEventListener('change', function () {
  submitBtn.disabled = !checkbox.checked;
});

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxChars = 500;

textarea.addEventListener('input', function () {
  const remaining = maxChars - textarea.value.length;
  counter.textContent = remaining;
});

document
  .getElementById('evaluation-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const house = document.getElementById('house').value;
    const family =
      document.querySelector('input[name="family"]:checked')?.value || '';
    const materias = Array.from(
      document.querySelectorAll('input.subject:checked')
    )
      .map((el) => el.value)
      .join(', ');
    const avaluation =
      document.querySelector('input[name="rate"]:checked')?.value || '';
    const observations = document.getElementById('textarea').value;

    const formDataHTML = `
    <p>Nome: ${name} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Matérias: ${materias}</p>
    <p>Avaliação: ${avaluation}</p>
    <p>Observações: ${observations}</p>
    `;

    document.getElementById('evaluation-form').style.display = 'none';
    const formDataDiv = document.getElementById('form-data');
    formDataDiv.innerHTML = formDataHTML;
    formDataDiv.style.display = 'block';
  });
