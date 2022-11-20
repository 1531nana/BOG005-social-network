/* eslint-disable no-alert */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
// eslint-disable-next-line import/no-unresolved
} from './authControllers.js';
import { app } from '../config/configFireBase.js';
import { onNavigate } from '../main.js';

const auth = getAuth(app);

// OBSERVADOR - PERMITE IDENTIFICAR SI EXISTE UNA CUENTA ABIERTA
onAuthStateChanged(auth, (user) => {
  if (!user) {
    onNavigate('/');
    window.location.hash = '';
    if (window.location.hash === '') {
      // eslint-disable-next-line no-restricted-globals
      history.replaceState({}, '', '/');
    }
  } else {
    onNavigate('/feed');
  }
});

const logOutUser = () => signOut(auth);

const createEmail = (email, password, nameUser) => {
  createUserWithEmailAndPassword(auth, email, password, nameUser)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: nameUser,
      }).then(() => {
        let user = auth.currentUser.displayName;
        // eslint-disable-next-line no-unused-vars
        user = nameUser;
        window.location.pathname = '/feed';
      }).catch((error) => error.message);
    })
    .catch((error) => {
      alert(error.message);
      onNavigate('/register');
    });
};

const validateUserAndPass = (email, password) => signInWithEmailAndPassword(auth, email, password);
const provider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, provider);

export {
  createEmail, validateUserAndPass, loginWithGoogle, logOutUser, auth,
};
