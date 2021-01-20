import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DistrictComponent} from "./pages/district/district.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'district', component:DistrictComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
