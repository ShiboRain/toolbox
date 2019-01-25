(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-apps-inbox-inbox-module"],{

/***/ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Compose Mail</h2>\n\n<mat-dialog-content fxLayout=\"column\">\n  <mat-form-field>\n    <mat-label>From</mat-label>\n    <input value=\"davidsmith@example.com\" matInput disabled>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>To</mat-label>\n    <input matInput required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Subject</mat-label>\n    <input matInput>\n  </mat-form-field>\n\n  <quill-editor [style]=\"{ height: '100px' }\"\n                placeholder=\"Write your message\"></quill-editor>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"24px\">\n  <button type=\"button\" mat-icon-button>\n    <mat-icon>attach_file</mat-icon>\n  </button>\n  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"dialogRef.close()\">\n    SEND\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.ts ***!
  \***************************************************************************/
/*! exports provided: InboxComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComposeComponent", function() { return InboxComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComposeComponent = /** @class */ (function () {
    function InboxComposeComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InboxComposeComponent.prototype.ngOnInit = function () {
    };
    InboxComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-compose',
            template: __webpack_require__(/*! ./inbox-compose.component.html */ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.html"),
            styles: [__webpack_require__(/*! ./inbox-compose.component.scss */ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], InboxComposeComponent);
    return InboxComposeComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div matDialogTitle>Confirm your action</div>\r\n\r\n<mat-dialog-content>\r\n  {{ content }}\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\">\r\n  <button type=\"button\" mat-button (click)=\"cancel()\">CANCEL</button>\r\n  <button type=\"button\" mat-button color=\"warn\" (click)=\"confirm()\">CONFIRM</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InboxMailConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailConfirmDialogComponent", function() { return InboxMailConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InboxMailConfirmDialogComponent = /** @class */ (function () {
    function InboxMailConfirmDialogComponent(options, dialogRef) {
        this.options = options;
        this.dialogRef = dialogRef;
    }
    InboxMailConfirmDialogComponent.prototype.ngOnInit = function () {
        this.content = this.options.content;
    };
    InboxMailConfirmDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    InboxMailConfirmDialogComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
    };
    InboxMailConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail-confirm-dialog',
            template: __webpack_require__(/*! ./inbox-mail-confirm-dialog.component.html */ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail-confirm-dialog.component.scss */ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], InboxMailConfirmDialogComponent);
    return InboxMailConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" mat-icon-button [matMenuTriggerFor]=\"labelMenu\">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</button>\r\n\r\n<mat-menu #labelMenu=\"matMenu\" class=\"fury-inbox-mail-label-list-menu\">\r\n  <div class=\"fury-inbox-mail-label-list-menu-subheading\" (click)=\"$event.stopPropagation()\">Create Label</div>\r\n  <form [formGroup]=\"labelGroup\" (submit)=\"createLabel()\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"fury-inbox-mail-label-list-create\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\">\r\n      <mat-form-field fxFlex=\"30%\" class=\"fury-inbox-mail-label-list-color\">\r\n        <mat-label>Color</mat-label>\r\n        <mat-select panelClass=\"fury-inbox-mail-label-list-color-select\" formControlName=\"color\">\r\n          <mat-option *ngFor=\"let color of colors$ | async\" [value]=\"color.code\">\r\n            <span class=\"fury-inbox-mail-label-list-color-select-indicator\" [style.background]=\"color.code\"></span>\r\n            <span>{{ color.name }}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex=\"70%\" class=\"fury-inbox-mail-label-list-name\">\r\n        <mat-label>Label Name</mat-label>\r\n        <input matInput formControlName=\"name\">\r\n      </mat-form-field>\r\n      <button type=\"submit\" mat-icon-button color=\"primary\" [disabled]=\"labelGroup.invalid\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"fury-inbox-mail-label-list-menu-subheading\" (click)=\"$event.stopPropagation()\"\r\n       *ngIf=\"availableLabels?.length > 0\">Use an Existing Label\r\n  </div>\r\n  <button *ngFor=\"let label of availableLabels\" mat-menu-item (click)=\"selectLabelButton($event, label)\">\r\n    <mat-checkbox [checked]=\"labelSelected(label)\" (change)=\"selectLabel($event, label)\"></mat-checkbox>\r\n    {{ label.name }}\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n.mat-icon {\n  color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: InboxMailLabelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailLabelListComponent", function() { return InboxMailLabelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inbox.service */ "./src/app/pages/apps/inbox/inbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxMailLabelListComponent = /** @class */ (function () {
    function InboxMailLabelListComponent(inboxService, fb) {
        this.inboxService = inboxService;
        this.fb = fb;
        this.icon = 'label';
        this.addLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InboxMailLabelListComponent.prototype.ngOnInit = function () {
        this.labelGroup = this.fb.group({
            color: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.colors$ = this.inboxService.getLabelColors();
    };
    InboxMailLabelListComponent.prototype.selectLabel = function (selectChange, label) {
        selectChange.value ? this.addLabel.emit(label) : this.removeLabel.emit(label);
    };
    InboxMailLabelListComponent.prototype.selectLabelButton = function (clickEvent, label) {
        if (clickEvent) {
            clickEvent.stopPropagation();
        }
        this.labelSelected(label) ? this.removeLabel.emit(label) : this.addLabel.emit(label);
    };
    InboxMailLabelListComponent.prototype.labelSelected = function (label) {
        return this.labels.indexOf(label) > -1;
    };
    InboxMailLabelListComponent.prototype.createLabel = function () {
        var _this = this;
        var label = this.labelGroup.value;
        this.addLabel.emit(label);
        setTimeout(function () {
            _this.labelGroup.markAsPristine();
            _this.labelGroup.markAsUntouched();
            _this.form.resetForm();
            _this.labelGroup.reset();
        }, 10);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InboxMailLabelListComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InboxMailLabelListComponent.prototype, "availableLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InboxMailLabelListComponent.prototype, "labels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InboxMailLabelListComponent.prototype, "addLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InboxMailLabelListComponent.prototype, "removeLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], InboxMailLabelListComponent.prototype, "form", void 0);
    InboxMailLabelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail-label-list',
            template: __webpack_require__(/*! ./inbox-mail-label-list.component.html */ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail-label-list.component.scss */ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], InboxMailLabelListComponent);
    return InboxMailLabelListComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"6px\">\r\n  <div class=\"indicator\" [style.background]=\"color\"></div>\r\n  <div class=\"label-name\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n.label {\n  background: whitesmoke;\n  font: 400 13px/22px Roboto, \"Helvetica Neue\", sans-serif;\n  padding: 2px 8px;\n  white-space: nowrap; }\n.label .indicator {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InboxMailLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailLabelComponent", function() { return InboxMailLabelComponent; });
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

var InboxMailLabelComponent = /** @class */ (function () {
    function InboxMailLabelComponent() {
    }
    InboxMailLabelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InboxMailLabelComponent.prototype, "color", void 0);
    InboxMailLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail-label',
            template: __webpack_require__(/*! ./inbox-mail-label.component.html */ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail-label.component.scss */ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxMailLabelComponent);
    return InboxMailLabelComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-mail-list\" fxLayout=\"column\" fxFlex=\"grow\">\r\n  <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <mat-checkbox></mat-checkbox>\r\n      <button class=\"checkbox-menu\" type=\"button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>arrow_drop_down</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content\" furyScrollbar>\r\n    <div class=\"mail\" *ngFor=\"let mail of mails$ | async\" [class.read]=\"mail.read\" [routerLink]=\"['../mail', mail.id]\"\r\n         fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" matRipple>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" fxFlex=\"68px\">\r\n        <mat-checkbox class=\"checkbox\" (click)=\"$event.stopPropagation()\"></mat-checkbox>\r\n        <fury-inbox-mail-star [isStarred]=\"mail.starred\" (starred)=\"toggleStarred(mail)\"\r\n                              (click)=\"$event.stopPropagation()\"></fury-inbox-mail-star>\r\n      </div>\r\n\r\n      <div class=\"content-container\" fxFlex=\"auto\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\" fxFlex=\"auto\" fxFlex.gt-sm=\"210px\">\r\n          <img class=\"picture\" fxFlex=\"noshrink\" src=\"http://i.pravatar.cc/30?u={{ mail.from.name }}\" fxHide\r\n               fxShow.gt-sm>\r\n          <div class=\"from\" fxFlex=\"grow\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            {{ mail.from.name }}\r\n            <div class=\"when\" fxHide.gt-sm>{{ mail.when.fromNow() }}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"content-wrapper\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign.gt-sm=\"start center\"\r\n             fxLayoutGap=\"8px\" fxFlex=\"grow\">\r\n          <div fxLayout=\"row\" fxLayoutGap=\"8px\">\r\n            <fury-inbox-mail-label *ngFor=\"let label of mail.labels\" [color]=\"label.color\">{{ label.name }}\r\n            </fury-inbox-mail-label>\r\n          </div>\r\n\r\n          <div class=\"subject\" fxFlex=\"noshrink\">{{ mail.subject }}</div>\r\n          <div class=\"middot\" fxHide fxShow.gt-sm>&middot;</div>\r\n          <div class=\"content\">{{ mail.content }}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxFlex=\"40px\" fxFlex.gt-sm=\"100px\">\r\n        <span class=\"when\" fxHide fxShow.gt-sm>{{ mail.when.fromNow() }}</span>\r\n        <button class=\"options\" [matMenuTriggerFor]=\"mailOptions\" mat-icon-button (click)=\"$event.stopPropagation()\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item>\r\n    <span> All </span>\r\n  </button>\r\n  <button mat-menu-item>\r\n    <span> Unread </span>\r\n  </button>\r\n  <button mat-menu-item>\r\n    <span> Read </span>\r\n  </button>\r\n</mat-menu>\r\n\r\n<mat-menu #mailOptions=\"matMenu\">\r\n  <button mat-menu-item>\r\n    <mat-icon>markunread_mailbox</mat-icon>\r\n    Mark as unread\r\n  </button>\r\n  <button mat-menu-item>\r\n    <mat-icon>label</mat-icon>\r\n    Labels\r\n  </button>\r\n  <mat-divider></mat-divider>\r\n  <button mat-menu-item>\r\n    <mat-icon>delete</mat-icon>\r\n    Delete\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n.inbox-mail-list {\n  max-width: 100%; }\n.inbox-mail-list .header {\n    height: 64px;\n    min-height: 64px;\n    max-height: 64px;\n    padding-left: 24px;\n    padding-right: 24px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.inbox-mail-list .header .checkbox-menu {\n      color: rgba(0, 0, 0, 0.54); }\n.inbox-mail-list .content .mail {\n    height: 54px;\n    min-height: 54px;\n    max-height: 54px;\n    padding-left: 24px;\n    padding-right: 24px;\n    position: relative;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    transition: all 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    cursor: pointer;\n    outline: none;\n    font: 400 14px/22px Roboto, \"Helvetica Neue\", sans-serif; }\n@media screen and (max-width: 599px) {\n      .inbox-mail-list .content .mail {\n        height: auto;\n        max-height: none;\n        padding-top: 12px;\n        padding-bottom: 12px; } }\n@media screen and (min-width: 599px) and (max-width: 959px) {\n      .inbox-mail-list .content .mail {\n        height: auto;\n        max-height: none;\n        padding-top: 12px;\n        padding-bottom: 12px; } }\n.inbox-mail-list .content .mail.read {\n      background: #fafafa; }\n.inbox-mail-list .content .mail.read .from {\n        color: rgba(0, 0, 0, 0.54);\n        font-weight: 400; }\n.inbox-mail-list .content .mail.read .subject {\n        color: rgba(0, 0, 0, 0.54);\n        font-weight: 400; }\n.inbox-mail-list .content .mail.read .content {\n        color: rgba(0, 0, 0, 0.38);\n        font-weight: 400; }\n.inbox-mail-list .content .mail.read .when {\n        color: rgba(0, 0, 0, 0.38);\n        font-weight: 400; }\n.inbox-mail-list .content .mail:hover {\n      background: rgba(0, 0, 0, 0.04); }\n.inbox-mail-list .content .mail .picture {\n      height: 30px;\n      width: 30px;\n      border-radius: 50%;\n      background: whitesmoke; }\n.inbox-mail-list .content .mail .content-container {\n      max-width: calc(100% - 184px);\n      position: relative; }\n@media screen and (max-width: 599px) {\n        .inbox-mail-list .content .mail .content-container {\n          max-width: calc(100% - 124px); } }\n@media screen and (min-width: 599px) and (max-width: 959px) {\n        .inbox-mail-list .content .mail .content-container {\n          max-width: calc(100% - 124px); } }\n.inbox-mail-list .content .mail .content-wrapper {\n      max-width: calc(100% - 218px);\n      white-space: nowrap;\n      overflow-x: hidden;\n      text-overflow: ellipsis; }\n@media screen and (max-width: 599px) {\n        .inbox-mail-list .content .mail .content-wrapper {\n          max-width: none; } }\n@media screen and (min-width: 599px) and (max-width: 959px) {\n        .inbox-mail-list .content .mail .content-wrapper {\n          max-width: none; } }\n.inbox-mail-list .content .mail .from {\n      white-space: nowrap;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      color: rgba(0, 0, 0, 0.87);\n      font-weight: 500; }\n.inbox-mail-list .content .mail .subject {\n      white-space: nowrap;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      color: rgba(0, 0, 0, 0.87);\n      font-weight: 500; }\n.inbox-mail-list .content .mail .content {\n      white-space: nowrap;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      color: rgba(0, 0, 0, 0.54);\n      font-weight: 500; }\n.inbox-mail-list .content .mail .when {\n      color: rgba(0, 0, 0, 0.54);\n      white-space: nowrap;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      font-weight: 500; }\n.inbox-mail-list .content .mail .options {\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InboxMailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailListComponent", function() { return InboxMailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox.service */ "./src/app/pages/apps/inbox/inbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxMailListComponent = /** @class */ (function () {
    function InboxMailListComponent(route, inboxService) {
        this.route = route;
        this.inboxService = inboxService;
    }
    InboxMailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.get('category') === 'starred') {
                _this.mails$ = _this.inboxService.getStarred().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (mails) { return mails.sort(function (a, b) { return b.when - a.when; }); }));
            }
            else {
                _this.mails$ = _this.inboxService.getGroup(paramMap.get('category')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (mails) { return mails.sort(function (a, b) { return b.when - a.when; }); }));
            }
        });
    };
    InboxMailListComponent.prototype.toggleStarred = function (mail) {
        this.inboxService.toggleStarred(mail);
    };
    InboxMailListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail-list',
            template: __webpack_require__(/*! ./inbox-mail-list.component.html */ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail-list.component.scss */ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"]])
    ], InboxMailListComponent);
    return InboxMailListComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" mat-icon-button (click)=\"emitClick()\">\r\n  <mat-icon *ngIf=\"!isStarred\" class=\"star\">star_outline</mat-icon>\r\n  <mat-icon *ngIf=\"isStarred\" class=\"star active\">star</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n.star {\n  color: rgba(0, 0, 0, 0.54); }\n.star.active {\n    color: #ffc107; }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InboxMailStarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailStarComponent", function() { return InboxMailStarComponent; });
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

