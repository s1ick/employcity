import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './buisness-page/banner/banner.component';
import { ContentComponent } from './buisness-page/content/content.component';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './buisness-page/content/form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AboutPageComponent } from './about-page/about-page.component';
import { BuisnessPageComponent } from './buisness-page/buisness-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import {MatIconModule} from '@angular/material/icon';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContentComponent,
    FormComponent,
    AboutPageComponent,
    BuisnessPageComponent,
    PricePageComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    PerfectScrollbarModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
