import React, { useEffect, useState } from 'react';
import './index.css';
import ToDo from './Components/ToDo'; 
import { MdAdd } from 'react-icons/md'
import { addToDo, getAllToDo, updateToDo, deleteToDo } from './utils/HandleApi';

const App = () => {
  const [toDoList, setToDoList] = useState([]); // Changed state variable name to toDoList
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoListId, setToDoListId] = useState('');

  useEffect(() => {
    getAllToDo(setToDoList);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoListId(_id);
  };


  return (
    <div className='App'>
      <div className='container'>
        <h1>ToDoApp</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='What are you planning...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className='add'
            onClick={
              isUpdating
                ? () => updateToDo(toDoListId, text, setToDoList, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDoList)
            }
          >

            {isUpdating ? 'Update' : <MdAdd />}
          </div>
        </div>
        <div className='listToDo'>
          {toDoList.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={ () => deleteToDo(item._id, setToDoList)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
