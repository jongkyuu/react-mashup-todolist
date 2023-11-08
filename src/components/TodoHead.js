import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-weight: bold;
    font-size: 20px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 30px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => todo.done === false);

  // 날짜 및 요일
  const today = new Date();
  const dayOfWeek = today.getDay();

  // 날짜 출력
  const date = `2023년 ${today.getFullYear()}월 ${today.getMonth() + 1}일`;

  // 요일 출력
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const day = week[dayOfWeek];

  // 출력

  //   console.log(undoneTasks);
  //   console.log(`date : ${date}`);
  //   console.log(`day : ${day}요일`);

  return (
    <TodoHeadBlock>
      <h1>{date}</h1>
      <div className="day">{day}요일</div>
      <div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
