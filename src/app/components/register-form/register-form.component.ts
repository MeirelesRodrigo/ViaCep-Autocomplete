import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Importar aqui


@Component({
  selector: 'app-register-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  formulario = new FormGroup({
    cep: new FormControl('', Validators.required),
    logradouro: new FormControl(''),
    complemento: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    uf: new FormControl(''),
    estado: new FormControl(''),
    cidade: new FormControl(''),
    regiao: new FormControl(''),
  })

  submit(){
    console.log('hello')
  }
}
