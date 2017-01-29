import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductFilterPipe} from "./pipes/product-filter.pipe";
import {ProductDetailGuard} from "./guards/product-detail.guard";
import {ProductService} from "./product.service";
import {SharedModule} from "../shared/shared.module";
import {ProductRoutingModule} from "./product-routing.module";
/**
 * Created by SSMacProHasael on 1/28/17.
 */

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports: [
        ProductRoutingModule,
        SharedModule,
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }