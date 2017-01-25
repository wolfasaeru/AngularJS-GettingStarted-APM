import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
/**
 * Created by SSMacProHasael on 1/24/17.
 */

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-list.component.css"]
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) { }

    ngOnInit(): void {
        let id: number = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._productService.requestProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
            );
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}