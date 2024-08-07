import { createReducer, on } from '@ngrx/store';
import { crear, editar, eliminar, toggle } from './todos.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Salvar el palomo'),
  new Todo('Salvar el cruncy'),
  new Todo('Salvar el poo'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(eliminar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(
  state: Todo[] = estadoInicial,
  action: any
): Todo[] {
  return _todoReducer(state, action);
}
