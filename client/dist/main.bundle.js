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

/***/ "../../../../../src/app/animations/headers.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return easeInHeaders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var easeInHeaders = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("headerAnimate", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".headerAnim", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".headerAnim", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("500ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("2s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: "translateX(-75%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateX(10px)",
                    offset: 0.5
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateX(0)",
                    offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/animations/home.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return easeIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var easeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("listAnimation", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(":enter", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(":enter", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("5s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.3,
                    transform: "translateY(-100%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateY(30px)",
                    offset: 0.5
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateY(0)",
                    offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/animations/homeGreeting.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return greeting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var greeting = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("greet", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".greetWords", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".greetWords", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("300ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: "translateY(-75%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateY(35px)",
                    offset: 0.3
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: "translateY(0)",
                    offset: 1.0
                })
            ]))
        ]), { optional: true })
    ])
]);
// trigger("greet", [
//   transition("* => *", [
//     query(".greetWords", style({ opacity: 0 }), {
//       optional: true
//     }),
//     query(
//       ".greetWords",
//       stagger("350ms", [
//         animate(
//           "3s ease-in-out",
//           keyframes([
//             style({
//               opacity: 1,
//               transform: "translateY(-100%)", //where it starts easing in
//               offset: 0
//             }),
//             style({
//               opacity: 1,
//               transform: "translateY(-30px)", //adjust position
//               offset: 0.5
//             }),
//             style({
//               opacity: 0,
//               transform: "translateY(100%)", //default position
//               offset: 0.9
//             })
//           ])
//         )
//       ]),
//       { optional: true }
//     )
//   ])
// ]);


/***/ }),

