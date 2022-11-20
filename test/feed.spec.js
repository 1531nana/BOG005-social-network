// import { logOutUser } from '../src/auth/authentication.js';
// import { onGetRecipes } from '../src/firestore/methodsFirestore.js';
// import { logOutUser } from '../src/auth/authentication.js';
// import { onGetRecipes } from '../src/firestore/methodsFirestore.js';
// import { feed } from '../src/pages/feed.js';

// import { logOutUser } from '../src/auth/authentication';
// import { feed } from '../src/pages/feed';

jest.mock('../src/auth/authControllers.js');
jest.mock('../src/auth/authentication.js');
jest.mock('../src/firestore/firestore.js');
jest.mock('../src/firestore/methodsFirestore.js');
jest.mock('../src/config/configFireBaseImport.js');
jest.mock('../src/main.js');
jest.mock('../src/pages/feed.js');

describe('Function feed', () => {
  // test('The function feed should show the length of the children', () => {
  //   const containerFeed = feed();
  //   const post = containerFeed.querySelector('#postUsers');
  //   const title = post.querySelector('#postTitle');
  //   const description = post.querySelector('#descriptionPost');
  //   onGetRecipes().then((result) => result.forEach((doc) => {
  //     title.value = doc.data().title;
  //     description.value = doc.data().description;
  //     expect(containerFeed.children).toHaveLength(2);
  //   }));
  // });

  // test('Edit Post', () => {
  //   const containerFeed = feed();
  //   window.dispatchEvent(new Event('DOMContentLoaded'));
  //   console.log('ongetrecipe ', onGetRecipes());
  //   onGetRecipes();
  //   const post = containerFeed.querySelector('#postUsers');
  //   const btnEdit = post.querySelector('.btnsEdit');
  //   console.log('post ', post);
  //   console.log('btnEdit 1 ', btnEdit);
  //   // btnEdit.click();
  //   // console.log('btnEdit  2 ', btnEdit);
  // });

  // test('the button logOut should show confirm', () => {
  //   window.confirm = () => true;
  //   const containerFeed = feed();
  //   const buttonLogOut = containerFeed.querySelector('#btnLogOut');
  //   buttonLogOut.click();
  //   expect(logOutUser).toBeCalled();
  // });

  // test('send form with input empty', () => {
  //   window.alert = jest.fn((message) => message);
  //   const containerFeed = feed();
  //   // const publishRecipe = containerFeed.querySelector('#btnPublishRecipe');
  //   const publishRecipe = containerFeed.querySelector('#publishRecipe');
  //   const inputTitle = publishRecipe.querySelector('#recipeName');
  //   const inputDescrption = publishRecipe.querySelector('#recipe-description');
  //   inputTitle.value = '';
  //   inputDescrption.value = '';
  //   window.dispatchEvent(new Event('submit'));
  //   expect(window.alert).toBeCalled();
  //   // { expect(alert).toBeCalled(); }
  // });
});
