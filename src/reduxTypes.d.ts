declare module 'MyReduxTypes' {
  import { ActionType, StateType } from 'typesafe-actions';

  export type RootActions = ActionType<typeof import('./redux/actions')>;

  export type RootState = StateType<typeof import('/redux/reducer')>;
}
