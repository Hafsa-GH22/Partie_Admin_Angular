import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Fiche } from './Types/Fiche';
import { User } from './Types/User';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  ficheIds = new Array<Fiche>(); //Fiche non Traités
  ficheIdsTraite = new Array<Fiche>(); //Fiche Traités
  ficheUser: Fiche[]; 
  infos = new Array<User>();
  infosUser: User[];
  infUs: User;
  userId: any;
  nonTraite: number;
  positif: number;
  negatif: number;

  constructor(private http: HttpClient, private router: Router, private route: Router,) { }

  showReponses() {
    return this.http.get(`/api/showReponses`, 
    { headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(data => {
        this.ficheIds.length = 0;

        for(let index of Object.keys(data))
        {
            this.ficheIds.push(data[index]);
        }
        // console.log(this.ficheIds);
      },
      error => {
        console.log(error);
      },
      () => this.route.navigateByUrl('demandes')
      )
    )
  }

  showTraite() {
    return this.http.get(`/api/showTraite`,
    { headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(data => {
        this.ficheIdsTraite.length = 0;
        for(let index of Object.keys(data))
        {
          this.ficheIdsTraite.push(data[index]);
        }
      },
      error => {
        console.log(error);
      },
      () => this.route.navigateByUrl('traite')
      )
    )
  }

  showInfos(id: any) {
    return this.http.post(`/api/showInfos`, {id: id},
    { headers : {'Content-Type': 'application/json'}}
    ).pipe(
      tap(data => {
        for(let index of Object.keys(data))
        {
            this.infos.push(data[index]);
        }
        this.infUs = data[0];
        // this.infos = data;
        // this.infos.id = data["id"];
        // this.infos.nom = data['nom'];
        // this.infos.prenom = data["prenom"];
        // this.infos.age = data["age"];
        // this.infos.sexe = data["sexe"];
        // this.infos.adresse = data["adresse"];
        // this.infos.telephone = data["telephone"];
        // this.infos.ville = data["ville"];
        // this.infos.user_id = data["user_id"];
        // console.log(this.getInfos());
        // alert(data['nom']);
      },
      error => {
        console.log(error);
      })
    )
    // const base = this.http.post(
    //   `/api/showInfos`,
    //   {id: id},
    //   { 
    //     headers : {'Content-Type': 'application/json'}
    //   }
    // )
    // console.log(id);
    // const request = base.pipe(
    //   tap(
    //     data => {
    //       // this.infos.id = data["id"];
    //       // this.infos.nom = data["nom"];
    //       // this.infos.prenom = data["prenom"];
    //       // this.infos.age = data["age"];
    //       // this.infos.sexe = data["sexe"];
    //       // this.infos.adresse = data["adresse"];
    //       // this.infos.telephone = data["telephone"];
    //       // this.infos.ville = data["ville"];
    //       // this.infos.user_id = data["user_id"];
    //       // alert(data["user_id"]);
    //       this.infos = data;
    //       // alert(this.infos);
    //       return data;
    //     }
    //   )
    // )
    // return request
  }
  getInfUs() {
    return this.infUs;
  }

  setUserId(userId: any) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  getInfos() {
    return this.infos;
  }

  setInfosUser(infos: User[]) {
    this.infosUser = infos;
  }
  getInfosUser() {
    return this.infosUser;
  }

  getFicheIds() {
    return this.ficheIds;
  }

  getFicheIdsTraite() {
    return this.ficheIdsTraite;
  }

  setFicheUser(ficheUser: Fiche[]) {
    this.ficheUser = ficheUser;
  }

  getFicheUser() {
    return this.ficheUser;
  }

  repondre(id: any, reponseTest_id: any) {
    return this.http.post(`/api/repondre`, 
    {id: id, reponseTest_id: reponseTest_id}, 
    { headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(
      () =>
        this.route.navigateByUrl('demandes')
      ,
      error => {
        console.log(error);
      }
      )
    )
  }

  getGraphs() {
    return this.http.get(`/api/graphes`,
    { headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(
        data => {
            this.nonTraite = data['nonTraite'][0]['nonTraite'];
            this.positif = data['positif'][0]['positif'];
            this.negatif = data['negatif'][0]['negatif'];
            console.log(data['nonTraite'][0]['nonTraite']);
            console.log(data['positif'][0]['positif']);
            console.log(data['negatif'][0]['negatif']);
      },
      error => {
        console.log(error);
      })
    ); 
    

  }

  getNonTraite() {
    return this.nonTraite
  }

  getPositif() {
    return this.positif
  }

  getNegatif() {
    return this.negatif
  }

}
