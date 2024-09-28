import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path :'', redirectTo: 'home', pathMatch:'full'},
{ path :'home', component:HomeComponent},
{ path : 'services', component:ServicesComponent},
{ path : 'reports', component :ReportsComponent},
{ path : 'booking', component :BookingComponent},
{ path : 'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
