import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GreeterComponent} from './greeter.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [GreeterComponent],
  exports: [GreeterComponent]
})
export class GreeterModule {
}
