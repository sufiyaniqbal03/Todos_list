import React, { useState } from 'react';
import Display_todos from './display_todos';
function Second_heading() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };



  function maketodoslist(props) {
    return (
      <div className="row my-3">
        <div className="col">{props.title}</div>
        <div className="col">{props.description}</div>
        <div className="col">{props.deadline}</div>
      </div>
    );
  }

  const handleAddTodo = () => {
    // Here you can store the values of title, description, and deadline in an array or any other suitable data structure for later use
    const myMap = new Map();

    const myEntity = { title: title, description: description, deadline: deadline };

    myMap.set('entity1', myEntity);

    // To retrieve the entity from the Map:
    let retrievedEntity = myMap.get('entity1');
    console.log("hello world");
    return <Display_todos />

  };

  return (
    <>
      <div className="row my-3">
        <div className="col px-3">
          <label htmlFor="title" style={{ color: 'darkblue', fontSize: '1.2rem', fontWeight: 'bold', paddingBottom: '0.5rem' }}>Title</label>
          <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={title} />
        </div>
        <div className="col px-3">
          <label htmlFor="description" style={{ color: 'darkblue', fontSize: '1.2rem', fontWeight: 'bold', paddingBottom: '0.5rem' }}>Description</label>
          <input type="text" className="form-control" id="description" onChange={handleDescriptionChange} value={description} />
        </div>
        <div className="col px-3">
          <label htmlFor="deadline" style={{ color: 'darkblue', fontSize: '1.2rem', fontWeight: 'bold', paddingBottom: '0.5rem' }}>Deadline</label>
          <input type="text" className="form-control" id="deadline" onChange={handleDeadlineChange} value={deadline} />
        </div>
      </div>
      <button className='col px-5 text-left btn btn-success' onClick={handleAddTodo}>ADD</button>

    </>
  );
}

export default Second_heading;
