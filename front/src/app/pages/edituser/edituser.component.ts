import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
})
export class EdituserComponent implements OnInit {
  constructor(
    protected usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public loaded: Boolean = false;
  public user: User = {
    name: '',
    lastname: '',
    birth: '',
    status: 0,
    gender: 0,
  };
  public id = 1;

  public showAlert = false;
  public msg = '';

  public saveUser(data: any) {
    console.log('save...', this.id, data);

    this.usersService.updateUser(this.id, data).subscribe((result: any) => {
      console.log('result: ', result);
      this.showMessage(result);
    });
  }

  public deleteUser(data: any) {
    console.log('save...', this.id, data);

    this.usersService.deleteUser(this.id).subscribe((result: any) => {
      this.showMessage(result);

      setTimeout(() => {
        if (result.status) {
          this.router.navigateByUrl('/users');
        }
      }, 2100);
    });
  }

  private showMessage(result: any) {
    if (result.status) {
      this.msg = result.status;
    } else {
      this.msg = 'Error';
    }

    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(this.id).subscribe((user: User) => {
      this.user = user;
      this.loaded = true;
    });
  }
}
