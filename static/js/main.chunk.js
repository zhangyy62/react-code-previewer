!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("react-code-previewer",[],o):"object"==typeof exports?exports["react-code-previewer"]=o():e["react-code-previewer"]=o()}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./components/code-previewer/style/index.pcss":function(e,o,l){},"./components/fonts/iconfont.js":function(e,o){!function(t){var e,d='<svg><symbol id="icon-code-open" viewBox="0 0 1098 1024"><path d="M352.548571 799.451429l-28.598857 28.598857q-5.705143 5.705143-13.165714 5.705143t-13.165714-5.705143l-266.313143-266.313143q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l266.313143-266.313143q5.705143-5.705143 13.165714-5.705143t13.165714 5.705143l28.598857 28.598857q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714l-224.548571 224.548571 224.548571 224.548571q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714zM690.322286 189.732571l-213.138286 737.718857q-2.267429 7.460571-8.850286 11.117714t-13.458286 1.462857l-35.401143-9.728q-7.460571-2.267429-11.117714-8.850286t-1.462857-13.970286l213.138286-737.718857q2.267429-7.460571 8.850286-11.117714t13.458286-1.462857l35.401143 9.728q7.460571 2.267429 11.117714 8.850286t1.462857 13.970286zM1065.691429 561.737143l-266.313143 266.313143q-5.705143 5.705143-13.165714 5.705143t-13.165714-5.705143l-28.598857-28.598857q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l224.548571-224.548571-224.548571-224.548571q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l28.598857-28.598857q5.705143-5.705143 13.165714-5.705143t13.165714 5.705143l266.313143 266.313143q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714z"  ></path></symbol><symbol id="icon-code-close" viewBox="0 0 1024 1024"><path d="M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  ></path></symbol></svg>';if((e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(o){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(o,0);else{document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),o()},!1)}else document.attachEvent&&(l=o,s=t.document,n=!1,(m=function(){try{s.documentElement.doScroll("left")}catch(e){return void setTimeout(m,50)}e()})(),s.onreadystatechange=function(){"complete"==s.readyState&&(s.onreadystatechange=null,e())});function e(){n||(n=!0,l())}var l,s,n,m}(function(){var e,o,l,s,n,m;(e=document.createElement("div")).innerHTML=d,d=null,(o=e.getElementsByTagName("svg")[0])&&(o.setAttribute("aria-hidden","true"),o.style.position="absolute",o.style.width=0,o.style.height=0,o.style.overflow="hidden",l=o,(s=document.body).firstChild?(n=l,(m=s.firstChild).parentNode.insertBefore(n,m)):s.appendChild(l))})}(window)},"./components/md-previewer/style/index.pcss":function(e,o,l){},"./components/preview-layout/style/index.pcss":function(e,o,l){},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":function(e,o,l){var s={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-SG":"./node_modules/moment/locale/en-SG.js","./en-SG.js":"./node_modules/moment/locale/en-SG.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function n(e){var o=m(e);return l(o)}function m(e){if(l.o(s,e))return s[e];var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=function(){return Object.keys(s)},n.resolve=m,(e.exports=n).id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"},"./src/assets/images/hiynn-design.png":function(e,o,l){e.exports=l.p+"fd2a4c633b5391fe120066eca63890a4.png"},"./src/index.js":function(e,o,l){"use strict";l.r(o);var s=l("./node_modules/react/index.js"),n=l.n(s),m=l("./node_modules/react-dom/index.js"),t=l("./node_modules/@babel/runtime/helpers/classCallCheck.js"),d=l.n(t),a=l("./node_modules/@babel/runtime/helpers/createClass.js"),c=l.n(a),u=l("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),j=l.n(u),r=l("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),i=l.n(r),_=l("./node_modules/@babel/runtime/helpers/inherits.js"),p=l.n(_),h=l("./node_modules/react-router-dom/esm/react-router-dom.js"),y=l("./node_modules/react-router/esm/react-router.js"),v=(l("./node_modules/hiynn-design/es/hd-layout/style/index.js"),l("./node_modules/hiynn-design/es/hd-layout/index.js")),f=(l("./node_modules/antd/es/button/style/css.js"),l("./node_modules/antd/es/button/index.js")),g=l("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),b=l.n(g),w=l("./node_modules/@babel/runtime/helpers/defineProperty.js"),k=l.n(w),z=l("./node_modules/immutable/dist/immutable.es.js"),x=(l("./node_modules/antd/es/tooltip/style/css.js"),l("./node_modules/antd/es/tooltip/index.js")),C=(l("./node_modules/antd/es/icon/style/css.js"),l("./node_modules/antd/es/icon/index.js")),E=l("./node_modules/prop-types/index.js"),q=l.n(E),M=l("./node_modules/react-syntax-highlighter/dist/esm/prism-light.js"),P=l("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js"),N=l("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/javascript.js"),L=l("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/coy.js"),S=l("./node_modules/react-clipboard.js/dist/react-clipboard.js"),T=l.n(S),O=l("./node_modules/classnames/index.js"),B=l.n(O),D=(l("./components/fonts/iconfont.js"),function(e){function l(e){var o;return d()(this,l),o=j()(this,i()(l).call(this,e)),k()(b()(o),"onClipSuccess",function(){o.setState({cliped:!0})}),k()(b()(o),"onClipLeave",function(){setTimeout(function(){o.setState({cliped:!1})},300)}),o.state={cliped:!1,showCode:!1},o}return p()(l,e),c()(l,[{key:"componentWillMount",value:function(){M.a.registerLanguage("jsx",P.a),M.a.registerLanguage("javascript",N.a)}},{key:"componentDidMount",value:function(){var e=this.props.showCode;this.setState({showCode:e})}},{key:"render",value:function(){var e=this,o=this.props,l=o.children,s=o.code;return n.a.createElement("div",{className:"code-preview-container"},n.a.createElement("div",{className:"cp-component"},n.a.createElement("div",{className:"component-content"},l)),n.a.createElement("div",{className:"cp-code"},n.a.createElement("div",{className:"code-header"},n.a.createElement(T.a,{className:"copy-wrapper","data-clipboard-text":s,onSuccess:this.onClipSuccess},n.a.createElement(x.a,{title:this.state.cliped?"已复制":"复制到剪切板",onMouseLeave:this.onClipLeave},n.a.createElement("div",{className:"copy"},n.a.createElement(C.a,{type:"copy",style:{fontSize:"16px"}})))),n.a.createElement("div",{className:"code-wrapper"},n.a.createElement(x.a,{title:this.state.showCode?"隐藏代码":"显示代码"},n.a.createElement("svg",{className:"icon icon-code","aria-hidden":"true",onClick:function(){return e.setState({showCode:!e.state.showCode})}},n.a.createElement("use",{xlinkHref:this.state.showCode?"#icon-code-close":"#icon-code-open"}))))),n.a.createElement("div",{className:B()({"code-content":!0,"hide-code-content":!this.state.showCode})},n.a.createElement(M.a,{language:"jsx",style:L.a},s))))}}]),l}(s.Component));D.propTypes={showCode:q.a.bool},D.defaultProps={showCode:!0};var R=D,F=(l("./components/code-previewer/style/index.pcss"),l("./node_modules/react-markdown/lib/react-markdown.js")),G=l.n(F),H=function(e){function o(){return d()(this,o),j()(this,i()(o).apply(this,arguments))}return p()(o,e),c()(o,[{key:"componentWillMount",value:function(){M.a.registerLanguage("jsx",P.a),M.a.registerLanguage("javascript",N.a)}},{key:"render",value:function(){var e=this.props,o=e.language,l=e.value;return n.a.createElement(M.a,{language:o,style:L.a},l)}}]),o}(s.PureComponent);k()(H,"propTypes",{value:q.a.string.isRequired,language:q.a.string}),k()(H,"defaultProps",{language:null});var A=H,I=function(e){function o(){return d()(this,o),j()(this,i()(o).apply(this,arguments))}return p()(o,e),c()(o,[{key:"render",value:function(){var e=this.props.md;return n.a.createElement("div",{className:"markdown-previewer-container"},n.a.createElement(G.a,{source:e,escapeHtml:!1,renderers:{code:A}}))}}]),o}(s.PureComponent);I.propTypes={md:q.a.string.isRequired},I.defaultProps={md:null};var U=I,J=(l("./components/md-previewer/style/index.pcss"),function(e){function o(){return d()(this,o),j()(this,i()(o).apply(this,arguments))}return p()(o,e),c()(o,[{key:"render",value:function(){var e=this.props.children;return n.a.createElement("div",{className:"preview-layout-container"},e)}}]),o}(s.PureComponent));J.propTypes={},J.defaultProps={};var W=J,$=(l("./components/preview-layout/style/index.pcss"),l("./src/assets/images/hiynn-design.png")),K=l.n($),Q=function(e){function l(e){var o;return d()(this,l),o=j()(this,i()(l).call(this,e)),k()(b()(o),"toggleCollapse",function(){o.setState({sider:o.state.sider.set("collapsed",!o.state.sider.get("collapsed"))})}),o.state={sider:Object(z.a)({width:230,theme:"light",breakpoint:"lg",collapsed:!1}),title:"React Code Previewer",subTitle:"基于 React 的代码查看器"},o}return p()(l,e),c()(l,[{key:"render",value:function(){return n.a.createElement(v.a,{theme:"light",title:this.state.title,logo:n.a.createElement("img",{src:K.a,width:32})},n.a.createElement("div",{style:{minHeight:"calc(100vh - 64px)"}},n.a.createElement(W,null,n.a.createElement(U,{md:'# react-code-previewer\n\n## Install\n\n```javascript\nyarn add react-code-previewer\n```\n\n## Usage\n\n```jsx\nimport { CodePreviewer } from "react-code-previewer";\nReactDOM.render(<CodePreviewer />, mountNode);\n```\n'}),n.a.createElement(R,{code:'<PreviewLayout>\n  <MdPreviewer md={descriptionMd}></MdPreviewer>\n  <CodePreviewer code={code} showCode={true}>\n    <Button type="primary" size="large">\n      primary\n    </Button>\n  </CodePreviewer>\n  <MdPreviewer md={apiMd}></MdPreviewer>\n</PreviewLayout>\n',showCode:!0},n.a.createElement(f.a,{type:"primary",size:"large"},"primary")),n.a.createElement(U,{md:"\n\n## Api\n\n| 参数     | 说明                                         | 类型    | 默认值                                    |  版本  |\n| :------- | :------------------------------------------- | :------ | :---------------------------------------- | :----: |\n| copyable | 是否可拷贝，为对象时可设置复制文本以回调函数 | boolean | { text: string, onCopy: Function }  false | 3.14.1 |\n| copyable | 是否可拷贝，为对象时可设置复制文本以回调函数 | boolean | { text: string, onCopy: Function }  false | 3.14.1 |\n| copyable | 是否可拷贝，为对象时可设置复制文本以回调函数 | boolean | { text: string, onCopy: Function }  false | 3.14.1 |\n"}))))}}]),l}(s.Component),V=function(e){function o(){return d()(this,o),j()(this,i()(o).apply(this,arguments))}return p()(o,e),c()(o,[{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",component:Q}),"} />"))}}]),o}(s.Component);Object(m.render)(n.a.createElement(V,null),document.getElementById("root"))}},[["./src/index.js",1,2]]])});
//# sourceMappingURL=main.chunk.js.map