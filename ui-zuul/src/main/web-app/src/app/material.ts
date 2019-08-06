import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatTableModule, 
        MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule, MatCheckboxModule,
        MatSelectModule, MatAutocompleteModule, MatTabsModule} from '@angular/material';

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
      MatAutocompleteModule,
      MatTabsModule
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
      MatAutocompleteModule,
      MatTabsModule
  ]
})
export class MaterialModules { }
