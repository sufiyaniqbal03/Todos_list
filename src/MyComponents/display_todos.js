import React from 'react';
import retrievedEntity from './second_heading';

function Display_todos() {
  return (
    <div className="row">
      <div className="col">{retrievedEntity.title}</div>
      <div className="col">{retrievedEntity.description}</div>
      <div className="col">{retrievedEntity.deadline}</div>
    </div>
  );
}

export default Display_todos;


