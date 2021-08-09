(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chart_demo_chart_area_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chart/demo/chart-area-demo */ "./resources/js/chart/demo/chart-area-demo.js");
/* harmony import */ var _chart_demo_chart_pie_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chart/demo/chart-pie-demo */ "./resources/js/chart/demo/chart-pie-demo.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  mounted: function mounted() {
    (0,_chart_demo_chart_area_demo__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_chart_demo_chart_pie_demo__WEBPACK_IMPORTED_MODULE_1__.default)();
  }
});

/***/ }),

/***/ "./resources/js/chart/demo/chart-area-demo.js":
/*!****************************************************!*\
  !*** ./resources/js/chart/demo/chart-area-demo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chartAreaDemo)
/* harmony export */ });
// Set new default font family and font color to mimic Bootstrap's default styling
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");

  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return "" + Math.round(n * k) / k;
  }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }

  return s.join(dec);
}

function chartAreaDemo() {
  Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#858796"; // Area Chart Example

  var ctx = document.getElementById("myAreaChart");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Earnings",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000]
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: "date"
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function callback(value, index, values) {
              return "$" + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function label(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "./resources/js/chart/demo/chart-pie-demo.js":
/*!***************************************************!*\
  !*** ./resources/js/chart/demo/chart-pie-demo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chartPieDemo)
/* harmony export */ });
function chartPieDemo() {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#858796"; // Pie Chart Example

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Direct", "Referral", "Social"],
      datasets: [{
        data: [55, 30, 15],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
        hoverBorderColor: "rgba(234, 236, 244, 1)"
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=822d95b6& */ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=822d95b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mb-4"
        },
        [
          _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
            _vm._v("Dashboard")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",
              attrs: { href: "#" }
            },
            [
              _c("i", { staticClass: "fas fa-download fa-sm text-white-50" }),
              _vm._v(" Generate Report")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-primary shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "\n                  text-xs\n                  font-weight-bold\n                  text-primary text-uppercase\n                  mb-1\n                "
                        },
                        [
                          _vm._v(
                            "\n                Earnings (Monthly)\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800"
                        },
                        [_vm._v("\n                $40,000\n              ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-calendar fa-2x text-gray-300"
                      })
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-success shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "\n                  text-xs\n                  font-weight-bold\n                  text-success text-uppercase\n                  mb-1\n                "
                        },
                        [
                          _vm._v(
                            "\n                Earnings (Annual)\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800"
                        },
                        [_vm._v("\n                $215,000\n              ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-dollar-sign fa-2x text-gray-300"
                      })
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-info shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-xs font-weight-bold text-info text-uppercase mb-1"
                        },
                        [_vm._v("\n                Tasks\n              ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col-auto" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "h5 mb-0 mr-3 font-weight-bold text-gray-800"
                              },
                              [
                                _vm._v(
                                  "\n                    50%\n                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              { staticClass: "progress progress-sm mr-2" },
                              [
                                _c("div", {
                                  staticClass: "progress-bar bg-info",
                                  staticStyle: { width: "50%" },
                                  attrs: {
                                    role: "progressbar",
                                    "aria-valuenow": "50",
                                    "aria-valuemin": "0",
                                    "aria-valuemax": "100"
                                  }
                                })
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-clipboard-list fa-2x text-gray-300"
                      })
                    ])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-warning shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "\n                  text-xs\n                  font-weight-bold\n                  text-warning text-uppercase\n                  mb-1\n                "
                        },
                        [
                          _vm._v(
                            "\n                Pending Requests\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800"
                        },
                        [_vm._v("18")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-comments fa-2x text-gray-300"
                      })
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-8 col-lg-7" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "\n            card-header\n            py-3\n            d-flex\n            flex-row\n            align-items-center\n            justify-content-between\n          "
              },
              [
                _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                  _vm._v("Earnings Overview")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown no-arrow" }, [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        id: "dropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                dropdown-menu dropdown-menu-right\n                shadow\n                animated--fade-in\n              ",
                      attrs: { "aria-labelledby": "dropdownMenuLink" }
                    },
                    [
                      _c("div", { staticClass: "dropdown-header" }, [
                        _vm._v("Dropdown Header:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "chart-area" }, [
                _c("canvas", { attrs: { id: "myAreaChart" } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-5" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "\n            card-header\n            py-3\n            d-flex\n            flex-row\n            align-items-center\n            justify-content-between\n          "
              },
              [
                _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                  _vm._v("Revenue Sources")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown no-arrow" }, [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        id: "dropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                dropdown-menu dropdown-menu-right\n                shadow\n                animated--fade-in\n              ",
                      attrs: { "aria-labelledby": "dropdownMenuLink" }
                    },
                    [
                      _c("div", { staticClass: "dropdown-header" }, [
                        _vm._v("Dropdown Header:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "chart-pie pt-4 pb-2" }, [
                _c("canvas", { attrs: { id: "myPieChart" } })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4 text-center small" }, [
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-primary" }),
                  _vm._v(" Direct\n            ")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-success" }),
                  _vm._v(" Social\n            ")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-info" }),
                  _vm._v(" Referral\n            ")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6 mb-4" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Projects")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("\n            Server Migration "),
                _c("span", { staticClass: "float-right" }, [_vm._v("20%")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-danger",
                  staticStyle: { width: "20%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "20",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("\n            Sales Tracking "),
                _c("span", { staticClass: "float-right" }, [_vm._v("40%")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-warning",
                  staticStyle: { width: "40%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "40",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("\n            Customer Database "),
                _c("span", { staticClass: "float-right" }, [_vm._v("60%")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar",
                  staticStyle: { width: "60%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "60",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("\n            Payout Details "),
                _c("span", { staticClass: "float-right" }, [_vm._v("80%")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-info",
                  staticStyle: { width: "80%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "80",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("\n            Account Setup "),
                _c("span", { staticClass: "float-right" }, [
                  _vm._v("Complete!")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", {
                  staticClass: "progress-bar bg-success",
                  staticStyle: { width: "100%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "100",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-primary text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Primary\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#4e73df")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-success text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Success\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#1cc88a")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-info text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Info\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#36b9cc")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-warning text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Warning\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#f6c23e")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-danger text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Danger\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#e74a3b")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c(
                "div",
                { staticClass: "card bg-secondary text-white shadow" },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _vm._v("\n              Secondary\n              "),
                    _c("div", { staticClass: "text-white-50 small" }, [
                      _vm._v("#858796")
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-light text-black shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Light\n              "),
                  _c("div", { staticClass: "text-black-50 small" }, [
                    _vm._v("#f8f9fc")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-dark text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n              Dark\n              "),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#5a5c69")
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 mb-4" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Illustrations")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticClass: "img-fluid px-3 px-sm-4 mt-3 mb-4",
                  staticStyle: { width: "25rem" },
                  attrs: { src: "img/undraw_posting_photo.svg", alt: "..." }
                })
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            Add some quality, svg illustrations to your project courtesy of\n            "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      rel: "nofollow",
                      href: "https://undraw.co/"
                    }
                  },
                  [_vm._v("unDraw")]
                ),
                _vm._v(
                  ", a constantly updated collection of beautiful svg images that\n            you can use completely free and without attribution!\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: {
                    target: "_blank",
                    rel: "nofollow",
                    href: "https://undraw.co/"
                  }
                },
                [_vm._v("Browse Illustrations on unDraw →")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("\n            Development Approach\n          ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("p", [
                _vm._v(
                  "\n            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in\n            order to reduce CSS bloat and poor page performance. Custom CSS\n            classes are used to create custom components and custom utility\n            classes.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _vm._v(
                  "\n            Before working with this theme, you should become familiar with\n            the Bootstrap framework, especially the utility classes.\n          "
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);