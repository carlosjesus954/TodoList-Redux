import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
