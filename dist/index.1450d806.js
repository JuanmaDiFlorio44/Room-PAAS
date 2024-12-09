let e,t,n,i,r,s,o,a,l,h,u,c,f,d;var p,g,m,y,_,v,w,b,E,C,T,I,S,x,k,N,A,R,D,P,L,O,M,F,U,V=globalThis,B={},q=B={};function j(){throw Error("setTimeout has not been defined")}function z(){throw Error("clearTimeout has not been defined")}function $(e){if(m===setTimeout)return setTimeout(e,0);if((m===j||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(t){try{return m.call(null,e,0)}catch(t){return m.call(this,e,0)}}}!function(){try{m="function"==typeof setTimeout?setTimeout:j}catch(e){m=j}try{y="function"==typeof clearTimeout?clearTimeout:z}catch(e){y=z}}();var K=[],G=!1,H=-1;function W(){G&&_&&(G=!1,_.length?K=_.concat(K):H=-1,K.length&&Q())}function Q(){if(!G){var e=$(W);G=!0;for(var t=K.length;t;){for(_=K,K=[];++H<t;)_&&_[H].run();H=-1,t=K.length}_=null,G=!1,function(e){if(y===clearTimeout)return clearTimeout(e);if((y===z||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(e);try{y(e)}catch(t){try{return y.call(null,e)}catch(t){return y.call(this,e)}}}(e)}}function Y(e,t){this.fun=e,this.array=t}function X(){}q.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];K.push(new Y(e,t)),1!==K.length||G||$(Q)},Y.prototype.run=function(){this.fun.apply(null,this.array)},q.title="browser",q.browser=!0,q.env={},q.argv=[],q.version="",q.versions={},q.on=X,q.addListener=X,q.once=X,q.off=X,q.removeListener=X,q.removeAllListeners=X,q.emit=X,q.prependListener=X,q.prependOnceListener=X,q.listeners=function(e){return[]},q.binding=function(e){throw Error("process.binding is not supported")},q.cwd=function(){return"/"},q.chdir=function(e){throw Error("process.chdir is not supported")},q.umask=function(){return 0};const J={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},Z=function(e,t){if(!e)throw ee(t)},ee=function(e){return Error("Firebase Database ("+J.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},et=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},en=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,u=(3&r)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),i.push(n[h],n[u],n[c],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):en(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new er;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class er extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const es=function(e){let t=et(e);return ei.encodeByteArray(t,!0)},eo=function(e){return es(e).replace(/\./g,"")},ea=function(e){try{return ei.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},el=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==V)return V;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eh=()=>{if(void 0===B||void 0===B.env)return;let e=void 0;if(e)return JSON.parse(e)},eu=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&ea(e[1]);return t&&JSON.parse(t)},ec=()=>{try{return el()||eh()||eu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ef=e=>{var t,n;return null===(n=null===(t=ec())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ed=e=>{let t=ef(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ep=()=>{var e;return null===(e=ec())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[eo(JSON.stringify({alg:"none",type:"JWT"})),eo(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function e_(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ey())}function ev(){return!0===J.NODE_CLIENT||!0===J.NODE_ADMIN}class ew extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ew.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eb.prototype.create)}}class eb{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(eE,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ew(i,o,n)}}const eE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(e){return JSON.parse(e)}function eT(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=eC(ea(s[0])||""),n=eC(ea(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},eS=function(e){let t=eI(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ex=function(e){let t=eI(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eN(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function eA(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eR(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function eD(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(eP(n)&&eP(s)){if(!eD(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function eP(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=0x5a827999):(n=o^a^l,i=0x6ed9eba1):e<60?(n=o&a|l&(o|a),i=0x8f1bbcdc):(n=o^a^l,i=0xca62c1d6);let t=(s<<5|s>>>27)+n+h+i+r[e]&0xffffffff;h=l,l=a,a=(o<<30|o>>>2)&0xffffffff,o=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+o&0xffffffff,this.chain_[2]=this.chain_[2]+a&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+h&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function eO(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;Z(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},eF=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(e){return e&&e._delegate?e._delegate:e}class eV{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eg;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eB})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eB){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eB){return this.instances.has(e)}getOptions(e=eB){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eB?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eB){return this.component?this.component.multipleInstances?e:eB:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eq(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ez=[];(p=v||(v={}))[p.DEBUG=0]="DEBUG",p[p.VERBOSE=1]="VERBOSE",p[p.INFO=2]="INFO",p[p.WARN=3]="WARN",p[p.ERROR=4]="ERROR",p[p.SILENT=5]="SILENT";const e$={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},eK=v.INFO,eG={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},eH=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eG[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eW{constructor(e){this.name=e,this._logLevel=eK,this._logHandler=eH,this._userLogHandler=null,ez.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?e$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const eQ=(e,t)=>t.some(t=>e instanceof t),eY=new WeakMap,eX=new WeakMap,eJ=new WeakMap,eZ=new WeakMap,e0=new WeakMap;let e1={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eX.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eJ.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return e2(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function e2(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(e2(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eY.set(t,e)}).catch(()=>{}),e0.set(t,e),t}(n);if(eZ.has(n))return eZ.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(e6(this),e),e2(eY.get(this))}:function(...e){return e2(i.apply(e6(this),e))}:function(e,...t){let n=i.call(e6(this),e,...t);return eJ.set(n,e.sort?e.sort():[e]),e2(n)}:(i instanceof IDBTransaction&&function(e){if(eX.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});eX.set(e,t)}(i),eQ(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,e1):i;return r!==n&&(eZ.set(n,r),e0.set(r,n)),r}const e6=e=>e0.get(e),e3=["get","getKey","getAll","getAllKeys","count"],e5=["put","add","delete","clear"],e8=new Map;function e4(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(e8.get(t))return e8.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=e5.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||e3.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return e8.set(t,s),s}e1={...d=e1,get:(e,t,n)=>e4(e,t)||d.get(e,t,n),has:(e,t)=>!!e4(e,t)||d.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const e9="@firebase/app",te="0.10.16",tt=new eW("@firebase/app"),tn="[DEFAULT]",ti={[e9]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},tr=new Map,ts=new Map,to=new Map;function ta(e,t){try{e.container.addComponent(t)}catch(n){tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tl(e){let t=e.name;if(to.has(t))return tt.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(to.set(t,e),tr.values()))ta(n,e);for(let t of ts.values())ta(t,e);return!0}function th(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const tu=new eb("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eV("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tu.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="11.0.2";function td(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:tn,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw tu.create("bad-app-name",{appName:String(r)});if(n||(n=ep()),!n)throw tu.create("no-options");let s=tr.get(r);if(s){if(eD(n,s.options)&&eD(i,s.config))return s;throw tu.create("duplicate-app",{appName:r})}let o=new ej(r);for(let e of to.values())o.addComponent(e);let a=new tc(n,i,o);return tr.set(r,a),a}function tp(e=tn){let t=tr.get(e);if(!t&&e===tn&&ep())return td();if(!t)throw tu.create("no-app",{appName:e});return t}function tg(e,t,n){var i;let r=null!==(i=ti[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tt.warn(e.join(" "));return}tl(new eV(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const tm="firebase-heartbeat-store";let ty=null;function t_(){return ty||(ty=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=e2(o);return i&&o.addEventListener("upgradeneeded",e=>{i(e2(o.result),e.oldVersion,e.newVersion,e2(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(tm)}catch(e){console.warn(e)}}}).catch(e=>{throw tu.create("idb-open",{originalErrorMessage:e.message})})),ty}async function tv(e){try{let t=(await t_()).transaction(tm),n=await t.objectStore(tm).get(tb(e));return await t.done,n}catch(e){if(e instanceof ew)tt.warn(e.message);else{let t=tu.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tt.warn(t.message)}}}async function tw(e,t){try{let n=(await t_()).transaction(tm,"readwrite"),i=n.objectStore(tm);await i.put(t,tb(e)),await n.done}catch(e){if(e instanceof ew)tt.warn(e.message);else{let t=tu.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tt.warn(t.message)}}}function tb(e){return`${e.name}!${e.options.appId}`}class tE{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tT(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tC();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){tt.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tC(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),tI(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tI(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=eo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return tt.warn(e),""}}}function tC(){return new Date().toISOString().substring(0,10)}class tT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await tv(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tw(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tw(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tI(e){return eo(JSON.stringify({version:2,heartbeats:e})).length}tl(new eV("platform-logger",e=>new e7(e),"PRIVATE")),tl(new eV("heartbeat",e=>new tE(e),"PRIVATE")),tg(e9,te,""),tg(e9,te,"esm2017"),tg("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tg("firebase","11.0.2","app");const tS="@firebase/database",tx="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tk="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eT(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eC(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ek(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new tN(t)}}catch(e){}return new tA},tD=tR("localStorage"),tP=tR("sessionStorage"),tL=new eW("@firebase/database"),tO=(f=1,function(){return f++}),tM=function(e){let t=eM(e),n=new eL;n.update(t);let i=n.digest();return ei.encodeByteArray(i)},tF=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=tF.apply(null,i):"object"==typeof i?t+=eT(i):t+=i,t+=" "}return t};let tU=null,tV=!0;const tB=function(e,t){Z(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tL.logLevel=v.VERBOSE,tU=tL.log.bind(tL),t&&tP.set("logging_enabled",!0)):"function"==typeof e?tU=e:(tU=null,tP.remove("logging_enabled"))},tq=function(...e){if(!0===tV&&(tV=!1,null===tU&&!0===tP.get("logging_enabled")&&tB(!0)),tU){let t=tF.apply(null,e);tU(t)}},tj=function(e){return function(...t){tq(e,...t)}},tz=function(...e){let t="FIREBASE INTERNAL ERROR: "+tF(...e);tL.error(t)},t$=function(...e){let t=`FIREBASE FATAL ERROR: ${tF(...e)}`;throw tL.error(t),Error(t)},tK=function(...e){let t="FIREBASE WARNING: "+tF(...e);tL.warn(t)},tG=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&tK("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tH=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},tW=function(e){if(ev()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},tQ="[MIN_NAME]",tY="[MAX_NAME]",tX=function(e,t){if(e===t)return 0;{if(e===tQ||t===tY)return -1;if(t===tQ||e===tY)return 1;let n=t5(e),i=t5(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},tJ=function(e,t){return e===t?0:e<t?-1:1},tZ=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+eT(t))},t0=function(e){if("object"!=typeof e||null===e)return eT(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=eT(t[i]),n+=":",n+=t0(e[t[i]]);return n+"}"},t1=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function t2(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const t6=function(e){let t,n,i,r,s;Z(!tH(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-0x10000000000000)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},t3=RegExp("^-?(0*)\\d{1,10}$"),t5=function(e){if(t3.test(e)){let t=Number(e);if(t>=-0x80000000&&t<=0x7fffffff)return t}return null},t8=function(e){try{e()}catch(e){setTimeout(()=>{throw tK("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},t4=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){tK(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(tq("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tK(e)}}class ne{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ne.OWNER="owner";const nt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nn="websocket",ni="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tD.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tD.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ns(e,t,n){let i;if(Z("string"==typeof t,"typeof type must == string"),Z("object"==typeof n,"typeof params must == object"),t===nn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===ni)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return t2(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.counters_={}}incrementCounter(e,t=1){ek(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={},nl={};function nh(e){let t=e.toString();return na[t]||(na[t]=new no),na[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&t8(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="start";class nf{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tj(e),this.stats_=nh(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ns(t,ni,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new nu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),tW(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===nc)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[nc]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&nt.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nf.forceAllow_=!0}static forceDisallow(){nf.forceDisallow_=!0}static isAvailable(){return!ev()&&(!!nf.forceAllow_||!nf.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=eT(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=t1(es(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ev())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=eT(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nd{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ev())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=tO(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=nd.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){tq("frame writing exception"),e.stack&&tq(e.stack),tq(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tq("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){ev()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{tq("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let np=null;"undefined"!=typeof MozWebSocket?np=MozWebSocket:"undefined"!=typeof WebSocket&&(np=WebSocket);class ng{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tj(this.connId),this.stats_=nh(t),this.connURL=ng.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!ev()&&"undefined"!=typeof location&&location.hostname&&nt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),ns(e,nn,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tD.set("previous_websocket_failure",!0);try{let e;if(ev()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${tk}/${B.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new np(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ng.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==np&&!ng.forceDisallow_}static previouslyFailed(){return tD.isInMemoryStorage||!0===tD.get("previous_websocket_failure")}markConnectionHealthy(){tD.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=eC(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=eT(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=t1(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ng.responsesRequiredToBeHealthy=2,ng.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static get ALL_TRANSPORTS(){return[nf,ng]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=ng&&ng.isAvailable(),n=t&&!ng.previouslyFailed();if(e.webSocketOnly&&(t||tK("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ng];else{let e=this.transports_=[];for(let t of nm.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);nm.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nm.globalTransportInitialized_=!1;class ny{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tj("c:"+this.id+":"),this.transportManager_=new nm(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=t4(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=tZ("t",e),n=tZ("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=tZ("t",e),n=tZ("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=tZ("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?tz("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tz("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&tK("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),t4(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):t4(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tD.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends nv{static getInstance(){return new nw}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||e_()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Z("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class nb{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function nE(){return new nb("")}function nC(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function nT(e){return e.pieces_.length-e.pieceNum_}function nI(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new nb(e.pieces_,t)}function nS(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nx(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function nk(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new nb(t,0)}function nN(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof nb)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new nb(n,0)}function nA(e){return e.pieceNum_>=e.pieces_.length}function nR(e,t){let n=nC(e),i=nC(t);if(null===n)return t;if(n===i)return nR(nI(e),nI(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nD(e,t){if(nT(e)!==nT(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function nP(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(nT(e)>nT(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class nL{constructor(e,t){this.errorPrefix_=t,this.parts_=nx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=eF(this.parts_[e]);nO(this)}}function nO(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+nM(e))}function nM(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends nv{static getInstance(){return new nF}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}getInitialEvent(e){return Z("visible"===e,"Unknown event type: "+e),[this.visible_]}}class nU extends n_{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=nU.nextPersistentConnectionId_++,this.log_=tj("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ev())throw Error("Auth override specified in options, but not supported on non Node.js platforms");nF.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&nw.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(eT(r)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new eg,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;nU.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ek(e,"w")){let n=eN(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();tK(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ex(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=eS(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eT(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):tz("Unrecognized action received from server: "+eT(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nU.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){Z(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?tq("getToken() completed but was canceled"):(tq("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new ny(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{tK(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&tK(e),a())}}}interrupt(e){tq("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tq("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eA(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>t0(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new nb(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){tq("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){tq("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";ev()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+tk.replace(/\./g,"-")]=1,e_()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=nw.getInstance().currentlyOnline();return eA(this.interruptReasons_)&&e}}nU.nextPersistentConnectionId_=0,nU.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nV(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new nV(tQ,e),i=new nV(tQ,t);return 0!==this.compare(n,i)}minPost(){return nV.MIN}}class nq extends nB{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return tX(e.name,t.name)}isDefinedOn(e){throw ee("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nV.MIN}maxPost(){return new nV(tY,n)}makePost(e,t){return Z("string"==typeof e,"KeyIndex indexValue must always be a string."),new nV(e,n)}toString(){return".key"}}const nj=new nq;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class n${constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:n$.RED,this.left=null!=i?i:nK.EMPTY_NODE,this.right=null!=r?r:nK.EMPTY_NODE}copy(e,t,n,i,r){return new n$(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return nK.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nK.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}n$.RED=!0,n$.BLACK=!1;class nK{constructor(e,t=nK.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nK(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,n$.BLACK,null,null))}remove(e){return new nK(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,n$.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nz(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nz(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nz(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nz(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(e,t){return tX(e.name,t.name)}function nH(e,t){return tX(e,t)}nK.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new n$(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const nW=function(e){return"number"==typeof e?"number:"+t6(e):"string:"+e},nQ=function(e){if(e.isLeafNode()){let t=e.val();Z("string"==typeof t||"number"==typeof t||"object"==typeof t&&ek(t,".sv"),"Priority must be a string or number.")}else Z(e===i||e.isEmpty(),"priority of unexpected type.");Z(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class nY{static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}constructor(e,t=nY.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),nQ(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nY(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nY.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return nA(e)?this:".priority"===nC(e)?this.priorityNode_:nY.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nY.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=nC(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Z(".priority"!==n||1===nT(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nY.__childrenNodeConstructor.EMPTY_NODE.updateChild(nI(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nW(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=t6(this.value_):e+=this.value_,this.lazyHash_=tM(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nY.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nY.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=nY.VALUE_TYPE_ORDER.indexOf(t),r=nY.VALUE_TYPE_ORDER.indexOf(n);return(Z(i>=0,"Unknown leaf type: "+t),Z(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}nY.VALUE_TYPE_ORDER=["object","boolean","number","string"];const nX=new class extends nB{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?tX(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nV.MIN}maxPost(){return new nV(tY,new nY("[PRIORITY-POST]",o))}makePost(e,t){return new nV(t,new nY("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},nJ=Math.log(2);class nZ{constructor(e){this.count=parseInt(Math.log(e+1)/nJ,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const n0=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new n$(n?n(s):s,s.node,n$.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new n$(n?n(s):s,s.node,n$.BLACK,l,h)}};return new nK(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),u=e[s];l(new n$(n?n(u):u,u.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,n$.BLACK):(a(i,n$.BLACK),a(i,n$.RED))}return s}(new nZ(e.length)))},n1={};class n2{static get Default(){return Z(n1&&nX,"ChildrenNode.ts has not been loaded"),a=a||new n2({".priority":n1},{".priority":nX})}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=eN(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof nK?t:null}hasIndex(e){return ek(this.indexSet_,e.toString())}addIndex(e,t){let n;Z(e!==nj,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(nV.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?n0(i,e.getCompare()):n1;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new n2(h,l)}addToIndexes(e,t){return new n2(eR(this.indexes_,(n,i)=>{let r=eN(this.indexSet_,i);if(Z(r,"Missing index implementation for "+i),n===n1){if(!r.isDefinedOn(e.node))return n1;{let n=[],i=t.getIterator(nV.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),n0(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new nV(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new n2(eR(this.indexes_,n=>{if(n===n1)return n;{let i=t.get(e.name);return i?n.remove(new nV(e.name,i)):n}}),this.indexSet_)}}class n6{static get EMPTY_NODE(){return l||(l=new n6(new nK(nH),null,n2.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&nQ(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new n6(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=nC(e);return null===t?this:this.getImmediateChild(t).getChild(nI(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new nV(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?l:this.priorityNode_;return new n6(n,s,i)}}updateChild(e,t){let n=nC(e);if(null===n)return t;{Z(".priority"!==nC(e)||1===nT(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(nI(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(nX,(s,o)=>{t[s]=o.val(e),n++,r&&n6.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+nW(this.getPriority().val())+":"),this.forEachChild(nX,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":tM(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new nV(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new nV(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new nV(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,nV.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,nV.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===n3?-1:0}withIndex(e){if(e===nj||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n6(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nj||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(nX),n=e.getIterator(nX),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===nj?null:this.indexMap_.get(e.toString())}}n6.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const n3=new class extends n6{constructor(){super(new nK(nH),n6.EMPTY_NODE,n2.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return n6.EMPTY_NODE}isEmpty(){return!1}};function n5(e,t=null){if(null===e)return n6.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Z(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new nY(e,n5(t));if(e instanceof Array){let n=n6.EMPTY_NODE;return t2(e,(t,i)=>{if(ek(e,t)&&"."!==t.substring(0,1)){let e=n5(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(n5(t))}{let n=[],i=!1;if(t2(e,(e,t)=>{if("."!==e.substring(0,1)){let r=n5(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new nV(e,r)))}}),0===n.length)return n6.EMPTY_NODE;let r=n0(n,nG,e=>e.name,nH);if(!i)return new n6(r,n5(t),n2.Default);{let e=n0(n,nX.getCompare());return new n6(r,n5(t),new n2({".priority":e},{".priority":nX}))}}}Object.defineProperties(nV,{MIN:{value:new nV(tQ,n6.EMPTY_NODE)},MAX:{value:new nV(tY,n3)}}),nq.__EMPTY_NODE=n6.EMPTY_NODE,nY.__childrenNodeConstructor=n6,i=n3,o=n3,s=n5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8 extends nB{constructor(e){super(),this.indexPath_=e,Z(!nA(e)&&".priority"!==nC(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?tX(e.name,t.name):r}makePost(e,t){let n=n5(e);return new nV(t,n6.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new nV(tY,n6.EMPTY_NODE.updateChild(this.indexPath_,n3))}toString(){return nx(this.indexPath_,0).join("/")}}const n4=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends nB{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?tX(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nV.MIN}maxPost(){return nV.MAX}makePost(e,t){return new nV(t,n5(e))}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n7(e){return{type:"value",snapshotNode:e}}function n9(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ie(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function it(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){Z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ie(t,o)):Z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(n9(t,n)):s.trackChildChange(it(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(nX,(e,i)=>{t.hasChild(e)||n.trackChildChange(ie(e,i))}),t.isLeafNode()||t.forEachChild(nX,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(it(t,i,r))}else n.trackChildChange(n9(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?n6.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.indexedFilter_=new ii(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ir.getStartPost_(e),this.endPost_=ir.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new nV(t,n))||(n=n6.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=n6.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(n6.EMPTY_NODE);let r=this;return t.forEachChild(nX,(e,t)=>{r.matches(new nV(e,t))||(i=i.updateImmediateChild(e,n6.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ir(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new nV(t,n))||(n=n6.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=n6.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=n6.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(n6.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,n6.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();Z(e.numChildren()===this.limit_,"");let o=new nV(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),u=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=u&&(u.name===t||e.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);let c=null==u?1:s(u,o);if(l&&!n.isEmpty()&&c>=0)return null!=r&&r.trackChildChange(it(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ie(t,h));let n=e.updateImmediateChild(t,n6.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(n9(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(ie(a.name,a.node)),r.trackChildChange(n9(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,n6.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nX}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:tQ}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:tY}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nX}copy(){let e=new io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ia(e){let t;let n={};if(e.isDefault())return n;if(e.index_===nX?t="$priority":e.index_===n4?t="$value":e.index_===nj?t="$key":(Z(e.index_ instanceof n8,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=eT(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=eT(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+eT(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=eT(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+eT(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function il(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==nX&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends n_{reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=tj("p:rest:"),this.listens_={}}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=ih.getListenId_(e,n),o={};this.listens_[s]=o;let a=ia(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),eN(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=ih.getListenId_(e,t);delete this.listens_[n]}get(e){let t=ia(e._queryParams),n=e._path.toString(),i=new eg;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eC(o.responseText)}catch(e){tK("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&tK("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.rootNode_=n6.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return{value:null,children:new Map}}function id(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{id(i,new nb(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&t2(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class ig{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ip(e);let n=1e4+2e4*Math.random();t4(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;t2(e,(e,i)=>{i>0&&ek(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),t4(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function im(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(g=w||(w={}))[g.OVERWRITE=0]="OVERWRITE",g[g.MERGE=1]="MERGE",g[g.ACK_USER_WRITE=2]="ACK_USER_WRITE",g[g.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=w.ACK_USER_WRITE,this.source=im()}operationForChild(e){if(!nA(this.path))return Z(nC(this.path)===e,"operationForChild called for unrelated child."),new iv(nI(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new nb(e));return new iv(nE(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.source=e,this.path=t,this.type=w.LISTEN_COMPLETE}operationForChild(e){return nA(this.path)?new iw(this.source,nE()):new iw(this.source,nI(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=w.OVERWRITE}operationForChild(e){return nA(this.path)?new ib(this.source,nE(),this.snap.getImmediateChild(e)):new ib(this.source,nI(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=w.MERGE}operationForChild(e){if(!nA(this.path))return Z(nC(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new iE(this.source,nI(this.path),this.children);{let t=this.children.subtree(new nb(e));return t.isEmpty()?null:t.value?new ib(this.source,nE(),t.value):new iE(this.source,nE(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(nA(e))return this.isFullyInitialized()&&!this.filtered_;let t=nC(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iI(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw ee("Should only compare child_ events.");let i=new nV(t.childName,t.snapshotNode),r=new nV(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e,t){return{eventCache:e,serverCache:t}}function ix(e,t,n,i){return iS(new iC(t,n,i),e.serverCache)}function ik(e,t,n,i){return iS(e.eventCache,new iC(t,n,i))}function iN(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function iA(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const iR=()=>(h||(h=new nK(tJ)),h);class iD{static fromObject(e){let t=new iD(null);return t2(e,(e,n)=>{t=t.set(new nb(e),n)}),t}constructor(e,t=iR()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:nE(),value:this.value};if(nA(e))return null;{let n=nC(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(nI(e),t);return null!=r?{path:nN(new nb(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(nA(e))return this;{let t=nC(e),n=this.children.get(t);return null!==n?n.subtree(nI(e)):new iD(null)}}set(e,t){if(nA(e))return new iD(t,this.children);{let n=nC(e),i=(this.children.get(n)||new iD(null)).set(nI(e),t),r=this.children.insert(n,i);return new iD(this.value,r)}}remove(e){if(nA(e))return this.children.isEmpty()?new iD(null):new iD(null,this.children);{let t=nC(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(nI(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new iD(null):new iD(this.value,i)}}}get(e){if(nA(e))return this.value;{let t=nC(e),n=this.children.get(t);return n?n.get(nI(e)):null}}setTree(e,t){if(nA(e))return t;{let n;let i=nC(e),r=(this.children.get(i)||new iD(null)).setTree(nI(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new iD(this.value,n)}}fold(e){return this.fold_(nE(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(nN(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,nE(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(nA(e))return null;{let i=nC(e),r=this.children.get(i);return r?r.findOnPath_(nI(e),nN(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nE(),t)}foreachOnPath_(e,t,n){if(nA(e))return this;{this.value&&n(t,this.value);let i=nC(e),r=this.children.get(i);return r?r.foreachOnPath_(nI(e),nN(t,i),n):new iD(null)}}foreach(e){this.foreach_(nE(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(nN(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.writeTree_=e}static empty(){return new iP(new iD(null))}}function iL(e,t,n){if(nA(t))return new iP(new iD(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=nR(r,t);return s=s.updateChild(o,n),new iP(e.writeTree_.set(r,s))}{let i=new iD(n);return new iP(e.writeTree_.setTree(t,i))}}}function iO(e,t,n){let i=e;return t2(n,(e,n)=>{i=iL(i,nN(t,e),n)}),i}function iM(e,t){return nA(t)?iP.empty():new iP(e.writeTree_.setTree(t,new iD(null)))}function iF(e,t){return null!=iU(e,t)}function iU(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(nR(n.path,t)):null}function iV(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(nX,(e,n)=>{t.push(new nV(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new nV(e,n.value))}),t}function iB(e,t){if(nA(t))return e;{let n=iU(e,t);return new iP(null!=n?new iD(n):e.writeTree_.subtree(t))}}function iq(e){return e.writeTree_.isEmpty()}function ij(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(Z(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(nN(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(nN(t,".priority"),r)),i}}(nE(),e.writeTree_,t)}function iz(e){return e.visible}function i$(e,t,n){let i=iP.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)nP(n,t)?i=iL(i,e=nR(n,t),s.snap):nP(t,n)&&(e=nR(t,n),i=iL(i,nE(),s.snap.getChild(e)));else if(s.children){if(nP(n,t))i=iO(i,e=nR(n,t),s.children);else if(nP(t,n)){if(nA(e=nR(t,n)))i=iO(i,nE(),s.children);else{let t=eN(s.children,nC(e));if(t){let n=t.getChild(nI(e));i=iL(i,nE(),n)}}}}else throw ee("WriteRecord should have .snap or .children")}}return i}function iK(e,t,n,i,r){if(i||r){let s=iB(e.visibleWrites,t);return!r&&iq(s)?n:r||null!=n||iF(s,nE())?ij(i$(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(nP(e.path,t)||nP(t,e.path))},t),n||n6.EMPTY_NODE):null}{let i=iU(e.visibleWrites,t);if(null!=i)return i;{let i=iB(e.visibleWrites,t);return iq(i)?n:null!=n||iF(i,nE())?ij(i,n||n6.EMPTY_NODE):null}}}function iG(e,t,n,i){return iK(e.writeTree,e.treePath,t,n,i)}function iH(e,t){return function(e,t,n){let i=n6.EMPTY_NODE,r=iU(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(nX,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return iV(iB(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=iB(e.visibleWrites,t);return n.forEachChild(nX,(e,t)=>{let n=ij(iB(r,new nb(e)),t);i=i.updateImmediateChild(e,n)}),iV(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function iW(e,t,n,i){return function(e,t,n,i,r){Z(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=nN(t,n);if(iF(e.visibleWrites,s))return null;{let t=iB(e.visibleWrites,s);return iq(t)?r.getChild(n):ij(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function iQ(e,t){var n,i;return n=e.writeTree,i=nN(e.treePath,t),iU(n.visibleWrites,i)}function iY(e,t,n){return function(e,t,n,i){let r=nN(t,n),s=iU(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?ij(iB(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function iX(e,t){return iJ(nN(e.treePath,t),e.writeTree)}function iJ(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;Z("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Z(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,it(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ie(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,n9(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,it(n,e.snapshotNode,i.oldSnap));else throw ee("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const i0=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class i1{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new iC(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iY(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:iA(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=iB(e.visibleWrites,t),h=iU(l,nE());if(null!=h)a=h;else{if(null==n)return[];a=ij(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function i2(e,t,n,i,r,s){let o=t.eventCache;if(null!=iQ(i,n))return t;{let a,l;if(nA(n)){if(Z(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=iA(t),r=iH(i,n instanceof n6?n:n6.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=iG(i,iA(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=nC(n);if(".priority"===h){Z(1===nT(n),"Can't have a priority with additional path components");let r=o.getNode(),s=iW(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let u;let c=nI(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=iW(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=iY(i,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,r,s):o.getNode()}}return ix(t,a,o.isFullyInitialized()||nA(n),e.filter.filtersNodes())}}function i6(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(nA(n))l=u.updateFullNode(h.getNode(),i,null);else if(u.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=u.updateFullNode(h.getNode(),e,null)}else{let e=nC(n);if(!h.isCompleteForPath(n)&&nT(n)>1)return t;let r=nI(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(h.getNode(),s):u.updateChild(h.getNode(),e,s,r,i0,null)}let c=ik(t,l,h.isFullyInitialized()||nA(n),u.filtersNodes()),f=new i1(r,c,s);return i2(e,c,n,r,f,a)}function i3(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,u=new i1(r,t,s);if(nA(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=ix(t,l,!0,e.filter.filtersNodes());else{let r=nC(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=ix(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=nI(n),c=h.getNode().getImmediateChild(r);if(nA(l))s=i;else{let e=u.getCompleteChild(r);s=null!=e?".priority"===nS(l)&&e.getChild(nk(l)).isEmpty()?e:e.updateChild(l,i):n6.EMPTY_NODE}a=c.equals(s)?t:ix(t,e.filter.updateChild(h.getNode(),r,s,l,u,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function i5(e,t){return e.eventCache.isCompleteForChild(t)}function i8(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function i4(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=nA(n)?i:new iD(null).setTree(n,i);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let l=i8(e,t.serverCache.getNode().getImmediateChild(n),i);h=i6(e,h,new nb(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){let l=i8(e,t.serverCache.getNode().getImmediateChild(n),i);h=i6(e,h,new nb(n),l,r,s,o,a)}}),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new ii(n.getIndex()),r=n.loadsAllData()?new ii(n.getIndex()):n.hasLimit()?new is(n):new ir(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(n6.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(n6.EMPTY_NODE,o.getNode(),null),h=new iC(a,s.isFullyInitialized(),i.filtersNodes()),u=new iC(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=iS(u,h),this.eventGenerator_=new iT(this.query_)}get query(){return this.query_}}function i9(e){return 0===e.eventRegistrations_.length}function re(e,t,n){let i=[];if(n){Z(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function rt(e,t,n,i){var r,s;t.type===w.MERGE&&null!==t.source.queryId&&(Z(iA(e.viewCache_),"We should always have a full cache before handling merges"),Z(iN(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new iZ;if(n.type===w.OVERWRITE)n.source.fromUser?s=i3(e,t,n.path,n.snap,i,r,a):(Z(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!nA(n.path),s=i6(e,t,n.path,n.snap,i,r,o,a));else if(n.type===w.MERGE){var l,h;let u;n.source.fromUser?(l=n.path,h=n.children,u=t,h.foreach((n,s)=>{let o=nN(l,n);i5(t,nC(o))&&(u=i3(e,u,o,s,i,r,a))}),h.foreach((n,s)=>{let o=nN(l,n);i5(t,nC(o))||(u=i3(e,u,o,s,i,r,a))}),s=u):(Z(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=i4(e,t,n.path,n.children,i,r,o,a))}else if(n.type===w.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=iQ(i,n))return t;{let a;let l=new i1(i,t,r),h=t.eventCache.getNode();if(nA(n)||".priority"===nC(n)){let n;if(t.serverCache.isFullyInitialized())n=iG(i,iA(t));else{let e=t.serverCache.getNode();Z(e instanceof n6,"serverChildren would be complete if leaf node"),n=iH(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=nC(n),u=iY(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=h.getImmediateChild(r)),(a=null!=u?e.filter.updateChild(h,r,u,nI(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,n6.EMPTY_NODE,nI(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=iG(i,iA(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=iQ(i,nE()),ix(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=iQ(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(nA(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return i6(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!nA(n))return t;{let i=new iD(null);return l.getNode().forEachChild(nj,(e,t)=>{i=i.set(new nb(e),t)}),i4(e,t,n,i,r,s,a,o)}}{let h=new iD(null);return i.foreach((e,t)=>{let i=nN(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),i4(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===w.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return i2(e,ik(t,s.getNode(),s.isFullyInitialized()||nA(n),s.isFiltered()),n,i,i0,r)}(e,t,n.path,i,a);else throw ee("Unknown operation type: "+n.type);let u=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=iN(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(n7(iN(t)))}}(t,s,u),{viewCache:s,changes:u}}(e.processor_,o,t,n,i);return r=e.processor_,Z((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),Z(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),Z(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,rn(e,a.changes,a.viewCache.eventCache.getNode(),null)}function rn(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),iI(e,r,"child_removed",t,i,n),iI(e,r,"child_added",t,i,n),iI(e,r,"child_moved",s,i,n),iI(e,r,"child_changed",t,i,n),iI(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class ri{constructor(){this.views=new Map}}function rr(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return Z(null!=s,"SyncTree gave us an op for an invalid query."),rt(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(rt(s,t,n,i));return r}}function rs(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ro(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=iA(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!nA(t)&&!n.getImmediateChild(nC(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function ra(e,t){if(t._queryParams.loadsAllData())return rh(e);{let n=t._queryIdentifier;return e.views.get(n)}}function rl(e){return null!=rh(e)}function rh(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let ru=1;class rc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new iD(null),this.pendingWriteTree_={visibleWrites:iP.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rf(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,Z(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=iL(s.visibleWrites,t,n)),s.lastWriteId=i,r)?r_(e,new ib(im(),t,n)):[]}function rd(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);Z(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return nP(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&nP(nN(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:nP(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=i$(e.allWrites,iz,nE()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=iM(e.visibleWrites,i.path):t2(i.children,t=>{e.visibleWrites=iM(e.visibleWrites,nN(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new iD(null);return null!=i.snap?t=t.set(nE(),!0):t2(i.children,e=>{t=t.set(new nb(e),!0)}),r_(e,new iv(i.path,t,n))}}function rp(e,t,n){return r_(e,new ib(iy(),t,n))}function rg(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=ra(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=rl(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(re(r,n,i)),i9(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(re(t,n,i)),i9(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!rl(e)&&s.push(new(Z(u,"Reference.ts has not been loaded"),u)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>rl(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&rl(t))return[rh(t)];{let e=[];return t&&(e=rs(t)),t2(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=rv(e,i);e.listenProvider_.startListening(rI(r),rw(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(rI(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(rb(t));e.listenProvider_.stopListening(rI(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=rb(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function rm(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=nR(e,s);o=o||ro(t,n),a=a||rl(t)});let l=e.syncPointTree_.get(s);l?(a=a||rl(l),o=o||ro(l,nE())):(l=new ri,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=n6.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=ro(t,nE());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=ra(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=rb(t);Z(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=ru++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=function(e,t,n,i,r,s){let o=function(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=iG(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof n6?iH(n,i):n6.EMPTY_NODE,s=!1),new i7(t,iS(new iC(e,s,!1),new iC(i,r,!1)))}return o}(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),!function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(nX,(e,t)=>{i.push(n9(e,t))}),n.isFullyInitialized()&&i.push(n7(n.getNode())),rn(e,i,n.getNode(),t)}(o,n)}(l,t,n,iJ(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=ra(l,t);u=u.concat(function(e,t,n){let i=t._path,r=rw(e,t),s=rv(e,n),o=e.listenProvider_.startListening(rI(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)Z(!rl(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!nA(e)&&t&&rl(t))return[rh(t).query];{let e=[];return t&&(e=e.concat(rs(t).map(e=>e.query))),t2(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(rI(i),rw(e,i))}}return o}(e,t,n))}return u}function ry(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=ro(n,nR(e,t));if(i)return i});return iK(i,t,r,n,!0)}function r_(e,t){var n;return function e(t,n,i,r){if(nA(t.path))return function e(t,n,i,r){let s=n.get(nE());null==i&&null!=s&&(i=ro(s,nE()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=iX(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(rr(s,t,r,i))),o}(t,n,i,r);{let s=n.get(nE());null==i&&null!=s&&(i=ro(s,nE()));let o=[],a=nC(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=iX(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(rr(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,iJ(nE(),n)))}function rv(e,t){let n=t.query,i=rw(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||n6.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=rE(e,n);if(!i)return[];{let n=rC(i),r=n.path,s=n.queryId,o=nR(r,t);return rT(e,r,new iw(i_(s),o))}}(e,n._path,i):(r=n._path,r_(e,new iw(iy(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return rg(e,n,null,i)}}}}function rw(e,t){let n=rb(t);return e.queryToTagMap.get(n)}function rb(e){return e._path.toString()+"$"+e._queryIdentifier}function rE(e,t){return e.tagToQueryMap.get(t)}function rC(e){let t=e.indexOf("$");return Z(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new nb(e.substr(0,t))}}function rT(e,t,n){let i=e.syncPointTree_.get(t);return Z(i,"Missing sync point for query tag that we're tracking"),rr(i,n,iJ(t,e.pendingWriteTree_),null)}function rI(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Z(c,"Reference.ts has not been loaded"),c)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.node_=e}getImmediateChild(e){return new rS(this.node_.getImmediateChild(e))}node(){return this.node_}}class rx{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=nN(this.path_,e);return new rx(this.syncTree_,t)}node(){return ry(this.syncTree_,this.path_)}}const rk=function(e,t,n){return e&&"object"==typeof e?(Z(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?rN(e[".sv"],t,n):"object"==typeof e[".sv"]?rA(e[".sv"],t):void Z(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},rN=function(e,t,n){if("timestamp"===e)return n.timestamp;Z(!1,"Unexpected server value: "+e)},rA=function(e,t,n){e.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&Z(!1,"Unexpected increment value: "+i);let r=t.node();if(Z(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},rR=function(e,t,n){return rD(e,new rS(t),n)};function rD(e,t,n){let i;let r=rk(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new nY(r))),e.forEachChild(nX,(e,r)=>{let s=rD(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=rk(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new nY(i,n5(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function rL(e,t){let n=t instanceof nb?t:new nb(t),i=e,r=nC(n);for(;null!==r;){let e=eN(i.node.children,r)||{children:{},childCount:0};i=new rP(r,i,e),r=nC(n=nI(n))}return i}function rO(e){return e.node.value}function rM(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===rO(i)&&!rF(i),s=ek(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function rF(e){return e.node.childCount>0}function rU(e,t){t2(e.node.children,(n,i)=>{t(new rP(n,e,i))})}function rV(e){return new nb(null===e.parent?e.name:rV(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB=/[\[\].#$\/\u0000-\u001F\u007F]/,rq=/[\[\].#$\u0000-\u001F\u007F]/,rj=function(e){return"string"==typeof e&&0!==e.length&&!rB.test(e)},rz=function(e){return"string"==typeof e&&0!==e.length&&!rq.test(e)},r$=function(e,t,n,i){i&&void 0===t||rK(eO(e,"value"),t,n)},rK=function(e,t,n){let i=n instanceof nb?new nL(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+nM(i));if("function"==typeof t)throw Error(e+"contains a function "+nM(i)+" with contents = "+t.toString());if(tH(t))throw Error(e+"contains "+t.toString()+" "+nM(i));if("string"==typeof t&&t.length>0xa00000/3&&eF(t)>0xa00000)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+nM(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(t2(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!rj(t)))throw Error(e+" contains an invalid key ("+t+") "+nM(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=eF(t),nO(i),rK(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=eF(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+nM(i)+" in addition to actual children.")}},rG=function(e,t,n,i){if((!i||void 0!==n)&&!rz(n))throw Error(eO(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},rH=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rG(e,t,n,i)},rW=function(e,t){if(".info"===nC(t))throw Error(e+" failed = Can't modify data under /.info/")},rQ=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rj(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!rz(n)))throw Error(eO(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rX(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||nD(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function rJ(e,t,n){rX(e,n),r0(e,e=>nD(e,t))}function rZ(e,t,n){rX(e,n),r0(e,e=>nP(e,t)||nP(t,e))}function r0(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();tU&&tq("event: "+n.toString()),t8(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}class r1{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rY,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new rP,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function r2(e){let t=e.infoData_.getNode(new nb(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function r6(e){var t;return(t=t={timestamp:r2(e)}).timestamp=t.timestamp||new Date().getTime(),t}function r3(e,t,n,i,r){e.dataUpdateCount++;let s=new nb(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=eR(n,e=>n5(e));o=function(e,t,n,i){let r=rE(e,i);if(!r)return[];{let i=rC(r),s=i.path,o=i.queryId,a=nR(s,t),l=iD.fromObject(n);return rT(e,s,new iE(i_(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=n5(n);o=function(e,t,n,i){let r=rE(e,i);if(null==r)return[];{let i=rC(r),s=i.path,o=i.queryId,a=nR(s,t);return rT(e,s,new ib(i_(o),a,n))}}(e.serverSyncTree_,s,t,r)}}else if(i){let t=eR(n,e=>n5(e));o=function(e,t,n){let i=iD.fromObject(n);return r_(e,new iE(iy(),t,i))}(e.serverSyncTree_,s,t)}else{let t=n5(n);o=rp(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=st(e,s)),rZ(e.eventQueue_,a,o)}function r5(e,t){r8(e,"connected",t),!1===t&&function(e){r9(e,"onDisconnectEvents");let t=r6(e),n=ic();id(e.onDisconnect_,nE(),(i,r)=>{let s=rD(r,new rx(e.serverSyncTree_,i),t);!function e(t,n,i){if(nA(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=nC(n);t.children.has(r)||t.children.set(r,ic()),e(t.children.get(r),n=nI(n),i)}}(n,i,s)});let i=[];id(n,nE(),(t,n)=>{i=i.concat(rp(e.serverSyncTree_,t,n));let r=ss(e,t);st(e,r)}),e.onDisconnect_=ic(),rZ(e.eventQueue_,nE(),i)}(e)}function r8(e,t,n){let i=new nb("/.info/"+t),r=n5(n);e.infoData_.updateSnapshot(i,r);let s=rp(e.infoSyncTree_,i,r);rZ(e.eventQueue_,i,s)}function r4(e){return e.nextWriteId_++}function r7(e,t,n){let i;i=".info"===nC(t._path)?rg(e.infoSyncTree_,t,n):rg(e.serverSyncTree_,t,n),rJ(e.eventQueue_,t._path,i)}function r9(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tq(n,...t)}function se(e,t,n){return ry(e.serverSyncTree_,t,n)||n6.EMPTY_NODE}function st(e,t){let n=sn(e,t),i=rV(n),r=si(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=nR(n,a.path),h=!1,u;if(Z(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,u=a.abortReason,r=r.concat(rd(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,u="maxretry",r=r.concat(rd(e.serverSyncTree_,a.currentWriteId,!0));else{let n=se(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){rK("transaction failed: Data returned ",i,a.path);let t=n5(i);"object"==typeof i&&null!=i&&ek(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=rR(t,n,r6(e));a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=l,a.currentWriteId=r4(e),s.splice(s.indexOf(o),1),r=(r=r.concat(rf(e.serverSyncTree_,a.path,l,a.currentWriteId,a.applyLocally))).concat(rd(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(rd(e.serverSyncTree_,a.currentWriteId,!0))}}rZ(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===u?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(u),!1,null))))}sr(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)t8(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||sr(t,n),rO(n)){let i=si(t,n);Z(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=se(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];Z(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=nR(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{r9(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(rd(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();sr(t,rL(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),rZ(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)t8(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{tK("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}st(t,n)}},o)}(t,rV(n),i)}else rF(n)&&rU(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function sn(e,t){let n;let i=e.transactionQueueTree_;for(n=nC(t);null!==n&&void 0===rO(i);)i=rL(i,n),n=nC(t=nI(t));return i}function si(e,t){let n=[];return function e(t,n,i){let r=rO(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);rU(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function sr(e,t){let n=rO(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rM(t,n.length>0?n:void 0)}rU(t,t=>{sr(e,t)})}function ss(e,t){let n=rV(sn(e,t)),i=rL(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{so(e,t)}),so(e,i),!function e(t,n,i,r){i&&!r&&n(t),rU(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{so(e,t)}),n}function so(e,t){let n=rO(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Z(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Z(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(rd(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?rM(t,void 0):n.length=s+1,rZ(e.eventQueue_,rV(t),r);for(let e=0;e<i.length;e++)t8(i[e])}}const sa=function(e,t){let n=sl(e),i=n.namespace;"firebase.com"===n.domain&&t$(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||t$("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tG();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new nr(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new nb(n.pathString)}},sl=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,c)));let f=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):tK(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let d=t.slice(0,h);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},sh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",su=function(){let e=0,t=[];return function(n){let i;let r=n===e;e=n;let s=Array(8);for(i=7;i>=0;i--)s[i]=sh.charAt(n%64),n=Math.floor(n/64);Z(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=sh.charAt(t[i]);return Z(20===o.length,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+eT(this.snapshot.exportVal())}}class sf{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return nA(this._path)?null:nS(this._path)}get ref(){return new sg(this._repo,this._path)}get _queryIdentifier(){let e=t0(il(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return il(this._queryParams)}isEqual(e){if(!((e=eU(e))instanceof sp))return!1;let t=this._repo===e._repo,n=nD(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class sg extends sp{constructor(e,t){super(e,t,new io,!1)}get parent(){let e=nk(this._path);return null===e?null:new sg(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class sm{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new nb(e),n=s_(this.ref,e);return new sm(this._node.getChild(t),n,nX)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new sm(n,s_(this.ref,t),nX)))}hasChild(e){let t=new nb(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sy(e,t){return(e=eU(e))._checkNotDeleted("ref"),void 0!==t?s_(e._root,t):e._root}function s_(e,t){return null===nC((e=eU(e))._path)?rH("child","path",t,!1):rG("child","path",t,!1),new sg(e._repo,nN(e._path,t))}class sv{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new sc("value",this,new sm(e.snapshotNode,new sg(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new sf(this,e,t):null}matches(e){return e instanceof sv&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class sw{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new sf(this,e,t):null}createEvent(e,t){Z(null!=e.childName,"Child events should have a childName.");let n=s_(new sg(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new sc(e.type,this,new sm(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sw&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}Z(!u,"__referenceConstructor has already been defined"),u=sg,Z(!c,"__referenceConstructor has already been defined"),c=sg;const sb={};class sE{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=nh(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ih(e.repoInfo_,(t,n,i,r)=>{r3(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>r5(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{eT(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new nU(e.repoInfo_,t,(t,n,i,r)=>{r3(e,t,n,i,r)},t=>{r5(e,t)},t=>{t2(t,(t,n)=>{r8(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return nl[n]||(nl[n]=t()),nl[n]}(e.repoInfo_,()=>new ig(e.stats_,e.server_)),e.infoData_=new iu,e.infoSyncTree_=new rc({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=rp(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),r8(e,"connected",!1),e.serverSyncTree_=new rc({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);rZ(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sg(this._repo,nE())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=sb[t];n&&n[e.key]===e||t$(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&t$("Cannot call "+e+" on a deleted database.")}}nU.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},nU.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},tk=tf,tl(new eV("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,u,c=i||e.options.databaseURL;void 0===c&&(e.options.projectId||t$("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tq("Using default host for project ",e.options.projectId),c=`${e.options.projectId}-default-rtdb.firebaseio.com`);let f=sa(c,void 0),d=f.repoInfo;void 0!==B&&B.env&&(h=B.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(u=!0,d=(f=sa(c=`http://${h}?ns=${d.namespace}`,void 0)).repoInfo):u=!f.repoInfo.secure;let p=new t9(e.name,e.options,t);return rQ("Invalid Firebase Database URL",f),nA(f.path)||t$("Database URL must point to the root of a Firebase Database (not including a child path)."),new sE((s=d,o=new t7(e.name,n),(a=sb[e.name])||(a={},sb[e.name]=a),(l=a[s.toURLString()])&&t$("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new r1(s,!1,p,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),tg(tS,tx,void 0),tg(tS,tx,"esm2017");var sC="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==V?V:"undefined"!=typeof self?self:{},sT={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+0xd76aa478&0xffffffff;o=s+(r^(t=n+(o<<7&0xffffffff|o>>>25))&(n^r))+i[1]+0xe8c7b756&0xffffffff,o=r+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+i[2]+0x242070db&0xffffffff,o=n+(t^(r=s+(o<<17&0xffffffff|o>>>15))&(s^t))+i[3]+0xc1bdceee&0xffffffff,o=t+(s^(n=r+(o<<22&0xffffffff|o>>>10))&(r^s))+i[4]+0xf57c0faf&0xffffffff,o=s+(r^(t=n+(o<<7&0xffffffff|o>>>25))&(n^r))+i[5]+0x4787c62a&0xffffffff,o=r+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+i[6]+0xa8304613&0xffffffff,o=n+(t^(r=s+(o<<17&0xffffffff|o>>>15))&(s^t))+i[7]+0xfd469501&0xffffffff,o=t+(s^(n=r+(o<<22&0xffffffff|o>>>10))&(r^s))+i[8]+0x698098d8&0xffffffff,o=s+(r^(t=n+(o<<7&0xffffffff|o>>>25))&(n^r))+i[9]+0x8b44f7af&0xffffffff,o=r+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+i[10]+0xffff5bb1&0xffffffff,o=n+(t^(r=s+(o<<17&0xffffffff|o>>>15))&(s^t))+i[11]+0x895cd7be&0xffffffff,o=t+(s^(n=r+(o<<22&0xffffffff|o>>>10))&(r^s))+i[12]+0x6b901122&0xffffffff,o=s+(r^(t=n+(o<<7&0xffffffff|o>>>25))&(n^r))+i[13]+0xfd987193&0xffffffff,o=r+(n^(s=t+(o<<12&0xffffffff|o>>>20))&(t^n))+i[14]+0xa679438e&0xffffffff,o=n+(t^(r=s+(o<<17&0xffffffff|o>>>15))&(s^t))+i[15]+0x49b40821&0xffffffff,n=r+(o<<22&0xffffffff|o>>>10),o=t+(r^s&(n^r))+i[1]+0xf61e2562&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^r&(t^n))+i[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=r+(t^n&(s^t))+i[11]+0x265e5a51&0xffffffff,r=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(r^s))+i[0]+0xe9b6c7aa&0xffffffff,n=r+(o<<20&0xffffffff|o>>>12),o=t+(r^s&(n^r))+i[5]+0xd62f105d&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^r&(t^n))+i[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=r+(t^n&(s^t))+i[15]+0xd8a1e681&0xffffffff,r=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(r^s))+i[4]+0xe7d3fbc8&0xffffffff,n=r+(o<<20&0xffffffff|o>>>12),o=t+(r^s&(n^r))+i[9]+0x21e1cde6&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^r&(t^n))+i[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=r+(t^n&(s^t))+i[3]+0xf4d50d87&0xffffffff,r=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(r^s))+i[8]+0x455a14ed&0xffffffff,n=r+(o<<20&0xffffffff|o>>>12),o=t+(r^s&(n^r))+i[13]+0xa9e3e905&0xffffffff,t=n+(o<<5&0xffffffff|o>>>27),o=s+(n^r&(t^n))+i[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=r+(t^n&(s^t))+i[7]+0x676f02d9&0xffffffff,r=s+(o<<14&0xffffffff|o>>>18),o=n+(s^t&(r^s))+i[12]+0x8d2a4c8a&0xffffffff,o=t+((n=r+(o<<20&0xffffffff|o>>>12))^r^s)+i[5]+0xfffa3942&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^r)+i[8]+0x8771f681&0xffffffff,o=r+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+i[11]+0x6d9d6122&0xffffffff,o=n+((r=s+(o<<16&0xffffffff|o>>>16))^s^t)+i[14]+0xfde5380c&0xffffffff,o=t+((n=r+(o<<23&0xffffffff|o>>>9))^r^s)+i[1]+0xa4beea44&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^r)+i[4]+0x4bdecfa9&0xffffffff,o=r+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+i[7]+0xf6bb4b60&0xffffffff,o=n+((r=s+(o<<16&0xffffffff|o>>>16))^s^t)+i[10]+0xbebfbc70&0xffffffff,o=t+((n=r+(o<<23&0xffffffff|o>>>9))^r^s)+i[13]+0x289b7ec6&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^r)+i[0]+0xeaa127fa&0xffffffff,o=r+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+i[3]+0xd4ef3085&0xffffffff,o=n+((r=s+(o<<16&0xffffffff|o>>>16))^s^t)+i[6]+0x4881d05&0xffffffff,o=t+((n=r+(o<<23&0xffffffff|o>>>9))^r^s)+i[9]+0xd9d4d039&0xffffffff,o=s+((t=n+(o<<4&0xffffffff|o>>>28))^n^r)+i[12]+0xe6db99e5&0xffffffff,o=r+((s=t+(o<<11&0xffffffff|o>>>21))^t^n)+i[15]+0x1fa27cf8&0xffffffff,o=n+((r=s+(o<<16&0xffffffff|o>>>16))^s^t)+i[2]+0xc4ac5665&0xffffffff,n=r+(o<<23&0xffffffff|o>>>9),o=t+(r^(n|~s))+i[0]+0xf4292244&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~r))+i[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=r+(t^(s|~n))+i[14]+0xab9423a7&0xffffffff,r=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(r|~t))+i[5]+0xfc93a039&0xffffffff,n=r+(o<<21&0xffffffff|o>>>11),o=t+(r^(n|~s))+i[12]+0x655b59c3&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~r))+i[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=r+(t^(s|~n))+i[10]+0xffeff47d&0xffffffff,r=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(r|~t))+i[1]+0x85845dd1&0xffffffff,n=r+(o<<21&0xffffffff|o>>>11),o=t+(r^(n|~s))+i[8]+0x6fa87e4f&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~r))+i[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=r+(t^(s|~n))+i[6]+0xa3014314&0xffffffff,r=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(r|~t))+i[13]+0x4e0811a1&0xffffffff,n=r+(o<<21&0xffffffff|o>>>11),o=t+(r^(n|~s))+i[4]+0xf7537e82&0xffffffff,t=n+(o<<6&0xffffffff|o>>>26),o=s+(n^(t|~r))+i[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=r+(t^(s|~n))+i[2]+0x2ad7d2bb&0xffffffff,r=s+(o<<15&0xffffffff|o>>>17),o=n+(s^(r|~t))+i[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(r+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+r&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var i=n-this.blockSize,r=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=i;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(r[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,r),s=0;break}}else for(;o<n;)if(r[s++]=e[o++],s==this.blockSize){t(this,r),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var i,r={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=t(e)):new n([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return f(o(-e));for(var t=[],i=1,r=0;e>=i;r++)t[r]=e/i|0,i*=0x100000000;return new n(t,0)}var a=s(0),l=s(1),h=s(0x1000000);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function c(e){return -1==e.h}function f(e){for(var t=e.g.length,i=[],r=0;r<t;r++)i[r]=~e.g[r];return new n(i,~e.h).add(l)}function d(e,t){return e.add(f(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(u(t))throw Error("division by zero");if(u(e))return new g(a,a);if(c(e))return t=m(f(e),t),new g(f(t.g),f(t.h));if(c(t))return t=m(e,f(t)),new g(f(t.g),t.h);if(30<e.g.length){if(c(e)||c(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,i=t;0>=i.l(e);)n=y(n),i=y(i);var r=_(n,1),s=_(i,1);for(i=_(i,2),n=_(n,2);!u(i);){var h=s.add(i);0>=h.l(e)&&(r=r.add(n),s=h),i=_(i,1),n=_(n,1)}return t=d(e,r.j(t)),new g(r,t)}for(r=a;0<=e.l(t);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,i-48),h=(s=o(n)).j(t);c(h)||0<h.l(e);)n-=i,h=(s=o(n)).j(t);u(s)&&(s=l),r=r.add(s),e=d(e,h)}return new g(r,e)}function y(e){for(var t=e.g.length+1,i=[],r=0;r<t;r++)i[r]=e.i(r)<<1|e.i(r-1)>>>31;return new n(i,e.h)}function _(e,t){var i=t>>5;t%=32;for(var r=e.g.length-i,s=[],o=0;o<r;o++)s[o]=0<t?e.i(o+i)>>>t|e.i(o+i+1)<<32-t:e.i(o+i);return new n(s,e.h)}(i=n.prototype).m=function(){if(c(this))return-f(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.i(n);e+=(0<=i?i:0x100000000+i)*t,t*=0x100000000}return e},i.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(c(this))return"-"+f(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,i="";;){var r=m(n,t).g,s=((0<(n=d(n,r.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},i.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},i.l=function(e){return c(e=d(this,e))?-1:u(e)?0:1},i.abs=function(){return c(this)?f(this):this},i.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0,s=0;s<=t;s++){var o=r+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);r=a>>>16,o&=65535,a&=65535,i[s]=a<<16|o}return new n(i,-0x80000000&i[i.length-1]?-1:0)},i.j=function(e){if(u(this)||u(e))return a;if(c(this))return c(e)?f(this).j(f(e)):f(f(this).j(e));if(c(e))return f(this.j(f(e)));if(0>this.l(h)&&0>e.l(h))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,i=[],r=0;r<2*t;r++)i[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var l=this.i(r)>>>16,d=65535&this.i(r),g=e.i(s)>>>16,m=65535&e.i(s);i[2*r+2*s]+=d*m,p(i,2*r+2*s),i[2*r+2*s+1]+=l*m,p(i,2*r+2*s+1),i[2*r+2*s+1]+=d*g,p(i,2*r+2*s+1),i[2*r+2*s+2]+=l*g,p(i,2*r+2*s+2)}for(r=0;r<t;r++)i[r]=i[2*r+1]<<16|i[2*r];for(r=t;r<2*t;r++)i[r]=0;return new n(i,0)},i.A=function(e){return m(this,e).h},i.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)&e.i(r);return new n(i,this.h&e.h)},i.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)|e.i(r);return new n(i,this.h|e.h)},i.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)^e.i(r);return new n(i,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,E=sT.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=o,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return f(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=o(Math.pow(n,8)),r=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),h=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),r=r.j(l).add(o(h))):r=(r=r.j(i)).add(o(h))}return r},b=sT.Integer=n}).apply(void 0!==sC?sC:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var sI="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==V?V:"undefined"!=typeof self?self:{},sS={};(function(){var e,t,n,i="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof sI&&sI];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&i(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,i,r;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,i=!1,(r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return r},r}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e,t,n){return e.call.apply(e.bind,arguments)}function u(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:u).apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function p(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function g(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(a(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function m(e){return/^[\s\xa0]*$/.test(e)}function y(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function _(e){return _[" "](e),e}_[" "]=function(){};var v=-1!=y().indexOf("Gecko")&&!(-1!=y().toLowerCase().indexOf("webkit")&&-1==y().indexOf("Edge"))&&!(-1!=y().indexOf("Trident")||-1!=y().indexOf("MSIE"))&&-1==y().indexOf("Edge");function w(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function b(e){let t={};for(let n in e)t[n]=e[n];return t}let E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<E.length;t++)n=E[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var D=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new P,e=>e.reset());class P{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let L,O=!1,M=new class{constructor(){this.h=this.g=null}add(e,t){let n=D.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},F=()=>{let e=o.Promise.resolve(void 0);L=()=>{e.then(U)}};var U=()=>{let e;for(var t;e=null,M.g&&(e=M.g,M.g=M.g.next,M.g||(M.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}D.j(t),100>D.h&&(D.h++,t.next=D.g,D.g=t)}O=!1};function V(){this.s=this.s,this.C=this.C}function B(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function j(e,t){if(B.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{_(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&j.aa.h.call(this)}}d(j,B);var z={2:"touch",3:"pen",4:"mouse"};j.prototype.h=function(){j.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),K=0;function G(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++K,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function W(e){this.src=e,this.g={},this.h=0}function Q(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Array.prototype.indexOf.call(r,t,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(H(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Y(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==i)return r}return -1}W.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Y(e,t,i,r);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new G(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var X="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=l(r)?!!r.capture:!!r,a=ei(e);if(a||(e[X]=a=new W(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function e(t){return en.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)q||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(et(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[$])Q(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(et(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ei(t))?(Q(n,e),0==n.h&&(n.src=null,t[X]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function en(e,t){if(e.da)e=!0;else{t=new j(t,this);var n=e.listener,i=e.ha||e.src;e.fa&&ee(e),e=n.call(i,t)}return e}function ei(e){return(e=e[X])instanceof W?e:null}var er="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[er]||(e[er]=function(t){return e.handleEvent(t)}),e[er])}function eo(){V.call(this),this.i=new W(this),this.M=this,this.F=null}function ea(e,t){var n,i=e.F;if(i)for(n=[];i;i=i.F)n.push(i);if(e=e.M,i=t.type||t,"string"==typeof t)t=new B(t,e);else if(t instanceof B)t.target=t.target||e;else{var r=t;R(t=new B(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=el(o,i,!0,t)&&r}if(r=el(o=t.g=e,i,!0,t)&&r,r=el(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=el(o=t.g=n[s],i,!1,t)&&r}function el(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&Q(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}function eh(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}d(eo,V),eo.prototype[$]=!0,eo.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);else(r=l(r)?!!r.capture:!!r,i=es(i),t&&t[$])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=Y(o=t.g[n],i,r,s))&&(H(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ei(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Y(n,i,r,s)),(i=-1<t?n[t]:null)&&ee(i))}(this,e,t,n,i)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)H(n[i]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},eo.prototype.L=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};class eu extends V{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){V.call(this),this.h=e,this.g={}}d(ec,V);var ef=[];function ed(e){w(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function e_(e){return e.h||(e.h=e.i())}function ev(){}ey.prototype.h=null;var ew={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eb(){B.call(this,"d")}function eE(){B.call(this,"c")}d(eb,B),d(eE,B);var eC={},eT=null;function eI(){return eT=eT||new eo}function eS(e){B.call(this,eC.La,e)}function ex(e){let t=eI();ea(t,new eS(t))}function ek(e,t){B.call(this,eC.STAT_EVENT,e),this.stat=t}function eN(e){let t=eI();ea(t,new ek(t,e))}function eA(e,t){B.call(this,eC.Ma,e),this.size=t}function eR(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function eD(){this.g=!0}function eP(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return ep(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}eC.La="serverreachability",d(eS,B),eC.STAT_EVENT="statevent",d(ek,B),eC.Ma="timingevent",d(eA,B),eD.prototype.xa=function(){this.g=!1},eD.prototype.info=function(){};var eL={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eO={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eM(){}function eF(e,t,n,i){this.j=e,this.i=t,this.l=n,this.R=i||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eU}function eU(){this.i=null,this.g="",this.h=!1}d(eM,ey),eM.prototype.g=function(){return new XMLHttpRequest},eM.prototype.i=function(){return{}},t=new eM;var eV={},eB={};function eq(e,t,n){e.L=1,e.v=tn(e4(t)),e.m=n,e.P=!0,ej(e,null)}function ej(e,t){e.F=Date.now(),e$(e),e.A=e4(e.v);var n=e.A,i=e.R;Array.isArray(i)||(i=[String(i)]),tg(n.i,"t",i),e.C=0,n=e.j.J,e.h=new eU,e.g=t1(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eu(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,i=e.ca;var r="readystatechange";Array.isArray(r)||(r&&(ef[0]=r.toString()),r=ef);for(var s=0;s<r.length;s++){var o=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);return null}return i=es(i),t&&t[$]?t.L(n,i,l(r)?!!r.capture:!!r,s):Z(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);return null}return i=es(i),t&&t[$]?t.K(n,i,l(r)?!!r.capture:!!r,s):Z(t,n,i,!1,r,s)}(n,r[s],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function ez(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function e$(e){e.S=Date.now()+e.I,eK(e,e.I)}function eK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eR(c(e.ba,e),t)}function eG(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tY(e.j,e)}function eW(e){eG(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eQ(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e0(n.h,e))){if(!e.K&&e0(n.h,e)&&3==n.G){try{var i=n.Da.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tQ(n),tV(n);else break e}tG(n),eN(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=eR(c(n.Za,n),6e3));if(1>=eZ(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else tJ(n,11)}else if((e.K||n.g==e)&&tQ(n),!m(t))for(r=n.Da.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let r=a[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(i.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.ya=e,tt(i.I,i.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(i=n).qa=t0(i,i.J?i.ia:null,i.W),e.K){e2(i.h,e);var o=i.L;o&&(e.I=o),e.B&&(eG(e),e$(e)),i.g=e}else tK(i);0<n.i.length&&tq(n)}else"stop"!=a[0]&&"close"!=a[0]||tJ(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?tJ(n,7):tU(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}ex(4)}catch(e){}}eF.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tL(e)?t.j():this.Y(e)},eF.prototype.Y=function(e){try{if(e==this.g)e:{let f=tL(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tO(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?ex(3):ex(2)),eG(this);var n=this.g.Z();this.X=n;t:if(ez(this)){var i=tO(this.g);e="";var r=i.length,s=4==tL(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eW(this),eH(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:!(s&&t==r-1)});i.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(l)){var u=l;break t}}u=null}if(n=u)eP(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eQ(this,n);else{this.o=!1,this.s=3,eN(12),eW(this),eH(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var n=e.C,i=t.indexOf("\n",n);return -1==i?eB:isNaN(n=Number(t.substring(n,i)))?eV:(i+=1)+n>t.length?eB:(t=t.slice(i,i+n),e.C=i+n,t)}(this,a))==eB){4==f&&(this.s=4,eN(14),n=!1),eP(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eV){this.s=4,eN(15),eP(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else eP(this.i,this.l,e,null),eQ(this,e);if(ez(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eN(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tH(c),c.M=!0,eN(11))}}else eP(this.i,this.l,a,"[Invalid Chunked Response]"),eW(this),eH(this)}else eP(this.i,this.l,a,null),eQ(this,a);4==f&&eW(this),this.o&&!this.J&&(4==f?tY(this.j,this):(this.o=!1,e$(this)))}else(function(e){let t={};e=(e.g&&2<=tL(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(m(e[i]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eN(12)):(this.s=0,eN(13)),eW(this),eH(this)}}}catch(e){}finally{}},eF.prototype.cancel=function(){this.J=!0,eW(this)},eF.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eN(17)),eW(this),this.s=2,eH(this)):eK(this,this.S-e)};var eY=class{constructor(e,t){this.g=e,this.map=t}};function eX(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return p(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}eX.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,n=new tc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),te(this,n),this.m=e.m}else e&&(t=String(e).match(e5))?(this.h=!1,e7(this,t[1]||"",!0),this.o=ti(t[2]||""),this.g=ti(t[3]||"",!0),e9(this,t[4]),this.l=ti(t[5]||"",!0),te(this,t[6]||"",!0),this.m=ti(t[7]||"")):(this.h=!1,this.i=new tc(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,n){e.j=n?ti(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,n){var i,r;t instanceof tc?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(tf(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(td(this,t),tg(this,n,e))},i)),i.j=r):(n||(t=tr(t,th)),e.i=new tc(t,e.h))}function tt(e,t,n){e.i.set(t,n)}function tn(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ti(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tr(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ts),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ts(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tr(t,to,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(tr(t,to,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tr(n,"/"==n.charAt(0)?tl:ta,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",tr(n,tu)),e.join("")};var to=/[#\/\?@]/g,ta=/[#\?:]/g,tl=/[#\?]/g,th=/[#\?@]/g,tu=/#/g;function tc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tf(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function td(e,t){tf(e),t=tm(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tp(e,t){return tf(e),t=tm(e,t),e.g.has(t)}function tg(e,t,n){td(e,t),0<n.length&&(e.i=null,e.g.set(tm(e,t),p(n)),e.h+=n.length)}function tm(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ty(e,t,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(e){}}function t_(){this.g=new em}function tv(e){this.l=e.Ub||null,this.j=e.eb||!1}function tw(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tb(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tE(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tC(e)}function tC(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tT(e){let t="";return w(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tI(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=tT(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tt(e,t,n))}function tS(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tc.prototype).add=function(e,t){tf(this),this.i=null,e=tm(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tf(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},n.na=function(){tf(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},n.V=function(e){tf(this);let t=[];if("string"==typeof e)tp(this,e)&&(t=t.concat(this.g.get(tm(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tf(this),this.i=null,tp(this,e=tm(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")},d(tv,ey),tv.prototype.g=function(){return new tw(this.l,this.j)},tv.prototype.i=(e={},function(){return e}),d(tw,eo),(n=tw.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tC(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tE(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tC(this)),this.g&&(this.readyState=3,tC(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tb(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tE(this):tC(this),3==this.readyState&&tb(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tE(this))},n.Qa=function(e){this.g&&(this.response=e,tE(this))},n.ga=function(){this.g&&tE(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tw.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(tS,eo);var tx=/^https?$/i,tk=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tA(e),tD(e)}function tA(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tR(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tL(e)||2!=e.Z())){if(e.u&&4==tL(e))eh(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tL(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===s){var r=String(e.D).match(e5)[1]||null;!r&&o.self&&o.self.location&&(r=o.self.location.protocol.slice(0,-1)),n=!tx.test(r?r.toLowerCase():"")}t=n}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tL(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tA(e)}}finally{tD(e)}}}}function tD(e,t){if(e.g){tP(e);let n=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function tP(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tL(e){return e.g?e.g.readyState:0}function tO(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tM(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eD,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tM("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tM("baseRetryDelayMs",5e3,e),this.cb=tM("retryDelaySeedMs",1e4,e),this.Wa=tM("forwardChannelMaxRetries",2,e),this.wa=tM("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eX(e&&e.concurrentRequestLimit),this.Da=new t_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tU(e){if(tB(e),3==e.G){var t=e.U++,n=e4(e.I);if(tt(n,"SID",e.K),tt(n,"RID",t),tt(n,"TYPE","terminate"),tz(e,n),(t=new eF(e,e.j,t)).L=2,t.v=tn(e4(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&o.Image&&((new Image).src=t.v,n=!0),n||(t.g=t1(t.j,null),t.g.ea(t.v)),t.F=Date.now(),e$(t)}tZ(e)}function tV(e){e.g&&(tH(e),e.g.cancel(),e.g=null)}function tB(e){tV(e),e.u&&(o.clearTimeout(e.u),e.u=null),tQ(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tq(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;L||F(),O||(L(),O=!0),M.add(t,e),e.B=0}}function tj(e,t){var n;n=t?t.l:e.U++;let i=e4(e.I);tt(i,"SID",e.K),tt(i,"RID",n),tt(i,"AID",e.T),tz(e,i),e.m&&e.o&&tI(i,e.m,e.o),n=new eF(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=t$(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,n),eq(n,i,t)}function tz(e,t){e.H&&w(e.H,function(e,n){tt(t,n,e)}),e.l&&e3({},function(e,n){tt(t,n,e)})}function t$(e,t,n){n=Math.min(e.i.length,n);var i=e.l?c(e.l.Na,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].g,a=r[o].map;if(0>(n-=t))t=Math.max(0,r[o].g-100),s=!1;else try{!function(e,t,n){let i=n||"";try{e3(e,function(e,n){let r=e;l(e)&&(r=ep(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function tK(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;L||F(),O||(L(),O=!0),M.add(t,e),e.v=0}}function tG(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eR(c(e.Fa,e),tX(e,e.v)),e.v++,!0)}function tH(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tW(e){e.g=new eF(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tz(e,t),e.m&&e.o&&tI(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=tn(e4(t)),n.m=null,n.P=!0,ej(n,e)}function tQ(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tY(e,t){var n=null;if(e.g==t){tQ(e),tH(e),e.g=null;var i=2}else{if(!e0(e.h,t))return;n=t.D,e2(e.h,t),i=1}if(0!=e.G){if(t.o){if(1==i){n=t.m?t.m.length:0,t=Date.now()-t.F;var r,s=e.B;ea(i=eI(),new eA(i,n)),tq(e)}else tK(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==i&&(r=t,!(eZ(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=r.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eR(c(e.Ga,e,r),tX(e,e.B)),e.B++,!0)))||2==i&&tG(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:tJ(e,5);break;case 4:tJ(e,10);break;case 3:tJ(e,6);break;default:tJ(e,2)}}}function tX(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function tJ(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),i=e.Xa;let t=!i;i=new e8(i||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||e7(i,"https"),tn(i),t?function(e,t){let n=new eD;if(o.Image){let i=new Image;i.onload=f(ty,n,"TestLoadImage: loaded",!0,t,i),i.onerror=f(ty,n,"TestLoadImage: error",!1,t,i),i.onabort=f(ty,n,"TestLoadImage: abort",!1,t,i),i.ontimeout=f(ty,n,"TestLoadImage: timeout",!1,t,i),o.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(i.toString(),n):function(e,t){let n=new eD,i=new AbortController,r=setTimeout(()=>{i.abort(),ty(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:i.signal}).then(e=>{clearTimeout(r),e.ok?ty(n,"TestPingServer: ok",!0,t):ty(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(r),ty(n,"TestPingServer: error",!1,t)})}(i.toString(),n)}else eN(2);e.G=0,e.l&&e.l.sa(t),tZ(e),tB(e)}function tZ(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(g(e.ka,t),g(e.ka,e.i),e.h.i.length=0,p(e.i),e.i.length=0),e.l.ra()}}function t0(e,t,n){var i=n instanceof e8?e4(n):new e8(n);if(""!=i.g)t&&(i.g=t+"."+i.g),e9(i,i.s);else{var r=o.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new e8(null);i&&e7(s,i),t&&(s.g=t),r&&e9(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.ya,n&&t&&tt(i,n,t),tt(i,"VER",e.la),tz(e,i),i}function t1(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tS(e.Ca&&!e.pa?new tv({eb:n}):e.pa)).Ha(e.J),t}function t2(){}function t6(){}function t3(e,t){eo.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t4(this)}function t5(e){eb.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t8(){eE.call(this),this.status=1}function t4(e){this.g=e}(n=tS.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?e_(this.o):e_(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=i||"",i=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)i.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())i.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[t,a]of(r=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tk,n,void 0))||r||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tP(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tD(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tD(this,!0)),tS.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tR(this):this.bb())},n.bb=function(){tR(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tL(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tF.prototype).la=8,n.G=1,n.connect=function(e,t,n,i){eN(0),this.W=e,this.H=t||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=t0(this,null,this.W),tq(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let r=new eF(this,this.j,e),s=this.o;if(this.S&&(s?R(s=b(s),this.S):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=t$(this,r,t),tt(n=e4(this.I),"RID",e),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),tz(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tT(s)))+"&"+t:this.m&&tI(n,this.m,s)),e1(this.h,r),this.Ua&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",t),tt(n,"SID","null"),r.T=!0,eq(r,n,null)):eq(r,n,t),this.G=2}}else 3==this.G&&(e?tj(this,e):0==this.i.length||eJ(this.h)||tj(this))}},n.Fa=function(){if(this.u=null,tW(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eR(c(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eN(10),tV(this),tW(this))},n.Za=function(){null!=this.C&&(this.C=null,tV(this),tG(this),eN(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eN(2)):(this.j.info("Failed to ping google.com"),eN(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t2.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t6.prototype.g=function(e,t){return new t3(e,t)},d(t3,eo),t3.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t3.prototype.close=function(){tU(this.g)},t3.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ep(e),e=n);t.i.push(new eY(t.Ya++,e)),3==t.G&&tq(t)},t3.prototype.N=function(){this.g.l=null,delete this.j,tU(this.g),delete this.g,t3.aa.N.call(this)},d(t5,eb),d(t8,eE),d(t4,t2),t4.prototype.ua=function(){ea(this.g,"a")},t4.prototype.ta=function(e){ea(this.g,new t5(e))},t4.prototype.sa=function(e){ea(this.g,new t8)},t4.prototype.ra=function(){ea(this.g,"b")},t6.prototype.createWebChannel=t6.prototype.g,t3.prototype.send=t3.prototype.o,t3.prototype.open=t3.prototype.m,t3.prototype.close=t3.prototype.close,A=sS.createWebChannelTransport=function(){return new t6},N=sS.getStatEventTarget=function(){return eI()},k=sS.Event=eC,x=sS.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eL.NO_ERROR=0,eL.TIMEOUT=8,eL.HTTP_ERROR=6,S=sS.ErrorCode=eL,eO.COMPLETE="complete",I=sS.EventType=eO,ev.EventType=ew,ew.OPEN="a",ew.CLOSE="b",ew.ERROR="c",ew.MESSAGE="d",eo.prototype.listen=eo.prototype.K,T=sS.WebChannel=ev,sS.FetchXmlHttpFactory=tv,tS.prototype.listenOnce=tS.prototype.L,tS.prototype.getLastError=tS.prototype.Ka,tS.prototype.getLastErrorCode=tS.prototype.Ba,tS.prototype.getStatus=tS.prototype.Z,tS.prototype.getResponseJson=tS.prototype.Oa,tS.prototype.getResponseText=tS.prototype.oa,tS.prototype.send=tS.prototype.ea,tS.prototype.setWithCredentials=tS.prototype.Ha,C=sS.XhrIo=tS}).apply(void 0!==sI?sI:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),R=function(e){var t,n,i=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var i=n===t?0:4-n%4;return[n,i]}(e),r=i[0],s=i[1],o=new sN((r+s)*3/4-s),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=sk[e.charCodeAt(n)]<<18|sk[e.charCodeAt(n+1)]<<12|sk[e.charCodeAt(n+2)]<<6|sk[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=sk[e.charCodeAt(n)]<<2|sk[e.charCodeAt(n+1)]>>4,o[a++]=255&t),1===s&&(t=sk[e.charCodeAt(n)]<<10|sk[e.charCodeAt(n+1)]<<4|sk[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},D=function(e){for(var t,n=e.length,i=n%3,r=[],s=0,o=n-i;s<o;s+=16383)r.push(function(e,t,n){for(var i,r=[],s=t;s<n;s+=3)r.push(sx[(i=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+sx[i>>12&63]+sx[i>>6&63]+sx[63&i]);return r.join("")}(e,s,s+16383>o?o:s+16383));return 1===i?r.push(sx[(t=e[n-1])>>2]+sx[t<<4&63]+"=="):2===i&&r.push(sx[(t=(e[n-2]<<8)+e[n-1])>>10]+sx[t>>4&63]+sx[t<<2&63]+"="),r.join("")};for(var sx=[],sk=[],sN="undefined"!=typeof Uint8Array?Uint8Array:Array,sA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",sR=0,sD=sA.length;sR<sD;++sR)sx[sR]=sA[sR],sk[sA.charCodeAt(sR)]=sR;sk["-".charCodeAt(0)]=62,sk["_".charCodeAt(0)]=63,P=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,h=l>>1,u=-7,c=n?r-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+c],c+=f,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),s-=h}return(d?-1:1)*o*Math.pow(2,s-i)},L=function(e,t,n,i,r,s){var o,a,l,h=8*s-r-1,u=(1<<h)-1,c=u>>1,f=23===r?5960464477539062e-23:0,d=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,r),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,r),o=0));r>=8;e[n+d]=255&a,d+=p,a/=256,r-=8);for(o=o<<r|a,h+=r;h>0;e[n+d]=255&o,d+=p,o/=256,h-=8);e[n+d-p]|=128*g};const sP="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function sL(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,sO.prototype),t}function sO(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return sU(e)}return sM(e,t,n)}function sM(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!sO.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|sj(e,t),i=sL(n),r=i.write(e,t);return r!==n&&(i=i.slice(0,r)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ot(e,Uint8Array)){let t=new Uint8Array(e);return sB(t.buffer,t.byteOffset,t.byteLength)}return sV(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ot(e,ArrayBuffer)||e&&ot(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(ot(e,SharedArrayBuffer)||e&&ot(e.buffer,SharedArrayBuffer)))return sB(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return sO.from(i,t,n);let r=function(e){var t;if(sO.isBuffer(e)){let t=0|sq(e.length),n=sL(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?sL(0):sV(e):"Buffer"===e.type&&Array.isArray(e.data)?sV(e.data):void 0}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return sO.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function sF(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function sU(e){return sF(e),sL(e<0?0:0|sq(e))}function sV(e){let t=e.length<0?0:0|sq(e.length),n=sL(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function sB(e,t,n){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),sO.prototype),i}function sq(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function sj(e,t){if(sO.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ot(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return s7(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return s9(e).length;default:if(r)return i?-1:s7(e).length;t=(""+t).toLowerCase(),r=!0}}function sz(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=on[e[i]];return r}(this,t,n);case"utf8":case"utf-8":return sH(this,t,n);case"ascii":return function(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}(this,t,n);case"latin1":case"binary":return function(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}(this,t,n);case"base64":var r,s;return r=t,s=n,0===r&&s===this.length?D(this):D(this.slice(r,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let i=e.slice(t,n),r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}(this,t,n);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function s$(e,t,n){let i=e[t];e[t]=e[n],e[n]=i}function sK(e,t,n,i,r){var s;if(0===e.length)return -1;if("string"==typeof n?(i=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n=+n)!=s&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return -1;n=e.length-1}else if(n<0){if(!r)return -1;n=0}if("string"==typeof t&&(t=sO.from(t,i)),sO.isBuffer(t))return 0===t.length?-1:sG(e,t,n,i,r);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):sG(e,[t],n,i,r);throw TypeError("val must be string, number or Buffer")}function sG(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(h(e,s)===h(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else -1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(h(e,s+i)!==h(t,i)){n=!1;break}if(n)return s}return -1}function sH(e,t,n){n=Math.min(e.length,n);let i=[],r=t;for(;r<n;){let t=e[r],s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(n=e[r+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[r+1],i=e[r+2],(192&n)==128&&(192&i)==128&&(l=(15&t)<<12|(63&n)<<6|63&i)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],(192&n)==128&&(192&i)==128&&(192&a)==128&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}function sW(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function sQ(e,t,n,i,r,s){if(!sO.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw RangeError('"value" argument is out of bounds');if(n+i>e.length)throw RangeError("Index out of range")}function sY(e,t,n,i,r){s3(t,i,r,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function sX(e,t,n,i,r){s3(t,i,r,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function sJ(e,t,n,i,r,s){if(n+i>e.length||n<0)throw RangeError("Index out of range")}function sZ(e,t,n,i,r){return t=+t,n>>>=0,r||sJ(e,t,n,4,34028234663852886e22,-34028234663852886e22),L(e,t,n,i,23,4),n+4}function s0(e,t,n,i,r){return t=+t,n>>>=0,r||sJ(e,t,n,8,17976931348623157e292,-17976931348623157e292),L(e,t,n,i,52,8),n+8}sO.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),sO.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(sO.prototype,"parent",{enumerable:!0,get:function(){if(sO.isBuffer(this))return this.buffer}}),Object.defineProperty(sO.prototype,"offset",{enumerable:!0,get:function(){if(sO.isBuffer(this))return this.byteOffset}}),sO.poolSize=8192,sO.from=function(e,t,n){return sM(e,t,n)},Object.setPrototypeOf(sO.prototype,Uint8Array.prototype),Object.setPrototypeOf(sO,Uint8Array),sO.alloc=function(e,t,n){return(sF(e),e<=0)?sL(e):void 0!==t?"string"==typeof n?sL(e).fill(t,n):sL(e).fill(t):sL(e)},sO.allocUnsafe=function(e){return sU(e)},sO.allocUnsafeSlow=function(e){return sU(e)},sO.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==sO.prototype},sO.compare=function(e,t){if(ot(e,Uint8Array)&&(e=sO.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=sO.from(t,t.offset,t.byteLength)),!sO.isBuffer(e)||!sO.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},sO.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},sO.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return sO.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let i=sO.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){let t=e[n];if(ot(t,Uint8Array))r+t.length>i.length?(sO.isBuffer(t)||(t=sO.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else if(sO.isBuffer(t))t.copy(i,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=t.length}return i},sO.byteLength=sj,sO.prototype._isBuffer=!0,sO.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)s$(this,t,t+1);return this},sO.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)s$(this,t,t+3),s$(this,t+1,t+2);return this},sO.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)s$(this,t,t+7),s$(this,t+1,t+6),s$(this,t+2,t+5),s$(this,t+3,t+4);return this},sO.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?sH(this,0,e):sz.apply(this,arguments)},sO.prototype.toLocaleString=sO.prototype.toString,sO.prototype.equals=function(e){if(!sO.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===sO.compare(this,e)},sO.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},sP&&(sO.prototype[sP]=sO.prototype.inspect),sO.prototype.compare=function(e,t,n,i,r){if(ot(e,Uint8Array)&&(e=sO.from(e,e.offset,e.byteLength)),!sO.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,r>>>=0,this===e)return 0;let s=r-i,o=n-t,a=Math.min(s,o),l=this.slice(i,r),h=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==h[e]){s=l[e],o=h[e];break}return s<o?-1:o<s?1:0},sO.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},sO.prototype.indexOf=function(e,t,n){return sK(this,e,t,n,!0)},sO.prototype.lastIndexOf=function(e,t,n){return sK(this,e,t,n,!1)},sO.prototype.write=function(e,t,n,i){var r,s,o,a,l,h,u,c;if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let d=!1;for(;;)switch(i){case"hex":return function(e,t,n,i){let r;n=Number(n)||0;let s=e.length-n;i?(i=Number(i))>s&&(i=s):i=s;let o=t.length;for(i>o/2&&(i=o/2),r=0;r<i;++r){let i=parseInt(t.substr(2*r,2),16);if(i!=i)break;e[n+r]=i}return r}(this,e,t,n);case"utf8":case"utf-8":return r=t,s=n,oe(s7(e,this.length-r),this,r,s);case"ascii":case"latin1":case"binary":return o=t,a=n,oe(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,a);case"base64":return l=t,h=n,oe(s9(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=n,oe(function(e,t){let n,i;let r=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)i=(n=e.charCodeAt(s))>>8,r.push(n%256),r.push(i);return r}(e,this.length-u),this,u,c);default:if(d)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),d=!0}},sO.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},sO.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,sO.prototype),i},sO.prototype.readUintLE=sO.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||sW(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},sO.prototype.readUintBE=sO.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||sW(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},sO.prototype.readUint8=sO.prototype.readUInt8=function(e,t){return e>>>=0,t||sW(e,1,this.length),this[e]},sO.prototype.readUint16LE=sO.prototype.readUInt16LE=function(e,t){return e>>>=0,t||sW(e,2,this.length),this[e]|this[e+1]<<8},sO.prototype.readUint16BE=sO.prototype.readUInt16BE=function(e,t){return e>>>=0,t||sW(e,2,this.length),this[e]<<8|this[e+1]},sO.prototype.readUint32LE=sO.prototype.readUInt32LE=function(e,t){return e>>>=0,t||sW(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},sO.prototype.readUint32BE=sO.prototype.readUInt32BE=function(e,t){return e>>>=0,t||sW(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},sO.prototype.readBigUInt64LE=oi(function(e){s5(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&s8(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],r=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*n;return BigInt(i)+(BigInt(r)<<BigInt(32))}),sO.prototype.readBigUInt64BE=oi(function(e){s5(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&s8(e,this.length-8);let i=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],r=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)}),sO.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||sW(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},sO.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||sW(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*t)),s},sO.prototype.readInt8=function(e,t){return(e>>>=0,t||sW(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},sO.prototype.readInt16LE=function(e,t){e>>>=0,t||sW(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},sO.prototype.readInt16BE=function(e,t){e>>>=0,t||sW(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},sO.prototype.readInt32LE=function(e,t){return e>>>=0,t||sW(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},sO.prototype.readInt32BE=function(e,t){return e>>>=0,t||sW(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},sO.prototype.readBigInt64LE=oi(function(e){s5(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&s8(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),sO.prototype.readBigInt64BE=oi(function(e){s5(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&s8(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n)}),sO.prototype.readFloatLE=function(e,t){return e>>>=0,t||sW(e,4,this.length),P(this,e,!0,23,4)},sO.prototype.readFloatBE=function(e,t){return e>>>=0,t||sW(e,4,this.length),P(this,e,!1,23,4)},sO.prototype.readDoubleLE=function(e,t){return e>>>=0,t||sW(e,8,this.length),P(this,e,!0,52,8)},sO.prototype.readDoubleBE=function(e,t){return e>>>=0,t||sW(e,8,this.length),P(this,e,!1,52,8)},sO.prototype.writeUintLE=sO.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;sQ(this,e,t,n,i,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},sO.prototype.writeUintBE=sO.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;sQ(this,e,t,n,i,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},sO.prototype.writeUint8=sO.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,1,255,0),this[t]=255&e,t+1},sO.prototype.writeUint16LE=sO.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},sO.prototype.writeUint16BE=sO.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},sO.prototype.writeUint32LE=sO.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},sO.prototype.writeUint32BE=sO.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},sO.prototype.writeBigUInt64LE=oi(function(e,t=0){return sY(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),sO.prototype.writeBigUInt64BE=oi(function(e,t=0){return sX(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),sO.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*n-1);sQ(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},sO.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*n-1);sQ(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},sO.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},sO.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},sO.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},sO.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},sO.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||sQ(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},sO.prototype.writeBigInt64LE=oi(function(e,t=0){return sY(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),sO.prototype.writeBigInt64BE=oi(function(e,t=0){return sX(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),sO.prototype.writeFloatLE=function(e,t,n){return sZ(this,e,t,!0,n)},sO.prototype.writeFloatBE=function(e,t,n){return sZ(this,e,t,!1,n)},sO.prototype.writeDoubleLE=function(e,t,n){return s0(this,e,t,!0,n)},sO.prototype.writeDoubleBE=function(e,t,n){return s0(this,e,t,!1,n)},sO.prototype.copy=function(e,t,n,i){if(!sO.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);let r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},sO.prototype.fill=function(e,t,n,i){let r;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!sO.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{let s=sO.isBuffer(e)?e:sO.from(e,i),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const s1={};function s2(e,t,n){s1[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function s6(e){let t="",n=e.length,i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function s3(e,t,n,i,r,s){if(e>n||e<t){let i;let r="bigint"==typeof t?"n":"";throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(s+1)*8}${r}`:`>= -(2${r} ** ${(s+1)*8-1}${r}) and < 2 ** ${(s+1)*8-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new s1.ERR_OUT_OF_RANGE("value",i,e)}s5(r,"offset"),(void 0===i[r]||void 0===i[r+s])&&s8(r,i.length-(s+1))}function s5(e,t){if("number"!=typeof e)throw new s1.ERR_INVALID_ARG_TYPE(t,"number",e)}function s8(e,t,n){if(Math.floor(e)!==e)throw s5(e,n),new s1.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new s1.ERR_BUFFER_OUT_OF_BOUNDS;throw new s1.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}s2("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),s2("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),s2("ERR_OUT_OF_RANGE",function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>0x100000000?r=s6(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=s6(r)),r+="n"),i+=` It must be ${t}. Received ${r}`},RangeError);const s4=/[^+/0-9A-Za-z-_]/g;function s7(e,t){let n;t=t||1/0;let i=e.length,r=null,s=[];for(let o=0;o<i;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!r){if(n>56319||o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=(r-55296<<10|n-56320)+65536}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function s9(e){return R(function(e){if((e=(e=e.split("=")[0]).trim().replace(s4,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function oe(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length)&&!(r>=e.length);++r)t[r+n]=e[r];return r}function ot(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const on=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function oi(e){return"undefined"==typeof BigInt?or:e}function or(){throw Error("BigInt not supported")}const os="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oo.UNAUTHENTICATED=new oo(null),oo.GOOGLE_CREDENTIALS=new oo("google-credentials-uid"),oo.FIRST_PARTY=new oo("first-party-uid"),oo.MOCK_USER=new oo("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new eW("@firebase/firestore");function oh(){return ol.logLevel}function ou(e,...t){if(ol.logLevel<=v.DEBUG){let n=t.map(od);ol.debug(`Firestore (${oa}): ${e}`,...n)}}function oc(e,...t){if(ol.logLevel<=v.ERROR){let n=t.map(od);ol.error(`Firestore (${oa}): ${e}`,...n)}}function of(e,...t){if(ol.logLevel<=v.WARN){let n=t.map(od);ol.warn(`Firestore (${oa}): ${e}`,...n)}}function od(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(e="Unexpected state"){let t=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: `+e;throw oc(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class om extends ew{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ov{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oo.UNAUTHENTICATED))}shutdown(){}}class ow{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ob{constructor(e){this.t=e,this.currentUser=oo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||op();let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new oy;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new oy,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{ou("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(ou("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new oy)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ou("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||op(),new o_(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||op(),new oo(e)}}class oE{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=oo.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class oC{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new oE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(oo.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||op();let n=e=>{null!=e.error&&ou("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,ou("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{ou("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?i(e):ou("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||op(),this.R=e.token,new oT(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function ox(e,t){return e<t?-1:e>t?1:0}function ok(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{static now(){return oN.fromMillis(Date.now())}static fromDate(e){return oN.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new oN(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new om(og.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new om(og.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ox(this.nanoseconds,e.nanoseconds):ox(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{static fromTimestamp(e){return new oA(e)}static min(){return new oA(new oN(0,0))}static max(){return new oA(new oN(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t,n){void 0===t?t=0:t>e.length&&op(),void 0===n?n=e.length-t:n>e.length-t&&op(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===oR.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof oR?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oD extends oR{construct(e,t,n){return new oD(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new om(og.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new oD(t)}static emptyPath(){return new oD([])}}const oP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oL extends oR{construct(e,t,n){return new oL(e,t,n)}static isValidIdentifier(e){return oP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oL.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oL(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new om(og.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new om(og.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new om(og.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new om(og.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oL(t)}static emptyPath(){return new oL([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.path=e}static fromPath(e){return new oO(oD.fromString(e))}static fromName(e){return new oO(oD.fromString(e).popFirst(5))}static empty(){return new oO(oD.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===oD.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return oD.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oO(new oD(e.slice()))}}class oM{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new oM(oA.min(),oO.empty(),-1)}static max(){return new oM(oA.max(),oO.empty(),-1)}}class oF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oU(e){if(e.code!==og.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ou("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&op(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new oV((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof oV?t:oV.resolve(t)}catch(e){return oV.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):oV.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):oV.reject(t)}static resolve(e){return new oV((t,n)=>{t(e)})}static reject(e){return new oV((t,n)=>{n(e)})}static waitFor(e){return new oV((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=oV.resolve(!1);for(let n of e)t=t.next(e=>e?oV.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new oV((n,i)=>{let r=e.length,s=Array(r),o=0;for(let a=0;a<r;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new oV((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}function oB(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function oj(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oz(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function o$(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oK(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}oq.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e,t){this.comparator=e,this.root=t||oW.EMPTY}insert(e,t){return new oG(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oW.BLACK,null,null))}remove(e){return new oG(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oW.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oH(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oH(this.root,e,this.comparator,!1)}getReverseIterator(){return new oH(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oH(this.root,e,this.comparator,!0)}}class oH{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oW{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:oW.RED,this.left=null!=i?i:oW.EMPTY,this.right=null!=r?r:oW.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new oW(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return oW.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return oW.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,oW.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,oW.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw op();let e=this.left.check();if(e!==this.right.check())throw op();return e+(this.isRed()?0:1)}}oW.EMPTY=null,oW.RED=!0,oW.BLACK=!1,oW.EMPTY=new class{constructor(){this.size=0}get key(){throw op()}get value(){throw op()}get color(){throw op()}get left(){throw op()}get right(){throw op()}copy(e,t,n,i,r){return this}insert(e,t,n){return new oW(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oQ{constructor(e){this.comparator=e,this.data=new oG(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oY(this.data.getIterator())}getIteratorFrom(e){return new oY(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof oQ)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new oQ(this.comparator);return t.data=e,t}}class oY{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX{constructor(e){this.fields=e,e.sort(oL.comparator)}static empty(){return new oX([])}unionWith(e){let t=new oQ(oL.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new oX(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ok(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oZ{constructor(e){this.binaryString=e}static fromBase64String(e){return new oZ(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new oJ("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new oZ(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ox(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}oZ.EMPTY_BYTE_STRING=new oZ("");const o0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function o1(e){if(e||op(),"string"==typeof e){let t=0,n=o0.exec(e);if(n||op(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:o2(e.seconds),nanos:o2(e.nanos)}}function o2(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function o6(e){return"string"==typeof e?oZ.fromBase64String(e):oZ.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function o5(e){let t=e.mapValue.fields.__previous_value__;return o3(t)?o5(t):t}function o8(e){let t=o1(e.mapValue.fields.__local_write_time__.timestampValue);return new oN(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,t,n,i,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class o7{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new o7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof o7&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?o3(e)?4:ag(e)?0x1fffffffffffff:ad(e)?10:11:op()}function at(e,t){if(e===t)return!0;let n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return o8(e).isEqual(o8(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=o1(e.timestampValue),i=o1(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return o6(e.bytesValue).isEqual(o6(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return o2(e.geoPointValue.latitude)===o2(t.geoPointValue.latitude)&&o2(e.geoPointValue.longitude)===o2(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return o2(e.integerValue)===o2(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=o2(e.doubleValue),i=o2(t.doubleValue);return n===i?oj(n)===oj(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return ok(e.arrayValue.values||[],t.arrayValue.values||[],at);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(oz(n)!==oz(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!at(n[e],i[e])))return!1;return!0}(e,t);default:return op()}}function an(e,t){return void 0!==(e.values||[]).find(e=>at(e,t))}function ai(e,t){if(e===t)return 0;let n=ae(e),i=ae(t);if(n!==i)return ox(n,i);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return ox(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=o2(e.integerValue||e.doubleValue),i=o2(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ar(e.timestampValue,t.timestampValue);case 4:return ar(o8(e),o8(t));case 5:return ox(e.stringValue,t.stringValue);case 6:return function(e,t){let n=o6(e),i=o6(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=ox(n[e],i[e]);if(0!==t)return t}return ox(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=ox(o2(e.latitude),o2(t.latitude));return 0!==n?n:ox(o2(e.longitude),o2(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return as(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,i,r,s;let o=e.fields||{},a=t.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,h=null===(i=a.value)||void 0===i?void 0:i.arrayValue,u=ox((null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:as(l,h)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===o9.mapValue&&t===o9.mapValue)return 0;if(e===o9.mapValue)return 1;if(t===o9.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=ox(i[e],s[e]);if(0!==t)return t;let o=ai(n[i[e]],r[s[e]]);if(0!==o)return o}return ox(i.length,s.length)}(e.mapValue,t.mapValue);default:throw op()}}function ar(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ox(e,t);let n=o1(e),i=o1(t),r=ox(n.seconds,i.seconds);return 0!==r?r:ox(n.nanos,i.nanos)}function as(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=ai(n[e],i[e]);if(t)return t}return ox(n.length,i.length)}function ao(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=o1(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?o6(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,oO.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=ao(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${ao(e.fields[r])}`;return n+"}"}(e.mapValue):op()}function aa(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function al(e){return!!e&&"integerValue"in e}function ah(e){return!!e&&"arrayValue"in e}function au(e){return!!e&&"nullValue"in e}function ac(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function af(e){return!!e&&"mapValue"in e}function ad(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ap(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return o$(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ap(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ap(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ag(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.value=e}static empty(){return new am({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!af(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ap(t)}setAll(e){let t=oL.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=ap(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());af(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];af(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(o$(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new am(ap(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ay(e,0,oA.min(),oA.min(),oA.min(),am.empty(),0)}static newFoundDocument(e,t,n,i){return new ay(e,1,t,oA.min(),n,i,0)}static newNoDocument(e,t){return new ay(e,2,t,oA.min(),oA.min(),am.empty(),0)}static newUnknownDocument(e,t){return new ay(e,3,t,oA.min(),oA.min(),am.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(oA.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=am.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=am.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oA.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ay&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ay(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t){this.position=e,this.inclusive=t}}function av(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],o=e.position[r];if(i=s.field.isKeyField()?oO.comparator(oO.fromName(o.referenceValue),n.key):ai(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function aw(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!at(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{}class aC extends aE{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ax(e,t,n):"array-contains"===t?new aR(e,n):"in"===t?new aD(e,n):"not-in"===t?new aP(e,n):"array-contains-any"===t?new aL(e,n):new aC(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ak(e,n):new aN(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ai(t,this.value)):null!==t&&ae(this.value)===ae(t)&&this.matchesComparison(ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return op()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class aT extends aE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new aT(e,t)}matches(e){return aI(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aI(e){return"and"===e.op}function aS(e){for(let t of e.filters)if(t instanceof aT)return!1;return!0}class ax extends aC{constructor(e,t,n){super(e,t,n),this.key=oO.fromName(n.referenceValue)}matches(e){let t=oO.comparator(e.key,this.key);return this.matchesComparison(t)}}class ak extends aC{constructor(e,t){super(e,"in",t),this.keys=aA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aN extends aC{constructor(e,t){super(e,"not-in",t),this.keys=aA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function aA(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>oO.fromName(e.referenceValue))}class aR extends aC{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ah(t)&&an(t.arrayValue,this.value)}}class aD extends aC{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&an(this.value.arrayValue,t)}}class aP extends aC{constructor(e,t){super(e,"not-in",t)}matches(e){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!an(this.value.arrayValue,t)}}class aL extends aC{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ah(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>an(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function aM(e,t=null,n=[],i=[],r=null,s=null,o=null){return new aO(e,t,n,i,r,s,o)}function aF(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof aC)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(aS(t)&&aI(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ao(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ao(e)).join(",")),e.ue=t}return e.ue}function aU(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof aC?n instanceof aC&&t.op===n.op&&t.field.isEqual(n.field)&&at(t.value,n.value):t instanceof aT?n instanceof aT&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void op()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!aw(e.startAt,t.startAt)&&aw(e.endAt,t.endAt)}function aV(e){return oO.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aq(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function aj(e){return null!==e.collectionGroup}function az(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new oQ(oL.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new ab(t,i))}),n.has(oL.keyField().canonicalString())||e.ce.push(new ab(oL.keyField(),i))}return e.ce}function a$(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return aM(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ab(e.field,t)});let n=e.endAt?new a_(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new a_(e.startAt.position,e.startAt.inclusive):null;return aM(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(e,az(e))),e.le}function aK(e,t){let n=e.filters.concat([t]);return new aB(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function aG(e,t,n){return new aB(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function aH(e,t){return aU(a$(e),a$(t))&&e.limitType===t.limitType}function aW(e){return`${aF(a$(e))}|lt:${e.limitType}`}function aQ(e){var t;let n;return`Query(target=${n=(t=a$(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof aC?`${t.field.canonicalString()} ${t.op} ${ao(t.value)}`:t instanceof aT?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>ao(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>ao(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function aY(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oO.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of az(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=av(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,az(e),t))&&(!e.endAt||!!function(e,t,n){let i=av(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,az(e),t))}function aX(e){return(t,n)=>{let i=!1;for(let r of az(e)){let e=function(e,t,n){let i=e.field.isKeyField()?oO.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?ai(i,r):op()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return op()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aJ{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){o$(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return oK(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aZ=new oG(oO.comparator),a0=new oG(oO.comparator);function a1(...e){let t=a0;for(let n of e)t=t.insert(n.key,n);return t}function a2(e){let t=a0;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function a6(){return new aJ(e=>e.toString(),(e,t)=>e.isEqual(t))}const a3=new oG(oO.comparator),a5=new oQ(oO.comparator);function a8(...e){let t=a5;for(let n of e)t=t.add(n);return t}const a4=new oQ(ox);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a7(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oj(t)?"-0":t}}function a9(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this._=void 0}}function lt(e,t){return e instanceof la?al(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ln extends le{}class li extends le{constructor(e){super(),this.elements=e}}function lr(e,t){let n=lh(t);for(let t of e.elements)n.some(e=>at(e,t))||n.push(t);return{arrayValue:{values:n}}}class ls extends le{constructor(e){super(),this.elements=e}}function lo(e,t){let n=lh(t);for(let t of e.elements)n=n.filter(e=>!at(e,t));return{arrayValue:{values:n}}}class la extends le{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ll(e){return o2(e.integerValue||e.doubleValue)}function lh(e){return ah(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class lu{constructor(e,t){this.version=e,this.transformResults=t}}class lc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lc}static exists(e){return new lc(void 0,e)}static updateTime(e){return new lc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lf(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ld{}function lp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new lE(e.key,lc.none()):new ly(e.key,e.data,lc.none());{let n=e.data,i=am.empty(),r=new oQ(oL.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new l_(e.key,i,new oX(r.toArray()),lc.none())}}function lg(e,t,n,i){return e instanceof ly?function(e,t,n,i){if(!lf(e.precondition,t))return n;let r=e.value.clone(),s=lb(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof l_?function(e,t,n,i){if(!lf(e.precondition,t))return n;let r=lb(e.fieldTransforms,i,t),s=t.data;return(s.setAll(lv(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):lf(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function lm(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&ok(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof li&&i instanceof li||n instanceof ls&&i instanceof ls?ok(n.elements,i.elements,at):n instanceof la&&i instanceof la?at(n.Pe,i.Pe):n instanceof ln&&i instanceof ln)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ly extends ld{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class l_ extends ld{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lv(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function lw(e,t,n){var i;let r=new Map;e.length===n.length||op();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,(i=n[s],a instanceof li?lr(a,l):a instanceof ls?lo(a,l):i))}return r}function lb(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof ln?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&o3(t)&&(t=o5(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof li?lr(e,s):e instanceof ls?lo(e,s):function(e,t){let n=lt(e,t),i=ll(n)+ll(e.Pe);return al(n)&&al(e.Pe)?a9(i):a7(e.serializer,i)}(e,s))}return i}class lE extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lC extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof ly?function(e,t,n){let i=e.value.clone(),r=lw(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof l_?function(e,t,n){if(!lf(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=lw(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(lv(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=lg(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=lg(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=a6();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,o=this.applyToLocalView(s,r.mutatedFields),a=lp(s,o=t.has(i.key)?null:o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(oA.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),a8())}isEqual(e){return this.batchId===e.batchId&&ok(this.mutations,e.mutations,(e,t)=>lm(e,t))&&ok(this.baseMutations,e.baseMutations,(e,t)=>lm(e,t))}}class lI{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){e.mutations.length===n.length||op();let i=a3,r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new lI(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t){this.count=e,this.unchangedNames=t}}function lk(e){if(void 0===e)return oc("GRPC error has no .code"),og.UNKNOWN;switch(e){case O.OK:return og.OK;case O.CANCELLED:return og.CANCELLED;case O.UNKNOWN:return og.UNKNOWN;case O.DEADLINE_EXCEEDED:return og.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return og.RESOURCE_EXHAUSTED;case O.INTERNAL:return og.INTERNAL;case O.UNAVAILABLE:return og.UNAVAILABLE;case O.UNAUTHENTICATED:return og.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return og.INVALID_ARGUMENT;case O.NOT_FOUND:return og.NOT_FOUND;case O.ALREADY_EXISTS:return og.ALREADY_EXISTS;case O.PERMISSION_DENIED:return og.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return og.FAILED_PRECONDITION;case O.ABORTED:return og.ABORTED;case O.OUT_OF_RANGE:return og.OUT_OF_RANGE;case O.UNIMPLEMENTED:return og.UNIMPLEMENTED;case O.DATA_LOSS:return og.DATA_LOSS;default:return op()}}(M=O||(O={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new b([0xffffffff,0xffffffff],0);function lA(e){let t=(new TextEncoder).encode(e),n=new E;return n.update(t),new Uint8Array(n.digest())}function lR(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new b([n,i],0),new b([r,s],0)]}class lD{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new lP(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new lP(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new lP(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=b.fromNumber(this.Te)}Ee(e,t,n){let i=e.add(t.multiply(b.fromNumber(n)));return 1===i.compare(lN)&&(i=new b([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=lR(lA(e));for(let e=0;e<this.hashCount;e++){let i=this.Ee(t,n,e);if(!this.de(i))return!1}return!0}static create(e,t,n){let i=new lD(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Te)return;let[t,n]=lR(lA(e));for(let e=0;e<this.hashCount;e++){let i=this.Ee(t,n,e);this.Ae(i)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class lP extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,lO.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new lL(oA.min(),i,new oG(ox),aZ,a8())}}class lO{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lO(n,t,a8(),a8(),a8())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class lF{constructor(e,t){this.targetId=e,this.me=t}}class lU{constructor(e,t,n=oZ.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class lV{constructor(){this.fe=0,this.ge=lj(),this.pe=oZ.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=a8(),t=a8(),n=a8();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:op()}}),new lO(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=lj()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||op()}Ne(){this.we=!0,this.ye=!0}}class lB{constructor(e){this.Le=e,this.Be=new Map,this.ke=aZ,this.qe=lq(),this.Qe=lq(),this.Ke=new oG(ox)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:op()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.me.count,i=this.Ye(t);if(i){let r=i.target;if(aV(r)){if(0===n){let e=new oO(r.path);this.We(t,e,ay.newNoDocument(e,oA.min()))}else 1===n||op()}else{let i=this.Ze(t);if(i!==n){let n=this.Xe(e),r=n?this.et(n,e,i):1;0!==r&&(this.He(t),this.Ke=this.Ke.insert(t,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let i=e.me.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=i;try{t=o6(r).toUint8Array()}catch(e){if(e instanceof oJ)return of("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new lD(t,s,o)}catch(e){return of(e instanceof lP?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),i=0;return n.forEach(n=>{let r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((n,i)=>{let r=this.Ye(i);if(r){if(n.current&&aV(r.target)){let t=new oO(r.target.path);this.st(t).has(i)||this.ot(i,t)||this.We(i,t,ay.newNoDocument(t,e))}n.be&&(t.set(i,n.ve()),n.Ce())}});let n=a8();this.Qe.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let i=new lL(e,t,this.Ke,this.ke,n);return this.ke=aZ,this.qe=lq(),this.Qe=lq(),this.Ke=new oG(ox),i}Ue(e,t){if(!this.je(e))return;let n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new lV,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new oQ(ox),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new oQ(ox),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||ou("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new lV),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lq(){return new oG(oO.comparator)}function lj(){return new oG(oO.comparator)}const lz={asc:"ASCENDING",desc:"DESCENDING"},l$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lK={and:"AND",or:"OR"};class lG{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lH(e,t){return e.useProto3Json||null==t?t:{value:t}}function lW(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lQ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function lY(e){return e||op(),oA.fromTimestamp(function(e){let t=o1(e);return new oN(t.seconds,t.nanos)}(e))}function lX(e,t){return lJ(e,t).canonicalString()}function lJ(e,t){let n=new oD(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function lZ(e){let t=oD.fromString(e);return l7(t)||op(),t}function l0(e,t){return lX(e.databaseId,t.path)}function l1(e,t){let n=lZ(t);if(n.get(1)!==e.databaseId.projectId)throw new om(og.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new om(og.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oO(l3(n))}function l2(e,t){return lX(e.databaseId,t)}function l6(e){return new oD(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function l3(e){return e.length>4&&"documents"===e.get(4)||op(),e.popFirst(5)}function l5(e,t,n){return{name:l0(e,t),fields:n.value.mapValue.fields}}function l8(e){return{fieldPath:e.canonicalString()}}function l4(e){return oL.fromServerFormat(e.fieldPath)}function l7(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(e,t,n,i,r=oA.min(),s=oA.min(),o=oZ.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new l9(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new l9(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new l9(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new l9(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(o2(e.integerValue));else if("doubleValue"in e){let n=o2(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),oj(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),"string"==typeof n&&(n=o1(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(o6(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?ag(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):ad(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):op()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let n=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(n)))this.gt(e,t),this.dt(n[e],t)}bt(e,t){var n,i;let r=e.fields||{};this.Rt(t,53);let s="value",o=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.Rt(t,15),t.Vt(o2(o)),this.gt(s,t),this.dt(r[s],t)}vt(e,t){let n=e.values||[];for(let e of(this.Rt(t,50),n))this.dt(e,t)}St(e,t){this.Rt(t,37),oO.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}ht.Ft=new ht;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.ln=new hi}addToCollectionParentIndex(e,t){return this.ln.add(t),oV.resolve()}getCollectionParents(e,t){return oV.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return oV.resolve()}deleteFieldIndex(e,t){return oV.resolve()}deleteAllFieldIndexes(e){return oV.resolve()}createTargetIndexes(e,t){return oV.resolve()}getDocumentsMatchingTarget(e,t){return oV.resolve(null)}getIndexType(e,t){return oV.resolve(0)}getFieldIndexes(e,t){return oV.resolve([])}getNextCollectionGroupToUpdate(e){return oV.resolve(null)}getMinOffset(e,t){return oV.resolve(oM.min())}getMinOffsetFromCollectionGroup(e,t){return oV.resolve(oM.min())}updateCollectionGroup(e,t,n){return oV.resolve()}updateIndexEntries(e,t){return oV.resolve()}}class hi{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new oQ(oD.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new oQ(oD.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hs{static withCacheSize(e){return new hs(e,hs.DEFAULT_COLLECTION_PERCENTILE,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hs.DEFAULT_COLLECTION_PERCENTILE=10,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hs.DEFAULT=new hs(0x2800000,hs.DEFAULT_COLLECTION_PERCENTILE,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hs.DISABLED=new hs(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ho(0)}static Qn(){return new ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha([e,t],[n,i]){let r=ox(e,n);return 0===r?ox(t,i):r}class hl{constructor(e){this.Gn=e,this.buffer=new oQ(ha),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ha(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hh{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){ou("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){oB(e)?ou("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await oU(e)}await this.Yn(3e5)})}}class hu{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return oV.resolve(oq.oe);let n=new hl(t);return this.Zn.forEachTarget(e,e=>n.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>n.Hn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(ou("LruGarbageCollector","Garbage collection skipped; disabled"),oV.resolve(hr)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ou("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hr):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,i,r,s,o,a,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(ou("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,s=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),oh()<=v.DEBUG&&ou("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${i} in `+(o-s)+"ms\n"+`	Removed ${r} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-h}ms`),oV.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.changes=new aJ(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ay.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?oV.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&lg(n.mutation,e,oX.empty(),oN.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,a8()).next(()=>t))}getLocalViewOfDocuments(e,t,n=a8()){let i=a6();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=a1();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=a6();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,a8()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=aZ,s=a6(),o=a6();return t.forEach((e,t)=>{let o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof l_)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),lg(o.mutation,t,o.mutation.getFieldMask(),oN.now())):s.set(t.key,oX.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new hf(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=a6(),i=new oG((e,t)=>e-t),r=a8();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||oX.empty();o=r.applyToLocalView(s,o),n.set(e,o);let a=(i.get(r.batchId)||a8()).add(e);i=i.insert(r.batchId,a)})}).next(()=>{let s=[],o=i.getReverseIterator();for(;o.hasNext();){let i=o.getNext(),a=i.key,l=i.value,h=a6();l.forEach(e=>{if(!r.has(e)){let i=lp(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return oV.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return oO.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):aj(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):oV.resolve(a6()),o=-1,a=r;return s.next(t=>oV.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?oV.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,a8())).next(e=>({batchId:o,changes:a2(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oO(t)).next(e=>{let t=a1();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let r=t.collectionGroup,s=a1();return this.indexManager.getCollectionParents(e,r).next(o=>oV.forEach(o,o=>{let a=new aB(o.child(r),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,ay.newInvalidDocument(i)))});let n=a1();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&lg(s.mutation,i,oX.empty(),oN.now()),aY(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return oV.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:lY(t.createTime)}),oV.resolve()}getNamedQuery(e,t){return oV.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,i=function(e){let t=lZ(e);return 4===t.length?oD.emptyPath():l3(t)}(e.parent),r=e.structuredQuery,s=r.from?r.from.length:0,o=null;if(s>0){1===s||op();let e=r.from[0];e.allDescendants?o=e.collectionId:i=i.child(e.collectionId)}let a=[];r.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=l4(e.unaryFilter.field);return aC.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=l4(e.unaryFilter.field);return aC.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=l4(e.unaryFilter.field);return aC.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=l4(e.unaryFilter.field);return aC.create(r,"!=",{nullValue:"NULL_VALUE"});default:return op()}}(t):void 0!==t.fieldFilter?aC.create(l4(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return op()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?aT.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return op()}}(t.compositeFilter.op)):op()}(e);return n instanceof aT&&aS(t=n)&&aI(t)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(e=>new ab(l4(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(t=r.limit)?t.value:t)?null:n);let u=null;r.startAt&&(u=function(e){let t=!!e.before;return new a_(e.values||[],t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){let t=!e.before;return new a_(e.values||[],t)}(r.endAt)),new aB(i,o,l,a,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?aG(t,t.limit,"L"):t}(t.bundledQuery),readTime:lY(t.readTime)}),oV.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.overlays=new oG(oO.comparator),this.Er=new Map}getOverlay(e,t){return oV.resolve(this.overlays.get(t))}getOverlays(e,t){let n=a6();return oV.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.Tt(e,t,i)}),oV.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.Er.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.Er.delete(n)),oV.resolve()}getOverlaysForCollection(e,t,n){let i=a6(),r=t.length+1,s=new oO(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return oV.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new oG((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=a6(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=a6(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=i)););return oV.resolve(o)}Tt(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new lS(t,n));let r=this.Er.get(t);void 0===r&&(r=a8(),this.Er.set(t,r)),this.Er.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.sessionToken=oZ.EMPTY_BYTE_STRING}getSessionToken(e){return oV.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,oV.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.dr=new oQ(h_.Ar),this.Rr=new oQ(h_.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let n=new h_(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new h_(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new oO(new oD([])),n=new h_(t,e),i=new h_(t,e+1),r=[];return this.Rr.forEachInRange([n,i],e=>{this.gr(e),r.push(e.key)}),r}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new oO(new oD([])),n=new h_(t,e),i=new h_(t,e+1),r=a8();return this.Rr.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new h_(e,0),n=this.dr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class h_{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return oO.comparator(e.key,t.key)||ox(e.br,t.br)}static Vr(e,t){return ox(e.br,t.br)||oO.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new oQ(h_.Ar)}checkEmpty(e){return oV.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new lT(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.vr=this.vr.add(new h_(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return oV.resolve(s)}lookupMutationBatch(e,t){return oV.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Fr(t+1),i=n<0?0:n;return oV.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return oV.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return oV.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new h_(t,0),i=new h_(t,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([n,i],e=>{let t=this.Cr(e.br);r.push(t)}),oV.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oQ(ox);return t.forEach(e=>{let t=new h_(e,0),i=new h_(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,i],e=>{n=n.add(e.br)})}),oV.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;oO.isDocumentKey(r)||(r=r.child(""));let s=new h_(new oO(r),0),o=new oQ(ox);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.br)),!0)},s),oV.resolve(this.Mr(o))}Mr(e){let t=[];return e.forEach(e=>{let n=this.Cr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||op(),this.mutationQueue.shift();let n=this.vr;return oV.forEach(t.mutations,i=>{let r=new h_(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){let n=new h_(t,0),i=this.vr.firstAfterOrEqual(n);return oV.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,oV.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.Nr=e,this.docs=new oG(oO.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return oV.resolve(n?n.document.mutableCopy():ay.newInvalidDocument(t))}getEntries(e,t){let n=aZ;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ay.newInvalidDocument(e))}),oV.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=aZ,s=t.path,o=new oO(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=oO.comparator(e.documentKey,t.documentKey))?n:ox(e.largestBatchId,t.largestBatchId)}(new oM(o.readTime,o.key,-1),n)||(i.has(o.key)||aY(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return oV.resolve(r)}getAllFromCollectionGroup(e,t,n,i){op()}Lr(e,t){return oV.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new hb(this)}getSize(e){return oV.resolve(this.size)}}class hb extends hc{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(n)}),oV.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.persistence=e,this.Br=new aJ(e=>aF(e),aU),this.lastRemoteSnapshotVersion=oA.min(),this.highestTargetId=0,this.kr=0,this.qr=new hy,this.targetCount=0,this.Qr=ho.qn()}forEachTarget(e,t){return this.Br.forEach((e,n)=>t(n)),oV.resolve()}getLastRemoteSnapshotVersion(e){return oV.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return oV.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),oV.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),oV.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new ho(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,oV.resolve()}updateTargetData(e,t){return this.Un(t),oV.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,oV.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Br.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Br.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),oV.waitFor(r).next(()=>i)}getTargetCount(e){return oV.resolve(this.targetCount)}getTargetData(e,t){let n=this.Br.get(t)||null;return oV.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),oV.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),oV.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),oV.resolve()}getMatchingKeysForTargetId(e,t){let n=this.qr.Sr(t);return oV.resolve(n)}containsKey(e,t){return oV.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,t){this.Kr={},this.overlays={},this.$r=new oq(0),this.Ur=!1,this.Ur=!0,this.Wr=new hm,this.referenceDelegate=e(this),this.Gr=new hE(this),this.indexManager=new hn,this.remoteDocumentCache=new hw(e=>this.referenceDelegate.zr(e)),this.serializer=new he(t),this.jr=new hp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new hv(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){ou("MemoryPersistence","Starting transaction:",e);let i=new hT(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(e=>this.referenceDelegate.Jr(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Yr(e,t){return oV.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class hT extends oF{constructor(e){super(),this.currentSequenceNumber=e}}class hI{constructor(e){this.persistence=e,this.Zr=new hy,this.Xr=null}static ei(e){return new hI(e)}get ti(){if(this.Xr)return this.Xr;throw op()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),oV.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),oV.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),oV.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oV.forEach(this.ti,n=>{let i=oO.fromPath(n);return this.ni(e,i).next(e=>{e||t.removeEntry(i,oA.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return oV.or([()=>oV.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class hS{constructor(e,t){this.persistence=e,this.ri=new aJ(e=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,i=e.length;for(let t=0;t<i;t++){let i=e.charAt(t);switch(i){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=i}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new hu(this,t)}static ei(e,t){return new hS(e,t)}Hr(){}Jr(e){return oV.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return oV.forEach(this.ri,(n,i)=>this.ir(e,n,i).next(e=>e?oV.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Lr(e,i=>this.ir(e,i,t).next(e=>{e||(n++,r.removeEntry(i,oA.min()))})).next(()=>r.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),oV.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),oV.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),oV.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),oV.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(ae(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=o5(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return o6(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var i;let r;return i=t.mapValue,r=0,o$(i.fields,(t,n)=>{r+=t.length+e(n)}),r;default:throw op()}}(e.data.value)),t}ir(e,t,n){return oV.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return oV.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=i}static zi(e,t){let n=a8(),i=a8();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new hx(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=ec())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(V.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}(ey())>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,i){let r={result:null};return this.Xi(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.es(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let n=new hk;return this.ts(e,t,n).next(i=>{if(r.result=i,this.Hi)return this.ns(e,t,n,i.size)})}).next(()=>r.result)}ns(e,t,n,i){return n.documentReadCount<this.Ji?(oh()<=v.DEBUG&&ou("QueryEngine","SDK will not create cache indexes for query:",aQ(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),oV.resolve()):(oh()<=v.DEBUG&&ou("QueryEngine","Query:",aQ(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(oh()<=v.DEBUG&&ou("QueryEngine","The SDK decides to create cache indexes for query:",aQ(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,a$(t))):oV.resolve())}Xi(e,t){if(aq(t))return oV.resolve(null);let n=a$(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=a$(t=aG(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=a8(...i);return this.Zi.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.rs(t,i);return this.ss(t,s,r,n.readTime)?this.Xi(e,aG(t,null,"F")):this.os(e,s,t,n)}))})))}es(e,t,n,i){return aq(t)||i.isEqual(oA.min())?oV.resolve(null):this.Zi.getDocuments(e,n).next(r=>{let s=this.rs(t,r);return this.ss(t,s,n,i)?oV.resolve(null):(oh()<=v.DEBUG&&ou("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),aQ(t)),this.os(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1;return new oM(oA.fromTimestamp(1e9===i?new oN(n+1,0):new oN(n,i)),oO.empty(),-1)}(i,0)).next(e=>e))})}rs(e,t){let n=new oQ(aX(e));return t.forEach((t,i)=>{aY(e,i)&&(n=n.add(i))}),n}ss(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(e,t,n){return oh()<=v.DEBUG&&ou("QueryEngine","Using full collection scan to execute query:",aQ(t)),this.Zi.getDocumentsMatchingQuery(e,t,oM.min(),n)}os(e,t,n,i){return this.Zi.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t,n,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new oG(ox),this.cs=new aJ(e=>aF(e),aU),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hd(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function hR(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],o=a8();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({Ts:e,removedBatchIds:r,addedBatchIds:s}))})})}function hD(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function hP(e,t,n){let i=e.us.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!oB(e))throw e;ou("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(i.target)}function hL(e,t,n){let i=oA.min(),r=a8();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let i=e.cs.get(n);return void 0!==i?oV.resolve(e.us.get(i)):e.Gr.getTargetData(t,n)})(e,s,a$(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,n?i:oA.min(),n?r:a8())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(i)||oA.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(i,s),{documents:n,ds:r}}))}class hO{constructor(){this.activeTargetIds=a4}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class hM{constructor(){this._o=new hO,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new hO,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(ou("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(ou("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hV=null;function hB(){return null===hV?hV=0x10000000+Math.round(0x80000000*Math.random()):hV++,"0x"+hV.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hq={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hz="WebChannelConnection";class h$ extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${n}/databases/${i}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Oo(e,t,n,i,r){let s=hB(),o=this.No(e,t.toUriEncodedString());ou("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,i,r),this.Bo(e,o,a,n).then(t=>(ou("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw of("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}ko(e,t,n,i,r,s){return this.Oo(e,t,n,i,r)}Lo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}No(e,t){let n=hq[e];return`${this.Fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,i){let r=hB();return new Promise((s,o)=>{let a=new C;a.setWithCredentials(!0),a.listenOnce(I.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case S.NO_ERROR:let t=a.getResponseJson();ou(hz,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case S.TIMEOUT:ou(hz,`RPC '${e}' ${r} timed out`),o(new om(og.DEADLINE_EXCEEDED,"Request time out"));break;case S.HTTP_ERROR:let n=a.getStatus();if(ou(hz,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(og).indexOf(t)>=0?t:og.UNKNOWN}(t.status);o(new om(e,t.message))}else o(new om(og.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new om(og.UNAVAILABLE,"Connection failed."));break;default:op()}}finally{ou(hz,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(i);ou(hz,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",l,n,15)})}qo(e,t,n){let i=hB(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=A(),o=N(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let h=r.join("");ou(hz,`Creating RPC '${e}' stream ${i}: ${h}`,a);let u=s.createWebChannel(h,a),c=!1,f=!1,d=new hj({Eo:t=>{f?ou(hz,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(c||(ou(hz,`Opening RPC '${e}' stream ${i} transport.`),u.open(),c=!0),ou(hz,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},Ao:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,T.EventType.OPEN,()=>{f||(ou(hz,`RPC '${e}' stream ${i} transport opened.`),d.So())}),p(u,T.EventType.CLOSE,()=>{f||(f=!0,ou(hz,`RPC '${e}' stream ${i} transport closed`),d.Do())}),p(u,T.EventType.ERROR,t=>{f||(f=!0,of(hz,`RPC '${e}' stream ${i} transport errored:`,t),d.Do(new om(og.UNAVAILABLE,"The operation could not be completed")))}),p(u,T.EventType.MESSAGE,t=>{var n;if(!f){let r=t.data[0];r||op();let s=(null==r?void 0:r.error)||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){ou(hz,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=O[e];if(void 0!==t)return lk(t)}(t),r=s.message;void 0===n&&(n=og.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),f=!0,d.Do(new om(n,r)),u.close()}else ou(hz,`RPC '${e}' stream ${i} received:`,r),d.vo(r)}}),p(o,k.STAT_EVENT,t=>{t.stat===x.PROXY?ou(hz,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===x.NOPROXY&&ou(hz,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.bo()},0),d}}function hK(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hG(e){return new lG(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hH{constructor(e,t,n=1e3,i=1.5,r=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-n);i>0&&ou("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hW{constructor(e,t,n,i,r,s,o,a){this.li=e,this.Yo=n,this.Zo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new hH(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===og.RESOURCE_EXHAUSTED?(oc(t.toString()),oc("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===og.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Xo===t&&this.I_(e,n)},t=>{e(()=>{let e=new om(og.UNKNOWN,"Fetching auth token failed: "+t.message);return this.E_(e)})})}I_(e,t){let n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{n(()=>this.E_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ou("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ou("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hQ extends hW{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:op(),o=t.targetChange.targetIds||[],a=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||op(),oZ.fromBase64String(r||"")):(void 0===r||r instanceof sO||r instanceof Uint8Array||op(),oZ.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause;n=new lU(s,o,a,l&&new om(void 0===l.code?og.UNKNOWN:lk(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=l1(e,i.document.name),s=lY(i.document.updateTime),o=i.document.createTime?lY(i.document.createTime):oA.min(),a=new am({mapValue:{fields:i.document.fields}}),l=ay.newFoundDocument(r,s,o,a);n=new lM(i.targetIds||[],i.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=l1(e,i.document),s=i.readTime?lY(i.readTime):oA.min(),o=ay.newNoDocument(r,s);n=new lM([],i.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=l1(e,i.document);n=new lM([],i.removedTargetIds||[],r,null)}else{if(!("filter"in t))return op();{t.filter;let e=t.filter;e.targetId;let{count:i=0,unchangedNames:r}=e,s=new lx(i,r);n=new lF(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return oA.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?oA.min():t.readTime?lY(t.readTime):oA.min()}(e);return this.listener.R_(t,n)}V_(e){let t={};t.database=l6(this.serializer),t.addTarget=function(e,t){let n;let i=t.target;if((n=aV(i)?{documents:{documents:[l2(e,i.path)]}}:{query:function(e,t){var n,i;let r;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(r=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=l2(e,r);let a=function(e){if(0!==e.length)return function e(t){return t instanceof aC?function(e){if("=="===e.op){if(ac(e.value))return{unaryFilter:{field:l8(e.field),op:"IS_NAN"}};if(au(e.value))return{unaryFilter:{field:l8(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ac(e.value))return{unaryFilter:{field:l8(e.field),op:"IS_NOT_NAN"}};if(au(e.value))return{unaryFilter:{field:l8(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:l8(e.field),op:l$[e.op],value:e.value}}}(t):t instanceof aT?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:lK[t.op],filters:n}}}(t):op()}(aT.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:l8(e.field),direction:lz[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=lH(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),{ct:s,parent:r}}(e,i).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=lQ(e,t.resumeToken);let i=lH(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(oA.min())>0){n.readTime=lW(e,t.snapshotVersion.toTimestamp());let i=lH(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return op()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){let t={};t.database=l6(this.serializer),t.removeTarget=e,this.c_(t)}}class hY extends hW{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||op(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&op(),this.listener.p_()}onNext(e){var t,n;e.streamToken||op(),this.lastStreamToken=e.streamToken,this.r_.reset();let i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||op(),t.map(e=>{let t;return(t=e.updateTime?lY(e.updateTime):lY(n)).isEqual(oA.min())&&(t=lY(n)),new lu(t,e.transformResults||[])})):[]),r=lY(e.commitTime);return this.listener.y_(r,i)}w_(){let e={};e.database=l6(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let i;if(t instanceof ly)i={update:l5(e,t.key,t.value)};else if(t instanceof lE)i={delete:l0(e,t.key)};else if(t instanceof l_)i={update:l5(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof lC))return op();i={verify:l0(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ln)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof li)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ls)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof la)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw op()})(0,e))),t.precondition.isNone||(i.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:lW(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:op()),i})(this.serializer,e))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hX extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new om(og.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Oo(e,lJ(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===og.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new om(og.UNKNOWN,e.toString())})}ko(e,t,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.ko(e,lJ(t,n),i,s,o,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===og.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new om(og.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class hJ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(oc(t),this.C_=!1):ou("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hZ{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(e=>{n.enqueueAndForget(async()=>{h7(this)&&(ou("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await h1(e),e.K_.set("Unknown"),e.k_.delete(4),await h0(e)}(this))})}),this.K_=new hJ(n,i)}}async function h0(e){if(h7(e))for(let t of e.q_)await t(!0)}async function h1(e){for(let t of e.q_)await t(!1)}function h2(e,t){e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),h4(e)?h8(e):up(e).s_()&&h3(e,t))}function h6(e,t){let n=up(e);e.B_.delete(t),n.s_()&&h5(e,t),0===e.B_.size&&(n.s_()?n.a_():h7(e)&&e.K_.set("Unknown"))}function h3(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(oA.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}up(e).V_(t)}function h5(e,t){e.U_.xe(t),up(e).m_(t)}function h8(e){e.U_=new lB({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),up(e).start(),e.K_.F_()}function h4(e){return h7(e)&&!up(e).i_()&&e.B_.size>0}function h7(e){return 0===e.k_.size}async function h9(e){e.K_.set("Online")}async function ue(e){e.B_.forEach((t,n)=>{h3(e,t)})}async function ut(e,t){e.U_=void 0,h4(e)?(e.K_.O_(t),h8(e)):e.K_.set("Unknown")}async function un(e,t,n){if(e.K_.set("Online"),t instanceof lU&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let i of t.targetIds)e.B_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.B_.delete(i),e.U_.removeTarget(i))}(e,t)}catch(n){ou("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ui(e,n)}else if(t instanceof lM?e.U_.$e(t):t instanceof lF?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(oA.min()))try{let t=await hD(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.U_.it(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.B_.get(i);r&&e.B_.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let i=e.B_.get(t);if(!i)return;e.B_.set(t,i.withResumeToken(oZ.EMPTY_BYTE_STRING,i.snapshotVersion)),h5(e,t);let r=new l9(i.target,t,n,i.sequenceNumber);h3(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ou("RemoteStore","Failed to raise snapshot:",t),await ui(e,t)}}async function ui(e,t,n){if(!oB(t))throw t;e.k_.add(1),await h1(e),e.K_.set("Offline"),n||(n=()=>hD(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ou("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await h0(e)})}function ur(e,t){return t().catch(n=>ui(e,n,t))}async function us(e){let t=ug(e),n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;h7(e)&&e.L_.length<10;)try{let i=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===i){0===e.L_.length&&t.a_();break}n=i.batchId,function(e,t){e.L_.push(t);let n=ug(e);n.s_()&&n.f_&&n.g_(t.mutations)}(e,i)}catch(t){await ui(e,t)}uo(e)&&ua(e)}function uo(e){return h7(e)&&!ug(e).i_()&&e.L_.length>0}function ua(e){ug(e).start()}async function ul(e){ug(e).w_()}async function uh(e){let t=ug(e);for(let n of e.L_)t.g_(n.mutations)}async function uu(e,t,n){let i=e.L_.shift(),r=lI.from(i,t,n);await ur(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await us(e)}async function uc(e,t){t&&ug(e).f_&&await async function(e,t){var n;if(function(e){switch(e){default:return op();case og.CANCELLED:case og.UNKNOWN:case og.DEADLINE_EXCEEDED:case og.RESOURCE_EXHAUSTED:case og.INTERNAL:case og.UNAVAILABLE:case og.UNAUTHENTICATED:return!1;case og.INVALID_ARGUMENT:case og.NOT_FOUND:case og.ALREADY_EXISTS:case og.PERMISSION_DENIED:case og.FAILED_PRECONDITION:case og.ABORTED:case og.OUT_OF_RANGE:case og.UNIMPLEMENTED:case og.DATA_LOSS:return!0}}(n=t.code)&&n!==og.ABORTED){let n=e.L_.shift();ug(e).__(),await ur(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await us(e)}}(e,t),uo(e)&&ua(e)}async function uf(e,t){e.asyncQueue.verifyOperationInProgress(),ou("RemoteStore","RemoteStore received new credentials");let n=h7(e);e.k_.add(3),await h1(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await h0(e)}async function ud(e,t){t?(e.k_.delete(2),await h0(e)):t||(e.k_.add(2),await h1(e),e.K_.set("Unknown"))}function up(e){var t,n,i;return e.W_||(e.W_=(t=e.datastore,n=e.asyncQueue,i={Ro:h9.bind(null,e),mo:ue.bind(null,e),po:ut.bind(null,e),R_:un.bind(null,e)},t.b_(),new hQ(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.q_.push(async t=>{t?(e.W_.__(),h4(e)?h8(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function ug(e){var t,n,i;return e.G_||(e.G_=(t=e.datastore,n=e.asyncQueue,i={Ro:()=>Promise.resolve(),mo:ul.bind(null,e),po:uc.bind(null,e),p_:uh.bind(null,e),y_:uu.bind(null,e)},t.b_(),new hY(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.q_.push(async t=>{t?(e.G_.__(),await us(e)):(await e.G_.stop(),e.L_.length>0&&(ou("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new oy,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){let s=new um(e,t,Date.now()+n,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new om(og.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(e,t){if(oc("AsyncQueue",`${t}: ${e}`),oB(e))return new om(og.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static emptySet(e){return new u_(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||oO.comparator(t.key,n.key):(e,t)=>oO.comparator(e.key,t.key),this.keyedMap=a1(),this.sortedSet=new oG(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof u_)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new u_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.z_=new oG(oO.comparator)}track(e){let t=e.doc.key,n=this.z_.get(t);n?0!==e.type&&3===n.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==n.type?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.z_=this.z_.remove(t):1===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):op():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class uw{constructor(e,t,n,i,r,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new uw(e,t,u_.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aH(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class uE{constructor(){this.queries=uC(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=uC(),n.forEach((e,n)=>{for(let e of n.J_)e.onError(t)})}(this,new om(og.ABORTED,"Firestore shutting down"))}}function uC(){return new aJ(e=>aW(e),aH)}async function uT(e,t){let n=3,i=t.query,r=e.queries.get(i);r?!r.Y_()&&t.Z_()&&(n=2):(r=new ub,n=t.Z_()?0:1);try{switch(n){case 0:r.H_=await e.onListen(i,!0);break;case 1:r.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(n){let e=uy(n,`Initialization of query '${aQ(t.query)}' failed`);return void t.onError(e)}e.queries.set(i,r),r.J_.push(t),t.ea(e.onlineState),r.H_&&t.ta(r.H_)&&uk(e)}async function uI(e,t){let n=t.query,i=3,r=e.queries.get(n);if(r){let e=r.J_.indexOf(t);e>=0&&(r.J_.splice(e,1),0===r.J_.length?i=t.Z_()?0:1:!r.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function uS(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.J_)e.ta(i)&&(n=!0);r.H_=i}}n&&uk(e)}function ux(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.J_)e.onError(n);e.queries.delete(t)}function uk(e){e.X_.forEach(e=>{e.next()})}(U=F||(F={})).na="default",U.Cache="cache";class uN{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new uw(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=uw.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==F.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.key=e}}class uR{constructor(e){this.key=e}}class uD{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=a8(),this.mutatedKeys=a8(),this.Va=aX(e),this.ma=new u_(this.Va)}get fa(){return this.da}ga(e,t){let n=t?t.pa:new uv,i=t?t.ma:this.ma,r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1,a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let h=i.get(e),u=aY(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),d=!1;h&&u?h.data.isEqual(u.data)?c!==f&&(n.track({type:3,doc:u}),d=!0):this.ya(h,u)||(n.track({type:2,doc:u}),d=!0,(a&&this.Va(u,a)>0||l&&0>this.Va(u,l))&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),d=!0):h&&!u&&(n.track({type:1,doc:h}),d=!0,(a||l)&&(o=!0)),d&&(u?(s=s.add(u),r=f?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ma:s,pa:n,ss:o,mutatedKeys:r}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return op()}};return n(e)-n(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(n),i=null!=i&&i;let o=t&&!i?this.Sa():[],a=0===this.Ra.size&&this.current&&!i?1:0,l=a!==this.Aa;return(this.Aa=a,0!==s.length||l)?{snapshot:new uw(this.query,e.ma,r,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new uv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.da=this.da.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=a8(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new uR(e))}),this.Ra.forEach(n=>{e.has(n)||t.push(new uA(n))}),t}va(e){this.da=e.ds,this.Ra=a8();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return uw.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class uP{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class uL{constructor(e){this.key=e,this.Fa=!1}}class uO{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new aJ(e=>aW(e),aH),this.Oa=new Map,this.Na=new Set,this.La=new oG(oO.comparator),this.Ba=new Map,this.ka=new hy,this.qa={},this.Qa=new Map,this.Ka=ho.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function uM(e,t,n=!0){let i;let r=u6(e),s=r.xa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await uU(r,t,n,!0),i}async function uF(e,t){let n=u6(e);await uU(n,t,!0,!1)}async function uU(e,t,n,i){var r,s;let o;let a=await (r=e.localStore,s=a$(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Gr.getTargetData(e,s).next(n=>n?(t=n,oV.resolve(t)):r.Gr.allocateTargetId(e).next(n=>(t=new l9(s,n,"TargetPurposeListen",e.currentSequenceNumber),r.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.us=r.us.insert(e.targetId,e),r.cs.set(s,e.targetId)),e})),l=a.targetId,h=e.sharedClientState.addLocalQueryTarget(l,n);return i&&(o=await uV(e,t,l,"current"===h,a.resumeToken)),e.isPrimaryClient&&n&&h2(e.remoteStore,a),o}async function uV(e,t,n,i,r){e.Ua=(t,n,i)=>(async function(e,t,n,i){let r=t.view.ga(n);r.ss&&(r=await hL(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,r)));let s=i&&i.targetChanges.get(t.targetId),o=i&&null!=i.targetMismatches.get(t.targetId),a=t.view.applyChanges(r,e.isPrimaryClient,s,o);return uJ(e,t.targetId,a.ba),a.snapshot})(e,t,n,i);let s=await hL(e.localStore,t,!0),o=new uD(t,s.ds),a=o.ga(s.documents),l=lO.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),h=o.applyChanges(a,e.isPrimaryClient,l);uJ(e,n,h.ba);let u=new uP(t,n,o);return e.xa.set(t,u),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),h.snapshot}async function uB(e,t,n){let i=e.xa.get(t),r=e.Oa.get(i.targetId);if(r.length>1)return e.Oa.set(i.targetId,r.filter(e=>!aH(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(i.targetId),e.sharedClientState.isActiveQueryTarget(i.targetId)||await hP(e.localStore,i.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(i.targetId),n&&h6(e.remoteStore,i.targetId),uY(e,i.targetId)}).catch(oU)):(uY(e,i.targetId),await hP(e.localStore,i.targetId,!0))}async function uq(e,t){let n=e.xa.get(t),i=e.Oa.get(n.targetId);e.isPrimaryClient&&1===i.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),h6(e.remoteStore,n.targetId))}async function uj(e,t,n){var i;let r=(e.remoteStore.remoteSyncer.applySuccessfulWrite=uG.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uH.bind(null,e),e);try{let e;let s=await function(e,t){let n,i;let r=oN.now(),s=t.reduce((e,t)=>e.add(t.key),a8());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=aZ,l=a8();return e.hs.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(i=>{n=i;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let i of e.fieldTransforms){let e=t.data.field(i.field),r=lt(i.transform,e||null);null!=r&&(null===n&&(n=am.empty()),n.set(i.field,r))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new l_(e.key,t,function e(t){let n=[];return o$(t.fields,(t,i)=>{let r=new oL([t]);if(af(i)){let t=e(i.mapValue).fields;if(0===t.length)n.push(r);else for(let e of t)n.push(r.child(e))}else n.push(r)}),new oX(n)}(t.value.mapValue),lc.exists(!0)))}return e.mutationQueue.addMutationBatch(o,r,s,t)}).next(t=>{i=t;let r=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,r)})}).then(()=>({batchId:i.batchId,changes:a2(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.qa[r.currentUser.toKey()])||(e=new oG(ox)),e=e.insert(i,n),r.qa[r.currentUser.toKey()]=e,await u0(r,s.changes),await us(r.remoteStore)}catch(t){let e=uy(t,"Failed to persist write");n.reject(e)}}async function uz(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let o,a;let l=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;let h=[];t.targetChanges.forEach((s,o)=>{var a;let l=i.get(o);if(!l)return;h.push(e.Gr.removeMatchingKeys(r,s.removedDocuments,o).next(()=>e.Gr.addMatchingKeys(r,s.addedDocuments,o)));let u=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(oZ.EMPTY_BYTE_STRING,oA.min()).withLastLimboFreeSnapshotVersion(oA.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),i=i.insert(o,u),a=u,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Gr.updateTargetData(r,u))});let u=aZ,c=a8();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),h.push((s=t.documentUpdates,o=a8(),a=a8(),s.forEach(e=>o=o.add(e)),l.getEntries(r,o).next(e=>{let t=aZ;return s.forEach((n,i)=>{let r=e.get(n);i.isFoundDocument()!==r.isFoundDocument()&&(a=a.add(n)),i.isNoDocument()&&i.version.isEqual(oA.min())?(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):ou("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{Is:t,Es:a}})).next(e=>{u=e.Is,c=e.Es})),!n.isEqual(oA.min())){let t=e.Gr.getLastRemoteSnapshotVersion(r).next(t=>e.Gr.setTargetsMetadata(r,r.currentSequenceNumber,n));h.push(t)}return oV.waitFor(h).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(t=>(e.us=i,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let i=e.Ba.get(n);i&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||op(),t.addedDocuments.size>0?i.Fa=!0:t.modifiedDocuments.size>0?i.Fa||op():t.removedDocuments.size>0&&(i.Fa||op(),i.Fa=!1))}),await u0(e,n,t)}catch(e){await oU(e)}}function u$(e,t,n){var i;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let r=[];e.xa.forEach((e,n)=>{let i=n.view.ea(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.J_)e.ea(t)&&(n=!0)}),n&&uk(i),r.length&&e.Ma.R_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function uK(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.Ba.get(t),r=i&&i.key;if(r){let n=new oG(oO.comparator);n=n.insert(r,ay.newNoDocument(r,oA.min()));let i=a8().add(r),s=new lL(oA.min(),new Map,new oG(ox),n,i);await uz(e,s),e.La=e.La.remove(r),e.Ba.delete(t),uZ(e)}else await hP(e.localStore,t,!1).then(()=>uY(e,t,n)).catch(oU)}async function uG(e,t){var n;let i=t.batch.batchId;try{let r=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let i=t.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,i){let r=n.batch,s=r.keys(),o=oV.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||op(),0>t.version.compareTo(s)&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=a8();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))});uQ(e,i,null),uW(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await u0(e,r)}catch(e){await oU(e)}}async function uH(e,t,n){var i;try{let r=await (i=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return i.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||op(),n=t.keys(),i.mutationQueue.removeMutationBatch(e,t))).next(()=>i.mutationQueue.performConsistencyCheck(e)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>i.localDocuments.getDocuments(e,n))});uQ(e,t,n),uW(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await u0(e,r)}catch(e){await oU(e)}}function uW(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function uQ(e,t,n){let i=e.qa[e.currentUser.toKey()];if(i){let r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),e.qa[e.currentUser.toKey()]=i}}function uY(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(i),n&&e.Ma.Wa(i,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||uX(e,t)})}function uX(e,t){e.Na.delete(t.path.canonicalString());let n=e.La.get(t);null!==n&&(h6(e.remoteStore,n),e.La=e.La.remove(t),e.Ba.delete(n),uZ(e))}function uJ(e,t,n){for(let i of n)i instanceof uA?(e.ka.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.La.get(n)||e.Na.has(i)||(ou("SyncEngine","New document in limbo: "+n),e.Na.add(i),uZ(e))}(e,i)):i instanceof uR?(ou("SyncEngine","Document no longer in limbo: "+i.key),e.ka.removeReference(i.key,t),e.ka.containsKey(i.key)||uX(e,i.key)):op()}function uZ(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let n=new oO(oD.fromString(t)),i=e.Ka.next();e.Ba.set(i,new uL(n)),e.La=e.La.insert(n,i),h2(e.remoteStore,new l9(a$(new aB(n.path)),i,"TargetPurposeLimboResolution",oq.oe))}}async function u0(e,t,n){let i=[],r=[],s=[];e.xa.isEmpty()||(e.xa.forEach((o,a)=>{s.push(e.Ua(a,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let i=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);let e=hx.zi(a.targetId,t);r.push(e)}}))}),await Promise.all(s),e.Ma.R_(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>oV.forEach(t,t=>oV.forEach(t.Wi,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>oV.forEach(t.Gi,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!oB(e))throw e;ou("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.us.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);e.us=e.us.insert(t,r)}}}(e.localStore,r))}async function u1(e,t){var n;if(!e.currentUser.isEqual(t)){ou("SyncEngine","User change. New user:",t.toKey());let i=await hR(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new om(og.CANCELLED,n))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await u0(e,i.Ts)}}function u2(e,t){let n=e.Ba.get(t);if(n&&n.Fa)return a8().add(n.key);{let n=a8(),i=e.Oa.get(t);if(!i)return n;for(let t of i){let i=e.xa.get(t);n=n.unionWith(i.view.fa)}return n}}function u6(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=uz.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uK.bind(null,e),e.Ma.R_=uS.bind(null,e.eventManager),e.Ma.Wa=ux.bind(null,e.eventManager),e}class u3{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hG(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new hA(t,new hN,e.initialUser,this.serializer)}ja(e){return new hC(hI.ei,this.serializer)}za(e){return new hM}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}u3.provider={build:()=>new u3};class u5 extends u3{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof hS||op(),new hh(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?hs.withCacheSize(this.cacheSizeBytes):hs.DEFAULT;return new hC(e=>hS.ei(e,t),this.serializer)}}class u8{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>u$(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=u1.bind(null,this.syncEngine),await ud(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uE}createDatastore(e){let t=hG(e.databaseInfo.databaseId),n=new h$(e.databaseInfo);return new hX(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new hZ(t,this.datastore,e.asyncQueue,e=>u$(this.syncEngine,e,0),hU.p()?new hU:new hF)}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){let a=new uO(e,t,n,i,r,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){ou("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await h1(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}u8.provider={build:()=>new u8};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):oc("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u7{constructor(e,t,n,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=oo.UNAUTHENTICATED,this.clientId=oS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async e=>{ou("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ou("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new oy;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=uy(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function u9(e,t){e.asyncQueue.verifyOperationInProgress(),ou("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await hR(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ce(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ct(e);ou("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>uf(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>uf(t.remoteStore,n)),e._onlineComponents=t}async function ct(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){ou("FirestoreClient","Using user provided OfflineComponentProvider");try{await u9(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===og.FAILED_PRECONDITION||t.code===og.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;of("Error using user provided cache. Falling back to memory cache: "+t),await u9(e,new u3)}}else ou("FirestoreClient","Using default OfflineComponentProvider"),await u9(e,new u5(void 0))}return e._offlineComponents}async function cn(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ou("FirestoreClient","Using user provided OnlineComponentProvider"),await ce(e,e._uninitializedComponentsProvider._online)):(ou("FirestoreClient","Using default OnlineComponentProvider"),await ce(e,new u8))),e._onlineComponents}async function ci(e){let t=await cn(e),n=t.eventManager;return n.onListen=uM.bind(null,t.syncEngine),n.onUnlisten=uB.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=uF.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=uq.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t,n){if(!n)throw new om(og.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ca(e){if(!oO.isDocumentKey(e))throw new om(og.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cl(e){if(oO.isDocumentKey(e))throw new om(og.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ch(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":op()}function cu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new om(og.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ch(e);throw new om(og.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new om(og.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new om(og.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new om(og.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cr(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new om(og.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new om(og.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new om(og.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cf{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new om(og.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new om(og.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ov;switch(e.type){case"firstParty":return new oC(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new om(og.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=cs.get(e);t&&(ou("ComponentProvider","Removing Datastore"),cs.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new cd(this.firestore,e,this._query)}}class cp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cp(this.firestore,e,this._key)}}class cg extends cd{constructor(e,t,n){super(e,t,new aB(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new cp(this.firestore,null,new oO(e))}withConverter(e){return new cg(this.firestore,e,this._path)}}function cm(e,t,...n){if(e=eU(e),co("collection","path",t),e instanceof cf){let i=oD.fromString(t,...n);return cl(i),new cg(e,null,i)}{if(!(e instanceof cp||e instanceof cg))throw new om(og.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(oD.fromString(t,...n));return cl(i),new cg(e.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new hH(this,"async_queue_retry"),this.fu=()=>{let e=hK();e&&ou("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=hK();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=hK();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new oy;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!oB(e))throw e;ou("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,oc("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=um.createAndSchedule(this,e,t,n,e=>this.Su(e));return this.du.push(i),i}pu(){this.Au&&op()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.du.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.du))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}}class c_ extends cf{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new cy,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function cv(e){if(e._terminated)throw new om(og.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,i,r;let s=e._freezeSettings(),o=(r=e._databaseId,new o4(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,cr(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new u7(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cw(oZ.fromBase64String(e))}catch(e){throw new om(og.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cw(oZ.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new om(og.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oL(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new om(og.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new om(og.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ox(this._lat,e._lat)||ox(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=/^__.*__$/;class cS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new l_(e,this.data,this.fieldMask,t,this.fieldTransforms):new ly(e,this.data,t,this.fieldTransforms)}}function cx(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw op()}}class ck{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ck(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Lu(e),i}Bu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return cF(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(cx(this.Mu)&&cI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class cN{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||hG(e)}$u(e,t,n,i=!1){return new ck({Mu:e,methodName:t,Ku:n,path:oL.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(e){let t=e._freezeSettings(),n=hG(e._databaseId);return new cN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cR(e,t){if(cP(e=eU(e)))return cL("Unsupported field value:",t,e),cD(e,t);if(e instanceof cE)return function(e,t){if(!cx(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&4!==t.Mu)throw t.qu("Nested arrays are not supported");return function(e,t){let n=[],i=0;for(let r of e){let e=cR(r,t.ku(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,i,r;if(null===(e=eU(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(r=i=e)&&Number.isInteger(r)&&!oj(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?a9(i):a7(n,i);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=oN.fromDate(e);return{timestampValue:lW(t.serializer,n)}}if(e instanceof oN){let n=new oN(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:lW(t.serializer,n)}}if(e instanceof cC)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cw)return{bytesValue:lQ(t.serializer,e._byteString)};if(e instanceof cp){let n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.qu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:lX(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof cT)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return a7(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${ch(e)}`)}(e,t)}function cD(e,t){let n={};return oK(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):o$(e,(e,i)=>{let r=cR(i,t.Ou(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function cP(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof oN||e instanceof cC||e instanceof cw||e instanceof cp||e instanceof cE||e instanceof cT)}function cL(e,t,n){if(!cP(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=ch(n);throw"an object"===i?t.qu(e+" a custom object"):t.qu(e+" "+i)}}const cO=RegExp("[~\\*/\\[\\]]");function cM(e,t,n){if(t.search(cO)>=0)throw cF(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cb(...t.split("."))._internalPath}catch(i){throw cF(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cF(e,t,n,i,r){let s=i&&!i.isEmpty(),o=void 0!==r,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new om(og.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new cp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new cV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(cB("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class cV extends cU{data(){return super.data()}}function cB(e,t){return"string"==typeof t?cM(e,t):t instanceof cb?t._internalPath:t._delegate._internalPath}class cq{}class cj extends cq{}function cz(e,t,...n){let i=[];for(let r of(t instanceof cq&&i.push(t),function(e){let t=e.filter(e=>e instanceof cG).length,n=e.filter(e=>e instanceof c$).length;if(t>1||t>0&&n>0)throw new om(og.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i=i.concat(n)),i))e=r._apply(e);return e}class c$ extends cj{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new c$(e,t,n)}_apply(e){let t=this._parse(e);return cQ(e._query,t),new cd(e.firestore,e.converter,aK(e._query,t))}_parse(e){let t=cA(e.firestore);return function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new om(og.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){cW(o,s);let t=[];for(let n of o)t.push(cH(i,e,n));a={arrayValue:{values:t}}}else a=cH(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||cW(o,s),a=function(e,t,n,i=!1){return cR(n,e.$u(i?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return aC.create(r,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cK(e,t,n){let i=cB("where",e);return c$._create(i,t,n)}class cG extends cq{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new cG(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:aT.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())cQ(n,e),n=aK(n,e)}(e._query,t),new cd(e.firestore,e.converter,aK(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function cH(e,t,n){if("string"==typeof(n=eU(n))){if(""===n)throw new om(og.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aj(t)&&-1!==n.indexOf("/"))throw new om(og.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let i=t.path.child(oD.fromString(n));if(!oO.isDocumentKey(i))throw new om(og.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return aa(e,new oO(i))}if(n instanceof cp)return aa(e,n._key);throw new om(og.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ch(n)}.`)}function cW(e,t){if(!Array.isArray(e)||0===e.length)throw new om(og.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function cQ(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new om(og.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new om(og.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class cY{convertValue(e,t="none"){switch(ae(e)){case 0:return null;case 1:return e.booleanValue;case 2:return o2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(o6(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw op()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return o$(e,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,i;return new cT(null===(i=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map(e=>o2(e.doubleValue)))}convertGeoPoint(e){return new cC(o2(e.latitude),o2(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=o5(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(o8(e));default:return null}}convertTimestamp(e){let t=o1(e);return new oN(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=oD.fromString(e);l7(n)||op();let i=new o7(n.get(1),n.get(3)),r=new oO(n.popFirst(5));return i.isEqual(t)||oc(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cX{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cJ extends cU{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new cZ(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(cB("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class cZ extends cJ{data(e={}){return super.data(e)}}class c0{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cX(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new cZ(this._firestore,this._userDataWriter,n.key,n,new cX(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new om(og.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new cZ(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cX(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let i=new cZ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cX(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return op()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class c1 extends cY{constructor(e){super(),this.firestore=e}convertBytes(e){return new cw(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new cp(this.firestore,null,t)}}function c2(e){e=cu(e,cd);let t=cu(e.firestore,c_),n=cv(t),i=new c1(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new om(og.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let i=new oy;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,i,r){let s=new u4({next:n=>{s.eu(),t.enqueueAndForget(()=>uI(e,o)),n.fromCache&&"server"===i.source?r.reject(new om(og.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new uN(n,s,{includeMetadataChanges:!0,ua:!0});return uT(e,o)})(await ci(e),e.asyncQueue,t,n,i)),i.promise})(n,e._query).then(n=>new c0(t,i,e,n)))}new WeakMap,function(e=!0){oa=tf,tl(new eV("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new c_(new ob(t.getProvider("auth-internal")),new oI(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new om(og.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new o7(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),tg(os,"4.7.5",void 0),tg(os,"4.7.5","esm2017")}();const c6=td({apiKey:"AIzaSyAs_fHM_PXBfvHjuTCJYdx4RxAyUc3HjUw",authDomain:"rooms-20b4f.firebaseapp.com",databaseURL:"https://rooms-20b4f-default-rtdb.firebaseio.com",projectId:"rooms-20b4f",storageBucket:"rooms-20b4f.firebasestorage.app",messagingSenderId:"876171926343",appId:"1:876171926343:web:812df2d9d4cc55edb10a62"}),c3=function(e=tp(),t){let n=th(e,"database").getImmediate({identifier:void 0});if(!n._instanceStarted){let e=ed("database");e&&function(e,t,n,i={}){var r;let s;(e=eU(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&t$("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(i.mockUserToken&&t$('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ne(ne.OWNER)):i.mockUserToken&&(s=new ne("string"==typeof i.mockUserToken?i.mockUserToken:em(i.mockUserToken,e.app.options.projectId))),r=s,o.repoInfo_=new nr(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),r&&(o.authTokenProvider_=r)}(n,...e)}return n}(c6),c5=function(e,t){let n=th("object"==typeof e?e:tp(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=ed("firestore");e&&function(e,t,n,i={}){var r;let s=(e=cu(e,cf))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&of("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=oo.MOCK_USER;else{t=em(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new om(og.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new oo(s)}e._authCredentials=new ow(new o_(t,n))}}(n,...e)}return n}(c6),c8=async e=>{let t=cm(c5,"users"),n=cz(t,cK("email","==",e));if((await c2(n)).empty){let n=document.getElementById("nombre").value;try{await function(e,t){var n,i;let r=cu(e.firestore,c_),s=function(e,t,...n){if(e=eU(e),1==arguments.length&&(t=oS.newId()),co("doc","path",t),e instanceof cf){let i=oD.fromString(t,...n);return ca(i),new cp(e,null,new oO(i))}{if(!(e instanceof cp||e instanceof cg))throw new om(og.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(oD.fromString(t,...n));return ca(i),new cp(e.firestore,e instanceof cg?e.converter:null,new oO(i))}}(e),o=(n=e.converter)?n.toFirestore(t):t;return(i=[(function(e,t,n,i,r,s={}){let o,a;let l=e.$u(s.merge||s.mergeFields?2:0,t,n,r);cL("Data must be an object, but it was:",l,i);let h=cD(i,l);if(s.merge)o=new oX(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let i of s.mergeFields){let r=function(e,t,n){if((t=eU(t))instanceof cb)return t._internalPath;if("string"==typeof t)return cM(e,t);throw cF("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,i,n);if(!l.contains(r))throw new om(og.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,r)||e.push(r)}o=new oX(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new cS(new am(h),o,a)})(cA(e.firestore),"addDoc",s._key,o,null!==e.converter,{}).toMutation(s._key,lc.exists(!1))],function(e,t){let n=new oy;return e.asyncQueue.enqueueAndForget(async()=>uj(await cn(e).then(e=>e.syncEngine),t,n)),n.promise}(cv(r),i)).then(()=>s)}(t,{email:e,createdAt:new Date,user:n}),console.log("Correo registrado con éxito"),localStorage.setItem("email",e),localStorage.setItem("user",n),alert("Registro exitoso, ahora puedes ingresar al chat."),document.getElementById("welcomePage").style.display="none",document.getElementById("chatPage").style.display="block"}catch(e){console.error("Error al registrar el correo:",e),alert("Hubo un error al registrar el correo. Intenta nuevamente.")}}else alert("Este correo ya está registrado.")},c4=async e=>{let t=cz(cm(c5,"users"),cK("email","==",e));(await c2(t)).empty?alert("Este correo no está registrado. Por favor, regístrate primero."):(localStorage.setItem("email",e),document.getElementById("welcomePage").style.display="none",document.getElementById("chatPage").style.display="block",ft())};function c7(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)}const c9=()=>{let e=document.getElementById("emailInput"),t=document.getElementById("registerButton"),n=document.getElementById("loginButton");t.addEventListener("click",()=>{let t=e.value;c7(t)?c8(t):alert("Por favor, ingresa un correo válido.")}),n.addEventListener("click",()=>{let t=e.value;c7(t)?c4(t):alert("Por favor, ingresa un correo válido.")})},fe=async e=>{if(e.trim())try{let t=sy(c3,"messages"),n=localStorage.getItem("user");await function(e,t){let n;rW("push",(e=eU(e))._path),r$("push",t,e._path,!0);let i=su(r2(e._repo)),r=s_(e,i),s=s_(e,i);return n=null!=t?(function(e,t){rW("set",(e=eU(e))._path),r$("set",t,e._path,!1);let n=new eg;return function(e,t,n,i,r){r9(e,"set",{path:t.toString(),value:n,priority:null});let s=r6(e),o=n5(n,null),a=rR(o,ry(e.serverSyncTree_,t),s),l=r4(e),h=rf(e.serverSyncTree_,t,a,l,!0);rX(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{let s="ok"===n;s||tK("set at "+t+" failed: "+n);let o=rd(e.serverSyncTree_,l,!s);rZ(e.eventQueue_,t,o),r&&t8(()=>{if("ok"===n)r(null);else{let e=(n||"error").toUpperCase(),t=e;i&&(t+=": "+i);let s=Error(t);s.code=e,r(s)}})});let u=ss(e,t);st(e,u),rZ(e.eventQueue_,u,[])}(e._repo,e._path,t,0,n.wrapCallback(()=>{})),n.promise})(s,t).then(()=>s):Promise.resolve(s),r.then=n.then.bind(n),r.catch=n.then.bind(n,void 0),r}(t,{text:e,user:n,email:localStorage.getItem("email"),createdAt:new Date().toISOString()}),console.log("Mensaje enviado:",e)}catch(e){console.error("Error al enviar mensaje:",e)}},ft=()=>{!function(e,t,n,i,r){var s;let o,a;if("object"==typeof i&&(o=void 0,r=i),"function"==typeof i&&(o=i),r&&r.onlyOnce){let t=n,i=(n,i)=>{r7(e._repo,e,h),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}let l=new sd(n,o||void 0),h="value"===t?new sv(l):new sw(t,l);s=e._repo,a=".info"===nC(e._path)?rm(s.infoSyncTree_,e,h):rm(s.serverSyncTree_,e,h),rJ(s.eventQueue_,e._path,a),()=>r7(e._repo,e,h)}(sy(c3,"messages"),"value",e=>{let t=e.val();t&&fi(Object.values(t))},void 0,void 0)},fn=async e=>{let t=cz(cm(c5,"users"),cK("email","==",e)),n=await c2(t);return n.empty?null:n.docs[0].data().user},fi=async e=>{let t=document.getElementById("messages");for(let n of e){let e=await fn(n.email)||"Usuario desconocido",i=`<p><b>${e}:</b> ${n.text}</p>`;t.innerHTML+=i}t.scrollTop=t.scrollHeight},fr=()=>{let e=document.getElementById("welcomePage"),t=document.getElementById("chatPage");document.getElementById("goBack").addEventListener("click",()=>{t.style.display="none",e.style.display="block"})},fs=()=>{let e=document.getElementById("sendButton"),t=document.getElementById("messageInput");e.addEventListener("click",()=>{fe(t.value),t.value=""}),t.addEventListener("keypress",e=>{"Enter"===e.key&&(fe(t.value),t.value="")})};window.addEventListener("DOMContentLoaded",()=>{fr(),fs(),c9()});
//# sourceMappingURL=index.1450d806.js.map
