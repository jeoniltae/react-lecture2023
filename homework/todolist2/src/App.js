import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [todolist, setTodolist] = useState([]);
  const inputTxtRef = useRef();

  // 입력 박스 value값 상태관리
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // 추가버튼 클릭 이벤트 함수
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: value,
      isChk: false,
      isChoice: false,
    };
    if (value === '') {
      alert('내용을 입력해주세요')
    } else {
      setTodolist([...todolist, newTodo]);
      setValue('');
    }
    inputTxtRef.current.focus();
  };

  // 체크박스 온체인지 이벤트 함수
  const handleChkbox = (id) => {
    const newTodoData = todolist.map(data => {
      if (id === data.id) {
        data.isChk = !data.isChk;
        // console.log(data.isChk);
      }
      return data;
    })

    setTodolist(newTodoData);
  }

  // 선택버튼 클릭 이벤트
  const handleChoice = (id) => {
    const newTodoData = todolist.map(data => {
      if (id === data.id) {
        data.isChk = !data.isChk;
        data.isChoice = !data.isChoice;
      }
      return data;
    })

    setTodolist(newTodoData);
  }

  // 삭제버튼 클릭 이벤트
  const handleDel = (id) => {
    const newTodoData = todolist.filter(data => {
      // if (id !== data.id) {
      //   return data;
      // }
      return id !== data.id && data;
    })
    // console.log(newTodoData);
    setTodolist(newTodoData);
  };

  // 체크박스 활성화된 목록만 찾아서 삭제하는 함수
  const handleRemoveChk = () => {
    const newTodoData = todolist.filter(data => {
      return (!data.isChk && !data.isChoice) && data;
    });

    setTodolist(newTodoData);
    console.log(newTodoData);
  };

  return (
    <div className="wrap">
      <div className="todolist-container">
        <h1>오늘 할일 목록</h1>
        <header>
          <form onSubmit={handleTodoSubmit}>
            <input type='text' placeholder='오늘 할일을 입력하세요' ref={inputTxtRef} value={value} onChange={handleInputChange} />
            <input type='submit' value="✙" />
          </form>
        </header>
        <section className='todolist-body'>
          <ul>
            {
              todolist.map(item => {
                return (
                  <li key={item.id}>
                    <span>
                      <input type='checkbox' checked={item.isChk} onChange={() => handleChkbox(item.id)} />
                      <em style={{ textDecoration: item.isChk ? 'line-through' : 'none' }}>{item.title}</em>
                    </span>
                    <span>
                      <button type='button' onClick={() => handleChoice(item.id)}>✔︎</button>
                      <button type='button' onClick={() => handleDel(item.id)}>✘</button>
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </section>
        <section className='todolist-bottom'>
          <button type='button' onClick={handleRemoveChk}>Remove Checked</button>
        </section>
      </div>
    </div>
  );
}

export default App;
