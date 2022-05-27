import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommitHistoryComponent } from './commit-history/commit-history.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ApigithubService } from './apigithub.service';

@NgModule({
  declarations: [
    AppComponent,
    CommitHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule
  ],
  providers: [ApigithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
