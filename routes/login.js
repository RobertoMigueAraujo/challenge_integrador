const formulario = document.getElementById('formulario2');
const inputs = document.querySelectorAll('#formulario2 input');

const expresiones = {
  password: /^.{4,12}$/, 
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const validarCampo = (expresion, input) => {
  if (expresion.test(input.value)) {
    input.classList.remove('input-incorrecto');
    input.classList.add('input-correcto');
  } else {
    input.classList.remove('input-correcto');
    input.classList.add('input-incorrecto');
  }
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'Algo':
      validarCampo(expresiones.correo, e.target);
      break;
    case 'contraseña':
      validarCampo(expresiones.password, e.target);
      break;
    // Puedes agregar más casos para validar otros campos si es necesario
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

const enlaceLogin = document.getElementById('enlaceLogin');

const olvidarContraseña = (e) => {
  e.preventDefault();
  console.log('Olvidaste tu contraseña! ¿Qué acción deseas realizar?');
};

olvidarContraseñaLink.addEventListener('click', olvidarContraseña);

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Se ejecuta el formulario');
  // Aquí puedes agregar la lógica para enviar el formulario mediante AJAX o hacer alguna otra acción necesaria
});
