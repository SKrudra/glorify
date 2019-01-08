import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule
  ],
  exports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule
  ]
})
export class MaterialModules { }
