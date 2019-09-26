import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AuthGaurd } from './auth-gaurd.service';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  // { path: 'parent', canActivate: [AuthGaurd], component: ParentComponent },
  { path: 'parent', canActivateChild: [AuthGaurd], component: ParentComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
