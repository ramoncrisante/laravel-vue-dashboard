(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
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
  name: "LoadingButton",
  props: {
    text: String,
    isLoading: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_notify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/notify.js */ "./resources/js/utils/notify.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav */ "./resources/js/components/Nav.vue");
/* harmony import */ var _components_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LoadingButton */ "./resources/js/components/LoadingButton.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Register",
  components: {
    Nav: _components_Nav__WEBPACK_IMPORTED_MODULE_3__.default,
    LoadingButton: _components_LoadingButton__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      isLoading: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, message, toast;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("register", {
                  first_name: _this.first_name,
                  last_name: _this.last_name,
                  email: _this.email,
                  password: _this.password,
                  password_confirm: _this.password_confirm
                });

              case 4:
                response = _context.sent;
                _this.isLoading = false;

                if (response.data.must_verify_email) {
                  _this.$router.push("/verify/user/".concat(response.data.id));
                } else {
                  message = "You account has been successfully create. Please Log in.";
                  toast = Vue.toasted.show(message, {
                    theme: "toasted-primary",
                    position: "top-right",
                    duration: 5000
                  });

                  _this.$router.push("/login");
                }

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                _utils_notify_js__WEBPACK_IMPORTED_MODULE_2__.authError(_context.t0);
                _this.isLoading = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/utils/notify.js":
/*!**************************************!*\
  !*** ./resources/js/utils/notify.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authError": () => (/* binding */ authError)
/* harmony export */ });
function authError(error) {
  var errorMessages = [];
  var detailedMessages = [];
  var errorMessage = error.response.data.message || "The given data was invalid.";
  errorMessages.push(errorMessage);

  if (error.response.data.errors) {
    detailedMessages = [].concat.apply([], Object.values(error.response.data.errors));
    errorMessages = errorMessages.concat(detailedMessages);
  }

  errorMessages.forEach(function (message) {
    var toast = Vue.toasted.show(message, {
      theme: "toasted-primary",
      position: "top-right",
      duration: 5000
    });
  });
}

/***/ }),

/***/ "./resources/js/components/LoadingButton.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=template&id=b8be879a& */ "./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&");
/* harmony import */ var _LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=script&lang=js& */ "./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadingButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/register/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5baf7a25& */ "./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/register/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/register/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingButton.vue?vue&type=template&id=b8be879a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&");


/***/ }),

/***/ "./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5baf7a25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5baf7a25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass: "btn btn-primary btn-user btn-block",
      attrs: { type: "submit", disabled: _vm.isLoading }
    },
    [
      !_vm.isLoading ? _c("span", [_vm._v(_vm._s(_vm.text))]) : _vm._e(),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "div",
            {
              staticClass: "spinner-border text-light",
              attrs: { role: "status" }
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/index.vue?vue&type=template&id=5baf7a25& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("Nav"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "card o-hidden border-0 shadow-lg my-5" }, [
          _c("div", { staticClass: "card-body p-0" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", {
                staticClass: "col-lg-5 d-none d-lg-block bg-register-image"
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-7" }, [
                _c("div", { staticClass: "p-5" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "user",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.register.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.first_name,
                                expression: "first_name"
                              }
                            ],
                            staticClass: "form-control form-control-user",
                            attrs: {
                              type: "text",
                              id: "exampleFirstName",
                              placeholder: "First Name"
                            },
                            domProps: { value: _vm.first_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.first_name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.last_name,
                                expression: "last_name"
                              }
                            ],
                            staticClass: "form-control form-control-user",
                            attrs: {
                              type: "text",
                              id: "exampleLastName",
                              placeholder: "Last Name"
                            },
                            domProps: { value: _vm.last_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.last_name = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "email",
                            id: "exampleInputEmail",
                            placeholder: "Email Address"
                          },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "form-control form-control-user",
                            attrs: {
                              type: "password",
                              id: "exampleInputPassword",
                              placeholder: "Password"
                            },
                            domProps: { value: _vm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password_confirm,
                                expression: "password_confirm"
                              }
                            ],
                            staticClass: "form-control form-control-user",
                            attrs: {
                              type: "password",
                              id: "exampleRepeatPassword",
                              placeholder: "Repeat Password"
                            },
                            domProps: { value: _vm.password_confirm },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password_confirm = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("LoadingButton", {
                        attrs: {
                          text: "Register Account",
                          isLoading: _vm.isLoading
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "small",
                          attrs: { to: "/forgot-password" }
                        },
                        [_vm._v("Forgot Password?")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "small", attrs: { to: "/login" } },
                        [_vm._v("Already have an account? Login!")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h1", { staticClass: "h4 text-gray-900 mb-4" }, [
        _vm._v("Create an Account!")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);