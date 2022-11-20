/* eslint-disable dot-notation */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { auth, logOutUser } from '../auth/authentication.js';
import {
  saveRecipe, onGetRecipes, deletePost, getPost, updatePost, getRecipe, likeMe, dislikeMe,
} from '../firestore/methodsFirestore.js';
import { onNavigate } from '../main.js';

export const feed = () => {
  const feedContainer = document.createElement('div');
  const feedTemplate = `
  <div id="mainFeed">

  <header>
    <img src="./resources/logoLoveat.png" alt="Logo LovEat">
    <button id="btnLogOut">Cerrar sesión</button>
  </header>

    <div class='feed' id="feed">
        <section id="feedMainProfile">
            <section id="infoUser">
                <img src='../resources/astronaut-profile.png' alt="icon" id="iconUserProfile">
                <p id="nameUser">Nombre de usuari@</p>
            </section>
                <section id="publishPost">
                    <h1 for="publish" id="publishTitle">Publica tu receta</h1>
                        <form id="publishRecipe">
                        <input type="text" placeholder="Nombre" id="recipeName">
                        <textarea id="recipe-description" name="recipe-description" rows="3" placeholder="Descripcion de la receta"></textarea>
                        <button id="btnPublishRecipe">Publicar</button>
                        </form>
                </section>
        </section>
        <section id="feedMainPost">
            <div class= "feedView">
                <h1 id="titlePostMain">Publicaciones de tus amigos</h1>
                    <div id="postUsers">
                    </div>
            </div>
        </section>
    </div>
  </div>
  `;
  feedContainer.innerHTML = feedTemplate;
  const feedMainPost = feedContainer.querySelector('#postUsers');
  const logOutPage = feedContainer.querySelector('#btnLogOut');
  const publishRecipe = feedContainer.querySelector('#publishRecipe');
  let editStatus = false;
  const btnPublish = feedContainer.querySelector('#btnPublishRecipe');
  let id = '';

  window.addEventListener('DOMContentLoaded', () => {
    onGetRecipes((querySnapshot) => {
      feedContainer.querySelector('#nameUser').textContent = auth.currentUser.displayName;
      let html = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        html += `
          <div class= "postView">
          <div id="imageRecipe">
          <img src='../resources/saladDish.jpg' alt="icon" id="icon">
          </div>
          <div id="dataForRecipe">
              <h3 id="postTitle">${post.title}</h3>
              <p id="authorPost">${post.name}</p>
              <h3 id="descriptionPost">${post.description}</h3>
              <div id="iconsPosts">
               <div id="likeCounter">
                <img src='../resources/corazon.png' alt="icon" class="postIcon">
                <p id="counter">${post.like.length}</p>
               </div>
               <div id="iconsInteractive">
               <button id="iconLike" class="btnsLike" data-id='${doc.id}'>
                </button>
                <button id="iconEdit" class="btnsEdit" data-id='${doc.id}'>
                </button> 
                <button id="iconDelete"  class="btnsDelete" data-id='${doc.id}'>
                </button>
               </div>
              </div>
          </div>
          </div>
          `;
      });
      feedMainPost.innerHTML = html;
      const btnsDelete = feedMainPost.querySelectorAll('.btnsDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          const post = await getPost(event.target.dataset.id);
          const postData = post.data();
          if (postData.idUser === auth.currentUser.uid) {
            if (confirm('¿Estás seguro de eliminar la publicación?')) {
              deletePost(event.target.dataset.id);
            }
          } else {
            alert('No puedes borrar este post');
          }
        });
      });

      const btnsEdit = feedMainPost.querySelectorAll('.btnsEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          const post = await getPost(event.target.dataset.id);
          const postData = post.data();
          if (postData.idUser === auth.currentUser.uid) {
            publishRecipe['recipeName'].value = postData.title;
            publishRecipe['recipe-description'].value = postData.description;

            editStatus = true;
            id = post.id;

            btnPublish.innerText = 'Actualizar';
          } else {
            alert('Usted no es el propietario del post');
          }
        });
      });

      const btnsLike = feedMainPost.querySelectorAll('.btnsLike');
      btnsLike.forEach((btn) => {
        const changeLike = () => btn.classList.toggle('background-red');
        btn.addEventListener('click', changeLike);
        btn.addEventListener('click', (e) => {
          getRecipe().then((result) => result.docs.forEach(
            (idPost) => {
              if (e.target.dataset.id === idPost.id) {
                if (!idPost.data().like.includes(auth.currentUser.uid)) {
                  likeMe(idPost.id, auth.currentUser.uid);
                } else {
                  dislikeMe(idPost.id, auth.currentUser.uid);
                }
              }
            },
          ));
        });
      });
    });
    return feedMainPost;
  });

  publishRecipe.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameRecipe = publishRecipe['recipeName'];
    const descriptionRecipe = publishRecipe['recipe-description'];
    const date = new Date();
    if (nameRecipe.value === '' || descriptionRecipe.value === '') {
      alert('Todos los campos son obligatorios');
    } else {
      if (!editStatus) {
        const author = auth.currentUser.displayName;
        const idUser = auth.currentUser.uid;
        saveRecipe(date, nameRecipe.value, descriptionRecipe.value, author, idUser);
      } else {
        updatePost(id, {
          title: nameRecipe.value,
          description: descriptionRecipe.value,
        });
        editStatus = false;
        btnPublish.innerText = 'Publicar';
      }
      publishRecipe.reset();
    }
  });

  logOutPage.addEventListener('click', () => {
    if (confirm('¿Estás seguro de cerrar sesión?')) {
      logOutUser()
        .then(() => { window.location.pathname = '/'; })
        .catch(() => {});
    } else {
      onNavigate('/feed');
    }
  });
  return feedContainer;
};
