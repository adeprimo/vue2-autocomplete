/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Autocomplete @ Version 0.0.3,
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2Autocomplete"] = factory();
	else
		root["Vue2Autocomplete"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vueAutocomplete = __webpack_require__(1);

	var _vueAutocomplete2 = _interopRequireDefault(_vueAutocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _vueAutocomplete2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(3),
	  /* template */
	  __webpack_require__(4),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/petter/src/vue2-autocomplete/src/js/components/vue-autocomplete.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] vue-autocomplete.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e47ae2be", Component.options)
	  } else {
	    hotAPI.reload("data-v-e47ae2be", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
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
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* Vue 2 Autocomplete @ Version 0.0.1
	*
	*/

	exports.default = {

	  props: {
	    id: String,
	    className: String,
	    placeholder: String,

	    // Intial Value
	    initValue: {
	      type: String,
	      default: ""
	    },

	    // Anchor of list
	    anchor: {
	      type: String,
	      required: true
	    },

	    // Label of list
	    label: String,

	    // ajax URL will be fetched
	    url: {
	      type: String,
	      required: true
	    },

	    // query param
	    param: {
	      type: String,
	      default: 'q'
	    },

	    // Custom Params
	    customParams: Object,

	    // minimum length
	    min: {
	      type: Number,
	      default: 0
	    },

	    // Callback
	    onInput: Function,
	    onShow: Function,
	    onClick: Function,
	    onBlur: Function,
	    onHide: Function,
	    onFocus: Function,
	    onSelect: Function,
	    onBeforeAjax: Function,
	    onAjaxProgress: Function,
	    onAjaxLoaded: Function

	  },

	  data: function data() {
	    return {
	      showList: false,
	      type: "",
	      json: [],
	      focusList: ""
	    };
	  },


	  methods: {

	    // Netralize Autocomplete
	    clearInput: function clearInput() {
	      this.showList = false;
	      this.type = "";
	      this.json = [];
	      this.focusList = "";
	    },


	    // Get the original data
	    cleanUp: function cleanUp(data) {
	      return JSON.parse(JSON.stringify(data));
	    },
	    input: function input(val) {
	      this.showList = true;

	      // Callback Event
	      this.onInput ? this.onInput(val) : null;

	      // Get The Data
	      this.getData(val);
	    },
	    showAll: function showAll() {
	      this.json = [];

	      this.getData("");

	      // Callback Event
	      this.onShow ? this.onShow() : null;

	      this.showList = true;
	    },
	    hideAll: function hideAll(e) {
	      var _this = this;

	      // Callback Event
	      this.onBlur ? this.onBlur(e) : null;

	      setTimeout(function () {

	        // Callback Event
	        _this.onHide ? _this.onHide(e) : null;

	        _this.showList = false;
	      }, 250);
	    },
	    click: function click(e) {
	      // Callback Event
	      this.onClick ? this.onClick(e) : null;
	    },
	    focus: function focus(e) {
	      this.focusList = -1;

	      // Callback Event
	      this.showAll();
	      this.onFocus ? this.onFocus(e) : null;
	    },
	    mousemove: function mousemove(i) {
	      this.focusList = i;
	    },
	    keydown: function keydown(e) {
	      var key = e.keyCode;

	      // Disable when list isn't showing up
	      if (!this.showList) return;

	      switch (key) {
	        case 40:
	          //down
	          this.focusList++;
	          this.type = this.json[this.focusList][this.anchor];
	          break;
	        case 38:
	          //up
	          this.focusList--;
	          this.type = this.json[this.focusList][this.anchor];
	          break;
	        case 13:
	          //enter
	          this.showList = false;
	          document.getElementById(this.id).blur();
	          break;
	        case 27:
	          //esc
	          this.showList = false;
	          document.getElementById(this.id).blur();
	          break;
	      }

	      // When cursor out of range
	      var listLength = this.json.length;
	      this.focusList = this.focusList > listLength ? 0 : this.focusList < 0 ? listLength : this.focusList;
	    },
	    activeClass: function activeClass(i) {
	      return {
	        'focus-list': i == this.focusList
	      };
	    },
	    selectList: function selectList(data) {
	      var clean = this.cleanUp(data);

	      // Put the selected data to type (model)
	      this.type = clean[this.anchor];

	      this.showList = false;

	      /**
	      * Callback Event
	      * Deep clone of the original object
	      */
	      this.onSelect ? this.onSelect(clean, this) : null;
	    },
	    getData: function getData(val) {
	      var self = this;

	      if (val.length < this.min) return;

	      if (this.url != null) {

	        // Callback Event
	        this.onBeforeAjax ? this.onBeforeAjax(val, this) : null;

	        var ajax = new XMLHttpRequest();

	        var params = "";
	        var cb = this.customParams;
	        if (cb) {
	          Object.keys(cb).forEach(function (key) {
	            params += "&" + key + "=" + cb[key];
	          });
	        }

	        params += '&limit=99999';

	        ajax.open('GET', this.url + "?" + this.param + "=" + val + params, true);
	        ajax.send();

	        ajax.addEventListener('progress', function (data) {
	          if (data.lengthComputable) {

	            // Callback Event
	            this.onAjaxProgress ? this.onAjaxProgress(data) : null;
	          }
	        });

	        ajax.addEventListener('loadend', function (data) {
	          var json = JSON.parse(this.responseText);

	          // Callback Event
	          this.onAjaxLoaded ? this.onAjaxLoaded(json) : null;

	          // Make the typed request show up as first result in the list.
	          json.items.splice(0, 0, { 'name': val, 'slug': val });

	          self.json = json.items;
	        });
	      }
	    },
	    setValue: function setValue(val) {
	      this.type = val;
	    }
	  },

	  created: function created() {
	    // Sync parent model with initValue Props
	    this.type = this.initValue ? this.initValue : null;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: (_vm.className ? _vm.className + '-wrapper ' : '') + 'autocomplete-wrapper'
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.type),
	      expression: "type"
	    }],
	    class: (_vm.type ? 'set ' : '') + (_vm.className ? _vm.className + ' ' : '') + 'autocomplete-input',
	    attrs: {
	      "type": "text",
	      "id": _vm.id,
	      "placeholder": _vm.placeholder,
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": (_vm.type)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.type = $event.target.value
	      }, function($event) {
	        _vm.input(_vm.type)
	      }],
	      "blur": _vm.hideAll,
	      "keydown": _vm.keydown,
	      "focus": _vm.focus,
	      "click": _vm.click
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showList),
	      expression: "showList"
	    }],
	    class: (_vm.className ? _vm.className + '-list ' : '') + 'autocomplete transition autocomplete-list'
	  }, [_c('ul', [_vm._l((_vm.json), function(data, i) {
	    return [_c('li', {
	      class: _vm.activeClass(i)
	    }, [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.selectList(data)
	        },
	        "mousemove": function($event) {
	          _vm.mousemove(i)
	        }
	      }
	    }, [_c('b', [_vm._v(_vm._s(data[_vm.anchor]))])])])]
	  })], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e47ae2be", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;