import { Component, OnInit } from '@angular/core';
import { AuthentificationService, TokenPayload } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: '',
    type: 0
  }

  public error = null;

  constructor(private auth: AuthentificationService, private router: Router) { }

  register() {
    this.credentials.type = 1;
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        this.handleError(err);
        console.error(err)
      }
    )
  }

  // ---- Affichage du message d'erreur ----
  handleError(error) {
    this.error = error.error;
  }

  ngOnInit(): void {
  }

}
