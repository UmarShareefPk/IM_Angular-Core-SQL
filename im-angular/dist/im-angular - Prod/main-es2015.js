(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\umar\Desktop\Learning\IM\IM_Angular-Core-SQL\im-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "618R":
/*!******************************************************************!*\
  !*** ./src/app/assignee-dropdown/assignee-dropdown.component.ts ***!
  \******************************************************************/
/*! exports provided: AssigneeDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigneeDropdownComponent", function() { return AssigneeDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AssigneeDropdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssigneeDropdownComponent_ng_container_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const assignee_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.assigneeSelected(assignee_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const assignee_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.common.getUserNameById(assignee_r1.Id), " ");
} }
class AssigneeDropdownComponent {
    constructor(common) {
        this.common = common;
        this.selectedAssignee = "";
        this.width = "w-100";
        this.assigneeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allAssignees = [];
        this.assingeeList = [];
    }
    ngOnInit() {
        this.allAssignees = this.common.getAllUsers();
        this.assingeeList = this.allAssignees;
    }
    assigneeSelected(id) {
        this.selectedAssignee = id;
        this.assigneeChanged.emit(id);
    }
    assigneeSearch(event) {
        let search = event.target.value;
        let newList = [];
        if (search !== "") {
            newList = this.allAssignees.filter((assignee) => {
                return (assignee.FirstName.toUpperCase().startsWith(search.toUpperCase())
                    ||
                        assignee.LastName.toUpperCase().startsWith(search.toUpperCase()));
            });
        }
        if (newList !== undefined && newList.length !== 0) {
            //check if there is atlease one assignee
            newList = newList.concat([]);
        }
        else {
            //if search found nothing, show all assignees
            newList = this.allAssignees.slice();
        }
        this.assingeeList = newList;
    }
}
AssigneeDropdownComponent.ɵfac = function AssigneeDropdownComponent_Factory(t) { return new (t || AssigneeDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
AssigneeDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssigneeDropdownComponent, selectors: [["app-assignee-dropdown"]], inputs: { selectedAssignee: "selectedAssignee", width: "width" }, outputs: { assigneeChanged: "assigneeChanged" }, decls: 7, vars: 4, consts: [[1, "btn-group"], ["type", "text", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", "readonly", "", 1, "dropdown-toggle", "dropdown-custom", "w-100", 3, "value"], [1, "dropdown-menu", "justify-content-center", "w-100"], [1, "dropdown-item", "w-100"], ["type", "text", "placeholder", "Search", 1, "input-text", "w-100", 3, "input"], [1, "assignee-list", "scrollbar"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", "text-primary", 3, "click"]], template: function AssigneeDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AssigneeDropdownComponent_Template_input_input_4_listener($event) { return ctx.assigneeSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssigneeDropdownComponent_ng_container_6_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.common.getUserNameById(ctx.selectedAssignee));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assingeeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".assignee-list[_ngcontent-%COMP%]{\r\n  max-height:50vh;\r\n  overflow-y:auto;\r\n}\r\n\r\n.dropdown-item.text-primary[_ngcontent-%COMP%]{\r\n  cursor:pointer;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 10px 20px;\r\n}\r\n\r\n.dropdown-custom[_ngcontent-%COMP%]{\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n}\r\n\r\n.input-text[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n}\r\n\r\n.input-text[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbmVlLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFDQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJhc3NpZ25lZS1kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzc2lnbmVlLWxpc3R7XHJcbiAgbWF4LWhlaWdodDo1MHZoO1xyXG4gIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0udGV4dC1wcmltYXJ5e1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbXtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jdXN0b217XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWU5ZTllO1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dCwgdGV4dGFyZWEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1cyAsIHRleHRhcmVhOmZvY3Vze1xyXG4gb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "7Dyp":
/*!*******************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/kpi/kpi.component.ts ***!
  \*******************************************************************/
/*! exports provided: KpiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpiComponent", function() { return KpiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class KpiComponent {
    constructor() {
        this.text = "";
        this.value = 0;
        this.kpiClass = "";
    }
    ngOnInit() {
        switch (this.text.toLowerCase()) {
            case 'new':
                this.kpiClass = 'kpi status-new-bg-color';
                break;
            case 'inprogress':
                this.kpiClass = 'kpi status-inprogress-bg-color';
                break;
            case 'closed':
                this.kpiClass = 'kpi status-closed-bg-color';
                break;
            case 'approved':
                this.kpiClass = 'kpi status-approved-bg-color';
                break;
            case 'late':
                this.kpiClass = 'kpi status-late-bg-color';
                break;
            default:
                this.kpiClass = 'kpi';
                break;
        }
    }
}
KpiComponent.ɵfac = function KpiComponent_Factory(t) { return new (t || KpiComponent)(); };
KpiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KpiComponent, selectors: [["app-kpi"]], inputs: { text: "text", value: "value" }, decls: 6, vars: 4, consts: [[1, "kpi-value"], [1, "kpi-text"]], template: function KpiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.kpiClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".kpi[_ngcontent-%COMP%]{\r\n\r\n  padding-right: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: #1A237E;\r\n  padding: 25px 10px;\r\n  border-radius: 30px;\r\n  color: white;\r\n\r\n  }\r\n\r\n  \r\n\r\n  @media (min-width: 300px) {\r\n  .kpi[_ngcontent-%COMP%]{\r\n  padding: 10px 0px;\r\n  margin-bottom: 20px;\r\n  }\r\n  }\r\n\r\n  \r\n\r\n  @media (min-width: 700px) {\r\n\r\n  }\r\n\r\n  \r\n\r\n  @media (min-width: 1000px) {\r\n  .kpi[_ngcontent-%COMP%]{\r\n  padding: 25px 10px;\r\n  margin-bottom: 0px;\r\n  }\r\n\r\n  .kpi-value[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  margin-bottom: 5px;\r\n  }\r\n  .kpi-text[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n\r\n  }\r\n  }\r\n\r\n  \r\n\r\n  @media (min-width: 1500px) {\r\n  .kpi[_ngcontent-%COMP%]{\r\n  padding: 25px 10px;\r\n  margin-bottom: 0px;\r\n  }\r\n\r\n  .kpi-value[_ngcontent-%COMP%]{\r\n\r\n  font-size: 25px;\r\n  margin-bottom: 5px;\r\n  }\r\n  .kpi-text[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7O0VBRVo7O0VBRUEsbUJBQW1COztFQUNyQjtFQUNFO0VBQ0EsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtFQUNBOztFQUVBLDRCQUE0Qjs7RUFDNUI7O0VBRUE7O0VBRUEsbUJBQW1COztFQUNuQjtFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQjs7RUFFQTtFQUNBLGVBQWU7RUFDZixrQkFBa0I7RUFDbEI7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQixlQUFlOztFQUVmO0VBQ0E7O0VBRUEsYUFBYTs7RUFDYjtFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQjs7RUFFQTs7RUFFQSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCO0VBQ0E7RUFDQSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmO0VBQ0EiLCJmaWxlIjoia3BpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmtwaXtcclxuXHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMjM3RTtcclxuICBwYWRkaW5nOiAyNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIH1cclxuXHJcbiAgLyogU21hbGwgZGV2aWNlcyAgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgLmtwaXtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIC8qICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyogTGFyZ2UgVGFibGV0cyAgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmtwaXtcclxuICBwYWRkaW5nOiAyNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmtwaS12YWx1ZXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAua3BpLXRleHR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICB9XHJcbiAgfVxyXG5cclxuICAvKiBDb21wdXRlciAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAua3Bpe1xyXG4gIHBhZGRpbmc6IDI1cHggMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAua3BpLXZhbHVle1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAua3BpLXRleHR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "8mL0":
/*!*******************************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/dashboard/dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _kpibar_kpibar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kpibar/kpibar.component */ "nJLZ");
/* harmony import */ var _overall_widget_overall_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overall-widget/overall-widget.component */ "frdc");
/* harmony import */ var _last5_last5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../last5/last5.component */ "Rihz");
/* harmony import */ var _most_assigned_to_users_most_assigned_to_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../most-assigned-to-users/most-assigned-to-users.component */ "HCQY");
/* harmony import */ var _oldest_open_oldest_open_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../oldest-open/oldest-open.component */ "QoVd");






