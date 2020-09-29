import { RootActions } from 'MyReduxTypes';
import { combineReducers } from 'redux';
import { actionDescriptors } from './actions';

export interface ITodoState {
  todos: string[];
  todoCount: number;
}

export const initialState: ITodoState = {
  todos: ['Wash wife car', 'prova'],
  todoCount: 2
};

const todoReducer = (currentState: ITodoState = initialState, action: RootActions) => {
  const { payload } = action;
  const { todos, todoCount } = currentState;
  switch (action.type) {
    case actionDescriptors.ADDTODO:
      return {
        ...currentState,
        todos: [...todos, payload],
        todoCount: todoCount + 1
      };
    case actionDescriptors.COMPLETETODO:
      const newTodos: string[] = todos.splice(Number(payload));
      return {
        ...currentState,
        todos: newTodos,
        todoCount: newTodos.length
      };
    default:
      return currentState;
  }
};

export const rootReducer = combineReducers({
  todoReducer
});
