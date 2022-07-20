import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  todos!: Array<number>;
  showValidationErrors!: boolean;
  btnState:boolean=false;
  textField!: any;

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.todos = this.storageService.getTodos()
  }

  onFormSubmit(form: NgForm) {
    const todo = Number(Object.values(form.value));
    this.storageService.addTodo(todo);
    form.reset();
  }

  onDeleteClick(todo: number) {
    this.storageService.deleteTodo(todo)
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
