/**
 * Created by SSMacProHasael on 1/24/17.
 */
import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
    selector: "pm-products",
    moduleId: module.id,
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List!";
    imageWidth: number = 50;    //PROPERTY BINDING
    imageMargin: number = 2;    //PROPERTY BINDING
    showImage: boolean = false;
    filterStr: string; //TWO-WAY BINDING
    products: IProduct[];

    // DEPENDENCY INJECTION
    constructor (private _productService: ProductService) {}

    ngOnInit(): void {
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}