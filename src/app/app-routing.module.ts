import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { KitchenTableComponent } from './components/kitchen-table/kitchen-table.component';
import { SetupComponent } from './components/setup/setup.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'kitchentable', component: KitchenTableComponent},
  {path: '**', component: LandingPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
