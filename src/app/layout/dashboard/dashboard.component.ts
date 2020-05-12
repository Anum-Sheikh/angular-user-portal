import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "../../services/data.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  userName: any;
  showDashboard: boolean = false;

  /** Holds User Details */
  userDetails: any = {firstName : null, lastName: null, userName: null, password: null}
  
  /** Holds User List */
  userList: any = [];

  constructor(
    private toastr: ToastrService,
    private dataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Dashboard");
    this.dataService.dashboardDataAvailable.subscribe((data: any) => {
 
      if (data.userName) {
       
        this.userName = data.userName;
        this.userList = this.dataService.getUserList();

        if (typeof this.userName !== 'undefined') {
          this.userDetails = {};
          this.userDetails = this.userList.find(x => x.userName == this.userName);
          this.showDashboard = true;
          console.log("User Details :", this.userDetails);
    
        }
      }else{
        this.navigateToLogin();
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    let userName  = changes.userName.currentValue;
  
  }

  public logoutUser(){
    this.navigateToLogin();
  }

  public navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
