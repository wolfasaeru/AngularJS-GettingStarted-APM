/**
 * Created by SSMacProHasael on 1/24/17.
 */
import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";

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
    filterStr: string = "cart"; //TWO-WAY BINDING
    products: IProduct[] = [
        {
            "id": 1,
            "name": "Leaf Rake",
            "code": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "rating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "id": 2,
            "name": "Garden Cart",
            "code": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "rating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];


    ngOnInit(): void {
        console.log('In OnInit');
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}