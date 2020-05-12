import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
    ],
    declarations: [LayoutComponent, DashboardComponent]
})
export class LayoutModule {}