
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in g)g.hasOwnProperty(m)&&(k[m]=g[m]);var n=[],aa="./this.program";function v(a,b){throw b;}var ba=!1,y=!1,z=!1,ca=!1;ba="object"===typeof window;y="function"===typeof importScripts;z="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ca=!ba&&!z&&!y;var A="",da,ea,C,fa,ka;
if(z)A=y?require("path").dirname(A)+"/":__dirname+"/",da=function(a,b){fa||(fa=require("fs"));ka||(ka=require("path"));a=ka.normalize(a);return fa.readFileSync(a,b?null:"utf8")},C=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),n=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;}),process.on("unhandledRejection",
D),v=function(a){process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(ca)"undefined"!=typeof read&&(da=function(a){return read(a)}),C=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(v=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||y)y?A=self.location.href:"undefined"!==typeof document&&document.currentScript&&(A=document.currentScript.src),A=0!==A.indexOf("blob:")?A.substr(0,A.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},y&&(C=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ea=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),F=g.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(g[m]=k[m]);k=null;g.arguments&&(n=g.arguments);g.thisProgram&&(aa=g.thisProgram);g.quit&&(v=g.quit);var G;g.wasmBinary&&(G=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!1;
"object"!==typeof WebAssembly&&D("no native wasm support detected");var na,H=!1;function assert(a,b){a||D("Assertion failed: "+b)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function I(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function sa(a){return a?I(ta,a,void 0):""}
function ua(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var l=a.charCodeAt(f);if(55296<=l&&57343>=l){var q=a.charCodeAt(++f);l=65536+((l&1023)<<10)|q&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=xa(b);ua(a,J,c,b);return c}var ya,J,ta,za,K,Aa=[],Ga=[],Ha=[],Ia=[],Ja=[];function Ka(){var a=g.preRun.shift();Aa.unshift(a)}var L=0,La=null,Ma=null;g.preloadedImages={};g.preloadedAudios={};
function D(a){if(g.onAbort)g.onAbort(a);F(a);H=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Na(){return M.startsWith("data:application/octet-stream;base64,")}var M="webm-muxer.wasm";if(!Na()){var Oa=M;M=g.locateFile?g.locateFile(Oa,A):A+Oa}function Pa(){var a=M;try{if(a==M&&G)return new Uint8Array(G);if(C)return C(a);throw"both async and sync fetching of the wasm failed";}catch(b){D(b)}}
function Qa(){if(!G&&(ba||y)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Pa()});if(ea)return new Promise(function(a,b){ea(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Pa()})}var N,Ra;
function Sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.ka;"number"===typeof c?void 0===b.aa?Ta.call(null,c):Ua.apply(null,[c,b.aa]):c(void 0===b.aa?null:b.aa)}}}function Va(a){this.X=a-16;this.Ra=function(b){K[this.X+8>>2]=b};this.Oa=function(b){K[this.X+0>>2]=b};this.Pa=function(){K[this.X+4>>2]=0};this.Na=function(){J[this.X+12>>0]=0};this.Qa=function(){J[this.X+13>>0]=0};this.Ha=function(b,c){this.Ra(b);this.Oa(c);this.Pa();this.Na();this.Qa()}}var Wa=0;
function Xa(a,b){for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function Ya(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Xa(a.split("/").filter(function(d){return!!d}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function Za(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function $a(a){if("/"===a)return"/";a=Ya(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function ab(){if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(z)try{var b=require("crypto");return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){D("randomDevice")}}
function bb(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Xa(a.split("/").filter(function(d){return!!d}),!b).join("/");return(b?"/":"")+a||"."}var cb=[];function db(a,b){cb[a]={input:[],output:[],W:b};eb(a,fb)}
var fb={open:function(a){var b=cb[a.node.rdev];if(!b)throw new O(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.W.flush(a.tty)},flush:function(a){a.tty.W.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.W.xa)throw new O(60);for(var e=0,f=0;f<d;f++){try{var l=a.tty.W.xa(a.tty)}catch(q){throw new O(29);}if(void 0===l&&0===e)throw new O(6);if(null===l||void 0===l)break;e++;b[c+f]=l}e&&(a.node.timestamp=Date.now());return e},write:function(a,b,c,d){if(!a.tty||!a.tty.W.na)throw new O(60);try{for(var e=
0;e<d;e++)a.tty.W.na(a.tty,b[c+e])}catch(f){throw new O(29);}d&&(a.node.timestamp=Date.now());return e}},hb={xa:function(a){if(!a.input.length){var b=null;if(z){var c=Buffer.R?Buffer.R(256):new Buffer(256),d=0;try{d=fa.readSync(process.stdin.fd,c,0,256,null)}catch(e){if(e.toString().includes("EOF"))d=0;else throw e;}0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&
(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=gb(b,!0)}return a.input.shift()},na:function(a,b){null===b||10===b?(ma(I(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(ma(I(a.output,0)),a.output=[])}},ib={na:function(a,b){null===b||10===b?(F(I(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(F(I(a.output,0)),a.output=[])}},P={O:null,T:function(){return P.createNode(null,"/",16895,0)},createNode:function(a,
b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new O(63);P.O||(P.O={dir:{node:{U:P.K.U,P:P.K.P,lookup:P.K.lookup,ba:P.K.ba,rename:P.K.rename,unlink:P.K.unlink,rmdir:P.K.rmdir,readdir:P.K.readdir,symlink:P.K.symlink},stream:{V:P.L.V}},file:{node:{U:P.K.U,P:P.K.P},stream:{V:P.L.V,read:P.L.read,write:P.L.write,sa:P.L.sa,ya:P.L.ya,Aa:P.L.Aa}},link:{node:{U:P.K.U,P:P.K.P,readlink:P.K.readlink},stream:{}},ta:{node:{U:P.K.U,P:P.K.P},stream:jb}});c=kb(a,b,c,d);16384===(c.mode&61440)?(c.K=P.O.dir.node,
c.L=P.O.dir.stream,c.J={}):32768===(c.mode&61440)?(c.K=P.O.file.node,c.L=P.O.file.stream,c.M=0,c.J=null):40960===(c.mode&61440)?(c.K=P.O.link.node,c.L=P.O.link.stream):8192===(c.mode&61440)&&(c.K=P.O.ta.node,c.L=P.O.ta.stream);c.timestamp=Date.now();a&&(a.J[b]=c,a.timestamp=c.timestamp);return c},Ya:function(a){return a.J?a.J.subarray?a.J.subarray(0,a.M):new Uint8Array(a.J):new Uint8Array(0)},ua:function(a,b){var c=a.J?a.J.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,
256)),c=a.J,a.J=new Uint8Array(b),0<a.M&&a.J.set(c.subarray(0,a.M),0))},La:function(a,b){if(a.M!=b)if(0==b)a.J=null,a.M=0;else{var c=a.J;a.J=new Uint8Array(b);c&&a.J.set(c.subarray(0,Math.min(b,a.M)));a.M=b}},K:{U:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;16384===(a.mode&61440)?b.size=4096:32768===(a.mode&61440)?b.size=a.M:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);
b.ctime=new Date(a.timestamp);b.Ga=4096;b.blocks=Math.ceil(b.size/b.Ga);return b},P:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&P.La(a,b.size)},lookup:function(){throw lb[44];},ba:function(a,b,c,d){return P.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){try{var d=mb(b,c)}catch(f){}if(d)for(var e in d.J)throw new O(55);}delete a.parent.J[a.name];a.parent.timestamp=Date.now();a.name=c;b.J[c]=a;b.timestamp=a.parent.timestamp;
a.parent=b},unlink:function(a,b){delete a.J[b];a.timestamp=Date.now()},rmdir:function(a,b){var c=mb(a,b),d;for(d in c.J)throw new O(55);delete a.J[b];a.timestamp=Date.now()},readdir:function(a){var b=[".",".."],c;for(c in a.J)a.J.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=P.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new O(28);return a.link}},L:{read:function(a,b,c,d,e){var f=a.node.J;if(e>=a.node.M)return 0;a=Math.min(a.node.M-
e,d);if(8<a&&f.subarray)b.set(f.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=f[e+d];return a},write:function(a,b,c,d,e,f){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.J||a.J.subarray)){if(f)return a.J=b.subarray(c,c+d),a.M=d;if(0===a.M&&0===e)return a.J=b.slice(c,c+d),a.M=d;if(e+d<=a.M)return a.J.set(b.subarray(c,c+d),e),d}P.ua(a,e+d);if(a.J.subarray&&b.subarray)a.J.set(b.subarray(c,c+d),e);else for(f=0;f<d;f++)a.J[e+f]=b[c+f];a.M=Math.max(a.M,e+d);return d},V:function(a,b,
c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.M);if(0>b)throw new O(28);return b},sa:function(a,b,c){P.ua(a.node,b+c);a.node.M=Math.max(a.node.M,b+c)},ya:function(a,b,c,d,e,f){if(0!==b)throw new O(28);if(32768!==(a.node.mode&61440))throw new O(43);a=a.node.J;if(f&2||a.buffer!==ya){if(0<d||d+c<a.length)a.subarray?a=a.subarray(d,d+c):a=Array.prototype.slice.call(a,d,d+c);d=!0;f=16384*Math.ceil(c/16384);for(b=nb(f);c<f;)J[b+c++]=0;c=b;if(!c)throw new O(48);J.set(a,c)}else d=!1,
c=a.byteOffset;return{X:c,Xa:d}},Aa:function(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new O(43);if(e&2)return 0;P.L.write(a,b,0,d,c,!1);return 0}}},ob=null,pb={},Q=[],qb=1,rb=null,sb=!0,tb={},O=null,lb={};
function S(a,b){a=bb("/",a);b=b||{};if(!a)return{path:"",node:null};var c={wa:!0,oa:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.oa)throw new O(32);a=Xa(a.split("/").filter(function(l){return!!l}),!1);var e=ob;c="/";for(d=0;d<a.length;d++){var f=d===a.length-1;if(f&&b.parent)break;e=mb(e,a[d]);c=Ya(c+"/"+a[d]);e.da&&(!f||f&&b.wa)&&(e=e.da.root);if(!f||b.va)for(f=0;40960===(e.mode&61440);)if(e=ub(c),c=bb(Za(c),e),e=S(c,{oa:b.oa}).node,40<f++)throw new O(32);}return{path:c,node:e}}
function vb(a){for(var b;;){if(a===a.parent)return a=a.T.za,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function wb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%rb.length}function mb(a,b){var c;if(c=(c=xb(a,"x"))?c:a.K.lookup?0:2)throw new O(c,a);for(c=rb[wb(a.id,b)];c;c=c.Ka){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.K.lookup(a,b)}
function kb(a,b,c,d){a=new yb(a,b,c,d);b=wb(a.parent.id,a.name);a.Ka=rb[b];return rb[b]=a}var zb={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090};function Ab(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function xb(a,b){if(sb)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function Bb(a,b){try{return mb(a,b),20}catch(c){}return xb(a,"wx")}
function Cb(a){var b=4096;for(a=a||0;a<=b;a++)if(!Q[a])return a;throw new O(33);}function Db(a,b){Eb||(Eb=function(){},Eb.prototype={});var c=new Eb,d;for(d in a)c[d]=a[d];a=c;b=Cb(b);a.fd=b;return Q[b]=a}var jb={open:function(a){a.L=pb[a.node.rdev].L;a.L.open&&a.L.open(a)},V:function(){throw new O(70);}};function eb(a,b){pb[a]={L:b}}
function Fb(a,b){var c="/"===b,d=!b;if(c&&ob)throw new O(10);if(!c&&!d){var e=S(b,{wa:!1});b=e.path;e=e.node;if(e.da)throw new O(10);if(16384!==(e.mode&61440))throw new O(54);}b={type:a,Za:{},za:b,Ja:[]};a=a.T(b);a.T=b;b.root=a;c?ob=a:e&&(e.da=b,e.T&&e.T.Ja.push(b))}function Gb(a,b,c){var d=S(a,{parent:!0}).node;a=$a(a);if(!a||"."===a||".."===a)throw new O(28);var e=Bb(d,a);if(e)throw new O(e);if(!d.K.ba)throw new O(63);return d.K.ba(d,a,b,c)}function T(a){return Gb(a,16895,0)}
function Hb(a,b,c){"undefined"===typeof c&&(c=b,b=438);Gb(a,b|8192,c)}function Ib(a,b){if(!bb(a))throw new O(44);var c=S(b,{parent:!0}).node;if(!c)throw new O(44);b=$a(b);var d=Bb(c,b);if(d)throw new O(d);if(!c.K.symlink)throw new O(63);c.K.symlink(c,b,a)}function ub(a){a=S(a).node;if(!a)throw new O(44);if(!a.K.readlink)throw new O(28);return bb(vb(a.parent),a.K.readlink(a))}
function Jb(a,b,c,d){if(""===a)throw new O(44);if("string"===typeof b){var e=zb[b];if("undefined"===typeof e)throw Error("Unknown file open mode: "+b);b=e}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var f=a;else{a=Ya(a);try{f=S(a,{va:!(b&131072)}).node}catch(l){}}e=!1;if(b&64)if(f){if(b&128)throw new O(20);}else f=Gb(a,c,0),e=!0;if(!f)throw new O(44);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&16384!==(f.mode&61440))throw new O(54);if(!e&&(c=f?40960===(f.mode&61440)?
32:16384===(f.mode&61440)&&("r"!==Ab(b)||b&512)?31:xb(f,Ab(b)):44))throw new O(c);if(b&512){c=f;c="string"===typeof c?S(c,{va:!0}).node:c;if(!c.K.P)throw new O(63);if(16384===(c.mode&61440))throw new O(31);if(32768!==(c.mode&61440))throw new O(28);if(e=xb(c,"w"))throw new O(e);c.K.P(c,{size:0,timestamp:Date.now()})}b&=-131713;d=Db({node:f,path:vb(f),flags:b,seekable:!0,position:0,L:f.L,Wa:[],error:!1},d);d.L.open&&d.L.open(d);!g.logReadFiles||b&1||(Kb||(Kb={}),a in Kb||(Kb[a]=1,F("FS.trackingDelegate error on read file: "+
a)));try{tb.onOpenFile&&(f=0,1!==(b&2097155)&&(f|=1),0!==(b&2097155)&&(f|=2),tb.onOpenFile(a,f))}catch(l){F("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+l.message)}return d}function Lb(a){if(null===a.fd)throw new O(8);a.la&&(a.la=null);try{a.L.close&&a.L.close(a)}catch(b){throw b;}finally{Q[a.fd]=null}a.fd=null}function Mb(a,b,c){if(null===a.fd)throw new O(8);if(!a.seekable||!a.L.V)throw new O(70);if(0!=c&&1!=c&&2!=c)throw new O(28);a.position=a.L.V(a,b,c);a.Wa=[]}
function Nb(){O||(O=function(a,b){this.node=b;this.Ma=function(c){this.S=c};this.Ma(a);this.message="FS error"},O.prototype=Error(),O.prototype.constructor=O,[44].forEach(function(a){lb[a]=new O(a);lb[a].stack="<generic error, no stack>"}))}var Ob;function Qb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Rb(a,b,c){a=Ya("/dev/"+a);var d=Qb(!!b,!!c);Sb||(Sb=64);var e=Sb++<<8|0;eb(e,{open:function(f){f.seekable=!1},close:function(){c&&c.buffer&&c.buffer.length&&c(10)},read:function(f,l,q,w){for(var t=0,r=0;r<w;r++){try{var x=b()}catch(E){throw new O(29);}if(void 0===x&&0===t)throw new O(6);if(null===x||void 0===x)break;t++;l[q+r]=x}t&&(f.node.timestamp=Date.now());return t},write:function(f,l,q,w){for(var t=0;t<w;t++)try{c(l[q+t])}catch(r){throw new O(29);}w&&(f.node.timestamp=Date.now());return t}});
Hb(a,d,e)}var Sb,U={},Eb,Kb,Tb=void 0;function V(){Tb+=4;return K[Tb-4>>2]}function W(a){a=Q[a];if(!a)throw new O(8);return a}var Ub={};function Vb(){if(!Wb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa||"./this.program"},b;for(b in Ub)a[b]=Ub[b];var c=[];for(b in a)c.push(b+"="+a[b]);Wb=c}return Wb}var Wb;
function Xb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Yb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Zb=[31,29,31,30,31,30,31,31,30,31,30,31],$b=[31,28,31,30,31,30,31,31,30,31,30,31];function ac(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Xb(a.getFullYear())?Zb:$b)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function bc(a,b,c,d){function e(h,p,u){for(h="number"===typeof h?h.toString():h||"";h.length<p;)h=u[0]+h;return h}function f(h,p){return e(h,p,"0")}function l(h,p){function u(Pb){return 0>Pb?-1:0<Pb?1:0}var B;0===(B=u(h.getFullYear()-p.getFullYear()))&&0===(B=u(h.getMonth()-p.getMonth()))&&(B=u(h.getDate()-p.getDate()));return B}function q(h){switch(h.getDay()){case 0:return new Date(h.getFullYear()-1,11,29);case 1:return h;case 2:return new Date(h.getFullYear(),0,3);case 3:return new Date(h.getFullYear(),
0,2);case 4:return new Date(h.getFullYear(),0,1);case 5:return new Date(h.getFullYear()-1,11,31);case 6:return new Date(h.getFullYear()-1,11,30)}}function w(h){h=ac(new Date(h.N+1900,0,1),h.ga);var p=new Date(h.getFullYear()+1,0,4),u=q(new Date(h.getFullYear(),0,4));p=q(p);return 0>=l(u,h)?0>=l(p,h)?h.getFullYear()+1:h.getFullYear():h.getFullYear()-1}var t=K[d+40>>2];d={Ua:K[d>>2],Ta:K[d+4>>2],ea:K[d+8>>2],Z:K[d+12>>2],Y:K[d+16>>2],N:K[d+20>>2],fa:K[d+24>>2],ga:K[d+28>>2],$a:K[d+32>>2],Sa:K[d+36>>
2],Va:t?sa(t):""};c=sa(c);t={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in t)c=c.replace(new RegExp(r,"g"),t[r]);var x="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
E="January February March April May June July August September October November December".split(" ");t={"%a":function(h){return x[h.fa].substring(0,3)},"%A":function(h){return x[h.fa]},"%b":function(h){return E[h.Y].substring(0,3)},"%B":function(h){return E[h.Y]},"%C":function(h){return f((h.N+1900)/100|0,2)},"%d":function(h){return f(h.Z,2)},"%e":function(h){return e(h.Z,2," ")},"%g":function(h){return w(h).toString().substring(2)},"%G":function(h){return w(h)},"%H":function(h){return f(h.ea,2)},
"%I":function(h){h=h.ea;0==h?h=12:12<h&&(h-=12);return f(h,2)},"%j":function(h){return f(h.Z+Yb(Xb(h.N+1900)?Zb:$b,h.Y-1),3)},"%m":function(h){return f(h.Y+1,2)},"%M":function(h){return f(h.Ta,2)},"%n":function(){return"\n"},"%p":function(h){return 0<=h.ea&&12>h.ea?"AM":"PM"},"%S":function(h){return f(h.Ua,2)},"%t":function(){return"\t"},"%u":function(h){return h.fa||7},"%U":function(h){var p=new Date(h.N+1900,0,1),u=0===p.getDay()?p:ac(p,7-p.getDay());h=new Date(h.N+1900,h.Y,h.Z);return 0>l(u,h)?
f(Math.ceil((31-u.getDate()+(Yb(Xb(h.getFullYear())?Zb:$b,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(u,p)?"01":"00"},"%V":function(h){var p=new Date(h.N+1901,0,4),u=q(new Date(h.N+1900,0,4));p=q(p);var B=ac(new Date(h.N+1900,0,1),h.ga);return 0>l(B,u)?"53":0>=l(p,B)?"01":f(Math.ceil((u.getFullYear()<h.N+1900?h.ga+32-u.getDate():h.ga+1-u.getDate())/7),2)},"%w":function(h){return h.fa},"%W":function(h){var p=new Date(h.N,0,1),u=1===p.getDay()?p:ac(p,0===p.getDay()?1:7-p.getDay()+1);h=new Date(h.N+
1900,h.Y,h.Z);return 0>l(u,h)?f(Math.ceil((31-u.getDate()+(Yb(Xb(h.getFullYear())?Zb:$b,h.getMonth()-1)-31)+h.getDate())/7),2):0===l(u,p)?"01":"00"},"%y":function(h){return(h.N+1900).toString().substring(2)},"%Y":function(h){return h.N+1900},"%z":function(h){h=h.Sa;var p=0<=h;h=Math.abs(h)/60;return(p?"+":"-")+String("0000"+(h/60*100+h%60)).slice(-4)},"%Z":function(h){return h.Va},"%%":function(){return"%"}};for(r in t)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),t[r](d)));r=gb(c,!1);if(r.length>
b)return 0;J.set(r,a);return r.length-1}function cc(a){try{a()}catch(b){D(b)}}var X=0,Y=null,dc=0,ec=[],fc={},hc={},ic=0,jc=null,kc=[],lc=[];function mc(a){var b={},c;for(c in a)(function(d){var e=a[d];b[d]="function"===typeof e?function(){ec.push(d);try{return e.apply(null,arguments)}finally{if(H)return;var f=ec.pop();assert(f===d);Y&&1===X&&0===ec.length&&(X=0,cc(g._asyncify_stop_unwind),"undefined"!==typeof Fibers&&Fibers.ab(),jc&&(jc(),jc=null))}}:e})(c);return b}
function nc(){var a=nb(4108),b=a+12;K[a>>2]=b;K[a+4>>2]=b+4096;b=ec[0];var c=fc[b];void 0===c&&(c=ic++,fc[b]=c,hc[c]=b);K[a+8>>2]=c;return a}
function oc(a){if(!H){noExitRuntime=!0;if(0===X){var b=!1,c=!1;a(function(d){if(!H&&(dc=d||0,b=!0,c)){X=2;cc(function(){g._asyncify_start_rewind(Y)});"undefined"!==typeof Z&&Z.ma.ka&&Z.ma.resume();var e=(0,g.asm[hc[K[Y+8>>2]]])();Y||(d=kc,kc=[],d.forEach(function(f){f(e)}))}});c=!0;b||(X=1,Y=nc(),cc(function(){g._asyncify_start_unwind(Y)}),"undefined"!==typeof Z&&Z.ma.ka&&Z.ma.pause())}else 2===X?(X=0,cc(g._asyncify_stop_rewind),pc(Y),Y=null,lc.forEach(function(d){d()})):D("invalid state: "+X);return dc}}
function yb(a,b,c,d){a||(a=this);this.parent=a;this.T=a.T;this.da=null;this.id=qb++;this.name=b;this.mode=c;this.K={};this.L={};this.rdev=d}Object.defineProperties(yb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});Nb();rb=Array(4096);Fb(P,"/");T("/tmp");T("/home");T("/home/web_user");
(function(){T("/dev");eb(259,{read:function(){return 0},write:function(b,c,d,e){return e}});Hb("/dev/null",259);db(1280,hb);db(1536,ib);Hb("/dev/tty",1280);Hb("/dev/tty1",1536);var a=ab();Rb("random",a);Rb("urandom",a);T("/dev/shm");T("/dev/shm/tmp")})();
(function(){T("/proc");var a=T("/proc/self");T("/proc/self/fd");Fb({T:function(){var b=kb(a,"fd",16895,73);b.K={lookup:function(c,d){var e=Q[+d];if(!e)throw new O(8);c={parent:null,T:{za:"fake"},K:{readlink:function(){return e.path}}};return c.parent=c}};return b}},"/proc/self/fd")})();var Z;function gb(a,b){var c=Array(va(a)+1);a=ua(a,c,0,c.length);b&&(c.length=a);return c}
var rc={k:function(a){return nb(a+16)+16},a:function(a,b){Ia.unshift({ka:a,aa:b})},j:function(a,b,c){(new Va(a)).Ha(b,c);Wa++;throw a;},c:function(a,b,c){Tb=c;try{var d=W(a);switch(b){case 0:var e=V();return 0>e?-28:Jb(d.path,d.flags,0,e).fd;case 1:case 2:return 0;case 3:return d.flags;case 4:return e=V(),d.flags|=e,0;case 12:return e=V(),za[e+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return K[qc()>>2]=28,-1;default:return-28}}catch(f){return"undefined"!==typeof U&&f instanceof
O||D(f),-f.S}},h:function(a,b,c){Tb=c;try{var d=W(a);switch(b){case 21509:case 21505:return d.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return d.tty?0:-59;case 21519:if(!d.tty)return-59;var e=V();return K[e>>2]=0;case 21520:return d.tty?-28:-59;case 21531:a=e=V();if(!d.L.Ia)throw new O(59);return d.L.Ia(d,b,a);case 21523:return d.tty?0:-59;case 21524:return d.tty?0:-59;default:D("bad ioctl syscall "+b)}}catch(f){return"undefined"!==typeof U&&f instanceof O||D(f),
-f.S}},i:function(a,b,c){Tb=c;try{var d=sa(a),e=c?V():0;return Jb(d,b,e).fd}catch(f){return"undefined"!==typeof U&&f instanceof O||D(f),-f.S}},d:function(){D()},n:function(a){self.Fa=!0;self.Ea=a;self.qa();return a},o:function(a,b,c){ta.copyWithin(a,b,b+c)},b:function(a,b){self.Da||(self.ia=[],self.$=null,self.ha=null,self.ja=null,self.ra=function(){if(0<self.ia.length){var c=self.ia.shift();let d=-1;c.length<=self.ja&&(d=c.length,ta.set(c,self.ha));c=self.$;self.$=null;self.ha=null;self.ja=null;
c(d)}},self.qa=function(){!self.Fa||self.R&&!self.Ca||self.postMessage({type:"exit",code:self.Ba||self.Ea})},self.onmessage=function(c){const d=c.data;switch(d.type){case "start":d.webm_destination?(self.R=new Worker(d.webm_destination),delete d.webm_destination,self.R.onmessage=function(e){e=e.data;switch(e.type){case "ready":self.R.postMessage(d);break;case "exit":self.Ca=!0;self.Ba=e.code;self.R.terminate();self.qa();break;default:self.postMessage(e,e.transfer)}},self.pa=self.R):(self.postMessage({type:"start-stream"}),
self.pa=self);break;case "end":self.R&&self.R.postMessage(d);case "stream-data":self.ia.push(new Uint8Array(d.data)),self.$&&self.ra()}},self.postMessage({type:"ready"}),self.Da=!0);return oc(c=>{if(0>=b)return c(0);self.$=c;self.ha=a;self.ja=b;self.ra()})},p:function(){D("OOM")},t:function(a,b){a=ta.slice(a,a+b).buffer;self.pa.postMessage({type:"muxed-data",data:a},[a]);return b},r:function(a,b){try{var c=0;Vb().forEach(function(d,e){var f=b+c;e=K[a+4*e>>2]=f;for(f=0;f<d.length;++f)J[e++>>0]=d.charCodeAt(f);
J[e>>0]=0;c+=d.length+1});return 0}catch(d){return"undefined"!==typeof U&&d instanceof O||D(d),d.S}},s:function(a,b){try{var c=Vb();K[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});K[b>>2]=d;return 0}catch(e){return"undefined"!==typeof U&&e instanceof O||D(e),e.S}},f:function(a){try{var b=W(a);Lb(b);return 0}catch(c){return"undefined"!==typeof U&&c instanceof O||D(c),c.S}},g:function(a,b,c,d){try{a:{for(var e=W(a),f=a=0;f<c;f++){var l=K[b+(8*f+4)>>2],q=e,w=K[b+8*f>>2],t=l,r=void 0,x=
J;if(0>t||0>r)throw new O(28);if(null===q.fd)throw new O(8);if(1===(q.flags&2097155))throw new O(8);if(16384===(q.node.mode&61440))throw new O(31);if(!q.L.read)throw new O(28);var E="undefined"!==typeof r;if(!E)r=q.position;else if(!q.seekable)throw new O(70);var h=q.L.read(q,x,w,t,r);E||(q.position+=h);var p=h;if(0>p){var u=-1;break a}a+=p;if(p<l)break}u=a}K[d>>2]=u;return 0}catch(B){return"undefined"!==typeof U&&B instanceof O||D(B),B.S}},m:function(a,b,c,d,e){try{var f=W(a);a=4294967296*c+(b>>>
0);if(-9007199254740992>=a||9007199254740992<=a)return-61;Mb(f,a,d);Ra=[f.position>>>0,(N=f.position,1<=+Math.abs(N)?0<N?(Math.min(+Math.floor(N/4294967296),4294967295)|0)>>>0:~~+Math.ceil((N-+(~~N>>>0))/4294967296)>>>0:0)];K[e>>2]=Ra[0];K[e+4>>2]=Ra[1];f.la&&0===a&&0===d&&(f.la=null);return 0}catch(l){return"undefined"!==typeof U&&l instanceof O||D(l),l.S}},e:function(a,b,c,d){try{a:{for(var e=W(a),f=a=0;f<c;f++){var l=e,q=K[b+8*f>>2],w=K[b+(8*f+4)>>2],t=void 0,r=J;if(0>w||0>t)throw new O(28);if(null===
l.fd)throw new O(8);if(0===(l.flags&2097155))throw new O(8);if(16384===(l.node.mode&61440))throw new O(31);if(!l.L.write)throw new O(28);l.seekable&&l.flags&1024&&Mb(l,0,2);var x="undefined"!==typeof t;if(!x)t=l.position;else if(!l.seekable)throw new O(70);var E=l.L.write(l,r,q,w,t,void 0);x||(l.position+=E);try{if(l.path&&tb.onWriteToFile)tb.onWriteToFile(l.path)}catch(u){F("FS.trackingDelegate['onWriteToFile']('"+l.path+"') threw an exception: "+u.message)}var h=E;if(0>h){var p=-1;break a}a+=h}p=
a}K[d>>2]=p;return 0}catch(u){return"undefined"!==typeof U&&u instanceof O||D(u),u.S}},q:function(a,b,c,d){return bc(a,b,c,d)},l:function(a){var b=Date.now()/1E3|0;a&&(K[a>>2]=b);return b}};
(function(){function a(f){f=f.exports;f=mc(f);g.asm=f;na=g.asm.u;ya=f=na.buffer;g.HEAP8=J=new Int8Array(f);g.HEAP16=za=new Int16Array(f);g.HEAP32=K=new Int32Array(f);g.HEAPU8=ta=new Uint8Array(f);g.HEAPU16=new Uint16Array(f);g.HEAPU32=new Uint32Array(f);g.HEAPF32=new Float32Array(f);g.HEAPF64=new Float64Array(f);Ga.unshift(g.asm.v);L--;g.monitorRunDependencies&&g.monitorRunDependencies(L);0==L&&(null!==La&&(clearInterval(La),La=null),Ma&&(f=Ma,Ma=null,f()))}function b(f){a(f.instance)}function c(f){return Qa().then(function(l){return WebAssembly.instantiate(l,
d)}).then(f,function(l){F("failed to asynchronously prepare wasm: "+l);D(l)})}var d={a:rc};L++;g.monitorRunDependencies&&g.monitorRunDependencies(L);if(g.instantiateWasm)try{var e=g.instantiateWasm(d,a);return e=mc(e)}catch(f){return F("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return G||"function"!==typeof WebAssembly.instantiateStreaming||Na()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(l){F("wasm streaming compile failed: "+l);F("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.v).apply(null,arguments)};g._main=function(){return(g._main=g.asm.w).apply(null,arguments)};var qc=g.___errno_location=function(){return(qc=g.___errno_location=g.asm.y).apply(null,arguments)};g._fflush=function(){return(g._fflush=g.asm.z).apply(null,arguments)};
var pc=g._free=function(){return(pc=g._free=g.asm.A).apply(null,arguments)},nb=g._malloc=function(){return(nb=g._malloc=g.asm.B).apply(null,arguments)},xa=g.stackAlloc=function(){return(xa=g.stackAlloc=g.asm.C).apply(null,arguments)},Ua=g.dynCall_vi=function(){return(Ua=g.dynCall_vi=g.asm.D).apply(null,arguments)},Ta=g.dynCall_v=function(){return(Ta=g.dynCall_v=g.asm.E).apply(null,arguments)};g._asyncify_start_unwind=function(){return(g._asyncify_start_unwind=g.asm.F).apply(null,arguments)};
g._asyncify_stop_unwind=function(){return(g._asyncify_stop_unwind=g.asm.G).apply(null,arguments)};g._asyncify_start_rewind=function(){return(g._asyncify_start_rewind=g.asm.H).apply(null,arguments)};g._asyncify_stop_rewind=function(){return(g._asyncify_stop_rewind=g.asm.I).apply(null,arguments)};var sc;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ma=function tc(){sc||uc();sc||(Ma=tc)};
function uc(a){function b(){if(!sc&&(sc=!0,g.calledRun=!0,!H)){g.noFSInit||Ob||(Ob=!0,Nb(),g.stdin=g.stdin,g.stdout=g.stdout,g.stderr=g.stderr,g.stdin?Rb("stdin",g.stdin):Ib("/dev/tty","/dev/stdin"),g.stdout?Rb("stdout",null,g.stdout):Ib("/dev/tty","/dev/stdout"),g.stderr?Rb("stderr",null,g.stderr):Ib("/dev/tty1","/dev/stderr"),Jb("/dev/stdin",0),Jb("/dev/stdout",1),Jb("/dev/stderr",1));Sa(Ga);sb=!1;Sa(Ha);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(vc){var c=a,d=g._main;c=c||[];var e=c.length+
1,f=xa(4*(e+1));K[f>>2]=wa(aa);for(var l=1;l<e;l++)K[(f>>2)+l]=wa(c[l-1]);K[(f>>2)+e]=0;try{var q=d(e,f);if(!(noExitRuntime||noExitRuntime&&0===q)){if(!noExitRuntime){Sa(Ia);Ob=!1;var w=g._fflush;w&&w(0);for(c=0;c<Q.length;c++){var t=Q[c];t&&Lb(t)}if(g.onExit)g.onExit(q);H=!0}v(q,new la(q))}}catch(r){r instanceof la||"unwind"==r||((q=r)&&"object"===typeof r&&r.stack&&(q=[r,r.stack]),F("exception thrown: "+q),v(1,r))}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)q=
g.postRun.shift(),Ja.unshift(q);Sa(Ja)}}a=a||n;if(!(0<L)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ka();Sa(Aa);0<L||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=uc;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var vc=!0;g.noInitialRun&&(vc=!1);uc();
