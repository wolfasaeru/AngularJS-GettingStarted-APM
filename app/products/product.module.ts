import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductFilterPipe} from "./pipes/product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductDetailGuard} from "./guards/product-detail.guard";
import {ProductService} from "./product.service";
/**
 * Created by SSMacProHasael on 1/28/17.
 */

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'product/:id',
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent
            },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }