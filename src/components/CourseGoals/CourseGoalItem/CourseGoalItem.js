import React from 'react';
import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal_item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
