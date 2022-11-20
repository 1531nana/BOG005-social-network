/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { validateUserAndPass } from '../auth/authentication.js';
import { onNavigate } from '../main.js';

export const login = () => {
  const loginContainer = document.createElement('div');
  const loginTemplate = `
  <div id="mainLogin">
  <header>
  <img src="./resources/logoLoveat.png" alt="Logo LovEat">
  </header>
  <div id="backgroundVideo">    
    <video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
  </div>
    <section id="sectionLogIn" class="sectionLogIn">
      <p id="LogInP">INICIAR SESIÓN</p>
      <input  type="text" id="emailUser" placeholder="Correo electrónico">
      <input type="password" id="passWordUser" placeholder="Contraseña">
      <button id="logginButton">ENTRAR</button>
      <section id="separator">
       <hr class="lineRight">
       <p id="letter">o</p>
       <hr class="lineLeft">
      </section>
     <div id="sigInMobile">
     <p>¿No tienes una cuenta?</p>
     <button id="linkRegister">¡Regístrate!</button>
     </div>
  </section>
 
  </div>
`;
  loginContainer.innerHTML = loginTemplate;

  loginContainer
    .querySelector('#logginButton')
    .addEventListener('click', () => {
      validateUserAndPass(
        loginContainer.querySelector('#emailUser').value,
        loginContainer.querySelector('#passWordUser').value,
      )
        .then(() => {
          window.location.pathname = '/feed';
        })
        .catch((error) => {
          alert(error.message);
        });
    });

  loginContainer
    .querySelector('#linkRegister')
    .addEventListener('click', () => {
      onNavigate('/register');
      window.location.hash = '';
      if (window.location.hash === '') {
        history.replaceState({}, '', '/register');
      }
    });

  return loginContainer;
};
