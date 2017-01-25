import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by SSMacProHasael on 1/25/17.
 */

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            // Should implement an error page
            alert('Invalid product Id');

            this._router.navigate(['/products']);

            return false;
        }

        return true;
    }
}