import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RateComponent } from "./rate-issue/rate-component/rate-component.component";
import { PolicyInfoComponent } from "./rate-issue/policy-info/policy-info.component";
import { VehicleInfoComponent } from "./vehicle-information/vehicle-info/vehicle-info.component";
import { CustomerInfoComponent } from "./customer-information/customer-info/customer-info.component";
import { DriverInfoComponent } from './driver-information/driver-info/driver-info.component';
import { IncidentInfoComponent } from './incident-information/incident-info/incident-info.component';

const routes: Routes = [
  { path: "home", component: CustomerInfoComponent },
  { path: "vehicle", component: VehicleInfoComponent },
  { path: 'driver', component: DriverInfoComponent },
  { path: 'incident', component: IncidentInfoComponent },
  { path: "rate", component: RateComponent },
  { path: "policy", component: PolicyInfoComponent },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //OktaAuthModule
  ],
  exports: [
    RouterModule,
    //OktaAuthModule
  ],
  // providers: [
  //   { provide: OKTA_CONFIG, useValue: config.oidc },
  // ],
})
export class AppRoutingModule {}
