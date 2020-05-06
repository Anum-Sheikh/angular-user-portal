import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "../services/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input() userName: any;

  /** Holds User Details */
  userDetails: any = {firstName : null, lastName: null, userName: null, password: null}
  
  /** Holds User List */
  userList: any = [];

  constructor(
    private toastr: ToastrService,
    private dataService: SharedDataService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    let userName  = changes.userName.currentValue;
    this.userList = this.dataService.getUserList();

    if (typeof userName !== 'undefined') {

      this.userDetails = {};
      this.userDetails = this.userList.find(x => x.userName == userName);
      console.log("User Details :", this.userDetails);

    }
  }

  public logoutUser(){
    this.dataService.changeDashboardStatus(false);
  }

}
