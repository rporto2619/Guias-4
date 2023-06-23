import { Component, OnInit } from '@angular/core';
import { users } from "../../assets/data/users";


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users = users;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
