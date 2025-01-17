function createUnityInstance(r,t,l){function d(e,r){if(!d.aborted&&t.showBanner)return"error"==r&&(d.aborted=!0),t.showBanner(e,r);switch(r){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function n(e){var r=e.reason||e.error,t=r?r.toString():e.message||e.reason||"",n=r&&r.stack?r.stack.toString():"";(t+="\n"+(n=n.startsWith(t)?n.substring(t.length):n).trim())&&g.stackTraceRegExp&&g.stackTraceRegExp.test(t)&&f(t,e.filename||r&&(r.fileName||r.sourceURL)||"",e.lineno||r&&(r.lineNumber||r.line)||0)}function e(e,r,t){var n=e[r];void 0!==n&&n||(console.warn('Config option "'+r+'" is missing or empty. Falling back to default value: "'+t+'". Consider updating your WebGL template to include the missing config option.'),e[r]=t)}l=l||function(){};var o,g={canvas:r,webglContextAttributes:{preserveDrawingBuffer:!1,powerPreference:2},wasmFileSize:44190844,streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,r){e=window.setInterval(e,r);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?d('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+g.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):d('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+g.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(o in e(t,"companyName","Unity"),e(t,"productName","WebGL Player"),e(t,"productVersion","1.0"),t)g[o]=t[o];g.streamingAssetsUrl=new URL(g.streamingAssetsUrl,document.URL).href;var i=g.disabledCanvasEvents.slice();function a(e){e.preventDefault()}i.forEach(function(e){r.addEventListener(e,a)}),window.addEventListener("error",n),window.addEventListener("unhandledrejection",n);var s="",u="";function c(e){document.webkitCurrentFullScreenElement===r?r.style.width&&(s=r.style.width,u=r.style.height,r.style.width="100%",r.style.height="100%"):s&&(r.style.width=s,r.style.height=u,u=s="")}document.addEventListener("webkitfullscreenchange",c),g.deinitializers.push(function(){for(var e in g.disableAccessToMediaDevices(),i.forEach(function(e){r.removeEventListener(e,a)}),window.removeEventListener("error",n),window.removeEventListener("unhandledrejection",n),document.removeEventListener("webkitfullscreenchange",c),g.intervals)window.clearInterval(e);g.intervals={}}),g.QuitCleanup=function(){for(var e=0;e<g.deinitializers.length;e++)g.deinitializers[e]();g.deinitializers=[],"function"==typeof g.onQuit&&g.onQuit()};var h={Module:g,SetFullscreen:function(){if(g.SetFullscreen)return g.SetFullscreen.apply(g,arguments);g.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){if(g.SendMessage)return g.SendMessage.apply(g,arguments);g.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,r){g.shouldQuit=!0,g.onQuit=e})},GetMetricsInfo:function(){var e=Number(g._getMetricsInfo())>>>0,r=4+e,t=4+r,n=8+t,o=8+n,i=4+o,a=4+i,s=8+a,l=8+s,d=4+l,u=4+d,c=4+u;return{totalWASMHeapSize:g.HEAPU32[e>>2],usedWASMHeapSize:g.HEAPU32[r>>2],totalJSHeapSize:g.HEAPF64[t>>3],usedJSHeapSize:g.HEAPF64[n>>3],pageLoadTime:g.HEAPU32[o>>2],pageLoadTimeToFrame1:g.HEAPU32[i>>2],fps:g.HEAPF64[a>>3],movingAverageFps:g.HEAPF64[s>>3],assetLoadTime:g.HEAPU32[l>>2],webAssemblyStartupTime:g.HEAPU32[d>>2]-(g.webAssemblyTimeStart||0),codeDownloadTime:g.HEAPU32[u>>2],gameStartupTime:g.HEAPU32[c>>2],numJankedFrames:g.HEAPU32[4+c>>2]}}};function f(e,r,t){-1==e.indexOf("fullscreen error")&&(g.startupErrorHandler?g.startupErrorHandler(e,r,t):g.errorHandler&&g.errorHandler(e,r,t)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),f.didShowErrorMessage||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),f.didShowErrorMessage=!0)))}function m(e,r){if("symbolsUrl"!=e){var t=g.downloadProgress[e],n=(t=t||(g.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof r||"progress"!=r.type&&"load"!=r.type||(t.started||(t.started=!0,t.lengthComputable=r.lengthComputable),t.total=r.total,t.loaded=r.loaded,"load"==r.type&&(t.finished=!0)),0),o=0,i=0,a=0,s=0;for(e in g.downloadProgress){if(!(t=g.downloadProgress[e]).started)return;i++,t.lengthComputable?(n+=t.loaded,o+=t.total,a++):t.finished||s++}l(.9*(i?(i-s-(o?a*(o-n)/o:0))/i:0))}}g.SystemInfo=function(){var e,r,t,n,o,i=navigator.userAgent+" ",a=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]];function s(e,r,t){return(e=RegExp(e,"i").exec(r))&&e[t]}for(var l=0;l<a.length;++l)if(r=s(a[l][0]+"[/ ](.*?)[ \\)]",i,1)){e=a[l][1];break}"Safari"==e&&(r=s("Version/(.*?) ",i,1)),"Internet Explorer"==e&&(r=s("rv:(.*?)\\)? ",i,1)||r);for(var d=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_\\.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],u=0;u<d.length;++u)if(n=s(d[u][0],i,1)){t=d[u][1],n=n.replace(/_/g,".");break}var c;function h(){try{return window.WebAssembly?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,13,1,11,0,65,0,65,0,65,1,252,11,0,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,11,1,9,1,1,125,32,0,252,0,26,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,10,1,8,1,1,126,32,0,194,26,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))?!!WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,10,1,8,0,6,64,1,25,1,11,11]))||"wasm-exceptions":"wasm-simd128":"sign-extend":"non-trapping fp-to-int":"bulk-memory":"WebAssembly"}catch(e){return"Exception: "+e}}n={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[n]||n,webgpuVersion=0,(f=document.createElement("canvas"))&&(c=(p=f.getContext("webgl2"))?2:0,p||(p=f&&f.getContext("webgl"))&&(c=1),p&&(o=p.getExtension("WEBGL_debug_renderer_info")&&p.getParameter(37446)||p.getParameter(7937)));var f="undefined"!=typeof SharedArrayBuffer,p="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile,g=p&&!0===h();return{width:screen.width,height:screen.height,userAgent:i.trim(),browser:e||"Unknown browser",browserVersion:r||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:t||"Unknown OS",osVersion:n||"Unknown OS Version",gpu:o||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:c,hasWebGPU:webgpuVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:f,hasWasm:p,hasWasm2023:g,missingWasm2023Feature:g?null:h(),hasWasmThreads:!1}}(),g.abortHandler=function(e){return f(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),g.readBodyWithProgress=function(i,a,s){var e=i.body?i.body.getReader():void 0,l=void 0!==i.headers.get("Content-Length"),d=function(e,r){if(!r)return 0;var r=e.headers.get("Content-Encoding"),t=parseInt(e.headers.get("Content-Length"));switch(r){case"br":return Math.round(5*t);case"gzip":return Math.round(4*t);default:return t}}(i,l),u=new Uint8Array(d),c=[],h=0,f=0;return l||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function o(){return void 0===e?i.arrayBuffer().then(function(e){var r=new Uint8Array(e);return a({type:"progress",response:i,total:e.length,loaded:0,lengthComputable:l,chunk:s?r:null}),r}):e.read().then(function(e){if(e.done){if(h===d)return u;if(h<d)return u.slice(0,h);for(var r=new Uint8Array(h),t=(r.set(u,0),f),n=0;n<c.length;++n)r.set(c[n],t),t+=c[n].length;return r}return h+e.value.length<=u.length?(u.set(e.value,h),f=h+e.value.length):c.push(e.value),h+=e.value.length,a({type:"progress",response:i,total:Math.max(d,h),loaded:h,lengthComputable:l,chunk:s?e.value:null}),o()})}().then(function(e){return a({type:"load",response:i,total:e.length,loaded:e.length,lengthComputable:l,chunk:null}),i.parsedBody=e,i})},g.fetchWithProgress=function(e,r){var t=function(){};return r&&r.onProgress&&(t=r.onProgress),fetch(e,r).then(function(e){return g.readBodyWithProgress(e,t,r.enableStreamingDownload)})};var b={gzip:{hasUnityMarker:function(e){var r=10,t="UnityWeb Compressed Content (gzip)";if(r>e.length||31!=e[0]||139!=e[1])return!1;var n=e[3];if(4&n){if(r+2>e.length)return!1;if((r+=2+e[r]+(e[r+1]<<8))>e.length)return!1}if(8&n){for(;r<e.length&&e[r];)r++;if(r+1>e.length)return!1;r++}return 16&n&&String.fromCharCode.apply(null,e.subarray(r,r+t.length+1))==t+"\0"}},br:{hasUnityMarker:function(e){var r="UnityWeb Compressed Content (brotli)";if(!e.length)return!1;var t=1&e[0]?14&e[0]?4:7:1,n=e[0]&(1<<t)-1,o=1+(Math.log(r.length-1)/Math.log(2)>>3);if(commentOffset=1+t+2+1+2+(o<<3)+7>>3,17==n||commentOffset>e.length)return!1;for(var i=n+(6+(o<<4)+(r.length-1<<6)<<t),a=0;a<commentOffset;a++,i>>>=8)if(e[a]!=(255&i))return!1;return String.fromCharCode.apply(null,e.subarray(commentOffset,commentOffset+r.length))==r}}};function p(){var r,e,s,t,n=performance.now(),p=(new Promise(function(i,e){var a=document.createElement("script");a.src=g.frameworkUrl,a.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var e,r=[["br","br"],["gz","gzip"]];for(e in r){var t,n=r[e];if(g.frameworkUrl.endsWith("."+n[0]))return t="Unable to parse "+g.frameworkUrl+"!","file:"==location.protocol?void d(t+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error"):(t+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+n[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==n[0]&&"http:"==location.protocol&&(n=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.",t=/Firefox/.test(navigator.userAgent)?"Unable to parse "+g.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+n+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+g.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'),void d(t,"error"))}d("Unable to parse "+g.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var o=unityFramework;unityFramework=null,a.onload=null,i(o)},a.onerror=function(e){d("Unable to load file "+g.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(a),g.deinitializers.push(function(){document.body.removeChild(a)})}).then(function(e){g.webAssemblyTimeStart=performance.now(),e(g),g.codeDownloadTimeEnd=performance.now()-n}),performance.now()),o=(m(r="dataUrl"),e=g.fetchWithProgress,s=g[r],t=/file:\/\//.exec(s)?"same-origin":void 0,e(g[r],{method:"GET",companyName:g.companyName,productName:g.productName,productVersion:g.productVersion,control:"no-store",mode:t,onProgress:function(e){m(r,e)}}).then(function(e){var r,t,n,o,i,a;return b.gzip.hasUnityMarker(e.parsedBody)&&(r=["gzip","gzip"]),(r=b.br.hasUnityMarker(e.parsedBody)?["brotli","br"]:r)&&(t=e.headers.get("Content-Type"),n=e.headers.get("Content-Encoding"),i=0<(o=e.headers.get("Content-Length"))&&e.parsedBody.length!=o,a=0<o&&e.parsedBody.length==o,n!=r[1]?d("Failed to parse binary data file "+s+' (with "Content-Type: '+t+'"), because it is still '+r[0]+'-compressed. It should have been uncompressed by the browser, but it was unable to do so since the web server provided the compressed content without specifying the HTTP Response Header "Content-Encoding: '+r[1]+'" that would have informed the browser that decompression is needed. Please verify your web server hosting configuration to add the missing "Content-Encoding: '+r[1]+'" HTTP Response Header.',"error"):d(i?"Web server configuration error: it looks like the web server has been misconfigured to double-compress the data file "+s+"! That is, it looks like the web browser has decompressed the file, but it is still in compressed form, suggesting that an already compressed file was compressed a second time. (Content-Length: "+o+", obtained length: "+e.parsedBody.length+")":a?/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&"gzip"==n&&"application/octet-stream"==t?"Unable to load content due to Apple Safari bug https://bugs.webkit.org/show_bug.cgi?id=247421 . To work around this issue, please reconfigure your web server to serve "+s+" with Content-Type: application/gzip instead of Content-Type: application/octet-stream":"Malformed binary data? Received compressed data file "+s+', with "Content-Type: '+t+'", "Content-Encoding: '+r[1]+'", "Content-Length: '+o+'", which the web browser should have decompressed, but it seemingly did not (received file size is the same as compressed file size was). Double check that the integrity of the file is intact.':"Malformed binary data URL "+s+'. No "Content-Length" HTTP Response header present. Check browser console for more information.',"error"),console.error("Malformed data? Downloaded binary data file "+s+" (ArrayBuffer size: "+e.parsedBody.length+") and browser should have decompressed it, but it might have not. Dumping raw HTTP Response Headers if it might help debug:"),e.headers.forEach(function(e,r){console.error(r+": "+e)})),e.parsedBody}).catch(function(e){var r="Failed to download file "+s;"file:"==location.protocol?d(r+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(r)}));g.preRun.push(function(){g.addRunDependency("dataUrl"),o.then(function(r){var e=new TextDecoder("utf-8"),t=0;function n(){var e=(r[t]|r[t+1]<<8|r[t+2]<<16|r[t+3]<<24)>>>0;return t+=4,e}function o(e){if(b.gzip.hasUnityMarker(r))throw e+'. Failed to parse binary data file, because it is still gzip-compressed and should have been uncompressed by the browser. Web server has likely provided gzip-compressed data without specifying the HTTP Response Header "Content-Encoding: gzip" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';if(b.br.hasUnityMarker(r))throw e+'. Failed to parse binary data file, because it is still brotli-compressed and should have been uncompressed by the browser. Web server has likely provided brotli-compressed data without specifying the HTTP Response Header "Content-Encoding: br" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';throw e}var i="UnityWebData1.0\0",a=e.decode(r.subarray(0,i.length)),s=(a!=i&&o('Unknown data format (id="'+a+'")'),t+=i.length,n());for(t+s>r.length&&o("Invalid binary data file header! (pos="+t+", headerSize="+s+", file length="+r.length+")");t<s;){var l=n(),d=n(),u=(l+d>r.length&&o("Invalid binary data file size! (offset="+l+", size="+d+", file length="+r.length+")"),n()),c=(t+u>r.length&&o("Invalid binary data file path name! (pos="+t+", length="+u+", file length="+r.length+")"),e.decode(r.subarray(t,t+u)));t+=u;for(var h=0,f=c.indexOf("/",h)+1;0<f;h=f,f=c.indexOf("/",h)+1)g.FS_createPath(c.substring(0,h),c.substring(h,f-1),!0,!0);g.FS_createDataFile(c,null,r.subarray(l,l+d),!0,!0,!0)}g.removeRunDependency("dataUrl"),g.dataUrlLoadEndTime=performance.now()-p})})}return new Promise(function(e,r){var t;g.SystemInfo.hasWebGL?1==g.SystemInfo.hasWebGL?(t='Your browser does not support graphics API "WebGL 2" which is required for this content.',"Safari"==g.SystemInfo.browser&&parseInt(g.SystemInfo.browserVersion)<15&&(g.SystemInfo.mobile||1<navigator.maxTouchPoints?t+="\nUpgrade to iOS 15 or later.":t+="\nUpgrade to Safari 15 or later."),r(t)):g.SystemInfo.hasWasm?(g.startupErrorHandler=r,l(0),g.postRun.push(function(){l(1),g.WebPlayer.WaitForInitialization().then(function(){delete g.startupErrorHandler,e(h),g.pageStartupTime=performance.now()})}),new Promise(function(r,e){navigator.gpu?navigator.gpu.requestAdapter().then(function(e){g.SystemInfo.hasWebGPU=!!e,r(g.SystemInfo.hasWebGPU)}):r(!1)}).then(function(){p()})):r("Your browser does not support WebAssembly."):r("Your browser does not support WebGL.")})}