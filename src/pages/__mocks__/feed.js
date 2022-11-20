/* eslint-disable quotes */
export const feed = () => {
  const mockContainerFeed = document.createElement('div');
  const mockFeedTemplate = `
    <section id="publishPost">
    <button id="btnLogOut">Cerrar sesión</button>
    <h1 for="publish" id="publishTitle">Publica tu receta</h1>
        <form id="publishRecipe">
        <input type="text" placeholder="Nombre" id="recipeName">
        <textarea id="recipe-description" name="recipe-description" rows="3" placeholder="Descripcion de la receta"></textarea>
        <button id="btnPublishRecipe">Publicar</button>
        </form>
  </section>
  <div id="postUsers">
  </div>
    `;
  mockContainerFeed.innerHTML = mockFeedTemplate;
  const feedMainPost = mockContainerFeed.querySelector('#postUsers');
  const mockContainerFeedPost = `
  <div id="dataForRecipe">
  <h3 id="postTitle"></h3>
  <p id="authorPost"></p>
  <h3 id="descriptionPost"></h3>
  </div>
  <div id="iconsInteractive">
  <button id="iconLike" class="btnsLike" data-id='sdfhurnlasdf254'></button>
  <button id="iconEdit" class="btnsEdit" data-id='sdfhurnlasdf254'></button> 
  <button id="iconDelete"  class="btnsDelete" data-id='sdfhurnlasdf254'></button>
  </div>
  `;

  feedMainPost.innerHTML = mockContainerFeedPost;

  return mockContainerFeed;
};
