import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsVaild] = useState(true);

  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsVaild(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsVaild(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isVaild && styles.invalid}`}
      >
        <label>π Today I'll Do</label>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>

        <input
          type="text"
          onChange={goalInputChangeHandler}
          placeholder="ν  μΌμ μλ ₯ ν, Enter λ₯Ό λλ₯΄μΈμ"
        />
      </div>
      <Button type="submit">Do it</Button>
    </form>
  );
};

export default CourseInput;
