import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {

  /** Observer to show / Hide Dashboard */
  public dashboardObserver = new BehaviorSubject({});
  dashboardDataAvailable = this.dashboardObserver.asObservable();

  public dashboardStatusObserver = new BehaviorSubject(false);
  dashboardStatus = this.dashboardStatusObserver.asObservable();

    /* Hold Users List */
    userList: any = [
        {firstName: "Anum",lastName: "Sheikh", userName: "anum", password: "123"},
        {firstName: "Safeer",lastName: "Jan", userName: "saf", password: "123"}
    ];

    constructor() { }

    addData(data: Object) {
        this.userList.push(data);
        console.log("UserList :", this.userList);
    }

    getUserList(){
      return this.userList;
    }

    changeDashboardData(data: Object) {
      this.dashboardObserver.next(data)
    }

    changeDashboardStatus(status: boolean) {
      this.dashboardStatusObserver.next(status)
    }

}
