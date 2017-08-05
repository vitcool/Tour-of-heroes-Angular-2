import { Component, OnInit } from "@angular/core";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroService } from "./hero.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HeroService]
})
export class AppComponent {
  title = "Tour of Heroes";

  constructor() {}
}
