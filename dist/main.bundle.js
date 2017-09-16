webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alltimes/alltimes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alltimesheets {\n  background-color: white;\n  font-family: \"Roboto\";\n}\n\n.header {\n  padding: 1em;\n  color: white;\n  background-color: #0275D8;\n  margin-bottom: 1em;\n}\n\nh2 {\n  font-weight: bolder;\n  font-size: xx-large;\n  display: inline;\n}\n\nh3 {\n  font-weight: lighter;\n  font-size: xx-large;\n  display: inline;\n}\n\np-dataTable >>> .ui-datatable-footer {\n  min-height: 60px;\n}\n\np-dataTable >>> .ui-datatable-footer input {\n  margin-left: 0.5em;\n  font-size: larger;\n  padding: 3px;\n}\n\np-dataTable >>> .ui-datatable-footer {\n  min-height: 60px;\n}\n\np-dataTable >>> .selectBoxColumn {\n  width: 43px;\n}\n\np-contextMenu >>> .ui-menuitem-active a {\n  background-color: #F15B2A !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alltimes/alltimes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alltimesheets ui-g\">\n\n\n  <div class=\"header ui-g-12\">\n\n    <h2>\n      All Timesheets\n    </h2>\n    <h3>\n      Click to edit Users and Projects\n    </h3>\n\n  </div>\n\n\n  <p-dataTable #dt [value]=\"allTimesheetData\" class=\"ui-g-12\" sortField=\"startTime\" sortOrder=\"1\" emptyMessage=\"No time entries found\"\n    [reorderableColumns]=\"true\" columnResizeMode=\"fit\" [resizableColumns]=\"true\" [globalFilter]=\"tableSearch\" exportFilename=\"users\"\n    [editable]=\"true\" (onEditComplete)=\"onEditComplete($event)\" [(selection)]=\"selectedRows\" (onRowSelect)=\"onRowSelect($event)\"\n    [contextMenu]=\"tableContextMenu\" [paginator]=\"true\" [rows]=\"5\" [rowsPerPageOptions]=\"[5,10,15,20]\" [totalRecords]=\"recordCount\"\n    [pageLinks]=\"8\" [lazy]=\"true\" (onLazyLoad)=\"loadTimes($event)\">\n\n    <p-column selectionMode=\"multiple\" styleClass=\"selectBoxColumn\"></p-column>\n\n    <p-column field=\"user\" header=\"User\" [editable]=\"true\"></p-column>\n    <p-column field=\"project\" header=\"Project\" [filter]=\"true\" filterPlaceholder=\"Type a Project\" filterMatchMode=\"equals\" [style]=\"{'overflow':'visible'}\"\n      [editable]=\"true\">\n      <ng-template pTemplate=\"filter\" let-col>\n        <p-dropdown [options]=\"allProjects\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\"\n          styleClass=\"ui-column-filter\"></p-dropdown>\n      </ng-template>\n      <ng-template let-col let-project=\"rowData\" pTemplate=\"editor\">\n        <p-dropdown [(ngModel)]=\"project[col.field]\" [options]=\"allProjects\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\"></p-dropdown>\n      </ng-template>\n\n    </p-column>\n    <p-column field=\"category\" header=\"Category\" [sortable]=\"true\"></p-column>\n    <p-column field=\"startTime\" header=\"Start Time\" [sortable]=\"true\"></p-column>\n    <p-column field=\"endTime\" header=\"End Time\"></p-column>\n    <p-footer>\n      <label for=\"tableSearch\">Search: </label>\n      <input id=\"tableSearch\" #tableSearch type=\"text\" placeholder=\"Search All The Things\">\n      <button type=\"button\" pButton icon=\"fa-table\" label=\"Export\" (click)=\"dt.exportCSV()\" style=\"float:right;\"></button>\n    </p-footer>\n  </p-dataTable>\n\n  <p-contextMenu #tableContextMenu [model]=\"contextMenu\"></p-contextMenu>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/alltimes/alltimes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlltimesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dexie__ = __webpack_require__("../../../../dexie/dist/dexie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dexie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dexie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MAX_EXAMPLE_RECORDS = 1000;
var AlltimesComponent = /** @class */ (function () {
    function AlltimesComponent() {
        this.allTimesheetData = [
            { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
            { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
            { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
            { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },
        ];
        this.allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];
        this.allProjects = this.allProjectNames.map(function (proj) {
            return { label: proj, value: proj };
        });
        // for (let x = 0; x < 5; x++) {
        //   this.allTimesheetData = this.allTimesheetData.concat(this.allTimesheetData);
        // }
        this.recordCount = this.allTimesheetData.length;
        this.configureDatabase();
        this.populateDatabase();
    }
    AlltimesComponent.prototype.configureDatabase = function () {
        this.db = new __WEBPACK_IMPORTED_MODULE_2_dexie___default.a('AgileTimes');
        // Define a schema
        this.db.version(1).stores({
            timesheet: 'id,user,project,category,startTime,endTime,date'
        });
    };
    AlltimesComponent.prototype.populateDatabase = function () {
        var _this = this;
        this.getRecordCount().then(function (count) {
            _this.recordCount = count;
            if (!count) {
                _this.resetDatabase();
            }
        });
    };
    AlltimesComponent.prototype.generateRandomUser = function (id) {
        var names = ["Joe", "Mary", "Phil", "Karen", "Si", "Tim", "Rohit", "Jenny", "Kim", "Greg", "Danni"];
        var allProjectNames = ['Payroll App', 'Mobile App', 'Agile Times'];
        var allCategories = ['Frontend', 'Backend', 'Operations'];
        var newUser = {
            id: id,
            user: names[id % names.length],
            project: allProjectNames[id % allProjectNames.length],
            category: allCategories[id % allCategories.length],
            startTime: Math.round(Math.random() * 1000),
            endTime: Math.round(Math.random() * 1000),
            date: Math.round(Math.random() * 100000)
        };
        newUser.endTime += newUser.startTime; // to make sure it's later
        return newUser;
    };
    AlltimesComponent.prototype.getRecordCount = function () {
        return this.db.table("timesheet").count();
    };
    AlltimesComponent.prototype.resetDatabase = function () {
        var that = this;
        this.dt.loading = true;
        this.db.table("timesheet").clear().then(function () {
            console.log("Database Cleared");
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].range(0, MAX_EXAMPLE_RECORDS).do(function (id) {
                var randomUser = that.generateRandomUser(id);
                that.db.table("timesheet").add(randomUser);
                if (id % 100 == 0) {
                    that.getRecordCount().then(function (count) {
                        that.recordCount = count;
                    });
                }
            }, function (err) {
                console.log("Do Error: %s", err);
            }, function () {
                console.log("Do complete");
                that.dt.loading = false;
                that.dt.reset();
            }).subscribe(function () {
                console.log("Finished Reset database");
                that.getRecordCount().then(function (count) {
                    that.recordCount = count;
                });
            });
        });
    };
    AlltimesComponent.prototype.loadTimes = function (event) {
        var _this = this;
        console.log(JSON.stringify(event));
        var table = this.db.table("timesheet");
        var query;
        // Dexie doesn't support ordering AND filtering, so we branch here
        // Alternative strategies here: https://github.com/dfahlander/Dexie.js/issues/297
        if (event.filters && event.filters["project"]) {
            query = table.where("project").equals(event.filters["project"]["value"]);
        }
        else if (event.globalFilter) {
            query = table.where("project").startsWithIgnoreCase(event.globalFilter)
                .or("user").startsWithIgnoreCase(event.globalFilter)
                .or("category").startsWithIgnoreCase(event.globalFilter);
        }
        else {
            query = table.orderBy(event.sortField);
        }
        query = query
            .offset(event.first)
            .limit(event.rows);
        if (event.sortOrder == -1) {
            query = query.reverse();
        }
        ;
        query.toArray(function (nextBlockOfTimes) {
            // console.log("Loaded times: %s", JSON.stringify(nextBlockOfTimes));
            _this.allTimesheetData = nextBlockOfTimes;
        });
    };
    AlltimesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextMenu = [
            { label: 'Debug', icon: 'fa-bug', command: function (event) { return _this.onDebug(_this.selectedRows); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.onDelete(_this.selectedRows); } }
        ];
    };
    AlltimesComponent.prototype.onDebug = function (selectedRows) {
        console.log(JSON.stringify(selectedRows));
    };
    AlltimesComponent.prototype.onDelete = function (selectedRows) {
        this.allTimesheetData = this.allTimesheetData.filter(function (row) {
            return !selectedRows.includes(row);
        });
    };
    AlltimesComponent.prototype.onEditComplete = function (editInfo) {
        var fieldChanged = editInfo.column.field;
        var newRowValues = editInfo.data;
        alert("You edited " + fieldChanged + " to " + newRowValues[fieldChanged]);
    };
    AlltimesComponent.prototype.onRowSelect = function (rowInfo) {
        //console.log(JSON.stringify(rowInfo.data)); // or this.selectedRow
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("dt"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTable"]) === "function" && _a || Object)
    ], AlltimesComponent.prototype, "dt", void 0);
    AlltimesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-alltimes',
            template: __webpack_require__("../../../../../src/app/alltimes/alltimes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alltimes/alltimes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlltimesComponent);
    return AlltimesComponent;
    var _a;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/alltimes.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-body {\n  margin-left: 135px;\n}\n\n#header {\n  background-color: #F0F3F5;\n  height: 60px;\n  position: fixed;\n  top: 0px;\n  z-index: 99;\n  width: 100%;\n}\n\n#top-logo {\n  height: 60px;\n}\n\n#notifications {\n  color: blue;\n  float: right;\n}\n\n#sidenav, #sidenav-mini {\n  height: 100%;\n  position: fixed;\n  top: 60px;\n  padding-left: 0px;\n  padding-top: 1em;\n  background-color: #2D353C !important;\n}\n\n#content-body {\n  padding-top: 55px;\n}\n\n#minigutter {\n  display:none;\n}\n\n/*\n\n@media screen and (min-width: 40.063em) {\n*/\n\n@media only screen and (max-width: 1000px) {\n\n  #sidegutter {\n    display: none;\n  }\n\n  #minigutter {\n    display: block;\n  }\n\n}\n\n/*\n@media only screen and (max-width: 40em) {\n*/\n@media only screen and (max-width: 400px) {\n\n\n  #sidegutter {\n    display: none;\n  }\n\n  #minigutter {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-g-nopad\" id=\"header\">\n\n  <div class=\"ui-g-10\">\n    <img src=\"assets/img/logo-clear.svg\" id=\"top-logo\"/>\n  </div>\n  <div class=\"ui-g-2\" id=\"notifications\">\n    \n  </div>\n</div>\n\n<div class=\"ui-g ui-g-nopad\">\n\n  <div class=\"ui-g-2 ui-g-nopad\" id=\"sidegutter\">\n\n    <div id=\"sidenav\">\n\n      <p-menu #bigMenu [model]=\"menuItems\"></p-menu>\n\n    </div>\n\n  </div>\n\n  <div class=\"ui-g-2 ui-g-nopad\" id=\"minigutter\">\n\n    <div id=\"sidenav-mini\">\n\n      <p-menu #smallMenu [model]=\"miniMenuItems\"></p-menu>\n\n    </div>\n\n  </div>\n\n  <!--\n  <div class=\"ui black big launch right attached fixed button\">\n    <i class=\"content icon\"></i>\n    <span class=\"text\">Menu</span>\n  </div>\n  -->\n\n\n  <div id=\"content-body\" class=\"ui-g-10 ui-g-nopad\">\n\n    <router-outlet></router-outlet>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__ = __webpack_require__("../../../../primeng/components/menu/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var handleSelected = function (event) {
            var allMenus = jQuery(event.originalEvent.target).closest('ul');
            var allLinks = allMenus.find('.menu-selected');
            allLinks.removeClass("menu-selected");
            var selected = jQuery(event.originalEvent.target).closest('a');
            selected.addClass('menu-selected');
        };
        this.menuItems = [
            { label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'], command: function (event) { return handleSelected(event); } },
            { label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes'], command: function (event) { return handleSelected(event); } },
            { label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/timesheet'], command: function (event) { return handleSelected(event); } },
            { label: 'Add Project', icon: 'fa-tasks', routerLink: ['/projects'], command: function (event) { return handleSelected(event); } },
            { label: 'My Profile', icon: 'fa-users', routerLink: ['/profile'], command: function (event) { return handleSelected(event); } },
            { label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'], command: function (event) { return handleSelected(event); } },
        ];
        this.miniMenuItems = [];
        this.menuItems.forEach(function (item) {
            var miniItem = { icon: item.icon, routerLink: item.routerLink };
            _this.miniMenuItems.push(miniItem);
        });
    };
    AppComponent.prototype.selectInitialMenuItemBasedOnUrl = function () {
        var path = document.location.pathname;
        var menuItem = this.menuItems.find(function (item) { return item.routerLink[0] == path; });
        if (menuItem) {
            var selectedIcon = this.bigMenu.container.querySelector("." + menuItem.icon);
            jQuery(selectedIcon).closest('li').addClass('menu-selected');
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.selectInitialMenuItemBasedOnUrl();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bigMenu'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"]) === "function" && _a || Object)
    ], AppComponent.prototype, "bigMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('smallMenu'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"]) === "function" && _b || Object)
    ], AppComponent.prototype, "smallMenu", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timesheet_timesheet_component__ = __webpack_require__("../../../../../src/app/timesheet/timesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alltimes_alltimes_component__ = __webpack_require__("../../../../../src/app/alltimes/alltimes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fielderrors_fielderrors_component__ = __webpack_require__("../../../../../src/app/fielderrors/fielderrors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "alltimes", component: __WEBPACK_IMPORTED_MODULE_13__alltimes_alltimes_component__["a" /* AlltimesComponent */] },
    { path: "timesheet", component: __WEBPACK_IMPORTED_MODULE_9__timesheet_timesheet_component__["a" /* TimesheetComponent */] },
    { path: "projects", component: __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */] },
    { path: "settings", component: __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_9__timesheet_timesheet_component__["a" /* TimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__alltimes_alltimes_component__["a" /* AlltimesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__fielderrors_fielderrors_component__["a" /* FielderrorsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GalleriaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n\n\n  <at-statistic label=\"My Hours\" value=\"132\" icon=\"fa-clock-o\" colour=\"#00ACAC\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\n\n\n  <at-statistic label=\"Stories\" value=\"35\" icon=\"fa-users\" colour=\"#2F8EE5\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\n\n\n  <at-statistic label=\"Remaining\" value=\"23\" icon=\"fa-hourglass-half\" colour=\"#6C76AF\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\n\n\n  <at-statistic label=\"Sprints\" value=\"4\" icon=\"fa-area-chart\" colour=\"#EFA64C\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\n\n\n</div>\n\n<div class=\"ui-g\">\n\n  <p-panel header=\"Hours By Project (pie)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"pie\" [data]=\"hoursByProjectChartData\"\n    [options]=\"chartOptions\"></p-chart>\n  </p-panel>\n\n  <p-panel header=\"Hours By Project (doughnut)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"doughnut\" [data]=\"hoursByProjectChartData\"></p-chart>\n  </p-panel>\n\n</div>\n\n<div class=\"ui-g\">\n\n  <p-panel header=\"Hours By Team (bar)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"bar\" [data]=\"hoursByTeamChartData\"></p-chart>\n  </p-panel>\n\n  <p-panel header=\"Hours By Team (line)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"line\" [data]=\"hoursByTeamChartData\"></p-chart>\n  </p-panel>\n\n</div>\n\n<div class=\"ui-g\">\n\n  <p-panel header=\"Hours By Team (radar)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"radar\" height=\"150\" [data]=\"hoursByTeamChartData\"></p-chart>\n  </p-panel>\n\n  <p-panel header=\"Hours By Team (mixed)\" class=\"ui-g-12 ui-md-6\">\n    <p-chart type=\"bar\" [data]=\"hoursByTeamChartDataMixed\" #mixedChart\n    (onDataSelect)=\"onDataSelect($event)\"></p-chart>\n  </p-panel>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
    '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
    '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
    '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.hoursByProject = [
            { id: 1, name: 'Payroll App', hoursSpent: 8 },
            { id: 2, name: 'Agile Times App', hoursSpent: 16 },
            { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
        ];
        this.chartOptions = {
            title: {
                display: true,
                text: 'Hours By Project'
            },
            legend: {
                position: 'bottom'
            },
        };
        this.pieLabels = this.hoursByProject.map(function (proj) { return proj.name; });
        this.pieData = this.hoursByProject.map(function (proj) { return proj.hoursSpent; });
        this.pieColors = this.configureDefaultColours(this.pieData);
        this.hoursByProjectChartData = {
            labels: this.pieLabels,
            datasets: [
                {
                    data: this.pieData,
                    backgroundColor: this.pieColors
                }
            ]
        };
        this.hoursByTeamChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Dev Team',
                    backgroundColor: DEFAULT_COLORS[0],
                    data: [65, 59, 80, 55, 67, 73]
                },
                {
                    label: 'Ops Team',
                    backgroundColor: DEFAULT_COLORS[1],
                    data: [44, 63, 57, 90, 77, 70]
                }
            ]
        };
        this.hoursByTeamChartDataMixed = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Dev Team',
                    type: 'bar',
                    backgroundColor: DEFAULT_COLORS[0],
                    data: [65, 59, 80, 55, 67, 73]
                },
                {
                    label: 'Ops Team',
                    type: 'line',
                    backgroundColor: DEFAULT_COLORS[1],
                    data: [44, 63, 57, 90, 77, 70]
                }
            ]
        };
    }
    DashboardComponent.prototype.configureDefaultColours = function (data) {
        var customColours = [];
        if (data.length) {
            customColours = data.map(function (element, idx) {
                return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
            });
        }
        return customColours;
    };
    DashboardComponent.prototype.onDataSelect = function (event) {
        var dataSetIndex = event.element._datasetIndex;
        var dataItemIndex = event.element._index;
        var labelClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].label;
        var valueClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].data[dataItemIndex];
        alert("Looks like " + labelClicked + " worked " + valueClicked + " hours");
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].interval(3000).timeInterval().subscribe(function () {
            var hoursByTeam = _this.hoursByTeamChartDataMixed.datasets;
            var randomised = hoursByTeam.map(function (dataset) {
                dataset.data = dataset.data.map(function (hours) { return hours * (Math.random() * 2); });
            });
            _this.mixedChart.refresh();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mixedChart"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["UIChart"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["UIChart"]) === "function" && _a || Object)
    ], DashboardComponent.prototype, "mixedChart", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/fielderrors/fielderrors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fielderrors/fielderrors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-message ui-messages-error\" *ngIf=\"fieldErrors(fieldName)\">\n\n  <i class=\"fa fa-close\"></i>\n  <span *ngIf=\"fieldErrors(fieldName).required\">{{ niceName}} is required</span>\n  <span *ngIf=\"fieldErrors(fieldName).minlength\">{{ niceName}} must be {{ fieldErrors(fieldName).minlength.requiredLength }} characters</span>\n  <span *ngIf=\"fieldErrors(fieldName).maxlength\">{{ niceName}} must not exceed {{ fieldErrors(fieldName).maxlength.requiredLength }} characters</span>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/fielderrors/fielderrors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FielderrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FielderrorsComponent = /** @class */ (function () {
    function FielderrorsComponent() {
    }
    FielderrorsComponent.prototype.ngOnInit = function () {
    };
    FielderrorsComponent.prototype.fieldErrors = function (field) {
        var controlState = this.form.controls[field];
        return (controlState.dirty && controlState.errors) ? controlState.errors : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("form"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
    ], FielderrorsComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("field"),
        __metadata("design:type", String)
    ], FielderrorsComponent.prototype, "fieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("nicename"),
        __metadata("design:type", String)
    ], FielderrorsComponent.prototype, "niceName", void 0);
    FielderrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-fielderrors',
            template: __webpack_require__("../../../../../src/app/fielderrors/fielderrors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fielderrors/fielderrors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FielderrorsComponent);
    return FielderrorsComponent;
    var _a;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/fielderrors.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile {\n  background-color: white;\n  font-family: \"Roboto\";\n}\n\n.header {\n  padding: 1em;\n  color: white;\n  background-color: #0275D8;\n  margin-bottom: 1em;\n}\n\nh2 {\n  font-weight: bolder;\n  font-size: xx-large;\n  display: inline;\n}\n\nh3 {\n  font-weight: lighter;\n  font-size: xx-large;\n  display: inline;\n}\n\np-panel >>> .ui-panel-content {\n  height: 320px;\n}\n\np-panel img {\n  width: 100%;\n}\n\n\n#drop-message {\n  font-size: xx-large;\n  color: #2D353C;\n  background-color: lightgray; \n  width: 100%;\n  height: 85%;\n  border: 3px solid #2D353C;\n  text-align: center;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile header ui-g-12\">\n    <h2>\n        Profile Info\n    </h2>\n    <h3>\n        Galleria Drag and Drop\n    </h3>\n</div>\n\n<p-panel header=\"My Profile Picture\" styleClass=\"profilePic\" class=\"ui-g-12 ui-md-4\" pDroppable=\"profilePic\" (onDrop)=\"onPicDrop()\">\n\n    <img id=\"profilePic\" *ngIf=\"profileImage; else showDropDiv\" [src]=\"profileImage\" class=\"ui-g-12\" />\n\n    <ng-template #showDropDiv>\n        <span id=\"drop-message\" class=\"ui-g-12\">Drop Your Image Here</span>\n    </ng-template>\n\n</p-panel>\n\n<div class=\"spacer ui-g-12 ui-md-1\"></div>\n\n<p-galleria #galleria [images]=\"images\" class=\"ui-g-12 ui-md-7\" panelWidth=\"300\" panelHeight=\"298\" [showCaption]=\"true\" pDraggable=\"profilePic\" dragHandle=\".ui-panel-images\" (onImageClicked)=\"onImageSelected($event)\"\n(onDragStart)=\"onDragStart(galleria)\">\n</p-galleria>\n\n<p-growl [value]=\"messages\"></p-growl>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function ProfileComponent() {
        this.images = [
            { source: "http://i.pravatar.cc/300?u=Anne", title: "Anne" },
            { source: "http://i.pravatar.cc/300?u=Kerri", title: "Kerri" },
            { source: "http://i.pravatar.cc/300?u=Mary", title: "Mary" },
            { source: "http://i.pravatar.cc/300?u=Nancy", title: "Nancy" },
            { source: "http://i.pravatar.cc/300?u=Peta", title: "Peta" },
        ];
        this.messages = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onImageSelected = function (event) {
        console.log(JSON.stringify(event));
    };
    ProfileComponent.prototype.onDragStart = function (galleria) {
        this.selectedProfile = this.images[galleria.activeIndex];
        galleria.stopSlideshow();
    };
    ProfileComponent.prototype.onPicDrop = function () {
        this.profileImage = this.selectedProfile.source;
        this.messages.push({ severity: "info", summary: "New Profile", detail: "Changed pic to " + this.selectedProfile.title });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-multiselect-label-container {\n  background-color: red !important;\n}\n\nlabel {\n  margin-top: 5px;\n}\n\nbutton {\n  margin-top: 1em;\n}\n\np-radioButton {\n display:block;\n margin: .7em;\n}\n\np-listbox >>> .ui-listbox {\n width: 100%;\nheight: 300px;\n}\n\n.avatar {\n float: left;\n margin: 5px;\n}\n \n.devName {\n font-size: xx-large;\n display:inline-block;\n margin:15px 10px 0 10px;\n min-height: 100px;\n}\n\np-rating {\n font-size: xx-large;\n}\n\n#ratingLabel {\n margin-top: 20px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\" class=\"ui-g\">\n    <p-panel header=\"Add Project\" class=\"ui-g-12\">\n\n        <div class=\"ui-g\">\n\n            <label for=\"projectId\" class=\"ui-g-12 ui-md-2\">Project Id*</label>\n\n            <p-inputMask mask=\"aaa-999\" id=\"projectId\" formControlName=\"projectId\" placeholder=\"ABC-123\" slotChar=\"?\" class=\"ui-g-12 ui-md-5\"></p-inputMask>\n\n            <div class=\"ui-g-12 ui-md-5\">\n\n                <at-fielderrors [form]=\"projectForm\" field=\"projectId\" nicename=\"Project ID\"> </at-fielderrors>\n\n\n            </div>\n        </div>\n\n        <div class=\"ui-g\">\n            <label for=\"description\" class=\"ui-g-12\">Description</label>\n            <p-editor id=\"description\" formControlName=\"description\" class=\"ui-g-12\" [style]=\"{'height':'200px'}\"></p-editor>\n\n            <div class=\"ui-g-12\">\n                <at-fielderrors [form]=\"projectForm\" field=\"description\" nicename=\"Description\"> </at-fielderrors>\n            </div>\n        </div>\n\n        <div class=\"ui-g\">\n            <label for=\"startDate\" class=\"ui-g-12 ui-md-2\">Start Date</label>\n            <p-calendar [showIcon]=\"true\" id=\"startDate\" formControlName=\"startDate\" dateFormat=\"dd/mm/yy\" class=\"ui-g-12 ui-md-5\" [minDate]=\"minProjectDate\"></p-calendar>\n            <div class=\"ui-g-12 ui-md-5\">\n\n                <at-fielderrors [form]=\"projectForm\" field=\"startDate\" nicename=\"Start Date\"> </at-fielderrors>\n\n            </div>\n        </div>\n\n        <div class=\"ui-g\">\n            <p-fieldset legend=\"Project Type\" class=\"ui-g-12\" [toggleable]=\"true\" [collapsed]=\"false\">\n\n                <p-radioButton name=\"projGroup\" label=\"Front End\" value=\"F\" formControlName=\"projectType\"></p-radioButton>\n                <p-radioButton name=\"projGroup\" label=\"Backend End\" value=\"B\" formControlName=\"projectType\"></p-radioButton>\n                <p-radioButton name=\"projGroup\" label=\"Operations\" value=\"O\" formControlName=\"projectType\"></p-radioButton>\n\n            </p-fieldset>\n        </div>\n\n        <div class=\"ui-g\">\n            <label for=\"devs\" class=\"ui-g-12 ui-md-2\">Assigned Devs</label>\n            <p-listbox id=\"devs\" [options]=\"allDevs\" [multiple]=\"true\" [filter]=\"true\" formControlName=\"selectedDevs\" class=\"ui-g-12 ui-md-10\">\n                <ng-template let-dev pTemplate=\"item\">\n                    <img src=\"http://i.pravatar.cc/100?u={{dev.label}}\" class=\"avatar\" />\n                    <span class=\"devName\">{{dev.value}}</span>\n                </ng-template>\n            </p-listbox>\n\n\n        </div>\n\n        <div class=\"ui-g\">\n            <label id=\"ratingLabel\" for=\"rating\" class=\"ui-g-12 ui-md-2\">Project Coolness</label>\n            <p-rating id=\"rating\" formControlName=\"rating\" class=\"ui-g-12 ui-md-5\" [cancel]=\"false\"></p-rating>\n            <pre class=\"ui-g-12 ui-md-5\">{{ projectForm.getRawValue() | json }}</pre>\n\n        </div>\n\n\n\n\n\n        <button pButton type=\"submit\" [disabled]=\"hasFormErrors()\" label=\"Save\" icon=\"fa-floppy-o\"></button>\n\n    </p-panel>\n</form>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(fb) {
        this.fb = fb;
        this.minProjectDate = new Date();
        this.allDevs = [
            { label: 'Jill', value: 'Jill Cool' },
            { label: 'Joe', value: 'Joe Cool' },
            { label: 'Mary', value: 'Mary Cool' },
            { label: 'Susan', value: 'Susan Jones' },
            { label: 'Phil', value: 'Phil Stephens' },
            { label: 'Karen', value: 'Karen Phillips' },
            { label: 'Chris', value: 'Chris Hampton' },
            { label: 'Si', value: 'Si Chew' },
            { label: 'Terri', value: 'Terri Smith' }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projectForm = this.fb.group({
            projectId: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)]],
            description: ['My cool project', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(140)]],
            startDate: [new Date(), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            projectType: ['B'],
            selectedDevs: [[]],
            rating: [3]
        });
    };
    ProjectsComponent.prototype.hasFormErrors = function () {
        return !this.projectForm.valid;
    };
    ProjectsComponent.prototype.onSubmit = function () {
        alert(JSON.stringify(this.projectForm.value));
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
    ], ProjectsComponent);
    return ProjectsComponent;
    var _a;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p-panel >>> .ui-panel {\n  margin-top: 1em;\n  width: 98%;\n  min-height: 300px;\n}\n\n.ui-g {\n  padding: 4px;\n}\n\n#statistic {\n\n  width: 300px;\n  color: white;\n  text-align: center;\n  font-family: \"Roboto\";\n  background-color: #00ACAC;\n}\n\n.icon {\n  font-size: 80px;\n  margin: 0px;\n  padding: 5px;\n  background:rgba(0,0,0,.1);\n}\n\n.data {\n  padding: 1em;\n  vertical-align: middle;\n}\n\n.value {\n  font-size: 40px;\n}\n\n.label {\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Settings\">\n\n    <div class=\"ui-g\">\n        <label for=\"notify\" class=\"ui-g-12 ui-md-2\">Email To Notify:</label>\n        <input id=\"notify\" class=\"ui-g-12 ui-md-10\" placeholder=\"Enter an Email Address\" type=\"email\" />\n    </div>\n\n    <div class=\"ui-g\">\n        <label for=\"backup\" class=\"ui-g-12 ui-md-2\">Force Backup:</label>\n        <button id=\"backup\" class=\"ui-g-12 ui-md-10\">Backup System Now</button>\n    </div>\n\n    <div class=\"ui-g\">\n        <label for=\"statistic\" class=\"ui-g-12 ui-md-2\">Uptime Stats:</label>\n        <div id=\"statistic\" class=\"ui-g-12 ui-md-10 ui-g-nopad\">\n            <div class=\"icon ui-g-5\">\n                <i class=\"fa fa-cloud-download\"></i>\n            </div>\n            <div class=\"data ui-g-7\">\n                <div class=\"value\">20</div>\n                <div class=\"label\">Days Uptime</div>\n            </div>\n        </div>\n    </div>\n\n</p-panel>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statistic {\n  margin: 1em;\n  min-width: 200px;\n  color: white;\n  text-align: center;\n  font-family: \"Roboto\";\n}\n\n.icon {\n  font-size: 70px;\n  margin: 0px;\n  padding: 5px;\n  background:rgba(0,0,0,.1);\n}\n\n.data {\n  padding: 1em;\n  vertical-align: middle;\n}\n\n.value {\nfont-size: 40px;\n}\n\n.label {\n  text-transform: uppercase;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"statistic ui-g\" [style.background-color]=\"colour\">\n\n  <div class=\"icon ui-g-5\">\n    <i class=\"fa {{ icon }}\" *ngIf=\"icon\"></i>\n  </div>\n\n  <div class=\"data ui-g-7\">\n\n    <div class=\"value\">\n      {{ value }}\n    </div>\n\n    <div class=\"label\" *ngIf=\"label\">\n      {{ label }}\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticComponent = /** @class */ (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticComponent.prototype, "colour", void 0);
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-statistic',
            template: __webpack_require__("../../../../../src/app/statistic/statistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/statistic.component.js.map

/***/ }),

/***/ "../../../../../src/app/timesheet/sample.people.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplePeopleData; });
var SamplePeopleData = /** @class */ (function () {
    function SamplePeopleData() {
    }
    SamplePeopleData.people = [{ "id": 1, "firstName": "Dennis", "lastName": "Vasquez", "email": "dvasquez0@mediafire.com", "avatar": "http://i.pravatar.cc/100?u=Dennis" },
        { "id": 2, "firstName": "Antonio", "lastName": "Payne", "email": "apayne1@studiopress.com", "avatar": "http://i.pravatar.cc/100?u=Antonio" },
        { "id": 3, "firstName": "Tina", "lastName": "Torres", "email": "ttorres2@goo.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Tina" },
        { "id": 4, "firstName": "Anne", "lastName": "Jordan", "email": "ajordan3@nhs.uk", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 5, "firstName": "Ann", "lastName": "Scott", "email": "ascott4@vk.com", "avatar": "http://i.pravatar.cc/100?u=Ann" },
        { "id": 6, "firstName": "Stephen", "lastName": "Rivera", "email": "srivera5@spiegel.de", "avatar": "http://i.pravatar.cc/100?u=Stephen" },
        { "id": 7, "firstName": "Jean", "lastName": "Knight", "email": "jknight6@accuweather.com", "avatar": "http://i.pravatar.cc/100?u=Jean" },
        { "id": 8, "firstName": "Ashley", "lastName": "Foster", "email": "afoster7@nyu.edu", "avatar": "http://i.pravatar.cc/100?u=Ashley" },
        { "id": 9, "firstName": "Chris", "lastName": "Johnston", "email": "cjohnston8@mac.com", "avatar": "http://i.pravatar.cc/100?u=Chris" },
        { "id": 10, "firstName": "William", "lastName": "Moreno", "email": "wmoreno9@booking.com", "avatar": "http://i.pravatar.cc/100?u=William" },
        { "id": 11, "firstName": "Eugene", "lastName": "Lawson", "email": "elawsona@icq.com", "avatar": "http://i.pravatar.cc/100?u=Eugene" },
        { "id": 12, "firstName": "William", "lastName": "Rice", "email": "wriceb@house.gov", "avatar": "http://i.pravatar.cc/100?u=William" },
        { "id": 13, "firstName": "Pamela", "lastName": "Castillo", "email": "pcastilloc@comsenz.com", "avatar": "http://i.pravatar.cc/100?u=Pamela" },
        { "id": 14, "firstName": "Matthew", "lastName": "Stephens", "email": "mstephensd@pbs.org", "avatar": "http://i.pravatar.cc/100?u=Matthew" },
        { "id": 15, "firstName": "Billy", "lastName": "Richardson", "email": "brichardsone@imageshack.us", "avatar": "http://i.pravatar.cc/100?u=Billy" },
        { "id": 16, "firstName": "Walter", "lastName": "Stevens", "email": "wstevensf@lulu.com", "avatar": "http://i.pravatar.cc/100?u=Walter" },
        { "id": 17, "firstName": "Alan", "lastName": "Flores", "email": "afloresg@economist.com", "avatar": "http://i.pravatar.cc/100?u=Alan" },
        { "id": 18, "firstName": "James", "lastName": "Morgan", "email": "jmorganh@wix.com", "avatar": "http://i.pravatar.cc/100?u=James" },
        { "id": 19, "firstName": "Barbara", "lastName": "Dixon", "email": "bdixoni@domainmarket.com", "avatar": "http://i.pravatar.cc/100?u=Barbara" },
        { "id": 20, "firstName": "Scott", "lastName": "Austin", "email": "saustinj@blog.com", "avatar": "http://i.pravatar.cc/100?u=Scott" },
        { "id": 21, "firstName": "Carlos", "lastName": "Wagner", "email": "cwagnerk@dell.com", "avatar": "http://i.pravatar.cc/100?u=Carlos" },
        { "id": 22, "firstName": "Russell", "lastName": "Knight", "email": "rknightl@networksolutions.com", "avatar": "http://i.pravatar.cc/100?u=Russell" },
        { "id": 23, "firstName": "Janice", "lastName": "Torres", "email": "jtorresm@nhs.uk", "avatar": "http://i.pravatar.cc/100?u=Janice" },
        { "id": 24, "firstName": "Matthew", "lastName": "Mendoza", "email": "mmendozan@deliciousdays.com", "avatar": "http://i.pravatar.cc/100?u=Matthew" },
        { "id": 25, "firstName": "Sandra", "lastName": "Ortiz", "email": "sortizo@discovery.com", "avatar": "http://i.pravatar.cc/100?u=Sandra" },
        { "id": 26, "firstName": "Marie", "lastName": "Wallace", "email": "mwallacep@buzzfeed.com", "avatar": "http://i.pravatar.cc/100?u=Marie" },
        { "id": 27, "firstName": "Emily", "lastName": "Martinez", "email": "emartinezq@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=Emily" },
        { "id": 28, "firstName": "Terry", "lastName": "Shaw", "email": "tshawr@eventbrite.com", "avatar": "http://i.pravatar.cc/100?u=Terry" },
        { "id": 29, "firstName": "Brandon", "lastName": "Mendoza", "email": "bmendozas@smugmug.com", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 30, "firstName": "Johnny", "lastName": "Gomez", "email": "jgomezt@livejournal.com", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 31, "firstName": "Steve", "lastName": "Wells", "email": "swellsu@engadget.com", "avatar": "http://i.pravatar.cc/100?u=Steve" },
        { "id": 32, "firstName": "Lisa", "lastName": "Mendoza", "email": "lmendozav@infoseek.co.jp", "avatar": "http://i.pravatar.cc/100?u=Lisa" },
        { "id": 33, "firstName": "Kimberly", "lastName": "Rodriguez", "email": "krodriguezw@hhs.gov", "avatar": "http://i.pravatar.cc/100?u=Kimberly" },
        { "id": 34, "firstName": "Christopher", "lastName": "Sims", "email": "csimsx@nps.gov", "avatar": "http://i.pravatar.cc/100?u=Christopher" },
        { "id": 35, "firstName": "Amy", "lastName": "Dunn", "email": "adunny@yelp.com", "avatar": "http://i.pravatar.cc/100?u=Amy" },
        { "id": 36, "firstName": "Kenneth", "lastName": "George", "email": "kgeorgez@taobao.com", "avatar": "http://i.pravatar.cc/100?u=Kenneth" },
        { "id": 37, "firstName": "Rebecca", "lastName": "Patterson", "email": "rpatterson10@feedburner.com", "avatar": "http://i.pravatar.cc/100?u=Rebecca" },
        { "id": 38, "firstName": "Randy", "lastName": "Hudson", "email": "rhudson11@time.com", "avatar": "http://i.pravatar.cc/100?u=Randy" },
        { "id": 39, "firstName": "Jesse", "lastName": "Morales", "email": "jmorales12@angelfire.com", "avatar": "http://i.pravatar.cc/100?u=Jesse" },
        { "id": 40, "firstName": "Alan", "lastName": "Moreno", "email": "amoreno13@webeden.co.uk", "avatar": "http://i.pravatar.cc/100?u=Alan" },
        { "id": 41, "firstName": "Lori", "lastName": "Ellis", "email": "lellis14@apache.org", "avatar": "http://i.pravatar.cc/100?u=Lori" },
        { "id": 42, "firstName": "Sarah", "lastName": "Shaw", "email": "sshaw15@is.gd", "avatar": "http://i.pravatar.cc/100?u=Sarah" },
        { "id": 43, "firstName": "Kathy", "lastName": "Walker", "email": "kwalker16@foxnews.com", "avatar": "http://i.pravatar.cc/100?u=Kathy" },
        { "id": 44, "firstName": "Ruth", "lastName": "Carroll", "email": "rcarroll17@over-blog.com", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 45, "firstName": "Shawn", "lastName": "Reid", "email": "sreid18@themeforest.net", "avatar": "http://i.pravatar.cc/100?u=Shawn" },
        { "id": 46, "firstName": "Tammy", "lastName": "Gordon", "email": "tgordon19@miitbeian.gov.cn", "avatar": "http://i.pravatar.cc/100?u=Tammy" },
        { "id": 47, "firstName": "Lois", "lastName": "Snyder", "email": "lsnyder1a@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=Lois" },
        { "id": 48, "firstName": "Nicholas", "lastName": "Morgan", "email": "nmorgan1b@china.com.cn", "avatar": "http://i.pravatar.cc/100?u=Nicholas" },
        { "id": 49, "firstName": "Henry", "lastName": "Gray", "email": "hgray1c@jiathis.com", "avatar": "http://i.pravatar.cc/100?u=Henry" },
        { "id": 50, "firstName": "Evelyn", "lastName": "Gomez", "email": "egomez1d@geocities.com", "avatar": "http://i.pravatar.cc/100?u=Evelyn" },
        { "id": 51, "firstName": "Jimmy", "lastName": "Mendoza", "email": "jmendoza1e@canalblog.com", "avatar": "http://i.pravatar.cc/100?u=Jimmy" },
        { "id": 52, "firstName": "George", "lastName": "Welch", "email": "gwelch1f@tinyurl.com", "avatar": "http://i.pravatar.cc/100?u=George" },
        { "id": 53, "firstName": "Debra", "lastName": "Myers", "email": "dmyers1g@ft.com", "avatar": "http://i.pravatar.cc/100?u=Debra" },
        { "id": 54, "firstName": "Jesse", "lastName": "Schmidt", "email": "jschmidt1h@miitbeian.gov.cn", "avatar": "http://i.pravatar.cc/100?u=Jesse" },
        { "id": 55, "firstName": "Jimmy", "lastName": "Turner", "email": "jturner1i@ftc.gov", "avatar": "http://i.pravatar.cc/100?u=Jimmy" },
        { "id": 56, "firstName": "Dennis", "lastName": "Gonzalez", "email": "dgonzalez1j@skyrock.com", "avatar": "http://i.pravatar.cc/100?u=Dennis" },
        { "id": 57, "firstName": "Lois", "lastName": "Carpenter", "email": "lcarpenter1k@umich.edu", "avatar": "http://i.pravatar.cc/100?u=Lois" },
        { "id": 58, "firstName": "Eric", "lastName": "Wells", "email": "ewells1l@ow.ly", "avatar": "http://i.pravatar.cc/100?u=Eric" },
        { "id": 59, "firstName": "Samuel", "lastName": "Harris", "email": "sharris1m@alibaba.com", "avatar": "http://i.pravatar.cc/100?u=Samuel" },
        { "id": 60, "firstName": "Alice", "lastName": "Baker", "email": "abaker1n@com.com", "avatar": "http://i.pravatar.cc/100?u=Alice" },
        { "id": 61, "firstName": "Samuel", "lastName": "Powell", "email": "spowell1o@columbia.edu", "avatar": "http://i.pravatar.cc/100?u=Samuel" },
        { "id": 62, "firstName": "Jesse", "lastName": "James", "email": "jjames1p@huffingtonpost.com", "avatar": "http://i.pravatar.cc/100?u=Jesse" },
        { "id": 63, "firstName": "Judith", "lastName": "Knight", "email": "jknight1q@cnbc.com", "avatar": "http://i.pravatar.cc/100?u=Judith" },
        { "id": 64, "firstName": "Jessica", "lastName": "Perkins", "email": "jperkins1r@si.edu", "avatar": "http://i.pravatar.cc/100?u=Jessica" },
        { "id": 65, "firstName": "Helen", "lastName": "Richards", "email": "hrichards1s@google.es", "avatar": "http://i.pravatar.cc/100?u=Helen" },
        { "id": 66, "firstName": "Roy", "lastName": "Gonzalez", "email": "rgonzalez1t@dion.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Roy" },
        { "id": 67, "firstName": "Judith", "lastName": "Ward", "email": "jward1u@shutterfly.com", "avatar": "http://i.pravatar.cc/100?u=Judith" },
        { "id": 68, "firstName": "Amanda", "lastName": "Sullivan", "email": "asullivan1v@guardian.co.uk", "avatar": "http://i.pravatar.cc/100?u=Amanda" },
        { "id": 69, "firstName": "Linda", "lastName": "Adams", "email": "ladams1w@multiply.com", "avatar": "http://i.pravatar.cc/100?u=Linda" },
        { "id": 70, "firstName": "Raymond", "lastName": "Jackson", "email": "rjackson1x@disqus.com", "avatar": "http://i.pravatar.cc/100?u=Raymond" },
        { "id": 71, "firstName": "Judith", "lastName": "Howard", "email": "jhoward1y@tinypic.com", "avatar": "http://i.pravatar.cc/100?u=Judith" },
        { "id": 72, "firstName": "Ralph", "lastName": "Meyer", "email": "rmeyer1z@nih.gov", "avatar": "http://i.pravatar.cc/100?u=Ralph" },
        { "id": 73, "firstName": "Craig", "lastName": "Hicks", "email": "chicks20@disqus.com", "avatar": "http://i.pravatar.cc/100?u=Craig" },
        { "id": 74, "firstName": "Howard", "lastName": "Medina", "email": "hmedina21@narod.ru", "avatar": "http://i.pravatar.cc/100?u=Howard" },
        { "id": 75, "firstName": "Julie", "lastName": "Howard", "email": "jhoward22@hhs.gov", "avatar": "http://i.pravatar.cc/100?u=Julie" },
        { "id": 76, "firstName": "Jimmy", "lastName": "Moreno", "email": "jmoreno23@feedburner.com", "avatar": "http://i.pravatar.cc/100?u=Jimmy" },
        { "id": 77, "firstName": "Louis", "lastName": "Burton", "email": "lburton24@google.de", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 78, "firstName": "Ruth", "lastName": "Cook", "email": "rcook25@state.gov", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 79, "firstName": "Lois", "lastName": "Arnold", "email": "larnold26@smugmug.com", "avatar": "http://i.pravatar.cc/100?u=Lois" },
        { "id": 80, "firstName": "Steven", "lastName": "Brooks", "email": "sbrooks27@amazon.co.jp", "avatar": "http://i.pravatar.cc/100?u=Steven" },
        { "id": 81, "firstName": "Larry", "lastName": "Robertson", "email": "lrobertson28@webmd.com", "avatar": "http://i.pravatar.cc/100?u=Larry" },
        { "id": 82, "firstName": "Julia", "lastName": "Knight", "email": "jknight29@latimes.com", "avatar": "http://i.pravatar.cc/100?u=Julia" },
        { "id": 83, "firstName": "Jeffrey", "lastName": "Parker", "email": "jparker2a@tripadvisor.com", "avatar": "http://i.pravatar.cc/100?u=Jeffrey" },
        { "id": 84, "firstName": "Doris", "lastName": "Gardner", "email": "dgardner2b@networksolutions.com", "avatar": "http://i.pravatar.cc/100?u=Doris" },
        { "id": 85, "firstName": "Nicole", "lastName": "Hanson", "email": "nhanson2c@gnu.org", "avatar": "http://i.pravatar.cc/100?u=Nicole" },
        { "id": 86, "firstName": "Andrea", "lastName": "Chavez", "email": "achavez2d@360.cn", "avatar": "http://i.pravatar.cc/100?u=Andrea" },
        { "id": 87, "firstName": "Eugene", "lastName": "Campbell", "email": "ecampbell2e@theatlantic.com", "avatar": "http://i.pravatar.cc/100?u=Eugene" },
        { "id": 88, "firstName": "Theresa", "lastName": "Owens", "email": "towens2f@stumbleupon.com", "avatar": "http://i.pravatar.cc/100?u=Theresa" },
        { "id": 89, "firstName": "Martin", "lastName": "Vasquez", "email": "mvasquez2g@ucla.edu", "avatar": "http://i.pravatar.cc/100?u=Martin" },
        { "id": 90, "firstName": "Craig", "lastName": "Olson", "email": "colson2h@arizona.edu", "avatar": "http://i.pravatar.cc/100?u=Craig" },
        { "id": 91, "firstName": "Antonio", "lastName": "Ward", "email": "award2i@google.cn", "avatar": "http://i.pravatar.cc/100?u=Antonio" },
        { "id": 92, "firstName": "Carol", "lastName": "Alvarez", "email": "calvarez2j@independent.co.uk", "avatar": "http://i.pravatar.cc/100?u=Carol" },
        { "id": 93, "firstName": "Irene", "lastName": "Johnston", "email": "ijohnston2k@cnn.com", "avatar": "http://i.pravatar.cc/100?u=Irene" },
        { "id": 94, "firstName": "Anna", "lastName": "Larson", "email": "alarson2l@stanford.edu", "avatar": "http://i.pravatar.cc/100?u=Anna" },
        { "id": 95, "firstName": "Eugene", "lastName": "Chapman", "email": "echapman2m@auda.org.au", "avatar": "http://i.pravatar.cc/100?u=Eugene" },
        { "id": 96, "firstName": "Joyce", "lastName": "Warren", "email": "jwarren2n@theglobeandmail.com", "avatar": "http://i.pravatar.cc/100?u=Joyce" },
        { "id": 97, "firstName": "Andrew", "lastName": "Garrett", "email": "agarrett2o@a8.net", "avatar": "http://i.pravatar.cc/100?u=Andrew" },
        { "id": 98, "firstName": "Katherine", "lastName": "Dunn", "email": "kdunn2p@ning.com", "avatar": "http://i.pravatar.cc/100?u=Katherine" },
        { "id": 99, "firstName": "Brian", "lastName": "Wagner", "email": "bwagner2q@google.com.au", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 100, "firstName": "Gregory", "lastName": "Harrison", "email": "gharrison2r@smugmug.com", "avatar": "http://i.pravatar.cc/100?u=Gregory" },
        { "id": 101, "firstName": "Adam", "lastName": "George", "email": "ageorge2s@hc360.com", "avatar": "http://i.pravatar.cc/100?u=Adam" },
        { "id": 102, "firstName": "Jose", "lastName": "Murray", "email": "jmurray2t@smugmug.com", "avatar": "http://i.pravatar.cc/100?u=Jose" },
        { "id": 103, "firstName": "Carl", "lastName": "Morgan", "email": "cmorgan2u@bbb.org", "avatar": "http://i.pravatar.cc/100?u=Carl" },
        { "id": 104, "firstName": "Carlos", "lastName": "Mitchell", "email": "cmitchell2v@buzzfeed.com", "avatar": "http://i.pravatar.cc/100?u=Carlos" },
        { "id": 105, "firstName": "Roy", "lastName": "Lewis", "email": "rlewis2w@aboutads.info", "avatar": "http://i.pravatar.cc/100?u=Roy" },
        { "id": 106, "firstName": "Phyllis", "lastName": "White", "email": "pwhite2x@abc.net.au", "avatar": "http://i.pravatar.cc/100?u=Phyllis" },
        { "id": 107, "firstName": "Brian", "lastName": "Foster", "email": "bfoster2y@google.cn", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 108, "firstName": "Norma", "lastName": "Sanders", "email": "nsanders2z@amazon.co.jp", "avatar": "http://i.pravatar.cc/100?u=Norma" },
        { "id": 109, "firstName": "Nicholas", "lastName": "Parker", "email": "nparker30@telegraph.co.uk", "avatar": "http://i.pravatar.cc/100?u=Nicholas" },
        { "id": 110, "firstName": "Douglas", "lastName": "Long", "email": "dlong31@thetimes.co.uk", "avatar": "http://i.pravatar.cc/100?u=Douglas" },
        { "id": 111, "firstName": "Amanda", "lastName": "Fowler", "email": "afowler32@netlog.com", "avatar": "http://i.pravatar.cc/100?u=Amanda" },
        { "id": 112, "firstName": "Paul", "lastName": "West", "email": "pwest33@phoca.cz", "avatar": "http://i.pravatar.cc/100?u=Paul" },
        { "id": 113, "firstName": "Rebecca", "lastName": "Watkins", "email": "rwatkins34@vimeo.com", "avatar": "http://i.pravatar.cc/100?u=Rebecca" },
        { "id": 114, "firstName": "Joyce", "lastName": "Fisher", "email": "jfisher35@devhub.com", "avatar": "http://i.pravatar.cc/100?u=Joyce" },
        { "id": 115, "firstName": "Victor", "lastName": "Gray", "email": "vgray36@indiegogo.com", "avatar": "http://i.pravatar.cc/100?u=Victor" },
        { "id": 116, "firstName": "Melissa", "lastName": "Lawson", "email": "mlawson37@hugedomains.com", "avatar": "http://i.pravatar.cc/100?u=Melissa" },
        { "id": 117, "firstName": "Brandon", "lastName": "Woods", "email": "bwoods38@friendfeed.com", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 118, "firstName": "Thomas", "lastName": "Anderson", "email": "tanderson39@google.it", "avatar": "http://i.pravatar.cc/100?u=Thomas" },
        { "id": 119, "firstName": "Joe", "lastName": "Taylor", "email": "jtaylor3a@skype.com", "avatar": "http://i.pravatar.cc/100?u=Joe" },
        { "id": 120, "firstName": "Kenneth", "lastName": "Berry", "email": "kberry3b@cisco.com", "avatar": "http://i.pravatar.cc/100?u=Kenneth" },
        { "id": 121, "firstName": "Jane", "lastName": "Edwards", "email": "jedwards3c@google.pl", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 122, "firstName": "Kathy", "lastName": "Powell", "email": "kpowell3d@list-manage.com", "avatar": "http://i.pravatar.cc/100?u=Kathy" },
        { "id": 123, "firstName": "Jennifer", "lastName": "Robertson", "email": "jrobertson3e@unc.edu", "avatar": "http://i.pravatar.cc/100?u=Jennifer" },
        { "id": 124, "firstName": "Theresa", "lastName": "Kim", "email": "tkim3f@purevolume.com", "avatar": "http://i.pravatar.cc/100?u=Theresa" },
        { "id": 125, "firstName": "Bobby", "lastName": "Johnston", "email": "bjohnston3g@free.fr", "avatar": "http://i.pravatar.cc/100?u=Bobby" },
        { "id": 126, "firstName": "Doris", "lastName": "Garza", "email": "dgarza3h@tinypic.com", "avatar": "http://i.pravatar.cc/100?u=Doris" },
        { "id": 127, "firstName": "Kenneth", "lastName": "Morris", "email": "kmorris3i@apple.com", "avatar": "http://i.pravatar.cc/100?u=Kenneth" },
        { "id": 128, "firstName": "Theresa", "lastName": "Ortiz", "email": "tortiz3j@jigsy.com", "avatar": "http://i.pravatar.cc/100?u=Theresa" },
        { "id": 129, "firstName": "Gerald", "lastName": "Harper", "email": "gharper3k@skype.com", "avatar": "http://i.pravatar.cc/100?u=Gerald" },
        { "id": 130, "firstName": "Roy", "lastName": "Matthews", "email": "rmatthews3l@tamu.edu", "avatar": "http://i.pravatar.cc/100?u=Roy" },
        { "id": 131, "firstName": "Christina", "lastName": "Greene", "email": "cgreene3m@people.com.cn", "avatar": "http://i.pravatar.cc/100?u=Christina" },
        { "id": 132, "firstName": "Terry", "lastName": "Rogers", "email": "trogers3n@about.me", "avatar": "http://i.pravatar.cc/100?u=Terry" },
        { "id": 133, "firstName": "Eugene", "lastName": "Brooks", "email": "ebrooks3o@redcross.org", "avatar": "http://i.pravatar.cc/100?u=Eugene" },
        { "id": 134, "firstName": "Robin", "lastName": "Pierce", "email": "rpierce3p@apple.com", "avatar": "http://i.pravatar.cc/100?u=Robin" },
        { "id": 135, "firstName": "Gary", "lastName": "Gonzalez", "email": "ggonzalez3q@furl.net", "avatar": "http://i.pravatar.cc/100?u=Gary" },
        { "id": 136, "firstName": "James", "lastName": "Edwards", "email": "jedwards3r@mozilla.com", "avatar": "http://i.pravatar.cc/100?u=James" },
        { "id": 137, "firstName": "John", "lastName": "Reynolds", "email": "jreynolds3s@sourceforge.net", "avatar": "http://i.pravatar.cc/100?u=John" },
        { "id": 138, "firstName": "Brandon", "lastName": "Gordon", "email": "bgordon3t@behance.net", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 139, "firstName": "Jack", "lastName": "Ramirez", "email": "jramirez3u@fotki.com", "avatar": "http://i.pravatar.cc/100?u=Jack" },
        { "id": 140, "firstName": "Philip", "lastName": "Vasquez", "email": "pvasquez3v@guardian.co.uk", "avatar": "http://i.pravatar.cc/100?u=Philip" },
        { "id": 141, "firstName": "Steve", "lastName": "Montgomery", "email": "smontgomery3w@redcross.org", "avatar": "http://i.pravatar.cc/100?u=Steve" },
        { "id": 142, "firstName": "Billy", "lastName": "Thompson", "email": "bthompson3x@163.com", "avatar": "http://i.pravatar.cc/100?u=Billy" },
        { "id": 143, "firstName": "Anthony", "lastName": "Coleman", "email": "acoleman3y@domainmarket.com", "avatar": "http://i.pravatar.cc/100?u=Anthony" },
        { "id": 144, "firstName": "Peter", "lastName": "Sanders", "email": "psanders3z@ftc.gov", "avatar": "http://i.pravatar.cc/100?u=Peter" },
        { "id": 145, "firstName": "Wayne", "lastName": "Garza", "email": "wgarza40@biblegateway.com", "avatar": "http://i.pravatar.cc/100?u=Wayne" },
        { "id": 146, "firstName": "Paul", "lastName": "Fowler", "email": "pfowler41@infoseek.co.jp", "avatar": "http://i.pravatar.cc/100?u=Paul" },
        { "id": 147, "firstName": "Deborah", "lastName": "Bennett", "email": "dbennett42@dell.com", "avatar": "http://i.pravatar.cc/100?u=Deborah" },
        { "id": 148, "firstName": "Jason", "lastName": "Snyder", "email": "jsnyder43@mlb.com", "avatar": "http://i.pravatar.cc/100?u=Jason" },
        { "id": 149, "firstName": "Kathleen", "lastName": "Kim", "email": "kkim44@patch.com", "avatar": "http://i.pravatar.cc/100?u=Kathleen" },
        { "id": 150, "firstName": "Christina", "lastName": "Jenkins", "email": "cjenkins45@php.net", "avatar": "http://i.pravatar.cc/100?u=Christina" },
        { "id": 151, "firstName": "Patrick", "lastName": "Shaw", "email": "pshaw46@weather.com", "avatar": "http://i.pravatar.cc/100?u=Patrick" },
        { "id": 152, "firstName": "Jessica", "lastName": "Lopez", "email": "jlopez47@meetup.com", "avatar": "http://i.pravatar.cc/100?u=Jessica" },
        { "id": 153, "firstName": "Johnny", "lastName": "Chapman", "email": "jchapman48@jalbum.net", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 154, "firstName": "Arthur", "lastName": "James", "email": "ajames49@constantcontact.com", "avatar": "http://i.pravatar.cc/100?u=Arthur" },
        { "id": 155, "firstName": "Bruce", "lastName": "Stanley", "email": "bstanley4a@livejournal.com", "avatar": "http://i.pravatar.cc/100?u=Bruce" },
        { "id": 156, "firstName": "Amy", "lastName": "Ruiz", "email": "aruiz4b@loc.gov", "avatar": "http://i.pravatar.cc/100?u=Amy" },
        { "id": 157, "firstName": "Frank", "lastName": "Rogers", "email": "frogers4c@japanpost.jp", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 158, "firstName": "Andrew", "lastName": "James", "email": "ajames4d@netscape.com", "avatar": "http://i.pravatar.cc/100?u=Andrew" },
        { "id": 159, "firstName": "Catherine", "lastName": "Hunter", "email": "chunter4e@pagesperso-orange.fr", "avatar": "http://i.pravatar.cc/100?u=Catherine" },
        { "id": 160, "firstName": "Steven", "lastName": "Fisher", "email": "sfisher4f@desdev.cn", "avatar": "http://i.pravatar.cc/100?u=Steven" },
        { "id": 161, "firstName": "Elizabeth", "lastName": "George", "email": "egeorge4g@tinyurl.com", "avatar": "http://i.pravatar.cc/100?u=Elizabeth" },
        { "id": 162, "firstName": "Joe", "lastName": "Gutierrez", "email": "jgutierrez4h@apple.com", "avatar": "http://i.pravatar.cc/100?u=Joe" },
        { "id": 163, "firstName": "Ruby", "lastName": "Roberts", "email": "rroberts4i@admin.ch", "avatar": "http://i.pravatar.cc/100?u=Ruby" },
        { "id": 164, "firstName": "Kenneth", "lastName": "Price", "email": "kprice4j@blogspot.com", "avatar": "http://i.pravatar.cc/100?u=Kenneth" },
        { "id": 165, "firstName": "Jane", "lastName": "Patterson", "email": "jpatterson4k@joomla.org", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 166, "firstName": "Marilyn", "lastName": "Rogers", "email": "mrogers4l@skyrock.com", "avatar": "http://i.pravatar.cc/100?u=Marilyn" },
        { "id": 167, "firstName": "Sara", "lastName": "Wheeler", "email": "swheeler4m@paypal.com", "avatar": "http://i.pravatar.cc/100?u=Sara" },
        { "id": 168, "firstName": "Earl", "lastName": "Willis", "email": "ewillis4n@vimeo.com", "avatar": "http://i.pravatar.cc/100?u=Earl" },
        { "id": 169, "firstName": "Mark", "lastName": "Morales", "email": "mmorales4o@squarespace.com", "avatar": "http://i.pravatar.cc/100?u=Mark" },
        { "id": 170, "firstName": "Martin", "lastName": "Burns", "email": "mburns4p@salon.com", "avatar": "http://i.pravatar.cc/100?u=Martin" },
        { "id": 171, "firstName": "Anne", "lastName": "Rivera", "email": "arivera4q@archive.org", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 172, "firstName": "Katherine", "lastName": "Watson", "email": "kwatson4r@imgur.com", "avatar": "http://i.pravatar.cc/100?u=Katherine" },
        { "id": 173, "firstName": "Ruby", "lastName": "Gonzales", "email": "rgonzales4s@ox.ac.uk", "avatar": "http://i.pravatar.cc/100?u=Ruby" },
        { "id": 174, "firstName": "Earl", "lastName": "Brooks", "email": "ebrooks4t@theguardian.com", "avatar": "http://i.pravatar.cc/100?u=Earl" },
        { "id": 175, "firstName": "Raymond", "lastName": "Fuller", "email": "rfuller4u@etsy.com", "avatar": "http://i.pravatar.cc/100?u=Raymond" },
        { "id": 176, "firstName": "Timothy", "lastName": "Ray", "email": "tray4v@exblog.jp", "avatar": "http://i.pravatar.cc/100?u=Timothy" },
        { "id": 177, "firstName": "Amanda", "lastName": "Anderson", "email": "aanderson4w@theglobeandmail.com", "avatar": "http://i.pravatar.cc/100?u=Amanda" },
        { "id": 178, "firstName": "Donald", "lastName": "Wagner", "email": "dwagner4x@themeforest.net", "avatar": "http://i.pravatar.cc/100?u=Donald" },
        { "id": 179, "firstName": "Patricia", "lastName": "Lawrence", "email": "plawrence4y@google.es", "avatar": "http://i.pravatar.cc/100?u=Patricia" },
        { "id": 180, "firstName": "Bobby", "lastName": "Edwards", "email": "bedwards4z@unesco.org", "avatar": "http://i.pravatar.cc/100?u=Bobby" },
        { "id": 181, "firstName": "Nancy", "lastName": "Carroll", "email": "ncarroll50@time.com", "avatar": "http://i.pravatar.cc/100?u=Nancy" },
        { "id": 182, "firstName": "Brandon", "lastName": "Chapman", "email": "bchapman51@live.com", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 183, "firstName": "Nancy", "lastName": "Nguyen", "email": "nnguyen52@youtube.com", "avatar": "http://i.pravatar.cc/100?u=Nancy" },
        { "id": 184, "firstName": "Victor", "lastName": "Kelley", "email": "vkelley53@google.co.uk", "avatar": "http://i.pravatar.cc/100?u=Victor" },
        { "id": 185, "firstName": "Susan", "lastName": "Rodriguez", "email": "srodriguez54@privacy.gov.au", "avatar": "http://i.pravatar.cc/100?u=Susan" },
        { "id": 186, "firstName": "Brandon", "lastName": "Cook", "email": "bcook55@e-recht24.de", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 187, "firstName": "Annie", "lastName": "Gibson", "email": "agibson56@unblog.fr", "avatar": "http://i.pravatar.cc/100?u=Annie" },
        { "id": 188, "firstName": "Catherine", "lastName": "Ray", "email": "cray57@virginia.edu", "avatar": "http://i.pravatar.cc/100?u=Catherine" },
        { "id": 189, "firstName": "Ruth", "lastName": "Bailey", "email": "rbailey58@tuttocitta.it", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 190, "firstName": "Martha", "lastName": "Morris", "email": "mmorris59@nytimes.com", "avatar": "http://i.pravatar.cc/100?u=Martha" },
        { "id": 191, "firstName": "Jane", "lastName": "Cox", "email": "jcox5a@360.cn", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 192, "firstName": "Mary", "lastName": "Edwards", "email": "medwards5b@unesco.org", "avatar": "http://i.pravatar.cc/100?u=Mary" },
        { "id": 193, "firstName": "Frank", "lastName": "Jackson", "email": "fjackson5c@hostgator.com", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 194, "firstName": "Martin", "lastName": "Warren", "email": "mwarren5d@statcounter.com", "avatar": "http://i.pravatar.cc/100?u=Martin" },
        { "id": 195, "firstName": "Sharon", "lastName": "Diaz", "email": "sdiaz5e@discovery.com", "avatar": "http://i.pravatar.cc/100?u=Sharon" },
        { "id": 196, "firstName": "Janet", "lastName": "Hall", "email": "jhall5f@networksolutions.com", "avatar": "http://i.pravatar.cc/100?u=Janet" },
        { "id": 197, "firstName": "Ashley", "lastName": "Powell", "email": "apowell5g@icio.us", "avatar": "http://i.pravatar.cc/100?u=Ashley" },
        { "id": 198, "firstName": "Gloria", "lastName": "Frazier", "email": "gfrazier5h@wix.com", "avatar": "http://i.pravatar.cc/100?u=Gloria" },
        { "id": 199, "firstName": "Edward", "lastName": "Price", "email": "eprice5i@csmonitor.com", "avatar": "http://i.pravatar.cc/100?u=Edward" },
        { "id": 200, "firstName": "Katherine", "lastName": "Jacobs", "email": "kjacobs5j@newsvine.com", "avatar": "http://i.pravatar.cc/100?u=Katherine" },
        { "id": 201, "firstName": "Terry", "lastName": "Gibson", "email": "tgibson5k@weibo.com", "avatar": "http://i.pravatar.cc/100?u=Terry" },
        { "id": 202, "firstName": "Marie", "lastName": "Gibson", "email": "mgibson5l@tmall.com", "avatar": "http://i.pravatar.cc/100?u=Marie" },
        { "id": 203, "firstName": "Chris", "lastName": "Kennedy", "email": "ckennedy5m@jalbum.net", "avatar": "http://i.pravatar.cc/100?u=Chris" },
        { "id": 204, "firstName": "Dorothy", "lastName": "Cooper", "email": "dcooper5n@guardian.co.uk", "avatar": "http://i.pravatar.cc/100?u=Dorothy" },
        { "id": 205, "firstName": "Frank", "lastName": "Harper", "email": "fharper5o@ed.gov", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 206, "firstName": "Ann", "lastName": "Patterson", "email": "apatterson5p@cocolog-nifty.com", "avatar": "http://i.pravatar.cc/100?u=Ann" },
        { "id": 207, "firstName": "Kimberly", "lastName": "Robertson", "email": "krobertson5q@about.com", "avatar": "http://i.pravatar.cc/100?u=Kimberly" },
        { "id": 208, "firstName": "Alan", "lastName": "Fox", "email": "afox5r@ovh.net", "avatar": "http://i.pravatar.cc/100?u=Alan" },
        { "id": 209, "firstName": "Betty", "lastName": "Anderson", "email": "banderson5s@feedburner.com", "avatar": "http://i.pravatar.cc/100?u=Betty" },
        { "id": 210, "firstName": "Ashley", "lastName": "Lee", "email": "alee5t@canalblog.com", "avatar": "http://i.pravatar.cc/100?u=Ashley" },
        { "id": 211, "firstName": "Phyllis", "lastName": "White", "email": "pwhite5u@list-manage.com", "avatar": "http://i.pravatar.cc/100?u=Phyllis" },
        { "id": 212, "firstName": "Scott", "lastName": "Burton", "email": "sburton5v@geocities.jp", "avatar": "http://i.pravatar.cc/100?u=Scott" },
        { "id": 213, "firstName": "Victor", "lastName": "Thompson", "email": "vthompson5w@paginegialle.it", "avatar": "http://i.pravatar.cc/100?u=Victor" },
        { "id": 214, "firstName": "John", "lastName": "Jordan", "email": "jjordan5x@shutterfly.com", "avatar": "http://i.pravatar.cc/100?u=John" },
        { "id": 215, "firstName": "Anthony", "lastName": "Cole", "email": "acole5y@myspace.com", "avatar": "http://i.pravatar.cc/100?u=Anthony" },
        { "id": 216, "firstName": "Karen", "lastName": "Morgan", "email": "kmorgan5z@myspace.com", "avatar": "http://i.pravatar.cc/100?u=Karen" },
        { "id": 217, "firstName": "Frank", "lastName": "Carter", "email": "fcarter60@indiegogo.com", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 218, "firstName": "Dennis", "lastName": "Harper", "email": "dharper61@cocolog-nifty.com", "avatar": "http://i.pravatar.cc/100?u=Dennis" },
        { "id": 219, "firstName": "Rachel", "lastName": "Burke", "email": "rburke62@thetimes.co.uk", "avatar": "http://i.pravatar.cc/100?u=Rachel" },
        { "id": 220, "firstName": "Frank", "lastName": "Morales", "email": "fmorales63@soup.io", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 221, "firstName": "Earl", "lastName": "Freeman", "email": "efreeman64@live.com", "avatar": "http://i.pravatar.cc/100?u=Earl" },
        { "id": 222, "firstName": "Ralph", "lastName": "Hughes", "email": "rhughes65@canalblog.com", "avatar": "http://i.pravatar.cc/100?u=Ralph" },
        { "id": 223, "firstName": "Harold", "lastName": "Bishop", "email": "hbishop66@gnu.org", "avatar": "http://i.pravatar.cc/100?u=Harold" },
        { "id": 224, "firstName": "Janet", "lastName": "Owens", "email": "jowens67@blogtalkradio.com", "avatar": "http://i.pravatar.cc/100?u=Janet" },
        { "id": 225, "firstName": "Lillian", "lastName": "Lane", "email": "llane68@rakuten.co.jp", "avatar": "http://i.pravatar.cc/100?u=Lillian" },
        { "id": 226, "firstName": "Cynthia", "lastName": "Bailey", "email": "cbailey69@fda.gov", "avatar": "http://i.pravatar.cc/100?u=Cynthia" },
        { "id": 227, "firstName": "Julia", "lastName": "Hunter", "email": "jhunter6a@buzzfeed.com", "avatar": "http://i.pravatar.cc/100?u=Julia" },
        { "id": 228, "firstName": "Ernest", "lastName": "Gray", "email": "egray6b@weather.com", "avatar": "http://i.pravatar.cc/100?u=Ernest" },
        { "id": 229, "firstName": "Tammy", "lastName": "Henry", "email": "thenry6c@shareasale.com", "avatar": "http://i.pravatar.cc/100?u=Tammy" },
        { "id": 230, "firstName": "Philip", "lastName": "Thompson", "email": "pthompson6d@rambler.ru", "avatar": "http://i.pravatar.cc/100?u=Philip" },
        { "id": 231, "firstName": "Christopher", "lastName": "Vasquez", "email": "cvasquez6e@ucla.edu", "avatar": "http://i.pravatar.cc/100?u=Christopher" },
        { "id": 232, "firstName": "Jack", "lastName": "Henry", "email": "jhenry6f@mail.ru", "avatar": "http://i.pravatar.cc/100?u=Jack" },
        { "id": 233, "firstName": "Anne", "lastName": "Franklin", "email": "afranklin6g@accuweather.com", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 234, "firstName": "Jack", "lastName": "Peters", "email": "jpeters6h@washingtonpost.com", "avatar": "http://i.pravatar.cc/100?u=Jack" },
        { "id": 235, "firstName": "Matthew", "lastName": "Mason", "email": "mmason6i@vimeo.com", "avatar": "http://i.pravatar.cc/100?u=Matthew" },
        { "id": 236, "firstName": "Edward", "lastName": "Barnes", "email": "ebarnes6j@reference.com", "avatar": "http://i.pravatar.cc/100?u=Edward" },
        { "id": 237, "firstName": "Harold", "lastName": "Richards", "email": "hrichards6k@home.pl", "avatar": "http://i.pravatar.cc/100?u=Harold" },
        { "id": 238, "firstName": "Michael", "lastName": "Nguyen", "email": "mnguyen6l@addthis.com", "avatar": "http://i.pravatar.cc/100?u=Michael" },
        { "id": 239, "firstName": "Louis", "lastName": "Ward", "email": "lward6m@stumbleupon.com", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 240, "firstName": "Anthony", "lastName": "Allen", "email": "aallen6n@freewebs.com", "avatar": "http://i.pravatar.cc/100?u=Anthony" },
        { "id": 241, "firstName": "Craig", "lastName": "Turner", "email": "cturner6o@unicef.org", "avatar": "http://i.pravatar.cc/100?u=Craig" },
        { "id": 242, "firstName": "Stephen", "lastName": "Murphy", "email": "smurphy6p@google.co.uk", "avatar": "http://i.pravatar.cc/100?u=Stephen" },
        { "id": 243, "firstName": "Ernest", "lastName": "Perkins", "email": "eperkins6q@tripadvisor.com", "avatar": "http://i.pravatar.cc/100?u=Ernest" },
        { "id": 244, "firstName": "Willie", "lastName": "Jackson", "email": "wjackson6r@rediff.com", "avatar": "http://i.pravatar.cc/100?u=Willie" },
        { "id": 245, "firstName": "Robin", "lastName": "Armstrong", "email": "rarmstrong6s@hugedomains.com", "avatar": "http://i.pravatar.cc/100?u=Robin" },
        { "id": 246, "firstName": "Carol", "lastName": "Vasquez", "email": "cvasquez6t@eventbrite.com", "avatar": "http://i.pravatar.cc/100?u=Carol" },
        { "id": 247, "firstName": "Lillian", "lastName": "Gilbert", "email": "lgilbert6u@businesswire.com", "avatar": "http://i.pravatar.cc/100?u=Lillian" },
        { "id": 248, "firstName": "Jerry", "lastName": "Moore", "email": "jmoore6v@utexas.edu", "avatar": "http://i.pravatar.cc/100?u=Jerry" },
        { "id": 249, "firstName": "Paul", "lastName": "Bowman", "email": "pbowman6w@unesco.org", "avatar": "http://i.pravatar.cc/100?u=Paul" },
        { "id": 250, "firstName": "Antonio", "lastName": "Anderson", "email": "aanderson6x@arstechnica.com", "avatar": "http://i.pravatar.cc/100?u=Antonio" },
        { "id": 251, "firstName": "Doris", "lastName": "Wright", "email": "dwright6y@fda.gov", "avatar": "http://i.pravatar.cc/100?u=Doris" },
        { "id": 252, "firstName": "Cheryl", "lastName": "Ray", "email": "cray6z@uol.com.br", "avatar": "http://i.pravatar.cc/100?u=Cheryl" },
        { "id": 253, "firstName": "Catherine", "lastName": "Peterson", "email": "cpeterson70@photobucket.com", "avatar": "http://i.pravatar.cc/100?u=Catherine" },
        { "id": 254, "firstName": "Theresa", "lastName": "Sullivan", "email": "tsullivan71@is.gd", "avatar": "http://i.pravatar.cc/100?u=Theresa" },
        { "id": 255, "firstName": "Wanda", "lastName": "Carter", "email": "wcarter72@weebly.com", "avatar": "http://i.pravatar.cc/100?u=Wanda" },
        { "id": 256, "firstName": "Lawrence", "lastName": "Lawrence", "email": "llawrence73@ustream.tv", "avatar": "http://i.pravatar.cc/100?u=Lawrence" },
        { "id": 257, "firstName": "Anne", "lastName": "Reid", "email": "areid74@sakura.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 258, "firstName": "Jimmy", "lastName": "Nelson", "email": "jnelson75@cafepress.com", "avatar": "http://i.pravatar.cc/100?u=Jimmy" },
        { "id": 259, "firstName": "Andrew", "lastName": "Hart", "email": "ahart76@smh.com.au", "avatar": "http://i.pravatar.cc/100?u=Andrew" },
        { "id": 260, "firstName": "Fred", "lastName": "Porter", "email": "fporter77@slideshare.net", "avatar": "http://i.pravatar.cc/100?u=Fred" },
        { "id": 261, "firstName": "Roy", "lastName": "Clark", "email": "rclark78@tuttocitta.it", "avatar": "http://i.pravatar.cc/100?u=Roy" },
        { "id": 262, "firstName": "Irene", "lastName": "Greene", "email": "igreene79@fda.gov", "avatar": "http://i.pravatar.cc/100?u=Irene" },
        { "id": 263, "firstName": "Ann", "lastName": "Carroll", "email": "acarroll7a@cnbc.com", "avatar": "http://i.pravatar.cc/100?u=Ann" },
        { "id": 264, "firstName": "Nancy", "lastName": "Hunter", "email": "nhunter7b@alexa.com", "avatar": "http://i.pravatar.cc/100?u=Nancy" },
        { "id": 265, "firstName": "Michael", "lastName": "Ferguson", "email": "mferguson7c@walmart.com", "avatar": "http://i.pravatar.cc/100?u=Michael" },
        { "id": 266, "firstName": "Diane", "lastName": "Sanchez", "email": "dsanchez7d@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=Diane" },
        { "id": 267, "firstName": "Carol", "lastName": "Collins", "email": "ccollins7e@java.com", "avatar": "http://i.pravatar.cc/100?u=Carol" },
        { "id": 268, "firstName": "Carlos", "lastName": "Little", "email": "clittle7f@quantcast.com", "avatar": "http://i.pravatar.cc/100?u=Carlos" },
        { "id": 269, "firstName": "Anne", "lastName": "Flores", "email": "aflores7g@plala.or.jp", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 270, "firstName": "Sandra", "lastName": "Gutierrez", "email": "sgutierrez7h@godaddy.com", "avatar": "http://i.pravatar.cc/100?u=Sandra" },
        { "id": 271, "firstName": "Harold", "lastName": "Reed", "email": "hreed7i@example.com", "avatar": "http://i.pravatar.cc/100?u=Harold" },
        { "id": 272, "firstName": "Ryan", "lastName": "Snyder", "email": "rsnyder7j@themeforest.net", "avatar": "http://i.pravatar.cc/100?u=Ryan" },
        { "id": 273, "firstName": "Elizabeth", "lastName": "Campbell", "email": "ecampbell7k@indiatimes.com", "avatar": "http://i.pravatar.cc/100?u=Elizabeth" },
        { "id": 274, "firstName": "Heather", "lastName": "Phillips", "email": "hphillips7l@qq.com", "avatar": "http://i.pravatar.cc/100?u=Heather" },
        { "id": 275, "firstName": "Antonio", "lastName": "Nelson", "email": "anelson7m@illinois.edu", "avatar": "http://i.pravatar.cc/100?u=Antonio" },
        { "id": 276, "firstName": "Jonathan", "lastName": "Chapman", "email": "jchapman7n@prweb.com", "avatar": "http://i.pravatar.cc/100?u=Jonathan" },
        { "id": 277, "firstName": "Julia", "lastName": "Romero", "email": "jromero7o@hhs.gov", "avatar": "http://i.pravatar.cc/100?u=Julia" },
        { "id": 278, "firstName": "Carolyn", "lastName": "Brooks", "email": "cbrooks7p@jiathis.com", "avatar": "http://i.pravatar.cc/100?u=Carolyn" },
        { "id": 279, "firstName": "Samuel", "lastName": "Sims", "email": "ssims7q@vkontakte.ru", "avatar": "http://i.pravatar.cc/100?u=Samuel" },
        { "id": 280, "firstName": "Sean", "lastName": "Mills", "email": "smills7r@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=Sean" },
        { "id": 281, "firstName": "Lawrence", "lastName": "Willis", "email": "lwillis7s@census.gov", "avatar": "http://i.pravatar.cc/100?u=Lawrence" },
        { "id": 282, "firstName": "Frank", "lastName": "Johnston", "email": "fjohnston7t@xing.com", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 283, "firstName": "Gerald", "lastName": "Burke", "email": "gburke7u@sphinn.com", "avatar": "http://i.pravatar.cc/100?u=Gerald" },
        { "id": 284, "firstName": "Debra", "lastName": "Woods", "email": "dwoods7v@cafepress.com", "avatar": "http://i.pravatar.cc/100?u=Debra" },
        { "id": 285, "firstName": "Lois", "lastName": "James", "email": "ljames7w@bigcartel.com", "avatar": "http://i.pravatar.cc/100?u=Lois" },
        { "id": 286, "firstName": "Louis", "lastName": "Knight", "email": "lknight7x@tiny.cc", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 287, "firstName": "Joshua", "lastName": "Morrison", "email": "jmorrison7y@sun.com", "avatar": "http://i.pravatar.cc/100?u=Joshua" },
        { "id": 288, "firstName": "Ernest", "lastName": "Brooks", "email": "ebrooks7z@timesonline.co.uk", "avatar": "http://i.pravatar.cc/100?u=Ernest" },
        { "id": 289, "firstName": "Wanda", "lastName": "Fields", "email": "wfields80@furl.net", "avatar": "http://i.pravatar.cc/100?u=Wanda" },
        { "id": 290, "firstName": "Teresa", "lastName": "Bennett", "email": "tbennett81@artisteer.com", "avatar": "http://i.pravatar.cc/100?u=Teresa" },
        { "id": 291, "firstName": "Tina", "lastName": "Mcdonald", "email": "tmcdonald82@blogtalkradio.com", "avatar": "http://i.pravatar.cc/100?u=Tina" },
        { "id": 292, "firstName": "Beverly", "lastName": "Porter", "email": "bporter83@biglobe.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Beverly" },
        { "id": 293, "firstName": "Matthew", "lastName": "Nguyen", "email": "mnguyen84@paginegialle.it", "avatar": "http://i.pravatar.cc/100?u=Matthew" },
        { "id": 294, "firstName": "Johnny", "lastName": "Howard", "email": "jhoward85@imageshack.us", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 295, "firstName": "Stephen", "lastName": "Alvarez", "email": "salvarez86@domainmarket.com", "avatar": "http://i.pravatar.cc/100?u=Stephen" },
        { "id": 296, "firstName": "John", "lastName": "Hunt", "email": "jhunt87@ucsd.edu", "avatar": "http://i.pravatar.cc/100?u=John" },
        { "id": 297, "firstName": "Kelly", "lastName": "Wagner", "email": "kwagner88@blinklist.com", "avatar": "http://i.pravatar.cc/100?u=Kelly" },
        { "id": 298, "firstName": "Brian", "lastName": "Mitchell", "email": "bmitchell89@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 299, "firstName": "Donald", "lastName": "Stanley", "email": "dstanley8a@fotki.com", "avatar": "http://i.pravatar.cc/100?u=Donald" },
        { "id": 300, "firstName": "Janice", "lastName": "Romero", "email": "jromero8b@artisteer.com", "avatar": "http://i.pravatar.cc/100?u=Janice" },
        { "id": 301, "firstName": "Cynthia", "lastName": "Gomez", "email": "cgomez8c@ezinearticles.com", "avatar": "http://i.pravatar.cc/100?u=Cynthia" },
        { "id": 302, "firstName": "Rachel", "lastName": "Lawrence", "email": "rlawrence8d@miitbeian.gov.cn", "avatar": "http://i.pravatar.cc/100?u=Rachel" },
        { "id": 303, "firstName": "Evelyn", "lastName": "Martinez", "email": "emartinez8e@time.com", "avatar": "http://i.pravatar.cc/100?u=Evelyn" },
        { "id": 304, "firstName": "Evelyn", "lastName": "Fernandez", "email": "efernandez8f@bravesites.com", "avatar": "http://i.pravatar.cc/100?u=Evelyn" },
        { "id": 305, "firstName": "Jonathan", "lastName": "Lawson", "email": "jlawson8g@cpanel.net", "avatar": "http://i.pravatar.cc/100?u=Jonathan" },
        { "id": 306, "firstName": "Gregory", "lastName": "Reyes", "email": "greyes8h@sphinn.com", "avatar": "http://i.pravatar.cc/100?u=Gregory" },
        { "id": 307, "firstName": "Lillian", "lastName": "Palmer", "email": "lpalmer8i@ocn.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Lillian" },
        { "id": 308, "firstName": "Stephanie", "lastName": "Perkins", "email": "sperkins8j@prnewswire.com", "avatar": "http://i.pravatar.cc/100?u=Stephanie" },
        { "id": 309, "firstName": "Thomas", "lastName": "Hamilton", "email": "thamilton8k@51.la", "avatar": "http://i.pravatar.cc/100?u=Thomas" },
        { "id": 310, "firstName": "Brian", "lastName": "Reynolds", "email": "breynolds8l@si.edu", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 311, "firstName": "Brian", "lastName": "Stewart", "email": "bstewart8m@behance.net", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 312, "firstName": "Katherine", "lastName": "Johnston", "email": "kjohnston8n@hexun.com", "avatar": "http://i.pravatar.cc/100?u=Katherine" },
        { "id": 313, "firstName": "Steven", "lastName": "Banks", "email": "sbanks8o@freewebs.com", "avatar": "http://i.pravatar.cc/100?u=Steven" },
        { "id": 314, "firstName": "Louis", "lastName": "Carpenter", "email": "lcarpenter8p@loc.gov", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 315, "firstName": "Charles", "lastName": "Carter", "email": "ccarter8q@rakuten.co.jp", "avatar": "http://i.pravatar.cc/100?u=Charles" },
        { "id": 316, "firstName": "Janice", "lastName": "Cook", "email": "jcook8r@clickbank.net", "avatar": "http://i.pravatar.cc/100?u=Janice" },
        { "id": 317, "firstName": "Anna", "lastName": "Welch", "email": "awelch8s@miibeian.gov.cn", "avatar": "http://i.pravatar.cc/100?u=Anna" },
        { "id": 318, "firstName": "Evelyn", "lastName": "Hughes", "email": "ehughes8t@ca.gov", "avatar": "http://i.pravatar.cc/100?u=Evelyn" },
        { "id": 319, "firstName": "Albert", "lastName": "Wells", "email": "awells8u@bloomberg.com", "avatar": "http://i.pravatar.cc/100?u=Albert" },
        { "id": 320, "firstName": "Brandon", "lastName": "Price", "email": "bprice8v@youtu.be", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 321, "firstName": "Dorothy", "lastName": "Lewis", "email": "dlewis8w@disqus.com", "avatar": "http://i.pravatar.cc/100?u=Dorothy" },
        { "id": 322, "firstName": "Justin", "lastName": "Henry", "email": "jhenry8x@dailymotion.com", "avatar": "http://i.pravatar.cc/100?u=Justin" },
        { "id": 323, "firstName": "Russell", "lastName": "Scott", "email": "rscott8y@hatena.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Russell" },
        { "id": 324, "firstName": "Robin", "lastName": "Frazier", "email": "rfrazier8z@woothemes.com", "avatar": "http://i.pravatar.cc/100?u=Robin" },
        { "id": 325, "firstName": "Bruce", "lastName": "Perkins", "email": "bperkins90@bloglovin.com", "avatar": "http://i.pravatar.cc/100?u=Bruce" },
        { "id": 326, "firstName": "Shirley", "lastName": "Hughes", "email": "shughes91@indiatimes.com", "avatar": "http://i.pravatar.cc/100?u=Shirley" },
        { "id": 327, "firstName": "Joshua", "lastName": "Tucker", "email": "jtucker92@taobao.com", "avatar": "http://i.pravatar.cc/100?u=Joshua" },
        { "id": 328, "firstName": "Samuel", "lastName": "Murphy", "email": "smurphy93@vk.com", "avatar": "http://i.pravatar.cc/100?u=Samuel" },
        { "id": 329, "firstName": "Irene", "lastName": "Owens", "email": "iowens94@japanpost.jp", "avatar": "http://i.pravatar.cc/100?u=Irene" },
        { "id": 330, "firstName": "Jennifer", "lastName": "Garza", "email": "jgarza95@va.gov", "avatar": "http://i.pravatar.cc/100?u=Jennifer" },
        { "id": 331, "firstName": "Martha", "lastName": "Williams", "email": "mwilliams96@behance.net", "avatar": "http://i.pravatar.cc/100?u=Martha" },
        { "id": 332, "firstName": "Nicholas", "lastName": "Young", "email": "nyoung97@stanford.edu", "avatar": "http://i.pravatar.cc/100?u=Nicholas" },
        { "id": 333, "firstName": "Clarence", "lastName": "Watkins", "email": "cwatkins98@canalblog.com", "avatar": "http://i.pravatar.cc/100?u=Clarence" },
        { "id": 334, "firstName": "William", "lastName": "Campbell", "email": "wcampbell99@scientificamerican.com", "avatar": "http://i.pravatar.cc/100?u=William" },
        { "id": 335, "firstName": "Arthur", "lastName": "Rose", "email": "arose9a@mapy.cz", "avatar": "http://i.pravatar.cc/100?u=Arthur" },
        { "id": 336, "firstName": "Aaron", "lastName": "Robertson", "email": "arobertson9b@mlb.com", "avatar": "http://i.pravatar.cc/100?u=Aaron" },
        { "id": 337, "firstName": "Walter", "lastName": "Stanley", "email": "wstanley9c@last.fm", "avatar": "http://i.pravatar.cc/100?u=Walter" },
        { "id": 338, "firstName": "George", "lastName": "Henderson", "email": "ghenderson9d@github.io", "avatar": "http://i.pravatar.cc/100?u=George" },
        { "id": 339, "firstName": "Jessica", "lastName": "Burns", "email": "jburns9e@icio.us", "avatar": "http://i.pravatar.cc/100?u=Jessica" },
        { "id": 340, "firstName": "Gerald", "lastName": "Tucker", "email": "gtucker9f@ameblo.jp", "avatar": "http://i.pravatar.cc/100?u=Gerald" },
        { "id": 341, "firstName": "Charles", "lastName": "Fields", "email": "cfields9g@drupal.org", "avatar": "http://i.pravatar.cc/100?u=Charles" },
        { "id": 342, "firstName": "Rose", "lastName": "Rodriguez", "email": "rrodriguez9h@miibeian.gov.cn", "avatar": "http://i.pravatar.cc/100?u=Rose" },
        { "id": 343, "firstName": "Julia", "lastName": "Lynch", "email": "jlynch9i@upenn.edu", "avatar": "http://i.pravatar.cc/100?u=Julia" },
        { "id": 344, "firstName": "Roger", "lastName": "Reed", "email": "rreed9j@cornell.edu", "avatar": "http://i.pravatar.cc/100?u=Roger" },
        { "id": 345, "firstName": "Linda", "lastName": "Stevens", "email": "lstevens9k@latimes.com", "avatar": "http://i.pravatar.cc/100?u=Linda" },
        { "id": 346, "firstName": "Andrea", "lastName": "Fields", "email": "afields9l@ameblo.jp", "avatar": "http://i.pravatar.cc/100?u=Andrea" },
        { "id": 347, "firstName": "Christina", "lastName": "Little", "email": "clittle9m@toplist.cz", "avatar": "http://i.pravatar.cc/100?u=Christina" },
        { "id": 348, "firstName": "Stephen", "lastName": "Frazier", "email": "sfrazier9n@cdbaby.com", "avatar": "http://i.pravatar.cc/100?u=Stephen" },
        { "id": 349, "firstName": "Jose", "lastName": "Parker", "email": "jparker9o@slideshare.net", "avatar": "http://i.pravatar.cc/100?u=Jose" },
        { "id": 350, "firstName": "Patricia", "lastName": "Dean", "email": "pdean9p@flickr.com", "avatar": "http://i.pravatar.cc/100?u=Patricia" },
        { "id": 351, "firstName": "Aaron", "lastName": "Perkins", "email": "aperkins9q@printfriendly.com", "avatar": "http://i.pravatar.cc/100?u=Aaron" },
        { "id": 352, "firstName": "Diana", "lastName": "Martinez", "email": "dmartinez9r@ucoz.ru", "avatar": "http://i.pravatar.cc/100?u=Diana" },
        { "id": 353, "firstName": "Michael", "lastName": "Myers", "email": "mmyers9s@wikimedia.org", "avatar": "http://i.pravatar.cc/100?u=Michael" },
        { "id": 354, "firstName": "John", "lastName": "Butler", "email": "jbutler9t@elpais.com", "avatar": "http://i.pravatar.cc/100?u=John" },
        { "id": 355, "firstName": "Donald", "lastName": "Torres", "email": "dtorres9u@businessweek.com", "avatar": "http://i.pravatar.cc/100?u=Donald" },
        { "id": 356, "firstName": "Christopher", "lastName": "Brown", "email": "cbrown9v@flickr.com", "avatar": "http://i.pravatar.cc/100?u=Christopher" },
        { "id": 357, "firstName": "Nicole", "lastName": "Ray", "email": "nray9w@booking.com", "avatar": "http://i.pravatar.cc/100?u=Nicole" },
        { "id": 358, "firstName": "Carol", "lastName": "Ross", "email": "cross9x@webs.com", "avatar": "http://i.pravatar.cc/100?u=Carol" },
        { "id": 359, "firstName": "Brenda", "lastName": "Stephens", "email": "bstephens9y@mayoclinic.com", "avatar": "http://i.pravatar.cc/100?u=Brenda" },
        { "id": 360, "firstName": "Michael", "lastName": "James", "email": "mjames9z@noaa.gov", "avatar": "http://i.pravatar.cc/100?u=Michael" },
        { "id": 361, "firstName": "Dennis", "lastName": "Richards", "email": "drichardsa0@usa.gov", "avatar": "http://i.pravatar.cc/100?u=Dennis" },
        { "id": 362, "firstName": "Harold", "lastName": "Fisher", "email": "hfishera1@webs.com", "avatar": "http://i.pravatar.cc/100?u=Harold" },
        { "id": 363, "firstName": "Daniel", "lastName": "Lynch", "email": "dlyncha2@tiny.cc", "avatar": "http://i.pravatar.cc/100?u=Daniel" },
        { "id": 364, "firstName": "Joseph", "lastName": "Chapman", "email": "jchapmana3@theatlantic.com", "avatar": "http://i.pravatar.cc/100?u=Joseph" },
        { "id": 365, "firstName": "Sharon", "lastName": "Torres", "email": "storresa4@techcrunch.com", "avatar": "http://i.pravatar.cc/100?u=Sharon" },
        { "id": 366, "firstName": "Thomas", "lastName": "Lawrence", "email": "tlawrencea5@ft.com", "avatar": "http://i.pravatar.cc/100?u=Thomas" },
        { "id": 367, "firstName": "Daniel", "lastName": "Martinez", "email": "dmartineza6@berkeley.edu", "avatar": "http://i.pravatar.cc/100?u=Daniel" },
        { "id": 368, "firstName": "Johnny", "lastName": "Gonzalez", "email": "jgonzaleza7@arstechnica.com", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 369, "firstName": "Jerry", "lastName": "Armstrong", "email": "jarmstronga8@mapquest.com", "avatar": "http://i.pravatar.cc/100?u=Jerry" },
        { "id": 370, "firstName": "Judy", "lastName": "Henderson", "email": "jhendersona9@multiply.com", "avatar": "http://i.pravatar.cc/100?u=Judy" },
        { "id": 371, "firstName": "Karen", "lastName": "Price", "email": "kpriceaa@printfriendly.com", "avatar": "http://i.pravatar.cc/100?u=Karen" },
        { "id": 372, "firstName": "Carl", "lastName": "Harrison", "email": "charrisonab@spotify.com", "avatar": "http://i.pravatar.cc/100?u=Carl" },
        { "id": 373, "firstName": "Kathy", "lastName": "Richardson", "email": "krichardsonac@yale.edu", "avatar": "http://i.pravatar.cc/100?u=Kathy" },
        { "id": 374, "firstName": "Thomas", "lastName": "Rivera", "email": "triveraad@bluehost.com", "avatar": "http://i.pravatar.cc/100?u=Thomas" },
        { "id": 375, "firstName": "Andrea", "lastName": "Evans", "email": "aevansae@drupal.org", "avatar": "http://i.pravatar.cc/100?u=Andrea" },
        { "id": 376, "firstName": "Amy", "lastName": "Fowler", "email": "afowleraf@booking.com", "avatar": "http://i.pravatar.cc/100?u=Amy" },
        { "id": 377, "firstName": "Carl", "lastName": "Mason", "email": "cmasonag@sina.com.cn", "avatar": "http://i.pravatar.cc/100?u=Carl" },
        { "id": 378, "firstName": "Joseph", "lastName": "Webb", "email": "jwebbah@ed.gov", "avatar": "http://i.pravatar.cc/100?u=Joseph" },
        { "id": 379, "firstName": "Katherine", "lastName": "Campbell", "email": "kcampbellai@unc.edu", "avatar": "http://i.pravatar.cc/100?u=Katherine" },
        { "id": 380, "firstName": "Kathy", "lastName": "Martinez", "email": "kmartinezaj@statcounter.com", "avatar": "http://i.pravatar.cc/100?u=Kathy" },
        { "id": 381, "firstName": "Heather", "lastName": "Watkins", "email": "hwatkinsak@imdb.com", "avatar": "http://i.pravatar.cc/100?u=Heather" },
        { "id": 382, "firstName": "Wanda", "lastName": "Gonzalez", "email": "wgonzalezal@aol.com", "avatar": "http://i.pravatar.cc/100?u=Wanda" },
        { "id": 383, "firstName": "Michelle", "lastName": "Chavez", "email": "mchavezam@go.com", "avatar": "http://i.pravatar.cc/100?u=Michelle" },
        { "id": 384, "firstName": "Ruth", "lastName": "Lopez", "email": "rlopezan@dyndns.org", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 385, "firstName": "Paula", "lastName": "Webb", "email": "pwebbao@typepad.com", "avatar": "http://i.pravatar.cc/100?u=Paula" },
        { "id": 386, "firstName": "George", "lastName": "Rice", "email": "griceap@fotki.com", "avatar": "http://i.pravatar.cc/100?u=George" },
        { "id": 387, "firstName": "Linda", "lastName": "Chapman", "email": "lchapmanaq@1688.com", "avatar": "http://i.pravatar.cc/100?u=Linda" },
        { "id": 388, "firstName": "Andrew", "lastName": "Perkins", "email": "aperkinsar@ed.gov", "avatar": "http://i.pravatar.cc/100?u=Andrew" },
        { "id": 389, "firstName": "Jane", "lastName": "Reyes", "email": "jreyesas@w3.org", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 390, "firstName": "Angela", "lastName": "Stanley", "email": "astanleyat@uol.com.br", "avatar": "http://i.pravatar.cc/100?u=Angela" },
        { "id": 391, "firstName": "Steven", "lastName": "Rodriguez", "email": "srodriguezau@quantcast.com", "avatar": "http://i.pravatar.cc/100?u=Steven" },
        { "id": 392, "firstName": "Ruth", "lastName": "Olson", "email": "rolsonav@squidoo.com", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 393, "firstName": "Benjamin", "lastName": "Young", "email": "byoungaw@sina.com.cn", "avatar": "http://i.pravatar.cc/100?u=Benjamin" },
        { "id": 394, "firstName": "Rose", "lastName": "Roberts", "email": "rrobertsax@sciencedirect.com", "avatar": "http://i.pravatar.cc/100?u=Rose" },
        { "id": 395, "firstName": "Melissa", "lastName": "Evans", "email": "mevansay@dion.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Melissa" },
        { "id": 396, "firstName": "Catherine", "lastName": "Dunn", "email": "cdunnaz@blogspot.com", "avatar": "http://i.pravatar.cc/100?u=Catherine" },
        { "id": 397, "firstName": "Pamela", "lastName": "Stewart", "email": "pstewartb0@furl.net", "avatar": "http://i.pravatar.cc/100?u=Pamela" },
        { "id": 398, "firstName": "Frank", "lastName": "Kim", "email": "fkimb1@people.com.cn", "avatar": "http://i.pravatar.cc/100?u=Frank" },
        { "id": 399, "firstName": "Willie", "lastName": "Nguyen", "email": "wnguyenb2@vinaora.com", "avatar": "http://i.pravatar.cc/100?u=Willie" },
        { "id": 400, "firstName": "Sean", "lastName": "Peters", "email": "spetersb3@ebay.com", "avatar": "http://i.pravatar.cc/100?u=Sean" },
        { "id": 401, "firstName": "Kathryn", "lastName": "Burton", "email": "kburtonb4@boston.com", "avatar": "http://i.pravatar.cc/100?u=Kathryn" },
        { "id": 402, "firstName": "Janet", "lastName": "Hicks", "email": "jhicksb5@mysql.com", "avatar": "http://i.pravatar.cc/100?u=Janet" },
        { "id": 403, "firstName": "Catherine", "lastName": "Dean", "email": "cdeanb6@imdb.com", "avatar": "http://i.pravatar.cc/100?u=Catherine" },
        { "id": 404, "firstName": "Rose", "lastName": "Hanson", "email": "rhansonb7@twitpic.com", "avatar": "http://i.pravatar.cc/100?u=Rose" },
        { "id": 405, "firstName": "Patrick", "lastName": "Fowler", "email": "pfowlerb8@printfriendly.com", "avatar": "http://i.pravatar.cc/100?u=Patrick" },
        { "id": 406, "firstName": "Jeffrey", "lastName": "Andrews", "email": "jandrewsb9@spiegel.de", "avatar": "http://i.pravatar.cc/100?u=Jeffrey" },
        { "id": 407, "firstName": "Debra", "lastName": "Morgan", "email": "dmorganba@wikipedia.org", "avatar": "http://i.pravatar.cc/100?u=Debra" },
        { "id": 408, "firstName": "Jane", "lastName": "Richards", "email": "jrichardsbb@gizmodo.com", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 409, "firstName": "Wanda", "lastName": "Montgomery", "email": "wmontgomerybc@psu.edu", "avatar": "http://i.pravatar.cc/100?u=Wanda" },
        { "id": 410, "firstName": "Jean", "lastName": "Warren", "email": "jwarrenbd@squarespace.com", "avatar": "http://i.pravatar.cc/100?u=Jean" },
        { "id": 411, "firstName": "Philip", "lastName": "Jacobs", "email": "pjacobsbe@statcounter.com", "avatar": "http://i.pravatar.cc/100?u=Philip" },
        { "id": 412, "firstName": "Amanda", "lastName": "Ellis", "email": "aellisbf@bbc.co.uk", "avatar": "http://i.pravatar.cc/100?u=Amanda" },
        { "id": 413, "firstName": "Brandon", "lastName": "Garcia", "email": "bgarciabg@ftc.gov", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 414, "firstName": "Lawrence", "lastName": "Brooks", "email": "lbrooksbh@w3.org", "avatar": "http://i.pravatar.cc/100?u=Lawrence" },
        { "id": 415, "firstName": "Susan", "lastName": "Lawrence", "email": "slawrencebi@biglobe.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Susan" },
        { "id": 416, "firstName": "Aaron", "lastName": "Harris", "email": "aharrisbj@ezinearticles.com", "avatar": "http://i.pravatar.cc/100?u=Aaron" },
        { "id": 417, "firstName": "Peter", "lastName": "Wood", "email": "pwoodbk@ucsd.edu", "avatar": "http://i.pravatar.cc/100?u=Peter" },
        { "id": 418, "firstName": "Deborah", "lastName": "Greene", "email": "dgreenebl@prweb.com", "avatar": "http://i.pravatar.cc/100?u=Deborah" },
        { "id": 419, "firstName": "Walter", "lastName": "Ramos", "email": "wramosbm@usda.gov", "avatar": "http://i.pravatar.cc/100?u=Walter" },
        { "id": 420, "firstName": "Kenneth", "lastName": "Vasquez", "email": "kvasquezbn@wikipedia.org", "avatar": "http://i.pravatar.cc/100?u=Kenneth" },
        { "id": 421, "firstName": "Ruth", "lastName": "Brown", "email": "rbrownbo@google.it", "avatar": "http://i.pravatar.cc/100?u=Ruth" },
        { "id": 422, "firstName": "Carl", "lastName": "Ramos", "email": "cramosbp@lulu.com", "avatar": "http://i.pravatar.cc/100?u=Carl" },
        { "id": 423, "firstName": "Deborah", "lastName": "Bailey", "email": "dbaileybq@ihg.com", "avatar": "http://i.pravatar.cc/100?u=Deborah" },
        { "id": 424, "firstName": "Brandon", "lastName": "Rodriguez", "email": "brodriguezbr@symantec.com", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 425, "firstName": "Brandon", "lastName": "Rivera", "email": "briverabs@histats.com", "avatar": "http://i.pravatar.cc/100?u=Brandon" },
        { "id": 426, "firstName": "Benjamin", "lastName": "Richards", "email": "brichardsbt@plala.or.jp", "avatar": "http://i.pravatar.cc/100?u=Benjamin" },
        { "id": 427, "firstName": "Janice", "lastName": "Lee", "email": "jleebu@theguardian.com", "avatar": "http://i.pravatar.cc/100?u=Janice" },
        { "id": 428, "firstName": "Jerry", "lastName": "Thompson", "email": "jthompsonbv@ning.com", "avatar": "http://i.pravatar.cc/100?u=Jerry" },
        { "id": 429, "firstName": "Frances", "lastName": "Lopez", "email": "flopezbw@so-net.ne.jp", "avatar": "http://i.pravatar.cc/100?u=Frances" },
        { "id": 430, "firstName": "Helen", "lastName": "Vasquez", "email": "hvasquezbx@360.cn", "avatar": "http://i.pravatar.cc/100?u=Helen" },
        { "id": 431, "firstName": "Terry", "lastName": "Evans", "email": "tevansby@theatlantic.com", "avatar": "http://i.pravatar.cc/100?u=Terry" },
        { "id": 432, "firstName": "Lillian", "lastName": "Carter", "email": "lcarterbz@acquirethisname.com", "avatar": "http://i.pravatar.cc/100?u=Lillian" },
        { "id": 433, "firstName": "Paula", "lastName": "Reyes", "email": "preyesc0@ebay.co.uk", "avatar": "http://i.pravatar.cc/100?u=Paula" },
        { "id": 434, "firstName": "Louis", "lastName": "Cole", "email": "lcolec1@hostgator.com", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 435, "firstName": "Sharon", "lastName": "James", "email": "sjamesc2@wikia.com", "avatar": "http://i.pravatar.cc/100?u=Sharon" },
        { "id": 436, "firstName": "Susan", "lastName": "Spencer", "email": "sspencerc3@techcrunch.com", "avatar": "http://i.pravatar.cc/100?u=Susan" },
        { "id": 437, "firstName": "Chris", "lastName": "Harper", "email": "charperc4@weather.com", "avatar": "http://i.pravatar.cc/100?u=Chris" },
        { "id": 438, "firstName": "Lisa", "lastName": "Gonzales", "email": "lgonzalesc5@exblog.jp", "avatar": "http://i.pravatar.cc/100?u=Lisa" },
        { "id": 439, "firstName": "Brian", "lastName": "Brown", "email": "bbrownc6@umn.edu", "avatar": "http://i.pravatar.cc/100?u=Brian" },
        { "id": 440, "firstName": "Matthew", "lastName": "Rodriguez", "email": "mrodriguezc7@washington.edu", "avatar": "http://i.pravatar.cc/100?u=Matthew" },
        { "id": 441, "firstName": "William", "lastName": "Arnold", "email": "warnoldc8@reference.com", "avatar": "http://i.pravatar.cc/100?u=William" },
        { "id": 442, "firstName": "Earl", "lastName": "Crawford", "email": "ecrawfordc9@psu.edu", "avatar": "http://i.pravatar.cc/100?u=Earl" },
        { "id": 443, "firstName": "Margaret", "lastName": "Schmidt", "email": "mschmidtca@goo.gl", "avatar": "http://i.pravatar.cc/100?u=Margaret" },
        { "id": 444, "firstName": "Jerry", "lastName": "Willis", "email": "jwilliscb@buzzfeed.com", "avatar": "http://i.pravatar.cc/100?u=Jerry" },
        { "id": 445, "firstName": "Nicholas", "lastName": "Davis", "email": "ndaviscc@opensource.org", "avatar": "http://i.pravatar.cc/100?u=Nicholas" },
        { "id": 446, "firstName": "Norma", "lastName": "Alvarez", "email": "nalvarezcd@yandex.ru", "avatar": "http://i.pravatar.cc/100?u=Norma" },
        { "id": 447, "firstName": "Ann", "lastName": "Rose", "email": "arosece@jimdo.com", "avatar": "http://i.pravatar.cc/100?u=Ann" },
        { "id": 448, "firstName": "Diana", "lastName": "Wagner", "email": "dwagnercf@ebay.co.uk", "avatar": "http://i.pravatar.cc/100?u=Diana" },
        { "id": 449, "firstName": "Earl", "lastName": "Howard", "email": "ehowardcg@ox.ac.uk", "avatar": "http://i.pravatar.cc/100?u=Earl" },
        { "id": 450, "firstName": "Timothy", "lastName": "Harrison", "email": "tharrisonch@e-recht24.de", "avatar": "http://i.pravatar.cc/100?u=Timothy" },
        { "id": 451, "firstName": "Jack", "lastName": "Armstrong", "email": "jarmstrongci@moonfruit.com", "avatar": "http://i.pravatar.cc/100?u=Jack" },
        { "id": 452, "firstName": "Elizabeth", "lastName": "Patterson", "email": "epattersoncj@taobao.com", "avatar": "http://i.pravatar.cc/100?u=Elizabeth" },
        { "id": 453, "firstName": "Jane", "lastName": "Burns", "email": "jburnsck@shinystat.com", "avatar": "http://i.pravatar.cc/100?u=Jane" },
        { "id": 454, "firstName": "Carol", "lastName": "Hill", "email": "chillcl@google.es", "avatar": "http://i.pravatar.cc/100?u=Carol" },
        { "id": 455, "firstName": "Carl", "lastName": "Jones", "email": "cjonescm@e-recht24.de", "avatar": "http://i.pravatar.cc/100?u=Carl" },
        { "id": 456, "firstName": "Steven", "lastName": "Gilbert", "email": "sgilbertcn@telegraph.co.uk", "avatar": "http://i.pravatar.cc/100?u=Steven" },
        { "id": 457, "firstName": "Johnny", "lastName": "Sanchez", "email": "jsanchezco@youtube.com", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 458, "firstName": "Howard", "lastName": "Knight", "email": "hknightcp@scientificamerican.com", "avatar": "http://i.pravatar.cc/100?u=Howard" },
        { "id": 459, "firstName": "Christopher", "lastName": "George", "email": "cgeorgecq@google.ru", "avatar": "http://i.pravatar.cc/100?u=Christopher" },
        { "id": 460, "firstName": "Dennis", "lastName": "Tucker", "email": "dtuckercr@google.ru", "avatar": "http://i.pravatar.cc/100?u=Dennis" },
        { "id": 461, "firstName": "Joan", "lastName": "Bowman", "email": "jbowmancs@multiply.com", "avatar": "http://i.pravatar.cc/100?u=Joan" },
        { "id": 462, "firstName": "Larry", "lastName": "Sims", "email": "lsimsct@parallels.com", "avatar": "http://i.pravatar.cc/100?u=Larry" },
        { "id": 463, "firstName": "Raymond", "lastName": "Andrews", "email": "randrewscu@npr.org", "avatar": "http://i.pravatar.cc/100?u=Raymond" },
        { "id": 464, "firstName": "Raymond", "lastName": "Knight", "email": "rknightcv@artisteer.com", "avatar": "http://i.pravatar.cc/100?u=Raymond" },
        { "id": 465, "firstName": "Jeffrey", "lastName": "Grant", "email": "jgrantcw@google.nl", "avatar": "http://i.pravatar.cc/100?u=Jeffrey" },
        { "id": 466, "firstName": "Joan", "lastName": "Long", "email": "jlongcx@java.com", "avatar": "http://i.pravatar.cc/100?u=Joan" },
        { "id": 467, "firstName": "Roger", "lastName": "Freeman", "email": "rfreemancy@theglobeandmail.com", "avatar": "http://i.pravatar.cc/100?u=Roger" },
        { "id": 468, "firstName": "Timothy", "lastName": "Banks", "email": "tbankscz@stanford.edu", "avatar": "http://i.pravatar.cc/100?u=Timothy" },
        { "id": 469, "firstName": "Jerry", "lastName": "Morgan", "email": "jmorgand0@etsy.com", "avatar": "http://i.pravatar.cc/100?u=Jerry" },
        { "id": 470, "firstName": "James", "lastName": "Jones", "email": "jjonesd1@slashdot.org", "avatar": "http://i.pravatar.cc/100?u=James" },
        { "id": 471, "firstName": "John", "lastName": "Wright", "email": "jwrightd2@imageshack.us", "avatar": "http://i.pravatar.cc/100?u=John" },
        { "id": 472, "firstName": "Kevin", "lastName": "Carter", "email": "kcarterd3@weibo.com", "avatar": "http://i.pravatar.cc/100?u=Kevin" },
        { "id": 473, "firstName": "Anne", "lastName": "Lopez", "email": "alopezd4@theguardian.com", "avatar": "http://i.pravatar.cc/100?u=Anne" },
        { "id": 474, "firstName": "David", "lastName": "Bennett", "email": "dbennettd5@friendfeed.com", "avatar": "http://i.pravatar.cc/100?u=David" },
        { "id": 475, "firstName": "Rose", "lastName": "Moreno", "email": "rmorenod6@netlog.com", "avatar": "http://i.pravatar.cc/100?u=Rose" },
        { "id": 476, "firstName": "Bruce", "lastName": "Frazier", "email": "bfrazierd7@newsvine.com", "avatar": "http://i.pravatar.cc/100?u=Bruce" },
        { "id": 477, "firstName": "Louis", "lastName": "Hunt", "email": "lhuntd8@mit.edu", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 478, "firstName": "Rebecca", "lastName": "Hawkins", "email": "rhawkinsd9@rediff.com", "avatar": "http://i.pravatar.cc/100?u=Rebecca" },
        { "id": 479, "firstName": "Janice", "lastName": "Sullivan", "email": "jsullivanda@answers.com", "avatar": "http://i.pravatar.cc/100?u=Janice" },
        { "id": 480, "firstName": "Marie", "lastName": "Kelly", "email": "mkellydb@deliciousdays.com", "avatar": "http://i.pravatar.cc/100?u=Marie" },
        { "id": 481, "firstName": "George", "lastName": "Rogers", "email": "grogersdc@indiegogo.com", "avatar": "http://i.pravatar.cc/100?u=George" },
        { "id": 482, "firstName": "Judith", "lastName": "Watkins", "email": "jwatkinsdd@who.int", "avatar": "http://i.pravatar.cc/100?u=Judith" },
        { "id": 483, "firstName": "Nicole", "lastName": "Murphy", "email": "nmurphyde@yolasite.com", "avatar": "http://i.pravatar.cc/100?u=Nicole" },
        { "id": 484, "firstName": "Pamela", "lastName": "Fields", "email": "pfieldsdf@imdb.com", "avatar": "http://i.pravatar.cc/100?u=Pamela" },
        { "id": 485, "firstName": "Janet", "lastName": "Sanders", "email": "jsandersdg@phpbb.com", "avatar": "http://i.pravatar.cc/100?u=Janet" },
        { "id": 486, "firstName": "Brenda", "lastName": "Jacobs", "email": "bjacobsdh@va.gov", "avatar": "http://i.pravatar.cc/100?u=Brenda" },
        { "id": 487, "firstName": "Gary", "lastName": "Tucker", "email": "gtuckerdi@clickbank.net", "avatar": "http://i.pravatar.cc/100?u=Gary" },
        { "id": 488, "firstName": "Louis", "lastName": "Wallace", "email": "lwallacedj@yolasite.com", "avatar": "http://i.pravatar.cc/100?u=Louis" },
        { "id": 489, "firstName": "Kevin", "lastName": "Gibson", "email": "kgibsondk@zimbio.com", "avatar": "http://i.pravatar.cc/100?u=Kevin" },
        { "id": 490, "firstName": "Patricia", "lastName": "Kennedy", "email": "pkennedydl@domainmarket.com", "avatar": "http://i.pravatar.cc/100?u=Patricia" },
        { "id": 491, "firstName": "Johnny", "lastName": "Burton", "email": "jburtondm@mediafire.com", "avatar": "http://i.pravatar.cc/100?u=Johnny" },
        { "id": 492, "firstName": "Judy", "lastName": "Parker", "email": "jparkerdn@google.com.au", "avatar": "http://i.pravatar.cc/100?u=Judy" },
        { "id": 493, "firstName": "Philip", "lastName": "Carr", "email": "pcarrdo@vimeo.com", "avatar": "http://i.pravatar.cc/100?u=Philip" },
        { "id": 494, "firstName": "Patricia", "lastName": "Rice", "email": "pricedp@sitemeter.com", "avatar": "http://i.pravatar.cc/100?u=Patricia" },
        { "id": 495, "firstName": "Jeremy", "lastName": "Burns", "email": "jburnsdq@dyndns.org", "avatar": "http://i.pravatar.cc/100?u=Jeremy" },
        { "id": 496, "firstName": "Amy", "lastName": "Ortiz", "email": "aortizdr@cornell.edu", "avatar": "http://i.pravatar.cc/100?u=Amy" },
        { "id": 497, "firstName": "Gary", "lastName": "Weaver", "email": "gweaverds@wix.com", "avatar": "http://i.pravatar.cc/100?u=Gary" },
        { "id": 498, "firstName": "Walter", "lastName": "Meyer", "email": "wmeyerdt@latimes.com", "avatar": "http://i.pravatar.cc/100?u=Walter" },
        { "id": 499, "firstName": "James", "lastName": "Long", "email": "jlongdu@usnews.com", "avatar": "http://i.pravatar.cc/100?u=James" },
        { "id": 500, "firstName": "Sara", "lastName": "Vasquez", "email": "svasquezdv@sina.com.cn", "avatar": "http://i.pravatar.cc/100?u=Sara" }];
    return SamplePeopleData;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/sample.people.data.js.map

/***/ }),

/***/ "../../../../../src/app/timesheet/sample.projects.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleProjectsData; });
var SampleProjectsData = /** @class */ (function () {
    function SampleProjectsData() {
    }
    SampleProjectsData.projects = [
        {
            "label": "Projects",
            "data": "proj",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "selectable": false,
            "children": [{
                    "label": "Agile Times",
                    "selectable": false,
                    "data": "agile",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "Frontend", "icon": "fa-chrome", "data": "fe" },
                        { "label": "Backend", "icon": "fa-cloud", "data": "be" },
                        { "label": "Operations", "icon": "fa-cogs", "data": "ops" }
                    ]
                },
                {
                    "label": "Mobile App",
                    "data": "mobile",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "selectable": false,
                    "children": [
                        { "label": "Frontend", "icon": "fa-chrome", "data": "fe" },
                        { "label": "Backend", "icon": "fa-cloud", "data": "be" },
                        { "label": "Operations", "icon": "fa-cogs", "data": "ops" }
                    ]
                }]
        }
    ];
    return SampleProjectsData;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/sample.projects.data.js.map

/***/ }),

/***/ "../../../../../src/app/timesheet/timesheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timesheet {\n  background-color: white;\n  font-family: \"Roboto\";\n}\n\n.header {\n  padding: 1em;\n  color: white;\n  background-color: #0275D8;\n  margin-bottom: 1em;\n}\n\n.dialogBody {\n  height: 400px;\n}\n\nh2 {\n  font-weight: bolder;\n  font-size: xx-large;\n  display: inline;\n}\n\nh3 {\n  font-weight: lighter;\n  font-size: xx-large;\n  display: inline;\n}\n\n.tabs >>> li {\n  width: 19%;\n}\n\n.timesheet-grid >>> .ui-datatable {\n  margin: 1em;\n}\n\np-schedule >>> .calendar {\n  height: 250px;\n}\n\n\np-gmap >>> .gmap {\n  width:100%;\n  height: 300px;\n}\n\np-steps >>> .ui-steps-item {\n  width: 25%;\n}\n\np-dataGrid >>> .ui-panel {\n  border: 0px;\n}\n\np-dataGrid >>> .ui-panel-titlebar {\n  font-size: smaller;\n  background-color: #F15B2A !important;\n  text-align: center;\n  height: 35px;\n}\n\n\np-dataGrid >>> .ui-panel-content {\n  padding: 0px;\n}\n\np-dataGrid >>> .ui-panel-content img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timesheet/timesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timesheet header ui-g-12\">\n  <h2>\n    {{ day }}\n  </h2>\n  <h3>\n    {{ dateAndMonth }}\n  </h3>\n</div>\n\n<p-tabView class=\"u-g-12 tabs\" (onChange)=\"onChangeTabs($event)\">\n  <p-tabPanel *ngFor=\"let tab of daysOfWeek\" header=\"{{tab}}\">\n\n    <p-dataTable [value]=\"getTimesForDay(tab)\" class=\"timesheet-grid\">\n      <p-column field=\"project\" header=\"Project\"></p-column>\n      <p-column field=\"category\" header=\"Category\"></p-column>\n      <p-column field=\"startTime\" header=\"Start Time\"></p-column>\n      <p-column field=\"endTime\" header=\"End Time\"></p-column>\n    </p-dataTable>\n\n\n  </p-tabPanel>\n</p-tabView>\n\n<button pButton label=\"Add Time Entry\" (click)=\"displayEditDialog = true\"></button>\n\n\n<p-dialog header=\"Create Time\" [modal]=\"true\" [(visible)]=\"displayEditDialog\" [ngSwitch]=\"dialogPageIndex\" width=\"700\"\n          height=\"550\">\n\n  <div class=\"dialogBody\">\n    <p-steps [model]=\"dialogPages\" [(activeIndex)]=\"dialogPageIndex\" [readonly]=\"false\">\n\n    </p-steps>\n\n    <div *ngSwitchCase=\"PageNames.TimePage\">\n\n      <p-schedule [events]=\"events\" [header]=\"headerConfig\" styleClass=\"calendar\" defaultView=\"agendaWeek\"\n                  [editable]=\"true\" [nowIndicator]=\"true\"\n                  [allDaySlot]=\"false\">\n\n      </p-schedule>\n\n    </div>\n    <div *ngSwitchCase=\"PageNames.ProjectPage\">\n\n      <p-tree [value]=\"projectsTree\" layout=\"horizontal\" selectionMode=\"single\"\n              [(selection)]=\"selectedProject\"></p-tree>\n\n    </div>\n    <div *ngSwitchCase=\"PageNames.PlacePage\">\n\n      <p-gmap [options]=\"mapOptions\" [overlays]=\"mapOverlays\" styleClass=\"gmap\"\n              (onOverlayClick)=\"onMarkerClick($event)\"></p-gmap>\n\n    </div>\n    <div *ngSwitchCase=\"PageNames.PeoplePage\">\n\n      <p-dataGrid [value]=\"people\" [paginator]=\"true\" [rows]=\"4\">\n        <ng-template let-person pTemplate=\"item\">\n          <p-panel header=\"{{person.firstName}} {{person.lastName}}\" class=\"ui-g-12 ui-md-3\">\n            <img [src]=\"person.avatar\" [pTooltip]=\"person.email\" tooltipPosition=\"bottom\"/>\n          </p-panel>\n        </ng-template>\n      </p-dataGrid>\n\n    </div>\n  </div>\n\n\n  <p-footer>\n    <button pButton label=\"Save\" icon=\"fa-check\" (click)=\"saveNewEntry()\"></button>\n    <button pButton label=\"Cancel\" icon=\"fa-times\" (click)=\"cancelDialog()\" class=\"ui-button-secondary\"></button>\n  </p-footer>\n\n</p-dialog>\n\n\n<p-confirmDialog icon=\"fa fa-question-circle\" width=\"425\" [visible]=\"false\" #confirmDialog>\n\n  <p-footer>\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"No, go back\" (click)=\"confirmDialog.reject()\"></button>\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes, lose changes\"\n            (click)=\"confirmDialog.accept() && confirmDialog.hide()\"></button>\n  </p-footer>\n\n\n</p-confirmDialog>\n\n<p-growl [value]=\"messages\"></p-growl>\n"

/***/ }),

/***/ "../../../../../src/app/timesheet/timesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_timesheet_sample_projects_data__ = __webpack_require__("../../../../../src/app/timesheet/sample.projects.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_timesheet_sample_people_data__ = __webpack_require__("../../../../../src/app/timesheet/sample.people.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNames;
(function (PageNames) {
    PageNames[PageNames["TimePage"] = 0] = "TimePage";
    PageNames[PageNames["ProjectPage"] = 1] = "ProjectPage";
    PageNames[PageNames["PlacePage"] = 2] = "PlacePage";
    PageNames[PageNames["PeoplePage"] = 3] = "PeoplePage";
})(PageNames || (PageNames = {}));
var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(confirmationService) {
        this.confirmationService = confirmationService;
        this.userTimeData = [
            { day: "Monday", startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: "Frontend" },
            { day: "Tuesday", startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: "Backend" },
            { day: "Wednesday", startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: "Operations" },
            { day: "Thursday", startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: "Planning" },
            { day: "Friday", startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: "Requirements" },
        ];
        this.daysOfWeek = [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ];
        this.displayEditDialog = false;
        this.PageNames = PageNames;
        this.dialogPageIndex = PageNames.TimePage;
        this.dialogPages = [
            { label: "Time" },
            { label: "Project" },
            { label: "Place" },
            { label: "People" }
        ];
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.events = [
            {
                title: 'Recent Work',
                start: moment().format(),
                end: moment().add(1, "hour").format()
            }
        ];
        this.projectsTree = __WEBPACK_IMPORTED_MODULE_2_app_timesheet_sample_projects_data__["a" /* SampleProjectsData */].projects;
        this.mapOptions = {
            center: { lat: -33.8688, lng: 151.2093 },
            zoom: 5
        };
        this.mapOverlays = [
            new google.maps.Marker({ position: { lat: -35.3075, lng: 149.124417 }, title: "Canberra Office" }),
            new google.maps.Marker({ position: { lat: -33.8688, lng: 151.2093 }, title: "Sydney Office" }),
            new google.maps.Marker({ position: { lat: -37.813611, lng: 144.963056 }, title: "Melbourne Office" }),
            new google.maps.Marker({ position: { lat: -28.016667, lng: 153.4 }, title: "Gold Coast Office" })
        ];
        this.people = __WEBPACK_IMPORTED_MODULE_3_app_timesheet_sample_people_data__["a" /* SamplePeopleData */].people;
        this.messages = [];
        this.day = "Monday";
        this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
    }
    TimesheetComponent.prototype.getTimesForDay = function (tabName) {
        return this.userTimeData.filter(function (row) {
            return row.day == tabName;
        });
    };
    TimesheetComponent.prototype.onChangeTabs = function (event) {
        var index = event.index;
        this.day = this.daysOfWeek[index];
        this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
    };
    TimesheetComponent.prototype.cancelDialog = function () {
        var _this = this;
        this.confirmationService.confirm({
            header: 'Cancel Time Creation',
            message: 'Cancel all changes. Are you sure?',
            accept: function () {
                _this.displayEditDialog = false;
                _this.messages.push({ severity: 'info', summary: 'Edits Cancelled', detail: 'No changes were saved' });
            },
            reject: function () {
                _this.messages.push({ severity: 'warn', summary: 'Cancelled the Cancel', detail: 'Please continue your editing' });
                console.log("False cancel. Just keep editing.");
            }
        });
    };
    TimesheetComponent.prototype.onMarkerClick = function (markerEvent) {
        var markerTitle = markerEvent.overlay.title;
        var markerPosition = markerEvent.overlay.position;
        alert("You clicked on " + markerTitle + " at " + markerPosition);
        markerEvent.map.panTo(markerPosition);
        markerEvent.map.setZoom(12);
    };
    TimesheetComponent.prototype.saveNewEntry = function () {
        this.displayEditDialog = false;
        this.messages.push({ severity: 'success', summary: 'Entry Created', detail: 'Your entry has been created' });
    };
    TimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'at-timesheet',
            template: __webpack_require__("../../../../../src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timesheet/timesheet.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _a || Object])
    ], TimesheetComponent);
    return TimesheetComponent;
    var _a;
}());

//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/timesheet.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/saimuralikrishnasriadibhatla/Desktop/assignment1/agiletimes/pluralsight-primeng/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map