import React from 'react';

const Header = ({ setTodoData }) => {
  return (
    <div className="title">
      <h1>Today ToDo List</h1>
      <button type='button' onClick={setTodoData}>전체 삭제</button>
    </div>
  )
}

export default Header;