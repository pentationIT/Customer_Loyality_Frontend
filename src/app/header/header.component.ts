import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router, RouteConfigLoadStart, RouteConfigLoadEnd} from '@angular/router';
import {CommonService} from '../common.service';
import { RestApiService } from '../rest-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NotifierService} from "angular-notifier";
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  
  
  
  export class HeaderComponent implements OnInit {

    currentpassword = '';
    newpassword = '';
    confirmpassword = '';


    userPage = 0;
    
    clickedLink = '' as any
    // currentLink = '' as any
    menuColor = ''
    showFiller = false;
    autosize = true
    current_date = '' as any
    lastLoginTime = this.common.getUserLogInTime();

    userName = this.common.getUserName();
    userAgentId = this.common.getUserAgentId();
    first_login = this.common.getFirstLogin();
    userDesignation = this.common.getUserDesignation();
  
    constructor(private datePipe: DatePipe, private route: ActivatedRoute,private router: Router, private common: CommonService, private modalService:NgbModal, private rest:RestApiService, private notifier: NotifierService) {
      const currentDate = new Date();
      this.current_date = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    }
  
    ngOnInit(): void {
      if (this.first_login == 1){
        document.getElementById('passwordchng')?.click();
      }
      console.log("this.router.url",this.router.url);
      if(this.router.url == '/user-list'){
        this.userPage = 1;
      }
      // this.currentLink = String(window.location.href)
      // console.log(this.currentLink)
      if(sessionStorage.getItem("userDetails")==null || sessionStorage.getItem("userDetails")==undefined){
        this.logout()
        // this.router.navigate(['/login']);
      }
      // this.menuColor = 'rgb(123, 191, 255)'
    }
    logout(){
      
      sessionStorage.removeItem("userDetails");
      sessionStorage.removeItem("userRights");
      this.router.navigate(['/login']);
    }
    goToUser(){
      this.userPage = 1;
      this.router.navigate(['/user-list']);
    }
    changeUserPassword(){
      const data = {
        currentpassword: this.currentpassword,
        newpassword: this.newpassword,
        confirmpassword: this.confirmpassword,
        user_agent_id: this.userAgentId,
      }
      this.rest.changeUserPassword(data).subscribe((res:any)=>{
        if(res.success){
          this.notifier.notify('success', res.message);
          this.modalService.dismissAll();
        }
        else{
          this.notifier.notify('error', 'some error occurred');
        }

      })
    }

    openModal(modal:any){
      this.modalService.open(modal, {size:'sm'})
    }

    wenbackPenCon(){
      window.alert("Sorry! This page is under construction")
    }
  
  }