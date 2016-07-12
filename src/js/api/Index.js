import firebase from 'firebase';
import { v4 } from 'node-uuid';



// const Items = new Firebase("https://flickering-fire-3051.firebaseio.com/notes");

// Initialize Firebase
// const config = {
//   apiKey: "AIzaSyC0WHChgY9Ahgr7t4NRCQajmL_vG6mtQ1o",
//   authDomain: "flickering-fire-3051.firebaseapp.com",
//   databaseURL: "https://flickering-fire-3051.firebaseio.com",
//   storageBucket: "flickering-fire-3051.appspot.com",
// };
// firebase.initializeApp(config);

// const rootRef = firebase.database().ref();
// console.log('***FIREBASE***', rootRef);

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  items: [{
    id: v4(),
    name: 'hey',
    completed: true,
  }, {
    id: v4(),
    name: 'ho',
    completed: true,
  }, {
    id: v4(),
    name: 'let’s go',
    completed: false,
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const addItem = (name) =>
 delay(500).then(() => {
  const item = {
    id: v4(),
    name,
    completed: false
  };
  fakeDatabase.items.push(item);
  return item;
 });

 export const deleteItem = (id) =>
  delay(500).then(() => {
    const item = fakeDatabase.items.find(i => i.id === id);
    fakeDatabase.items.splice(fakeDatabase.items.indexOf(item), 1);
    return item;
  });

export const toggleItem = (id) =>
  delay(500).then(() => {
    const item = fakeDatabase.items.find(i => i.id === id);
    item.completed = !item.completed;
    return item;
  });

// export const fetchItems = (filter) =>
  // new Promise(resolve => setTimeout(resolve, ms));

  // delay(0).then(() => {
  // console.log('tester');
  // rootRef.on('value', snapshot => {
    // console.log('fetchItems()::snapshot.val().items', snapshot.val().items);
    // return snapshot.val().items;
  // });
  // });
    // rootRef.once('value').then(() => console.log('hahaha'));
  // delay(500).then(() => {

  //   switch (filter) {
  //     case 'all':
  //       return fakeDatabase.items;
  //     case 'active':
  //       return fakeDatabase.items.filter(i => !i.completed);
  //     case 'completed':
  //       return fakeDatabase.items.filter(i => i.completed);
  //     default:
  //       throw new Error(`Unknown filter: ${filter}`);
  //   }
  // });