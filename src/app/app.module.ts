import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { DatePipe } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FooterComponent} from "../../src/app/footer/footer.component";
import { IntercepterService } from './intercepter.service';

import { FilterPipe } from './filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { NgCircleProgressModule } from 'ng-circle-progress';
import { CanvasJSAngularChartsModule } from '@canvasjs/charts/canvasjs.min.js';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingTrackerComponent } from './meeting-tracker/meeting-tracker.component';
import { PenetrationComponent } from './penetration/penetration.component';
import { PpcdataComponent } from './ppcdata/ppcdata.component';
import { BucketmovementComponent } from './bucketmovement/bucketmovement.component';
import { CustomerwaterfallComponent } from './customerwaterfall/customerwaterfall.component';
import { UpsellOpportunityComponent } from './upsell-opportunity/upsell-opportunity.component';
import { WinbackOpportunityComponent } from './winback-opportunity/winback-opportunity.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WinbackPenetrationComponent } from './winback-penetration/winback-penetration.component';


const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12,
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    FilterPipe ,
    DashboardComponent,
    MeetingTrackerComponent,
    PenetrationComponent,
    PpcdataComponent,
    BucketmovementComponent,
    CustomerwaterfallComponent,
    UpsellOpportunityComponent,
    WinbackOpportunityComponent,
    RegisterUserComponent,
    UserDetailsComponent,
    WinbackPenetrationComponent,
    
  ],
  imports: [
    // CanvasJSAngularChartsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    DragDropModule,
    MatRadioModule,
    NgxUiLoaderModule,
    MatSnackBarModule,
    MatSelectModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    NgMultiSelectDropDownModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    NgMaterialMultilevelMenuModule,
    MatProgressSpinnerModule,
    // CanvasJSAngularChartsModule
    
    // NgCircleProgressModule.forRoot({
    //   // set defaults here
    //   radius: 100,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animationDuration: 300,
      
    // })
  ],
  providers: [DatePipe, {provide: OWL_DATE_TIME_LOCALE, useValue: 'en-IN'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }, MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
