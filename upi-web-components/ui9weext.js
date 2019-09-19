/*! Built with http://stenciljs.com */
const{h:t}=window.UpiWebComponents;var e,r,i;!function(t){t[t.right=0]="right",t[t.up=1]="up",t[t.down=2]="down"}(e||(e={})),function(t){t[t.primary=0]="primary",t[t.secondary=1]="secondary",t[t.tertiary=2]="tertiary",t[t.hollow=3]="hollow",t[t.accept=4]="accept",t[t.error=5]="error",t[t.info=6]="info",t[t.gold=7]="gold"}(r||(r={})),function(t){t[t.large=0]="large",t[t.full=1]="full",t[t.small=2]="small",t[t["very-small"]=3]="very-small"}(i||(i={}));class s{constructor(){this.role="button",this.iconSprite="ui",this.color="primary",this.decorate="solid"}_getLeftSlot(e){const r=e?t("upi-spinner",null):this.icon?t("upi-svg-icon",{name:this.icon,sprite:this.iconSprite}):null;return r?t("span",{class:"flex w-em mr-2 text-xl"},r):null}_getRightSlot(r){return r in e&&t("upi-svg-icon",{name:`arrow-${r}`,class:"ml-2 text-xl"})}render(){const{role:e,color:s,size:n,decorate:o,href:l,submit:a,disabled:c}=this,p={"aria-role":e,href:l,disabled:c,tabIndex:0},u=`button \n        inline-flex \n        ${s in r?s:"primary"} \n        ${c?"disabled":""} \n        ${o} \n        ${n in i?n:""}`;return"full"===n&&this.el.classList.add("w-full"),t(l?"a":a?"button":"span",Object.assign({},p,{class:u}),this._getLeftSlot(this.processing),t("slot",null),this._getRightSlot(this.arrow))}static get is(){return"upi-button"}static get properties(){return{arrow:{type:String,attr:"arrow"},color:{type:String,attr:"color"},decorate:{type:String,attr:"decorate"},disabled:{type:Boolean,attr:"disabled"},display:{type:String,attr:"display"},el:{elementRef:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},iconSprite:{type:String,attr:"icon-sprite"},processing:{type:Boolean,attr:"processing"},role:{type:String,attr:"role"},size:{type:String,attr:"size"},submit:{type:Boolean,attr:"submit"}}}static get style(){return":root{--color--focus:dodgerblue}upi-button .button{--color-text:#202020;--background-color:#c0c0c0;--background-color--hover:#e0e0e0;--color--disabled:#bfbfbf;--color--active:var(--background-color);margin:0;display:inline-block;display:inline-flex;align-items:center;justify-content:center;height:2.5rem;padding-left:2rem;padding-right:2rem;font:16px sans-serif;border-radius:2px;cursor:pointer;text-align:center;transition:opacity .35s ease-out,background-color .35s ease-out;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;color:#202020;color:var(--color-text);border:1px solid silver;border:1px solid var(--background-color);background:silver;background:var(--background-color)}upi-button .button:hover{color:#fff;color:var(--color-text);text-decoration:none;outline:0;background-color:#e0e0e0;background-color:var(--background-color--hover)}upi-button .button:focus{outline:1px solid silver;outline-color:var(silver);outline-offset:3px}upi-button .button:active{outline:1px solid silver;outline-color:var(silver);outline-offset:3px}upi-button .button:disabled,upi-button .button:disabled:active,upi-button .button[disabled]{background:#bfbfbf;background:var(#bfbfbf);border-color:#bfbfbf;border-color:var(#bfbfbf);opacity:.5}upi-button .primary{color:#fff;background-color:#1e90ff;border-color:#1e90ff;--color-text:#ffffff;--background-color:dodgerblue;--background-color-hover:#4da9ff}upi-button .primary:hover{background-color:#4da9ff;border-color:#4da9ff}upi-button .primary:focus{outline-color:#1e90ff}upi-button .primary:active{outline-color:#1e90ff}upi-button .secondary{color:#fff;background-color:#708090;border-color:#708090;--color-text:#ffffff;--background-color:slategrey;--background-color-hover:#94a4b4}upi-button .secondary:hover{background-color:#94a4b4;border-color:#94a4b4}upi-button .secondary:focus{outline-color:#708090}upi-button .secondary:active{outline-color:#708090}upi-button .accept{color:#fff;background-color:#64a70b;border-color:#64a70b;--color-text:#ffffff;--background-color:#64a70b;--background-color-hover:#7bb32d}upi-button .accept:hover{background-color:#7bb32d;border-color:#7bb32d}upi-button .accept:focus{outline-color:#64a70b}upi-button .accept:active{outline-color:#64a70b}upi-button .error{color:#fff;background-color:#e10600;border-color:#e10600;--color-text:#ffffff;--background-color:#e10600;--background-color-hover:#de4543}upi-button .error:hover{background-color:#de4543;border-color:#de4543}upi-button .error:focus{outline-color:#e10600}upi-button .error:active{outline-color:#e10600}upi-button .info{color:#fff;background-color:#009cde;border-color:#009cde;--color-text:#ffffff;--background-color:#009cde;--background-color-hover:#45b8e6}upi-button .info:hover{background-color:#45b8e6;border-color:#45b8e6}upi-button .info:focus{outline-color:#009cde}upi-button .info:active{outline-color:#009cde}upi-button .outline{--color-text:var(--background-color);background-color:transparent!important;color:#202020;color:var(--color-text)}upi-button .outline:hover{--color-text:#ffffff;background-color:#202020!important;background-color:var(--background-color)!important;color:#fff}"}}class n{constructor(){this.sprite="ui"}render(){const e=`/svg/${this.sprite}-defs.svg#icon-${this.name}`,r=`svgi-${this.name} ${this.iconClass}`;return t("span",{class:"flex"},t("svg",{class:r},t("use",{xlinkHref:e})))}static get is(){return"upi-svg-icon"}static get properties(){return{iconClass:{type:String,attr:"icon-class"},name:{type:String,attr:"name"},sprite:{type:String,attr:"sprite"}}}}export{s as UpiButton,n as UpiSvgIcon};