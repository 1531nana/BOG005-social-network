/* eslint-disable no-alert */
import { createEmail, loginWithGoogle } from '../auth/authentication.js';

const register = () => {
  const registerContainer = document.createElement('div');
  const registerTemplate = `
  <div id="mainRegister">
    <header>
     <img src="./resources/logoLoveat.png" alt="Logo LovEat">
    </header>
    <div id="backgroundVideo">    
    <video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
    </div>
    <div class= "registerView" id="registerView">
    <h2>REGISTRO</h2>
    <input type="text" class="input registerNameUser" id="registerNameUser" placeholder="Nombre">
    <input type="text" class="input registerEmailUser" id="registerEmailUser" placeholder="Correo electrónico">
    <input type="password" class="input registerrPassWordUser" id="registerPassWordUser" placeholder="Contraseña">
    <button id="bottonRegister">REGÍSTRARSE</button>

    <section id="separator">
       <hr class="lineRight">
       <p id="letter">o</p>
       <hr class="lineLeft">
    </section>

    <div id="sectionGoogle">
    <button id="bottonGoogle">
    <img id="imgGoogle" src="./resources/google.png" alt="Google">
    <p>Entrar con Google</p>
    </button>
    </div>
    </div>
  </div> 
  `;
  registerContainer.innerHTML = registerTemplate;

  // BOTON PARA VALIDAR EL REGISTRO //
  registerContainer
    .querySelector('#bottonRegister')
    .addEventListener('click', () => {
      createEmail(
        document.getElementById('registerEmailUser').value,
        document.getElementById('registerPassWordUser').value,
        document.getElementById('registerNameUser').value,
      );
    });

  // REGISTRARSE CON GOOGLE //
  registerContainer
    .querySelector('#bottonGoogle')
    .addEventListener('click', () => {
      loginWithGoogle()
        .then(() => { window.location.pathname = '/feed'; })
        .catch((error) => alert(error.message));
    });
  return registerContainer;
};

export { register };
