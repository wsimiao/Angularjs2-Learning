import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { AddProductService} from'./services/add-product.service';
import {UploadImageService} from './services/upload-image.service';
import {GetProductListService} from './services/get-product-list.service';
import { ProductListComponent, DialogResultExampleDialog } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import {GetProductService} from './services/get-product.service';
import {EditProductService} from './services/edit-product.service';
import {EditProductComponent} from 'app/components/edit-product/edit-product.component';
import {RemoveProductService} from './services/remove-product.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewProductComponent,
    ProductListComponent,
    ViewProductComponent,
    EditProductComponent,
    DialogResultExampleDialog
  ],
  entryComponents: [
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    AddProductService,
    UploadImageService,
    GetProductListService,
    GetProductService,
    EditProductService,
    RemoveProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
