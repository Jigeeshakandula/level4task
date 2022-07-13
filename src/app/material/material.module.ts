import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents = [
  MatInputModule,
  FormsModule,
  MatIconModule,
  ReactiveFormsModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSelectModule
  
]

@NgModule({
  imports: [
   
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
