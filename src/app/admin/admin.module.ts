import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTasksComponent } from './admin-tasks/admin-tasks.component';
import { AdminRouteComponent } from './admin-route/admin-route.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, AdminTasksComponent, AdminRouteComponent]
})
export class AdminModule { }
