import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [SidenavListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidenavListComponent]
})
export class SidenavListModule {}
