import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todos.actions';

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
  // txtInputEdit!: FormControl;
  editando: boolean = false;
  constructor(private store: Store) {
    // this.txtInputEdit = new FormControl('', Validators.required);
  }
  ngOnInit(): void {
    if (this.todo) {
      this.chkCompletado = new FormControl(this.todo.completado);
      this.txtInput = new FormControl(this.todo.texto, Validators.required);
    } else {
      console.error('El objeto todo no está inicializado');
    }
  }
  onCheckboxChange(): void {
    const updatedTodo = { ...this.todo, completado: this.chkCompletado.value };
    this.todo = updatedTodo;
  }
  edit(): void {
    const edit = !this.editando;
    this.editando = edit;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.focus();
    }, 1);
  }
  public editarTodo = () => {
    // if (!this.txtInputEdit.valid) {
    //   return;
    // }
    // this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
    // this.txtInput.reset();
    console.log('Edit con exito');
  };
}
