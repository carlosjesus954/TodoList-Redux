import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todos.actions';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }
  ngOnInit(): void {
    if (this.todo) {
      console.log(
        'Todo' + this.todo.completado + this.todo.id + this.todo.texto
      );
      this.chkCompletado = new FormControl(this.todo.completado);
      this.txtInput = new FormControl(this.todo.texto, Validators.required);
    } else {
      console.error('El objeto todo no está inicializado');
    }
    this.chkCompletado.valueChanges.subscribe((change) => {
      console.log(change);
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
      console.log('toggle' + this.todo);
    });
  }
  // CAMBIAR EL ESTADO DE COMPLETADO
  onCheckboxChange(): void {
    const updatedTodo = { ...this.todo, completado: this.chkCompletado.value };
    this.todo = updatedTodo;
  }
  // ABRIR EL MODO EDICCION
  edit(): void {
    const edit = !this.editando;
    this.editando = edit;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  // EDITAR TEXTO DEL TODO
  public editarTodo = () => {
    if (!this.txtInput.valid) {
      return;
    }
    this.store.dispatch(
      actions.editar({ id: this.todo.id, texto: this.txtInput.value })
    );
    this.txtInput.reset();
    console.log('Edit con exito' + this.txtInput);
  };
  // CERRAR EL MODO EDICCIÓN
  terminarEdicion() {
    this.editando = false;
  }
  // BOrrar
  destroy() {
    this.store.dispatch(actions.eliminar({ id: this.todo.id }));
  }
}
