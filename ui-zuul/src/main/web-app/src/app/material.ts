import { NgModule } from '@angular/core';
import {
	MatFormFieldModule,
	MatAutocompleteModule,
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
		MatTabsModule,
		MatDividerModule,
		MatIconModule,
		MatSidenavModule,
		MatBadgeModule,
		MatTooltipModule
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
		MatTabsModule,
		MatDividerModule,
		MatIconModule,
		MatSidenavModule,
		MatBadgeModule,
		MatTooltipModule
	]
})
export class MaterialModules { }
