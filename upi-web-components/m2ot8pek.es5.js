/*! Built with http://stenciljs.com */
UpiWebComponents.loadBundle("m2ot8pek",["exports"],function(e){var t=window.UpiWebComponents.h,r=function(){function e(){this.message="Do not refresh the page"}return e.prototype.render=function(){return t("div",{class:"spinner"},t("div",{class:"label",role:"status","aria-live":"polite","aria-label":this.message,tabindex:"-1"}),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},t("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",class:"bk"}),t("circle",{class:"static-stroke",cx:"50",cy:"50",r:"40"}),t("circle",{class:"active-stroke",cx:"50",cy:"50",r:"40"},t("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",repeatCount:"indefinite",from:"0",to:"502"}),t("animate",{attributeName:"stroke-dasharray",dur:"1.5s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"}))))},Object.defineProperty(e,"is",{get:function(){return"upi-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"flex"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{message:{type:String,attr:"message"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"upi-spinner .active-stroke{stroke:currentColor;fill:none;stroke-width:6;stroke-linecap:round}upi-spinner .static-stroke{stroke:currentColor;opacity:.2;fill:none;stroke-width:10;stroke-linecap:round}upi-spinner .spinner{display:block;width:1em;height:1em}upi-spinner .label{visibility:hidden;display:block;height:0;width:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"},enumerable:!0,configurable:!0}),e}();e.UpiSpinner=r,Object.defineProperty(e,"__esModule",{value:!0})});