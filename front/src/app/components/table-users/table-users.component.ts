import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  @Input()
  users: User[] = [];

  @Output()
  sort = new EventEmitter();

  constructor() {}

  direction = {
    name: false,
    lastname: false,
    birth: false,
    status: false,
    gender: false,
  };

  sortfield = '';

  public sorter(field: string) {
    this.sortfield = field;
    const direction = this.direction[field];
    this.sort.emit({ field, direction });
    this.direction[field] = !this.direction[field];
  }

  ngOnInit() {}
}
