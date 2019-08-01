import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatTableModule, 
        MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      MatFormFieldModule, 
      MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatCardModule
  ],
  exports: [
      MatFormFieldModule, 
      MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatCardModule
  ]
})
export class MaterialModules { }
