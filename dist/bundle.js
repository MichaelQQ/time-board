webpackJsonp([0],{"../node_modules/react-hot-loader/index.js":function(e,t,r){e.exports=r("../node_modules/react-hot-loader/lib/index.js")},"../node_modules/react-hot-loader/lib/AppContainer.js":function(e,t,r){"use strict";e.exports=r("../node_modules/react-hot-loader/lib/AppContainer.prod.js")},"../node_modules/react-hot-loader/lib/AppContainer.prod.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r("../node_modules/react/react.js"),a=c.Component,_=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),t}(a);e.exports=_},"../node_modules/react-hot-loader/lib/index.js":function(e,t,r){"use strict";e.exports=r("../node_modules/react-hot-loader/lib/index.prod.js")},"../node_modules/react-hot-loader/lib/index.prod.js":function(e,t,r){"use strict";e.exports.AppContainer=r("../node_modules/react-hot-loader/lib/AppContainer.js")},"./app.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r("../node_modules/react/react.js"),c=r.n(s),a=r("../node_modules/react-redux/es/index.js"),_=r("./time/index.js"),u=r("./settings/index.js"),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=c.a.createElement,f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"UPDATE_STYLE"})}},{key:"render",value:function(){var e=this.props.style;return l("div",{className:"wrapper"},l(u.a),l(_.a),l("div",{style:{position:"absolute",right:"0",bottom:"0"}},""+e.color))}}]),t}(c.a.Component),p=function(e){return{style:e.style}},g=r.i(a.connect)(p,null)(f);t.a=g;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"h","/Users/MST-MBPR/coding/time-board/src/app.js"),__REACT_HOT_LOADER__.register(f,"App","/Users/MST-MBPR/coding/time-board/src/app.js"),__REACT_HOT_LOADER__.register(p,"mapStateToProps","/Users/MST-MBPR/coding/time-board/src/app.js"),__REACT_HOT_LOADER__.register(g,"default","/Users/MST-MBPR/coding/time-board/src/app.js"))}()},"./index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("../node_modules/react/react.js"),o=r.n(n),i=r("../node_modules/react-dom/index.js"),s=r.n(i),c=r("../node_modules/redux/es/index.js"),a=r("../node_modules/react-redux/es/index.js"),_=r("./app.js"),u=r("./settings/reducer.js"),d=r("./time/reducer.js"),l=r("./time/styleReducer.js"),f=r("../node_modules/react-hot-loader/index.js"),p=(r.n(f),o.a.createElement),g=r.i(c.combineReducers)({settings:u.a,timeConfig:d.a,style:l.a}),T=r.i(c.createStore)(g),m=function(e){s.a.render(p(a.Provider,{store:T},p(f.AppContainer,null,p(e,null,""))),document.getElementById("root"))};m(_.a);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"h","/Users/MST-MBPR/coding/time-board/src/index.js"),__REACT_HOT_LOADER__.register(g,"reducer","/Users/MST-MBPR/coding/time-board/src/index.js"),__REACT_HOT_LOADER__.register(T,"store","/Users/MST-MBPR/coding/time-board/src/index.js"),__REACT_HOT_LOADER__.register(m,"render","/Users/MST-MBPR/coding/time-board/src/index.js"))}()},"./settings/counter.js":function(e,t,r){"use strict";var n=r("../node_modules/react/react.js"),o=r.n(n),i=o.a.createElement,s={display:"inline-block",background:"white",color:"black",borderRadius:"100%",margin:"0 .5em",padding:"0 .2em"},c=function(e){var t=e.fontSize,r=e.decrease,n=e.increase;return i("div",{style:{display:"inline-block"}},i("a",{href:"javascript: void 0",onClick:r},i("div",{style:s},"-")),i("div",{style:{display:"inline-block"}},t),i("a",{href:"javascript: void 0",onClick:n},i("div",{style:s},"+")))},a=c;t.a=a;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"h","/Users/MST-MBPR/coding/time-board/src/settings/counter.js"),__REACT_HOT_LOADER__.register(s,"btnStyle","/Users/MST-MBPR/coding/time-board/src/settings/counter.js"),__REACT_HOT_LOADER__.register(c,"Counter","/Users/MST-MBPR/coding/time-board/src/settings/counter.js"),__REACT_HOT_LOADER__.register(a,"default","/Users/MST-MBPR/coding/time-board/src/settings/counter.js"))}()},"./settings/index.js":function(e,t,r){"use strict";var n=r("../node_modules/react/react.js"),o=r.n(n),i=r("../node_modules/react-redux/es/index.js"),s=r("./settings/switch.js"),c=r("./settings/counter.js"),a=o.a.createElement,_={margin:"1em 0",listStyle:"none"},u={margin:"0 .5em"},d={width:"100%",position:"absolute",bottom:"0"},l=function(e){var t=e.settings,r=e.showSettings,n=e.toggleHour12,o=e.toggleFixTimeColor,i=e.changeFontSize,l=t.fixColor,f=t.show,p=t.fontSize,g=t.hour12;return a("div",{className:f?"settings active":"settings"},a("label",{style:{right:"-40px",top:"10px",position:"absolute",color:"black"},onClick:r},a("i",{className:"fa fa-2x fa-cog "+(f?"active":""),"aria-hidden":"true"})),a("div",null,a("h2",{style:{margin:".5em 0",textAlign:"center"}},"SETTINGS"),a("div",{style:_},a(s.a,{setting:g,toggle:n}),a("span",{style:u},"12-hour format")),a("div",{style:_},a(s.a,{setting:l,toggle:o}),a("span",{style:u},"White time color")),a("div",{style:_},a("span",{style:u},"font size"),a(c.a,{fontSize:p,decrease:i.bind(null,-1),increase:i.bind(null,1)})),a("div",{style:d},"MichaelQQ © All Rights Reversed")))},f=function(e){return{settings:e.settings}},p=function(e){return{showSettings:function(){return e({type:"TOGGLE_SHOW_SETTINGS"})},toggleHour12:function(){return e({type:"TOGGLE_HOUR12"})},toggleFixTimeColor:function(){return e({type:"TOGGLE_FIX_TIME_COLOR"})},changeFontSize:function(t){return e({type:"CHANGE_FONT_SIZE",value:t})}}},g=r.i(i.connect)(f,p)(l);t.a=g;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"h","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(_,"listStyle","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(u,"spanStyle","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(d,"aboutStyle","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(l,"Settings","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(f,"mapStateToProps","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(p,"mapDispatchToProps","/Users/MST-MBPR/coding/time-board/src/settings/index.js"),__REACT_HOT_LOADER__.register(g,"default","/Users/MST-MBPR/coding/time-board/src/settings/index.js"))}()},"./settings/reducer.js":function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o={fixColor:!1,show:!1,fontSize:10,hour12:!0},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"TOGGLE_HOUR12":return n({},e,{hour12:!e.hour12});case"TOGGLE_SHOW_SETTINGS":return n({},e,{show:!e.show});case"TOGGLE_FIX_TIME_COLOR":return n({},e,{fixColor:!e.fixColor});case"CHANGE_FONT_SIZE":var r=e.fontSize+t.value;return r=r<1?1:r,r=r>17?17:r,n({},e,{fontSize:r});default:return e}},s=i;t.a=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"initState","/Users/MST-MBPR/coding/time-board/src/settings/reducer.js"),__REACT_HOT_LOADER__.register(i,"reducer","/Users/MST-MBPR/coding/time-board/src/settings/reducer.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/MST-MBPR/coding/time-board/src/settings/reducer.js"))}()},"./settings/switch.js":function(e,t,r){"use strict";var n=r("../node_modules/react/react.js"),o=r.n(n),i=o.a.createElement,s=function(e){var t=e.setting,r=e.toggle;return i("div",{style:{fontSize:".5em",textAlign:"left"},className:t?"switch active":"switch",onClick:r},i("div",{className:"switch-inner"}))},c=s;t.a=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"h","/Users/MST-MBPR/coding/time-board/src/settings/switch.js"),__REACT_HOT_LOADER__.register(s,"Switch","/Users/MST-MBPR/coding/time-board/src/settings/switch.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/MST-MBPR/coding/time-board/src/settings/switch.js"))}()},"./time/index.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r("../node_modules/react/react.js"),c=r.n(s),a=r("../node_modules/react-redux/es/index.js"),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=c.a.createElement,l=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={time:(new Date).toLocaleTimeString("lookup",r.props.timeConfig)},r.updateTime=r.updateTime.bind(r),r}return i(t,e),u(t,[{key:"updateTime",value:function(){var e=this;this.setState(function(t,r){return _({},t,{time:(new Date).toLocaleTimeString("lookup",e.props.timeConfig)})})}},{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.interval=window.setInterval(this.updateTime,1e3),this.interval2=window.setInterval(function(){return e.props.dispatch({type:"UPDATE_STYLE"})},3e4)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),clearInterval(this.interval),clearInterval(this.interval2)}},{key:"render",value:function(){var e=this.props,t=e.settings,r=e.style,n=t.fixColor,o=t.show,i=t.fontSize;return d("div",{className:o?"time active":"time",style:n?_({},r,{color:"white",fontSize:i+"vw"}):_({},r,{fontSize:i+"vw"})},this.state.time)}}]),t}(c.a.Component),f=function(e){return{settings:e.settings,timeConfig:e.timeConfig,style:e.style}},p=r.i(a.connect)(f,null)(l);t.a=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"h","/Users/MST-MBPR/coding/time-board/src/time/index.js"),__REACT_HOT_LOADER__.register(l,"Time","/Users/MST-MBPR/coding/time-board/src/time/index.js"),__REACT_HOT_LOADER__.register(f,"mapStateToProps","/Users/MST-MBPR/coding/time-board/src/time/index.js"),__REACT_HOT_LOADER__.register(p,"default","/Users/MST-MBPR/coding/time-board/src/time/index.js"))}()},"./time/reducer.js":function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o={hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch(arguments[1].type){case"TOGGLE_HOUR12":return n({},e,{hour12:!e.hour12});default:return e}},s=i;t.a=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"initState","/Users/MST-MBPR/coding/time-board/src/time/reducer.js"),__REACT_HOT_LOADER__.register(i,"reducer","/Users/MST-MBPR/coding/time-board/src/time/reducer.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/MST-MBPR/coding/time-board/src/time/reducer.js"))}()},"./time/styleReducer.js":function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o={color:"rgb(255, 255, 255)"},i=function(){return Math.floor(256*Math.random())},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch(arguments[1].type){case"UPDATE_STYLE":var t=Math.random().toFixed(2),r="rgba( "+i()+", "+i()+", "+i()+", "+t+")";return console.log(r),n({},e,{backgroundColor:r,color:r});default:return e}},c=s;t.a=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"initState","/Users/MST-MBPR/coding/time-board/src/time/styleReducer.js"),__REACT_HOT_LOADER__.register(i,"getColorCode","/Users/MST-MBPR/coding/time-board/src/time/styleReducer.js"),__REACT_HOT_LOADER__.register(s,"reducer","/Users/MST-MBPR/coding/time-board/src/time/styleReducer.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/MST-MBPR/coding/time-board/src/time/styleReducer.js"))}()}},["./index.js"]);