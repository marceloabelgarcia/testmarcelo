import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormUsersComponent } from '../../components/form-users/form-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, BrowserModule, FormsModule],
  declarations: [EdituserComponent, FormUsersComponent],
})
export class EdituserModule {}
