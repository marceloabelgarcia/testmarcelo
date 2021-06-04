import {
  Component,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss'],
})
export class FormUsersComponent implements OnInit, OnChanges {
  @Input()
  user: User;

  @Output()
  save = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  public id: number;
  public name: string;
  public lastname: string;
  public birth: string;
  public status: number;
  public gender: number;

  constructor() {}

  ngOnInit() {
    this.reload();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.reload();
    }
  }

  private reload() {
    this.name = this.user.name;
    this.lastname = this.user.lastname;

    let birth = this.user.birth;

    if (birth.date !== undefined) {
      birth = birth.date.substr(0, 10);

      this.birth = birth;
    }

    this.status = this.user.status;
    this.gender = this.user.gender;
    this.id = this.user.id;
  }

  public saveUser() {
    const data = {
      name: this.name,
      lastname: this.lastname,
      status: this.status,
      gender: this.gender,
      birth: this.birth,
    };
    this.save.emit(data);
  }

  public deleteUser() {
    const data = {
      name: this.name,
      lastname: this.lastname,
      status: this.status,
      gender: this.gender,
      birth: this.birth,
    };
    this.delete.emit(data);
  }
}
