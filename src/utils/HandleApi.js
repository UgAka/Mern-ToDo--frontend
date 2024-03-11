import axios from 'axios';

const baseUrl = 'https://mern-todo-backend-vh4r.onrender.com';

const getAllToDo = (setToDoList) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data----->', data);
      setToDoList(data);
    });
};

const addToDo = (text, setText, setToDoList) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText('');
      getAllToDo(setToDoList);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoListId, text, setToDoList, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoListId, text })
    .then((data) => {
      console.log(data);
      setText('');
      setIsUpdating(false);
      getAllToDo(setToDoList);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDoList) => {
  axios
    .post(`${baseUrl}/delete`, { _id})
    .then((data) => {
      console.log(data);
      getAllToDo(setToDoList);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
