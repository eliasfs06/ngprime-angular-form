import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'] 
})
export class UserFormComponent {
  usuario = {
    nome: '',
    email: '',
    genero: '',
    fotoPerfil: null,
    receberNotificacoes: false,
    termosDeUsoAceitos: false
  };

  generos = ['Masculino', 'Feminino', 'Outro'];

  fotoPerfilControl = new FormControl(); 

  onSubmit() {
    console.log('Formulário enviado:', this.usuario);
  }
}
