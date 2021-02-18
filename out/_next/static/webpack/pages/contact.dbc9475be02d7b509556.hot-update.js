webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var D_Projects_NextJS_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Projects_NextJS_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");




var _jsxFileName = "D:\\Projects\\NextJS\\portfolio\\components\\Navbar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projects_NextJS_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});
function Navbar() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(D_Projects_NextJS_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  var prevOpen = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(open);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "fixed",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          className: classes.title,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/images/favicon.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            style: {
              color: '#fff'
            },
            ref: anchorRef,
            "aria-controls": open ? 'menu-list-grow' : undefined,
            "aria-haspopup": "true",
            onClick: handleToggle,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, this), "  Menu"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_14__["default"], {
            open: open,
            anchorEl: anchorRef.current,
            role: undefined,
            transition: true,
            disablePortal: true,
            children: function children(_ref) {
              var TransitionProps = _ref.TransitionProps,
                  placement = _ref.placement;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_12__["default"], _objectSpread(_objectSpread({}, TransitionProps), {}, {
                style: {
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    onClickAway: handleClose,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      autoFocusItem: open,
                      id: "menu-list-grow",
                      onKeyDown: handleListKeyDown,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        style: {
                          textDecoration: 'none'
                        },
                        href: "/",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          onClick: handleClose,
                          children: "Home"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        style: {
                          textDecoration: 'none'
                        },
                        href: "/about",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          onClick: handleClose,
                          children: "About"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 93,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        style: {
                          textDecoration: 'none'
                        },
                        href: "/projects",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          onClick: handleClose,
                          children: "Projects"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        style: {
                          textDecoration: 'none'
                        },
                        href: "/contact",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          onClick: handleClose,
                          children: "Contact"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 37
                }, _this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

_s(Navbar, "U8jTkOa8UNZB+VqxzZ/A29KzAyQ=", false, function () {
  return [useStyles];
});

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiTmF2YmFyIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImFuY2hvclJlZiIsInVzZVJlZiIsImhhbmRsZVRvZ2dsZSIsInByZXZPcGVuIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZUxpc3RLZXlEb3duIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJmb2N1cyIsImNvbG9yIiwidW5kZWZpbmVkIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsY0FBUSxFQUFFO0FBRFIsS0FEK0I7QUFJckNDLGNBQVUsRUFBRTtBQUNSQyxpQkFBVyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREwsS0FKeUI7QUFPckNDLFNBQUssRUFBRTtBQUNISixjQUFRLEVBQUU7QUFEUDtBQVA4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVllLFNBQVNLLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpC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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURIO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztHQW5GdUJWLE07VUFDSlQsUzs7O0tBRElTLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5kYmM5NDc1YmUwMmQ3YjUwOTU1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xyXG5pbXBvcnQgR3JvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Hcm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXHJcbiAgICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByZXZPcGVuLmN1cnJlbnQgPT09IHRydWUgJiYgb3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xyXG4gICAgfSwgW29wZW5dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cIi9cIj48aW1nIHNyYz1cIi9pbWFnZXMvZmF2aWNvbi5wbmdcIiBhbHQ9XCJcIi8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2FuY2hvclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnbWVudS1saXN0LWdyb3cnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz4gIE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BwZXIgb3Blbj17b3Blbn0gYW5jaG9yRWw9e2FuY2hvclJlZi5jdXJyZW50fSByb2xlPXt1bmRlZmluZWR9IHRyYW5zaXRpb24gZGlzYWJsZVBvcnRhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbn0gaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnIH19IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkhvbWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZScgfX0gaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5BYm91dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyB9fSBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2plY3RzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnIH19IGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Db250YWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9