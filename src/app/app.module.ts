import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NgxMaskModule } from './ngx-mask/ngx-mask.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
