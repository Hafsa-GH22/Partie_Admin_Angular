import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';
import { Fiche } from '../Types/Fiche';
import { User } from '../Types/User';
// import { DemandesComponent } from '../demandes/demandes.component';

@Component({
  selector: 'app-demande-user',
  templateUrl: './demande-user.component.html',
  styleUrls: ['./demande-user.component.css']
})
export class DemandeUserComponent implements OnInit {

  fiche: Fiche;
  in: any;// = new User();
  infos = new Array<User>();
  infosUser: User = {
    id: 0,
    nom: '',
    prenom: '',
    age: '',
    sexe: '',
    adresse: '',
    telephone: '',
    ville: '',
    user_id: null
  };
  idTest: any;
  
  constructor(private trait: TraitementService) { }

  showInfos() {
    this.trait.showInfos(this.trait.getUserId()).subscribe(
      data => {
        // this.infos = this.trait.getInfos();
        this.infosUser = this.trait.getInfUs();
        // alert(this.infos);
        // this.trait.setInfos(this.infos);
        // alert(this.trait.getInfos()['nom']);
        // this.infos.push(data);
        // alert(this.infos[0].nom);
      },
      error => {
        console.log(error)
      }
    )
  }

  repondre() {
    // alert(this.fiche["id"]);
    this.trait.repondre(this.fiche["id"], this.idTest).subscribe(
      () => {
        console.log("Updated (demande-user) !");
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.fiche = this.trait.getFicheUser()[0];
    // this.infos = this.trait.getInfos();
    // alert(this.trait.getUserId());
    this.showInfos();
    // this.infosUser = this.infos[0];
    this.infosUser = this.trait.getInfUs();
    // this.infos = this.in;
  }

}