var InboxMailStarComponent = /** @class */ (function () {
    function InboxMailStarComponent() {
        this.starred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InboxMailStarComponent.prototype.ngOnInit = function () {
    };
    InboxMailStarComponent.prototype.emitClick = function () {
        this.starred.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InboxMailStarComponent.prototype, "isStarred", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InboxMailStarComponent.prototype, "starred", void 0);
    InboxMailStarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail-star',
            template: __webpack_require__(/*! ./inbox-mail-star.component.html */ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail-star.component.scss */ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxMailStarComponent);
    return InboxMailStarComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-mail\" fxLayout=\"column\" fxFlex=\"grow\">\r\n\r\n  <div class=\"header\" fxFlex=\"none\"\r\n       fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n       fxLayoutAlign.gt-xs=\"start center\">\r\n    <button type=\"button\" mat-icon-button [routerLink]=\"['../../']\" matTooltip=\"Back to Inbox\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n    <div class=\"vertical-divider\" fxHide fxShow.gt-xs></div>\r\n\r\n    <button type=\"button\" fxHide fxShow.gt-xs mat-icon-button matTooltip=\"Archive\">\r\n      <mat-icon>archive</mat-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" fxHide fxShow.gt-xs mat-icon-button matTooltip=\"Mark as Spam\">\r\n      <mat-icon>backspace</mat-icon>\r\n    </button>\r\n\r\n    <button type=\"button\" fxHide fxShow.gt-xs mat-icon-button (click)=\"removeMail()\" matTooltip=\"Delete\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button>\r\n\r\n    <div class=\"vertical-divider\" [matMenuTriggerFor]=\"mailOptions\" fxHide fxShow.gt-xs></div>\r\n\r\n    <fury-inbox-mail-label-list class=\"button\" [availableLabels]=\"availableLabels\"\r\n                                [labels]=\"(mail$ | async).labels\"\r\n                                (addLabel)=\"addLabel($event)\"\r\n                                (removeLabel)=\"removeLabel($event)\"\r\n                                icon=\"folder\"\r\n                                matTooltip=\"Move to\"\r\n                                fxHide fxShow.gt-xs></fury-inbox-mail-label-list>\r\n\r\n    <fury-inbox-mail-label-list class=\"button\" [availableLabels]=\"availableLabels\"\r\n                                [labels]=\"(mail$ | async).labels\"\r\n                                (addLabel)=\"addLabel($event)\"\r\n                                (removeLabel)=\"removeLabel($event)\"\r\n                                matTooltip=\"Labels\"\r\n                                fxHide fxShow.gt-xs></fury-inbox-mail-label-list>\r\n\r\n    <div class=\"vertical-divider\" fxHide fxShow.gt-xs></div>\r\n\r\n    <button type=\"button\" mat-icon-button>\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <fury-scrollbar>\r\n    <div class=\"mail-content\" fxLayout=\"column\">\r\n      <div class=\"head\" fxFlex=\"noshrink\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <div class=\"subject\">{{ (mail$ | async).subject }}</div>\r\n          <div class=\"labels\" fxLayout=\"row\" fxLayoutGap=\"8px\">\r\n            <fury-inbox-mail-label *ngFor=\"let label of (mail$ | async).labels\" [color]=\"label.color\">\r\n              {{ label.name }}\r\n            </fury-inbox-mail-label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"actions\" fxLayoutAlign=\"end center\">\r\n          <fury-inbox-mail-star [isStarred]=\"(mail$ | async).starred\"\r\n                                (starred)=\"toggleStarred()\"></fury-inbox-mail-star>\r\n\r\n          <fury-inbox-mail-label-list [availableLabels]=\"availableLabels\"\r\n                                      [labels]=\"(mail$ | async).labels\"\r\n                                      (addLabel)=\"addLabel($event)\"\r\n                                      (removeLabel)=\"removeLabel($event)\"></fury-inbox-mail-label-list>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"info\" fxFlex=\"noshrink\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-xs=\"row\"\r\n           fxLayoutAlign.gt-xs=\"space-between\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n          <img class=\"picture\" src=\"http://i.pravatar.cc/35?u={{ (mail$ | async).from?.name }}\">\r\n\r\n          <div fxLayout=\"column\">\r\n            <div class=\"from\">{{ (mail$ | async).from?.name }}</div>\r\n            <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              to {{ (mail$ | async).to?.name }}\r\n              <mat-icon>arrow_drop_down</mat-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"extra\" fxFlexAlign.xs=\"end\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"16px\">\r\n          <div class=\"when\">{{ (mail$ | async).when?.fromNow() }}</div>\r\n          <button class=\"options\" [matMenuTriggerFor]=\"mailOptions\" mat-icon-button>\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"content\" fxFlex=\"grow\">\r\n        {{ (mail$ | async).content }}\r\n      </div>\r\n\r\n      <div class=\"reply\" fxFlex=\"noshrink\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" (click)=\"showReply()\"\r\n           *ngIf=\"!replying\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n          <img class=\"avatar\" src=\"assets/img/avatars/noavatar.png\">\r\n          <div class=\"text\">Click to <span class=\"semi-bold\">Reply</span> or <span class=\"semi-bold\">Forward</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n          <button type=\"button\" mat-icon-button>\r\n            <mat-icon>reply</mat-icon>\r\n          </button>\r\n\r\n          <button type=\"button\" mat-icon-button>\r\n            <mat-icon>forward</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"replying\" *ngIf=\"replying\">\r\n        <quill-editor class=\"editor\" [style]=\"{ height: '100px' }\"\r\n                      placeholder=\"Reply to {{ (mail$ | async).from?.name }}\"></quill-editor>\r\n\r\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\r\n          <button mat-button (click)=\"hideReply()\">CANCEL</button>\r\n          <button mat-fab color=\"primary\" (click)=\"hideReply(true)\">\r\n            <mat-icon>send</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fury-scrollbar>\r\n</div>\r\n\r\n<mat-menu #mailOptions=\"matMenu\">\r\n  <button mat-menu-item>\r\n    <mat-icon>markunread_mailbox</mat-icon>\r\n    Mark as unread\r\n  </button>\r\n  <button mat-menu-item>\r\n    <mat-icon>label</mat-icon>\r\n    Labels\r\n  </button>\r\n  <mat-divider></mat-divider>\r\n  <button mat-menu-item>\r\n    <mat-icon>delete</mat-icon>\r\n    Delete\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n.inbox-mail .header {\n  height: 64px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.inbox-mail .header .mat-icon-button, .inbox-mail .header .button {\n    margin-left: 8px;\n    margin-right: 8px;\n    color: rgba(0, 0, 0, 0.54); }\n.inbox-mail .header .vertical-divider {\n    width: 1px;\n    height: calc(100% - 24px);\n    background: rgba(0, 0, 0, 0.12);\n    margin: 12px 8px; }\n.inbox-mail .mail-content ::ng-deep .scroll-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n.inbox-mail .head {\n  padding: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.inbox-mail .head .subject {\n    font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.inbox-mail .head .actions .mat-icon {\n    color: rgba(0, 0, 0, 0.54); }\n.inbox-mail .info {\n  padding: 24px; }\n.inbox-mail .info .picture {\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n.inbox-mail .info .from {\n    font: 400 16px/24px Roboto, \"Helvetica Neue\", sans-serif;\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis; }\n.inbox-mail .info .to {\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    color: rgba(0, 0, 0, 0.54);\n    font: 400 14px/22px Roboto, \"Helvetica Neue\", sans-serif; }\n.inbox-mail .info .to .mat-icon {\n      color: rgba(0, 0, 0, 0.54); }\n.inbox-mail .info .extra .when {\n    color: rgba(0, 0, 0, 0.54);\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis; }\n.inbox-mail .info .extra .options {\n    color: rgba(0, 0, 0, 0.54); }\n.inbox-mail .content {\n  padding: 0 24px 24px; }\n.inbox-mail .reply {\n  padding: 24px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer; }\n.inbox-mail .reply .mat-icon {\n    color: rgba(0, 0, 0, 0.54); }\n.inbox-mail .replying {\n  padding: 24px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n.inbox-mail .replying .actions {\n    margin-top: 24px; }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.ts ***!
  \*********************************************************************/
/*! exports provided: InboxMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxMailComponent", function() { return InboxMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component */ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.ts");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbox.service */ "./src/app/pages/apps/inbox/inbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboxMailComponent = /** @class */ (function () {
    function InboxMailComponent(route, inboxService, dialog, router, snackbar) {
        this.route = route;
        this.inboxService = inboxService;
        this.dialog = dialog;
        this.router = router;
        this.snackbar = snackbar;
    }
    InboxMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.availableLabels = this.inboxService.availableLabels;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('id');
            _this.mail$ = _this.inboxService.getMail(_this.id);
            _this.inboxService.getMail(_this.id).subscribe(function (mail) {
                _this._mail = mail;
            });
        });
    };
    InboxMailComponent.prototype.toggleStarred = function () {
        this.inboxService.toggleStarred(this._mail);
    };
    InboxMailComponent.prototype.addLabel = function (label) {
        this.inboxService.addLabel(label, this._mail);
    };
    InboxMailComponent.prototype.removeLabel = function (label) {
        this.inboxService.removeLabel(label, this._mail);
    };
    InboxMailComponent.prototype.removeMail = function () {
        var _this = this;
        this.dialog.open(_inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InboxMailConfirmDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this mail?'
            }
        }).afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.inboxService.removeMail(_this._mail);
                _this.router.navigate(['../../'], { relativeTo: _this.route });
                _this.snackbar.open("You deleted the mail from: " + _this._mail.from.name, 'UNDO', {
                    duration: 3000
                })
                    .onAction().subscribe(function () {
                    var mail = _this.inboxService.undoRemove();
                    if (mail) {
                        _this.router.navigate(['/apps/inbox/mail', mail.id]);
                        _this.snackbar.open("Restored your mail from: " + mail.from.name, null, {
                            duration: 3000
                        });
                    }
                    else {
                        _this.snackbar.open('Could not UNDO last delete action. Sorry!', null, {
                            duration: 3000
                        });
                    }
                });
            }
        });
    };
    InboxMailComponent.prototype.showReply = function () {
        this.replying = true;
    };
    InboxMailComponent.prototype.hideReply = function (send) {
        this.replying = false;
        if (send) {
            this.snackbar.open("You replied to " + this._mail.from.name, 'UNDO', {
                duration: 3000
            });
        }
    };
    InboxMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-mail',
            template: __webpack_require__(/*! ./inbox-mail.component.html */ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.html"),
            styles: [__webpack_require__(/*! ./inbox-mail.component.scss */ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _inbox_service__WEBPACK_IMPORTED_MODULE_4__["InboxService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], InboxMailComponent);
    return InboxMailComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list fxFlex=\"grow\" furyScrollbar class=\"navigation\">\r\n  <div matSubheader>Inbox</div>\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/primary']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>inbox</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Primary</div>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/social']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>group</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Social</div>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/promotions']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>local_offer</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Promotions</div>\r\n  </mat-list-item>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/starred']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>star</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Starred</div>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/sent']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>send</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Sent Mails</div>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/drafts']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>drafts</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Drafts</div>\r\n  </mat-list-item>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/spam']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>backspace</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Spam</div>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item matRipple [routerLink]=\"['/apps/inbox/trash']\" routerLinkActive=\"active\">\r\n    <mat-icon matListIcon>delete</mat-icon>\r\n    <div matLine [fxHide]=\"responsive\" [fxShow.gt-sm]=\"responsive\">Trash</div>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n.navigation {\n  margin-top: 24px; }\n.navigation .mat-list-item {\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.54);\n    margin-top: 8px;\n    margin-bottom: 8px;\n    position: relative;\n    outline: none; }\n.navigation .mat-list-item .mat-line {\n      font-weight: 500; }\n.navigation .mat-list-item.active {\n      color: #455a64;\n      background: rgba(0, 0, 0, 0.04); }\n.navigation .mat-list-item:hover {\n      background: rgba(0, 0, 0, 0.04); }\n.navigation .mat-divider {\n    margin-top: 8px;\n    margin-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InboxNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxNavigationComponent", function() { return InboxNavigationComponent; });
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

var InboxNavigationComponent = /** @class */ (function () {
    function InboxNavigationComponent() {
    }
    InboxNavigationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InboxNavigationComponent.prototype, "responsive", void 0);
    InboxNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox-navigation',
            template: __webpack_require__(/*! ./inbox-navigation.component.html */ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.html"),
            styles: [__webpack_require__(/*! ./inbox-navigation.component.scss */ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxNavigationComponent);
    return InboxNavigationComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: InboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-mail-list/inbox-mail-list.component */ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.ts");
/* harmony import */ var _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-mail/inbox-mail.component */ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox.component */ "./src/app/pages/apps/inbox/inbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _inbox_component__WEBPACK_IMPORTED_MODULE_4__["InboxComponent"],
        children: [
            {
                path: '',
                redirectTo: 'primary',
                pathMatch: 'full'
            },
            {
                path: ':category',
                component: _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_2__["InboxMailListComponent"]
            },
            {
                path: 'mail/:id',
                component: _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_3__["InboxMailComponent"]
            }
        ],
        data: {
            scrollbarDisabled: true
        }
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InboxRoutingModule);
    return InboxRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox\" fxLayout=\"column\">\r\n\r\n  <mat-drawer-container class=\"drawer-container\" fxFlex=\"grow\">\r\n\r\n    <mat-drawer mode=\"over\" #drawer>\r\n      <div class=\"drawer-navigation\">\r\n        <fury-inbox-navigation></fury-inbox-navigation>\r\n      </div>\r\n    </mat-drawer>\r\n\r\n    <mat-drawer-content fxLayout=\"column\">\r\n      <div class=\"header\" fxFlex=\"none\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"logo\" fxFlex=\"auto\" fxFlex.sm=\"116px\" fxFlex.gt-sm=\"250px\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.sm=\"center center\">\r\n          <button fxHide.gt-xs type=\"button\" mat-icon-button (click)=\"drawer.open()\">\r\n            <mat-icon>menu</mat-icon>\r\n          </button>\r\n          <mat-icon fxHide fxShow.gt-xs>mail</mat-icon>\r\n          <span fxHide.sm>Inbox</span>\r\n        </div>\r\n\r\n        <div class=\"search-bar\" fxLayout=\"row\" fxFlex=\"grow\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <mat-icon>search</mat-icon>\r\n          </div>\r\n          <input class=\"search\" fxFlex=\"grow\" type=\"search\" placeholder=\"Search...\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"page-container\" fxFlex=\"grow\" fxLayout=\"row\">\r\n        <div class=\"navigation-container\" fxHide fxShow.gt-xs\r\n             fxFlex=\"116px\" fxFlex.gt-sm=\"250px\"\r\n             fxLayout=\"column\">\r\n          <div class=\"compose\" fxFlex=\"0 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <button type=\"button\" fxFlex mat-raised-button color=\"primary\" fxHide fxShow.gt-sm (click)=\"openCompose()\">\r\n              <mat-icon class=\"icon\">edit</mat-icon>\r\n              Compose\r\n            </button>\r\n            <button type=\"button\" mat-mini-fab color=\"primary\" fxHide.gt-sm>\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n          <fury-inbox-navigation [responsive]=\"true\"></fury-inbox-navigation>\r\n        </div>\r\n\r\n        <div class=\"content\" fxLayout=\"column\" fxFlex=\"auto\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </mat-drawer-content>\r\n  </mat-drawer-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #455a64; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #455a64; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #455a64; }\n.mat-badge-accent .mat-badge-content {\n  background: #2196f3;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-small .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-medium .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-badge-large .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #455a64; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #2196f3; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(69, 90, 100, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(33, 150, 243, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary .mat-ripple-element, .mat-icon-button.mat-primary .mat-ripple-element, .mat-stroked-button.mat-primary .mat-ripple-element {\n    background-color: rgba(69, 90, 100, 0.1); }\n.mat-button.mat-accent .mat-ripple-element, .mat-icon-button.mat-accent .mat-ripple-element, .mat-stroked-button.mat-accent .mat-ripple-element {\n    background-color: rgba(33, 150, 243, 0.1); }\n.mat-button.mat-warn .mat-ripple-element, .mat-icon-button.mat-warn .mat-ripple-element, .mat-stroked-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #455a64; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #2196f3; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media screen and (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #455a64; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media screen and (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #455a64;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #455a64;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(69, 90, 100, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #f44336;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(244, 67, 54, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-toggle-active {\n  color: #455a64; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #2196f3; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #f44336; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #2196f3; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #455a64; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #2196f3; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #455a64; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #455a64; }\n.mat-icon.mat-accent {\n  color: #2196f3; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #455a64; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #2196f3; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #607d8b; }\n.mat-progress-bar-buffer {\n  background-color: #607d8b; }\n.mat-progress-bar-fill::after {\n  background-color: #455a64; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #455a64; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #2196f3; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #455a64; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(69, 90, 100, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2196f3; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #455a64; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(33, 150, 243, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #455a64; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(33, 150, 243, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #455a64;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #455a64; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(96, 125, 139, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #455a64; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #455a64;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #2196f3; }\n/**\r\n USAGE:\r\n  .my-class {\r\n    color: mat-color($color-primary);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    @include mat-typography-level-to-styles($config, input);\r\n  }\r\n*/\n/**\r\n USAGE:\r\n  .my-class {\r\n    background: $theme-background;\r\n  }\r\n*/\n/**\r\n  General\r\n */\n/**\r\n  Card\r\n */\n/**\r\n  Toolbar\r\n */\n/**\r\n  Footer\r\n */\n/**\r\n  Mixins\r\n */\n/**\r\n  Inbox\r\n */\n.inbox {\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%; }\n.inbox .drawer-navigation {\n    padding: 0 24px;\n    overflow: hidden; }\n.inbox .header {\n    padding: 48px 24px 112px 0;\n    background: #2196f3 url(\"/assets/img/backgrounds/inbox.png\");\n    background-size: cover;\n    z-index: 10;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n      .inbox .header {\n        padding: 8px 8px 72px; } }\n.inbox .header .logo {\n      color: white;\n      padding-left: 24px;\n      font: 400 28px/34px Roboto, \"Helvetica Neue\", sans-serif; }\n.inbox .header .logo .mat-icon {\n        padding-right: 12px; }\n@media screen and (min-width: 599px) and (max-width: 959px) {\n        .inbox .header .logo {\n          padding-left: 0; }\n          .inbox .header .logo .mat-icon {\n            padding-right: 0; } }\n@media screen and (max-width: 599px) {\n        .inbox .header .logo {\n          padding-left: 0;\n          margin-bottom: 8px; } }\n.inbox .header .search-bar {\n      background: white;\n      border-radius: 3px;\n      overflow: hidden;\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.inbox .header .search-bar .mat-icon {\n        vertical-align: middle;\n        margin-right: 14px;\n        margin-left: 16px; }\n.inbox .header .search-bar .search {\n        border: 0;\n        height: 54px;\n        outline: none; }\n.inbox .page-container {\n    margin-top: -64px;\n    background: #f0f0f0; }\n.inbox .navigation-container {\n    padding: 0 24px 24px;\n    z-index: 20; }\n.inbox .navigation-container .compose {\n      height: 64px; }\n.inbox .navigation-container .compose .icon {\n        margin-left: -24px;\n        padding-right: 8px; }\n.inbox .content {\n    background: white;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-right: 24px;\n    margin-bottom: 24px;\n    border-radius: 3px;\n    max-width: calc(100% - 274px);\n    z-index: 20; }\n@media screen and (max-width: 599px) {\n      .inbox .content {\n        margin: 0 8px 8px;\n        max-width: calc(100% - 16px); } }\n@media screen and (min-width: 599px) and (max-width: 959px) {\n      .inbox .content {\n        max-width: calc(100% - 140px); } }\n"

/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.component.ts ***!
  \*****************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-compose/inbox-compose.component */ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = /** @class */ (function () {
    function InboxComponent(dialog) {
        this.dialog = dialog;
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent.prototype.openCompose = function () {
        this.dialog.open(_inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_2__["InboxComposeComponent"]);
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/pages/apps/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.scss */ "./src/app/pages/apps/inbox/inbox.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.module.ts ***!
  \**************************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/scrollbar/scrollbar.module */ "./src/app/shared/scrollbar/scrollbar.module.ts");
/* harmony import */ var _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox-compose/inbox-compose.component */ "./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.ts");
/* harmony import */ var _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component */ "./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.ts");
/* harmony import */ var _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox-mail-label-list/inbox-mail-label-list.component */ "./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.ts");
/* harmony import */ var _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbox-mail-label/inbox-mail-label.component */ "./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.ts");
/* harmony import */ var _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbox-mail-list/inbox-mail-list.component */ "./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.ts");
/* harmony import */ var _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbox-mail-star/inbox-mail-star.component */ "./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.ts");
/* harmony import */ var _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inbox-mail/inbox-mail.component */ "./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.ts");
/* harmony import */ var _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inbox-navigation/inbox-navigation.component */ "./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.ts");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/pages/apps/inbox/inbox-routing.module.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inbox.component */ "./src/app/pages/apps/inbox/inbox.component.ts");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inbox.service */ "./src/app/pages/apps/inbox/inbox.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_14__["InboxRoutingModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"],
                _shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"]
            ],
            declarations: [_inbox_component__WEBPACK_IMPORTED_MODULE_15__["InboxComponent"], _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_13__["InboxNavigationComponent"], _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_10__["InboxMailListComponent"], _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_12__["InboxMailComponent"], _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_9__["InboxMailLabelComponent"], _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_11__["InboxMailStarComponent"], _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_8__["InboxMailLabelListComponent"], _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InboxMailConfirmDialogComponent"], _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_6__["InboxComposeComponent"]],
            entryComponents: [_inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InboxMailConfirmDialogComponent"], _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_6__["InboxComposeComponent"]],
            providers: [_inbox_service__WEBPACK_IMPORTED_MODULE_16__["InboxService"]]
        })
    ], InboxModule);
    return InboxModule;
}());



