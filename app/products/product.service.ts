import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {IProduct} from "./product";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";
/**
 * Created by SSMacProHasael on 1/24/17.
 */

@Injectable()
export class ProductService {
    private _productListUrl: string = "api/products/products.json";
    constructor(private _http: Http) { }

    requestProductList(): Observable<IProduct[]> {
        return this._http.get(this._productListUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: ", JSON.stringify(data)))
            .catch(this.handleError);
    }

    requestProduct(id: number): Observable<IProduct> {
        return this._http.get(this._productListUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .flatMap((array, index) => array)
            .filter(product => product.id == id)
            .do(data => console.log("All: ", JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProducts(): IProduct[] {
        return [
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
            },
            {
                "id": 5,
                "name": "Hammer",
                "code": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "rating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "id": 8,
                "name": "Saw",
                "code": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "rating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "id": 10,
                "name": "Video Game Controller",
                "code": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "rating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ];
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}