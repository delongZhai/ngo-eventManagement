import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule  
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
