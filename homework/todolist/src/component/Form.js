import React from 'react';

const Form = ({ value, handleChange, handleSubmit }) => {
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input type="text" placeholder='오늘 할일을 입력하세요' value={value} onChange={handleChange} />
      <input type='submit' value="추가" />
    </form>
  )
}

export default Form;
