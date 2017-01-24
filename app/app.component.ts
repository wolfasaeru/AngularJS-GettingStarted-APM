import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products>Loading products...</pm-products>
        </div>
    `,
    providers: [ProductService] //LOAD SERVICES FOR THIS COMPONENTS AND ITS CHILDREN
})
export class AppComponent {
    pageTitle: string = 'Acme IProduct Management';
}