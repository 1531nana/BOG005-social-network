/* eslint-disable quotes */
import { onNavigate } from '../src/main.js';

jest.mock('../src/auth/authControllers.js');
jest.mock('../src/firestore/firestore.js');
jest.mock('../src/config/configFireBaseImport.js');

const mockTemplateLogin = () => {
  const loginContainer = document.createElement('div');
  loginContainer.innerHTML = `<h1>Iniciar sesión</h1>`;
  return loginContainer;
};

const mockTemplateRegister = () => {
  const registerContainer = document.createElement('div');
  registerContainer.innerHTML = `<h1>Regístrate</h1>`;
  return registerContainer;
};

const mockTemplateFeed = () => {
  const feedContainer = document.createElement('div');
  feedContainer.innerHTML = `<h1>Publicaciones de tus amigos</h1>`;
  return feedContainer;
};

const mockRoutes = {
  '/': mockTemplateLogin(),
  '/register': mockTemplateRegister(),
  '/feed': mockTemplateFeed(),
};

describe('onNavigate', () => {
  it('test de onNavigate Login', () => {
    document.body.innerHTML = `<main id="root"></main>`;
    onNavigate('/', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Iniciar sesión');
  });
  it('test de onNavigate register', () => {
    document.body.innerHTML = `<main id="root"></main>`;
    onNavigate('/register', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Regístrate');
  });
  it('test de onNavigate feed', () => {
    document.body.innerHTML = `<main id="root"></main>`;
    onNavigate('/feed', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Publicaciones de tus amigos');
  });
});
