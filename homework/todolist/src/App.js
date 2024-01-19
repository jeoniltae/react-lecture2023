import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import List from './component/List';
import Form from './component/Form';

function App() {
  const [value, setValue] = useState('');
  const [todoData, setTodoData] = useState([]);

  // form input박스 value가 변경될 때 사용하는 함수
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // '추가'버튼 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      alert('오늘 할일을 입력해주세요!');
      // textInput.current.focus();
      return;
    }
    let newTodo = {
      id: Date.now(),
      title: value,
      checked: false
    };
    setTodoData([...todoData, newTodo]);
    setValue('');
    // textInput.current.focus();
  };

  return (
    <div className="container">
      <Header setTodoData={() => setTodoData([])} />
      <List todoData={todoData} setTodoData={setTodoData} />
      <Form value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
