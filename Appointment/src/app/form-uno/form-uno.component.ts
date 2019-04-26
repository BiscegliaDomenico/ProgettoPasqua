import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-uno',
  templateUrl: './form-uno.component.html',
  styleUrls: ['./form-uno.component.css']
})
export class FormUnoComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'nome' : ['', Validators.required],
      'cognome' : ['', Validators.required],
      'indirizzo' : ['', Validators.required],
      'telefono' : ['' , Validators.required],
      'email' : ['' , Validators.required],
      'data' : ['', Validators.required],
      'ora' : ['' , Validators.required]
    })
   }

  ngOnInit() {
  }

  onSubmit(value : string): void{
    console.log('you submitted value: ', value);
  }

}
