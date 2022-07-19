import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  set(key: string, data: Array<number>): void {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  remove (key: string, data: Array<number>, item: number ) {
    let arr: Array<number> = JSON.parse(localStorage.getItem(key) || '');
    arr = data.splice(data.indexOf(item), 1, ...arr)
    console.log(arr, data, key, item, 9876)
    return localStorage.setItem(key, JSON.stringify(data));
  }

}