/***/ }),

/***/ "./src/app/pages/apps/inbox/inbox.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.service.ts ***!
  \***************************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../demo-data/inbox-demo-data */ "./src/app/pages/demo-data/inbox-demo-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxService = /** @class */ (function () {
    function InboxService() {
        var _this = this;
        this.mails = _demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_3__["inboxMails"];
        this.availableLabels = [];
        this.mails.forEach(function (mail) {
            mail.labels.forEach(function (label) {
                if (!_this.availableLabels.find(function (l) { return l.name === label.name; })) {
                    _this.availableLabels.push(label);
                }
            });
        });
    }
    InboxService.prototype.getStarred = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (mails) { return mails.filter(function (mail) { return mail.starred; }); }));
    };
    InboxService.prototype.getGroup = function (group) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (mails) { return mails.filter(function (mail) { return mail.group === group; }); }));
    };
    InboxService.prototype.getMail = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.mails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (mails) { return mails.find(function (mail) { return mail.id === id; }); }));
    };
    InboxService.prototype.toggleStarred = function (mail) {
        var foundMail = this.find(mail);
        if (foundMail) {
            foundMail.starred = !mail.starred;
        }
    };
    InboxService.prototype.addLabel = function (label, mail) {
        var foundMail = this.find(mail);
        if (foundMail) {
            var foundLabel = foundMail.labels.find(function (l) { return l === label; });
            if (!foundLabel) {
                foundMail.labels.push(label);
                this.addToAvailableIfNotExists(label);
            }
        }
    };
    InboxService.prototype.addToAvailableIfNotExists = function (label) {
        if (this.availableLabels.indexOf(label) === -1) {
            this.availableLabels.push(label);
        }
    };
    InboxService.prototype.removeLabel = function (label, mail) {
        var foundMail = this.find(mail);
        if (foundMail) {
            var foundLabelIndex = foundMail.labels.findIndex(function (l) { return l === label; });
            if (foundLabelIndex > -1) {
                foundMail.labels.splice(foundLabelIndex, 1);
            }
        }
    };
    InboxService.prototype.removeMail = function (mail) {
        var foundMailIndex = this.mails.findIndex(function (m) { return m === mail; });
        if (foundMailIndex > -1) {
            this.mails.splice(foundMailIndex, 1);
            this.lastRemovedMail = mail;
            this.lastRemovedMailIndex = foundMailIndex;
        }
    };
    InboxService.prototype.undoRemove = function () {
        if (this.lastRemovedMail && this.lastRemovedMailIndex) {
            this.mails.splice(this.lastRemovedMailIndex, 0, this.lastRemovedMail);
            return this.lastRemovedMail;
        }
        return false;
    };
    InboxService.prototype.find = function (mail) {
        return this.mails.find(function (existingMail) { return existingMail.id === mail.id; });
    };
    InboxService.prototype.getLabelColors = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_3__["labelColors"]);
    };
    InboxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InboxService);
    return InboxService;
}());



