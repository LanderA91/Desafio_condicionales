
const password1 = "911";
const password2 = "714";
const formulario1 = document.querySelector("#form1");
const formulario2 = document.querySelector("#form2");
const formulario3 = document.querySelector("#form3");
const enter = document.querySelector("#enterPass");
const contrasenaC = document.querySelector("#contrasenaC");

enterPass.addEventListener("click", () => {
  const passwordEntered = form1.value + form2.value + form3.value;
  if (passwordEntered === password1) {
    contrasenaC.textContent = "Acceso concedido";
  } else if (passwordEntered === password2) {
    contrasenaC.textContent = "Acceso concedido";
  } else {
    contrasenaC.textContent = "Contraseña incorrecta";
  }
});