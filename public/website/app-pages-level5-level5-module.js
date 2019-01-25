(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-level5-level5-module"],{

/***/ "./src/app/pages/level5/level5-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/level5/level5-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Level5RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5RoutingModule", function() { return Level5RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level5.component */ "./src/app/pages/level5/level5.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _level5_component__WEBPACK_IMPORTED_MODULE_2__["Level5Component"]
    }
];
var Level5RoutingModule = /** @class */ (function () {
    function Level5RoutingModule() {
    }
    Level5RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Level5RoutingModule);
    return Level5RoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/level5/level5.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/level5/level5.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\" fxLayout=\"column\">\r\n\r\n  <fury-breadcrumbs current=\"Level 5 - Wow such deep!\"\r\n                    [crumbs]=\"['Level 1', 'Level 2', 'Level 3', 'Level 4']\"></fury-breadcrumbs>\r\n\r\n  <fury-card>\r\n    <fury-card-header>\r\n      <fury-card-header-title>Level 5</fury-card-header-title>\r\n      <fury-card-header-sub-title>Not as deep as you can go.</fury-card-header-sub-title>\r\n    </fury-card-header>\r\n\r\n    <fury-card-content>\r\n      <div>\r\n        You went so deep, wow! But this is not even as deep as you can go, Fury supports UNLIMITED Levels in the Menu.\r\n        <br>\r\n        <br>Now go ahead and explore the other great pages of Fury. Have you seen the <strong>awesome </strong> <a\r\n        [routerLink]=\"['/apps/inbox']\">Inbox Component</a>?\r\n      </div>\r\n    </fury-card-content>\r\n  </fury-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/level5/level5.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/level5/level5.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/level5/level5.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/level5/level5.component.ts ***!
  \**************************************************/
/*! exports provided: Level5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5Component", function() { return Level5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Level5Component = /** @class */ (function () {
    function Level5Component() {
    }
    Level5Component.prototype.ngOnInit = function () {
    };
    Level5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-level5',
            template: __webpack_require__(/*! ./level5.component.html */ "./src/app/pages/level5/level5.component.html"),
            styles: [__webpack_require__(/*! ./level5.component.scss */ "./src/app/pages/level5/level5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Level5Component);
    return Level5Component;
}());



/***/ }),

/***/ "./src/app/pages/level5/level5.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/level5/level5.module.ts ***!
  \***********************************************/
/*! exports provided: Level5Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5Module", function() { return Level5Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/card/card.module */ "./src/app/shared/card/card.module.ts");
/* harmony import */ var _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level5-routing.module */ "./src/app/pages/level5/level5-routing.module.ts");
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level5.component */ "./src/app/pages/level5/level5.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Level5Module = /** @class */ (function () {
    function Level5Module() {
    }
    Level5Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Level5RoutingModule"],
                _shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__["FuryCardModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsModule"]
            ],
            declarations: [_level5_component__WEBPACK_IMPORTED_MODULE_5__["Level5Component"]]
        })
    ], Level5Module);
    return Level5Module;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-level5-level5-module.js.map