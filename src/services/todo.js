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

function getNextID() {
    return getAll().length + 1;
}

export function addToList(list, data) {
    let item = Object.assign({
        id: getNextID()
    }, data);

    return list.concat([item]);
}