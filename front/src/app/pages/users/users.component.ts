import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Pageinfo } from '../../models/pageinfo';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    protected usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  public loaded: Boolean = false;
  public users: User[] = [];
  public pageinfo: Pageinfo = { page: 0, count: 0, total: 0 };
  public page = 0;

  field = null;
  dire = null;

  ngOnInit() {
    this.page = parseInt(this.route.snapshot.paramMap.get('page'));
    this.reload();
  }

  loadPage(page) {
    this.page = page;
    this.pageinfo.page = page;
    this.reload();
  }

  loadSort(data) {
    console.log('sort:', data);
    this.field = data.field;
    if (data.direction) this.dire = 'ASC';
    else this.dire = 'DESC';
    this.reload();
  }

  private reload() {
    console.log('recargando...', this.page);

    if (!this.page) this.page = 0;

    this.usersService
      .getUsers(this.page, this.field, this.dire)
      .subscribe((users: any) => {
        this.users = users.results;
        this.pageinfo = users.info;
        this.pageinfo.page = this.page;
        this.loaded = true;
      });
  }
}
