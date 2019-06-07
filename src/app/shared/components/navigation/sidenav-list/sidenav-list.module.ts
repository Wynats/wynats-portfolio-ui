import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [SidenavListComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
  exports: [MatListModule, MatIconModule, SidenavListComponent]
})
export class SidenavListModule {}
