import {PipeTransform, Pipe} from "@angular/core";
import {IProduct} from "../product";
/**
 * Created by SSMacProHasael on 1/24/17.
 */

@Pipe({
    name: "productFilter"
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy
            ? filterBy.toLowerCase()
            : null;

        return filterBy
            ? value.filter((product: IProduct) => product.name.toLowerCase().indexOf(filterBy) !== -1)
            : value;
    }
}