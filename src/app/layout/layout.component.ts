import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "./services/data.service";
 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  /** Show Dashboard when Data is available */
  showDashboard: boolean = false;

  /** Show Dashboard when Data is available */
  userName: string;
  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.dashboardDataAvailable.subscribe((data: any) => {

      if (typeof data !== 'undefined') {
        this.showDashboard = true;
        this.userName = data.userName;
      }
    });

    this.dataService.dashboardStatus.subscribe((status: any) => {
      this.showDashboard = status ? true : false;
    })
  }

}
