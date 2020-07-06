import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';
import { Fiche } from '../Types/Fiche';
import { User } from '../Types/User';

@Component({
  selector: 'app-traite',
  templateUrl: './traite.component.html',
  styleUrls: ['./traite.component.css']
})
export class TraiteComponent implements OnInit {

  ficheIdsTraite = new Array<Fiche>();
  userId : 0;
  infos = new User();

  constructor(private trait: TraitementService) { 
    this.ficheIdsTraite.length = 0;
  }

  showTraite() {
    this.trait.showTraite().subscribe(
      () => {
        this.ficheIdsTraite = this.trait.getFicheIdsTraite()
        console.log("Traités shown");
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
    this.trait.setFicheUser(this.ficheIdsTraite.filter(f => f.user_id == this.userId));
    // alert(this.trait.getFicheUser()[0].user_id)
    // this.showInfos();
    this.trait.setUserId(this.userId);
    // alert(this.trait.getUserId());
  }
  
  ngOnInit(): void {
    this.showTraite();
  }

  // getFicheIds() {
  //   return this.ficheIds.filter(f => f.user_id == this.userId); //find - filter 
  // }


}
