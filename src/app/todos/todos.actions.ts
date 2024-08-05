import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea todo',
  props<{ texto: string }>()
);

export const editar = createAction(
  '[TODO] Edit todo',
  props<{ texto: string }>()
);
