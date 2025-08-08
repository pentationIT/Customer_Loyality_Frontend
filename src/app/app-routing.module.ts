import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

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


// import { FileUploadNewComponent } from './file-upload-new/file-upload-new.component';
// import { TagicDashboardComponent } from './tagic-dashboard/tagic-dashboard.component';
const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: '',
  component: HeaderComponent,
  children:[

    {
      path: 'home',
      component: DashboardComponent
    },
    {
      path: 'penetration',
      component: PenetrationComponent
    },  
    {
      path: 'upsellopportunity',
      component: UpsellOpportunityComponent
    },
    {
      path: 'winbackopportunity',
      component: WinbackOpportunityComponent

    },
    {
      path: 'Winbackpenetration',
      component: WinbackPenetrationComponent

    },
    {
      path: 'meeting_tracker',
      component: MeetingTrackerComponent
    },    
    {path: 'ppc',
    component: PpcdataComponent},
    {
      path: 'bucketmovement',
      component: BucketmovementComponent
    },
    {path: 'waterfall',
  component: CustomerwaterfallComponent}

  
  ,{path: 'user-list',
    component: UserDetailsComponent}

  ]
},{
  path: 'register',
  component: RegisterUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
