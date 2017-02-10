
<template>
  <div :class="(className ? className + '-wrapper ' : '') + 'autocomplete-wrapper'">
    <input  type="text"
            :id="id"
            :class="(type ? 'set ' : '') + (className ? className + ' ' : '') + 'autocomplete-input'"
            :placeholder="placeholder"
            v-model="type"
            @input="input(type)"
            @dblclick="showAll"
            @blur="hideAll"
            @keydown="keydown"
            @focus="focus"
            autocomplete="off" />
            <label :for="id">{{ label }}</label>

    <div :class="(className ? className + '-list ' : '') + 'autocomplete transition autocomplete-list'" v-show="showList">
      <ul>
        <template v-for="(data, i) in json" transition="showAll">
          <li :class="activeClass(i)">
            <a  href="#"
                @click.prevent="selectList(data)"
                @mousemove="mousemove(i)">
              <b>{{ data[anchor] }}</b>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>


<script>

  /*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
  * Licensed Under MIT (http://opensource.org/licenses/MIT)
  *
  * Vue 2 Autocomplete @ Version 0.0.1
  *
  */

  export default {

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
      onAjaxLoaded: Function,

    },

    data() {
      return {
        showList: false,
        type: "",
        json: [],
        focusList: ""
      };
    },


    methods: {

      // Netralize Autocomplete
      clearInput() {
        this.showList = false
        this.type = ""
        this.json = []
        this.focusList = ""
      },

      // Get the original data
      cleanUp(data){
        return JSON.parse(JSON.stringify(data));
      },

      input(val){
        this.showList = true;

        // Callback Event
        this.onInput ? this.onInput(val) : null

        // Get The Data
        this.getData(val)
      },

      showAll(){
        this.json = [];

        this.getData("")

        // Callback Event
        this.onShow ? this.onShow() : null

        this.showList = true;
      },

      hideAll(e){
        // Callback Event
        this.onBlur ? this.onBlur(e) : null

        setTimeout(() => {

          // Callback Event
          this.onHide ? this.onHide(e) : null

          this.showList = false;
        },250);
      },

      focus(e){
        this.focusList = -1;

        // Callback Event
        this.showAll();
        this.onFocus ? this.onFocus(e) : null
      },

      mousemove(i){
        this.focusList = i;
      },

      keydown(e){
        let key = e.keyCode;

        // Disable when list isn't showing up
        if(!this.showList) return;

        switch (key) {
          case 40: //down
            this.focusList++;
            this.type = this.json[this.focusList][this.anchor];
          break;
          case 38: //up
            this.focusList--;
            this.type = this.json[this.focusList][this.anchor];
          break;
          case 13: //enter
            this.showList = false;
            document.getElementById(this.id).blur();
          break;
          case 27: //esc
            this.showList = false;
            document.getElementById(this.id).blur();
          break;
        }

        // When cursor out of range
        let listLength = this.json.length;
        this.focusList = this.focusList > listLength ? 0 : this.focusList < 0 ? listLength : this.focusList;
      },

      activeClass(i){
        return {
          'focus-list' : i == this.focusList
        };
      },

      selectList(data){
        let clean = this.cleanUp(data);

        // Put the selected data to type (model)
        this.type = clean[this.anchor];

        this.showList = false;

        /**
        * Callback Event
        * Deep clone of the original object
        */
        this.onSelect ? this.onSelect(clean, this) : null
      },

      getData(val){
        let self = this;

        if (val.length < this.min) return;

        if(this.url != null){

          // Callback Event
          this.onBeforeAjax ? this.onBeforeAjax(val, this) : null

          let ajax = new XMLHttpRequest();

          let params = ""
            let cb = this.customParams
          if(cb) {
            Object.keys(cb).forEach((key) => {
              params += `&${key}=${cb[key]}`
            })
          }

          params += '&limit=99999'

          ajax.open('GET', `${this.url}?${this.param}=${val}${params}`, true);
          ajax.send();

          ajax.addEventListener('progress', function (data) {
            if(data.lengthComputable){

              // Callback Event
              this.onAjaxProgress ? this.onAjaxProgress(data) : null
            }
          });

          ajax.addEventListener('loadend', function (data) {
            let json = JSON.parse(this.responseText);

            // Callback Event
            this.onAjaxLoaded ? this.onAjaxLoaded(json) : null

            self.json = json.items;
          });

        }
      },

      setValue(val) {
        this.type = val
      }
    },

    created(){
      // Sync parent model with initValue Props
      this.type = this.initValue ? this.initValue : null
    }

  }

</script>