/***/ }),

/***/ "./src/app/pages/demo-data/inbox-demo-data.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/demo-data/inbox-demo-data.ts ***!
  \****************************************************/
/*! exports provided: labelColors, inboxMails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelColors", function() { return labelColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inboxMails", function() { return inboxMails; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var labelColors = [
    {
        name: 'Indigo',
        code: '#3F51B5'
    },
    {
        name: 'Teal',
        code: '#009688'
    },
    {
        name: 'Light Blue',
        code: '#03A9F4'
    },
    {
        name: 'Deep Purple',
        code: '#673AB7',
    },
    {
        name: 'Purple',
        code: '#9C27B0'
    },
    {
        name: 'Green',
        code: '#4CAF50'
    },
    {
        name: 'Deep Orange',
        code: '#FF5722'
    },
    {
        name: 'Red',
        code: '#f44336'
    },
    {
        name: 'Yellow',
        code: '#FFEB3B'
    }
];
var inboxMails = [
    {
        'id': '5aaa797a5416f2348280d365',
        'from': {
            'name': 'Nichols Obrien',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Nulla ut est fugiat sint sit ut id aliqua reprehenderit duis aliquip culpa nostrud.',
        'content': 'Mollit labore consequat adipisicing adipisicing. Ullamco est laboris quis minim consectetur consectetur tempor anim adipisicing est dolore cillum excepteur. Cupidatat ut aliqua nisi reprehenderit Lorem.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(66, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797a42552b86e1fa2d3f',
        'from': {
            'name': 'Dona Kirk',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Aliquip laboris reprehenderit adipisicing culpa.',
        'content': 'Laboris aute nostrud labore dolore laborum sint occaecat in exercitation dolore qui. Irure velit amet nostrud pariatur et amet incididunt laborum aute. Fugiat voluptate reprehenderit laboris laboris magna consequat ex magna elit fugiat magna dolore aliquip.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'sent',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797a405e7a894676e6c5',
        'from': {
            'name': 'Valenzuela Atkinson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Esse laboris nulla in pariatur mollit id dolor velit cillum dolor cillum.',
        'content': 'Voluptate irure enim est anim non commodo ad reprehenderit ea quis incididunt et aliquip. Reprehenderit deserunt cupidatat reprehenderit enim quis id tempor ipsum est dolor exercitation consectetur. Tempor nulla do aute veniam qui laboris ullamco voluptate enim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(94, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797a7eac0b92ec5ea57a',
        'from': {
            'name': 'Jimenez Dalton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Minim minim sit labore nostrud cillum labore.',
        'content': 'Voluptate ut enim adipisicing reprehenderit voluptate velit officia dolore quis pariatur adipisicing. Eu occaecat officia in proident do exercitation esse cillum commodo voluptate enim. Laboris est nisi dolore ullamco quis cupidatat aliquip enim occaecat labore laborum elit non.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'hours'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797a7470a5a6e66bd638',
        'from': {
            'name': 'Mccray Chandler',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Mollit labore nisi nostrud non incididunt do ullamco in consequat consequat occaecat adipisicing anim.',
        'content': 'Elit nisi cupidatat voluptate non velit et qui dolore voluptate aute eiusmod officia nulla Lorem. Aliqua ex et do veniam commodo enim. Lorem reprehenderit sunt fugiat cupidatat laborum enim esse pariatur quis eu exercitation dolore incididunt.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'hours'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797a6f110373f5d7afcf',
        'from': {
            'name': 'Chen Fields',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Culpa duis laborum sit minim et ipsum et reprehenderit ut reprehenderit.',
        'content': 'Adipisicing dolor elit excepteur aute aute sit occaecat qui duis Lorem veniam. Culpa sit duis consequat officia dolore tempor cillum ipsum laborum. Pariatur officia laborum nulla dolore amet fugiat commodo mollit amet cupidatat in et.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(38, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797a7e3c9c1a9fbb37df',
        'from': {
            'name': 'Bernice Guy',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ullamco dolore amet reprehenderit consequat cillum ad eiusmod reprehenderit.',
        'content': 'Lorem ad ut nulla labore commodo excepteur dolore est sint. Pariatur adipisicing duis tempor dolor exercitation culpa laboris nulla quis amet irure eu. Deserunt cillum voluptate ut velit et eiusmod labore aute amet.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(39, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797a74af67b35a55bdfc',
        'from': {
            'name': 'Allen Walton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sunt ea laboris enim in sunt aliquip et fugiat occaecat adipisicing irure ea.',
        'content': 'Labore culpa in qui sunt anim ipsum labore reprehenderit ipsum minim sunt voluptate. Commodo fugiat mollit nulla aliquip ullamco pariatur et ipsum sit nulla. Aute commodo magna eiusmod officia do est magna minim sit cillum eu.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(20, 'hours'),
        'read': false,
        'starred': true,
        'labels': [],
        'group': 'sent',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797af301d85874b38301',
        'from': {
            'name': 'Keisha Prince',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Irure voluptate mollit voluptate ut elit Lorem aliquip reprehenderit ut minim adipisicing esse exercitation elit.',
        'content': 'Sit duis eu enim elit consectetur deserunt voluptate id esse consectetur voluptate consequat deserunt in. Voluptate proident excepteur excepteur elit pariatur id labore. Consequat aute deserunt consequat sunt enim aliqua excepteur elit aute nisi.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(11, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797af9d59b1b2e78f566',
        'from': {
            'name': 'Hines Chaney',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Pariatur reprehenderit labore consectetur id laboris ipsum Lorem commodo ea minim mollit magna mollit.',
        'content': 'Nulla irure ea voluptate ut laborum dolore proident esse qui eu. Anim dolore magna do velit laboris aliqua nostrud minim ipsum. Qui tempor do est et non amet nostrud anim cupidatat ex aliquip et nisi.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'days'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797a22bb3083a62fec12',
        'from': {
            'name': 'Paige Morris',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Consequat aute ea qui exercitation consequat labore sint anim.',
        'content': 'Est voluptate labore dolore sunt consectetur cillum adipisicing excepteur quis ullamco ex veniam. Fugiat voluptate Lorem incididunt dolor eu aute. Labore esse eiusmod cupidatat ad ullamco laboris ullamco deserunt aliqua sunt eu.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(46, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'sent',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797a8e9a5de30fcd9317',
        'from': {
            'name': 'Vaughan Acevedo',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sit minim enim dolore eiusmod nulla nostrud deserunt laborum enim eiusmod laborum eiusmod.',
        'content': 'Ipsum consequat enim pariatur et nulla magna dolor ex dolore consequat fugiat occaecat. Elit duis sit est voluptate amet exercitation enim consectetur nisi. Esse eu nisi reprehenderit non.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(27, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'social',
        'attachments': []
    },
    {
        'id': '5aaa797a758be20e9d7fb18a',
        'from': {
            'name': 'Jackson Solis',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Enim cillum qui nulla ex do do enim aliqua nostrud consequat enim.',
        'content': 'Et esse fugiat nulla sunt ut sint fugiat. Non duis cillum irure nisi pariatur magna dolore proident. Laboris magna adipisicing consectetur mollit consectetur dolore.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(49, 'hours'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797a5ba62821cc52db49',
        'from': {
            'name': 'Pauline Sherman',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Voluptate voluptate ad irure ipsum sint deserunt dolor nulla ipsum esse.',
        'content': 'Nostrud magna nisi reprehenderit non adipisicing laboris est tempor consectetur veniam veniam. Ad excepteur tempor in ut labore nulla sint minim exercitation et culpa dolor. Anim reprehenderit occaecat tempor ex cupidatat minim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(49, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797a55d2fc99f3e1a4bf',
        'from': {
            'name': 'Olson Gould',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Laborum proident exercitation labore commodo amet irure id quis ea officia sit elit.',
        'content': 'Irure aliqua consectetur ad reprehenderit cillum ullamco commodo excepteur non pariatur. Aliqua excepteur et irure voluptate et do velit dolore ut in enim laborum laboris amet. Esse occaecat cupidatat velit culpa irure.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797a20d0690dc7676ccc',
        'from': {
            'name': 'Mercedes Mcbride',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Irure cillum labore nostrud irure do commodo officia consectetur cillum laboris quis amet dolore.',
        'content': 'Ex occaecat Lorem adipisicing esse eu non cupidatat cupidatat. Laborum exercitation officia laborum excepteur non proident sint velit dolor duis minim. Cillum officia dolore consequat minim esse labore.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, 'hours'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797ade2766fa8226bdb9',
        'from': {
            'name': 'Alexander Watts',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Minim exercitation ipsum dolore sint do.',
        'content': 'Lorem quis est tempor nulla magna consectetur ex voluptate consequat sint ad enim. Amet magna esse do ut laboris. Laborum enim proident ut velit consectetur aute ea irure et minim fugiat ea.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797a6aa19a3008aeefe0',
        'from': {
            'name': 'Elsie Rosa',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Et fugiat anim sunt voluptate veniam ea anim.',
        'content': 'Amet et dolore in proident tempor fugiat magna veniam laborum in esse quis quis eiusmod. Eu elit culpa irure non do ullamco ea tempor. Officia do deserunt in velit sunt ullamco anim duis eiusmod consequat in.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(69, 'days'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'sent',
        'attachments': []
    },
    {
        'id': '5aaa797aaddf87549c1bb19f',
        'from': {
            'name': 'Carol Holland',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Incididunt reprehenderit fugiat deserunt laborum in ad tempor deserunt irure esse fugiat.',
        'content': 'Sint elit magna laboris laboris. Aliqua sit officia reprehenderit proident in minim enim fugiat do consequat adipisicing enim. Cillum non duis occaecat irure laborum ipsum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'hours'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797afdf0257e8c98b506',
        'from': {
            'name': 'Wendi Robertson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Velit culpa qui qui culpa laboris fugiat quis labore velit cillum exercitation velit occaecat.',
        'content': 'Eiusmod aliqua duis mollit culpa aliqua excepteur. In velit commodo fugiat aute minim. Deserunt ea fugiat non culpa adipisicing adipisicing cupidatat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(71, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797ac063963d7bb431b2',
        'from': {
            'name': 'Thelma Norton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Commodo quis commodo nostrud eiusmod sunt mollit non anim excepteur.',
        'content': 'Esse non culpa culpa occaecat dolor sint. Qui veniam aute dolore labore dolore excepteur. Est Lorem sint incididunt sint ex.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(82, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797a81639a7ba27eec2f',
        'from': {
            'name': 'Sellers Hamilton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Anim aliqua officia cillum non nisi quis Lorem duis labore do consectetur anim.',
        'content': 'Enim nulla officia non anim duis exercitation ut eu laborum Lorem excepteur commodo duis reprehenderit. Cupidatat deserunt non exercitation labore eu pariatur labore ut id aliqua voluptate sunt. Exercitation dolore deserunt pariatur exercitation occaecat deserunt exercitation nostrud quis incididunt sunt Lorem ut.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(30, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'trash',
        'attachments': []
    },
    {
        'id': '5aaa797a1032b6a0ed355030',
        'from': {
            'name': 'Franks Howell',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Occaecat non quis ut sint magna aliquip esse sit incididunt irure exercitation.',
        'content': 'Aliqua ex aliqua quis tempor id. Officia reprehenderit occaecat voluptate consectetur duis minim Lorem cillum minim ea aute aliquip. Amet voluptate aute ea id.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'hours'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797af5014ca11ba340b1',
        'from': {
            'name': 'Tania Bolton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sit eiusmod sit consectetur nisi enim.',
        'content': 'Consectetur adipisicing eu tempor sunt est laborum irure qui. Lorem labore velit duis sit anim dolore et elit excepteur cupidatat in cillum pariatur esse. Nulla esse duis proident culpa sit eu sint.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797aa1e4b09dce5cfb05',
        'from': {
            'name': 'Shepard Hart',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Non ea officia voluptate do aute ea elit minim.',
        'content': 'Velit magna nostrud laboris consequat ut. Nisi esse non sunt dolore culpa ullamco. Ad non eiusmod esse adipisicing aute labore do reprehenderit culpa in eu occaecat qui.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'trash',
        'attachments': []
    },
    {
        'id': '5aaa797a20ae69f0c031707d',
        'from': {
            'name': 'Solis Cummings',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Incididunt reprehenderit fugiat ad ullamco nulla minim consequat sunt.',
        'content': 'Tempor exercitation minim reprehenderit culpa nostrud minim. Nulla irure incididunt officia anim Lorem. Cupidatat consectetur velit velit esse id veniam excepteur.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(33, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797aebeabe6c4ba22dc8',
        'from': {
            'name': 'Salazar Reed',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Qui duis id exercitation sint duis dolor excepteur qui tempor irure et minim culpa ad.',
        'content': 'Dolor est veniam ullamco esse eu ad deserunt fugiat reprehenderit officia id. Consectetur est minim incididunt consectetur Lorem deserunt deserunt. In do reprehenderit cillum dolor ea et quis aliqua labore dolore veniam et eu culpa.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'hours'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797a5e6ad95e0d2cf06a',
        'from': {
            'name': 'Dudley Richards',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Mollit do in laboris quis cillum mollit nulla non.',
        'content': 'Fugiat ut amet veniam irure ea esse eiusmod occaecat dolore aute magna dolor. Mollit elit sint ullamco aliqua deserunt qui amet ipsum ex qui. Officia tempor in consectetur eiusmod esse.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(30, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'sent',
        'attachments': [
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797a9270b42e1631ce7e',
        'from': {
            'name': 'Stuart Velez',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Minim proident ex id tempor veniam pariatur.',
        'content': 'Ullamco pariatur veniam aliqua amet proident proident fugiat velit esse. Amet in exercitation officia tempor do officia dolor aliquip. Non sunt adipisicing cillum est incididunt est velit dolore laborum enim nulla.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(31, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797ad2b38cdbd2865a4b',
        'from': {
            'name': 'Jo Meyers',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Anim ut id qui ipsum incididunt in minim veniam incididunt quis.',
        'content': 'Ad ullamco cillum cupidatat proident dolor qui eu. Sit amet reprehenderit irure sit eiusmod pariatur pariatur magna deserunt fugiat mollit ut. Et laborum fugiat mollit amet.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(98, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797b5f2fe71db8cd9feb',
        'from': {
            'name': 'Williamson Bonner',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Id aute in et veniam.',
        'content': 'Quis sunt ad est qui occaecat incididunt minim ex eiusmod pariatur proident Lorem laborum sint. Pariatur quis eu Lorem nulla sit enim. Dolor aute veniam eiusmod sunt ullamco officia dolore ad sint nulla labore.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(63, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797b090aa6894d6506e7',
        'from': {
            'name': 'Mccormick Roy',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Esse est nisi anim elit quis laboris ea eiusmod do voluptate velit.',
        'content': 'Sit ad veniam sint amet excepteur adipisicing ea aliqua tempor reprehenderit adipisicing minim ad nulla. Sunt Lorem pariatur est reprehenderit sit consequat aliquip amet duis laborum mollit adipisicing esse. Sint velit et elit nulla laborum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797b293f1c38175a4bce',
        'from': {
            'name': 'Gilbert Hurst',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Qui nulla occaecat do fugiat.',
        'content': 'Ullamco culpa Lorem adipisicing in exercitation dolor fugiat quis nulla. Veniam in cupidatat ea proident consectetur sunt anim elit consequat minim ex. Cillum veniam reprehenderit cillum labore elit irure cillum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(91, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' },
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b78cecb2170ce2900',
        'from': {
            'name': 'Moody Moses',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Veniam ut voluptate laborum nisi id ea Lorem qui quis adipisicing excepteur et.',
        'content': 'Magna tempor labore consequat occaecat eiusmod occaecat anim sint ad cupidatat est sint labore est. Reprehenderit cupidatat minim ullamco dolor cupidatat commodo consectetur id est commodo minim consectetur reprehenderit. Sint amet esse mollit voluptate proident cupidatat id nulla nostrud ad adipisicing minim laboris.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797bee6a8903eb58d310',
        'from': {
            'name': 'Ericka Alford',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Dolore aliquip velit consequat incididunt culpa ipsum fugiat magna exercitation ut consectetur ea.',
        'content': 'Elit eiusmod dolore est ex anim dolor culpa sint consequat. Deserunt nisi mollit anim anim esse exercitation magna aliqua. Sint laboris labore esse nostrud est esse minim id nulla ad nostrud ad irure.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b14299482420d2130',
        'from': {
            'name': 'Best Pruitt',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Irure fugiat ea ipsum eiusmod culpa deserunt proident esse.',
        'content': 'Consectetur amet sint aliquip sit labore do laborum officia duis Lorem qui sint adipisicing commodo. Proident non consequat do consectetur mollit consequat est fugiat. Duis dolor dolor sit et in consequat consequat quis deserunt Lorem nisi ullamco.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797bad58caabb50533bc',
        'from': {
            'name': 'Crosby Camacho',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Incididunt laboris reprehenderit ut exercitation exercitation aliquip consequat.',
        'content': 'Est fugiat aute dolor anim laboris ut consequat nulla cupidatat duis laborum cupidatat ullamco. Minim cupidatat ad aute pariatur labore irure cupidatat sunt anim nisi. Amet esse labore voluptate mollit consectetur proident adipisicing sit excepteur cillum ad.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b6be95c1f6af630f6',
        'from': {
            'name': 'Davenport Jennings',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Non non dolor laboris sit aliquip est pariatur ad in do duis Lorem.',
        'content': 'Anim qui incididunt ex deserunt occaecat laborum proident in deserunt. Anim ipsum qui aliquip laborum in ut elit quis labore et. Pariatur proident consequat fugiat nisi ullamco enim culpa nisi nisi adipisicing veniam.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(8, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797b8d06bbf8e950fa16',
        'from': {
            'name': 'Laurel Mathews',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Aute proident id id ad ad cupidatat.',
        'content': 'Do ad duis sunt dolor fugiat reprehenderit mollit adipisicing deserunt sunt minim. Id proident ullamco Lorem amet culpa velit eu officia excepteur. Laborum exercitation fugiat aute dolor magna non dolore ut.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(86, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797b759345ba3f5fcd2c',
        'from': {
            'name': 'Foster Giles',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Laboris anim excepteur consectetur occaecat ut non.',
        'content': 'Lorem nostrud et est Lorem irure veniam Lorem deserunt tempor nostrud culpa. Ut nulla amet irure magna reprehenderit culpa pariatur est ut sint ullamco nostrud. Pariatur dolor elit nulla cillum nostrud id.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(63, 'hours'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b8cfb86416e1acf49',
        'from': {
            'name': 'Juliet Erickson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Pariatur cillum pariatur dolore esse incididunt ut quis enim culpa.',
        'content': 'Commodo aliquip labore cillum esse in aute aliqua. Proident adipisicing Lorem deserunt dolore est do non magna Lorem officia laborum dolore dolor dolor. Ipsum aliqua velit incididunt dolor eu laborum pariatur ipsum duis duis sit incididunt velit.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(11, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797b93866411512a6026',
        'from': {
            'name': 'Johns Strickland',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Incididunt deserunt sint laboris commodo ea et ullamco voluptate cupidatat esse eiusmod qui.',
        'content': 'In dolore voluptate ullamco eu duis minim eiusmod duis anim minim. Dolore labore ipsum officia ipsum dolore commodo mollit. Esse fugiat commodo nulla dolor non commodo culpa laboris et id eiusmod laboris cupidatat velit.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(51, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'drafts',
        'attachments': []
    },
    {
        'id': '5aaa797b89f432a6a38811e1',
        'from': {
            'name': 'Sharlene Conley',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Lorem proident aliqua mollit aliquip sint velit.',
        'content': 'Aliqua commodo consectetur aute ut. Ipsum excepteur fugiat mollit adipisicing incididunt anim eiusmod non cupidatat. Commodo deserunt proident aute minim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(48, 'hours'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797ba0bafdf084a1c2b9',
        'from': {
            'name': 'Mallory Mcleod',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Non ex excepteur amet consequat est deserunt.',
        'content': 'Voluptate in pariatur Lorem pariatur eu et eu eiusmod aute esse. Est sint dolor Lorem do esse laboris minim excepteur sunt irure ex. Officia exercitation Lorem reprehenderit ut ut sunt qui aute.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b5f42c84c212a8e22',
        'from': {
            'name': 'Noemi Wooten',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Incididunt duis consequat irure qui velit deserunt velit consequat do eiusmod non sint sint tempor.',
        'content': 'Aliquip aliquip occaecat enim aliquip minim ea aliquip consectetur labore eiusmod adipisicing nostrud. Incididunt laboris tempor minim ipsum sint aliquip dolore anim in. Reprehenderit esse labore irure id cupidatat nostrud cupidatat Lorem fugiat est eu consectetur.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(24, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b13dbf07966dfbbc4',
        'from': {
            'name': 'Melendez Campbell',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Exercitation pariatur in culpa eiusmod aliqua et aute.',
        'content': 'Ut occaecat pariatur enim commodo ad dolor incididunt laboris occaecat nulla nulla. Velit voluptate veniam amet labore aliqua eiusmod adipisicing. Mollit minim consectetur labore ipsum adipisicing nisi enim officia.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b2f3b8ad312951b23',
        'from': {
            'name': 'Dale Munoz',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Anim ex irure culpa mollit ut anim laborum.',
        'content': 'Dolore dolore nisi quis pariatur sunt in commodo aute. Nisi adipisicing aliqua officia adipisicing dolor deserunt reprehenderit consectetur qui elit elit. Cillum incididunt nisi reprehenderit aliquip ullamco et.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(46, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b45d2c6b4dbeadb6d',
        'from': {
            'name': 'Monroe Jensen',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Do aliquip pariatur cupidatat dolor voluptate incididunt elit.',
        'content': 'Id adipisicing ullamco et est ullamco est. Sint laborum id veniam deserunt sunt tempor ut in sint reprehenderit reprehenderit. Nisi sit aliqua laboris veniam sunt.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(60, 'hours'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797be1df17814206c960',
        'from': {
            'name': 'Spence Henderson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Cillum ipsum nulla deserunt cupidatat officia nulla ex tempor enim labore.',
        'content': 'Enim occaecat ipsum dolore irure deserunt nostrud ipsum nulla adipisicing. Sunt occaecat et culpa adipisicing aliquip. Nostrud ut id deserunt voluptate mollit eiusmod qui id culpa.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797bb8c4f2416c15ead5',
        'from': {
            'name': 'Schneider Mcmahon',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Velit sunt deserunt tempor consectetur proident tempor ut laborum id anim consequat ullamco qui.',
        'content': 'Adipisicing consectetur adipisicing incididunt deserunt id nisi nulla eu excepteur. Sint ullamco nostrud minim esse do. Excepteur eu ut proident elit esse ex dolor consequat veniam mollit do excepteur.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'days'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b6c0c971c013c99ce',
        'from': {
            'name': 'Logan Hooper',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ex irure laborum eiusmod amet dolore.',
        'content': 'Sint in consequat in nisi cupidatat fugiat mollit in. Enim aliquip laboris sint aute nulla commodo sunt. Proident consequat occaecat pariatur ullamco Lorem ut tempor nisi in fugiat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(76, 'hours'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'promotions',
        'attachments': []
    },
    {
        'id': '5aaa797b7e978c829ad4a090',
        'from': {
            'name': 'Theresa Wallace',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Amet eu adipisicing qui aute ut tempor elit do eu tempor culpa voluptate.',
        'content': 'Adipisicing aliquip adipisicing ipsum reprehenderit excepteur anim laboris ex laboris labore non incididunt nulla. Anim et minim veniam duis laboris exercitation aliquip. Enim sit fugiat deserunt deserunt anim Lorem in enim fugiat duis Lorem.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'sent',
        'attachments': []
    },
    {
        'id': '5aaa797bc2c9cfc3272ec0df',
        'from': {
            'name': 'Carmella Noble',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ea anim eu ut consequat adipisicing tempor cillum deserunt velit incididunt tempor sunt incididunt.',
        'content': 'Lorem labore do deserunt magna. Deserunt aute ea consectetur nostrud aliqua minim sint labore laboris magna magna culpa. Ea ea consectetur excepteur occaecat ea consequat ea sint.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(76, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797bf62773bccbe26c28',
        'from': {
            'name': 'Mitchell Gilmore',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Cillum fugiat sit duis et aute.',
        'content': 'Id sint nulla nostrud id consequat occaecat aute ullamco Lorem velit ut deserunt. Ad cupidatat sunt velit fugiat anim laboris irure proident ipsum reprehenderit aliquip qui. In minim commodo nisi laborum aliqua duis.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'sent',
        'attachments': []
    },
    {
        'id': '5aaa797b2e3d4d3838668543',
        'from': {
            'name': 'Underwood Gregory',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Exercitation officia excepteur sit labore.',
        'content': 'Velit commodo laborum aliqua cillum dolor aliquip voluptate fugiat deserunt tempor. Reprehenderit magna nulla deserunt sunt aliquip consequat velit. Labore incididunt eiusmod ex consectetur ad dolor.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'sent',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b216d4dae2587b111',
        'from': {
            'name': 'Kathy Hudson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Exercitation duis aliqua nulla aliqua consequat nisi qui Lorem in duis.',
        'content': 'Dolor sunt deserunt culpa ut dolor amet enim irure incididunt quis laborum. Anim duis veniam velit dolor incididunt proident occaecat adipisicing dolore enim duis irure. Enim sint ad nostrud est.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(13, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797bdee66ceacbc84395',
        'from': {
            'name': 'Francine Carney',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Exercitation eu do nulla occaecat veniam magna veniam ut ad.',
        'content': 'Est deserunt est minim duis anim pariatur velit veniam consectetur duis ipsum tempor dolore. Excepteur tempor tempor esse ut aliquip nulla nulla nulla. Pariatur officia velit dolore officia qui quis non.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797ba53602f8abb16015',
        'from': {
            'name': 'Hood Peterson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Pariatur fugiat eiusmod fugiat quis consectetur laboris ipsum cillum non aliqua laboris.',
        'content': 'Duis amet Lorem mollit adipisicing exercitation elit laboris sint exercitation ad occaecat esse quis nostrud. Cillum esse aliquip voluptate ullamco dolore est duis anim ipsum duis ex dolor. Labore aliqua pariatur proident ad mollit duis duis non nulla dolore cupidatat quis cupidatat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b7cb106a8cb336dd3',
        'from': {
            'name': 'Henderson Cantu',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Consequat laboris quis exercitation sunt adipisicing cupidatat labore aliqua.',
        'content': 'Excepteur elit incididunt excepteur officia ex anim ut irure Lorem laborum cupidatat nisi dolor. Ut incididunt enim ut quis. Reprehenderit excepteur quis laborum cillum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(65, 'hours'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797bde9ab55ba5acae3b',
        'from': {
            'name': 'Erika Vasquez',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Lorem ullamco dolore quis pariatur ullamco esse.',
        'content': 'Veniam dolore Lorem aliqua cupidatat. Ut cupidatat officia occaecat exercitation enim Lorem aliquip. Nulla quis exercitation dolor excepteur eu in id incididunt irure fugiat ea sit eu.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(99, 'minutes'),
        'read': false,
        'starred': true,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'spam',
        'attachments': []
    },
    {
        'id': '5aaa797bbb553fecfd85fd40',
        'from': {
            'name': 'Bradley Pollard',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Mollit eu velit nostrud adipisicing incididunt qui anim nisi pariatur eiusmod irure incididunt.',
        'content': 'Sit quis est do culpa laboris. Excepteur consequat occaecat pariatur magna veniam. Fugiat ipsum velit consectetur exercitation eiusmod duis consectetur minim culpa do.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(82, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b5e86204599424bde',
        'from': {
            'name': 'Strong Cooper',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Quis anim minim velit ea.',
        'content': 'Aute aute sint reprehenderit et tempor anim consequat velit sit anim. Aute deserunt labore cupidatat ullamco. Consectetur nostrud consectetur fugiat tempor occaecat consectetur nulla voluptate.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, 'days'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'social',
        'attachments': []
    },
    {
        'id': '5aaa797b82e12dc2e0463b74',
        'from': {
            'name': 'Howe Maldonado',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Irure exercitation quis nulla irure ea minim nostrud anim id.',
        'content': 'Anim et aute voluptate fugiat laborum non culpa. Voluptate cupidatat commodo mollit et non nisi cillum duis sint mollit. Lorem officia ea ad consectetur excepteur laboris officia labore pariatur fugiat ad magna labore labore.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(66, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'sent',
        'attachments': []
    },
    {
        'id': '5aaa797b190799b146731084',
        'from': {
            'name': 'Lena Smith',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ad eiusmod ex velit dolore eu.',
        'content': 'Occaecat ipsum nulla reprehenderit tempor nulla culpa quis ex ad. Amet amet non aute non fugiat Lorem elit qui esse duis proident sit. Ex incididunt aliqua irure ea consectetur velit.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(39, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b6045321b043b9462',
        'from': {
            'name': 'Elisabeth Mcmillan',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sit anim sunt aute do enim occaecat et eiusmod.',
        'content': 'Minim non non quis esse Lorem aute. Laboris nisi ea do occaecat exercitation qui eiusmod ut magna dolor ea do dolore. Dolore pariatur esse non excepteur ad voluptate ullamco magna laborum quis.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(25, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b22aedcb21db59b25',
        'from': {
            'name': 'Mueller Dotson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Proident velit consequat proident elit ex nostrud eu cupidatat cupidatat anim ex dolor.',
        'content': 'Id minim ut ut labore officia. Id enim do eu duis nulla exercitation. Consectetur minim excepteur ipsum quis deserunt pariatur exercitation aliquip in.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(69, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' },
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797b4bdd8647076d0ee7',
        'from': {
            'name': 'Joseph Saunders',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Consequat duis eiusmod nulla anim aliqua ipsum.',
        'content': 'Sint dolor id do ullamco cupidatat mollit aliquip ullamco velit. Occaecat eu esse ut culpa. Laborum ea proident ut non excepteur.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(42, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b7722a587d02ab501',
        'from': {
            'name': 'Hilda Mcguire',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Cillum laborum amet dolor in magna cupidatat et consectetur sit sunt laborum ullamco.',
        'content': 'Ad quis commodo laboris dolor magna et incididunt excepteur incididunt ipsum consectetur. Dolor ullamco minim anim deserunt et minim culpa commodo qui occaecat. Aliqua incididunt in aliquip aliquip occaecat pariatur enim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(56, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797b6a715195941d5fca',
        'from': {
            'name': 'Rosella Barry',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Anim ullamco ex esse non amet commodo elit dolore proident commodo sint laborum.',
        'content': 'Officia voluptate eu ipsum tempor consequat sint proident nulla officia. Irure duis in esse laborum tempor irure aliqua velit voluptate eu amet ipsum exercitation. Dolor in ex et anim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(14, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797ba6f559e5520d469b',
        'from': {
            'name': 'Moore Hicks',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Consectetur sint nulla laboris exercitation minim eu dolore nisi deserunt dolore minim est qui ad.',
        'content': 'Id enim ea deserunt nostrud eiusmod. Duis veniam enim occaecat duis sint est. Voluptate id enim exercitation culpa commodo cillum ut nisi.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(83, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'social',
        'attachments': []
    },
    {
        'id': '5aaa797b3dbe1cc198446c67',
        'from': {
            'name': 'Sherry Watkins',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ipsum esse proident sunt nisi.',
        'content': 'Nisi minim consequat deserunt ut exercitation dolore est tempor et. Elit est pariatur id dolor non elit eu veniam quis quis ut est cupidatat. Ut consectetur magna anim ex duis do incididunt voluptate exercitation consequat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(97, 'hours'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797be72ef474ae3c1c2e',
        'from': {
            'name': 'Deleon Hood',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Nostrud dolore culpa esse ut consequat Lorem sit fugiat nulla elit pariatur duis nulla occaecat.',
        'content': 'Fugiat qui laborum Lorem deserunt enim ipsum non ea deserunt ut enim cillum proident eiusmod. Eu eu dolore eu nostrud laborum nulla. Ut sint nostrud excepteur adipisicing nulla sit.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797bc4e9863760eec156',
        'from': {
            'name': 'Brooke Ballard',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Pariatur proident minim amet deserunt consectetur voluptate esse sunt ea anim sit.',
        'content': 'Eiusmod ullamco adipisicing et dolore et labore anim consectetur sint do ipsum. Occaecat dolor do amet id magna ullamco nulla ipsum tempor. Magna laborum duis id laborum adipisicing sit officia aute elit.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(47, 'hours'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'drafts',
        'attachments': []
    },
    {
        'id': '5aaa797bddcddb4f5be9406f',
        'from': {
            'name': 'Kayla Yang',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ullamco culpa cupidatat ex ipsum magna cupidatat tempor pariatur consectetur Lorem amet ad est.',
        'content': 'Proident sunt est nisi id do veniam. Enim fugiat in aliquip adipisicing elit. Do adipisicing et ut do non eiusmod sint velit tempor veniam exercitation qui cupidatat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(9, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'trash',
        'attachments': []
    },
    {
        'id': '5aaa797bdd258edec01d1209',
        'from': {
            'name': 'Margret Harrison',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Esse irure aliquip officia excepteur commodo adipisicing duis elit eiusmod mollit in.',
        'content': 'Eiusmod labore aliquip laboris sint fugiat anim veniam ex. Mollit ipsum commodo in officia velit Lorem elit. Excepteur culpa Lorem aliquip ea.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(89, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797b5ac560fa1c716af0',
        'from': {
            'name': 'Henrietta Ruiz',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Irure consectetur labore laboris reprehenderit ex.',
        'content': 'Est aute incididunt dolore ex est adipisicing sint sit sint non laboris. Sit in ut nostrud est deserunt. Eiusmod pariatur veniam cillum sit quis occaecat irure exercitation officia.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(52, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b33a34a237301a3be',
        'from': {
            'name': 'Augusta Durham',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Culpa nostrud officia occaecat cillum est sint veniam laborum voluptate velit do eu.',
        'content': 'Anim dolor est commodo quis laborum aute velit mollit duis nostrud deserunt et consequat. Eu nostrud est enim adipisicing laboris proident cillum ex. Laborum est consequat veniam laborum sint aute.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(13, 'days'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b3b0f9219343435d7',
        'from': {
            'name': 'Mona Lane',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Dolor esse ea voluptate nulla cupidatat nostrud consectetur laboris nostrud tempor mollit tempor officia excepteur.',
        'content': 'Ut consequat amet exercitation officia elit laboris tempor excepteur. Reprehenderit quis sunt sit elit est mollit in exercitation est excepteur pariatur consectetur elit minim. Consequat aute deserunt officia nostrud irure esse aliqua exercitation ea non.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b4e446972ae0883c6',
        'from': {
            'name': 'Mann Silva',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sint sint enim adipisicing est.',
        'content': 'Cupidatat dolore nulla ex proident magna cupidatat aliquip amet quis ut minim consectetur reprehenderit. Occaecat proident exercitation sit officia deserunt et. Adipisicing laborum mollit quis enim nostrud duis magna ea nostrud aliquip ipsum irure.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'drafts',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797bb8945e71fccd04ad',
        'from': {
            'name': 'Mills Sutton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Occaecat eiusmod magna aute ipsum tempor voluptate enim sunt.',
        'content': 'Occaecat mollit veniam aute magna dolor excepteur culpa. Elit commodo ipsum incididunt non officia sit reprehenderit non in sit. Mollit irure cupidatat esse ex ex.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(28, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'promotions',
        'attachments': []
    },
    {
        'id': '5aaa797bd679c024d769ba85',
        'from': {
            'name': 'Helena Thornton',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ullamco magna sunt ad consectetur duis nostrud do ex cupidatat dolore culpa labore.',
        'content': 'Deserunt est fugiat elit eiusmod adipisicing officia. Ad exercitation occaecat consectetur labore reprehenderit commodo. Dolore irure ad do commodo anim.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(78, 'hours'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797b2c6a1d9da11159b2',
        'from': {
            'name': 'Ashley Salas',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Et ex commodo enim aliqua non nisi esse sunt ipsum in incididunt do.',
        'content': 'Commodo sint irure fugiat laboris eu deserunt anim occaecat aute commodo pariatur. Amet voluptate ex mollit incididunt duis consequat cupidatat cupidatat laborum officia nisi culpa sit. Aliqua non commodo consectetur adipisicing.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'social',
        'attachments': []
    },
    {
        'id': '5aaa797b9631e2dd8502088d',
        'from': {
            'name': 'Alana Pope',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Officia mollit irure id sint voluptate et enim esse sint minim in fugiat.',
        'content': 'Ipsum incididunt quis nisi aliqua eiusmod quis tempor. Consectetur reprehenderit dolor excepteur irure mollit consectetur cupidatat. Laboris reprehenderit Lorem irure anim cillum et.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'minutes'),
        'read': true,
        'starred': true,
        'labels': [
            { name: 'Business', color: '#3F51B5' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'trash',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797bcba2d81d66e65b57',
        'from': {
            'name': 'Dollie Bridges',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Ipsum minim elit duis officia aute anim magna mollit duis quis.',
        'content': 'Ex deserunt ut officia do. Lorem ullamco aute consectetur minim culpa. Ea incididunt dolore nulla excepteur nulla qui exercitation sit laborum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(95, 'days'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Business', color: '#3F51B5' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/2.jpg',
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797bae3fd8e713e90f4f',
        'from': {
            'name': 'Dillon Bright',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Consectetur ipsum dolor ullamco ut exercitation aliqua labore do ea ea dolore irure.',
        'content': 'Sunt nisi consequat reprehenderit ullamco ut consequat laboris laborum laboris magna irure culpa. Nisi nisi velit ut pariatur eiusmod velit consequat elit mollit laborum exercitation sunt. Excepteur magna et est enim deserunt nostrud consequat nisi quis ad Lorem officia eu cupidatat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'minutes'),
        'read': false,
        'starred': true,
        'labels': [
            { name: 'Fun', color: '#9C27B0' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b444d88ea82d91a29',
        'from': {
            'name': 'Emilia Robles',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Elit est qui laborum exercitation labore pariatur dolore commodo enim laboris enim ea.',
        'content': 'Laboris non est veniam incididunt. Culpa excepteur est aliquip amet duis occaecat amet aute aliqua. Amet ad cillum fugiat adipisicing consequat elit aliqua.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, 'weeks'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/3.jpg',
            'assets/img/attachments/3.jpg'
        ]
    },
    {
        'id': '5aaa797b5c321eb72721a6e0',
        'from': {
            'name': 'Ashley Mcdonald',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Do mollit consequat adipisicing sunt laborum proident labore.',
        'content': 'Laborum incididunt quis ullamco est ut. Elit proident dolor id voluptate sit. Ad Lorem dolor et amet deserunt eiusmod sunt ut in.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(74, 'days'),
        'read': false,
        'starred': true,
        'labels': [],
        'group': 'promotions',
        'attachments': [
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797baab617ae8261db15',
        'from': {
            'name': 'Sims Donovan',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Laboris exercitation ea do culpa aute non id nostrud dolor laborum duis eiusmod.',
        'content': 'Fugiat non eu sunt do et velit ipsum enim excepteur aute adipisicing pariatur pariatur. Cupidatat irure veniam enim eiusmod. Fugiat laborum culpa labore in culpa exercitation reprehenderit laborum cupidatat reprehenderit ad laborum.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'minutes'),
        'read': true,
        'starred': false,
        'labels': [
            { name: 'Fun', color: '#9C27B0' }
        ],
        'group': 'primary',
        'attachments': []
    },
    {
        'id': '5aaa797b003df0c30819f2d9',
        'from': {
            'name': 'Lolita Pearson',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Occaecat consectetur voluptate exercitation ullamco fugiat exercitation id sit in eu voluptate.',
        'content': 'Ut dolore mollit nulla nulla sint. Enim proident quis cillum cupidatat reprehenderit minim sunt voluptate. Fugiat ex dolore ullamco anim in aliqua est labore irure eiusmod sunt sint.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(68, 'days'),
        'read': true,
        'starred': true,
        'labels': [],
        'group': 'social',
        'attachments': []
    },
    {
        'id': '5aaa797b208c2ea735ab7793',
        'from': {
            'name': 'Patel Herman',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Sunt quis excepteur magna voluptate cupidatat nostrud ad do ut reprehenderit est.',
        'content': 'Anim quis sint labore in ad amet magna sit et. Adipisicing amet proident occaecat et adipisicing consectetur ullamco est tempor. Voluptate irure tempor pariatur magna nostrud officia mollit amet sint est.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'hours'),
        'read': true,
        'starred': true,
        'labels': [
            { name: 'Project X', color: '#03A9F4' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/5.jpg'
        ]
    },
    {
        'id': '5aaa797b03b5b5476d8d1ea5',
        'from': {
            'name': 'Montoya Franks',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Nulla aute excepteur labore nostrud dolor.',
        'content': 'Ex sint incididunt excepteur irure nisi in aute. Lorem do id ut et cillum laborum eu occaecat cillum nisi laboris. Enim consectetur anim mollit minim nulla minim mollit laborum labore enim adipisicing enim eiusmod aliqua.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(70, 'minutes'),
        'read': false,
        'starred': true,
        'labels': [],
        'group': 'spam',
        'attachments': [
            'assets/img/attachments/4.jpg',
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797b59fafe52cc3e672b',
        'from': {
            'name': 'Leona Cruz',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Voluptate dolore minim eiusmod Lorem aliquip consequat consequat id non minim nisi aliqua commodo esse.',
        'content': 'Aliquip exercitation qui id elit esse voluptate eu laborum ullamco laboris nulla mollit laboris. Duis veniam excepteur sit nostrud sint nulla. Do tempor ea fugiat eu dolor est tempor dolore id ad laborum officia.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/4.jpg'
        ]
    },
    {
        'id': '5aaa797b7d66917b33161398',
        'from': {
            'name': 'Lakeisha Hawkins',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Elit aute nostrud culpa nisi esse aliquip.',
        'content': 'Laboris ut dolore exercitation ipsum est cillum duis non commodo reprehenderit aute nisi. Ut laborum dolore ex nulla officia ullamco quis ex ipsum. Do exercitation cillum nulla laborum cupidatat officia fugiat exercitation occaecat cupidatat proident esse incididunt consequat.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(25, 'weeks'),
        'read': true,
        'starred': true,
        'labels': [],
        'group': 'promotions',
        'attachments': []
    },
    {
        'id': '5aaa797b3f628c5735462b01',
        'from': {
            'name': 'Trevino Castaneda',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Anim pariatur amet qui tempor aliquip dolore ut nostrud mollit deserunt esse.',
        'content': 'Consequat aliqua aliquip quis Lorem magna ea occaecat amet consectetur sunt ut incididunt nostrud. Ipsum id nostrud sint officia et in. Lorem proident incididunt pariatur pariatur aliqua dolor velit qui.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(73, 'hours'),
        'read': true,
        'starred': true,
        'labels': [],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/1.jpg'
        ]
    },
    {
        'id': '5aaa797badf3a933c5b770cf',
        'from': {
            'name': 'Gabrielle Goodwin',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Est voluptate quis sint nulla cupidatat voluptate irure.',
        'content': 'Pariatur ipsum irure officia anim non irure aliqua cillum aute excepteur ullamco. Voluptate dolor id nostrud dolore reprehenderit fugiat ipsum mollit culpa ex. Minim commodo nulla sunt elit id do eiusmod.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'weeks'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'primary',
        'attachments': []
    },
    {
        'id': '5aaa797befb33e435c8becfc',
        'from': {
            'name': 'Reese Guthrie',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Cupidatat nostrud dolore tempor sunt nisi consequat duis quis minim fugiat officia sunt eiusmod consequat.',
        'content': 'Anim esse excepteur mollit irure laboris mollit non ipsum dolor elit. Cupidatat adipisicing ad laborum ea est laborum id do quis. Elit minim exercitation commodo non consectetur.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'minutes'),
        'read': false,
        'starred': false,
        'labels': [
            { name: 'Project X', color: '#03A9F4' },
            { name: 'Priority', color: '#f44336' }
        ],
        'group': 'primary',
        'attachments': [
            'assets/img/attachments/2.jpg'
        ]
    },
    {
        'id': '5aaa797bb363ee213dde3ad0',
        'from': {
            'name': 'Albert Irwin',
            'mail': 'demo@demomail.com'
        },
        'to': {
            'name': 'David Smith',
            'mail': 'davidsmith@demomail.com'
        },
        'subject': 'Laboris do mollit deserunt et laborum et enim.',
        'content': 'Aute enim et incididunt irure consequat fugiat laborum. Aute magna qui do voluptate cillum. Nostrud deserunt cupidatat reprehenderit non duis tempor laboris occaecat nulla aliqua deserunt.',
        'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(52, 'hours'),
        'read': true,
        'starred': false,
        'labels': [],
        'group': 'social',
        'attachments': [
            'assets/img/attachments/1.jpg',
            'assets/img/attachments/5.jpg',
            'assets/img/attachments/4.jpg'
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=app-pages-apps-inbox-inbox-module.js.map