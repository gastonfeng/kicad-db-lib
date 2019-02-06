import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { PartsComponent } from "./parts/parts.component";
import { PartDetailComponent } from "./part-detail/part-detail.component";
import { SettingsComponent } from "./settings/settings.component";
import { SettingsFieldsComponent } from "./settings-fields/settings-fields.component";
import { SettingsPathsComponent } from "./settings-paths/settings-paths.component";

const routes: Routes = [
  { path: "", redirectTo: "/parts", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "hero/:id", component: HeroDetailComponent },
  { path: "parts", component: PartsComponent },
  { path: "part/:id", component: PartDetailComponent },
  { path: "settings", component: SettingsComponent },
  { path: "settings/fields", component: SettingsFieldsComponent },
  { path: "settings/paths", component: SettingsPathsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}