import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedDependenciesModule } from './@shared-dependencies/shared-dependencies.module';
import { SharedModule } from './@shared/shared.module';
import { CardComponent } from './gridList/card/card.component';
import { AppRoutes } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ClientComponent } from './gridList/client/client.component';
import { ProductComponent } from './gridList/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClientComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    SharedDependenciesModule,
    SharedModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
