/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    router.addRoutes([{
        name: 'nova-modules',
        path: '/nova-modules',
        component: __webpack_require__(2),
        props: { resourceName: 'modules' }
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
throw new Error("Cannot find module \"laravel-nova\"");
throw new Error("Cannot find module \"laravel-nova\"");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Deletable"], __WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Filterable"], __WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Paginatable"], __WEBPACK_IMPORTED_MODULE_1_laravel_nova__["PerPageable"], __WEBPACK_IMPORTED_MODULE_1_laravel_nova__["InteractsWithResourceInformation"], __WEBPACK_IMPORTED_MODULE_1_laravel_nova__["InteractsWithQueryString"]],

    props: {
        field: {
            type: Object
        },
        resourceName: {
            type: String,
            required: true
        },
        viaResource: {
            default: ''
        },
        viaResourceId: {
            default: ''
        }
    },

    data: function data() {
        return {
            actionEventsRefresher: null,
            initialLoading: true,
            loading: true,
            syncing: false,
            resourceResponse: null,
            resources: [],
            softDeletes: false,
            selectedResources: [],
            selectAllMatchingResources: false,
            allMatchingResourceCount: 0,

            deleteModalOpen: false,

            actions: [],
            pivotActions: {},

            search: '',
            authorizedToRelate: false,

            orderBy: '',
            orderByDirection: '',
            trashed: ''
        };
    },

    /**
     * Mount the component and retrieve its initial data.
     */
    created: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            this.initializeSearchFromQueryString();
                            this.initializePerPageFromQueryString();
                            this.initializeTrashedFromQueryString();
                            this.initializeOrderingFromQueryString();

                            _context.next = 6;
                            return this.initializeFilters();

                        case 6:
                            _context.next = 8;
                            return this.getResources();

                        case 8:

                            this.getActions();

                            this.initialLoading = false;

                            this.$watch(function () {
                                return _this.resourceName + _this.encodedFilters + _this.currentSearch + _this.currentPage + _this.perPage + _this.currentOrderBy + _this.currentOrderByDirection + _this.currentTrashed;
                            }, function () {
                                _this.getResources();
                            });

                            // Refresh the action events
                            if (this.resourceName === 'action-events') {
                                Nova.$on('refresh-action-events', function () {
                                    _this.getResources();
                                });

                                this.actionEventsRefresher = setInterval(function () {
                                    if (document.hasFocus()) {
                                        _this.getResources();
                                    }
                                }, 15 * 1000);
                            }

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function created() {
            return _ref.apply(this, arguments);
        }

        return created;
    }(),
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        next();
        this.initializeState(false);
    },


    /**
     * Unbind the keydown even listener when the component is destroyed
     */
    destroyed: function destroyed() {
        if (this.actionEventsRefresher) {
            clearInterval(this.actionEventsRefresher);
        }
    },


    methods: {
        /**
         * Select all of the available resources
         */
        selectAllResources: function selectAllResources() {
            this.selectedResources = this.resources.slice(0);
        },


        /**
         * Toggle the selection of all resources
         */
        toggleSelectAll: function toggleSelectAll(event) {
            if (this.selectAllChecked) return this.clearResourceSelections();
            this.selectAllResources();
        },


        /**
         * Toggle the selection of all matching resources in the database
         */
        toggleSelectAllMatching: function toggleSelectAllMatching() {
            if (!this.selectAllMatchingResources) {
                this.selectAllResources();
                this.selectAllMatchingResources = true;

                return;
            }

            this.selectAllMatchingResources = false;
        },


        /*
         * Update the resource selection status
         */
        updateSelectionStatus: function updateSelectionStatus(resource) {
            if (!_(this.selectedResources).includes(resource)) return this.selectedResources.push(resource);
            var index = this.selectedResources.indexOf(resource);
            if (index > -1) return this.selectedResources.splice(index, 1);
        },


        /**
         * Get the resources based on the current page, search, filters, etc.
         */
        getResources: function getResources() {
            var _this2 = this;

            this.loading = true;

            this.$nextTick(function () {
                _this2.clearResourceSelections();

                return Object(__WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Minimum"])(Nova.request().get('/nova-api/' + _this2.resourceName, {
                    params: _this2.resourceRequestQueryString
                }), 300).then(function (_ref2) {
                    var data = _ref2.data;

                    _this2.resources = [];

                    _this2.resourceResponse = data;
                    _this2.resources = data.resources;
                    _this2.softDeletes = data.softDeletes;
                    _this2.perPage = data.per_page;

                    _this2.loading = false;

                    _this2.getAllMatchingResourceCount();

                    Nova.$emit('resources-loaded');
                });
            });
        },


        /**
         * Get the actions available for the current resource.
         */
        getActions: function getActions() {
            var _this3 = this;

            this.actions = [];
            return Nova.request().get('/nova-api/' + this.resourceName + '/actions', {
                params: {
                    viaResource: this.viaResource,
                    viaResourceId: this.viaResourceId
                }
            }).then(function (response) {
                _this3.actions = _.filter(response.data.actions, function (action) {
                    return !action.onlyOnDetail;
                });
            });
        },


        /**
         * Execute a search against the resource.
         */
        performSearch: function performSearch(event) {
            var _this4 = this;

            this.debouncer(function () {
                // Only search if we're not tabbing into the field
                if (event.which != 9) {
                    var _this4$updateQueryStr;

                    _this4.updateQueryString((_this4$updateQueryStr = {}, _defineProperty(_this4$updateQueryStr, _this4.pageParameter, 1), _defineProperty(_this4$updateQueryStr, _this4.searchParameter, _this4.search), _this4$updateQueryStr));
                }
            });
        },


        debouncer: _.debounce(function (callback) {
            return callback();
        }, 500),

        /**
         * Clear the selected resouces and the "select all" states.
         */
        clearResourceSelections: function clearResourceSelections() {
            this.selectAllMatchingResources = false;
            this.selectedResources = [];
        },


        /**
         * Get the count of all of the matching resources.
         */
        getAllMatchingResourceCount: function getAllMatchingResourceCount() {
            var _this5 = this;

            Nova.request().get('/nova-api/' + this.resourceName + '/count', {
                params: this.resourceRequestQueryString
            }).then(function (response) {
                _this5.allMatchingResourceCount = response.data.count;
            });
        },


        /**
         * Sort the resources by the given field.
         */
        orderByField: function orderByField(field) {
            var _updateQueryString;

            var direction = this.currentOrderByDirection == 'asc' ? 'desc' : 'asc';
            if (this.currentOrderBy != field.attribute) {
                direction = 'asc';
            }
            this.updateQueryString((_updateQueryString = {}, _defineProperty(_updateQueryString, this.orderByParameter, field.attribute), _defineProperty(_updateQueryString, this.orderByDirectionParameter, direction), _updateQueryString));
        },


        /**
         * Sync the current search value from the query string.
         */
        initializeSearchFromQueryString: function initializeSearchFromQueryString() {
            this.search = this.currentSearch;
        },


        /**
         * Sync the current order by values from the query string.
         */
        initializeOrderingFromQueryString: function initializeOrderingFromQueryString() {
            this.orderBy = this.currentOrderBy;
            this.orderByDirection = this.currentOrderByDirection;
        },


        /**
         * Sync the trashed state values from the query string.
         */
        initializeTrashedFromQueryString: function initializeTrashedFromQueryString() {
            this.trashed = this.currentTrashed;
        },


        /**
         * Update the trashed constraint for the resource listing.
         */
        trashedChanged: function trashedChanged(trashedStatus) {
            this.trashed = trashedStatus;
            this.updateQueryString(_defineProperty({}, this.trashedParameter, this.trashed));
        },


        /**
         * Update the per page parameter in the query string
         */
        updatePerPageChanged: function updatePerPageChanged(perPage) {
            this.perPage = perPage;
            this.perPageChanged();
        },


        /**
         * Select the next page.
         */
        selectPage: function selectPage(page) {
            this.updateQueryString(_defineProperty({}, this.pageParameter, page));
        },


        /**
         * Sync the per page values from the query string.
         */
        initializePerPageFromQueryString: function initializePerPageFromQueryString() {
            this.perPage = this.$route.query[this.perPageParameter] || 25;
        }
    },

    computed: {
        /**
         * Determine if the resource has any filters
         */
        hasFilters: function hasFilters() {
            return this.$store.getters[this.resourceName + '/hasFilters'];
        },


        /**
         * Get the name of the search query string variable.
         */
        searchParameter: function searchParameter() {
            return this.resourceName + '_search';
        },


        /**
         * Get the name of the order by query string variable.
         */
        orderByParameter: function orderByParameter() {
            return this.resourceName + '_order';
        },


        /**
         * Get the name of the order by direction query string variable.
         */
        orderByDirectionParameter: function orderByDirectionParameter() {
            return this.resourceName + '_direction';
        },


        /**
         * Get the name of the trashed constraint query string variable.
         */
        trashedParameter: function trashedParameter() {
            return this.resourceName + '_trashed';
        },


        /**
         * Get the name of the per page query string variable.
         */
        perPageParameter: function perPageParameter() {
            return this.resourceName + '_per_page';
        },


        /**
         * Get the name of the page query string variable.
         */
        pageParameter: function pageParameter() {
            return this.resourceName + '_page';
        },


        /**
         * Build the resource request query string.
         */
        resourceRequestQueryString: function resourceRequestQueryString() {
            return {
                search: this.currentSearch,
                filters: this.encodedFilters,
                orderBy: this.currentOrderBy,
                orderByDirection: this.currentOrderByDirection,
                perPage: this.currentPerPage,
                trashed: this.currentTrashed,
                page: this.currentPage,
                viaResource: this.viaResource,
                viaResourceId: this.viaResourceId
            };
        },


        /**
         * Determine if all resources are selected.
         */
        selectAllChecked: function selectAllChecked() {
            return this.selectedResources.length == this.resources.length;
        },


        /**
         * Determine if all matching resources are selected.
         */
        selectAllMatchingChecked: function selectAllMatchingChecked() {
            return this.selectedResources.length == this.resources.length && this.selectAllMatchingResources;
        },


        /**
         * Get the IDs for the selected resources.
         */
        selectedResourceIds: function selectedResourceIds() {
            return _.map(this.selectedResources, function (resource) {
                return resource.id.value;
            });
        },


        /**
         * Get all of the actions available to the resource.
         */
        allActions: function allActions() {
            return this.actions;
        },


        /**
         * Determine if the resource has any actions available.
         */
        actionsAreAvailable: function actionsAreAvailable() {
            return this.allActions.length > 0;
        },


        /**
         * Get the current search value from the query string.
         */
        currentSearch: function currentSearch() {
            return this.$route.query[this.searchParameter] || '';
        },


        /**
         * Get the current order by value from the query string.
         */
        currentOrderBy: function currentOrderBy() {
            return this.$route.query[this.orderByParameter] || '';
        },


        /**
         * Get the current order by direction from the query string.
         */
        currentOrderByDirection: function currentOrderByDirection() {
            return this.$route.query[this.orderByDirectionParameter] || 'desc';
        },


        /**
         * Get the current trashed constraint value from the query string.
         */
        currentTrashed: function currentTrashed() {
            return this.$route.query[this.trashedParameter] || '';
        },


        /**
         * Get the singular name for the resource
         */
        singularName: function singularName() {
            return Object(__WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Capitalize"])(this.resourceInformation.singularLabel);
        },


        /**
         * Get the selected resources for the action selector.
         */
        selectedResourcesForActionSelector: function selectedResourcesForActionSelector() {
            return this.selectAllMatchingChecked ? 'all' : this.selectedResourceIds;
        },


        /**
         * Determine if there are any resources for the view
         */
        hasResources: function hasResources() {
            return Boolean(this.resources.length > 0);
        },


        /**
         * Determine whether to show the selection checkboxes for resources
         */
        shouldShowCheckBoxes: function shouldShowCheckBoxes() {
            return Boolean(this.hasResources && !this.viaHasOne) && Boolean(this.actionsAreAvailable || this.authorizedToDeleteAnyResources || this.canShowDeleteMenu);
        },


        /**
         * Determine if any selected resources may be deleted.
         */
        authorizedToDeleteSelectedResources: function authorizedToDeleteSelectedResources() {
            return Boolean(_.find(this.selectedResources, function (resource) {
                return resource.authorizedToDelete;
            }));
        },


        /**
         * Determine if any selected resources may be force deleted.
         */
        authorizedToForceDeleteSelectedResources: function authorizedToForceDeleteSelectedResources() {
            return Boolean(_.find(this.selectedResources, function (resource) {
                return resource.authorizedToForceDelete;
            }));
        },


        /**
         * Determine if the user is authorized to delete any listed resource.
         */
        authorizedToDeleteAnyResources: function authorizedToDeleteAnyResources() {
            return this.resources.length > 0 && Boolean(_.find(this.resources, function (resource) {
                return resource.authorizedToDelete;
            }));
        },


        /**
         * Determine if the user is authorized to force delete any listed resource.
         */
        authorizedToForceDeleteAnyResources: function authorizedToForceDeleteAnyResources() {
            return this.resources.length > 0 && Boolean(_.find(this.resources, function (resource) {
                return resource.authorizedToForceDelete;
            }));
        },


        /**
         * Determine if any selected resources may be restored.
         */
        authorizedToRestoreSelectedResources: function authorizedToRestoreSelectedResources() {
            return Boolean(_.find(this.selectedResources, function (resource) {
                return resource.authorizedToRestore;
            }));
        },


        /**
         * Determine if the user is authorized to restore any listed resource.
         */
        authorizedToRestoreAnyResources: function authorizedToRestoreAnyResources() {
            return this.resources.length > 0 && Boolean(_.find(this.resources, function (resource) {
                return resource.authorizedToRestore;
            }));
        },


        /**
         * Determinw whether the delete menu should be shown to the user
         */
        shouldShowDeleteMenu: function shouldShowDeleteMenu() {
            return Boolean(this.selectedResources.length > 0) && this.canShowDeleteMenu;
        },


        /**
         * Determine whether the user is authorized to perform actions on the delete menu
         */
        canShowDeleteMenu: function canShowDeleteMenu() {
            return Boolean(this.authorizedToDeleteSelectedResources || this.authorizedToForceDeleteSelectedResources || this.authorizedToRestoreSelectedResources || this.selectAllMatchingChecked);
        },


        /**
         * Return the heading for the view
         */
        headingTitle: function headingTitle() {
            return this.loading ? '&nbsp;' : this.resourceResponse.label;
        },


        /**
         * Return the resource count label
         */
        resourceCountLabel: function resourceCountLabel() {
            var first = this.perPage * (this.currentPage - 1);

            return this.resources.length && first + 1 + '-' + (first + this.resources.length) + ' ' + this.__('of') + ' ' + this.allMatchingResourceCount;
        },


        /**
         * Return the currently encoded filter string from the store
         */
        encodedFilters: function encodedFilters() {
            return this.$store.getters[this.resourceName + '/currentEncodedFilters'];
        },


        /**
         * Return the initial encoded filters from the query string
         */
        initialEncodedFilters: function initialEncodedFilters() {
            return this.$route.query[this.filterParameter] || '';
        },
        paginationComponent: function paginationComponent() {
            return 'pagination-' + (Nova.config['pagination'] || 'links');
        },
        hasNextPage: function hasNextPage() {
            return Boolean(this.resourceResponse && this.resourceResponse.next_page_url);
        },
        hasPreviousPage: function hasPreviousPage() {
            return Boolean(this.resourceResponse && this.resourceResponse.prev_page_url);
        },
        totalPages: function totalPages() {
            return Math.ceil(this.allMatchingResourceCount / this.currentPerPage);
        },


        /**
         * Get the current per page value from the query string.
         */
        currentPerPage: function currentPerPage() {
            return this.perPage;
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(7);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "loading-view",
    {
      attrs: {
        loading: _vm.initialLoading,
        dusk: _vm.resourceName + "-index-component"
      }
    },
    [
      !_vm.viaResource
        ? _c("custom-index-header", {
            staticClass: "mb-3",
            attrs: { "resource-name": _vm.resourceName }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("heading", {
        staticClass: "mb-3",
        domProps: { innerHTML: _vm._s(_vm.headingTitle) }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex" }, [
        _vm.resourceInformation.searchable && !_vm.viaHasOne
          ? _c(
              "div",
              { staticClass: "relative h-9 mb-6 flex-no-shrink" },
              [
                _c("icon", {
                  staticClass: "absolute search-icon-center ml-3 text-70",
                  attrs: { type: "search" }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass:
                    "appearance-none form-control form-input w-search pl-search",
                  attrs: {
                    "data-testid": "search-input",
                    dusk: "search",
                    placeholder: _vm.__("Search"),
                    type: "search"
                  },
                  domProps: { value: _vm.search },
                  on: {
                    keydown: function($event) {
                      $event.stopPropagation()
                      return _vm.performSearch($event)
                    },
                    search: _vm.performSearch,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full flex items-center mb-6" },
          [
            !_vm.viaResource
              ? _c("custom-index-toolbar", {
                  attrs: { "resource-name": _vm.resourceName }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "card",
        [
          _c(
            "div",
            { staticClass: "py-3 flex items-center border-b border-50" },
            [
              _c("div", { staticClass: "flex items-center" }, [
                _vm.shouldShowCheckBoxes
                  ? _c(
                      "div",
                      { staticClass: "px-3" },
                      [
                        _c(
                          "dropdown",
                          {
                            attrs: { dusk: "select-all-dropdown" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var toggle = ref.toggle
                                    return _c(
                                      "dropdown-trigger",
                                      { attrs: { "handle-click": toggle } },
                                      [
                                        _c("fake-checkbox", {
                                          attrs: {
                                            checked: _vm.selectAllChecked
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              794423292
                            )
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "dropdown-menu",
                              {
                                attrs: {
                                  slot: "menu",
                                  direction: "ltr",
                                  width: "250"
                                },
                                slot: "menu"
                              },
                              [
                                _c("div", { staticClass: "p-4" }, [
                                  _c("ul", { staticClass: "list-reset" }, [
                                    _c(
                                      "li",
                                      { staticClass: "flex items-center mb-4" },
                                      [
                                        _c(
                                          "checkbox-with-label",
                                          {
                                            attrs: {
                                              checked: _vm.selectAllChecked
                                            },
                                            on: { change: _vm.toggleSelectAll }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(_vm.__("Select All")) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "checkbox-with-label",
                                          {
                                            attrs: {
                                              dusk:
                                                "select-all-matching-button",
                                              checked:
                                                _vm.selectAllMatchingChecked
                                            },
                                            on: {
                                              change:
                                                _vm.toggleSelectAllMatching
                                            }
                                          },
                                          [
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "mr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.__(
                                                          "Select All Matching"
                                                        )
                                                      ) +
                                                      " (" +
                                                      _vm._s(
                                                        _vm.allMatchingResourceCount
                                                      ) +
                                                      ")\n                                                "
                                                  )
                                                ]
                                              )
                                            ]
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center ml-auto px-3" },
                [
                  _vm.selectedResources.length > 0
                    ? _c("action-selector", {
                        attrs: {
                          "resource-name": _vm.resourceName,
                          actions: _vm.actions,
                          "pivot-actions": _vm.pivotActions,
                          "pivot-name": _vm.pivotName,
                          "query-string": {
                            currentSearch: _vm.currentSearch,
                            encodedFilters: _vm.encodedFilters,
                            currentTrashed: _vm.currentTrashed,
                            viaResource: _vm.viaResource,
                            viaResourceId: _vm.viaResourceId
                          },
                          "selected-resources":
                            _vm.selectedResourcesForActionSelector
                        },
                        on: { actionExecuted: _vm.getResources }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("filter-menu", {
                    attrs: {
                      "resource-name": _vm.resourceName,
                      "soft-deletes": _vm.softDeletes,
                      "via-resource": _vm.viaResource,
                      "via-has-one": _vm.viaHasOne,
                      trashed: _vm.trashed,
                      "per-page": _vm.perPage
                    },
                    on: {
                      "clear-selected-filters": _vm.clearSelectedFilters,
                      "filter-changed": _vm.filterChanged,
                      "trashed-changed": _vm.trashedChanged,
                      "per-page-changed": _vm.updatePerPageChanged
                    }
                  }),
                  _vm._v(" "),
                  _vm.shouldShowDeleteMenu
                    ? _c("delete-menu", {
                        attrs: {
                          dusk: "delete-menu",
                          "soft-deletes": _vm.softDeletes,
                          resources: _vm.resources,
                          "selected-resources": _vm.selectedResources,
                          "via-many-to-many": _vm.viaManyToMany,
                          "all-matching-resource-count":
                            _vm.allMatchingResourceCount,
                          "all-matching-selected": _vm.selectAllMatchingChecked,
                          "authorized-to-delete-selected-resources":
                            _vm.authorizedToDeleteSelectedResources,
                          "authorized-to-force-delete-selected-resources":
                            _vm.authorizedToForceDeleteSelectedResources,
                          "authorized-to-delete-any-resources":
                            _vm.authorizedToDeleteAnyResources,
                          "authorized-to-force-delete-any-resources":
                            _vm.authorizedToForceDeleteAnyResources,
                          "authorized-to-restore-selected-resources":
                            _vm.authorizedToRestoreSelectedResources,
                          "authorized-to-restore-any-resources":
                            _vm.authorizedToRestoreAnyResources
                        },
                        on: {
                          deleteSelected: _vm.deleteSelectedResources,
                          deleteAllMatching: _vm.deleteAllMatchingResources,
                          forceDeleteSelected: _vm.forceDeleteSelectedResources,
                          forceDeleteAllMatching:
                            _vm.forceDeleteAllMatchingResources,
                          restoreSelected: _vm.restoreSelectedResources,
                          restoreAllMatching: _vm.restoreAllMatchingResources,
                          close: function($event) {
                            _vm.deleteModalOpen = false
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "loading-view",
            { attrs: { loading: _vm.loading } },
            [
              !_vm.resources.length
                ? _c(
                    "div",
                    {
                      staticClass: "flex justify-center items-center px-6 py-8"
                    },
                    [
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "mb-3",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "65",
                              height: "51",
                              viewBox: "0 0 65 51"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Page-1",
                                  fill: "none",
                                  "fill-rule": "evenodd"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      id: "05-blank-state",
                                      fill: "#A8B9C5",
                                      "fill-rule": "nonzero",
                                      transform: "translate(-779 -695)"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        id: "Combined-Shape",
                                        d:
                                          "M835 735h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H817v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H785c-3.313708 0-6-2.686292-6-6v-30c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375c5.053323.501725 9 4.765277 9 9.950625 0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM799 725h16v-8h-16v8zm0 2v8h16v-8h-16zm34-2v-8h-16v8h16zm-52 0h16v-8h-16v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8h-16zm18-12h16v-8h-16v8zm34 0v-8h-16v8h16zm-52 0h16v-8h-16v8zm52-10v-4c0-2.209139-1.790861-4-4-4h-44c-2.209139 0-4 1.790861-4 4v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h3",
                          { staticClass: "text-base text-80 font-normal mb-6" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.__(
                                    "No :resource matched the given criteria.",
                                    {
                                      resource: _vm.singularName.toLowerCase()
                                    }
                                  )
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "overflow-hidden overflow-x-auto relative" },
                [
                  _c("resource-table", {
                    ref: "resourceTable",
                    attrs: {
                      "authorized-to-relate": _vm.authorizedToRelate,
                      "resource-name": _vm.resourceName,
                      resources: _vm.resources,
                      "singular-name": _vm.singularName,
                      "selected-resources": _vm.selectedResources,
                      "selected-resource-ids": _vm.selectedResourceIds,
                      "actions-are-available": _vm.allActions.length > 0,
                      "should-show-checkboxes": _vm.shouldShowCheckBoxes,
                      "via-resource": _vm.viaResource,
                      "via-resource-id": _vm.viaResourceId,
                      "update-selection-status": _vm.updateSelectionStatus
                    },
                    on: {
                      order: _vm.orderByField,
                      delete: _vm.deleteResources,
                      restore: _vm.restoreResources
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.resourceResponse && _vm.resources.length > 0
                ? _c(
                    _vm.paginationComponent,
                    {
                      tag: "component",
                      attrs: {
                        next: _vm.hasNextPage,
                        previous: _vm.hasPreviousPage,
                        pages: _vm.totalPages,
                        page: _vm.currentPage
                      },
                      on: { page: _vm.selectPage }
                    },
                    [
                      _vm.resourceCountLabel
                        ? _c(
                            "span",
                            {
                              staticClass: "text-sm text-80 px-4",
                              class: {
                                "ml-auto":
                                  _vm.paginationComponent == "pagination-links"
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.resourceCountLabel) +
                                  "\n                "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);