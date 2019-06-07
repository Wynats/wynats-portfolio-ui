import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule]
})
export class HeaderModule {}
