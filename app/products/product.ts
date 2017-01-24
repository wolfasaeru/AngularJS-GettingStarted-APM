/**
 * Created by SSMacProHasael on 1/24/17.
 */

export interface IProduct {
    id: number;
    name: string;
    description: string;
    code: string;
    releaseDate: string;
    price: number;
    rating: number;
    imageUrl: string;

    // calculateDiscount(percent: number): number;
}