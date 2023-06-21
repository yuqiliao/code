/*!
  * Bootstrap util.js v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
function submit_search_annual_form(){var e=document.getElementById("qterm_id").value;return""==e&&(e=document.getElementById("mobile-globalsearch").value),""==e||(document.getElementById("globalsearchId").action="https://www.worldbank.org/en/meetings/splash/annual/searchlist?q="+e,document.getElementById("global_search").value=e,document.getElementById("globalsearchId").submit()),!1}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):(e=e||self).Util=t(e.jQuery)}(this,(function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;function t(t){var r=this,i=!1;return e(this).one(n.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||n.triggerTransitionEnd(r)}),t),this}var n={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),r=e(t).css("transition-delay"),i=parseFloat(n),o=parseFloat(r);return i||o?(n=n.split(",")[0],r=r.split(",")[0],1e3*(parseFloat(n)+parseFloat(r))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,r){for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var o=r[i],a=t[i],s=a&&n.isElement(a)?"element":(l=a,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var l},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?n.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return n.jQueryDetection(),e.fn.emulateTransitionEnd=t,e.event.special[n.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},n})),
/*!
  * Bootstrap collapse.js v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e=e||self).Collapse=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var a="collapse",s="bs.collapse",l=e.fn[a],u={toggle:!0,parent:""},c={toggle:"boolean",parent:"(string|element)"},f={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},h="show",d="collapse",p="collapsing",g="collapsed",m="width",_="height",y=".show, .collapsing",v='[data-toggle="collapse"]',b=function(){function r(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var r=[].slice.call(document.querySelectorAll(v)),i=0,o=r.length;i<o;i++){var a=r[i],s=t.getSelectorFromElement(a),l=[].slice.call(document.querySelectorAll(s)).filter((function(t){return t===e}));null!==s&&l.length>0&&(this._selector=s,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var i,l,b,w=r.prototype;return w.toggle=function(){e(this._element).hasClass(h)?this.hide():this.show()},w.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass(h)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(y)).filter((function(e){return"string"==typeof o._config.parent?e.getAttribute("data-parent")===o._config.parent:e.classList.contains(d)}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data(s))&&i._isTransitioning))){var a=e.Event(f.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){n&&(r._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(s,null));var l=this._getDimension();e(this._element).removeClass(d).addClass(p),this._element.style[l]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(g).attr("aria-expanded",!0),this.setTransitioning(!0);var u="scroll"+(l[0].toUpperCase()+l.slice(1)),c=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,(function(){e(o._element).removeClass(p).addClass(d).addClass(h),o._element.style[l]="",o.setTransitioning(!1),e(o._element).trigger(f.SHOWN)})).emulateTransitionEnd(c),this._element.style[l]=this._element[u]+"px"}}},w.hide=function(){var n=this;if(!this._isTransitioning&&e(this._element).hasClass(h)){var r=e.Event(f.HIDE);if(e(this._element).trigger(r),!r.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",t.reflow(this._element),e(this._element).addClass(p).removeClass(d).removeClass(h);var o=this._triggerArray.length;if(o>0)for(var a=0;a<o;a++){var s=this._triggerArray[a],l=t.getSelectorFromElement(s);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass(h)||e(s).addClass(g).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var u=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,(function(){n.setTransitioning(!1),e(n._element).removeClass(p).addClass(d).trigger(f.HIDDEN)})).emulateTransitionEnd(u)}}},w.setTransitioning=function(e){this._isTransitioning=e},w.dispose=function(){e.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},w._getConfig=function(e){return(e=o({},u,{},e)).toggle=Boolean(e.toggle),t.typeCheckConfig(a,e,c),e},w._getDimension=function(){return e(this._element).hasClass(m)?m:_},w._getParent=function(){var n,i=this;t.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',a=[].slice.call(n.querySelectorAll(o));return e(a).each((function(e,t){i._addAriaAndCollapsedClass(r._getTargetFromElement(t),[t])})),n},w._addAriaAndCollapsedClass=function(t,n){var r=e(t).hasClass(h);n.length&&e(n).toggleClass(g,!r).attr("aria-expanded",r)},r._getTargetFromElement=function(e){var n=t.getSelectorFromElement(e);return n?document.querySelector(n):null},r._jQueryInterface=function(t){return this.each((function(){var n=e(this),i=n.data(s),a=o({},u,{},n.data(),{},"object"==typeof t&&t?t:{});if(!i&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),i||(i=new r(this,a),n.data(s,i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}}))},i=r,b=[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return u}}],(l=null)&&n(i.prototype,l),b&&n(i,b),r}();return e(document).on(f.CLICK_DATA_API,v,(function(n){"A"===n.currentTarget.tagName&&n.preventDefault();var r=e(this),i=t.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),n=t.data(s)?"toggle":r.data();b._jQueryInterface.call(t,n)}))})),e.fn[a]=b._jQueryInterface,e.fn[a].Constructor=b,e.fn[a].noConflict=function(){return e.fn[a]=l,b._jQueryInterface},b})),
/*!
  * Bootstrap dropdown.js v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("popper.js"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","popper.js","./util.js"],t):(e=e||self).Dropdown=t(e.jQuery,e.Popper,e.Util)}(this,(function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s="dropdown",l="bs.dropdown",u="."+l,c=e.fn[s],f=new RegExp("38|40|27"),h={HIDE:"hide"+u,HIDDEN:"hidden"+u,SHOW:"show"+u,SHOWN:"shown"+u,CLICK:"click"+u,CLICK_DATA_API:"click"+u+".data-api",KEYDOWN_DATA_API:"keydown"+u+".data-api",KEYUP_DATA_API:"keyup"+u+".data-api"},d="disabled",p="show",g="dropup",m="dropright",_="dropleft",y="dropdown-menu-right",v="position-static",b='[data-toggle="dropdown"]',w=".dropdown form",C=".dropdown-menu",E=".lp__navbar-nav",A=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",O="top-start",j="top-end",D="bottom-start",P="bottom-end",I="right-start",T="left-start",S={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},N={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},q=function(){function i(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var o,c,w,q=i.prototype;return q.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(d)){var t=e(this._menu).hasClass(p);i._clearMenus(),t||this.show(!0)}},q.show=function(r){if(void 0===r&&(r=!1),!(this._element.disabled||e(this._element).hasClass(d)||e(this._menu).hasClass(p))){var o={relatedTarget:this._element},a=e.Event(h.SHOW,o),s=i._getParentFromElement(this._element);if(e(s).trigger(a),!a.isDefaultPrevented()){if(!this._inNavbar&&r){if(void 0===t)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=s:n.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(s).addClass(v),this._popper=new t(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(s).closest(E).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(p),e(s).toggleClass(p).trigger(e.Event(h.SHOWN,o))}}},q.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(d)&&e(this._menu).hasClass(p)){var t={relatedTarget:this._element},n=e.Event(h.HIDE,t),r=i._getParentFromElement(this._element);e(r).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(p),e(r).toggleClass(p).trigger(e.Event(h.HIDDEN,t)))}},q.dispose=function(){e.removeData(this._element,l),e(this._element).off(u),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},q.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},q._addEventListeners=function(){var t=this;e(this._element).on(h.CLICK,(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},q._getConfig=function(t){return t=a({},this.constructor.Default,{},e(this._element).data(),{},t),n.typeCheckConfig(s,t,this.constructor.DefaultType),t},q._getMenuElement=function(){if(!this._menu){var e=i._getParentFromElement(this._element);e&&(this._menu=e.querySelector(C))}return this._menu},q._getPlacement=function(){var t=e(this._element.parentNode),n=D;return t.hasClass(g)?(n=O,e(this._menu).hasClass(y)&&(n=j)):t.hasClass(m)?n=I:t.hasClass(_)?n=T:e(this._menu).hasClass(y)&&(n=P),n},q._detectNavbar=function(){return e(this._element).closest(".lp__navbar").length>0},q._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},q._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),a({},e,{},this._config.popperConfig)},i._jQueryInterface=function(t){return this.each((function(){var n=e(this).data(l);if(n||(n=new i(this,"object"==typeof t?t:null),e(this).data(l,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},i._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=[].slice.call(document.querySelectorAll(b)),r=0,o=n.length;r<o;r++){var a=i._getParentFromElement(n[r]),s=e(n[r]).data(l),u={relatedTarget:n[r]};if(t&&"click"===t.type&&(u.clickEvent=t),s){var c=s._menu;if(e(a).hasClass(p)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(a,t.target))){var f=e.Event(h.HIDE,u);e(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[r].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),e(c).removeClass(p),e(a).removeClass(p).trigger(e.Event(h.HIDDEN,u)))}}}},i._getParentFromElement=function(e){var t,r=n.getSelectorFromElement(e);return r&&(t=document.querySelector(r)),t||e.parentNode},i._dataApiKeydownHandler=function(t){if(!(/input|textarea/i.test(t.target.tagName)?32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(C).length):!f.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(d))){var n=i._getParentFromElement(this),r=e(n).hasClass(p);if(r||27!==t.which)if(r&&(!r||27!==t.which&&32!==t.which)){var o=[].slice.call(n.querySelectorAll(A)).filter((function(t){return e(t).is(":visible")}));if(0!==o.length){var a=o.indexOf(t.target);38===t.which&&a>0&&a--,40===t.which&&a<o.length-1&&a++,a<0&&(a=0),o[a].focus()}}else{if(27===t.which){var s=n.querySelector(b);e(s).trigger("focus")}e(this).trigger("click")}}},o=i,w=[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return S}},{key:"DefaultType",get:function(){return N}}],(c=null)&&r(o.prototype,c),w&&r(o,w),i}();return e(document).on(h.KEYDOWN_DATA_API,b,q._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API,C,q._dataApiKeydownHandler).on(h.CLICK_DATA_API+" "+h.KEYUP_DATA_API,q._clearMenus).on(h.CLICK_DATA_API,b,(function(t){t.preventDefault(),t.stopPropagation(),q._jQueryInterface.call(e(this),"toggle")})).on(h.CLICK_DATA_API,w,(function(e){e.stopPropagation()})),e.fn[s]=q._jQueryInterface,e.fn[s].Constructor=q,e.fn[s].noConflict=function(){return e.fn[s]=c,q._jQueryInterface},q})),$((function(){$(".lp__navbar_toggle").on("click",(function(e){"menu"===$(e.currentTarget).attr("aria-label")?$(this).attr("aria-label","close menu"):$(this).attr("aria-label","menu")}))}));