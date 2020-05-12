import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';

const layoutRoutes: Routes = [
    {
        path: 'dashboard',            //<---- parent component declared here
        component: DashboardComponent,
    },
    // {
    //     path: 'dashboard',            //<---- parent component declared here
    //     component: LayoutComponent,
    //     children: [ 
    //         { path: '',   component: DashboardComponent },
    //     ]
    // }
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(layoutRoutes)],
    exports: [RouterModule]
  })

export class LayoutRoutingModule { }