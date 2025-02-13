import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnderecoServiceService } from '../../services/endereco-service.service';
import { Endereco } from '../../endereco';


@Component({
  selector: 'app-register-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  constructor(
    private enderecoService: EnderecoServiceService
  ){}

  formulario = new FormGroup({
    cep: new FormControl('', [Validators.required,
                              Validators.pattern("^(\\d{5})(-?\\d{3})$"),
                              Validators.min(7)]),
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
    console.log(this.formulario.value)
  }

  consultaCep(event: FocusEvent, formulario: FormGroup){
    const CEP = event.target as HTMLInputElement
    this.enderecoService.consultaCep(CEP.value).subscribe((response : Endereco) => {
      console.log(response)
      console.log(formulario)
      this.preencherDados(response, formulario)
    })
  }

  preencherDados(dados: Endereco, formulario: FormGroup){
    formulario.patchValue({
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      estado: dados.uf,
      cidade: dados.localidade,
      uf: dados.uf,
      regiao: dados.regiao
    })
  }
}
