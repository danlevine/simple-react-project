import { v4 } from 'node-uuid';

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

export const toggleItem = (id) =>
  delay(500).then(() => {
    const item = fakeDatabase.items.find(i => i.id === id);
    item.completed = !item.completed;
    return item;
  });

export const fetchItems = (filter) =>
  delay(500).then(() => {

    switch (filter) {
      case 'all':
        return fakeDatabase.items;
      case 'active':
        return fakeDatabase.items.filter(i => !i.completed);
      case 'completed':
        return fakeDatabase.items.filter(i => i.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });