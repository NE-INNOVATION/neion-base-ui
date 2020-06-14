import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-incident-info",
  templateUrl: "./incident-info.component.html",
  styleUrls: ["./incident-info.component.css"],
})
export class IncidentInfoComponent implements OnInit, OnDestroy {
  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  navigate(val: string) {
    this._router.navigate([val]);
  }
}
