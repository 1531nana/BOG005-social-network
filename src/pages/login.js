import { validateUserAndPass } from '../auth/authentication.js';
import { onNavigate } from '../main.js';

export const login = () => {
  const loginContainer = document.createElement('div');
  const loginTemplate = `
  <div id="mainLogin">
  <div id="backgroundVideo">    
    <video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
  </div>
    <section id="sectionLogIn" class="sectionLogIn">
      <p id="LogInP">INICIAR SESIÓN</p>
      <input  type="text" id="emailUser" placeholder="Correo electrónico">
      <input type="password" id="passWordUser" placeholder="Contraseña">
      <button id="logginButton">ENTRAR</button>
      <hr class="lineRight">
      <p id="letter">o</p>
     <hr class="lineLeft">

     <div id="sigInMobile">
     <p>¿No tienes una cuenta?</p>
     <button id="linkRegister">¡Regístrate!</button>
     </div>
  </section>
 
  </div>
`;
  loginContainer.innerHTML = loginTemplate;

  loginContainer.querySelector('#logginButton').addEventListener('click', () => {
    validateUserAndPass(document.querySelector('#emailUser').value, document.querySelector('#passWordUser').value);
    // window.location.pathname = '/feed';
  });
  loginContainer.querySelector('#linkRegister').addEventListener('click', () => {
    // window.location.pathname = '/register';
    onNavigate('/register');
  });

  return loginContainer;
};
