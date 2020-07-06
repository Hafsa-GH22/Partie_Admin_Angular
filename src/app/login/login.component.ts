import { Component, OnInit } from '@angular/core';
import { AuthentificationService, TokenPayload } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: '',
    type: 1
  }
  public error = null;
  constructor(private auth: AuthentificationService, private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
        // alert('logged')
      },
      err => {
        this.handleError(err);
        console.error(err)
      }
    )
  }

  // ---- Affichage du message d'erreur ----
  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
