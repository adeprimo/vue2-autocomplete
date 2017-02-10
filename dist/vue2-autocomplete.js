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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/ay/Code/vue2-autocomplete/src/js/components/vue-autocomplete.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-221192a6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-221192a6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] vue-autocomplete.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
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
	      var _this2 = this;

	      var self = this;

	      if (val.length < this.min) return;

	      if (this.url != null) {
	        var that;

	        (function () {

	          // Callback Event
	          _this2.onBeforeAjax ? _this2.onBeforeAjax(val, _this2) : null;

	          var ajax = new XMLHttpRequest();

	          var params = "";
	          var cb = _this2.customParams;
	          if (cb) {
	            Object.keys(cb).forEach(function (key) {
	              params += "&" + key + "=" + cb[key];
	            });
	          }

	          params += '&limit=99999';

	          ajax.open('GET', _this2.url + "?" + _this2.param + "=" + val + params, true);
	          ajax.send();

	          ajax.addEventListener('progress', function (data) {
	            if (data.lengthComputable) {

	              // Callback Event
	              this.onAjaxProgress ? this.onAjaxProgress(data) : null;
	            }
	          });

	          that = _this2;

	          ajax.addEventListener('loadend', function (data) {
	            var json = JSON.parse(this.responseText);

	            // Callback Event
	            this.onAjaxLoaded ? this.onAjaxLoaded(json) : null;

	            self.json = json.items;
	          });
	        })();
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
/* 3 */
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
	      "value": _vm._s(_vm.type)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.type = $event.target.value
	      }, function($event) {
	        _vm.input(_vm.type)
	      }],
	      "dblclick": _vm.showAll,
	      "blur": _vm.hideAll,
	      "keydown": _vm.keydown,
	      "focus": _vm.focus
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
	     require("vue-hot-reload-api").rerender("data-v-221192a6", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;