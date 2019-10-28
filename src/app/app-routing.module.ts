import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginComponent } from './check-login/check-login.component';
import { DemoExportExcelComponent } from './demo-export-excel/demo-export-excel.component';


const routes: Routes = [{
  path:'',
  component:IndexComponent
},
{
path:'login',
component:CheckLoginComponent
},
{
  path:'index',
  component:IndexComponent
},
{
  path:'exportExcel',
  component:DemoExportExcelComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
