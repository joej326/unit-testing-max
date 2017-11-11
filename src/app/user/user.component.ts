import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  providers: [UserService, ServerService]
})
export class UserComponent implements OnInit {

  user: {name: string};
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private serverService: ServerService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
