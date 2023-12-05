import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { AddUrlComponent } from './views/add-url/add-url.component';
import { UrlsTableComponent } from './views/urls-table/urls-table.component';

const routes: Routes = [
  {
    path:"",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
