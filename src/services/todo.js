import update from 'immutability-helper';

export function getAll() {
    return [
        {
          id: 1,
          text: 'Learn Javascript',
          completed: false
        },
        {
          id: 2,
          text: 'Learn React',
          completed: false
        },
        {
          id: 3,
          text: 'Build a React App',
          completed: false
        }
      ]
};

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    })
}

function getNextID() {
    return getAll().length + 1;
}

export function addToList(list, data) {
    let item = Object.assign({
        id: getNextID()
    }, data);

    console.log(item, list);

    return list.concat([item]);
}
