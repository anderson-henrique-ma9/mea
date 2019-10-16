import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label;

  input: any;

  @ContentChild(FormControlName, {static: false}) control: FormControlName;

  constructor() { }

  ngOnInit() {
    
  }

  status(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }


  ngAfterContentInit() {
    
    this.input = this.control;
    if(this.input === undefined) {
      throw new Error("Deve ser utilizado com uma diretiva de formulário")
    }
    
  }

}
