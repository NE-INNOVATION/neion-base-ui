import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-info",
  templateUrl: "./vehicle-info.component.html",
  styleUrls: ["./vehicle-info.component.css"],
})
export class VehicleInfoComponent implements OnInit, OnDestroy {
  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  navigate(val: string) {
    console.log("Navigating to ", val);
    this._router.navigate([val]);
  }
}
