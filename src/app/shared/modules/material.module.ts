import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Module
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
