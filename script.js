!function(t){var i={};function r(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,i,n){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)r.d(n,a,function(i){return t[i]}.bind(null,a));return n},r.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="",r(r.s=1)}([function(t,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,r,n){return r&&t(i.prototype,r),n&&t(i,n),i}}();function s(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?t:i}function h(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}function c(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var o=r(3);if(void 0!==t.exports)try{o=Tautologistics.NodeHtmlParser}catch(t){}else o=Tautologistics.NodeHtmlParser;var u=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;c(this,t),this.parent=i,this.previousElement=r,this.nextElement=n}return a(t,[{key:"extract",value:function(){var t=this,i=this.descendants;i&&i.length&&(t=i[i.length-1]);var r=this.previousElement,n=t.nextElement;if(this.previousElement=null,t.nextElement=null,r&&(r.nextElement=n),n&&(n.previousElement=r),this.parent){var a=this.parent.contents.indexOf(this);a>=0&&this.parent.contents.splice(a,1)}this.parent=null}},{key:"nextSibling",get:function(){if(this.parent){var t=this.parent.contents.indexOf(this);if(t!=this.parent.contents.length-1)return this.parent.contents[t+1]}}},{key:"previousSibling",get:function(){if(this.parent){var t=this.parent.contents.indexOf(this);if(0!=t)return this.parent.contents[t-1]}}}]),t}(),f=function(t){function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;c(this,i);var h=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r,n,a));return h._text=t,h}return h(i,u),i}(),g=function(t){function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;c(this,i);var h=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r,n,a));return h._text=t,h}return h(i,u),i}();g.prototype.toString=function(){return this._text};var d=function(t){function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;c(this,i);var h=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,r,n,a));return h._text=t,h}return h(i,g),i}();d.prototype.toString=function(){return"<"+this._text+">"};var l=function(t){function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;c(this,i);var o=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,n,a,h));return o.name=t,o.contents=[],o.attrs=r||{},o.hidden=!1,o}return h(i,u),a(i,[{key:"_append",value:function(t){t&&this.contents.push(t)}},{key:"_build",value:function(t){if(!t||t.length<1)return this;for(var r=this,n=0;n<t.length;++n){var a=this._transfer(t[n]);r.nextElement=a,a.previousElement=r,r=a instanceof i?a._build(t[n].children):a,this._append(a)}return r}},{key:"_transfer",value:function(t){return t?"text"===t.type?new g(t.data,this):"comment"===t.type?new f(t.data,this):"directive"===t.type&&"!DOCTYPE"===t.name?new d(t.data,this):new i(t.name,t.attribs,this):null}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=this.findAll(t,i,r);if(n.length>0)return n[0]}},{key:"findAll",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=[],s=new _(t,r,n),h=this.descendants,c=0;c<h.length;++c)if(h[c]instanceof i){var o=s.match(h[c]);o&&a.push(o)}return a}},{key:"getText",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=[],r=this.descendants,n=0;n<r.length;++n)r[n]instanceof g&&i.push(r[n]._text);return i.join(t)}},{key:"_convertAttrsToString",value:function(){var t="";if(!this.attrs)return t;for(var i in this.attrs)Array.isArray(this.attrs[i])?t+=i+'="'+this.attrs[i].join(" ")+'" ':t+=i+'="'+this.attrs[i]+'" ';return t=t.trim()}},{key:"_prettify",value:function(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n="";if(this.hidden&&0==r&&--r,!this.hidden){var a=this._convertAttrsToString();n+=a?t.repeat(r)+"<"+this.name+" "+a+">"+i:t.repeat(r)+"<"+this.name+">"+i}for(var s=0;s<this.contents.length;++s)this.contents[s]instanceof g?n+=t.repeat(r+1)+this.contents[s].toString()+i:this.contents[s]instanceof f?n+=t.repeat(r+1)+"\x3c!--"+this.contents[s]._text+"--\x3e"+i:n+=this.contents[s]._prettify(t,i,r+1);return this.hidden||(n+=t.repeat(r)+"</"+this.name+">"+i),n}},{key:"prettify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n";return this._prettify(t,i).trim()}},{key:"append",value:function(t){var i=this,r=this.nextElement,n=t,a=t,s=t.descendants;s&&s.length>0&&(a=s[s.length-1]);var h=this.descendants;h&&h.length>0&&(r=(i=h[h.length-1]).nextElement),t instanceof g&&i instanceof g?i._text+=t._text:(n.previousElement=i,a.nextElement=r,i&&(i.nextElement=n),r&&(r.previousElement=a),this.contents.push(t),t.parent=this)}},{key:"string",get:function(){for(var t=this;t&&t.contents&&1==t.contents.length;)t=t.contents[0];if(t&&!(t instanceof i))return t}},{key:"text",get:function(){return this.getText()}},{key:"descendants",get:function(){for(var t=[],i=this.nextElement;i;){for(var r=i.parent;r&&r!=this;)r=r.parent;if(!r)break;t.push(i),i=i.nextElement}return t}}]),i}();l.prototype.toString=function(){return this.prettify("","")};var y="[document]",e=function(t){function i(t){c(this,i);var r=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,y,null)),n=new o.DefaultHandler(function(t,i){t&&console.log(t)},{verbose:!1,ignoreWhitespace:!0});return new o.Parser(n).parseComplete(t),Array.isArray(n.dom)?r._build(n.dom):r._build([n.dom]),r.hidden=!0,r}return h(i,l),i}();i.default=e;var _=function(){function t(i,r,n){if(c(this,t),"string"==typeof r?r={class:[r]}:Array.isArray(r)?r={class:r}:r&&r.class&&"string"==typeof r.class&&(r.class=[r.class]),r&&r.class)for(var a=0;a<r.class.length;++a)r.class[a]=r.class[a].trim();this.name=i,this.attrs=r,this.string=n}return a(t,[{key:"match",value:function(t){if(null==this.name&&null==this.attrs)return this.string?this._matchName(t.string,this.string)?t.string:null:t;var i=this._matchName(t.name,this.name);if(!i)return null;if(i=this._matchName(t.string,this.string),!i)return null;if("object"==n(this.attrs)&&!this._isEmptyObject(this.attrs)){for(var r=Object.getOwnPropertyNames(this.attrs),a=!1,s=0;s<r.length;++s)if(r[s]in t.attrs&&this._matchAttrs(r[s],t.attrs[r[s]],this.attrs[r[s]])){a=!0;break}if(!a)return null}return t}},{key:"_matchName",value:function(t,i){if(null==i||null==i)return!0;if(Array.isArray(i)){for(var r=0;r<i.length;++r){if(this._matchName(t,i[r]))return!0}return!1}return t==i}},{key:"_matchAttrs",value:function(t,i,r){"string"==typeof i&&(i="class"==t?i.replace(/\s\s+/g," ").trim().split(" "):[i]),"string"==typeof r&&(r=[r]);for(var n=0;n<r.length;++n)if(i.indexOf(r[n])<0)return!1;return!0}},{key:"_isEmptyObject",value:function(t){return 0==Object.keys(t).length}}]),t}()},function(t,i,r){t.exports=r(2)},function(t,i,r){"use strict";r.r(i);var n=r(0),a=r.n(n);let s,h,c=!1,o=!1;function u(){var t=new XMLHttpRequest;t.onload=function(){if(t.status>=200&&t.status<300){document.getElementById("yusunglee").remove();let i=new a.a(t.responseText);c=!1;let r=document.createElement("div");r.innerHTML=i.findAll("div","sblocks"),r.id="translatedText",r.class="yusunglee",r.style.position="absolute",r.style.top=h.pageY+"px",r.style.left=h.pageX+"px",r.style.padding="20px",r.style.border="1px solid grey",r.style.backgroundColor="White",o||(document.body.appendChild(r),o=!0)}else console.log("The request failed!");console.log("This always runs...")},t.open("GET",`https://cors-anywhere.herokuapp.com/learnersdictionary.com/definition/${s}`),t.send()}document.onmouseup=function(t){"yusunglee"!==t.target.className&&(o=!1,document.getElementById("translatedText")&&document.getElementById("translatedText").remove()),"spn"!==t.target.className&&(c=!1,document.getElementById("yusunglee")&&document.getElementById("yusunglee").remove());let i=document.all?document.selection.createRange().text:document.getSelection();""!==i.toString()&&i.toString().length>2&&(s=i,function(t){h=t;let i=document.createElement("div");i.innerHTML='<Button class="btn"><span class="spn" style="font-size: 20px">번역</span></Button>',i.addEventListener("click",u),i.id="yusunglee",i.class="yusunglee",i.style.position="absolute",i.style.top=t.pageY+"px",i.style.left=t.pageX+"px",c||(document.body.appendChild(i),c=!0)}(t))},document.all||document.captureEvents(Event.MOUSEUP)},function(t,i,r){(function(t){!function(){if("string"!=typeof t){if(this.Tautologistics){if(this.Tautologistics.NodeHtmlParser)return}else this.Tautologistics={};this.Tautologistics.NodeHtmlParser={},i=this.Tautologistics.NodeHtmlParser}var r,n,a,s={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag"};function h(t,i){this._options=i||{},null==this._options.includeLocation&&(this._options.includeLocation=!1),this.validateHandler(t),this._handler=t,this.reset()}function c(t){c.super_.call(this,t,{ignoreWhitespace:!0,verbose:!1,enforceEmptyTags:!1})}function o(t,i){this.reset(),this._options=i||{},null==this._options.ignoreWhitespace&&(this._options.ignoreWhitespace=!1),null==this._options.verbose&&(this._options.verbose=!0),null==this._options.enforceEmptyTags&&(this._options.enforceEmptyTags=!0),"function"==typeof t&&(this._callback=t)}h._reTrim=/(^\s+|\s+$)/g,h._reTrimComment=/(^\!--|--$)/g,h._reWhitespace=/\s/g,h._reTagName=/^\s*(\/?)\s*([^\s\/]+)/,h._reAttrib=/([^=<>\"\'\s]+)\s*=\s*"([^"]*)"|([^=<>\"\'\s]+)\s*=\s*'([^']*)'|([^=<>\"\'\s]+)\s*=\s*([^'"\s]+)|([^=<>\"\'\s\/]+)/g,h._reTags=/[\<\>]/g,h.prototype.parseComplete=function(t){this.reset(),this.parseChunk(t),this.done()},h.prototype.parseChunk=function(t){this._done&&this.handleError(new Error("Attempted to parse chunk after parsing already done")),this._buffer+=t,this.parseTags()},h.prototype.done=function(){if(!this._done){if(this._done=!0,this._buffer.length){var t=this._buffer;this._buffer="";var i={raw:t,data:this._parseState==s.Text?t:t.replace(h._reTrim,""),type:this._parseState};this._parseState!=s.Tag&&this._parseState!=s.Script&&this._parseState!=s.Style||(i.name=this.parseTagName(i.data)),this.parseAttribs(i),this._elements.push(i)}this.writeHandler(),this._handler.done()}},h.prototype.reset=function(){this._buffer="",this._done=!1,this._elements=[],this._elementsCurrent=0,this._current=0,this._next=0,this._location={row:0,col:0,charOffset:0,inBuffer:0},this._parseState=s.Text,this._prevTagSep="",this._tagStack=[],this._handler.reset()},h.prototype._options=null,h.prototype._handler=null,h.prototype._buffer=null,h.prototype._done=!1,h.prototype._elements=null,h.prototype._elementsCurrent=0,h.prototype._current=0,h.prototype._next=0,h.prototype._location=null,h.prototype._parseState=s.Text,h.prototype._prevTagSep="",h.prototype._tagStack=null,h.prototype.parseTagAttribs=function(t){for(var i=t.length,r=0;r<i;){var n=t[r++];n.type!=s.Tag&&n.type!=s.Script&&n.type!=s.style||this.parseAttribs(n)}return t},h.prototype.parseAttribs=function(t){if(t.type==s.Script||t.type==s.Style||t.type==s.Tag){var i,r=t.data.split(h._reWhitespace,1)[0],n=t.data.substring(r.length);if(!(n.length<1))for(h._reAttrib.lastIndex=0;i=h._reAttrib.exec(n);)null==t.attribs&&(t.attribs={}),"string"==typeof i[1]&&i[1].length?t.attribs[i[1]]=i[2]:"string"==typeof i[3]&&i[3].length?t.attribs[i[3].toString()]=i[4].toString():"string"==typeof i[5]&&i[5].length?t.attribs[i[5]]=i[6]:"string"==typeof i[7]&&i[7].length&&(t.attribs[i[7]]=i[7])}},h.prototype.parseTagName=function(t){if(null==t||""==t)return"";var i=h._reTagName.exec(t);return i?(i[1]?"/":"")+i[2]:""},h.prototype.parseTags=function(){for(var t=this._buffer.length-1;h._reTags.test(this._buffer);){this._next=h._reTags.lastIndex-1;var i=this._buffer.charAt(this._next),r=this._buffer.substring(this._current,this._next),n={raw:r,data:this._parseState==s.Text?r:r.replace(h._reTrim,""),type:this._parseState},a=this.parseTagName(n.data);if(this._tagStack.length)if(this._tagStack[this._tagStack.length-1]==s.Script){if("/script"==a.toLowerCase())this._tagStack.pop();else if(0!=n.raw.indexOf("!--"))if(n.type=s.Text,this._elements.length&&this._elements[this._elements.length-1].type==s.Text)(c=this._elements[this._elements.length-1]).raw=c.data=c.raw+this._prevTagSep+n.raw,n.raw=n.data=""}else if(this._tagStack[this._tagStack.length-1]==s.Style){if("/style"==a.toLowerCase())this._tagStack.pop();else if(0!=n.raw.indexOf("!--"))if(n.type=s.Text,this._elements.length&&this._elements[this._elements.length-1].type==s.Text){var c=this._elements[this._elements.length-1];""!=n.raw?(c.raw=c.data=c.raw+this._prevTagSep+n.raw,n.raw=n.data=""):c.raw=c.data=c.raw+this._prevTagSep}else""!=n.raw&&(n.raw=n.data=n.raw)}else if(this._tagStack[this._tagStack.length-1]==s.Comment){var o=n.raw.length;if("-"==n.raw.charAt(o-2)&&"-"==n.raw.charAt(o-1)&&">"==i)if(this._tagStack.pop(),this._elements.length&&this._elements[this._elements.length-1].type==s.Comment)(c=this._elements[this._elements.length-1]).raw=c.data=(c.raw+n.raw).replace(h._reTrimComment,""),n.raw=n.data="",n.type=s.Text;else n.type=s.Comment;else if(n.type=s.Comment,this._elements.length&&this._elements[this._elements.length-1].type==s.Comment)(c=this._elements[this._elements.length-1]).raw=c.data=c.raw+n.raw+i,n.raw=n.data="",n.type=s.Text;else n.raw=n.data=n.raw+i}if(n.type==s.Tag){n.name=a;var u=a.toLowerCase();if(0==n.raw.indexOf("!--")){n.type=s.Comment,delete n.name;o=n.raw.length;"-"==n.raw.charAt(o-1)&&"-"==n.raw.charAt(o-2)&&">"==i?n.raw=n.data=n.raw.replace(h._reTrimComment,""):(n.raw+=i,this._tagStack.push(s.Comment))}else 0==n.raw.indexOf("!")||0==n.raw.indexOf("?")?n.type=s.Directive:"script"==u?(n.type=s.Script,"/"!=n.data.charAt(n.data.length-1)&&this._tagStack.push(s.Script)):"/script"==u?n.type=s.Script:"style"==u?(n.type=s.Style,"/"!=n.data.charAt(n.data.length-1)&&this._tagStack.push(s.Style)):"/style"==u&&(n.type=s.Style);n.name&&"/"==n.name.charAt(0)&&(n.data=n.name)}""==n.raw&&n.type==s.Text||(this._options.includeLocation&&!n.location&&(n.location=this.getLocation(n.type==s.Tag)),this.parseAttribs(n),this._elements.push(n),n.type!=s.Text&&n.type!=s.Comment&&n.type!=s.Directive&&"/"==n.data.charAt(n.data.length-1)&&this._elements.push({raw:"/"+n.name,data:"/"+n.name,name:"/"+n.name,type:n.type})),this._parseState="<"==i?s.Tag:s.Text,this._current=this._next+1,this._prevTagSep=i}this._options.includeLocation&&(this.getLocation(),this._location.row+=this._location.inBuffer,this._location.inBuffer=0,this._location.charOffset=0),this._buffer=this._current<=t?this._buffer.substring(this._current):"",this._current=0,this.writeHandler()},h.prototype.getLocation=function(t){for(var i,r=this._location,n=this._current-(t?1:0),a=t&&0==r.charOffset&&0==this._current;r.charOffset<n;r.charOffset++)"\n"==(i=this._buffer.charAt(r.charOffset))?(r.inBuffer++,r.col=0):"\r"!=i&&r.col++;return{line:r.row+r.inBuffer+1,col:r.col+(a?0:1)}},h.prototype.validateHandler=function(t){if("object"!=typeof t)throw new Error("Handler is not an object");if("function"!=typeof t.reset)throw new Error("Handler method 'reset' is invalid");if("function"!=typeof t.done)throw new Error("Handler method 'done' is invalid");if("function"!=typeof t.writeTag)throw new Error("Handler method 'writeTag' is invalid");if("function"!=typeof t.writeText)throw new Error("Handler method 'writeText' is invalid");if("function"!=typeof t.writeComment)throw new Error("Handler method 'writeComment' is invalid");if("function"!=typeof t.writeDirective)throw new Error("Handler method 'writeDirective' is invalid")},h.prototype.writeHandler=function(t){if(t=!!t,!this._tagStack.length||t)for(;this._elements.length;){var i=this._elements.shift();switch(i.type){case s.Comment:this._handler.writeComment(i);break;case s.Directive:this._handler.writeDirective(i);break;case s.Text:this._handler.writeText(i);break;default:this._handler.writeTag(i)}}},h.prototype.handleError=function(t){if("function"!=typeof this._handler.error)throw t;this._handler.error(t)},r=c,(a=function(){}).prototype=(n=o).prototype,r.super_=n,r.prototype=new a,r.prototype.constructor=r,c.prototype.done=function(){var t,i={},r=u.getElementsByTagName(function(t){return"rss"==t||"feed"==t},this.dom,!1);if(r.length&&(t=r[0]),t){if("rss"==t.name){i.type="rss",t=t.children[0],i.id="";try{i.title=u.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(t){}try{i.link=u.getElementsByTagName("link",t.children,!1)[0].children[0].data}catch(t){}try{i.description=u.getElementsByTagName("description",t.children,!1)[0].children[0].data}catch(t){}try{i.updated=new Date(u.getElementsByTagName("lastBuildDate",t.children,!1)[0].children[0].data)}catch(t){}try{i.author=u.getElementsByTagName("managingEditor",t.children,!1)[0].children[0].data}catch(t){}i.items=[],u.getElementsByTagName("item",t.children).forEach(function(t,r,n){var a={};try{a.id=u.getElementsByTagName("guid",t.children,!1)[0].children[0].data}catch(t){}try{a.title=u.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(t){}try{a.link=u.getElementsByTagName("link",t.children,!1)[0].children[0].data}catch(t){}try{a.description=u.getElementsByTagName("description",t.children,!1)[0].children[0].data}catch(t){}try{a.pubDate=new Date(u.getElementsByTagName("pubDate",t.children,!1)[0].children[0].data)}catch(t){}i.items.push(a)})}else{i.type="atom";try{i.id=u.getElementsByTagName("id",t.children,!1)[0].children[0].data}catch(t){}try{i.title=u.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(t){}try{i.link=u.getElementsByTagName("link",t.children,!1)[0].attribs.href}catch(t){}try{i.description=u.getElementsByTagName("subtitle",t.children,!1)[0].children[0].data}catch(t){}try{i.updated=new Date(u.getElementsByTagName("updated",t.children,!1)[0].children[0].data)}catch(t){}try{i.author=u.getElementsByTagName("email",t.children,!0)[0].children[0].data}catch(t){}i.items=[],u.getElementsByTagName("entry",t.children).forEach(function(t,r,n){var a={};try{a.id=u.getElementsByTagName("id",t.children,!1)[0].children[0].data}catch(t){}try{a.title=u.getElementsByTagName("title",t.children,!1)[0].children[0].data}catch(t){}try{a.link=u.getElementsByTagName("link",t.children,!1)[0].attribs.href}catch(t){}try{a.description=u.getElementsByTagName("summary",t.children,!1)[0].children[0].data}catch(t){}try{a.pubDate=new Date(u.getElementsByTagName("updated",t.children,!1)[0].children[0].data)}catch(t){}i.items.push(a)})}this.dom=i}c.super_.prototype.done.call(this)},o._emptyTags={area:1,base:1,basefont:1,br:1,col:1,frame:1,hr:1,img:1,input:1,isindex:1,link:1,meta:1,param:1,embed:1},o.reWhitespace=/^\s*$/,o.prototype.dom=null,o.prototype.reset=function(){this.dom=[],this._done=!1,this._tagStack=[],this._tagStack.last=function(){return this.length?this[this.length-1]:null}},o.prototype.done=function(){this._done=!0,this.handleCallback(null)},o.prototype.writeTag=function(t){this.handleElement(t)},o.prototype.writeText=function(t){this._options.ignoreWhitespace&&o.reWhitespace.test(t.data)||this.handleElement(t)},o.prototype.writeComment=function(t){this.handleElement(t)},o.prototype.writeDirective=function(t){this.handleElement(t)},o.prototype.error=function(t){this.handleCallback(t)},o.prototype._options=null,o.prototype._callback=null,o.prototype._done=!1,o.prototype._tagStack=null,o.prototype.handleCallback=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},o.prototype.isEmptyTag=function(t){var i=t.name.toLowerCase();return"/"==i.charAt(0)&&(i=i.substring(1)),this._options.enforceEmptyTags&&!!o._emptyTags[i]},o.prototype.handleElement=function(t){if(this._done&&this.handleCallback(new Error("Writing to the handler after done() called is not allowed without a reset()")),this._options.verbose||(delete t.raw,"tag"!=t.type&&"script"!=t.type&&"style"!=t.type||delete t.data),this._tagStack.last())if(t.type!=s.Text&&t.type!=s.Comment&&t.type!=s.Directive)if("/"==t.name.charAt(0)){var i=t.name.substring(1);if(!this.isEmptyTag(t)){for(var r=this._tagStack.length-1;r>-1&&this._tagStack[r--].name!=i;);if(r>-1||this._tagStack[0].name==i)for(;r<this._tagStack.length-1;)this._tagStack.pop()}}else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(t),this.isEmptyTag(t)||this._tagStack.push(t);else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(t);else t.type!=s.Text&&t.type!=s.Comment&&t.type!=s.Directive?"/"!=t.name.charAt(0)&&(this.dom.push(t),this.isEmptyTag(t)||this._tagStack.push(t)):this.dom.push(t)};var u={testElement:function(t,i){if(!i)return!1;for(var r in t)if("tag_name"==r){if("tag"!=i.type&&"script"!=i.type&&"style"!=i.type)return!1;if(!t.tag_name(i.name))return!1}else if("tag_type"==r){if(!t.tag_type(i.type))return!1}else if("tag_contains"==r){if("text"!=i.type&&"comment"!=i.type&&"directive"!=i.type)return!1;if(!t.tag_contains(i.data))return!1}else if(!i.attribs||!t[r](i.attribs[r]))return!1;return!0},getElements:function(t,i,r,n){if(r=null==r||!!r,n=isNaN(parseInt(n))?-1:parseInt(n),!i)return[];var a,s=[];function h(t){return function(i){return i==t}}for(var c in t)"function"!=typeof t[c]&&(t[c]=h(t[c]));if(u.testElement(t,i)&&s.push(i),n>=0&&s.length>=n)return s;if(r&&i.children)a=i.children;else{if(!(i instanceof Array))return s;a=i}for(var o=0;o<a.length&&(s=s.concat(u.getElements(t,a[o],r,n)),!(n>=0&&s.length>=n));o++);return s},getElementById:function(t,i,r){var n=u.getElements({id:t},i,r,1);return n.length?n[0]:null},getElementsByTagName:function(t,i,r,n){return u.getElements({tag_name:t},i,r,n)},getElementsByTagType:function(t,i,r,n){return u.getElements({tag_type:t},i,r,n)}};i.Parser=h,i.DefaultHandler=o,i.RssHandler=c,i.ElementType=s,i.DomUtils=u}()}).call(this,"/")}]);