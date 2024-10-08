import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todos.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(private store: Store) {
    this.txtInput = new FormControl('', Validators.required);
  }
  ngOnInit(): void {}
  public agregar = () => {
    if (!this.txtInput.valid) {
      return;
    }
    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();
  };
}
