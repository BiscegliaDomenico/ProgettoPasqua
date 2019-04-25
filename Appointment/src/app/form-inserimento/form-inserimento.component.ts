import { Component, OnInit, ApplicationInitStatus, Input, } from '@angular/core';
import { FormBuilder,  FormGroup} from '@angular/forms';
import {Cliente} from '../Cliente'
import{CLIENTE} from '../mock-cliente'
@Component({
  selector: 'app-form-inserimento',
  templateUrl: './form-inserimento.component.html',
  styleUrls: ['./form-inserimento.component.css']
})
export class FormInserimentoComponent implements OnInit {
  cliente = CLIENTE;
  selectedCliente = Cliente;

  constructor() {

   }

  ngOnInit() {
  }

  onAddCliente(nome: HTMLInputElement,cognome: HTMLInputElement,indirizzo: HTMLInputElement,telefono: HTMLInputElement, email : HTMLInputElement, data :  HTMLInputElement, ora :  HTMLInputElement )
  {
      let appointment : Cliente = new Cliente();
      appointment.nome = String( nome.value);
      appointment.cognome = String (cognome.value);
      appointment.indirizzo =String (indirizzo.value);
      appointment.telefono =Number (indirizzo.value);
      appointment.email =String (indirizzo.value);
      appointment.data =Number (data.value);
      appointment.ora =Number (ora.value);
      this.cliente.push(appointment);
  }
}
