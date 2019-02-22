import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './default-strategy/post-list/post-list.component'
import { PostComponent } from './default-strategy/post/post.component';
import { CommentListComponent } from './default-strategy/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    CommentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
