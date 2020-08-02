import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemOptionsComponent } from './components/item-options/item-options.component';

// Custom Ng
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ng Material
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { ReceiptComponent } from './components/receipt/receipt.component';
// import { ReceiptResolver } from './_resolvers/receipt-resolver';
// import { CartResolver } from './_resolvers/cart-resolver';
import { ReceiptGuard } from './_guards/receipt.guard';
import { CartGuard } from './_guards/cart.guard';
import { CheckoutService } from './_services/checkout.service';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemOptionsComponent,
    CartComponent,
    HomeComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Custom imports
    MatRippleModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    // ReceiptResolver,
    // CartResolver,
    ReceiptGuard,
    CartGuard,
    CheckoutService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
