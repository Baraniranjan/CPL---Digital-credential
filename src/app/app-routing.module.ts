import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HRCreateTemplateComponent } from './hr/hr-create-template/hr-create-template.component';
import { HRViewTemplateComponent } from './hr/hr-view-template/hr-view-template.component';

const routes: Routes = [
  {  path: 'hr-create-template',component: HRCreateTemplateComponent},
  {  path: 'hr-view-template',component: HRViewTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
