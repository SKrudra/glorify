import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
  ],
  exports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
  ]
})
export class MaterialModules { }
