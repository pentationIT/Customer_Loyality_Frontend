import {Component, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Router, RouteConfigLoadStart, RouteConfigLoadEnd} from '@angular/router';
import {CommonService} from '../common.service';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NotifierService} from "angular-notifier";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    reg_email_id = ''
    showPassword = false;
    username = '';
    password = '';

    page = 1;
    isRenewal = 1 as any;
    // isEmployeeMaster = false as any; 

    constructor(private router: Router, private rest: RestApiService,
                private common: CommonService, private ngxService: NgxUiLoaderService,
                private notifier: NotifierService, private modalService:NgbModal) {
    }

    ngOnInit(): void {
        // this.common.islogIn();
        if(sessionStorage.getItem("userDetails")!=null || sessionStorage.getItem("userDetails")!=undefined){
            // this.logout()
            this.router.navigate(['/home']);
        }
        
    }

    // toggleRights(){
    //     if (this.isRenewal == true){
    //         this.isEmployeeMaster == false
    //     }
    //     else if (this.isEmployeeMaster == true){
    //         this.isRenewal == false
    //     }
    // }

    checkUserName(): any {
        if (this.username.trim() === '') {
            this.showToaster('error', 'Please enter the username');
            return false;
        }
        
        const data = {
            username: this.username,
            
            // isRenewal: this.isRenewal,
        };
        
        this.rest.checkusername(data).subscribe((res: any) => {
            // this.ngxService.stop();
            console.log("res>>>>",res)
            console.log(res.success)
            if (res.success) {
            console.log(res.success)

                this.page = 2;
                
            } else {
                this.showToaster('error', 'Invalid User Name');
            }
        }, (err: any) => {
        });
    }


    login(): any {
        if (this.username.trim() === '') {
            this.showToaster('error', 'Please enter the username');
            return false;
        }
        if (this.password.trim() === '') {
            this.showToaster('error', 'Please enter the password');
            return false;
        }
        const data = {
            username: this.username,
            passKey: this.password,
            // isRenewal: this.isRenewal,
        };
        const date = new Date();
        const time = date.getTime();
        this.ngxService.start();
        this.rest.login(data).subscribe((res: any) => {
            this.ngxService.stop();
            if (res.success) {
                if (res.userDetails == null) {
                    this.showToaster('error', 'User not found.');
                } else {
                    sessionStorage.setItem("userDetails", JSON.stringify(res.userDetails));
                    sessionStorage.setItem("userRights", JSON.stringify(res.userRights));
                 
                    


                    this.router.navigate(['/home']);
                }
            } else {
                this.showToaster('error', 'Login Failed');
            }
        }, (err: any) => {
        });
    }

    showToaster(type: string, message: string, flag: number = 1) {
        if (flag === 1) {
            this.notifier.notify(type, message);
            setTimeout(() => {
                this.notifier.hideAll();
            }, 5000);
        } else {
            this.notifier.notify(type, message);
        }
    }

    fotgotPassword(){
        const data = {
            email_id: this.reg_email_id
        }
        this.rest.forgotPassword(data).subscribe((res:any)=>{
            if(res.success){
                this.notifier.notify('success',res.message);
                this.modalService.dismissAll();

            }else{
                this.notifier.notify('error',res.message);
            }
        })

    }
    openModal(modal:any){
        this.modalService.open(modal, {size:'sm'})
      }
    
   
}
