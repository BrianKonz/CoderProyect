import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAut: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formAut = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      admin: new FormControl()
    }) 
   }

  ngOnInit(): void {
  }

  login(){
    this.sesionService.login(this.formAut.value.usuario, this.formAut.value.contrasena, this.formAut.value.admin)
    this.router.navigate(['inicio'])
  }

}
