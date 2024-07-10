import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzavazatokComponent } from './szavazatok/szavazatok.component';

const routes: Routes = [
  { path: "szavazatok", component: SzavazatokComponent },
  { path: "", redirectTo: "szavazatok", pathMatch: "full" },
  { path: "**", component: SzavazatokComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
