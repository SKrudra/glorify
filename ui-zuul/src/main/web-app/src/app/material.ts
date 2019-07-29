import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule} from '@angular/material';
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
      MatCheckboxModule,
      MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatSnackBarModule
  ]
})
export class MaterialModules { }
