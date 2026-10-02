/* =========================================================
   G2 - JAVASCRIPT
========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

function showError(input, errorElement, message) {
  const group = input.closest('.form-group');

  if (group) {
    group.classList.add('invalid');
  }

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearError(input, errorElement) {
  const group = input.closest('.form-group');

  if (group) {
    group.classList.remove('invalid');
  }

  if (errorElement) {
    errorElement.textContent = '';
  }
}

const regionSelect = getElement('regiao');
const regionDescription = getElement('region-description');

if (regionSelect && regionDescription) {
  regionSelect.addEventListener('change', function () {
    const region = regionSelect.value;

    if (region === 'Brasil') {
      regionDescription.textContent = 'Principais notícias do Brasil';
    } else {
      regionDescription.textContent = `Principais notícias da região ${region}`;
    }
  });
}

const loginForm = getElement('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = getElement('login-email');
    const password = getElement('login-password');
    const emailError = getElement('login-email-error');
    const passwordError = getElement('login-password-error');

    let valid = true;

    clearError(email, emailError);
    clearError(password, passwordError);

    if (!email.value.trim()) {
      showError(email, emailError, 'Informe seu e-mail.');
      valid = false;
    } else if (!email.checkValidity()) {
      showError(email, emailError, 'Digite um e-mail válido.');
      valid = false;
    }

    if (!password.value) {
      showError(password, passwordError, 'Informe sua senha.');
      valid = false;
    } else if (password.value.length < 6) {
      showError(password, passwordError, 'A senha deve possuir pelo menos 6 caracteres.');
      valid = false;
    }

    if (!valid) return;

    const adminEmail = 'arthur.macedo1323@gmail.com';
    const adminPassword = 'antartida';

    if (email.value.trim().toLowerCase() === adminEmail.toLowerCase() && password.value === adminPassword) {
      alert('Login de administrador realizado com sucesso!');
      window.location.href = 'cms-admin.html';
      return;
    }

    alert('Login validado com sucesso!');
  });
}

const registerForm = getElement('register-form');

if (registerForm) {
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = getElement('register-name');
    const email = getElement('register-email');
    const region = getElement('register-region');
    const password = getElement('register-password');
    const confirmPassword = getElement('register-confirm-password');
    const terms = getElement('register-terms');

    const nameError = getElement('register-name-error');
    const emailError = getElement('register-email-error');
    const regionError = getElement('register-region-error');
    const passwordError = getElement('register-password-error');
    const confirmPasswordError = getElement('register-confirm-password-error');

    let valid = true;

    clearError(name, nameError);
    clearError(email, emailError);
    clearError(region, regionError);
    clearError(password, passwordError);
    clearError(confirmPassword, confirmPasswordError);

    if (name.value.trim().length < 3) {
      showError(name, nameError, 'Digite seu nome completo.');
      valid = false;
    }

    if (!email.value.trim()) {
      showError(email, emailError, 'Informe seu e-mail.');
      valid = false;
    } else if (!email.checkValidity()) {
      showError(email, emailError, 'Digite um e-mail válido.');
      valid = false;
    }

    if (!region.value) {
      showError(region, regionError, 'Selecione sua região.');
      valid = false;
    }

    if (password.value.length < 6) {
      showError(password, passwordError, 'A senha precisa ter pelo menos 6 caracteres.');
      valid = false;
    }

    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, confirmPasswordError, 'As senhas não são iguais.');
      valid = false;
    }

    if (!terms.checked) {
      alert('Você precisa aceitar os termos de uso.');
      valid = false;
    }

    if (!valid) return;

    alert('Cadastro realizado com sucesso!');
    registerForm.reset();
  });
}

const adminButtons = document.querySelectorAll('.admin-nav-button');
const adminSections = document.querySelectorAll('.admin-section');

if (adminButtons.length > 0 && adminSections.length > 0) {
  adminButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const target = button.dataset.adminSection;

      adminButtons.forEach(function (item) {
        item.classList.remove('active');
      });

      button.classList.add('active');

      adminSections.forEach(function (section) {
        section.classList.remove('active');
      });

      const selected = getElement(`admin-${target}`);
      if (selected) {
        selected.classList.add('active');
      }
    });
  });
}

const articleForm = getElement('article-form');

if (articleForm) {
  articleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = getElement('article-title');
    const category = getElement('article-category');
    const regionInput = getElement('article-region');
    const description = getElement('article-description');
    const content = getElement('article-content');

    if (!title.value.trim()) {
      alert('Digite o título da matéria.');
      title.focus();
      return;
    }

    if (!category.value) {
      alert('Selecione uma categoria.');
      category.focus();
      return;
    }

    if (!regionInput.value) {
      alert('Selecione uma região.');
      regionInput.focus();
      return;
    }

    if (!description.value.trim()) {
      alert('Digite a descrição da matéria.');
      description.focus();
      return;
    }

    if (!content.value.trim()) {
      alert('Digite o conteúdo da matéria.');
      content.focus();
      return;
    }

    alert('Matéria cadastrada com sucesso!');
    articleForm.reset();
  });
}

const settingsForm = getElement('settings-form');

if (settingsForm) {
  settingsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const siteName = getElement('site-name');

    if (!siteName.value.trim()) {
      alert('Informe o nome do portal.');
      siteName.focus();
      return;
    }

    alert('Configurações salvas com sucesso!');
  });
}

const navigationLinks = document.querySelectorAll('.nav-link');

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href');

    if (!href || href === '#') {
      event.preventDefault();

      navigationLinks.forEach(function (item) {
        item.classList.remove('active');
      });

      link.classList.add('active');
    }
  });
});
