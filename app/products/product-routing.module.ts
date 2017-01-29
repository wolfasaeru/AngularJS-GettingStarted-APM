import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailGuard} from "./guards/product-detail.guard";
import {ProductDetailComponent} from "./product-detail.component";
/**
 * Created by SSMacProHasael on 1/29/17.
 */

@NgModule({
    imports: [
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
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }