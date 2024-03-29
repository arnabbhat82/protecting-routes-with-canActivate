import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, AuthGaurd],
  bootstrap: [AppComponent],
})
export class AppModule {}
