import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgqAutonumericModule } from './modules/ngq-autonumeric/ngq-autonumeric.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgqAutonumericModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
