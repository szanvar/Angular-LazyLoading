import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRouteComponent } from './admin-route/admin-route.component';
import { AdminTasksComponent } from './admin-tasks/admin-tasks.component';

const routes: Routes = [
  {
     path: '', component: AdminRouteComponent,
        children :[
          { path: 'admin-dashboard',component : AdminDashboardComponent}
        ]
  },
  {
    path: '',
   component: AdminRouteComponent,
   children :[
     { path: 'admin-task',component : AdminTasksComponent}
   ],
 }
  // {
  //   path: 'admin-dashboard', component: AdminDashboardComponent
  // },
  // {
  //   path: 'admin-task', component: AdminTasksComponent
  // }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
