import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatTableModule, 
        MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule, MatCheckboxModule,
        MatSelectModule, MatAutocompleteModule} from '@angular/material';

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
      MatCardModule,
      MatSelectModule,
      MatAutocompleteModule
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
      MatCardModule,
      MatSelectModule,
      MatAutocompleteModule
  ]
})
export class MaterialModules { }
