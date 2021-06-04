import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { GenderPipe } from '../../pipes/gender.pipe';
import { StatusPipe } from '../../pipes/status.pipe';
import { TableUsersComponent } from '../../components/table-users/table-users.component';
import { PageFooterComponent } from '../../components/page-footer/page-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, BrowserModule],
  declarations: [
    UsersComponent,
    TableUsersComponent,
    PageFooterComponent,
    GenderPipe,
    StatusPipe,
  ],
})
export class UsersModule {}
