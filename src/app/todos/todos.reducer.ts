import { createReducer, on } from '@ngrx/store';
import { crear } from './todos.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Salvar el palomo'),
  new Todo('Salvar el cruncy'),
  new Todo('Salvar el poo'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(
  state: Todo[] = estadoInicial,
  action: any
): Todo[] {
  return _todoReducer(state, action);
}
