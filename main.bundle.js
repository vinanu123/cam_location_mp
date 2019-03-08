webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"] {\r\n    display: none;\r\n  }\r\n  \r\n  .custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n  \r\n    cursor: pointer;\r\n  }\r\n  \r\n  body,\r\n  .container,\r\n  html {\r\n    background: white !important;\r\n  }\r\n  \r\n  .container {\r\n    padding: 0;\r\n  }\r\n  \r\n  .custom {\r\n    text-align: center;\r\n    padding: 3%;\r\n    background: #1372af;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    box-shadow: 0px 0px 9px 1px grey;\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .btn-primary {\r\n    color: #fff;\r\n    background-color: #0f9ade;\r\n    border-color: transparent;\r\n    border-radius: 20px;\r\n    padding: 3%;\r\n    box-shadow: 0px 3px 7px 0px #a3a0a0;\r\n    margin: 4%;\r\n  }\r\n  \r\n  .footer {\r\n    text-align: center;\r\n    font-size: x-large;\r\n    position: fixed;\r\n    bottom: 0%;\r\n    width: 100%;\r\n    font-weight: normal;\r\n    color: rgb(18, 77, 240);\r\n    background: #efeded;\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n  }\r\n\r\n  .p\r\n  {\r\n    color:#0f9ade;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    border-bottom: 1px solid #0f9ade;\r\n    border-right: 1px solid #0f9ade;\r\n    padding:10px;\r\n    margin-left: 10px;\r\n    border-radius:10px;\r\n    box-shadow: 0px 3px 7px 0px #a3a0a0;\r\n  }\r\n  \r\n  hr\r\n  {\r\n    width: 276px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n</head>\n\n<div class=\"container\">\n  <div class=\"custom\">\n    <p>POC - Camera and File using angular 4</p>\n  </div>\n\n\n  <label class=\"btn btn-primary\">\n    <input type=\"file\" accept=\"image/*\" capture=\"environment\" />\n    Camera for mobile <span class=\"glyphicon glyphicon-camera\"></span>\n  </label>\n\n  <label class=\"btn btn-primary\">\n    <input type=\"file\"  capture=\"environment\" />\n    File <span class=\"glyphicon glyphicon-file\"></span>\n  </label>\n\n  <div style=\"background-color:rgb(207, 222, 240)\">\n    <input type=\"file\" name=\"file\">\n  </div>\n\n  <label class=\"btn btn-primary\" (click)=\"showcam()\">\n   Camera for desktop <span class=\"glyphicon glyphicon-camera\"></span>\n  </label>\n  <webcam [hidden]=\"!isshow\"></webcam>\n<hr>\n  \n   <label class=\"p\">Permissions</label><br><br>\n   <div class=\"permission\">\n  <label class=\"btn btn-primary\" id=\"getPositionBtn\" (click)=\"getNotification()\">\n   Notification  <span class=\"glyphicon glyphicon-bell\"></span>\n  </label>\n\n  <label class=\"btn btn-primary\" id=\"getPositionBtn\" (click)=\"getLocation()\">\n    Geolocation  <span class=\"glyphicon glyphicon-map-marker\"></span>\n  </label>\n\n  <label class=\"btn btn-primary\" id=\"getPositionBtn\" (click)=\"getCamera()\">\n      <input type=\"file\" accept=\"image/*\" capture=\"environment\" />\n     Camera  <span class=\"glyphicon glyphicon-camera\"></span>\n  </label>\n\n</div>\n\n  <div class=\"footer\">\n    Virtusa\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.isshow = false;
    }
    AppComponent.prototype.showcam = function () {
        this.isshow = true;
    };
    //   NOTIFICATION***********************************************************
    AppComponent.prototype.getNotification = function () {
        Notification.requestPermission().then(function (result) {
            if (result === 'denied') {
                console.log('Permission wasn\'t granted. Allow a retry.');
                return;
            }
            if (result === 'default') {
                console.log('The permission request was dismissed.');
                return;
            }
            console.log('Permission was granted for notifications');
        });
    };
    //   LOCATION*******************************************************************
    AppComponent.prototype.getLocation = function () {
        navigator.geolocation.getCurrentPosition(success, error, options);
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        function success(pos) {
            var crd = pos.coords;
            console.log('Current position:');
            console.log("Latitude : " + crd.latitude);
            console.log("Longitude: " + crd.longitude);
            // console.log(`More or less ${crd.accuracy} meters.`);
        }
        function error(err) {
            console.warn("ERROR(" + err.code + "): " + err.message);
        }
    };
    //   CAMERA***********************************************************************
    AppComponent.prototype.getCamera = function () {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
            .catch(function (err) { console.log(err.name + ": " + err.message); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('videoElement'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "videoElement", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/fesm5/ngx-webcam.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_webcam__["a" /* WebcamModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map