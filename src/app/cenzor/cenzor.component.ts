import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public words = 'java';
  public input = 'input-field';
  public btnAdd = 'btn add';
  public btnReset = 'btn reset';
  public tarea = 'tarea';
  public check = true;
  public value = 'ee';

  constructor() { }

  ngOnInit(): void {
  }

  showWordsList(): string{
    return this.words;
  }
  addWord(): void{
    // if (this.va == '') {
    //   this.check = false;
    // }
  }

}
