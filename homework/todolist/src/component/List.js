import React from 'react';

const gStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px dotted #ddd'
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const checkboxStyle = {
  width: '16px',
  height: '16px',
};

const txtStyle = (isChecked) => {
  return {
    display: 'inline-block',
    marginLeft: '10px',
    color: isChecked ? 'red' : '#000',
    textDecoration: isChecked ? 'line-through' : 'none',
  }
};

const List = ({ todoData, setTodoData }) => {

  // 해당 id번째 삭제하기
  const handleDelete = (id) => {
    let newTodoData = todoData.filter(data => id !== data.id);
    setTodoData(newTodoData);
    // console.log(newTodoData)
  };

  // 체크박스 체크
  const handleCheck = (id) => {
    let newTodoData = todoData.map(data => {
      console.log(id, data.id)
      if (id === data.id) {
        data.checked = !data.checked;
        console.log(data.checked)
      }

      return data;
    });

    setTodoData(newTodoData);
  };

  return (
    <ul className='todo-list'>
      {
        todoData.map(data => {
          return (
            <li key={data.id} style={gStyle}>
              <div style={contentStyle}>
                <input type="checkbox" style={checkboxStyle} defaultChecked={data.checked} onChange={() => handleCheck(data.id)} />
                <span style={txtStyle(data.checked)}>{data.title}</span>
              </div>
              <div className="btns">
                <button type='button'>수정하기</button>
                <button type='button' onClick={() => handleDelete(data.id)}>삭제하기</button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List;