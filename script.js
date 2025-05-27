function showForm(formId) {
  document.querySelectorAll(".form").forEach(form => {
    form.classList.remove("active");
  });
  document.getElementById(`${formId}-form`).classList.add("active");

  const title = {
    login: "Login",
    register: "Registrar",
    forgot: "Recuperar Senha"
  };
  document.getElementById("form-title").innerText = title[formId];
}

let currentTheme = 'dark';

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    currentTheme = 'light';
    particlesJS.load('particles-js', 'particles-light.json');
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    currentTheme = 'dark';
    particlesJS.load('particles-js', 'particles-dark.json');
  }
}

window.addEventListener("load", () => {
  particlesJS.load('particles-js', 'particles-dark.json');
});
