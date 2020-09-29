import { createStore } from 'redux';
import { rootReducer } from './reducer';

export const todoStore = createStore(rootReducer);
