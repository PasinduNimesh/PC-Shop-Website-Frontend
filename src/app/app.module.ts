import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './full.component/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
 import { MatButtonModule } from '@angular/material/button';
 import { MatButtonToggleModule } from '@angular/material/button-toggle';
 import { MatCardModule } from '@angular/material/card';
 import { MatCheckboxModule } from '@angular/material/checkbox';
 import { MatChipsModule } from '@angular/material/chips';
 import { MatDatepickerModule } from '@angular/material/datepicker';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatExpansionModule } from '@angular/material/expansion';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatGridListModule } from '@angular/material/grid-list';
 import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
 import { MatListModule } from '@angular/material/list';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatPaginatorModule } from '@angular/material/paginator';
 import { MatProgressBarModule } from '@angular/material/progress-bar';
 import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 import { MatRadioModule } from '@angular/material/radio';
 import { MatSelectModule } from '@angular/material/select';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatSliderModule } from '@angular/material/slider';
 import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatSortModule } from '@angular/material/sort';
 import { MatTableModule } from '@angular/material/table';
 import { MatTabsModule } from '@angular/material/tabs';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatTooltipModule } from '@angular/material/tooltip';
 import { MatStepperModule } from '@angular/material/stepper';
 import { MatBadgeModule } from '@angular/material/badge';
 import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
 import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { SubdetailsComponent } from './subdetails/subdetails.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DesktopsComponent } from './products/desktops/desktops.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { ProductComponent } from './product/product.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { QuotationComponent } from './quotation/quotation.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    DialogComponent,
    SubdetailsComponent,
    ChildcompComponent,
    NavigationComponent,
    DesktopsComponent,
    LaptopsComponent,
    AccessoriesComponent,
    ProductComponent,
    UploadImageComponent,
    ViewProductComponent,
    QuotationComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatBadgeModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
