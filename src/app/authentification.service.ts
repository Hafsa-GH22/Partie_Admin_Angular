import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TraitementService } from './traitement.service';
import { Fiche } from './Types/Fiche';

export interface UserDetails {
    id: number
    name: string
    email: string
    password: string
    exp: number
    iat: number
}

interface TokenResponse {
    token: string
}

export interface TokenPayload {
    id: number
    name: string
    email: string
    password: string
    type: number
}

@Injectable()
export class AuthentificationService {
    private token: string
    user: UserDetails;

    constructor(private http: HttpClient, private router: Router, private trait: TraitementService) {}

    private saveToken(token: string): void {
        localStorage.setItem('usertoken', token)
        this.token = token
    }

    private getToken(): string {
        if(!this.token) {
            this.token = localStorage.getItem('usertoken')
        }
        return this.token;
    }

    private getUserDetails(): UserDetails {
        const token = this.getToken()
        let payload
        if(token) {
            payload = token.split('.')[1]
            payload = window.atob(payload)
            return JSON.parse(payload)
        }
        else
        {
            return null
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails()
        if(user)
        {
            return user.exp > Date.now() / 1000
        }
        else
        {
            return false
        }
    }

    public register(user: TokenPayload): Observable<any> {
        console.log(user)
        return this.http.post(`/api/register`, user, {
            headers: {'Content-Type': 'application/json'}
        })
    }

    public login(user: TokenPayload): Observable<any> {
        const base = this.http.post(
            `/api/login`,
            {email: user.email, password: user.password, type: 1},
            {
                headers: {'Content-Type': 'application/json'}
            }
        )
        console.log(user);
        
        const request = base.pipe(
            tap(
                data => {
                    this.saveToken(data['token']);
                    this.user = data['user'];
                    // console.log(data['user']);
                    return data;
                },
                error => {
                    console.log(error);
                }
            )
            // map((data: TokenResponse) => {
            //     if(data.token) {
            //         this.saveToken(data.token)
            //     }
            //     return data
            // })
        )
        return request
    }

    public getUser() {
        return this.user;
    }

    public profile(): Observable<any> {
        return this.http.get(`/api/profile`, {
            headers : { Authorization: `Bearer ${this.getToken()}`}
        })
    }

    // public password(): Observable<any> {

    // }

    public logout(): void {
        this.token = ''
        window.localStorage.removeItem('usertoken')
        delete this.user
        this.router.navigateByUrl('/')
        this.trait.getFicheIds().length = 0;
    }
}