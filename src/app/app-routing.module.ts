import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'default-strategy', loadChildren: './default-strategy/default-strategy.module#DefaultStrategyModule' }, 
  { path: 'some-onpush-strategy', loadChildren: './some-onpush-strategy/some-onpush-strategy.module#SomeOnPushStrategyModule' }, 
  { path: '**', redirectTo: 'default-strategy'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
