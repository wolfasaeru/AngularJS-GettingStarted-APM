"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
/**
 * Created by SSMacProHasael on 1/24/17.
 */
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = "Product Detail";
        this.productName = "";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this.getProduct(id);
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.requestProduct(id)
            .subscribe(function (product) {
            _this.product = product;
            _this.productName = ": " + product.name;
        }, function (error) { return _this.errorMessage = error; });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "product-detail.component.html",
        styleUrls: ["product-list.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map