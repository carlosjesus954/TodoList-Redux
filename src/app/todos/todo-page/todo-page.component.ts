import { Component, OnInit } from '@angular/core';
import * as actions from '../todos.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
  public toggleAll() {
    this.completado = !this.completado;
    const completado = { completado: this.completado };
    this.store.dispatch(actions.toggleAll(completado));
  }
}
