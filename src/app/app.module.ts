import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PostComponent } from './components/post/post.component';
import { reducer as postReducer } from '../app/store/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IsEmptyPipe } from './utils/pipe/is-empty.pipe';

const combainedReducer = {
  post: postReducer
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    IsEmptyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(combainedReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([PostEffects]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
