import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-driver-info",
  templateUrl: "./driver-info.component.html",
  styleUrls: ["./driver-info.component.css"],
})
export class DriverInfoComponent implements OnInit, OnDestroy {
  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  navigate(val: string) {
    console.log("Navigating to ", val);
    this._router.navigate([val]);
  }
}
