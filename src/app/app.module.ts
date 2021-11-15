import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeftBranchParentComponent } from './left-branch-parent/left-branch-parent.component';
import { LeftBranchChild1Component } from './left-branch-child1/left-branch-child1.component';
import { LeftBranchChild2Component } from './left-branch-child2/left-branch-child2.component';
import { RightBranchParentComponent } from './right-branch-parent/right-branch-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftBranchParentComponent,
    LeftBranchChild1Component,
    LeftBranchChild2Component,
    RightBranchParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
