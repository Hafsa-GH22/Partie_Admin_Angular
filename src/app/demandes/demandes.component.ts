import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';
import { Fiche } from '../Types/Fiche';
import { User } from '../Types/User';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  ficheIds = new Array<Fiche>();
  userId : 0;
  infos = new User();

  constructor(private trait: TraitementService) { 
    this.ficheIds.length = 0;
  }

  showReponses() {
    this.trait.showReponses().subscribe(
      () => {
        this.ficheIds = this.trait.getFicheIds()
        console.log("Reponses shown");
      },
      error => {
        console.error(error)
      }
    )
  }

  // showInfos() {
  //   this.trait.showInfos(this.userId).subscribe(
  //     () => {
  //       // this.infos = this.trait.getInfos();
  //       // alert(this.infos);
  //       // this.trait.setInfos(this.infos);
  //       alert(this.trait.getInfos()['nom']);
  //     },
  //     error => {
  //       console.log(error)
  //     }
  //   )
  // }

  user(value)
  {
    this.userId = value;
    this.trait.setFicheUser(this.ficheIds.filter(f => f.user_id == this.userId));
    // this.showInfos();
    this.trait.setUserId(this.userId);
    // alert(this.trait.getUserId());
  }
  
  ngOnInit(): void {
    this.showReponses();
  }

  // getFicheIds() {
  //   return this.ficheIds.filter(f => f.user_id == this.userId); //find - filter 
  // }

}
