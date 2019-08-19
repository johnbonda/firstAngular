import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {SampleModule} from './sample/sample.module';
import { AppRoutesModule } from './app-routes.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { WithEventsComponent } from './with-events/with-events.component';
import { RegistrationComponent } from './registration/registration.component';
import { TBindingComponent } from './t-binding/t-binding.component';
import { ReversePipe } from './reverse.pipe';
import { BadWordsFilterPipe } from './bad-words-filter.pipe';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';
import { MessengerAppComponent } from './messenger-app/messenger-app.component';
import { WorkWithHttpComponent } from './work-with-http/work-with-http.component';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    WithEventsComponent,
    RegistrationComponent,
    TBindingComponent,
    ReversePipe,
    BadWordsFilterPipe,
    AboutComponent,
    ErrorComponent,
    ProductsComponent,
    MessengerAppComponent,
    WorkWithHttpComponent,
    PromisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SampleModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
