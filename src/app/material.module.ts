import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDialogModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDialogModule
    ]
})

export class MaterialModule{

}