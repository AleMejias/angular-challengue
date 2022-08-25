import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users: Users[] = [];

  prueba!: Subscription;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {


    this.usersService.getUsers().subscribe(( response ) => {

      this.users = response;

    })
  }

}
