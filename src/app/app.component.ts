import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { TraitementService } from './traitement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthentificationService, public trait: TraitementService) { }
  
  title = 'Cov19FrontAngular';
}
