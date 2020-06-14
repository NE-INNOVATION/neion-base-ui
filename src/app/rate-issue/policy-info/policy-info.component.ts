import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-policy-info",
  templateUrl: "./policy-info.component.html",
  styleUrls: ["./policy-info.component.css"],
})
export class PolicyInfoComponent implements OnInit, OnDestroy {
  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  navigate(val: string) {
    this._router.navigate([val]);
  }
}
