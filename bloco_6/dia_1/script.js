const estado = document.getElementById("estado");
const checkDate = document.querySelector('.check-date');
const startDate = document.getElementById('start-date');
const btnSubmit = document.getElementById('submit');

const estados = [
  "AC - Acre",
  "AL - Alagoas",
  "AP - Amapá",
  "AM - Amazonas",
  "BA - Bahia",
  "CE - Ceará",
  "DF - Distrito Federal",
  "ES - Espírito Santo",
  "GO - Goías",
  "MA - Maranhão",
  "MT - Mato Grosso",
  "MS - Mato Grosso do Sul",
  "MG - Minas Gerais",
  "PA - Pará",
  "PB - Paraíba",
  "PR - Paraná",
  "PE - Pernambuco",
  "PI - Piauí",
  "RJ - Rio de Janeiro",
  "RN - Rio Grande do Norte",
  "RS - Rio Grande do Sul",
  "RO - Rondônia",
  "RR - Roraíma",
  "SC - Santa Catarina",
  "SP - São Paulo",
  "SE - Sergipe",
  "TO - Tocantins",
];

for (let i = 0; i < estados.length; i += 1) {
  let option = document.createElement('option');
  option.innerHTML = estados[i];
  estado.appendChild(option);
}

function validateDay(date) {
  if (date[0] < 0 || date[0] > 31) {
    checkDate.innerHTML = 'Dia inválido';
  }
}

function validateMonth(date) {
  if (date[1] < 0 || date[1] > 12) {
    checkDate.innerHTML = 'Mês inválido';
  }
}

function validateYear(date) {
  if (date[2] < 0) {
    checkDate.innerHTML = 'Ano inválido';
  }
}

startDate.addEventListener('keyup', () => {
  let date = startDate.value.split('/');
  validateDay(date);
  validateMonth(date);
  validateYear(date);
});

function required() {
  const inputText = document.querySelectorAll('input[type=text]');
  for (let i = 0; i < inputText.length; i += 1) {
    inputText[i].setAttribute('required', '');
  }
}

const preventDef = function (event) {
  event.preventDefault();
}

btnSubmit.addEventListener('click', () => {
  preventDef;
  required();
})
