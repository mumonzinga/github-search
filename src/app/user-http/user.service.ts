import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userName: string;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '', new Date());
  }


  userRequest() {

    interface ApiResponse {
      login: string;
      name: string;
      bio: any;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: any;
      html_url: any;
    }
    let promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>(environment.apiUrl + this.userName + '?access_token=' + environment.access_token).toPromise().then(response => {

        this.user.avatar = response.avatar_url;
        this.user.username = response.login;
        this.user.name = response.name;
        this.user.bio = response.bio;
        this.user.repositories = response.public_repos;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.link = response.html_url;


        resolve();

      },
        error => {

          this.user.avatar = 'https://avatars1.githubusercontent.com/u/47349274?v=4';
          this.user.username = 'mumonzinga';
          this.user.name = 'Mumo Nzinga';
          this.user.bio = 'Mobile Developer';
          this.user.repositories = 23;
          this.user.followers = 0;
          this.user.following = 0;
          this.user.link = 'https://github.com/mumonzinga';

          reject(error);


        });
    });

    return promise;

  }

  userLookup(userName: string) {
    this.userName = userName;
  }


}
