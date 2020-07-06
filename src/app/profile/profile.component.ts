import { Component, OnInit } from '@angular/core';
import { AuthentificationService, UserDetails } from '../authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserDetails;
  // loggedUser: '';
  // userDisplayName = '';

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    // this.auth.profile().subscribe(
    //   user => {
    //     this.details = user
    //     // sessionStorage.setItem('loggedUser', user.name)
    //     // this.userDisplayName = sessionStorage.getItem('loggedUser')
    //   },
    //   err => {
    //     console.error(err)
    //   }
    // )
  }

}
