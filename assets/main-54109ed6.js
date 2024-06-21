class N{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(s=>s.name===e).map(s=>s.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const s=this.get(e);if(s!==void 0){if(t!=="json"&&typeof s!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return s}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const s=this.get(e);if(s===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof s!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return s}getType(e){const t=this.properties.filter(s=>s.name===e).map(s=>s.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const z="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class le{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new N(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(a){const e=a?"#"+a.join():"";WA.nav.openCoWebSite(z+"/configuration.html"+e)}async function ue(a,e){const t=await WA.room.getTiledMap(),s=new Map;return ee(t.layers,s,a,e),s}function ee(a,e,t,s){for(const r of a)if(r.type==="objectgroup"){for(const n of r.objects)if(n.type==="variable"||n.class==="variable"){if(t&&r.name!==t||s&&!s.includes(n.name))continue;e.set(n.name,new le(n))}}else r.type==="group"&&ee(r.layers,e,t,s)}let G;async function j(){return G===void 0&&(G=ce()),G}async function ce(){return pe(await WA.room.getTiledMap())}function pe(a){const e=new Map;return te(a.layers,"",e),e}function te(a,e,t){for(const s of a)s.type==="group"?te(s.layers,e+s.name+"/",t):(s.name=e+s.name,t.set(s.name,s))}async function fe(){const a=await j(),e=[];for(const t of a.values())if(t.type==="objectgroup")for(const s of t.objects)(s.type==="area"||s.class==="area")&&e.push(s);return e}function me(a){let e=1/0,t=1/0,s=0,r=0;const n=a.data;if(typeof n=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let o=0;o<a.height;o++)for(let i=0;i<a.width;i++)n[i+o*a.width]!==0&&(e=Math.min(e,i),r=Math.max(r,i),t=Math.min(t,o),s=Math.max(s,o));return{top:t,left:e,right:r+1,bottom:s+1}}function ae(a){let e=1/0,t=1/0,s=0,r=0;for(const n of a){const o=me(n);o.left<e&&(e=o.left),o.top<t&&(t=o.top),o.right>r&&(r=o.right),o.bottom>s&&(s=o.bottom)}return{top:t,left:e,right:r,bottom:s}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var de=Object.prototype.toString,k=Array.isArray||function(e){return de.call(e)==="[object Array]"};function F(a){return typeof a=="function"}function be(a){return k(a)?"array":typeof a}function O(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function H(a,e){return a!=null&&typeof a=="object"&&e in a}function he(a,e){return a!=null&&typeof a!="object"&&a.hasOwnProperty&&a.hasOwnProperty(e)}var ge=RegExp.prototype.test;function ye(a,e){return ge.call(a,e)}var Ae=/\S/;function We(a){return!ye(Ae,a)}var ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Pe(a){return String(a).replace(/[&<>"'`=\/]/g,function(t){return ve[t]})}var Se=/\s*/,we=/\s+/,Z=/\s*=/,Ee=/\s*\}/,Te=/#|\^|\/|>|\{|&|=|!/;function ke(a,e){if(!a)return[];var t=!1,s=[],r=[],n=[],o=!1,i=!1,c="",m=0;function d(){if(o&&!i)for(;n.length;)delete r[n.pop()];else n=[];o=!1,i=!1}var A,P,B;function L(w){if(typeof w=="string"&&(w=w.split(we,2)),!k(w)||w.length!==2)throw new Error("Invalid tags: "+w);A=new RegExp(O(w[0])+"\\s*"),P=new RegExp("\\s*"+O(w[1])),B=new RegExp("\\s*"+O("}"+w[1]))}L(e||y.tags);for(var p=new x(a),S,h,W,q,R,E;!p.eos();){if(S=p.pos,W=p.scanUntil(A),W)for(var V=0,ie=W.length;V<ie;++V)q=W.charAt(V),We(q)?(n.push(r.length),c+=q):(i=!0,t=!0,c+=" "),r.push(["text",q,S,S+1]),S+=1,q===`
`&&(d(),c="",m=0,t=!1);if(!p.scan(A))break;if(o=!0,h=p.scan(Te)||"name",p.scan(Se),h==="="?(W=p.scanUntil(Z),p.scan(Z),p.scanUntil(P)):h==="{"?(W=p.scanUntil(B),p.scan(Ee),p.scanUntil(P),h="&"):W=p.scanUntil(P),!p.scan(P))throw new Error("Unclosed tag at "+p.pos);if(h==">"?R=[h,W,S,p.pos,c,m,t]:R=[h,W,S,p.pos],m++,r.push(R),h==="#"||h==="^")s.push(R);else if(h==="/"){if(E=s.pop(),!E)throw new Error('Unopened section "'+W+'" at '+S);if(E[1]!==W)throw new Error('Unclosed section "'+E[1]+'" at '+S)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&L(W)}if(d(),E=s.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+p.pos);return qe(Le(r))}function Le(a){for(var e=[],t,s,r=0,n=a.length;r<n;++r)t=a[r],t&&(t[0]==="text"&&s&&s[0]==="text"?(s[1]+=t[1],s[3]=t[3]):(e.push(t),s=t));return e}function qe(a){for(var e=[],t=e,s=[],r,n,o=0,i=a.length;o<i;++o)switch(r=a[o],r[0]){case"#":case"^":t.push(r),s.push(r),t=r[4]=[];break;case"/":n=s.pop(),n[5]=r[2],t=s.length>0?s[s.length-1][4]:e;break;default:t.push(r)}return e}function x(a){this.string=a,this.tail=a,this.pos=0}x.prototype.eos=function(){return this.tail===""};x.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var s=t[0];return this.tail=this.tail.substring(s.length),this.pos+=s.length,s};x.prototype.scanUntil=function(e){var t=this.tail.search(e),s;switch(t){case-1:s=this.tail,this.tail="";break;case 0:s="";break;default:s=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=s.length,s};function T(a,e){this.view=a,this.cache={".":this.view},this.parent=e}T.prototype.push=function(e){return new T(e,this)};T.prototype.lookup=function(e){var t=this.cache,s;if(t.hasOwnProperty(e))s=t[e];else{for(var r=this,n,o,i,c=!1;r;){if(e.indexOf(".")>0)for(n=r.view,o=e.split("."),i=0;n!=null&&i<o.length;)i===o.length-1&&(c=H(n,o[i])||he(n,o[i])),n=n[o[i++]];else n=r.view[e],c=H(r.view,e);if(c){s=n;break}r=r.parent}t[e]=s}return F(s)&&(s=s.call(this.view)),s};function b(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}b.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};b.prototype.parse=function(e,t){var s=this.templateCache,r=e+":"+(t||y.tags).join(":"),n=typeof s<"u",o=n?s.get(r):void 0;return o==null&&(o=ke(e,t),n&&s.set(r,o)),o};b.prototype.render=function(e,t,s,r){var n=this.getConfigTags(r),o=this.parse(e,n),i=t instanceof T?t:new T(t,void 0);return this.renderTokens(o,i,s,e,r)};b.prototype.renderTokens=function(e,t,s,r,n){for(var o="",i,c,m,d=0,A=e.length;d<A;++d)m=void 0,i=e[d],c=i[0],c==="#"?m=this.renderSection(i,t,s,r,n):c==="^"?m=this.renderInverted(i,t,s,r,n):c===">"?m=this.renderPartial(i,t,s,n):c==="&"?m=this.unescapedValue(i,t):c==="name"?m=this.escapedValue(i,t,n):c==="text"&&(m=this.rawValue(i)),m!==void 0&&(o+=m);return o};b.prototype.renderSection=function(e,t,s,r,n){var o=this,i="",c=t.lookup(e[1]);function m(P){return o.render(P,t,s,n)}if(c){if(k(c))for(var d=0,A=c.length;d<A;++d)i+=this.renderTokens(e[4],t.push(c[d]),s,r,n);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(e[4],t.push(c),s,r,n);else if(F(c)){if(typeof r!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(t.view,r.slice(e[3],e[5]),m),c!=null&&(i+=c)}else i+=this.renderTokens(e[4],t,s,r,n);return i}};b.prototype.renderInverted=function(e,t,s,r,n){var o=t.lookup(e[1]);if(!o||k(o)&&o.length===0)return this.renderTokens(e[4],t,s,r,n)};b.prototype.indentPartial=function(e,t,s){for(var r=t.replace(/[^ \t]/g,""),n=e.split(`
`),o=0;o<n.length;o++)n[o].length&&(o>0||!s)&&(n[o]=r+n[o]);return n.join(`
`)};b.prototype.renderPartial=function(e,t,s,r){if(s){var n=this.getConfigTags(r),o=F(s)?s(e[1]):s[e[1]];if(o!=null){var i=e[6],c=e[5],m=e[4],d=o;c==0&&m&&(d=this.indentPartial(o,m,i));var A=this.parse(d,n);return this.renderTokens(A,t,s,d,r)}}};b.prototype.unescapedValue=function(e,t){var s=t.lookup(e[1]);if(s!=null)return s};b.prototype.escapedValue=function(e,t,s){var r=this.getConfigEscape(s)||y.escape,n=t.lookup(e[1]);if(n!=null)return typeof n=="number"&&r===y.escape?String(n):r(n)};b.prototype.rawValue=function(e){return e[1]};b.prototype.getConfigTags=function(e){return k(e)?e:e&&typeof e=="object"?e.tags:void 0};b.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!k(e))return e.escape};var y={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(a){C.templateCache=a},get templateCache(){return C.templateCache}},C=new b;y.clearCache=function(){return C.clearCache()};y.parse=function(e,t){return C.parse(e,t)};y.render=function(e,t,s,r){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+be(e)+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(e,t,s,r)};y.escape=Pe;y.Scanner=x;y.Context=T;y.Writer=b;class se{constructor(e,t){this.template=e,this.state=t,this.ast=y.parse(e)}getValue(){return this.value===void 0&&(this.value=y.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const s of this.getUsedVariables().values())t.push(this.state.onVariableChange(s).subscribe(()=>{const r=y.render(this.template,this.state);r!==this.value&&(this.value=r,e(this.value))}));return{unsubscribe:()=>{for(const s of t)s.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const s of e){const r=s[0],n=s[1],o=s[4];["name","&","#","^"].includes(r)&&t.add(n),o!==void 0&&typeof o!="string"&&this.recursiveGetUsedVariables(o,t)}}}async function Me(){var a;const e=await fe();for(const t of e){const s=(a=t.properties)!==null&&a!==void 0?a:[];for(const r of s){if(r.type==="int"||r.type==="bool"||r.type==="object"||typeof r.value!="string")continue;const n=new se(r.value,WA.state);if(n.isPureString())continue;const o=n.getValue();await $(t.name,r.name,o),n.onChange(async i=>{await $(t.name,r.name,i)})}}}async function Ne(){var a;const e=await j();for(const[t,s]of e.entries())if(s.type!=="objectgroup"){const r=(a=s.properties)!==null&&a!==void 0?a:[];for(const n of r){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const o=new se(n.value,WA.state);if(o.isPureString())continue;const i=o.getValue();Q(t,n.name,i),o.onChange(c=>{Q(t,n.name,c)})}}}async function $(a,e,t){console.log(a),(await WA.room.area.get(a)).setProperty(e,t)}function Q(a,e,t){WA.room.setProperty(a,e,t),e==="visible"&&(t?WA.room.showLayer(a):WA.room.hideLayer(a))}let D,J=0,U=0;function X(a){if(WA.state[a.name]){let e=a.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=a.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=a.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=a.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ce(a){const e=a.properties.getString("openSound"),t=a.properties.getNumber("soundRadius");let s=1;if(t){const r=ne(a.properties.mustGetString("openLayer").split(`
`));if(r>t)return;s=1-r/t}e&&WA.sound.loadSound(e).play({volume:s})}function je(a){const e=a.properties.getString("closeSound"),t=a.properties.getNumber("soundRadius");let s=1;if(t){const r=ne(a.properties.mustGetString("closeLayer").split(`
`));if(r>t)return;s=1-r/t}e&&WA.sound.loadSound(e).play({volume:s})}function re(a){return a.map(e=>D.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ne(a){const e=re(a),t=ae(e),s=((t.right-t.left)/2+t.left)*32,r=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(J-s,2)+Math.pow(U-r,2))}function xe(a){WA.state.onVariableChange(a.name).subscribe(()=>{WA.state[a.name]?Ce(a):je(a),X(a)}),X(a)}function Be(a,e,t,s){const r=a.name;let n,o,i=!1;const c=t.getString("tag");let m=!0;c&&!WA.player.tags.includes(c)&&(m=!1);const d=!!c;function A(){var p;n&&n.remove(),n=WA.ui.displayActionMessage({message:(p=t.getString("closeTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,P()}})}function P(){var p;n&&n.remove(),n=WA.ui.displayActionMessage({message:(p=t.getString("openTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,A()}})}function B(p){const S=ae(re(e.properties.mustGetString("closeLayer").split(`
`)));o=WA.room.website.create({name:"doorKeypad"+p,url:s+"/keypad.html#"+encodeURIComponent(p),position:{x:S.right*32,y:S.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){o&&(WA.room.website.delete(o.name),o=void 0)}WA.room.onEnterLayer(r).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&m){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(d&&!m||!d)&&(t.getString("code")||t.getString("codeVariable"))){B(r);return}m&&(WA.state[e.name]?A():P())}),WA.room.onLeaveLayer(r).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),n&&n.remove(),L()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&A(),o&&WA.state[e.name]===!0&&L(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&P())})}function Re(a){const e=a.properties.mustGetString("bellSound"),t=a.properties.getNumber("soundRadius");let s=1;if(t){const r=Math.sqrt(Math.pow(a.x-J,2)+Math.pow(a.y-U,2));if(r>t)return;s=1-r/t}WA.sound.loadSound(e).play({volume:s})}function Ve(a){WA.state[a.name]===void 0&&(WA.state[a.name]=0),WA.state.onVariableChange(a.name).subscribe(()=>{WA.state[a.name]&&Re(a)})}function Ge(a,e,t){let s;const r=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var n;r?s=WA.ui.openPopup(r,"",[{label:(n=e.getString("bellButtonText"))!==null&&n!==void 0?n:"Ring",callback:()=>{WA.state[a]=WA.state[a]+1}}]):WA.state[a]=WA.state[a]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{s&&(s.close(),s=void 0)})}async function Oe(a){a=a??z;const e=await ue();D=await j();for(const t of e.values())t.properties.get("door")&&xe(t),t.properties.get("bell")&&Ve(t);for(const t of D.values()){const s=new N(t.properties),r=s.getString("doorVariable");if(r&&t.type==="tilelayer"){const o=e.get(r);if(o===void 0)throw new Error('Cannot find variable "'+r+'" referred in the "doorVariable" property of layer "'+t.name+'"');Be(t,o,s,a)}const n=s.getString("bellVariable");n&&Ge(n,s,t.name)}WA.player.onPlayerMove(t=>{J=t.x,U=t.y})}function De(a,e){const t=a.getString("bindVariable");if(t){const s=a.get("enterValue"),r=a.get("leaveValue"),n=a.getString("triggerMessage"),o=a.getString("tag");Ie(t,e,s,r,n,o)}}function Ie(a,e,t,s,r,n){n&&!WA.player.tags.includes(n)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{r||(WA.state[a]=t)}),s!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[a]=s}))}async function ze(){const a=await j();for(const e of a.values()){const t=new N(e.properties);De(t,e.name)}}let Y;async function Fe(a){const e=await WA.room.getTiledMap();a=a??z,Y=await j();const t=e.layers.find(s=>s.name==="configuration");if(t){const r=new N(t.properties).getString("tag");(!r||WA.player.tags.includes(r))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(a+"/configuration.html",!0)});for(const n of Y.values()){const o=new N(n.properties),i=o.getString("openConfig");i&&n.type==="tilelayer"&&Je(i.split(","),n.name,o)}}}function Je(a,e,t){let s;const r=t.getString("openConfigAdminTag");let n=!0;r&&!WA.player.tags.includes(r)&&(n=!1);function o(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>K(a)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=t.getString("openConfigTrigger");n&&(c&&c==="onaction"?o():K(a))}),WA.room.onLeaveLayer(e).subscribe(()=>{s&&s.remove(),i()})}function Ue(){return WA.onInit().then(()=>{Oe().catch(a=>console.error(a)),ze().catch(a=>console.error(a)),Fe().catch(a=>console.error(a)),Ne().catch(a=>console.error(a)),Me().catch(a=>console.error(a))}).catch(a=>console.error(a))}console.log("Script started successfully");let l=new Array,v={salles:[!1,!1,!1,!1,!1,!1,!1,!1,!1],conf1:[!1,!1,!1,!1,!1,!1,!1,!1,!1],conf2:[!1,!1,!1,!1,!1,!1,!1,!1,!1],conf3:[!1,!1,!1,!1,!1,!1,!1,!1,!1],indices:[!1,!1,!1,!1,!1,!1,!1,!1,!1],indicesTotaux:[!1,!1,!1,!1,!1,!1,!1,!1,!1],quetes:[!1,!1,!1,!1],quetesTot:[!1,!1,!1,!1],quetesTard:[!1,!1,!1,!1],quetesTotales:[!1,!1,!1,!1]};const I="Tom Pain";let M=0;WA.onInit().then(()=>{WA.ui.website.open({url:"src/planning.html",position:{vertical:"bottom",horizontal:"left"},size:{height:"17vh",width:"15vw"},margin:{bottom:"0vh"},allowApi:!0}),WA.player.state.foo=0,console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),oe();function a(){var e=new Date,t=new Date;t.setHours(11),t.setMinutes(5),t.setSeconds(0);var s=new Date;s.setHours(12),s.setMinutes(45),s.setSeconds(0),e.getTime()===t.getTime()?WA.ui.banner.openBanner({id:"banner-test",text:"On va bientôt commencer, rendez-vous dans l'amphi ! :)",bgColor:"#0055FF",textColor:"#FFFFFF",closable:!1}):e.getTime()===s.getTime()&&_("C'est bientôt la fin... Rendez-vous dans l'amphi pour la conclusion !")}setInterval(a,1e3),WA.room.area.onEnter("StandConseil").subscribe(()=>{l.push(WA.ui.openPopup("StandConseil","Merci de vous rendre en salle 5 !",[{label:"OK !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("StandConseil").subscribe(u),WA.room.area.onEnter("indice1").subscribe(()=>{f("indices",0),l.push(WA.ui.openPopup("indice1Popup","Bonjour ! Voici mon indice : C'est 5 en romain !",[{label:"OK !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice1").subscribe(u),WA.room.area.onEnter("indice2").subscribe(()=>{f("indices",1),l.push(WA.ui.openPopup("indice2Popup","Voici un nouvel indice : C'est la meilleure note possible à l'école !",[{label:"Merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice2").subscribe(u),WA.room.area.onEnter("indice3").subscribe(()=>{f("indices",2),l.push(WA.ui.openPopup("indice3Popup","Un nouvel indice, ici tu trouveras : Mon 3eme est à la même place dans l'alphabet !",[{label:"Merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice3").subscribe(u),WA.room.area.onEnter("indice4").subscribe(()=>{f("indices",3),l.push(WA.ui.openPopup("indice4Popup","Bonjour, voici mon indice : Je suis l'onomatopée préférée de Denis Brognard !",[{label:"OK, merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice4").subscribe(u),WA.room.area.onEnter("indice5").subscribe(()=>{f("indices",4),l.push(WA.ui.openPopup("indice5Popup","Salut ! Allez, voici un petit indice : Je suis la première lettre du nom de notre entreprise !",[{label:"Merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice5").subscribe(u),WA.room.area.onEnter("indice6").subscribe(()=>{f("indices",5),l.push(WA.ui.openPopup("indice6Popup","Bonjour ! Voici mon indice : Je suis l'initiale de la troisième valeur chez Néosoft !",[{label:"OK, merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice6").subscribe(u),WA.room.area.onEnter("indice7").subscribe(()=>{f("indices",6),l.push(WA.ui.openPopup("indice7Popup","Hello ! Indice : Je suis imprimé sur la poitrine d'un super héros très connu !",[{label:"OK, merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice7").subscribe(u),WA.room.area.onEnter("indice8").subscribe(()=>{f("indices",7),l.push(WA.ui.openPopup("indice8Popup","Indice : Je suis la lettre la plus utilisée dans la langue française !",[{label:"OK, merci !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice8").subscribe(u),WA.room.area.onEnter("indice9").subscribe(()=>{f("indices",8),l.push(WA.ui.openPopup("indice9Popup","Mon tout est le moment que tout le monde attend !",[{label:"Rendez-vous dans l'enquete de satisfaction pour répondre !",className:"primary",callback:()=>{u()}}]))}),WA.room.area.onLeave("indice9").subscribe(u),WA.room.area.onEnter("rs").subscribe(()=>{l.push(WA.ui.openPopup("rsPopup","Tu veux nous suivre sur les réseaux sociaux ?",[{label:"Linkedin",className:"primary",callback:e=>{WA.openTab("https://www.linkedin.com/company/neosoft_"),e.close()}},{label:"Twitter",className:"primary",callback:e=>{WA.openTab("https://twitter.com/neosoft_"),e.close()}}]))}),WA.room.area.onLeave("rs").subscribe(u),WA.room.area.onEnter("fdn").subscribe(()=>{l.push(WA.ui.openPopup("fdnPopup","Viens te sensibiliser aux enjeux du numérique !",[{label:"Je m'inscris à une fresque",className:"primary",callback:e=>{WA.openTab("https://landing.neosoft.fr/numerique-responsable"),e.close()}}]))}),WA.room.area.onLeave("fdn").subscribe(u),WA.room.area.onEnter("bot1").subscribe(()=>{f("quetesTard",0);let e;e=WA.player.state.foo,WA.player.state.foo=e,e==0?(l.push(WA.ui.openPopup("bot1Popup","Je sais qu'il y a un trésor dans le coin mais j'ai trop peur de l'eau.. Mon frère jumeau est parti bronzer au nord, tu pourrais y aller pour moi ?",[{label:"Bien sûr !",className:"primary",callback:()=>{u()}}])),WA.player.state.foo=e+1,console.log("test if : ",WA.player.state.foo)):(l.push(WA.ui.openPopup("bot1Popup","Je t'ai déjà dit d'aller à la piscine au nord !",[{label:"D'accord..",className:"primary",callback:()=>{u()}}])),console.log("test else : ",WA.player.state.foo))}),WA.room.area.onLeave("bot1").subscribe(u),WA.room.area.onEnter("bot2").subscribe(()=>{let e;e=WA.player.state.foo,WA.player.state.foo=e,e<1?(f("quetesTot",1),l.push(WA.ui.openPopup("bot2Popup","Laisse moi bronzer, tu veux bien ?",[{label:"Euuuh.. ok ?",className:"primary",callback:()=>{u()}}]))):e==1?(f("quetesTard",1),l.push(WA.ui.openPopup("bot2Popup","Un trésor ? Je n'en sais rien, essaye d'aller parler à mon cousin.. Je crois qu'il n'ose pas rentrer dans le labyrinthe, tu le trouveras là bas !",[{label:"Bien sûr !",className:"primary",callback:()=>{u()}}])),WA.player.state.foo=e+1):(f("quetesTard",1),l.push(WA.ui.openPopup("bot2Popup","Es-tu allé au labyrinthe ?",[{label:"Pas encore",className:"primary",callback:()=>{u()}}])))}),WA.room.area.onLeave("bot2").subscribe(u),WA.room.area.onEnter("bot3").subscribe(()=>{let e;e=WA.player.state.foo,WA.player.state.foo=e,e==2&&(f("quetesTard",2),l.push(WA.ui.openPopup("bot3Popup","Au Nord-Est tu iras, cette pelle tu prendras, et à la croix tu te rendras..",[{label:"Alors il existe ?",className:"primary",callback:()=>{u()}}])),WA.player.state.foo=e+1),e<2&&(f("quetestot",2),l.push(WA.ui.openPopup("bot3Popup","Reviens plus tard...",[{label:"Ok",className:"primary",callback:()=>{u()}}]))),e>2&&(f("quetesTard",2),l.push(WA.ui.openPopup("bot3Popup","Bon, tu l'as récupéré ce trésor ?",[{label:"Non, pas encore",className:"primary",callback:()=>{u()}}])))}),WA.room.area.onLeave("bot3").subscribe(u),WA.room.area.onEnter("tresor").subscribe(()=>{let e;e=WA.player.state.foo,WA.player.state.foo=e,e<=2?(f("quetesTot",3),l.push(WA.ui.openPopup("tresorPopup1","Je me demande ce qu'il se cache ici.. Tiens un ticket de parking ? Peut être que quelqu'un l'a égaré ? Je ferai bien d'aller voir là bas..",[{label:"Fermer",className:"primary",callback:()=>{u()}}]))):(f("quetesTard",3),l.push(WA.ui.openPopup("tresorPopup1","Le trésor est.. le nom de ce fameux chanteur !",[{label:"Découvrir le trésor !",className:"primary",callback:()=>{WA.openTab("https://www.youtube.com/embed/dQw4w9WgXcQ?si=UvOTyPhvzyGRv-6r"),u()}}])))}),WA.room.area.onLeave("tresor").subscribe(u),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(a=>console.error(a));WA.room.onEnterLayer("mgZoneAdmin").subscribe(()=>{WA.player.name==I&&(l.push(WA.ui.openPopup("mgSalle1","salle 1",[{label:"ajouter",className:"primary",callback:()=>{g("salle 1,")}}])),l.push(WA.ui.openPopup("mgSalle2","salle 2",[{label:"ajouter",className:"primary",callback:()=>{g("salle 2,")}}])),l.push(WA.ui.openPopup("mgSalle3","salle 3",[{label:"ajouter",className:"primary",callback:()=>{g("salle 3,")}}])),l.push(WA.ui.openPopup("mgSalle4","salle 4",[{label:"ajouter",className:"primary",callback:()=>{g("salle 4,")}}])),l.push(WA.ui.openPopup("mgSalle5","salle 5",[{label:"ajouter",className:"primary",callback:()=>{g("salle 5,")}}])),l.push(WA.ui.openPopup("mgSalle6","salle 6",[{label:"ajouter",className:"primary",callback:()=>{g("salle 6,")}}])),l.push(WA.ui.openPopup("mgSalle7","salle 7",[{label:"ajouter",className:"primary",callback:()=>{g("salle 7,")}}])),l.push(WA.ui.openPopup("mgSalle8","salle 8",[{label:"ajouter",className:"primary",callback:()=>{g("salle 8,")}}])),l.push(WA.ui.openPopup("mgSalleAmphi","Amphi",[{label:"ajouter",className:"primary",callback:()=>{g("amphithéâtre,")}}])),l.push(WA.ui.openPopup("5min","5 minutes de retard",[{label:"ajouter",className:"primary",callback:()=>{g("5 minutes de retard.  ")}}])),l.push(WA.ui.openPopup("10min","10 minutes de retard",[{label:"ajouter",className:"primary",callback:()=>{g("10 minutes de retard.  ")}}])),l.push(WA.ui.openPopup("15min","15 minutes de retard",[{label:"ajouter",className:"primary",callback:()=>{g("15 minutes de retard.  ")}}])),l.push(WA.ui.openPopup("20min","20 minutes de retard",[{label:"ajouter",className:"primary",callback:()=>{g("20 minutes de retard.  ")}}])),l.push(WA.ui.openPopup("vasCommencer","debut de conference",[{label:"ajouter",className:"primary",callback:()=>{g("la conférence commenceras sous peu.  ")}}])),l.push(WA.ui.openPopup("admin","Envoyer",[{label:"envoyé",className:"primary",callback:()=>{_e()}}])),l.push(WA.ui.openPopup("mgSuppression","Supprimer",[{label:"supprimer",className:"primary",callback:()=>{Ke()}}])),l.push(WA.ui.openPopup("mgTest","preview",[{label:"preview",className:"primary",callback:()=>{_(WA.state.messGlob)}}])))});WA.room.area.onEnter("salle1Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle1Popup",`↑ Salle1 ↑ 
→ Salle 2 à 8 → 
← Salle Amphi ←`,[]))});WA.room.area.onLeave("salle1Panneau").subscribe(u);WA.room.area.onEnter("salle2Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle2Popup",`↑ Salle2 ↑ 
→ Salle 3 à 8 → 
← Salle 1 et Amphi ←`,[]))});WA.room.area.onLeave("salle2Panneau").subscribe(u);WA.room.area.onEnter("salle3Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle3Popup",`↑ Salle3 ↑ 
→ Salle 4 à 5 → 
← Salle 1 à 2 et Amphi ←
↓ Salle 6 à 8 ↓`,[]))});WA.room.area.onLeave("salle3Panneau").subscribe(u);WA.room.area.onEnter("salle4Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle4Popup",`↑ Salle4 ↑ 
→ Salle 5 → 
← Salle 1,2,3,8 et Amphi ←
↓ Salle 6 à 7 ↓`,[]))});WA.room.area.onLeave("salle4Panneau").subscribe(u);WA.room.area.onEnter("salle5Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle5Popup",`↑ Salle5 ↑ 
← Salle 1,2,3,4,8 et Amphi ←
↓ Salle 6 à 7 ↓`,[]))});WA.room.area.onLeave("salle5Panneau").subscribe(u);WA.room.area.onEnter("salle6Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle6Popup",`→ Salle 6 → 
↑ Salle 4,5 ↑ 
← Salle 1,2,3,4,8 et Amphi ←
↓ Salle 7 ↓`,[]))});WA.room.area.onLeave("salle6Panneau").subscribe(u);WA.room.area.onEnter("salle7Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle7Popup",`→ Salle 7 → 
↑ Salle 4 à 6 ↑ 
← Salle 1,2,3,4,8 et Amphi ←`,[]))});WA.room.area.onLeave("salle7Panneau").subscribe(u);WA.room.area.onEnter("salle8Panneau").subscribe(()=>{l.push(WA.ui.openPopup("salle8Popup",`→ Salle 3 à 7 → 
← Salle 1,2 et Amphi ←
↓ Salle 8 ↓`,[]))});WA.room.area.onLeave("salle8Panneau").subscribe(u);WA.room.area.onEnter("salleAPanneau").subscribe(()=>{l.push(WA.ui.openPopup("salleAPopup",`↑ Amphithéâtre ↑ 
→ Salle 1 à 8 → 
`,[]))});WA.room.area.onLeave("salleAPanneau").subscribe(u);WA.room.area.onEnter("salle1").subscribe(()=>{f("salles",1)});WA.room.area.onEnter("salle2").subscribe(()=>{f("salles",2)});WA.room.area.onEnter("salle3").subscribe(()=>{f("salles",3)});WA.room.area.onEnter("salle3").subscribe(()=>{f("salles",3)});WA.room.area.onEnter("salle4").subscribe(()=>{f("salles",4)});WA.room.area.onEnter("salle5").subscribe(()=>{f("salles",5)});WA.room.area.onEnter("salle6").subscribe(()=>{f("salles",6)});WA.room.area.onEnter("salle7").subscribe(()=>{f("salles",7)});WA.room.area.onEnter("salle8").subscribe(()=>{f("salles",8)});WA.room.area.onEnter("amphi").subscribe(()=>{f("salles",0)});WA.room.area.onEnter("mgSalle6").subscribe(()=>{He()});WA.room.onLeaveLayer("mgZoneAdmin").subscribe(()=>{u()});function u(){l.forEach(a=>{a.close()}),l.splice(0,l.length)}function _(a){WA.ui.banner.openBanner({id:"banner",text:a,bgColor:"#FAB000",textColor:"#FFFFFF",closable:!0})}function oe(){WA.state.aAfficher&&(_(WA.state.messGlob),WA.player.name==I&&M!=1?M=M+1:WA.player.name==I&&M==1&&(M=0,WA.state.messGlob="votre attention: ",WA.state.aAfficher=!1)),setTimeout(oe,2e3)}function g(a){WA.state.messGlob=WA.state.messGlob+" "+a}function _e(){WA.state.aAfficher=!0}function Ke(){WA.state.messGlob="Votre attention:"}function f(a,e){let t=WA.state.loadVariable("statistique");if(t=JSON.parse(t),a=="indices")t.indicesTotaux[e]+=1,v.indices[e]||(v.indices[e]=!0,t.indices[e]+=1,t.indicesTotaux[e]+=1);else if(a=="quetesTot")t.quetesTotales[e]+=1,v.quetes[e]||(t.quetes[e]+=1,t.quetesTot[e]+=1);else if(a=="quetesTard")t.quetesTotales[e]+=1,v.quetes[e]||(t.quetes[e]+=1,t.quetesTard[e]+=1);else if(a=="salles"){var s=new Date,r=new Date,n=new Date,o=new Date,i=new Date;r.setHours(12),r.setMinutes(0),r.setSeconds(0),n.setHours(12),n.setMinutes(15),n.setSeconds(0),o.setHours(12),o.setMinutes(30),o.setSeconds(0),i.setHours(12),i.setMinutes(30),i.setSeconds(0),v.salles[e]||(t.salles[e]+=1,v.salles[e]=!0),s>r&&s<n?v.conf1[e]||(t.conf1[e]+=1,v.conf1[e]=!0):s>n&&s<o?v.conf2[e]||(t.conf2[e]+=1,v.conf2[e]=!0):s>o&&s<i&&(v.conf3[e]||(t.conf3[e]+=1,v.conf3[e]=!0))}else console.log("categorie non existante, statistique non modifié.");WA.state.saveVariable("statistique",JSON.stringify(t)),console.log("statistique : ",WA.state.statistique)}function He(){let a=WA.state.loadVariable("statistique");a=JSON.parse(a);let e=a.salles[0]+" sont allez en amphi, "+a.conf1[0]+" de midi à midi quinze, "+a.conf2[0]+" de midi quinze à midi trente, "+a.conf3[0]+` de midi trente à midi quarante-cinq. 
`;for(let t=1;t<a.salles.length;t++)e=e+a.salles[t]+" sont allez en salle "+t+", "+a.conf1[t]+" de midi à midi quinze, "+a.conf2[t]+" de midi quinze à midi trente, "+a.conf3[t]+` de midi trente à midi quarante-cinq. 
`;for(let t=0;t<a.indices.length;t++)e=e+a.indices[t]+" personnes sont allé voir le bot pour l'indice "+(t-1+2)+" et ont leur a adressé la paroles "+a.indicesTotaux[t]+` fois
`;for(let t=0;t<a.quetes.length;t++)e=e+"le bot numéro "+(t-1+2)+" de la quetes a parlé à "+a.quetes[t]+" personnes differentes et à parler un total de "+a.quetesTotales[t]+" fois. "+a.quetesTot[t]+" lui ont parlé trop tôt et "+a.quetesTard[t]+` ont recuperée son information
`;console.log(e)}