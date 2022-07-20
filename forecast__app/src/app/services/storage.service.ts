import { Injectable } from '@angular/core';
import { fromEvent, Subject, Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  todos: Array<number> = [];
  storageListenSub!: Subscription;
  private subject = new BehaviorSubject<string>('');

  name = this.subject.asObservable()

  constructor() {
    this.loadState()
  }
  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  changeName(name: string) {
    this.subject.next(name);
  }

  getTodos() {
    return this.todos
  }
  saveState() {
    localStorage.setItem('zipCode', JSON.stringify(this.todos))
  }

  getTodo() {
    return this.subject.asObservable();
  }

  addTodo(todo: number) {
    this.todos.push(todo);
    return this.saveState()
  }

  deleteTodo(text: number) {
    const index = this.todos.findIndex(t => t === text)
    if (index == -1) return

    this.todos.splice(index, 1)

    this.saveState()
  }

  loadState() {
    try {
      const zipInStorage = JSON.parse(localStorage.getItem('zipCode') || '');

      if (!zipInStorage) return

      this.todos.length = 0;
      this.todos.push(...zipInStorage);
    } catch (e) {
      console.log('There was an error retrieving the todos from localStorage');
      console.log(e);
    }

  }
}
