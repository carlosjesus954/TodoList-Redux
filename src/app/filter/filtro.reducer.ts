import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  estadoInicial,
  on(setFilter, (state, { filtro }) => filtro)
);

export function filtroReducer(
  state: filtrosValidos | undefined,
  action: Action
): filtrosValidos {
  return _filtroReducer(state, action);
}
