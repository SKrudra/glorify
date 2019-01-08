import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
      MatInputModule
  ],
  exports: [
    MatToolbarModule,
      MatInputModule
  ]
})
export class MaterialModules { }