/***/ "../../../../../src/app/animations/logInForm.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var loginForm = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("enterLoginForm", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".enterLoginForm", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".enterLoginForm", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("200ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: "translateY(-100%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateY(-30px)",
                    offset: 0.5
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateY(0)",
                    offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/animations/login.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flipMotion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var flipMotion = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("flip", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".flip", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".flip", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("1000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("1s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: "translateX(75%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateY(-20px)",
                    offset: 0.5
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateX(0)",
                    offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/animations/video.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return video; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var video = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])("enterVideo", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])("* => *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".enterVideo", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(".enterVideo", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])("10000ms", [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("3s ease-in", Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateX(75%)",
                    offset: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 0.5,
                    transform: "translateY(-10px)",
                    offset: 0.5
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: "translateX(0)",
                    offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".links{\n    font-size: 17px;\n}\n\n.navbar-brand{\n    font-size: 27px;\n    padding-top: 17px;\n    text-shadow: 2px 2px 4px #000000;\n\n}\n\n.navbar{\n  background-color: #3b6063b0;\n\n}\n\nbody {\n  background-color: #fff9c4;\n}\n\nvideo{\n /* opacity: 0.7; */\n  background-image: url(\"/assets/images/BlueParticles.mp4\") center center / cover\n    no-repeat;\n  /* opacity: 1; */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -100;\n  width: 100%;\n}\n\n/* body {\n   display: flex;\n   min-height: 100vh;\n   flex-direction: column;\n }\n\n main {\n   flex: 1 0 auto;\n } */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class='navbar'>\n  <div class='container-fluid' @headerAnimate>\n    <a class='navbar-brand headerAnim'[routerLink]=\"['/']\">{{pageTitle}}</a>\n    <ul id=\"nav-mobile\" class=\"right library_Login\">\n      <li>\n        <a class=\"links headerAnim\" [routerLink]=\"['/library']\">Library</a>\n      </li>\n      <li *ngIf=\"!auth.isLoggedIn()\"><a class=\"links headerAnim\" routerLink=\"/login\">Sign in</a></li>\n      <li *ngIf=\"auth.isLoggedIn()\"><a class=\"links headerAnim\" routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}</a></li>\n      <li *ngIf=\"auth.isLoggedIn()\"><a class=\"links headerAnim\" (click)=\"auth.logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n\n    <footer class=\"fixed-bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l6 s12\">\n            <!-- <h5 class=\"white-text\">Footer Content</h5>\n            <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p> -->\n          <br><br>\n          </div>\n          <div class=\"col l4 offset-l2 s12\">\n          </div>\n        </div>\n      </div>\n    </footer>\n\n<!-- <nav class=\"footerWrapper\">\n  <div class=\"nav-wrapper\">\n    <div class=\"brand-logo\"></div>\n\n    <ul id=\"nav-mobile\" class=\"right library_Login\">\n    </ul>\n  </div>\n</nav> -->\n\n<video autoplay loop class=\"fillWidth enter\">\n  <source src=\"../../assets/images/BlueParticles.mp4\" type=\"video/mp4\" />Your browser does not support the video tag. I suggest you upgrade your browser.\n  <!-- <source src=\"../../assets/images/BlueParticles.mp4\" type=\"video/webm\" />Your browser does not support the video tag. I suggest you upgrade your browser. --> -->\n</video>\n<!-- <script>\n  $('.carousel.carousel-slider').carousel({ fullWidth: true });\n</script> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_headers_animations__ = __webpack_require__("../../../../../src/app/animations/headers.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        this.pageTitle = 'The Reading Exchange';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations_headers_animations__["a" /* easeInHeaders */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__library_library_detail_component__ = __webpack_require__("../../../../../src/app/library/library-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_add_book_component__ = __webpack_require__("../../../../../src/app/profile/add-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_13__library_library_component__["a" /* LibraryComponent */] },
    { path: 'library-detail/:isbn', component: __WEBPACK_IMPORTED_MODULE_14__library_library_detail_component__["a" /* LibraryDetailComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'add-book', component: __WEBPACK_IMPORTED_MODULE_16__profile_add_book_component__["a" /* AddBookComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__library_library_detail_component__["a" /* LibraryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_add_book_component__["a" /* AddBookComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_11__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_guard_service__["a" /* AuthGuardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"video-container\" [@enterVideo]=\"items.length\">\r\n\r\n  <div id=\"list\" class=\"enterVideo\">\r\n    <video autoplay loop class=\"fillWidth enter\">\r\n      <source src=\"../../assets/images/picking-book.mp4\" type=\"video/mp4\" />Your browser does not support the video tag. I suggest you upgrade your browser.\r\n    </video>\r\n  </div>\r\n</div>\r\n\r\n  <div id=\"container\" [@listAnimation]=\"items.length\">\r\n\r\n    <div id=\"list\" *ngFor=\"let item of items\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m12\">\r\n          <div class=\"card-panel\">\r\n            <span class=\"black-text\">\r\n              <p>Welcome to <strong>The Reading Exchange!</strong></p>\r\n              <p>This site allows you to exchange books you don't read anymore for books that are on your reading wish list!</p>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <br>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  text-align: center;\n  color: white; }\n\n.card-panel {\n  padding: 14px;\n  margin: -20% 0% 0% 0%;\n  border-radius: 30px;\n  width: 100%;\n  background-color: rgba(59, 96, 99, 0.69) !important;\n  top: -23em;\n  position: relative; }\n\n#container {\n  padding: 9em;\n  position: relative;\n  top: -10em; }\n\n.welcome {\n  padding: 0;\n  position: relative;\n  top: 1em;\n  font-size: 40px;\n  height: 0em;\n  opacity: 1; }\n\n.imageVideoScreenSettings {\n  height: auto;\n  width: auto;\n  top: 5px; }\n\nvideo {\n  left: 46%;\n  margin-bottom: -10%;\n  margin-left: 4%;\n  width: 90%;\n  height: 100%;\n  position: relative;\n  -webkit-transform: translate(-50%, -28%);\n  z-index: 0;\n  opacity: 0.80; }\n\n@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n  .card-panel {\n    padding: 14px;\n    margin: -3% 0% 0% 0%;\n    border-radius: 30px;\n    width: 100%;\n    background-color: rgba(31, 144, 182, 0.623); } }\n\n/* Portrait and Landscape */\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {\n  .card-panel {\n    padding: 4px;\n    margin: -27% 0% 0% -92%;\n    border-radius: 16px;\n    width: 229px;\n    background-color: #695a5a; }\n  .navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    height: 7em; }\n  video[_ngcontent-c1] {\n    left: 65%;\n    margin-bottom: -10%;\n    margin-left: 4%;\n    width: 90%;\n    height: 100%;\n    position: relative;\n    -webkit-transform: translate(-50%, 3%);\n    opacity: 0.5;\n    z-index: 0; }\n  #container {\n    padding: 13em;\n    opacity: 0.7;\n    font-size: 10px;\n    /* left: 9px; */\n    position: relative;\n    left: -1em;\n    border-radius: 10; }\n  div.video-container[_ngcontent-c1] {\n    position: absolute;\n    margin-bottom: -85px;\n    height: 100%;\n    padding: 0%;\n    left: -26%;\n    width: 122%;\n    height: 55%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_home_animations__ = __webpack_require__("../../../../../src/app/animations/home.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_video_animations__ = __webpack_require__("../../../../../src/app/animations/video.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_homeGreeting_animations__ = __webpack_require__("../../../../../src/app/animations/homeGreeting.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.items = ['a']; // using *ngFor method to iterate and trigger animation
        this.items = ['a'];
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations_home_animations__["a" /* easeIn */],
                __WEBPACK_IMPORTED_MODULE_2__animations_video_animations__["a" /* video */],
                __WEBPACK_IMPORTED_MODULE_3__animations_homeGreeting_animations__["a" /* greeting */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/library/library-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card.horizontal {\n  width: 97% !important;\n}\n\n#afterExchange {\n  color: #519ebb;\n  text-align: center;\n  margin: 0;\n  text-align: justify;\n  width: 100%;\n  position: relative;\n  left: 10em;\n  font-size: 1em;\n}\n\n#infoDetail {\n  color: hsl(196, 40%, 29%);\n  text-align: center;\n  margin: 0;\n  text-align: justify;\n  width: 100%;\n  position: relative;\n  left: 0em;\n  font-size: 2em;\n}\n\n.card {\n  height: auto;\n  border-radius: 15px;\n}\n\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  left: 1em;\n  width: 26em;\n}\n\nh1 {\n  text-align: center;\n  color: white;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n.card {\n  height: auto;\n  border-radius: 15px;\n}\n\n/* [ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important;\n} */\n\n.appearDiv {\n  position: relative;\n  left: -10em;\n}\n\n#appearContent {\n  width: 25%;\n  position: relative;\n  left: 4em;\n  font-size: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Book Details!</h1>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col sm12 m6 offset-m3\">\r\n\r\n    <div class=\"card blue-grey lighten-5\">\r\n      <div class=\"card-content\">\r\n        <div class=\"row\">\r\n          <div class=\"col sm12 m3\">\r\n            <a href=\"https://placeholder.com\">\r\n              <ng-container *ngIf=\"book.items[0].volumeInfo.imageLinks; then hasPic; else hasNoPic\"></ng-container>\r\n              <ng-template #hasPic>\r\n                <img src={{book.items[0].volumeInfo.imageLinks.thumbnail}}>\r\n              </ng-template>\r\n              <ng-template #hasNoPic>\r\n                <img src=\"../../assets/images/nocover.jpg\">\r\n              </ng-template>\r\n            </a>\r\n            <div class=\"row\">\r\n              <div class=\"col sm12 m9\">\r\n                <br>\r\n                <a (click)='findLenders(bookIsbn)' class=\"waves-effect waves-light btn-large\" ng-click=\"showme=true\">Exchange!</a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col sm12 m8\">\r\n            <p>\r\n              <strong class=\"header\">Title:</strong> {{book.items[0].volumeInfo.title}}</p>\r\n            <p>\r\n              <strong class=\"header\">Author:</strong>{{book.items[0].volumeInfo.authors}}</p>\r\n            <p>\r\n              <strong class=\"header\">Summary:</strong> {{book.items[0].volumeInfo.description}}</p>\r\n            <p>\r\n              <strong class=\"header\">Page Count:</strong> {{book.items[0].volumeInfo.pageCount}}</p>\r\n            <p>\r\n              <strong class=\"header\">Published:</strong> {{book.items[0].volumeInfo.publishedDate}}</p>\r\n            <p>\r\n              <strong class=\"header\">ISBN(s):</strong> {{bookIsbn}}</p>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div ng-app=\"\"> -->\r\n<!-- <h1>Ng-show & ng-hide</h1> -->\r\n<!-- <p class=\"description\">Click on the \"show\"-link to see the content.</p>\r\n  <button href=\"\" ng-click=\"showme=true\">Show</button>\r\n  <button ng-click=\"showme=false\">Hide</button>\r\n\r\n  <div class=\"wrapper\">\r\n    <p ng-hide=\"showme\">It will appear here!</p>\r\n    <h2 ng-show=\"showme\">This is mah content, yo!</h2>\r\n  </div>\r\n\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"lenders\" class=\"appearDiv\">\r\n  <div *ngFor=\"let lenderdetails of lenders\" id=\"afterExchange\">\r\n\r\n    <div class=\"row\" ng-show=\"showme\">\r\n      <div class=\"col sm12 m6 offset-m3\">\r\n        <div class=\"card blue-grey lighten-5\">\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col sm12 m3\" id=\"appearContent\">\r\n\r\n                <div>\r\n                  <p class=\"label\">Name:</p>{{lenderdetails.name}}</div>\r\n                <div>\r\n                  <p class=\"label\">Email:</p>{{lenderdetails.email}}</div>\r\n                <div>\r\n                  <p class=\"label\">Book ID:</p>{{lenderdetails._id}}</div>\r\n                <br>\r\n           <button (click)=\"startDeal(lenderdetails.email, bookIsbn, details.email, lenderdetails.name, lenderdetails.address, details.address)\" class=\"btn waves-effect waves-light\"\r\n                  type=\"submit\" routerLink=\"/profile\">Submit</button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/library/library-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryDetailComponent = /** @class */ (function () {
    function LibraryDetailComponent(route, searchService, auth) {
        this.route = route;
        this.searchService = searchService;
        this.auth = auth;
    }
    LibraryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params, 'the params we are pulling');
            _this.book = params['isbn'];
            _this.bookIsbn = params['isbn'];
            console.log(_this.book, 'isbn in the oninit');
            _this.getBook(_this.book);
        });
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    LibraryDetailComponent.prototype.getBook = function (isbn) {
        var _this = this;
        this.searchService.getBook(isbn).subscribe(function (data) { _this.book = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading book', _this.book); });
    };
    LibraryDetailComponent.prototype.findLenders = function (isbn) {
        var _this = this;
        console.log('starting the call from init');
        this.searchService.findLenders(isbn)
            .subscribe(function (res) {
            _this.lenders = res;
            console.log(_this.lenders, 'we are done');
        }, function (err) {
            console.log('Error occured');
        });
    };
    LibraryDetailComponent.prototype.startDeal = function (emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress, borroweraddress) {
        this.searchService.startDeal(emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress, borroweraddress)
            .subscribe(function (res) {
            console.log(res, 'we are done');
        }, function (err) {
            console.log('Error occured');
        });
    };
    LibraryDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library-detail',
            template: __webpack_require__("../../../../../src/app/library/library-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/library-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], LibraryDetailComponent);
    return LibraryDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/library/library.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search-section{\n    margin-left: 20px;    \n}\n\n.input-field{\n    width: 100px;\n}\n\n.btn.waves-effect.waves-light{\n    -ms-flex-line-pack: center;\n        align-content: center; \n}\n\n.card-action{\n    align: right;\n    border-radius: 15px;\n}\n\n.card-content{\n    width: 800px;   \n}\n\n.card-panel{\n    margin-left: 40px;\n    border-style: double;\n    border-width: 4px;\n}\n\n.card horizontal{\n   padding-right: 100px;\n}\n\n.materialize-textarea{\n    font-size: 13px;\n}\n\nlabel{\n    font-size: 17px;\n}\n\n.header{\n    font-size: 15px;\n}\n\nbutton{\n    margin-left: 80px;\n    background-color: #e57373;\n}\n\na{\n    color:#e57373;\n}\n\nimg{\n    padding-left: 10px;\n    padding-top: 28px;\n    padding-bottom: 10px;\n}\n\n\n  \n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m3\">\n    <div class=\"card-panel blue-grey lighten-5\">\n      <span class=\"black-text\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"titleTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"titleTextField\">Title</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"authorTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"authorTextField\">Author</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"isbnTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"isbnTextField\">ISBN</label>\n            </div>\n          </div>\n\n          <button class=\"btn waves-effect waves-light\" type=\"submit\">Submit</button>\n        </form>\n      </span>\n    </div>\n  </div>\n\n\n\n\n  <!-- Results -->\n\n  <!-- <div class=\"row\"> -->\n  <div *ngIf=\"books\" class=\"col s12 m9\">\n    <div *ngFor=\"let book of books.items\" class=\"card horizontal blue-grey lighten-5\">\n      <div class=\"card-image\">\n          <ng-container *ngIf=\"book.volumeInfo.imageLinks === undefined; then hasNoPic; else hasPic\"></ng-container> \n            <ng-template #hasPic>\n            <img src={{book.volumeInfo.imageLinks.thumbnail}}>\n            </ng-template>\n            <ng-template #hasNoPic>\n            <img src=\"../../assets/images/nocover.jpg\" width=\"100px\" height=\"200px\">\n            </ng-template>      \n      </div>\n      <!-- <div class=\"card-stacked\"> -->\n        <div class=\"card-content\">\n          <p id=\"title\"><strong class=\"header\">Title:</strong> {{book.volumeInfo.title}}</p>\n          <br>\n          <p id=\"author\"><strong class=\"header\">Author:</strong> {{book.volumeInfo.authors}}</p>\n          <br>\n          <p id=\"summary\"><strong class=\"header\">Summary:</strong>  {{book.volumeInfo.description}}</p>\n        </div>\n        <div class=\"card-action\">\n          <a [routerLink]=\"['/library-detail/', book.volumeInfo.industryIdentifiers[1].identifier]\">Book Details</a>\n        </div>\n      <!-- </div> -->\n    </div>\n  </div>\n  <!-- </div> -->\n\n  <!-- closes row -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(searchService) {
        this.searchService = searchService;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value);
        this.searchService.getBooks(f).subscribe(function (data) { _this.books = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading books', _this.books); });
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("../../../../../src/app/library/library.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\" id=\"loginForm\" @enterLoginForm>\n\n      <h1 class=\"form-signin-heading enterLoginForm\">Sign in</h1>\n      <p class=\"lead enterLoginForm\">Not a member? Please\n        <a class=\"enterLoginForm\" routerLink=\"/register\">register</a> instead.</p>\n\n      <form (submit)=\"login()\" >\n        <div class=\"form-group enterLoginForm\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group enterLoginForm\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default enterLoginForm\">Sign in!</button>\n      </form>\n\n      <br>\n\n    </div>\n    <div [@flip]>\n      <img class=\"flip\" id=\"one\" src=\"../assets/images/booXchange.jpg\">\n      <img class=\"flip\" id=\"two\" src=\"../assets/images/quoteBook.jpg\">\n    </div>\n  </div>\n\n  <!-- new row -->\n\n  <!-- <div class=\"row\">\n    <div class=\"col-md-12\" [@flip]=\"\">\n      <img class=\"flip\" id=\"six\" src=\"../assets/images/dreamBook.jpg\">\n      <img class=\"flip\" id=\"three\" src=\"../assets/images/quoteBook.jpg\">\n      <img class=\"flip\" id=\"four\" src=\"../assets/images/loveBooks.jpg\">\n      <img class=\"flip\" id=\"five\" src=\"../assets/images/bookTree.jpg\">\n    </div>\n  </div> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-12 {\n  width: 100%;\n  left: -15em; }\n\n.imageSize, #loginForm, #one, #two {\n  position: relative;\n  display: block;\n  width: 17em;\n  height: 25em; }\n\n#loginForm {\n  left: 39%; }\n\n#one {\n  left: 41em;\n  top: 0%; }\n\n#two {\n  left: 6%;\n  top: -25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_login_animations__ = __webpack_require__("../../../../../src/app/animations/login.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_logInForm_animations__ = __webpack_require__("../../../../../src/app/animations/logInForm.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl("/profile");
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations_login_animations__["a" /* flipMotion */],
                __WEBPACK_IMPORTED_MODULE_4__animations_logInForm_animations__["a" /* loginForm */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/add-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    text-align: center;\n    color: white;\n    text-shadow: 2px 2px 4px #000000;\n}\n\n.card-panel{\n    border-style: double;\n    border-width: 4px;\n}\n\nbutton{\n    background-color: #e57373;\n    margin-left: 275px;\n\n}\n\n.materialize-textarea {\n  font-size: 13px;\n}\n\nlabel {\n  font-size: 17px;\n}\n\n.card horizontal {\n  padding-right: 100px;\n}\n\n.materialize-textarea {\n  font-size: 13px;\n}\n\nlabel {\n  font-size: 17px;\n}\n\n.header {\n  font-size: 15px;\n}\n\nbutton {\n  margin-left: 42%;\n  background-color: #e57373;\n}\n\na {\n  color: #e57373;\n}\n\nimg {\n  padding-left: 10px;\n  padding-top: 28px;\n  padding-bottom: 10px;\n}\n\n.card-action {\n  align: right;\n  border-radius: 15px;\n}\n\n.card-content {\n  width: 800px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Add a book to exchange!</h1>\n<br>\n<br>\n<div class=\"row\">\n  <div class=\"col s12 m6 offset-m3\">\n    <div class=\"card-panel blue-grey lighten-5\">\n      <span class=\"black-text\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"titleTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"titleTextField\">Title</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"authorTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"authorTextField\">Author</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <textarea name=\"isbnTextField\" ngModel class=\"materialize-textarea\"></textarea>\n              <label for=\"isbnTextField\">ISBN</label>\n            </div>\n          </div>\n\n          <button class=\"btn waves-effect waves-light\" type=\"submit\">Submit</button>\n        </form>\n      </span>\n    </div>\n  </div>\n\n\n\n\n  <!-- Results -->\n\n  <!-- <div class=\"row\"> -->\n  <div *ngIf=\"books\" class=\"col s12 m8 offset-m2\">\n    <div *ngFor=\"let book of books.items\" class=\"card horizontal blue-grey lighten-5\">\n      <div class=\"card-image\">\n        <ng-container *ngIf=\"book.volumeInfo.imageLinks === undefined; then hasNoPic; else hasPic\"></ng-container>\n        <ng-template #hasPic>\n          <img src={{book.volumeInfo.imageLinks.thumbnail}}>\n        </ng-template>\n        <ng-template #hasNoPic>\n          <img src=\"../../assets/images/nocover.jpg\" width=\"100px\" height=\"200px\">\n        </ng-template>\n      </div>\n      <!-- <div class=\"card-stacked\"> -->\n      <div class=\"card-content\">\n        <p id=\"title\">\n          <strong class=\"header\">Title:</strong> {{book.volumeInfo.title}}</p>\n        <br>\n        <p id=\"author\">\n          <strong class=\"header\">Author:</strong> {{book.volumeInfo.authors}}</p>\n        <br>\n        <p id=\"summary\">\n          <strong class=\"header\">Summary:</strong> {{book.volumeInfo.description}}</p>\n      </div>\n      <div class=\"card-action\">\n        <a (click)='addBook(book.volumeInfo)'>Add book <br> to my list</a>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n  <!-- </div> -->\n  \n  <!-- closes row -->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(searchService, router, auth) {
        this.searchService = searchService;
        this.router = router;
        this.auth = auth;
        this.email = this.auth.getUserDetails().email;
    }
    AddBookComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value);
        this.searchService.getBooks(f).subscribe(function (data) { _this.books = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading books', _this.books); });
    };
    AddBookComponent.prototype.addBook = function (bookInfo) {
        this.searchService.addBook({ email: this.email, book: bookInfo });
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/profile/add-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n    text-shadow: 2px 2px 4px #000000;\n}\n\n#add-book {\n    text-shadow: 2px 2px 4px #000000;\n}\n\n.card-action {\n    text-align: center;\n}\n\n.card-title {\n    text-align: center;\n}\n\n/* .collapsible-header {\n    height: 60px;\n    font-size: 20px;\n    padding: 15px;\n} */\n\ntd {\n    height: 60px;\n}\n\nh1 {\n    color: white;\n}\n\n.card {\n    border-style: double;\n    border-width: 4px;\n}\n\na {\n    color: #e57373;\n}\n\n/* .collapsible-body {\n    background-color: white;\n} */\n\nbutton {\n    background-color: #e57373;\n}\n\n.container1 {\n    background-color: white;\n    padding: 20px;\n    border-style: double;\n    border-width: 4px;\n}\n\nh2 {\n    color: white;\n    text-align: center;\n    text-shadow: 2px 2px 4px #000000;\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Welcome, {{ details?.name }}!</h1>\r\n\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col s12 m4 offset-m4\">\r\n    <div class=\"card red lighten-2\">\r\n      <div class=\"card-content white-text\">\r\n        <span class=\"card-title\">Add a book to exchange!</span>\r\n      </div>\r\n      <div class=\"card-action\">\r\n        <a id=\"add-book\"[routerLink]=\"['/add-book']\">Add New Book</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"details.address == 'none'\"  id='address-alert' class='container1'>\r\n    <h3>You do not currently have an address in your account!  Please add an address to make any exchanges.</h3>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"updateAddress(f, details.email)\" novalidate>\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <textarea name=\"addressField\" ngModel></textarea>\r\n            <label for=\"addressField\">Address</label>\r\n          </div>\r\n        </div>\r\n\r\n        <button class=\"btn waves-effect waves-light\" type=\"submit\">Submit</button>\r\n      </form>\r\n</div>\r\n\r\n\r\n  <!-- <br> -->\r\n  \r\n  <!-- <ul class=\"collapsible popout\" data-collapsible=\"accordion\"> -->\r\n    <!-- <li> -->\r\n    <h2>My  Books</h2>\r\n      <div class=\"container1\">\r\n      <div class=\"myBooks\" ng-click=\"myFunc()\">\r\n       </div>\r\n      \r\n      <div >\r\n\r\n        <span>\r\n          <table class=\"bordered\">\r\n            <thead>\r\n              <tr>\r\n                <!-- <th>ID</th> -->\r\n                <th>Title</th>\r\n                <th>Author</th>\r\n                <th>Status</th>\r\n                <th>Borrower Address</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody *ngIf=\"details.books\">\r\n              <tr *ngFor='let book of details.books'>\r\n                <!-- <td>{{bookIsbn}}</td> -->\r\n                <td>\r\n                  <div>\r\n                  <div>\r\n                    <p>{{book.title}}</p>\r\n                  </div>\r\n                </div></td>\r\n                <td>\r\n                  <div>\r\n                    <div>\r\n                      <p>{{book.authors}}</p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngFor=\"let aDeal of details.deals\">\r\n                    <ng-container *ngFor='let aIdentifier of book.industryIdentifiers'>\r\n                      <span *ngIf='aDeal.isbn == aIdentifier.identifier && aDeal.status && aDeal.lender == details.email'>{{aDeal.status}}</span>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngFor=\"let aDeal of details.deals\">\r\n                    <ng-container *ngFor='let aIdentifier of book.industryIdentifiers'>\r\n                      <span *ngIf='aDeal.isbn == aIdentifier.identifier && aDeal.status && aDeal.lender == details.email'>{{aDeal.borrowerAddress}}</span>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngFor=\"let aDeal of details.deals\">\r\n                    <ng-container *ngFor='let aIdentifier of book.industryIdentifiers'>\r\n                      <a *ngIf='aDeal.isbn == aIdentifier.identifier && aDeal.status == \"RequestedToBorrow\" && aDeal.lender == details.email' (click)='acceptDeal(aDeal._id)' class=\"btn waves-effect waves-light\" routerLink=\"/profile\">Accept Deal</a>\r\n                      <a *ngIf='aDeal.isbn == aIdentifier.identifier && aDeal.status == \"shipBook\" && aDeal.lender == details.email' (click)='shipBook(aDeal._id)' class=\"btn waves-effect waves-light\" routerLink=\"/profile\">Book Shipped</a>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </td>\r\n              </tr> \r\n            </tbody>\r\n          </table>\r\n  \r\n        </span>\r\n      </div>\r\n\r\n      \r\n\r\n      \r\n    <!-- </li> -->\r\n    <!-- <li>\r\n      <div class=\"collapsible-header\">\r\n        Books Borrowed</div>\r\n      <div class=\"collapsible-body\">\r\n        <span>\r\n          <table class=\"bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Title</th>\r\n                <th>Author</th>\r\n                <th>Requested</th>\r\n                <th>Accepted</th>\r\n                <th>Shipped to Reader</th>\r\n                <th>Due Date</th>\r\n                <th>Shipped to Lender</th>\r\n  \r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n  \r\n        </span>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"collapsible-header\">\r\n        Books Lent</div>\r\n      <div class=\"collapsible-body\">\r\n        <span>\r\n          <table class=\"bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Title</th>\r\n                <th>Author</th>\r\n                <th>Requested</th>\r\n                <th>Accepted</th>\r\n                <th>Shipped to Reader</th>\r\n                <th>Due Date</th>\r\n                <th>Shipped to Lender</th>\r\n  \r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Number</td>\r\n                <td>String</td>\r\n                <td>String</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n                <td>Date</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n  \r\n        </span>\r\n      </div>\r\n    </li> -->\r\n  <!-- </ul> -->\r\n  </div>\r\n\r\n\r\n  <h2>My Borrowed Books</h2>\r\n      <div class=\"container1\">\r\n      <div class=\"myBooks\" ng-click=\"myFunc()\">\r\n       </div>\r\n      \r\n      <div >\r\n\r\n        <span>\r\n          <table class=\"bordered\">\r\n            <thead>\r\n              <tr>\r\n                <!-- <th>ID</th> -->\r\n                <th>ISBN</th>\r\n                <th>Lender</th>\r\n                <th>Status</th>\r\n                <th>Date Requested</th>\r\n                <th>Lender Address</th>\r\n                <th>Shipping Cost</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngFor=\"let aBorrowDeal of details.deals\">\r\n              <ng-container *ngIf=\"aBorrowDeal.borrower == details.email\">\r\n              <tr>\r\n                <!-- <td>{{bookIsbn}}</td> -->\r\n                <td>\r\n                  <div>\r\n                  <div>\r\n                    <p>{{aBorrowDeal.isbn}}</p>\r\n                  </div>\r\n                </div></td>\r\n                <td>\r\n                  <div>\r\n                    <div>\r\n                      <p>{{aBorrowDeal.lender}}</p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>{{aBorrowDeal.status}}</td>\r\n                <td>{{aBorrowDeal.date}}</td>\r\n                <td>{{aBorrowDeal.lenderAddress}}</td>\r\n                <td>$9.99</td>\r\n                <td>\r\n                <a *ngIf='aBorrowDeal.status == \"sendPayment\" && aBorrowDeal.borrower == details.email' (click)='sendPayment(aBorrowDeal._id)' class=\"btn waves-effect waves-light\" routerLink=\"/profile\">Sent Payment</a>\r\n                <a *ngIf='aBorrowDeal.status == \"shipBookBack\" && aBorrowDeal.borrower == details.email' (click)='shipBookBack(aBorrowDeal._id)' class=\"btn waves-effect waves-light\" routerLink=\"/profile\">Shipped Back</a>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </ng-container>\r\n            </tbody>\r\n          </table>\r\n  \r\n        </span>\r\n      </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(searchService, auth, router) {
        this.searchService = searchService;
        this.auth = auth;
        this.router = router;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            console.log(_this.details);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.acceptDeal = function (dealNumber) {
        return this.searchService.acceptDeal(dealNumber);
    };
    ProfileComponent.prototype.sendPayment = function (dealNumber) {
        return this.searchService.sendPayment(dealNumber);
    };
    ProfileComponent.prototype.shipBook = function (dealNumber) {
        return this.searchService.shipBook(dealNumber);
    };
    ProfileComponent.prototype.shipBookBack = function (dealNumber) {
        return this.searchService.shipBookBack(dealNumber);
    };
    ProfileComponent.prototype.updateAddress = function (address, useremail) {
        var _this = this;
        console.log(address);
        return this.searchService.updateAddress(address.form.value.addressField, useremail)
            .subscribe(function (res) {
            console.log(res, 'after service');
            _this.details.address = res.address;
        }, function (err) {
            console.log('Error occured');
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());

//   getUserBooks(user) {
//     console.log('starting the call from init');
//     this.searchService.getUserBooks(user)
//     .subscribe(
//       res => {
//         this.profileBooks = res;
//         console.log(this.profileBooks, 'we are done');
//       },
//       err => {
//         console.log('Error occured');
//       }
//     );
//   }
// }


/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SearchService = /** @class */ (function () {
    function SearchService(http, router) {
        this.http = http;
        this.router = router;
    }
    SearchService.prototype.handleError = function (error, otherthing) {
        console.log(error);
    };
    // Uses http.get() to load data from a single API endpoint
    SearchService.prototype.getBooks = function (f) {
        var titleCall = '';
        var authorCall = '';
        var isbnCall = '';
        if (f.form.value.titleTextField !== '') {
            titleCall = f.value.titleTextField;
        }
        else {
            titleCall = '';
        }
        if (f.form.value.authorTextField !== '') {
            authorCall = '+inauthor:' + f.value.authorTextField;
        }
        else {
            authorCall = '';
        }
        if (f.form.value.isbnTextField !== '') {
            isbnCall = '+isbn:' + f.value.isbnTextField;
        }
        else {
            isbnCall = '';
        }
        isbnCall = isbnCall.split('-').join('');
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + titleCall + authorCall + isbnCall);
    };
    SearchService.prototype.getBook = function (isbn) {
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
    };
    /** POST: add a new hero to the database */
    SearchService.prototype.addBook = function (book) {
        var _this = this;
        console.log(book, 'before service');
        this.http.post('/api/add-book', book)
            .subscribe(function (res) {
            console.log(res, 'after service');
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.log('Error occured');
        });
    };
    SearchService.prototype.getUserBooks = function (user) {
        var userid = String(user._id);
        return this.http.get("api/getprofilebooks/" + userid);
    };
    SearchService.prototype.findLenders = function (isbn) {
        return this.http.get("api/getlenders/" + isbn);
    };
    SearchService.prototype.startDeal = function (emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress, borroweraddress) {
        // tslint:disable-next-line:prefer-const
        var dealInfo = { 'lenderEmail': emailToDB,
            'isbn': isbnToDB,
            'borrowerEmail': borrowerEmail,
            'status': 'RequestedToBorrow',
            'lenderName': lendername,
            'lenderAddress': lenderaddress,
            'borrowerAddress': borroweraddress };
        console.log(dealInfo);
        return this.http.post("/api/startdeal", dealInfo);
    };
    SearchService.prototype.acceptDeal = function (dealNumber) {
        // tslint:disable-next-line:prefer-const
        var dealNumberService = { dealNumber: dealNumber };
        console.log(dealNumberService, 'the deal object being sent in the accept service');
        return this.http.post("/api/acceptdeal", dealNumberService)
            .subscribe(function (res) {
            console.log(res, 'after service');
        }, function (err) {
            console.log('Error occured');
        });
    };
    SearchService.prototype.sendPayment = function (dealNumber) {
        // tslint:disable-next-line:prefer-const
        var dealNumberService = { dealNumber: dealNumber };
        console.log(dealNumberService, 'the deal object being sent in the send payment service');
        return this.http.post("/api/sendpayment", dealNumberService)
            .subscribe(function (res) {
            console.log(res, 'after service');
        }, function (err) {
            console.log('Error occured');
        });
    };
    SearchService.prototype.shipBook = function (dealNumber) {
        // tslint:disable-next-line:prefer-const
        var dealNumberService = { dealNumber: dealNumber };
        return this.http.post("/api/shipbook", dealNumberService)
            .subscribe(function (res) {
            console.log(res, 'after service');
        }, function (err) {
            console.log('Error occured');
        });
    };
    SearchService.prototype.shipBookBack = function (dealNumber) {
        // tslint:disable-next-line:prefer-const
        var dealNumberService = { dealNumber: dealNumber };
        return this.http.post("/api/shipbookback", dealNumberService)
            .subscribe(function (res) {
            console.log(res, 'after service');
        }, function (err) {
            console.log('Error occured');
        });
    };
    SearchService.prototype.updateAddress = function (userAddress, userEmail) {
        // tslint:disable-next-line:prefer-const
        var updateAddressObject = { address: userAddress, email: userEmail };
        console.log(updateAddressObject, 'this is the update address object');
        return this.http.post("/api/updateaddress", updateAddressObject);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchService);
    return SearchService;
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