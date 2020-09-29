import { RootState } from 'MyReduxTypes';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { actionDescriptors } from '../redux/actions';

interface TodoListProps {
  todoList: string[];
  count: number;
  addTodo: (item: string) => void;
  completeTodo: (idx: number) => void;
}

interface TodoListState {
  inputText: string;
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  state = {
    inputText: ''
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: event.target.value });
  };

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { inputText } = this.state;
    if (inputText !== '') {
      this.props.addTodo(inputText);
      this.setState({ inputText: '' });
    }
  };

  public render() {
    return (
      <>
        <h1>Todos</h1>
        <div>
          {
            <ul>
              {this.props.todoList.map((item: string, index: number) => {
                return (
                  <li>
                    {index} - {item}
                  </li>
                );
              })}
            </ul>
          }
        </div>
        <div>
          <input type="text" value={this.state.inputText} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Add todo</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: RootState) => {
  return {
    todoList: store.todoReducer.todos,
    count: store.todoReducer.todoCount
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
  return {
    addTodo: (item: string) => dispatch({ type: actionDescriptors.ADDTODO, payload: item }),
    completeTodo: (idx: number) => dispatch({ type: actionDescriptors.COMPLETETODO, payload: idx })
  };
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
