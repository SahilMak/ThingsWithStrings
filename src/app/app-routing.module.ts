import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'bass', loadChildren: () => import('./bass/bass.module').then(m => m.BassModule) },
  { path: 'guitar', loadChildren: () => import('./guitar/guitar.module').then(m => m.GuitarModule) },
  { path: 'orchestral', loadChildren: () => import('./orchestral/orchestral.module').then(m => m.OrchestralModule) },
  { path: 'world', loadChildren: () => import('./world/world.module').then(m => m.WorldModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
