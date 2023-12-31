import React, { useContext } from 'react';
import styled, { css, StyleSheetManager } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatchContext } from '../TodoContext';

// shouldForwardProp 함수를 정의하여 알 수 없는 prop 필터링
// const shouldForwardProp = (prop) => !prop.startsWith('done');

const Remove = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.$done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.$done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ text, done, id }) {
  const dispatch = useTodoDispatchContext();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });

  return (
    <TodoItemBlock>
      <CheckCircle $done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text $done={done}>{text}</Text>
      <Remove onClick={() => dispatch({ type: 'REMOVE', id })}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
