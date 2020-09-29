import { action } from 'typesafe-actions';

export enum actionDescriptors {
  ADDTODO = 'AddTodo',
  COMPLETETODO = 'CompleteTodo'
  //DELETETODO = 'DeleteTodo'
}

export const todoActions = {
  add: (item: string) => action(actionDescriptors.ADDTODO, item),
  complete: (idx: number) => action(actionDescriptors.COMPLETETODO, idx)
  //delete: (idx: number) => action(actionDescriptors.DELETETODO, idx)
};
