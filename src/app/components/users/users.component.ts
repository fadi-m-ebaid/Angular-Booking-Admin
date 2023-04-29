import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserapiService } from 'src/app/services/userapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  Users: IUser[] = [];

  constructor(private userApi: UserapiService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.userApi.getAllUsers().subscribe((data) => {
      this.Users = data;
    
    });
  }
  toggelActivity(user:any){
    this.http.patch(`${environment.APIBaseURL}/users/changeactivity/${user}`, {}).subscribe(
      (response) => {
        console.log('Toggle activity successful', response);
          this.ngOnInit();
      },
      (error) => {
        console.error('Toggle activity failed', error);
      }
    );
  
  }
  
}
