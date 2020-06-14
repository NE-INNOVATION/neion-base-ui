import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-rate-component",
  templateUrl: "./rate-component.component.html",
  styleUrls: ["./rate-component.component.css"],
})
export class RateComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  navigate(val: string) {
    this._router.navigate([val]);
  }
}