class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "row", "heading"], [1, "col", "col-sm-12"], [1, "site-cl", "heading"], [1, "row"], [1, "col-lg-6", "col-md-12", "col-sm-12"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-kpibar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-overall-widget", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-last5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-most-assigned-to-users", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-oldest-open", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kpibar_kpibar_component__WEBPACK_IMPORTED_MODULE_1__["KpibarComponent"], _overall_widget_overall_widget_component__WEBPACK_IMPORTED_MODULE_2__["OverallWidgetComponent"], _last5_last5_component__WEBPACK_IMPORTED_MODULE_3__["Last5Component"], _most_assigned_to_users_most_assigned_to_users_component__WEBPACK_IMPORTED_MODULE_4__["MostAssignedToUsersComponent"], _oldest_open_oldest_open_component__WEBPACK_IMPORTED_MODULE_5__["OldestOpenComponent"]], styles: [".heading[_ngcontent-%COMP%]{\r\n  padding: 10px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HCQY":
/*!*********************************************************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/most-assigned-to-users/most-assigned-to-users.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MostAssignedToUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostAssignedToUsersComponent", function() { return MostAssignedToUsersComponent; });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dashboard-service.service */ "tC6X");




class MostAssignedToUsersComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.dashboardService.getMostAssignedToUsersData().subscribe((m) => {
            this.mostAssignedIncidentsData = [
                { name: m[0].Name, y: parseInt(m[0].Count), color: '#B71C1C' },
                { name: m[1].Name, y: parseInt(m[1].Count), color: '#E53935' },
                { name: m[2].Name, y: parseInt(m[2].Count), color: '#EF5350' },
                { name: m[3].Name, y: parseInt(m[3].Count), color: '#E57373' },
                { name: m[4].Name, y: parseInt(m[4].Count), color: '#FFCDD2' }
            ];
            this.drawChart();
        });
    }
    drawChart() {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["Chart"]({
            chart: {
                type: 'bar',
                height: (70) + '%',
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            xAxis: {
                type: 'category',
                min: 0,
                labels: {
                //animate: true
                }
            },
            series: [{
                    name: '',
                    type: 'bar',
                    dataSorting: {
                        enabled: true,
                        sortKey: 'y'
                    },
                    data: this.mostAssignedIncidentsData
                }]
        });
    }
}
MostAssignedToUsersComponent.ɵfac = function MostAssignedToUsersComponent_Factory(t) { return new (t || MostAssignedToUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_2__["DashboardServiceService"])); };
MostAssignedToUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MostAssignedToUsersComponent, selectors: [["app-most-assigned-to-users"]], decls: 4, vars: 1, consts: [[1, "widget"], [1, "text-center"], [3, "chart"]], template: function MostAssignedToUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Most Assigned To Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.chart);
    } }, directives: [angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["ChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0LWFzc2lnbmVkLXRvLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.service */ "OlR4");






class NotificationService {
    constructor(http, api, common) {
        this.http = http;
        this.api = api;
        this.common = common;
    }
    getAllNotifications() {
        let url = this.api.allNotificationsUrl + "?userId=" + this.common.getLoggedInUser();
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => {
            return m;
        }));
    }
    setNotificationStatus(id, isRead) {
        let url = this.api.setNotificationStatusUrl + "?notificationId=" + id + "&isRead=" + isRead;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => {
            return m;
        }));
    }
    incidentUpdatedSignalR(incidentId) {
        const connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(this.api.baseUrl + 'hubs/notifications')
            .withAutomaticReconnect()
            .withHubProtocol(new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["JsonHubProtocol"]())
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
        connection.start().then(() => {
            console.log(connection.connectionStarted);
            if (connection.connectionStarted) {
                try {
                    connection.send("SendIncidentUpdate", incidentId, this.common.getLoggedInUser());
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                alert("No connection to server yet.");
            }
        });
    }
    ;
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_4__["Apis"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonService {
    constructor() { }
    getUserNameById(id) {
        let allUsers = JSON.parse(localStorage.getItem("allUsers") || '{}');
        let user = allUsers.find((user) => {
            return user.Id === id;
        });
        if (!user)
            return id;
        return user.FirstName + " " + user.LastName;
    }
    getAllUsers() {
        return JSON.parse(localStorage.getItem("allUsers") || '{}');
    }
    getLoggedInUser() {
        let loginInfo = JSON.parse(localStorage.getItem("user") || '{}');
        return loginInfo.user.Id;
    }
    statusName(status) {
        switch (status) {
            case "N":
                return "New";
            case "C":
                return "Closed";
            case "A":
                return "Approved";
            case "I":
                return "In Progress";
            default:
                return status;
        }
    }
    getMoment(datetime) {
        let myMoment = moment__WEBPACK_IMPORTED_MODULE_0__(datetime);
        return myMoment;
    }
    auto_grow(event) {
        // for textareas
        let element = event.target;
        element.style.height = '5px';
        element.style.height = element.scrollHeight + 'px';
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QoVd":
/*!***********************************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/oldest-open/oldest-open.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OldestOpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldestOpenComponent", function() { return OldestOpenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard-service.service */ "tC6X");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function OldestOpenComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OldestOpenComponent_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const incident_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.titleClick(incident_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incident_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.commonService.getMoment(incident_r1.CreatedAT).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.commonService.getMoment(incident_r1.CreatedAT).fromNow(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.commonService.statusName(incident_r1.Status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", incident_r1.Title, " ");
} }
class OldestOpenComponent {
    constructor(dashboardService, commonService, router) {
        this.dashboardService = dashboardService;
        this.commonService = commonService;
        this.router = router;
        this.incidents = [];
    }
    ngOnInit() {
        this.loadIncidents();
    }
    loadIncidents() {
        this.dashboardService.getOldest5UnresolvedData().subscribe((m) => {
            this.incidents = m;
            console.log(m);
        });
    }
    titleClick(id) {
        this.router.navigate(['/incidentDetails', id]);
    }
}
OldestOpenComponent.ɵfac = function OldestOpenComponent_Factory(t) { return new (t || OldestOpenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__["DashboardServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
OldestOpenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OldestOpenComponent, selectors: [["app-oldest-open"]], decls: 4, vars: 1, consts: [[1, "widget"], ["class", "incident", 4, "ngFor", "ngForOf"], [1, "incident"], [1, "time-status"], [1, "timestamp", 3, "title"], [1, "status"], [1, "title"], [3, "click"]], template: function OldestOpenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 5 Oldest Unresolved Incidents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OldestOpenComponent_div_3_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incidents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbGRlc3Qtb3Blbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Rihz":
/*!***********************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/last5/last5.component.ts ***!
  \***********************************************************************/
/*! exports provided: Last5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last5Component", function() { return Last5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard-service.service */ "tC6X");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Last5Component_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Last5Component_div_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const incident_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.titleClick(incident_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incident_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.commonService.getMoment(incident_r1.CreatedAT).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.commonService.getMoment(incident_r1.CreatedAT).fromNow(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.commonService.statusName(incident_r1.Status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", incident_r1.Title, " ");
} }
class Last5Component {
    constructor(dashboardService, commonService, router) {
        this.dashboardService = dashboardService;
        this.commonService = commonService;
        this.router = router;
        this.incidents = [];
    }
    ngOnInit() {
        this.loadIncidents();
    }
    loadIncidents() {
        this.dashboardService.getLast5Data().subscribe((m) => {
            this.incidents = m;
            console.log(m);
        });
    }
    titleClick(id) {
        this.router.navigate(['/incidentDetails', id]);
    }
}
Last5Component.ɵfac = function Last5Component_Factory(t) { return new (t || Last5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__["DashboardServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Last5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Last5Component, selectors: [["app-last5"]], decls: 4, vars: 1, consts: [[1, "widget"], ["class", "incident", 4, "ngFor", "ngForOf"], [1, "incident"], [1, "time-status"], [1, "timestamp", 3, "title"], [1, "status"], [1, "title"], [3, "click"]], template: function Last5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Last 5 Incidents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Last5Component_div_3_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incidents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXN0NS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");






function AppComponent_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
} }
class AppComponent {
    constructor(document, r, route, router, auth) {
        this.r = r;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.isloggedIn = false;
    }
    ngOnInit() {
        this.auth.userLoggedInObs.subscribe((m) => {
            this.isloggedIn = m;
            if (!m)
                this.router.navigate(['/login']);
        }); // know as soon as login state is changed
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isloggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VLdw":
/*!*********************************************************************************!*\
  !*** ./src/app/incidentComponents/incidentDetails/comment/comment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/incident.service */ "fwxc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function CommentComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentComponent_div_11_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.commentEditText = $event; })("input", function CommentComponent_div_11_Template_textarea_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.common.auto_grow($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_11_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.commentEditClick(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_11_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.commentEditSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.commentEditText);
} }
function CommentComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_tr_15_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const file_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteFile(file_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_tr_15_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const file_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.downloadFile(file_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r7.FileName, " ");
} }
class CommentComponent {
    constructor(common, incidentService) {
        this.common = common;
        this.incidentService = incidentService;
        this.comment = {};
        this.commentText = "";
        this.commentEditText = "";
        this.commentEdit = false;
        this.commentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.commentText = this.commentEditText = this.comment.CommentText;
    }
    commentEditClick(show) {
        if (show)
            this.commentEdit = true;
        else
            this.commentEdit = false;
    }
    commentEditSave() {
        this.commentEditText = this.commentEditText.trim();
        if (this.commentEditText === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Comment text cannot be empty");
            return;
        }
        let changedComment = {
            Id: this.comment.Id,
            IncidentId: this.comment.IncidentId,
            UserId: this.common.getLoggedInUser(),
            CreateDate: new Date(),
            CommentText: this.commentEditText,
            attachments: []
        };
        this.incidentService.updateComment(changedComment).subscribe((m) => {
            this.commentText = this.commentEditText;
            this.commentEdit = false;
            this.commentChanged.emit(changedComment);
        }, (err) => console.log(err));
    }
    downloadFile(file) {
        this.incidentService.downloadFile("comment", this.comment.Id, this.comment.IncidentId, file);
    }
    deleteFile(file) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a
            .fire({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this file.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.incidentService
                    .deleteAttachment('comment', this.comment.Id, this.comment.IncidentId, this.common.getLoggedInUser(), file)
                    .subscribe((m) => {
                    let attachments = [...this.comment.attachments];
                    this.comment.attachments = attachments.filter((cfile) => cfile.Id !== file.Id);
                }, (err) => console.log(err));
            }
        });
    }
    deleteComment() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a
            .fire({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this comment.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.incidentService
                    .deleteComment(this.comment.Id, this.comment.IncidentId, this.common.getLoggedInUser())
                    .subscribe((m) => {
                    console.log('m', m);
                    this.commentDeleted.emit(this.comment.Id);
                }, (err) => console.log(err));
            }
        });
    }
} // end of class
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment" }, outputs: { commentChanged: "commentChanged", commentDeleted: "commentDeleted" }, decls: 17, vars: 6, consts: [[1, "commentBox"], [1, "commentHeader", "d-flex"], [1, "w-75"], [1, "text-primary"], [3, "title"], [1, "w-25", "d-flex", "justify-content-end"], [1, "fas", "fa-edit", "text-primary", 3, "click"], ["title", "Delete", 1, "fas", "fa-times-circle", "text-danger", 3, "click"], ["class", "", 4, "ngIf"], [1, "text-muted", "field", "scrollbar", "text-center"], [1, "table"], [4, "ngFor", "ngForOf"], [1, ""], [1, "scrollbar", 3, "ngModel", "ngModelChange", "input"], [1, "w-100", "text-right", "fields-update-icon"], ["title", "Cancel", 1, "fas", "fa-times-circle", "text-warning", 3, "click"], ["title", "Save", 1, "fas", "fa-check", "text-success", 3, "click"], ["title", "Remove", 1, "fas", "fa-times-circle", "text-danger", 3, "click"], [1, "text-primary", "comment-file", 3, "click"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " added a comment. - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_i_click_9_listener() { return ctx.commentEditClick(!ctx.commentEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_i_click_10_listener() { return ctx.deleteComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentComponent_div_11_Template, 6, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CommentComponent_tr_15_Template, 5, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.common.getUserNameById(ctx.comment.UserId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.common.getMoment(ctx.comment.CreateDate).format("MMMM DD YYYY, h:mm:ss a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.common.getMoment(ctx.comment.CreateDate).fromNow());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commentText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comment.attachments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".commentHeader[_ngcontent-%COMP%]{\r\n  padding-bottom: 20px;\r\n  }\r\n\r\n  .comment-buttons[_ngcontent-%COMP%]{\r\n     margin-top: 1vh;\r\n  }\r\n\r\n  .input-text[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #9e9e9e;\r\n }\r\n\r\n  .input-text[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n   outline: none;\r\n }\r\n\r\n  textarea[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  resize: none;\r\n  overflow: hidden;\r\n  min-height: 40px;\r\n  max-height: 100px;\r\n}\r\n\r\n  .field[_ngcontent-%COMP%]{\r\n  max-height: 25vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .comment-file[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  a.comment-file[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQjs7RUFFQTtLQUNHLGVBQWU7RUFDbEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0NBQWdDO0NBQ25DOztFQUNBO0dBQ0UsYUFBYTtDQUNmOztFQUNBO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZCIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudEhlYWRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb21tZW50LWJ1dHRvbnN7XHJcbiAgICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIH1cclxuICAuaW5wdXQtdGV4dCwgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTllOWU7XHJcbiB9XHJcbiAuaW5wdXQtdGV4dDpmb2N1cyAsIHRleHRhcmVhOmZvY3Vze1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gfVxyXG4gdGV4dGFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmZpZWxke1xyXG4gIG1heC1oZWlnaHQ6IDI1dmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbW1lbnQtZmlsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYS5jb21tZW50LWZpbGU6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Apis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apis", function() { return Apis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Apis {
    constructor() {
        //baseUrl : string = "https://localhost:44310/";
        this.baseUrl = "http://im/IMCore/";
        this.authenticateUrl = this.baseUrl + "api/Users/authenticate";
        this.allUsersUrl = this.baseUrl + "api/users/AllUsers";
        this.userssWithPageUrl = this.baseUrl + "api/Users/GetUsersWithPage?";
        this.addNewUserUrl = this.baseUrl + "api/Users/AddUser";
        this.updateHubIdUrl = this.baseUrl + "api/Users/UpdateHubId";
        this.allNotificationsUrl = this.baseUrl + "api/Users/UserNotifications";
        this.setNotificationStatusUrl = this.baseUrl + "api/Users/UpdateIsRead";
        this.incidentsWithPageUrl = this.baseUrl + "api/Incidents/GetIncidentsWithPage?";
        this.addNewIncidentUrl = this.baseUrl + "api/Incidents/AddIncident";
        this.addNewCommentUrl = this.baseUrl + "api/Incidents/AddComment";
        this.deleteCommentUrl = this.baseUrl + "api/Incidents/DeleteComment?";
        this.updateIncidentUrl = this.baseUrl + "api/Incidents/UpdateIncident";
        this.updateCommentUrl = this.baseUrl + "api/Incidents/UpdateComment";
        this.getIncidentByIdUrl = this.baseUrl + "api/Incidents/IncidentById?Id=";
        this.deleteAttachmentUrl = this.baseUrl + "api/Incidents/DeleteFile?";
        this.downloadFileUrl = this.baseUrl + "api/Incidents/DownloadFile?";
        this.kpiUrl = this.baseUrl + "api/Incidents/KPI?userId=";
        this.overallWidgetUrl = this.baseUrl + "api/Incidents/OverallWidget";
        this.last5IncidentsUrl = this.baseUrl + "api/Incidents/Last5Incidents";
        this.oldest5UnresolvedIncidentsUrl = this.baseUrl + "api/Incidents/Oldest5UnresolvedIncidents?";
        this.mostAssignedToUsersIncidentsUrl = this.baseUrl + "api/Incidents/MostAssignedToUsersIncidents";
    }
}
Apis.ɵfac = function Apis_Factory(t) { return new (t || Apis)(); };
Apis.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Apis, factory: Apis.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WENG":
/*!*****************************************************************************************!*\
  !*** ./src/app/incidentComponents/incidentDetails/add-comment/add-comment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/incident.service */ "fwxc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AddCommentComponent {
    constructor(common, incidentService) {
        this.common = common;
        this.incidentService = incidentService;
        this.incidentId = "";
        this.commentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = "";
        this.files = [];
        this.filesText = "Upload files";
    }
    ngOnInit() {
    }
    fileChange(event) {
        this.files = event.target.files;
        this.filesText = this.files.length + ' file selected.';
    }
    saveComment() {
        this.comment = this.comment.trim();
        if (this.comment === "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Comment cannot be empty.");
            return;
        }
        const formData = new FormData();
        if (this.files[0]) {
            for (let i = 0; i < this.files.length; i++) {
                formData.append("Attachment" + i + 1, this.files[i], this.files[i].name);
            }
        }
        formData.append("CommentText", this.comment.trim());
        formData.append("IncidentId", this.incidentId);
        formData.append("UserId", this.common.getLoggedInUser());
        this.incidentService.addNewComment(formData).subscribe((m) => {
            console.log(m);
            this.commentAdded.emit(m);
            this.comment = "";
            this.files = [];
            this.filesText = "Upload files";
        }, (err) => console.log(err));
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"])); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], inputs: { incidentId: "incidentId" }, outputs: { commentAdded: "commentAdded" }, decls: 14, vars: 2, consts: [[1, "input-field"], ["placeholder", "Type a comment here", 1, "", 3, "ngModel", "ngModelChange", "input"], [1, "custom-file", "upload-container"], [1, "btn", "bg-primary", "text-white"], [1, "fas", "fa-paperclip"], ["id", "commentFiles", "type", "file", "multiple", "", 1, "file", 3, "change"], ["type", "text", "id", "filestxt", "value", "Upload Files", "readonly", "", 1, "txt", "w-75", "text-muted", 3, "value"], [1, "comment-buttons", "text-center"], [1, "btn", "text-white", "bg-success", 3, "click"], [1, "fas", "fa-check"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCommentComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.comment = $event; })("input", function AddCommentComponent_Template_textarea_input_3_listener($event) { return ctx.common.auto_grow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCommentComponent_Template_input_change_7_listener($event) { return ctx.fileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCommentComponent_Template_button_click_10_listener() { return ctx.saveComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.filesText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".input-text[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n}\r\n.input-text[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n outline: none;\r\n}\r\ntextarea[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  resize: none;\r\n  overflow: hidden;\r\n  min-height: 40px;\r\n  max-height: 100px;\r\n}\r\n.comment-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin: 5px;\r\n}\r\n.custom-file.upload-container[_ngcontent-%COMP%] {\r\n   position: relative;\r\n}\r\n.custom-file.upload-container[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\r\n   position: absolute;\r\n   top: 5px;\r\n   left: 0;\r\n   opacity: 0;\r\n}\r\n.custom-file.upload-container[_ngcontent-%COMP%]   .fa-paperclip[_ngcontent-%COMP%] {\r\n   font-size: x-large;\r\n}\r\n.custom-file.upload-container[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n.custom-file.upload-container[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]:focus {\r\n   outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFHQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLFFBQVE7R0FDUixPQUFPO0dBQ1AsVUFBVTtBQUNiO0FBRUE7R0FDRyxrQkFBa0I7QUFDckI7QUFFQTtHQUNHLFlBQVk7R0FDWixnQ0FBZ0M7QUFDbkM7QUFFQTtHQUNHLGFBQWE7QUFDaEIiLCJmaWxlIjoiYWRkLWNvbW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5wdXQtdGV4dCwgdGV4dGFyZWEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1cyAsIHRleHRhcmVhOmZvY3Vze1xyXG4gb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNvbW1lbnQtYnV0dG9ucyBidXR0b257XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLnVwbG9hZC1jb250YWluZXIgLmZpbGUge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRvcDogNXB4O1xyXG4gICBsZWZ0OiAwO1xyXG4gICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lciAuZmEtcGFwZXJjbGlwIHtcclxuICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lciAudHh0IHtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLnVwbG9hZC1jb250YWluZXIgLnR4dDpmb2N1cyB7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "YFCe":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UnauthorizedComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['/login']);
    }
}
UnauthorizedComponent.ɵfac = function UnauthorizedComponent_Factory(t) { return new (t || UnauthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UnauthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "center"], [1, "loginback-message"], [1, "link", 3, "click"]], template: function UnauthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your session is not active. Please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnauthorizedComponent_Template_a_click_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " click here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " to login. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loginback-message[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.loginback-message[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuYXV0aG9yaXplZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJ1bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbmJhY2stbWVzc2FnZXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5iYWNrLW1lc3NhZ2UgLmxpbmt7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _incidentComponents_incident_listing_incident_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incidentComponents/incident-listing/incident-listing.component */ "wZZm");
/* harmony import */ var _incidentComponents_incidentDetails_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incidentComponents/incidentDetails/incident-details/incident-details.component */ "uhSi");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/incident.service */ "fwxc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/interceptors/http-interceptor.service */ "rKWZ");
/* harmony import */ var _services_interceptors_http_error_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/interceptors/http-error-interceptor.service */ "pVlr");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagination/pagination.component */ "hQTH");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config */ "Vx+w");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/common.service */ "OlR4");
/* harmony import */ var _incidentComponents_incidentDetails_comment_comment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./incidentComponents/incidentDetails/comment/comment.component */ "VLdw");
/* harmony import */ var _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assignee-dropdown/assignee-dropdown.component */ "618R");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var _incidentComponents_incidentDetails_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./incidentComponents/incidentDetails/add-comment/add-comment.component */ "WENG");
/* harmony import */ var _incidentComponents_new_incident_new_incident_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./incidentComponents/new-incident/new-incident.component */ "urVl");
/* harmony import */ var _userComponents_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userComponents/user-listing/user-listing.component */ "oa4V");
/* harmony import */ var _userComponents_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userComponents/new-user/new-user.component */ "jipy");
/* harmony import */ var _incidentComponents_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./incidentComponents/dashboard/dashboard/dashboard.component */ "8mL0");
/* harmony import */ var _incidentComponents_dashboard_kpibar_kpibar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./incidentComponents/dashboard/kpibar/kpibar.component */ "nJLZ");
/* harmony import */ var _incidentComponents_dashboard_last5_last5_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./incidentComponents/dashboard/last5/last5.component */ "Rihz");
/* harmony import */ var _incidentComponents_dashboard_oldest_open_oldest_open_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./incidentComponents/dashboard/oldest-open/oldest-open.component */ "QoVd");
/* harmony import */ var _incidentComponents_dashboard_overall_widget_overall_widget_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./incidentComponents/dashboard/overall-widget/overall-widget.component */ "frdc");
/* harmony import */ var _incidentComponents_dashboard_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./incidentComponents/dashboard/kpi/kpi.component */ "7Dyp");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _incidentComponents_dashboard_most_assigned_to_users_most_assigned_to_users_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./incidentComponents/dashboard/most-assigned-to-users/most-assigned-to-users.component */ "HCQY");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "YFCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");



































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _services_incident_service__WEBPACK_IMPORTED_MODULE_9__["IncidentService"],
        _config__WEBPACK_IMPORTED_MODULE_15__["Apis"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_16__["CommonService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["HttpInterceptorService"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptors_http_error_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpErrorInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlNativeDateTimeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_31__["ChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _incidentComponents_incident_listing_incident_listing_component__WEBPACK_IMPORTED_MODULE_5__["IncidentListingComponent"],
        _incidentComponents_incidentDetails_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_6__["IncidentDetailsComponent"],
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"],
        _incidentComponents_incidentDetails_comment_comment_component__WEBPACK_IMPORTED_MODULE_17__["CommentComponent"],
        _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["AssigneeDropdownComponent"],
        _incidentComponents_incidentDetails_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_21__["AddCommentComponent"],
        _incidentComponents_new_incident_new_incident_component__WEBPACK_IMPORTED_MODULE_22__["NewIncidentComponent"],
        _userComponents_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_23__["UserListingComponent"],
        _userComponents_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_24__["NewUserComponent"],
        _incidentComponents_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
        _incidentComponents_dashboard_kpibar_kpibar_component__WEBPACK_IMPORTED_MODULE_26__["KpibarComponent"],
        _incidentComponents_dashboard_last5_last5_component__WEBPACK_IMPORTED_MODULE_27__["Last5Component"],
        _incidentComponents_dashboard_oldest_open_oldest_open_component__WEBPACK_IMPORTED_MODULE_28__["OldestOpenComponent"],
        _incidentComponents_dashboard_overall_widget_overall_widget_component__WEBPACK_IMPORTED_MODULE_29__["OverallWidgetComponent"],
        _incidentComponents_dashboard_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_30__["KpiComponent"],
        _incidentComponents_dashboard_most_assigned_to_users_most_assigned_to_users_component__WEBPACK_IMPORTED_MODULE_32__["MostAssignedToUsersComponent"],
        _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_33__["UnauthorizedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlNativeDateTimeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_31__["ChartModule"]] }); })();


/***/ }),

/***/ "frdc":
/*!*****************************************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/overall-widget/overall-widget.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OverallWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallWidgetComponent", function() { return OverallWidgetComponent; });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dashboard-service.service */ "tC6X");




class OverallWidgetComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.dashboardService.getOverallWidgetData().subscribe((m) => {
            this.overallWidgetData = m;
            this.drawChart();
        });
    }
    drawChart() {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["Chart"]({
            chart: {
                type: 'pie',
                height: 70 + '%',
            },
            title: {
                text: '',
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                    },
                    showInLegend: true,
                },
            },
            series: [
                {
                    type: 'pie',
                    name: 'Share',
                    data: [
                        { name: 'New', y: this.overallWidgetData.New, color: '#F57C00' },
                        { name: 'In Progress', y: this.overallWidgetData.InProgress, color: '#1976D2' },
                        { name: 'Closed', y: this.overallWidgetData.Closed, color: '#43A047' },
                        { name: 'Approved', y: this.overallWidgetData.Approved, color: '#1B5E20' },
                        { name: 'Late', y: this.overallWidgetData.Late, color: '#B71C1C' }
                    ],
                },
            ],
        });
    }
}
OverallWidgetComponent.ɵfac = function OverallWidgetComponent_Factory(t) { return new (t || OverallWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_2__["DashboardServiceService"])); };
OverallWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverallWidgetComponent, selectors: [["app-overall-widget"]], decls: 4, vars: 1, consts: [[1, "widget"], [1, "text-center"], [3, "chart"]], template: function OverallWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.chart);
    } }, directives: [angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["ChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVyYWxsLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fwxc":
/*!**********************************************!*\
  !*** ./src/app/services/incident.service.ts ***!
  \**********************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.service */ "OC8m");





class IncidentService {
    constructor(http, api, notificationService) {
        this.http = http;
        this.api = api;
        this.notificationService = notificationService;
    }
    getIncidentsWithPage(pageSize, pageNumber, sortBy, sortDir, search) {
        let url = this.api.incidentsWithPageUrl;
        url += 'PageSize=' + pageSize;
        url += '&PageNumber=' + pageNumber;
        url += '&SortBy=' + (sortBy ? sortBy : 'test');
        url += '&SortDirection=' + (sortDir ? sortDir : 'asc');
        url += '&Search=' + search;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    getIncidentById(id) {
        let url = this.api.getIncidentByIdUrl + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    addNewIncident(formData) {
        let url = this.api.addNewIncidentUrl;
        return this.http.post(url, formData, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            console.log(m);
            return m;
        }));
    }
    addNewComment(formData) {
        let url = this.api.addNewCommentUrl;
        return this.http.post(url, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            let comment = m;
            this.notificationService.incidentUpdatedSignalR(comment.IncidentId);
            return m;
        }));
    }
    deleteComment(commentId, incidentId, userId) {
        let url = this.api.deleteCommentUrl +
            'commentId=' +
            commentId +
            '&incidentId=' +
            incidentId +
            '&userId=' +
            userId;
        return this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            this.notificationService.incidentUpdatedSignalR(incidentId);
            return m;
        }));
    }
    updateIncident(parameters) {
        let url = this.api.updateIncidentUrl;
        return this.http.post(url, parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            this.notificationService.incidentUpdatedSignalR(parameters.IncidentId);
            return m;
        }));
    }
    updateComment(comment) {
        let url = this.api.updateCommentUrl;
        return this.http.post(url, comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            console.log(comment);
            this.notificationService.incidentUpdatedSignalR(comment.IncidentId);
            return m;
        }));
    }
    deleteAttachment(type, commentId, incidentId, userId, file) {
        let url = this.api.deleteAttachmentUrl +
            'type=' + type +
            '&commentId=' + commentId +
            '&incidentId=' + incidentId +
            '&userId=' + userId +
            '&fileId=' + file.Id +
            '&filename=' + file.FileName +
            '&contentType=' + file.ContentType;
        return this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            this.notificationService.incidentUpdatedSignalR(incidentId);
            return m;
        }));
    }
    downloadFile(type, commentId, incidentId, file) {
        let url = this.api.downloadFileUrl +
            'type=' + type +
            '&commentId=' + commentId +
            '&incidentId=' + incidentId +
            '&filename=' + file.FileName +
            '&contentType=' + file.ContentType;
        console.log(url);
        window.open(url);
    }
}
IncidentService.ɵfac = function IncidentService_Factory(t) { return new (t || IncidentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_3__["Apis"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
IncidentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IncidentService, factory: IncidentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hQTH":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PaginationComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_30_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const page_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.pageNumberClick(page_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r3 === ctx_r1.pageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r3, " ");
} }
function PaginationComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaginationComponent {
    constructor() {
        this.pageSize = 5;
        this.pages = [];
        this.pagesBeforeExists = false;
        this.pagesAfterExists = false;
        this.information = "";
        this.pageNumber = 1;
        this.pageSizeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageNumberChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        this.setPages();
        this.setInformation();
    }
    ngOnInit() { }
    setPages() {
        let totalPages = Math.ceil(this.totalRecords / this.pageSize);
        this.pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i < this.pageNumber + 4 && i > this.pageNumber - 4)
                this.pages.push(i);
        }
        this.pagesBeforeExists = this.pages[0] > 1 ? true : false;
        this.pagesAfterExists = this.pages[this.pages.length - 1] < totalPages ? true : false;
    }
    setInformation() {
        let start = 0;
        let end = 0;
        end = this.pageSize * this.pageNumber;
        start = end - this.pageSize + 1;
        if (end > this.totalRecords)
            end = this.totalRecords;
        if (start > this.totalRecords)
            start = this.totalRecords;
        this.information = `Showin from ${start} to ${end} of ${this.totalRecords} records` +
            ` (${Math.ceil(this.totalRecords / this.pageSize)} pages)`;
    }
    pageNumberClick(pageNumber, event) {
        event.preventDefault();
        this.pageNumber = pageNumber;
        this.pageNumberChanged.emit(pageNumber);
        this.setInformation();
    }
    pageSizeClick(event) {
        this.pageSize = event.target.value;
        this.pageNumber = 1;
        this.setPages();
        this.setInformation();
        this.pageSizeChanged.emit(event.target.value);
    }
    previousClick(event) {
        event.preventDefault();
        if (this.pageNumber - 1 < 1)
            return; // already on first page
        this.pageNumber = this.pageNumber - 1;
        this.pageNumberChanged.emit(this.pageNumber);
        this.setInformation();
    }
    nextClick(event) {
        event.preventDefault();
        if (this.pageNumber == this.pages[this.pages.length - 1])
            return; //already on last page
        this.pageNumber = this.pageNumber + 1;
        this.pageNumberChanged.emit(this.pageNumber);
        this.setInformation();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { pageNumber: "pageNumber", totalRecords: "totalRecords" }, outputs: { pageSizeChanged: "pageSizeChanged", pageNumberChanged: "pageNumberChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 4, consts: [[1, "row"], [1, "col-sm-12", "col-md-4"], ["id", "info", 1, "text-success", "records-info"], [1, "col-sm-12", "col-md-2"], [2, "margin-top", "5px"], ["id", "pageSizeDdl", 1, "browser-default", "dropdown-custom", 3, "change"], ["value", "5", "selected", ""], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"], ["value", "50"], ["value", "100"], [1, "col-sm-12", "col-md-6"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-end"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 4, "ngIf"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-link"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page Size :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaginationComponent_Template_select_change_8_listener($event) { return ctx.pageSizeClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_27_listener($event) { return ctx.previousClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PaginationComponent_li_29_Template, 3, 0, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PaginationComponent_li_30_Template, 3, 3, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PaginationComponent_li_31_Template, 3, 0, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_33_listener($event) { return ctx.nextClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.information);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagesBeforeExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagesAfterExists);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".records-info[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.dropdown-custom[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n\r\n}\r\n\r\nselect.dropdown-custom[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\r\n\r\nselect.dropdown-custom[_ngcontent-%COMP%]:focus {\r\n  outline:none;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:  darkblue;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\ntext-decoration: underline;\r\nbackground-color:  #003018;\r\ncolor: white;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background-color:  #003018;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDOztBQUVsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsWUFBWTtBQUNaOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZCIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJlY29yZHMtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWN1c3RvbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWU5ZTllO1xyXG5cclxufVxyXG5cclxuc2VsZWN0LmRyb3Bkb3duLWN1c3RvbSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbnNlbGVjdC5kcm9wZG93bi1jdXN0b206Zm9jdXMge1xyXG4gIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYXtcclxuICBjb2xvcjogIGRhcmtibHVlO1xyXG59XHJcbi5wYWdpbmF0aW9uIGE6aG92ZXJ7XHJcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMzAxODtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjMDAzMDE4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "jipy":
/*!***************************************************************!*\
  !*** ./src/app/userComponents/new-user/new-user.component.ts ***!
  \***************************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NewUserComponent {
    constructor(common, userService, router) {
        this.common = common;
        this.userService = userService;
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.files = [];
        this.filesText = 'Upload profile picture.';
    }
    ngOnInit() { }
    filesChange(event) {
        this.files = event.target.files;
        this.filesText = this.files.length + ' file selected.';
    }
    cancelClicked() {
        this.router.navigate(['/users']);
    }
    validate() {
        let error = '';
        this.firstName = this.firstName.trim();
        this.lastName = this.lastName.trim();
        this.email = this.email.trim();
        if (this.firstName === '')
            error = 'First Name cannot be empty.';
        else if (this.lastName === '')
            error = 'Last Name cannot be empty.';
        else if (this.email === '')
            error = 'Email cannot be empty.';
        if (error === '')
            return true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
            .fire({
            title: 'Invalid',
            text: error,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Okay',
        })
            .then((m) => { });
        return false;
    }
    saveUser() {
        if (!this.validate())
            return;
        const formData = new FormData();
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                formData.append('Attachment' + i + 1, this.files[i], this.files[i].name);
            }
        }
        formData.append("FirstName", this.firstName);
        formData.append("LastName", this.lastName);
        formData.append("Email", this.email);
        formData.append("Phone", this.phone);
        this.userService.addNewUser(formData).subscribe((m) => {
            this.finalAction();
        }, (err) => console.log(err));
    }
    finalAction() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
            .fire({
            title: 'User has been saved.',
            text: 'Do you want to add more users?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: "No"
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.router.navigate(['/newUser']);
            }
            else {
                this.router.navigate(['/users']);
            }
        });
    }
}
NewUserComponent.ɵfac = function NewUserComponent_Factory(t) { return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewUserComponent, selectors: [["app-new-user"]], decls: 47, vars: 5, consts: [[1, "container", "main-container"], [1, "row"], [1, "col-sm-12"], [1, "site-cl"], [1, "row", "section"], [1, "offset-md-2", "col-md-8", "col-sm-12", "text-center"], [1, "table", "new-incident"], [1, "text-muted", "text-nowrap"], ["id", "firstName", "type", "text", "maxlength", "50", 1, "w-100", "txt", 3, "ngModel", "ngModelChange"], ["id", "lastName", "type", "text", "maxlength", "50", 1, "w-100", "txt", 3, "ngModel", "ngModelChange"], [1, "text-muted"], ["id", "email", "type", "text", "maxlength", "50", 1, "w-100", "txt", 3, "ngModel", "ngModelChange"], ["id", "phone", "type", "text", "maxlength", "50", 1, "w-100", "txt", 3, "ngModel", "ngModelChange"], ["colspan", "2"], [1, "custom-file", "upload-container", "w-100", "text-left"], [1, "btn", "bg-primary", "text-white"], [1, "fas", "fa-paperclip"], ["id", "files", "type", "file", 1, "file", 3, "change"], ["type", "text", "id", "filestxt", "value", "Click here to upload Files", "readonly", "", 1, "txt", "text-muted", 3, "value"], ["colspan", "2", 1, "text-center", "btns"], [1, "btn", "bg-success", "text-white", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "bg-warning", "text-white", 3, "click"], [1, "far", "fa-window-close"]], template: function NewUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewUserComponent_Template_input_ngModelChange_13_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewUserComponent_Template_input_ngModelChange_19_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewUserComponent_Template_input_ngModelChange_25_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewUserComponent_Template_input_ngModelChange_31_listener($event) { return ctx.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewUserComponent_Template_input_change_37_listener($event) { return ctx.filesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewUserComponent_Template_button_click_41_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewUserComponent_Template_button_click_44_listener() { return ctx.cancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.filesText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["@media (min-width: 279px) {\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n\r\n}\r\n table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n   white-space: nowrap;\r\n   color:  #003018;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n   color: darkslategrey;\r\n}\r\n .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n   line-height:1;\r\n   vertical-align: middle !important;\r\n}\r\n .section[_ngcontent-%COMP%]{\r\n   padding-bottom: 2vh;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]{\r\n   border-collapse: separate;\r\n   border-spacing: 0.8em;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n   width: 10%;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n   width: 90%;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]:focus{\r\n outline: none;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   resize: none;\r\n   overflow: hidden;\r\n   min-height: 2px;\r\n   max-height: 100px;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]{\r\n   position: relative;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\r\n       position: absolute;\r\n       top: 0px;\r\n       left: 0;\r\n       opacity: 0;\r\n       height: 100%;\r\n       width: 100%;\r\n       cursor:pointer;\r\n   }\r\n .custom-file.upload-container[_ngcontent-%COMP%]   .fa-paperclip[_ngcontent-%COMP%]{\r\n   font-size: x-large;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]   #filestxt[_ngcontent-%COMP%]{\r\n   width:91%;\r\n}\r\n .assignee-list[_ngcontent-%COMP%] {\r\n   max-height: 50vh;\r\n   overflow-y: auto;\r\n   line-height:2;\r\n}\r\n .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDLHlEQUF5RDtDQUN6RDs7QUFFRDtDQUVDLG9EQUFvRDtDQUNyRDs7QUFFQTtDQUVBLDhDQUE4QztDQUM5Qzs7QUFFQTtDQUVBLDhDQUE4QztDQUM5Qzs7QUFFQTtDQUVBLDJEQUEyRDtDQUMzRDs7QUFFQTtDQUVBO0dBQ0csbUJBQW1CO0dBQ25CLGVBQWU7QUFDbEI7Q0FDQTtHQUNHLG9CQUFvQjtBQUN2QjtDQUVBOztHQUVHLGFBQWE7R0FDYixpQ0FBaUM7QUFDcEM7Q0FJQTtHQUNHLG1CQUFtQjtBQUN0QjtDQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLHFCQUFxQjtBQUN4QjtDQUVBO0dBQ0csVUFBVTtBQUNiO0NBRUE7R0FDRyxVQUFVO0FBQ2I7Q0FFQTtHQUNHLFlBQVk7R0FDWixnQ0FBZ0M7QUFDbkM7Q0FDQTtDQUNDLGFBQWE7QUFDZDtDQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGlCQUFpQjtBQUNwQjtDQUVBO0dBQ0csa0JBQWtCO0FBQ3JCO0NBQ0c7T0FDSSxrQkFBa0I7T0FDbEIsUUFBUTtPQUNSLE9BQU87T0FDUCxVQUFVO09BQ1YsWUFBWTtPQUNaLFdBQVc7T0FDWCxjQUFjO0dBQ2xCO0NBRUg7R0FDRyxrQkFBa0I7QUFDckI7Q0FDQTtHQUNHLFNBQVM7QUFDWjtDQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixhQUFhO0FBQ2hCO0NBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibmV3LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLyogZXh0cmEgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG4gQG1lZGlhIChtaW4td2lkdGg6IDI3OXB4KSB7XHJcblxyXG59XHJcblxyXG4gLyogIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxufVxyXG5cclxuLyogLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgY29sb3I6ICAjMDAzMDE4O1xyXG59XHJcbnRhYmxlIHRkIHtcclxuICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuXHJcbiAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4uc2VjdGlvbntcclxuICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLnRhYmxlLm5ldy1pbmNpZGVudHtcclxuICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgYm9yZGVyLXNwYWNpbmc6IDAuOGVtO1xyXG59XHJcblxyXG4udGFibGUubmV3LWluY2lkZW50IHRyIHRkOm50aC1jaGlsZCgxKXtcclxuICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLnRhYmxlLm5ldy1pbmNpZGVudCB0ciB0ZDpudGgtY2hpbGQoMil7XHJcbiAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi50YWJsZS5uZXctaW5jaWRlbnQgLnR4dHtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxufVxyXG4udGFibGUubmV3LWluY2lkZW50IC50eHQ6Zm9jdXN7XHJcbiBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGFibGUubmV3LWluY2lkZW50IHRleHRhcmVhe1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcmVzaXplOiBub25lO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBtaW4taGVpZ2h0OiAycHg7XHJcbiAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lcntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAgIC5jdXN0b20tZmlsZS51cGxvYWQtY29udGFpbmVyIC5maWxlIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgbGVmdDogMDtcclxuICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICB9XHJcblxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lciAuZmEtcGFwZXJjbGlwe1xyXG4gICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuLmN1c3RvbS1maWxlLnVwbG9hZC1jb250YWluZXIgI2ZpbGVzdHh0e1xyXG4gICB3aWR0aDo5MSU7XHJcbn1cclxuXHJcbi5hc3NpZ25lZS1saXN0IHtcclxuICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgbGluZS1oZWlnaHQ6MjtcclxufVxyXG5cclxuLmJ0bnMgYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "Vx+w");










function NavbarComponent_ng_container_21_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_ng_container_21_td_9_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.setNotificationStatus($event, notification_r2.Id, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mark Unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_container_21_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_ng_container_21_td_10_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.setNotificationStatus($event, notification_r2.Id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mark Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_ng_container_21_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const notification_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.openIncident(notification_r2.IncidentId, notification_r2.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavbarComponent_ng_container_21_td_9_Template, 4, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavbarComponent_ng_container_21_td_10_Template, 4, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("unread", !notification_r2.IsRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r2.NotifyAbout);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r0.common.getMoment(notification_r2.CreateDate).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.common.getMoment(notification_r2.CreateDate).fromNow(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", notification_r2.IsRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !notification_r2.IsRead);
} }
function NavbarComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.unReadCount, " new");
} }
class NavbarComponent {
    constructor(auth, router, r, notificationService, userService, common, api, document) {
        this.auth = auth;
        this.router = router;
        this.r = r;
        this.notificationService = notificationService;
        this.userService = userService;
        this.common = common;
        this.api = api;
        this.notifications = [];
        this.unReadCount = 0;
    }
    ngOnInit() {
        this.getNotifications();
        this.ReceiveSignalRUpdates();
    }
    logoutClick() {
        this.router.navigate(['/login']);
        this.auth.logout();
    }
    manuChanged(target, event) {
        this.r.removeClass(document.body, 'site-bg-img');
        event.preventDefault();
        if (target == 'incidents')
            this.router.navigate(['/incidents']);
        else if (target == 'users')
            this.router.navigate(['/users']);
        else if (target == 'dashboard')
            this.router.navigate(['/dashboard']);
    }
    setUnreadCount() {
        this.unReadCount = this.notifications.filter((n) => n.IsRead == false).length;
    }
    getNotifications() {
        this.notificationService.getAllNotifications().subscribe((m) => {
            this.notifications = m;
            this.setUnreadCount();
        }, (err) => {
            console.log(err);
        });
    }
    openIncident(incidentId, notificationId) {
        this.setNotificationStatus(null, notificationId, true);
        if (window.location.href.toString().includes(incidentId)) {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
        }
        this.router.navigate(['/incidentDetails', incidentId]);
    }
    setNotificationStatus(event, id, isRead) {
        if (event)
            event.stopPropagation();
        this.notificationService.setNotificationStatus(id, isRead).subscribe((m) => {
            let notifications = this.notifications.map((notification) => {
                if (notification.Id === id) {
                    notification.IsRead = isRead;
                }
                return notification;
            });
            this.notifications = notifications;
            this.setUnreadCount();
        }, (err) => {
            console.log(err);
        });
    }
    ReceiveSignalRUpdates() {
        const newConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
            .withUrl(this.api.baseUrl + 'hubs/notifications')
            .withAutomaticReconnect()
            .withHubProtocol(new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["JsonHubProtocol"]())
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information)
            .build();
        console.log('newConnection', newConnection);
        newConnection
            .start()
            .then((result) => {
            console.log('Connected!');
            let hubId = newConnection.connectionId;
            this.userService.updateHubId(hubId, this.common.getLoggedInUser()).subscribe((m) => {
                console.log(m);
            }, (err) => { });
            newConnection.on('ReceiveMessage', (message) => {
                console.log(message);
                // commentRecieved(message);
            });
            newConnection.on('UpdateNotifications', (incidentId) => {
                console.log(incidentId);
                this.notificationService.getAllNotifications().subscribe((m) => {
                    this.notifications = m;
                    this.setUnreadCount();
                }, (err) => { });
            });
        })
            .catch((e) => console.log('Connection failed: ', e));
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config__WEBPACK_IMPORTED_MODULE_8__["Apis"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 28, vars: 2, consts: [[1, "navbar", "navbar-toggleable-md", "navbar-dark", "bg-custom", "site-bg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fas", "fa-bars", "text-white"], ["href", "#", 1, "navbar-brand", 3, "click"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "click"], [1, "btn-group"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "href", "#", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-bell"], [1, "dropdown-menu", "dropdown-menu-right", "justify-content-center"], ["id", "notifications", 1, "notification-list", "scrollbar"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "nav-link", "href", "#", 4, "ngIf"], ["title", "Log out", 1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt", "text-white"], ["colspan", "3"], [1, "text-primary", "notification", 3, "click"], ["colspan", "1"], [1, "text-nowrap", 2, "margin-left", "10px"], [3, "title"], ["colspan", "1", 4, "ngIf"], ["title", "Mark Unread", "aria-hidden", "true", 1, "far", "fa-bookmark", "text-right", 3, "click"], [1, "sr-only"], ["title", "Mark Read", "aria-hidden", "true", 1, "fas", "fa-bookmark", "text-right", 3, "click"], ["href", "#", 1, "nav-link"], ["id", "notificationCount", 1, "notification-count"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_3_listener($event) { return ctx.manuChanged("dashboard", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Incident Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener($event) { return ctx.manuChanged("incidents", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Incidents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener($event) { return ctx.manuChanged("users", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, NavbarComponent_ng_container_21_Template, 11, 7, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, NavbarComponent_a_23_Template, 3, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_26_listener() { return ctx.logoutClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.unReadCount > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.notification[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.notification[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRyIHRkIGEubm90aWZpY2F0aW9ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGUgdHIgdGQgYS5ub3RpZmljYXRpb246aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "Vx+w");





class AuthService {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        this.userLoggedInSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.userLoggedInObs = this.userLoggedInSource.asObservable();
        if (localStorage.getItem('token')) {
            this.userLoggedInSource.next(true);
        }
        else {
            this.userLoggedInSource.next(false);
        }
    }
    validateUser(username, password) {
        let url = this.api.authenticateUrl;
        return this.http
            .post(url, { Username: username, Password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((m) => {
            console.log('m', m);
            if (m && m.Token) {
                localStorage.setItem('token', m.Token);
                localStorage.setItem('user', JSON.stringify(m));
                this.login();
                this.userLoggedInSource.next(true);
                return true;
            }
            else {
                return false;
            }
        }));
    }
    IsAuthenticated() {
        if (localStorage.getItem('token'))
            return true;
        else
            return false;
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userLoggedInSource.next(false);
    }
    login() {
        this.userLoggedInSource.next(true);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_4__["Apis"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nJLZ":
/*!*************************************************************************!*\
  !*** ./src/app/incidentComponents/dashboard/kpibar/kpibar.component.ts ***!
  \*************************************************************************/
/*! exports provided: KpibarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpibarComponent", function() { return KpibarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard-service.service */ "tC6X");
/* harmony import */ var _kpi_kpi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kpi/kpi.component */ "7Dyp");



class KpibarComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.value = 150;
        this.kpis = [];
    }
    ngOnInit() {
        this.dashboardService.getkpiData().subscribe((m) => {
            this.kpis = m;
        });
    }
}
KpibarComponent.ɵfac = function KpibarComponent_Factory(t) { return new (t || KpibarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_1__["DashboardServiceService"])); };
KpibarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KpibarComponent, selectors: [["app-kpibar"]], decls: 7, vars: 6, consts: [[1, "row", "kpibar"], ["text", "New", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"], ["text", "InProgress", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"], ["text", "Closed", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"], ["text", "Approved", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"], ["text", "Late", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"], ["text", "Assigned To Me", 1, "col-lg-2", "col-md-6", "col-sm-12", 3, "value"]], template: function KpibarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-kpi", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-kpi", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-kpi", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-kpi", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-kpi", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-kpi", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.New);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.InProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.Closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.Approved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.Late);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.kpis.AssignedToMe);
    } }, directives: [_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_2__["KpiComponent"]], styles: [".kpibar[_ngcontent-%COMP%]{\r\n  border: 1px solid gray;\r\npadding: 20px;\r\nborder-radius: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtwaWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCLGFBQWE7QUFDYixtQkFBbUI7O0FBRW5CIiwiZmlsZSI6ImtwaWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtwaWJhcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "oa4V":
/*!***********************************************************************!*\
  !*** ./src/app/userComponents/user-listing/user-listing.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingComponent", function() { return UserListingComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/pagination.component */ "hQTH");







function UserListingComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListingComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListingComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No User with this name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListingComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "An Error has occured. Try logging in again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListingComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r4.commonService.getMoment(user_r6.CreateDate).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.commonService.getMoment(user_r6.CreateDate).fromNow(), " ");
} }
function UserListingComponent_app_pagination_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageNumberChanged", function UserListingComponent_app_pagination_25_Template_app_pagination_pageNumberChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.pageNumberChanged($event); })("pageSizeChanged", function UserListingComponent_app_pagination_25_Template_app_pagination_pageSizeChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.pageSizeChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalRecords", ctx_r5.totalRecords)("pageNumber", ctx_r5.pageNumber);
} }
class UserListingComponent {
    constructor(router, userService, commonService) {
        this.router = router;
        this.userService = userService;
        this.commonService = commonService;
        this.status = "loading"; //loading, error, noData
        this.pageSize = 5;
        this.pageNumber = 1;
        this.totalRecords = 0;
        this.users = [];
        this.search = "";
    }
    ngOnInit() {
        this.loadIncidents();
    }
    newUser() {
        this.router.navigate(['/newUser']);
    }
    loadIncidents() {
        if (this.request)
            this.request.unsubscribe();
        this.users = [];
        this.status = "loading";
        this.request = this.userService.getUsersWithPage(this.pageSize, this.pageNumber, '', '', this.search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => { this.status = ""; return m; }))
            .subscribe((m) => {
            this.users = m.Users;
            this.totalRecords = m.Total_Users;
            if (this.totalRecords === 0)
                this.status = "noData";
            else
                this.status = "";
        }, (error) => {
            this.status = "error";
        });
    }
    pageNumberChanged(pageNumber) {
        this.pageNumber = pageNumber;
        this.loadIncidents();
    }
    pageSizeChanged(pageSize) {
        this.pageSize = pageSize;
        this.pageNumber = 1;
        this.loadIncidents();
    }
    searchChanged(event) {
        let text = event.target.value;
        this.pageNumber = 1;
        this.search = text;
        this.loadIncidents();
    }
}
UserListingComponent.ɵfac = function UserListingComponent_Factory(t) { return new (t || UserListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
UserListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListingComponent, selectors: [["app-user-listing"]], decls: 26, vars: 6, consts: [[1, "container", "main-container"], [1, "row"], [1, "col-sm-6"], [1, "site-cl"], [1, "col-sm-6", "text-right"], [1, "btn", "text-white", "bg-success", 3, "click"], [1, "row", "search-bar"], [1, "col-sm-12"], [1, "text-muted"], ["type", "text", "placeholder", "Type title or description", 1, "txt", "w-50", "text-muted", 3, "input"], [1, "col", "col-sm-12"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], ["colspan", "7", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "totalRecords", "pageNumber", "pageNumberChanged", "pageSizeChanged", 4, "ngIf"], ["colspan", "7"], [1, "text-center", "text-muted"], [1, "text-center", "text-warning"], [1, "text-center", "text-danger"], [3, "title"], [3, "totalRecords", "pageNumber", "pageNumberChanged", "pageSizeChanged"]], template: function UserListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListingComponent_Template_a_click_6_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Search : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function UserListingComponent_Template_input_input_12_listener($event) { return ctx.searchChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserListingComponent_tr_18_Template, 9, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UserListingComponent_td_21_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserListingComponent_td_22_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserListingComponent_td_23_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserListingComponent_tr_24_Template, 10, 5, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserListingComponent_app_pagination_25_Template, 1, 2, "app-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "" || ctx.status == "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "noData");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "" || ctx.status == "loading");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], styles: ["@media (min-width: 279px) {\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n\r\n}\r\n table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n   white-space: nowrap;\r\n   color:  #003018;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n   color: darkslategrey;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n   color: darkblue;\r\n}\r\n .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n   line-height: 2;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]{\r\n   padding-top : 15px;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]:focus {\r\n   outline:none;\r\n}\r\n table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]{\r\n  cursor: pointer !important;\r\n\r\n}\r\n table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer !important;\r\n  text-decoration: underline !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQyx5REFBeUQ7Q0FDekQ7O0FBRUQ7Q0FFQyxvREFBb0Q7Q0FDckQ7O0FBRUE7Q0FFQSw4Q0FBOEM7Q0FDOUM7O0FBRUE7Q0FFQSw4Q0FBOEM7Q0FDOUM7O0FBRUE7Q0FFQSwyREFBMkQ7Q0FDM0Q7O0FBRUE7Q0FFQTtHQUNHLG1CQUFtQjtHQUNuQixlQUFlO0FBQ2xCO0NBQ0E7R0FDRyxvQkFBb0I7QUFDdkI7Q0FFQTtHQUNHLGVBQWU7QUFDbEI7Q0FHQTs7R0FFRyxjQUFjO0FBQ2pCO0NBQ0E7R0FDRyxrQkFBa0I7QUFDckI7Q0FFQTtHQUNHLFlBQVk7R0FDWixnQ0FBZ0M7QUFDbkM7Q0FFQTtHQUNHLFlBQVk7QUFDZjtDQUVBO0VBQ0UsMEJBQTBCOztBQUU1QjtDQUlBO0VBQ0UsMEJBQTBCO0VBQzFCLHFDQUFxQztBQUN2QyIsImZpbGUiOiJ1c2VyLWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLyogZXh0cmEgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG4gQG1lZGlhIChtaW4td2lkdGg6IDI3OXB4KSB7XHJcblxyXG59XHJcblxyXG4gLyogIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxufVxyXG5cclxuLyogLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgY29sb3I6ICAjMDAzMDE4O1xyXG59XHJcbnRhYmxlIHRkIHtcclxuICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRkIGEge1xyXG4gICBjb2xvcjogZGFya2JsdWU7XHJcbn1cclxuXHJcblxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcblxyXG4gICBsaW5lLWhlaWdodDogMjtcclxufVxyXG4ucm93LnNlYXJjaC1iYXJ7XHJcbiAgIHBhZGRpbmctdG9wIDogMTVweDtcclxufVxyXG5cclxuLnJvdy5zZWFyY2gtYmFyIC50eHQge1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWU5ZTllO1xyXG59XHJcblxyXG4ucm93LnNlYXJjaC1iYXIgLnR4dDpmb2N1cyB7XHJcbiAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxudGFibGUgdHIgdGQudGl0bGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbnRhYmxlIHRyIHRkLnRpdGxlOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "pVlr":
/*!*************************************************************************!*\
  !*** ./src/app/services/interceptors/http-error-interceptor.service.ts ***!
  \*************************************************************************/
/*! exports provided: HttpErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptorService", function() { return HttpErrorInterceptorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "lGQG");




class HttpErrorInterceptorService {
    constructor(bs) {
        this.bs = bs;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log("error", err);
            if (err.status === 401) {
                // this.bs.logOut()// auto logout if 401 response returned from api
                ;
                //location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }) //end of catchError operator
        ); //end of pipe
    } //end of intercept
}
HttpErrorInterceptorService.ɵfac = function HttpErrorInterceptorService_Factory(t) { return new (t || HttpErrorInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HttpErrorInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptorService, factory: HttpErrorInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "Vx+w");




class UserService {
    constructor(http, api) {
        this.http = http;
        this.api = api;
    }
    getAllUsers() {
        return this.http.get(this.api.allUsersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => {
            console.log(m);
            return m;
        }));
    }
    getUsersWithPage(pageSize, pageNumber, sortBy, sortDir, search) {
        let url = this.api.userssWithPageUrl;
        url += 'PageSize=' + pageSize;
        url += '&PageNumber=' + pageNumber;
        url += '&SortBy=' + (sortBy ? sortBy : 'test');
        url += '&SortDirection=' + (sortDir ? sortDir : 'asc');
        url += '&Search=' + search;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    addNewUser(formData) {
        let url = this.api.addNewUserUrl;
        return this.http.post(url, formData, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            console.log(m);
            return m;
        }));
    }
    updateHubId(hubId, userId) {
        let url = this.api.updateHubIdUrl;
        return this.http
            .post(url, {
            HubId: hubId,
            UserId: userId
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            console.log('m', m);
            return m;
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_3__["Apis"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rKWZ":
/*!*******************************************************************!*\
  !*** ./src/app/services/interceptors/http-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HttpInterceptorService {
    constructor() { }
    intercept(req, next) {
        //  return next.handle(req);
        // console.log('intercept ' + req.url);
        if (req.url.indexOf('authenticate') > 0) {
            return next.handle(req);
        }
        // console.log("token needed");
        let token = localStorage.getItem('token');
        if (token) {
            const clonedReq = req.clone({
                setHeaders: { 'Authorization': `Bearer ${token}` }
            });
            return next.handle(clonedReq);
        }
        else {
            return next.handle(req);
        }
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tC6X":
/*!*******************************************************!*\
  !*** ./src/app/services/dashboard-service.service.ts ***!
  \*******************************************************/
/*! exports provided: DashboardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardServiceService", function() { return DashboardServiceService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "OlR4");





class DashboardServiceService {
    constructor(http, api, common) {
        this.http = http;
        this.api = api;
        this.common = common;
    }
    getkpiData() {
        let url = this.api.kpiUrl + this.common.getLoggedInUser();
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    getOverallWidgetData() {
        let url = this.api.overallWidgetUrl;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    getLast5Data() {
        let url = this.api.last5IncidentsUrl;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    getMostAssignedToUsersData() {
        let url = this.api.mostAssignedToUsersIncidentsUrl;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
    getOldest5UnresolvedData() {
        let url = this.api.oldest5UnresolvedIncidentsUrl;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((m) => {
            return m;
        }));
    }
}
DashboardServiceService.ɵfac = function DashboardServiceService_Factory(t) { return new (t || DashboardServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_3__["Apis"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
DashboardServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardServiceService, factory: DashboardServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uhSi":
/*!***************************************************************************************************!*\
  !*** ./src/app/incidentComponents/incidentDetails/incident-details/incident-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IncidentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDetailsComponent", function() { return IncidentDetailsComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/incident.service */ "fwxc");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assignee-dropdown/assignee-dropdown.component */ "618R");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-comment/add-comment.component */ "WENG");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment/comment.component */ "VLdw");











function IncidentDetailsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_ng_container_12_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.titleEditText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_ng_container_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.titleEditClick(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_ng_container_12_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.updateIncident("title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.titleEditText);
} }
function IncidentDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_div_28_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.descriptionEditText = $event; })("input", function IncidentDetailsComponent_div_28_Template_textarea_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.common.auto_grow($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_div_28_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.descriptionEditClick(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_div_28_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.updateIncident("description"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.descriptionEditText);
} }
function IncidentDetailsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_div_35_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.addtionalDataEditText = $event; })("input", function IncidentDetailsComponent_div_35_Template_textarea_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.common.auto_grow($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_div_35_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.addtionalDataEditClick(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_div_35_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.updateIncident("additionalData"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.addtionalDataEditText);
} }
function IncidentDetailsComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_tr_39_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const file_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.deleteFile(file_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_tr_39_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const file_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.downloadFile(file_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", file_r23.FileName, " ");
} }
function IncidentDetailsComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r4.common.getMoment(ctx_r4.startDate).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.common.getMoment(ctx_r4.startDate).fromNow());
} }
function IncidentDetailsComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_ng_container_69_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "owl-date-time", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("afterPickerClosed", function IncidentDetailsComponent_ng_container_69_Template_owl_date_time_afterPickerClosed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.startDateChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r27)("ngModel", ctx_r5.startDate)("owlDateTimeTrigger", _r27);
} }
function IncidentDetailsComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r6.common.getMoment(ctx_r6.dueDate).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.common.getMoment(ctx_r6.dueDate).fromNow());
} }
function IncidentDetailsComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_ng_container_77_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.dueDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "owl-date-time", 38, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("afterPickerClosed", function IncidentDetailsComponent_ng_container_77_Template_owl_date_time_afterPickerClosed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.dueDateChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r31)("ngModel", ctx_r7.dueDate)("owlDateTimeTrigger", _r31);
} }
function IncidentDetailsComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-comment", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("commentChanged", function IncidentDetailsComponent_div_83_Template_app_comment_commentChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.commentChanged($event); })("commentDeleted", function IncidentDetailsComponent_div_83_Template_app_comment_commentDeleted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.commentDeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", c_r35);
} }
class IncidentDetailsComponent {
    constructor(route, router, incidentService, common) {
        this.route = route;
        this.router = router;
        this.incidentService = incidentService;
        this.common = common;
        this.incident = {};
        this.status = 'N';
        this.title = "";
        this.titleEditText = "";
        this.titleEdit = false;
        this.description = "";
        this.descriptionEditText = "";
        this.descriptionEdit = false;
        this.addtionalData = "";
        this.addtionalDataEditText = "";
        this.addtionalDataEdit = false;
        this.startDate = "";
        this.dueDate = "";
        this.startDateEdit = false;
        this.dueDateEdit = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = params.get('id');
            this.incidentService.getIncidentById(id || '').subscribe((m) => {
                this.incident = m;
                this.setFields();
            }, (err) => {
                console.log(err);
            });
        });
    }
    setFields() {
        this.title = this.titleEditText = this.incident.Title;
        this.description = this.descriptionEditText = this.incident.Description;
        this.addtionalData = this.addtionalDataEditText = this.incident.AdditionalData;
        this.status = this.incident.Status;
        this.startDate = this.incident.StartTime;
        this.dueDate = this.incident.DueDate;
    }
    downloadFile(file) {
        this.incidentService.downloadFile("incident", "", this.incident.Id, file);
    }
    deleteFile(file) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
            .fire({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this file.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.incidentService
                    .deleteAttachment('incident', '', this.incident.Id, this.common.getLoggedInUser(), file)
                    .subscribe((m) => {
                    let changedincident = Object.assign({}, this.incident);
                    changedincident.Attachments = changedincident.Attachments.filter((ifile) => ifile.Id !== file.Id);
                    this.incident = changedincident;
                }, (err) => console.log(err));
            }
        });
    }
    statusChanged(event) {
        this.updateIncidentByField("Status", this.status);
    }
    assigneeChanged(newAssignee) {
        this.updateIncidentByField("AssignedTO", newAssignee);
    }
    titleEditClick(show) {
        if (show)
            this.titleEdit = true;
        else
            this.titleEdit = false;
    }
    descriptionEditClick(show) {
        if (show)
            this.descriptionEdit = true;
        else
            this.descriptionEdit = false;
    }
    addtionalDataEditClick(show) {
        if (show)
            this.addtionalDataEdit = true;
        else
            this.addtionalDataEdit = false;
    }
    startDateEditClick(show) {
        if (show)
            this.startDateEdit = true;
        else
            this.startDateEdit = false;
    }
    startDateChanged() {
        if (!this.common.getMoment(this.startDate).isValid()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Invalid Date.");
            this.startDate = this.incident.StartTime;
        }
        else {
            this.updateIncidentByField("StartTime", this.startDate);
            this.startDateEdit = false;
        }
    }
    dueDateEditClick(show) {
        if (show)
            this.dueDateEdit = true;
        else
            this.dueDateEdit = false;
    }
    dueDateChanged() {
        if (!this.common.getMoment(this.dueDate).isValid()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Invalid Date.");
            this.dueDate = this.incident.DueDate;
        }
        else {
            this.updateIncidentByField("DueDate", this.dueDate);
            this.dueDateEdit = false;
        }
    }
    updateIncident(source) {
        switch (source) {
            case 'title':
                this.titleEditText = this.titleEditText.trim();
                if (this.titleEditText == "") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Title cannot be empty.");
                    break;
                }
                this.updateIncidentByField('Title', this.titleEditText);
                this.title = this.titleEditText;
                this.titleEdit = false;
                break;
            case 'description':
                this.descriptionEditText = this.descriptionEditText.trim();
                if (this.descriptionEditText == "") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Description cannot be empty.");
                    break;
                }
                this.updateIncidentByField('Description', this.descriptionEditText);
                this.description = this.descriptionEditText;
                this.descriptionEdit = false;
                break;
            case 'additionalData':
                this.addtionalDataEditText = this.addtionalDataEditText.trim();
                this.updateIncidentByField('AdditionalData', this.addtionalDataEditText);
                this.addtionalData = this.addtionalDataEditText;
                this.addtionalDataEdit = false;
                break;
            default:
                break;
        }
    }
    updateIncidentByField(field, value) {
        let parameters = {
            IncidentId: this.incident.Id,
            Parameter: field,
            Value: value,
            UserId: this.common.getLoggedInUser()
        };
        this.incidentService.updateIncident(parameters).subscribe((m) => m, (err) => console.log(err));
    }
    commentAdded(newComment) {
        console.log("newcomment", newComment);
        let changedincident = Object.assign({}, this.incident);
        changedincident.Comments = [newComment].concat(changedincident.Comments);
        this.incident = changedincident;
    }
    commentChanged(comment) {
        //console.log(comment);
        // no implementation needed so far
    }
    commentDeleted(commentId) {
        console.log(commentId);
        let changedincident = Object.assign({}, this.incident);
        changedincident.Comments = changedincident.Comments.filter((comment) => comment.Id !== commentId);
        this.incident = changedincident;
    }
    sweet() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("hi");
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('The Internet?', 'That thing is still around?', 'question');
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
}
IncidentDetailsComponent.ɵfac = function IncidentDetailsComponent_Factory(t) { return new (t || IncidentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
IncidentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IncidentDetailsComponent, selectors: [["app-incident-details"]], decls: 85, vars: 19, consts: [[1, "container", "main-container"], [1, "row"], [1, "col", "col-sm-12"], [1, "site-cl"], [1, "row", "section"], [1, "col-md-8", "col-sm-12"], [1, "text-primary"], [1, "fas", "fa-edit", "text-primary", 3, "click"], [4, "ngIf"], [1, "col-md-4", "col-sm-12"], [1, "text-muted", "timstamp"], [3, "title"], [1, "col-md-6", "col-sm-12"], [1, "field", "scrollbar"], [1, "text-muted"], ["class", "", 4, "ngIf"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-md-5", "offset-md-1", "col-sm-12"], [1, "table", "update-section"], [1, "browser-default", "dropdown-custom", 3, "ngModel", "ngModelChange", "change"], ["value", "I"], ["value", "N"], ["value", "C"], ["value", "A"], [3, "selectedAssignee", "width", "assigneeChanged"], [3, "title", 4, "ngIf"], [3, "incidentId", "commentAdded"], ["type", "text", "id", "titleTxt", "maxlength", "100", 1, "input-text", "w-100", 3, "ngModel", "ngModelChange"], [1, "w-100", "text-right", "fields-update-icon"], ["title", "Cancel", 1, "fas", "fa-times-circle", "text-warning", 3, "click"], ["title", "Save", 1, "fas", "fa-check", "text-success", 3, "click"], [1, ""], ["id", "description ", 1, "scrollbar", 3, "ngModel", "ngModelChange", "input"], [1, "scrollbar", 3, "ngModel", "ngModelChange", "input"], ["title", "Remove", 1, "fas", "fa-times-circle", "text-danger", 3, "click"], [1, "incident-file", "text-primary", 3, "click"], [1, "input-text", 3, "owlDateTime", "ngModel", "owlDateTimeTrigger", "ngModelChange"], [3, "afterPickerClosed"], ["startdt", ""], ["duetDatedt", ""], [3, "comment", "commentChanged", "commentDeleted"]], template: function IncidentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Incident Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_Template_i_click_11_listener() { return ctx.titleEditClick(!ctx.titleEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IncidentDetailsComponent_ng_container_12_Template, 5, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_Template_i_click_24_listener() { return ctx.descriptionEditClick(!ctx.descriptionEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, IncidentDetailsComponent_div_28_Template, 6, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Additional Details : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_Template_i_click_31_listener() { return ctx.addtionalDataEditClick(!ctx.addtionalDataEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, IncidentDetailsComponent_div_35_Template, 6, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Attachments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, IncidentDetailsComponent_tr_39_Template, 5, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IncidentDetailsComponent_Template_select_ngModelChange_47_listener($event) { return ctx.status = $event; })("change", function IncidentDetailsComponent_Template_select_change_47_listener($event) { return ctx.statusChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "app-assignee-dropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("assigneeChanged", function IncidentDetailsComponent_Template_app_assignee_dropdown_assigneeChanged_61_listener($event) { return ctx.assigneeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_Template_i_click_66_listener() { return ctx.startDateEditClick(!ctx.startDateEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, IncidentDetailsComponent_span_68_Template, 2, 2, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, IncidentDetailsComponent_ng_container_69_Template, 4, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Due Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentDetailsComponent_Template_i_click_74_listener() { return ctx.dueDateEditClick(!ctx.dueDateEdit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, IncidentDetailsComponent_span_76_Template, 2, 2, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, IncidentDetailsComponent_ng_container_77_Template, 4, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, IncidentDetailsComponent_div_83_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "app-add-comment", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("commentAdded", function IncidentDetailsComponent_Template_app_add_comment_commentAdded_84_listener($event) { return ctx.commentAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.common.getUserNameById(ctx.incident.CreatedBy), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.common.getMoment(ctx.incident.CreatedAT).format("MMMM DD YYYY, h:mm:ss a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.common.getMoment(ctx.incident.CreatedAT).fromNow());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.descriptionEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.addtionalData, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addtionalDataEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.incident.Attachments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedAssignee", ctx.incident.AssignedTo)("width", "w-75");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.startDateEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startDateEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dueDateEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dueDateEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.incident.Comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("incidentId", ctx.incident.Id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["AssigneeDropdownComponent"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_8__["AddCommentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"]], styles: ["@media (min-width: 279px) {\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n\r\n}\r\n table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n   white-space: nowrap;\r\n   color:  #003018;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n   color: darkslategrey;\r\n}\r\n .update-section.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .update-section.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n   line-height: 2;\r\n   vertical-align: middle !important;\r\n}\r\n .dropdown-custom[_ngcontent-%COMP%]{\r\n  border: none;\r\n  border-bottom: 1px solid #9e9e9e;\r\n  width: 200px;\r\n}\r\n textarea[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   resize: none;\r\n   overflow: hidden;\r\n   min-height: 40px;\r\n   max-height: 100px;\r\n}\r\n .section[_ngcontent-%COMP%]{\r\n   padding-bottom: 2vh;\r\n}\r\n .timstamp[_ngcontent-%COMP%]{\r\n   font-size: smaller;\r\n}\r\n .fields-update-icon[_ngcontent-%COMP%]{\r\n   font-size: x-large;\r\n   cursor: pointer;\r\n}\r\n .fields-update-icon[_ngcontent-%COMP%]   .fa-times-circle[_ngcontent-%COMP%]{\r\n   color: orange;\r\n}\r\n .fields-update-icon[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%]{\r\n   color: green;\r\n}\r\n .field[_ngcontent-%COMP%]{\r\n   max-height: 25vh;\r\n   overflow-y: auto;\r\n}\r\n select.dropdown-custom[_ngcontent-%COMP%]{\r\n  padding:5px;\r\n}\r\n select.dropdown-custom[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\r\n   background: darkgreen;\r\n   color: white;\r\n}\r\n .input-text[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n .input-text[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n ul.field[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n   list-style: none;\r\n   display: inline;\r\n   padding-right: 25px;\r\n   cursor: pointer;\r\n}\r\n .incident-file[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n a.incident-file[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0MseURBQXlEO0NBQ3pEOztBQUVEO0NBRUMsb0RBQW9EO0NBQ3JEOztBQUVBO0NBRUEsOENBQThDO0NBQzlDOztBQUVBO0NBRUEsOENBQThDO0NBQzlDOztBQUVBO0NBRUEsMkRBQTJEO0NBQzNEOztBQUVBO0NBRUE7R0FDRyxtQkFBbUI7R0FDbkIsZUFBZTtBQUNsQjtDQUNBO0dBQ0csb0JBQW9CO0FBQ3ZCO0NBRUE7O0dBRUcsY0FBYztHQUNkLGlDQUFpQztBQUNwQztDQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7Q0FHQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixpQkFBaUI7QUFDcEI7Q0FFQTtHQUNHLG1CQUFtQjtBQUN0QjtDQUVBO0dBQ0csa0JBQWtCO0FBQ3JCO0NBRUE7R0FDRyxrQkFBa0I7R0FDbEIsZUFBZTtBQUNsQjtDQUNBO0dBQ0csYUFBYTtBQUNoQjtDQUNBO0dBQ0csWUFBWTtBQUNmO0NBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0FBQ25CO0NBR0E7RUFDRSxXQUFXO0FBQ2I7Q0FFQTtHQUNHLHFCQUFxQjtHQUNyQixZQUFZO0FBQ2Y7Q0FFQTtHQUNHLFlBQVk7R0FDWixnQ0FBZ0M7QUFDbkM7Q0FDQTtFQUNFLGFBQWE7QUFDZjtDQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsZUFBZTtBQUNsQjtDQUVBO0VBQ0UsZUFBZTtBQUNqQjtDQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZCIsImZpbGUiOiJpbmNpZGVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC8qIGV4dHJhIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuIEBtZWRpYSAobWluLXdpZHRoOiAyNzlweCkge1xyXG5cclxufVxyXG5cclxuIC8qICBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG5cclxufVxyXG5cclxuLyogLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG59XHJcblxyXG4vKiAvLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgIGNvbG9yOiAgIzAwMzAxODtcclxufVxyXG50YWJsZSB0ZCB7XHJcbiAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG59XHJcblxyXG4udXBkYXRlLXNlY3Rpb24udGFibGUgdGQsIC51cGRhdGUtc2VjdGlvbi50YWJsZSB0aCB7XHJcblxyXG4gICBsaW5lLWhlaWdodDogMjtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY3VzdG9te1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG50ZXh0YXJlYXtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHJlc2l6ZTogbm9uZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgbWluLWhlaWdodDogNDBweDtcclxuICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9ue1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4udGltc3RhbXB7XHJcbiAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmZpZWxkcy11cGRhdGUtaWNvbntcclxuICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpZWxkcy11cGRhdGUtaWNvbiAuZmEtdGltZXMtY2lyY2xle1xyXG4gICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5maWVsZHMtdXBkYXRlLWljb24gLmZhLWNoZWNre1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5maWVsZHtcclxuICAgbWF4LWhlaWdodDogMjV2aDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbnNlbGVjdC5kcm9wZG93bi1jdXN0b217XHJcbiAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbnNlbGVjdC5kcm9wZG93bi1jdXN0b20gb3B0aW9ue1xyXG4gICBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0LXRleHQsIHRleHRhcmVhIHtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzllOWU5ZTtcclxufVxyXG4uaW5wdXQtdGV4dDpmb2N1cyAsIHRleHRhcmVhOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnVsLmZpZWxkIGxpIHtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbmNpZGVudC1maWxle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hLmluY2lkZW50LWZpbGU6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "urVl":
/*!***************************************************************************!*\
  !*** ./src/app/incidentComponents/new-incident/new-incident.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewIncidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewIncidentComponent", function() { return NewIncidentComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/incident.service */ "fwxc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assignee-dropdown/assignee-dropdown.component */ "618R");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");








class NewIncidentComponent {
    constructor(common, incidentService, router) {
        this.common = common;
        this.incidentService = incidentService;
        this.router = router;
        this.title = '';
        this.assginee = '';
        this.description = '';
        this.addtionalDetails = '';
        this.startDate = '';
        this.dueDate = '';
        this.files = [];
        this.filesText = 'Upload files';
    }
    ngOnInit() { }
    assigneeChanged(assignee) {
        this.assginee = assignee;
    }
    filesChange(event) {
        this.files = event.target.files;
        this.filesText = this.files.length + ' file selected.';
    }
    startDateChanged() {
        if (!this.common.getMoment(this.startDate).isValid()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Invalid Date Start Date.');
            this.startDate = '';
        }
    }
    dueDateChanged() {
        if (!this.common.getMoment(this.dueDate).isValid()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Invalid Date Due Date.');
            this.dueDate = '';
        }
    }
    cancelClicked() {
        this.router.navigate(['/incidents']);
    }
    validate() {
        let error = '';
        this.title = this.title.trim();
        this.description = this.description.trim();
        this.addtionalDetails = this.addtionalDetails.trim();
        if (this.title === '')
            error = 'Title cannot be empty.';
        else if (this.assginee === '')
            error = 'Please select assignee.';
        else if (this.description === '')
            error = 'Description cannot be empty.';
        else if (!this.common.getMoment(this.startDate).isValid()) {
            error = 'Invalid Start Date';
        }
        else if (!this.common.getMoment(this.dueDate).isValid()) {
            error = 'Invalid Due Date';
        }
        if (error === '')
            return true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
            .fire({
            title: 'Invalid',
            text: error,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Okay',
        })
            .then((m) => { });
        return false;
    }
    saveIncident() {
        if (!this.validate())
            return;
        const formData = new FormData();
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                formData.append('Attachment' + i + 1, this.files[i], this.files[i].name);
            }
        }
        formData.append('CreatedBy', this.common.getLoggedInUser());
        formData.append('AssignedTo', this.assginee);
        formData.append('Title', this.title);
        formData.append('Description', this.description);
        formData.append('AdditionalDeta', this.addtionalDetails);
        formData.append('StartTime', this.common.getMoment(this.startDate).toISOString());
        formData.append('DueDate', this.common.getMoment(this.dueDate).toISOString());
        formData.append('Status', 'N');
        this.incidentService.addNewIncident(formData).subscribe((m) => {
            //console.log(m);
            this.finalAction();
        }, (err) => console.log(err));
    }
    finalAction() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a
            .fire({
            title: 'Incident has been saved.',
            text: 'Do you want to add more incidents?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: "No"
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.router.navigate(['/newIncident']);
            }
            else {
                this.router.navigate(['/incidents']);
            }
        });
    }
}
NewIncidentComponent.ɵfac = function NewIncidentComponent_Factory(t) { return new (t || NewIncidentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewIncidentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewIncidentComponent, selectors: [["app-new-incident"]], decls: 63, vars: 11, consts: [[1, "container", "main-container"], [1, "row"], [1, "col-sm-12"], [1, "site-cl"], [1, "row", "section"], [1, "offset-md-2", "col-md-8", "col-sm-12", "text-center"], [1, "table", "new-incident"], [1, "text-muted"], ["type", "text", "placeholder", "", "maxlength", "100", 1, "w-100", "txt", 3, "ngModel", "ngModelChange"], [1, "w-100"], [3, "selectedAssignee", "assigneeChanged"], ["placeholder", "", 1, "w-100", "txt", "text-muted", 3, "ngModel", "ngModelChange", "input"], [1, "w-100", "txt", 3, "ngModel", "ngModelChange", "input"], ["type", "text", 1, "w-100", "txt", 3, "owlDateTime", "ngModel", "owlDateTimeTrigger", "ngModelChange"], [3, "afterPickerClosed"], ["startdt", ""], ["duetDatedt", ""], ["colspan", "2"], [1, "custom-file", "upload-container", "w-100", "text-left"], [1, "btn", "bg-primary", "text-white"], [1, "fas", "fa-paperclip"], ["id", "files", "type", "file", "multiple", "", 1, "file", 3, "change"], ["type", "text", "id", "filestxt", "value", "Click here to upload Files", "readonly", "", 1, "txt", "text-muted", 3, "value"], ["colspan", "2", 1, "text-center", "btns"], [1, "btn", "bg-success", "text-white", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "bg-warning", "text-white", 3, "click"], [1, "far", "fa-window-close"]], template: function NewIncidentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add New Incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewIncidentComponent_Template_input_ngModelChange_13_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-assignee-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("assigneeChanged", function NewIncidentComponent_Template_app_assignee_dropdown_assigneeChanged_19_listener($event) { return ctx.assigneeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewIncidentComponent_Template_textarea_ngModelChange_25_listener($event) { return ctx.description = $event; })("input", function NewIncidentComponent_Template_textarea_input_25_listener($event) { return ctx.common.auto_grow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Additional Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewIncidentComponent_Template_textarea_ngModelChange_31_listener($event) { return ctx.addtionalDetails = $event; })("input", function NewIncidentComponent_Template_textarea_input_31_listener($event) { return ctx.common.auto_grow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewIncidentComponent_Template_input_ngModelChange_37_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "owl-date-time", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("afterPickerClosed", function NewIncidentComponent_Template_owl_date_time_afterPickerClosed_38_listener() { return ctx.startDateChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewIncidentComponent_Template_input_ngModelChange_45_listener($event) { return ctx.dueDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "owl-date-time", 14, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("afterPickerClosed", function NewIncidentComponent_Template_owl_date_time_afterPickerClosed_46_listener() { return ctx.dueDateChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewIncidentComponent_Template_input_change_53_listener($event) { return ctx.filesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewIncidentComponent_Template_button_click_57_listener() { return ctx.saveIncident(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewIncidentComponent_Template_button_click_60_listener() { return ctx.cancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedAssignee", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addtionalDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r0)("ngModel", ctx.startDate)("owlDateTimeTrigger", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTime", _r1)("ngModel", ctx.dueDate)("owlDateTimeTrigger", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.filesText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _assignee_dropdown_assignee_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["AssigneeDropdownComponent"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeComponent"]], styles: ["@media (min-width: 279px) {\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n\r\n}\r\n table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n   white-space: nowrap;\r\n   color:  #003018;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n   color: darkslategrey;\r\n}\r\n .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n   line-height:1;\r\n   vertical-align: middle !important;\r\n}\r\n .section[_ngcontent-%COMP%]{\r\n   padding-bottom: 2vh;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]{\r\n   border-collapse: separate;\r\n   border-spacing: 0.8em;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n   width: 10%;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n   width: 90%;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]:focus{\r\n outline: none;\r\n}\r\n .table.new-incident[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   resize: none;\r\n   overflow: hidden;\r\n   min-height: 2px;\r\n   max-height: 100px;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]{\r\n   position: relative;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\r\n       position: absolute;\r\n       top: 0px;\r\n       left: 0;\r\n       opacity: 0;\r\n       height: 100%;\r\n       width: 100%;\r\n       cursor:pointer;\r\n   }\r\n .custom-file.upload-container[_ngcontent-%COMP%]   .fa-paperclip[_ngcontent-%COMP%]{\r\n   font-size: x-large;\r\n}\r\n .custom-file.upload-container[_ngcontent-%COMP%]   #filestxt[_ngcontent-%COMP%]{\r\n   width:91%;\r\n}\r\n .assignee-list[_ngcontent-%COMP%] {\r\n   max-height: 50vh;\r\n   overflow-y: auto;\r\n   line-height:2;\r\n}\r\n .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1pbmNpZGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQyx5REFBeUQ7Q0FDekQ7O0FBRUQ7Q0FFQyxvREFBb0Q7Q0FDckQ7O0FBRUE7Q0FFQSw4Q0FBOEM7Q0FDOUM7O0FBRUE7Q0FFQSw4Q0FBOEM7Q0FDOUM7O0FBRUE7Q0FFQSwyREFBMkQ7Q0FDM0Q7O0FBRUE7Q0FFQTtHQUNHLG1CQUFtQjtHQUNuQixlQUFlO0FBQ2xCO0NBQ0E7R0FDRyxvQkFBb0I7QUFDdkI7Q0FFQTs7R0FFRyxhQUFhO0dBQ2IsaUNBQWlDO0FBQ3BDO0NBSUE7R0FDRyxtQkFBbUI7QUFDdEI7Q0FFQTtHQUNHLHlCQUF5QjtHQUN6QixxQkFBcUI7QUFDeEI7Q0FFQTtHQUNHLFVBQVU7QUFDYjtDQUVBO0dBQ0csVUFBVTtBQUNiO0NBRUE7R0FDRyxZQUFZO0dBQ1osZ0NBQWdDO0FBQ25DO0NBQ0E7Q0FDQyxhQUFhO0FBQ2Q7Q0FFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixpQkFBaUI7QUFDcEI7Q0FFQTtHQUNHLGtCQUFrQjtBQUNyQjtDQUNHO09BQ0ksa0JBQWtCO09BQ2xCLFFBQVE7T0FDUixPQUFPO09BQ1AsVUFBVTtPQUNWLFlBQVk7T0FDWixXQUFXO09BQ1gsY0FBYztHQUNsQjtDQUVIO0dBQ0csa0JBQWtCO0FBQ3JCO0NBQ0E7R0FDRyxTQUFTO0FBQ1o7Q0FFQTtHQUNHLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsYUFBYTtBQUNoQjtDQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5ldy1pbmNpZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAvKiBleHRyYSBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMjc5cHgpIHtcclxuXHJcbn1cclxuXHJcbiAvKiAgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxufVxyXG5cclxuLyogLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG59XHJcblxyXG4vKiAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICBjb2xvcjogICMwMDMwMTg7XHJcbn1cclxudGFibGUgdGQge1xyXG4gICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG5cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG5cclxuICAgbGluZS1oZWlnaHQ6MTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWN0aW9ue1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4udGFibGUubmV3LWluY2lkZW50e1xyXG4gICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICBib3JkZXItc3BhY2luZzogMC44ZW07XHJcbn1cclxuXHJcbi50YWJsZS5uZXctaW5jaWRlbnQgdHIgdGQ6bnRoLWNoaWxkKDEpe1xyXG4gICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4udGFibGUubmV3LWluY2lkZW50IHRyIHRkOm50aC1jaGlsZCgyKXtcclxuICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnRhYmxlLm5ldy1pbmNpZGVudCAudHh0e1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWU5ZTllO1xyXG59XHJcbi50YWJsZS5uZXctaW5jaWRlbnQgLnR4dDpmb2N1c3tcclxuIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS5uZXctaW5jaWRlbnQgdGV4dGFyZWF7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICByZXNpemU6IG5vbmU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIG1pbi1oZWlnaHQ6IDJweDtcclxuICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS51cGxvYWQtY29udGFpbmVye1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICAgLmN1c3RvbS1maWxlLnVwbG9hZC1jb250YWluZXIgLmZpbGUge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgIH1cclxuXHJcbi5jdXN0b20tZmlsZS51cGxvYWQtY29udGFpbmVyIC5mYS1wYXBlcmNsaXB7XHJcbiAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uY3VzdG9tLWZpbGUudXBsb2FkLWNvbnRhaW5lciAjZmlsZXN0eHR7XHJcbiAgIHdpZHRoOjkxJTtcclxufVxyXG5cclxuLmFzc2lnbmVlLWxpc3Qge1xyXG4gICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICBsaW5lLWhlaWdodDoyO1xyXG59XHJcblxyXG4uYnRucyBidXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _incidentComponents_incidentDetails_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidentComponents/incidentDetails/incident-details/incident-details.component */ "uhSi");
/* harmony import */ var _incidentComponents_incident_listing_incident_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incidentComponents/incident-listing/incident-listing.component */ "wZZm");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _incidentComponents_new_incident_new_incident_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incidentComponents/new-incident/new-incident.component */ "urVl");
/* harmony import */ var _userComponents_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userComponents/new-user/new-user.component */ "jipy");
/* harmony import */ var _userComponents_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userComponents/user-listing/user-listing.component */ "oa4V");
/* harmony import */ var _incidentComponents_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./incidentComponents/dashboard/dashboard/dashboard.component */ "8mL0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










// const routes: Routes = [
//   { path: '', redirectTo: '/departments', pathMatch: 'full' },
//   { path: 'departments', component: DepartmentListComponent },
//   {
//     path: 'departments/:id',
//     component: DepartmentDetailComponent,
//     children: [
//       { path: 'overview', component: DepartmentOverviewComponent},
//       { path: 'contact', component: DepartmentContactComponent}
//     ]
//    },
//   { path: 'employees',   component: EmployeeListComponent },
//   { path: '**',   component: PageNotFoundComponent }
// ];
const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _incidentComponents_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'incidents', component: _incidentComponents_incident_listing_incident_listing_component__WEBPACK_IMPORTED_MODULE_2__["IncidentListingComponent"] },
    { path: 'incidentDetails/:id', component: _incidentComponents_incidentDetails_incident_details_incident_details_component__WEBPACK_IMPORTED_MODULE_1__["IncidentDetailsComponent"] },
    { path: 'newIncident', component: _incidentComponents_new_incident_new_incident_component__WEBPACK_IMPORTED_MODULE_4__["NewIncidentComponent"] },
    { path: 'users', component: _userComponents_user_listing_user_listing_component__WEBPACK_IMPORTED_MODULE_6__["UserListingComponent"] },
    { path: 'newUser', component: _userComponents_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__["NewUserComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(router, document, r, auth, userService) {
        this.router = router;
        this.r = r;
        this.auth = auth;
        this.userService = userService;
        this.username = '';
        this.password = '';
        this.error = '';
    }
    ngOnInit() {
        this.r.addClass(document.body, 'site-bg-img');
    }
    loginClick(event) {
        event.preventDefault();
        console.log("calling validate user");
        this.auth.validateUser(this.username, this.password).subscribe((m) => {
            if (m) {
                this.r.removeClass(document.body, 'site-bg-img');
                this.router.navigate(['/incidents']);
                this.userService.getAllUsers().subscribe(m => localStorage.setItem("allUsers", JSON.stringify(m)));
            }
            else {
                this.error = 'Incorrect username or password.';
            }
        }, (error) => {
            console.log(error);
            this.error = 'Incorrect username or password.';
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "container", "login-container"], [1, "text-center", "site-cl"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "site-cl"], ["type", "text", "name", "username", "id", "usernameTxt", "aria-describedby", "usernameHelp", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1", 1, "site-cl"], ["type", "password", "name", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger"], ["type", "submit", 1, "btn", "site-bg", "text-white", 3, "click"], ["href", "/imListing.html", 2, "color", "white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Please login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener($event) { return ctx.loginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["@media (min-width: 279px) {\r\n  .login-container[_ngcontent-%COMP%]{\r\n      margin-top: 0vh;\r\n      height: 100vh;\r\n  }\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n  .login-container[_ngcontent-%COMP%]{\r\n      margin-top: 0vh;\r\n      height: 100vh;\r\n  }\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n  .login-container[_ngcontent-%COMP%]{\r\n      margin-top: 0vh;\r\n      width: 60% !important;\r\n      height: 100vh;\r\n  }\r\n\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n  .login-container[_ngcontent-%COMP%]{\r\n      margin-top: 15vh;\r\n      height: 70vh;\r\n      width: 60% !important;\r\n  }\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n  .login-container[_ngcontent-%COMP%]{\r\n      margin-top: 15vh;\r\n      height: 70vh;\r\n      width: 30% !important;\r\n  }\r\n\r\n}\r\n .login-container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  padding: 80px;\r\n}\r\n .site-bg-img[_ngcontent-%COMP%] {\r\n  background-image: url('/ImAngular/green.jpg');\r\n  background-size: 100% 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDLHlEQUF5RDtDQUN6RDtFQUNDO01BQ0ksZUFBZTtNQUNmLGFBQWE7RUFDakI7O0FBRUY7Q0FFQSxvREFBb0Q7Q0FDcEQ7RUFDRTtNQUNJLGVBQWU7TUFDZixhQUFhO0VBQ2pCOztBQUVGO0NBRUEsOENBQThDO0NBQzlDO0VBQ0U7TUFDSSxlQUFlO01BQ2YscUJBQXFCO01BQ3JCLGFBQWE7RUFDakI7OztBQUdGO0NBRUEsOENBQThDO0NBQzlDO0VBQ0U7TUFDSSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLHFCQUFxQjtFQUN6Qjs7QUFFRjtDQUVBLDJEQUEyRDtDQUMzRDtFQUNFO01BQ0ksZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixxQkFBcUI7RUFDekI7O0FBRUY7Q0FFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7Q0FFQTtFQUNFLDZDQUFzRDtFQUN0RCwwQkFBMEI7RUFDMUIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLyogZXh0cmEgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG4gQG1lZGlhIChtaW4td2lkdGg6IDI3OXB4KSB7XHJcbiAgLmxvZ2luLWNvbnRhaW5lcntcclxuICAgICAgbWFyZ2luLXRvcDogMHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qICBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gIC5sb2dpbi1jb250YWluZXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDB2aDtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubG9naW4tY29udGFpbmVye1xyXG4gICAgICBtYXJnaW4tdG9wOiAwdmg7XHJcbiAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLyogLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmxvZ2luLWNvbnRhaW5lcntcclxuICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyogLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubG9naW4tY29udGFpbmVye1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDgwcHg7XHJcbn1cclxuXHJcbi5zaXRlLWJnLWltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2dyZWVuLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ "wZZm":
/*!***********************************************************************************!*\
  !*** ./src/app/incidentComponents/incident-listing/incident-listing.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IncidentListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentListingComponent", function() { return IncidentListingComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/incident.service */ "fwxc");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/pagination.component */ "hQTH");







function IncidentListingComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Assigned TO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentListingComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentListingComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Incident with this criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentListingComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "An Error has occured. Try logging in again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentListingComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentListingComponent_tr_24_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const incident_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.titleClick(incident_r6.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const incident_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", incident_r6.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](incident_r6.Title.length > 15 ? incident_r6.Title.slice(0, 15) + "..." : incident_r6.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", incident_r6.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", incident_r6.Description.slice(0, 30), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.commonService.getUserNameById(incident_r6.AssignedTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.commonService.getUserNameById(incident_r6.CreatedBy));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r4.commonService.getMoment(incident_r6.CreatedAT).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.commonService.getMoment(incident_r6.CreatedAT).fromNow(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r4.dueDateClass(incident_r6.DueDate, incident_r6.Status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r4.commonService.getMoment(incident_r6.DueDate).format("MMMM DD YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.commonService.getMoment(incident_r6.DueDate).fromNow(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.commonService.statusName(incident_r6.Status));
} }
function IncidentListingComponent_app_pagination_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-pagination", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageNumberChanged", function IncidentListingComponent_app_pagination_25_Template_app_pagination_pageNumberChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.pageNumberChanged($event); })("pageSizeChanged", function IncidentListingComponent_app_pagination_25_Template_app_pagination_pageSizeChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.pageSizeChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalRecords", ctx_r5.totalRecords)("pageNumber", ctx_r5.pageNumber);
} }
class IncidentListingComponent {
    constructor(router, incidentService, commonService) {
        this.router = router;
        this.incidentService = incidentService;
        this.commonService = commonService;
        this.status = "loading"; //loading, error, noData
        this.pageSize = 5;
        this.pageNumber = 1;
        this.totalRecords = 0;
        this.incidents = [];
        this.search = "";
    }
    ngOnInit() {
        this.loadIncidents();
    }
    newincident() {
        this.router.navigate(['/newIncident']);
    }
    loadIncidents() {
        if (this.request)
            this.request.unsubscribe();
        this.incidents = [];
        this.status = "loading";
        this.request = this.incidentService.getIncidentsWithPage(this.pageSize, this.pageNumber, '', '', this.search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(m => { this.status = ""; return m; }))
            .subscribe((m) => {
            this.incidents = m.Incidents;
            this.totalRecords = m.Total_Incidents;
            if (this.totalRecords === 0)
                this.status = "noData";
            else
                this.status = "";
        }, (error) => {
            this.status = "error";
        });
    }
    pageNumberChanged(pageNumber) {
        this.pageNumber = pageNumber;
        this.loadIncidents();
    }
    pageSizeChanged(pageSize) {
        this.pageSize = pageSize;
        this.pageNumber = 1;
        this.loadIncidents();
    }
    searchChanged(event) {
        let text = event.target.value;
        this.pageNumber = 1;
        this.search = text;
        this.loadIncidents();
    }
    titleClick(id) {
        this.router.navigate(['/incidentDetails', id]);
    }
    dueDateClass(dueDate, status) {
        if (status == "C" || status == "A")
            return "";
        if (new Date(dueDate) < (new Date()))
            return "text-danger";
        return "text-warning";
    }
}
IncidentListingComponent.ɵfac = function IncidentListingComponent_Factory(t) { return new (t || IncidentListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_incident_service__WEBPACK_IMPORTED_MODULE_3__["IncidentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
IncidentListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IncidentListingComponent, selectors: [["app-incident-listing"]], decls: 26, vars: 6, consts: [[1, "container", "main-container"], [1, "row"], [1, "col-sm-6"], [1, "site-cl"], [1, "col-sm-6", "text-right"], [1, "btn", "text-white", "bg-success", 3, "click"], [1, "row", "search-bar"], [1, "col-sm-12"], [1, "text-muted"], ["type", "text", "placeholder", "Type title or description", 1, "txt", "w-50", "text-muted", 3, "input"], [1, "col", "col-sm-12"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], ["colspan", "7", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "totalRecords", "pageNumber", "pageNumberChanged", "pageSizeChanged", 4, "ngIf"], ["colspan", "7"], [1, "text-center", "text-muted"], [1, "text-center", "text-warning"], [1, "text-center", "text-danger"], [1, "text-nowrap", "title", 3, "click"], [3, "title"], [1, "description", "text-muted", "text-nowrap", "w-25", 3, "title"], ["data-toggle", "tooltip", 1, "bs-tooltip", 3, "title"], [3, "totalRecords", "pageNumber", "pageNumberChanged", "pageSizeChanged"]], template: function IncidentListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Incident Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentListingComponent_Template_a_click_6_listener() { return ctx.newincident(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Search : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function IncidentListingComponent_Template_input_input_12_listener($event) { return ctx.searchChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IncidentListingComponent_tr_18_Template, 15, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IncidentListingComponent_td_21_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, IncidentListingComponent_td_22_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, IncidentListingComponent_td_23_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, IncidentListingComponent_tr_24_Template, 18, 14, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, IncidentListingComponent_app_pagination_25_Template, 1, 2, "app-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "" || ctx.status == "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "noData");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.incidents);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "" || ctx.status == "loading");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], styles: ["@media (min-width: 279px) {\r\n\r\n}\r\n \r\n @media (min-width: 400px) {\r\n\r\n}\r\n \r\n @media (min-width: 768px) {\r\n\r\n}\r\n \r\n @media (min-width: 992px) {\r\n\r\n}\r\n \r\n @media (min-width: 1200px) {\r\n\r\n}\r\n table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n   white-space: nowrap;\r\n   color:  #003018;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n   color: darkslategrey;\r\n}\r\n table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n   color: darkblue;\r\n}\r\n .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n   line-height: 2;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]{\r\n   padding-top : 15px;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\r\n   border: none;\r\n   border-bottom: 1px solid #9e9e9e;\r\n}\r\n .row.search-bar[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]:focus {\r\n   outline:none;\r\n}\r\n table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]{\r\n  cursor: pointer !important;\r\n\r\n}\r\n table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer !important;\r\n  text-decoration: underline !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0MseURBQXlEO0NBQ3pEOztBQUVEO0NBRUMsb0RBQW9EO0NBQ3JEOztBQUVBO0NBRUEsOENBQThDO0NBQzlDOztBQUVBO0NBRUEsOENBQThDO0NBQzlDOztBQUVBO0NBRUEsMkRBQTJEO0NBQzNEOztBQUVBO0NBRUE7R0FDRyxtQkFBbUI7R0FDbkIsZUFBZTtBQUNsQjtDQUNBO0dBQ0csb0JBQW9CO0FBQ3ZCO0NBRUE7R0FDRyxlQUFlO0FBQ2xCO0NBR0E7O0dBRUcsY0FBYztBQUNqQjtDQUNBO0dBQ0csa0JBQWtCO0FBQ3JCO0NBRUE7R0FDRyxZQUFZO0dBQ1osZ0NBQWdDO0FBQ25DO0NBRUE7R0FDRyxZQUFZO0FBQ2Y7Q0FFQTtFQUNFLDBCQUEwQjs7QUFFNUI7Q0FJQTtFQUNFLDBCQUEwQjtFQUMxQixxQ0FBcUM7QUFDdkMiLCJmaWxlIjoiaW5jaWRlbnQtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAvKiBleHRyYSBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMjc5cHgpIHtcclxuXHJcbn1cclxuXHJcbiAvKiAgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxufVxyXG5cclxuLyogLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG59XHJcblxyXG4vKiAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICBjb2xvcjogICMwMDMwMTg7XHJcbn1cclxudGFibGUgdGQge1xyXG4gICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG5cclxudGFibGUgdGQgYSB7XHJcbiAgIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuXHJcbiAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcbi5yb3cuc2VhcmNoLWJhcntcclxuICAgcGFkZGluZy10b3AgOiAxNXB4O1xyXG59XHJcblxyXG4ucm93LnNlYXJjaC1iYXIgLnR4dCB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZTllOWU7XHJcbn1cclxuXHJcbi5yb3cuc2VhcmNoLWJhciAudHh0OmZvY3VzIHtcclxuICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG50YWJsZSB0ciB0ZC50aXRsZXtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxudGFibGUgdHIgdGQudGl0bGU6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map