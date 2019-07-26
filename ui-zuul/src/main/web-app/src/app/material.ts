import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule
  ]
})
export class MaterialModules { }
