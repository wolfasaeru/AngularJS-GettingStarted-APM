import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent}  from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {ProductDetailComponent} from "./products/product-detail.component";
import {ProductFilterPipe} from "./products/pipes/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductDetailGuard} from "./products/guards/product-detail.guard";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id',
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent },
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        ])
    ],
    providers: [
        ProductDetailGuard
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductListComponent,
        ProductDetailComponent,
        StarComponent,
        ProductFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
