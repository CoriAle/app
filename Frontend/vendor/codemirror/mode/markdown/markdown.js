!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)}(function(t){"use strict";t.defineMode("markdown",function(e,i){function n(i){if(t.findModeByName){var n=t.findModeByName(i);n&&(i=n.mime||n.mimes[0])}var r=t.getMode(e,i);return"null"==r.name?null:r}function r(t,e,i){return e.f=e.inline=i,i(t,e)}function a(t,e,i){return e.f=e.block=i,i(t,e)}function o(t){return!t||!/\S/.test(t.string)}function l(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,q||t.f!=f||(t.f=c,t.block=h),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine=null,null}function h(t,e){var a=t.sol(),l=e.list!==!1,h=e.indentedCode;e.indentedCode=!1,l&&(e.indentationDiff>=0?(e.indentationDiff<4&&(e.indentation-=e.indentationDiff),e.list=null):e.indentation>0?(e.list=null,e.listDepth=Math.floor(e.indentation/4)):(e.list=!1,e.listDepth=0));var f=null;if(e.indentationDiff>=4)return t.skipToEnd(),h||o(e.prevLine)?(e.indentation-=4,e.indentedCode=!0,w.code):null;if(t.eatSpace())return null;if((f=t.match(B))&&f[1].length<=6)return e.header=f[1].length,i.highlightFormatting&&(e.formatting="header"),e.f=e.inline,u(e);if(!(o(e.prevLine)||e.quote||l||h)&&(f=t.match(_)))return e.header="="==f[0].charAt(0)?1:2,i.highlightFormatting&&(e.formatting="header"),e.f=e.inline,u(e);if(t.eat(">"))return e.quote=a?1:e.quote+1,i.highlightFormatting&&(e.formatting="quote"),t.eatSpace(),u(e);if("["===t.peek())return r(t,e,v);if(t.match(M,!0))return e.hr=!0,w.hr;if((o(e.prevLine)||l)&&(t.match(C,!1)||t.match(y,!1))){var s=null;return t.match(C,!0)?s="ul":(t.match(y,!0),s="ol"),e.indentation=t.column()+t.current().length,e.list=!0,e.listDepth++,i.taskLists&&t.match(D,!1)&&(e.taskList=!0),e.f=e.inline,i.highlightFormatting&&(e.formatting=["list","list-"+s]),u(e)}return i.fencedCodeBlocks&&(f=t.match(H,!0))?(e.fencedChars=f[1],e.localMode=n(f[2]),e.localMode&&(e.localState=e.localMode.startState()),e.f=e.block=g,i.highlightFormatting&&(e.formatting="code-block"),e.code=!0,u(e)):r(t,e,e.inline)}function f(t,e){var i=F.token(t,e.htmlState);return(q&&null===e.htmlState.tagStart&&!e.htmlState.context&&e.htmlState.tokenize.isInText||e.md_inside&&t.current().indexOf(">")>-1)&&(e.f=c,e.block=h,e.htmlState=null),i}function g(t,e){return t.sol()&&e.fencedChars&&t.match(e.fencedChars,!1)?(e.localMode=e.localState=null,e.f=e.block=s,null):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),w.code)}function s(t,e){t.match(e.fencedChars),e.block=h,e.f=c,e.fencedChars=null,i.highlightFormatting&&(e.formatting="code-block"),e.code=!0;var n=u(e);return e.code=!1,n}function u(t){var e=[];if(t.formatting){e.push(w.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var n=0;n<t.formatting.length;n++)e.push(w.formatting+"-"+t.formatting[n]),"header"===t.formatting[n]&&e.push(w.formatting+"-"+t.formatting[n]+"-"+t.header),"quote"===t.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(w.formatting+"-"+t.formatting[n]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(w.linkHref,"url"):(t.strong&&e.push(w.strong),t.em&&e.push(w.em),t.strikethrough&&e.push(w.strikethrough),t.linkText&&e.push(w.linkText),t.code&&e.push(w.code)),t.header&&e.push(w.header,w.header+"-"+t.header),t.quote&&(e.push(w.quote),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(w.quote+"-"+t.quote):e.push(w.quote+"-"+i.maxBlockquoteDepth)),t.list!==!1){var r=(t.listDepth-1)%3;r?1===r?e.push(w.list2):e.push(w.list3):e.push(w.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function m(t,e){if(t.match(O,!0))return u(e)}function c(e,n){var r=n.text(e,n);if("undefined"!=typeof r)return r;if(n.list)return n.list=null,u(n);if(n.taskList){var o="x"!==e.match(D,!0)[1];return o?n.taskOpen=!0:n.taskClosed=!0,i.highlightFormatting&&(n.formatting="task"),n.taskList=!1,u(n)}if(n.taskOpen=!1,n.taskClosed=!1,n.header&&e.match(/^#+$/,!0))return i.highlightFormatting&&(n.formatting="header"),u(n);var l=e.sol(),h=e.next();if("\\"===h&&(e.next(),i.highlightFormatting)){var g=u(n),s=w.formatting+"-escape";return g?g+" "+s:s}if(n.linkTitle){n.linkTitle=!1;var m=h;"("===h&&(m=")"),m=(m+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");var c="^\\s*(?:[^"+m+"\\\\]+|\\\\\\\\|\\\\.)"+m;if(e.match(new RegExp(c),!0))return w.linkHref}if("`"===h){var p=n.formatting;i.highlightFormatting&&(n.formatting="code");var v=u(n),x=e.pos;e.eatWhile("`");var S=1+e.pos-x;return n.code?S===b?(n.code=!1,v):(n.formatting=p,u(n)):(b=S,n.code=!0,u(n))}if(n.code)return u(n);if("!"===h&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return e.match(/\[[^\]]*\]/),n.inline=n.f=k,w.image;if("["===h&&e.match(/.*\](\(.*\)| ?\[.*\])/,!1))return n.linkText=!0,i.highlightFormatting&&(n.formatting="link"),u(n);if("]"===h&&n.linkText&&e.match(/\(.*\)| ?\[.*\]/,!1)){i.highlightFormatting&&(n.formatting="link");var g=u(n);return n.linkText=!1,n.inline=n.f=k,g}if("<"===h&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=d,i.highlightFormatting&&(n.formatting="link");var g=u(n);return g?g+=" ":g="",g+w.linkInline}if("<"===h&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=d,i.highlightFormatting&&(n.formatting="link");var g=u(n);return g?g+=" ":g="",g+w.linkEmail}if("<"===h&&e.match(/^(!--|\w)/,!1)){var L=e.string.indexOf(">",e.pos);if(L!=-1){var q=e.string.substring(e.start,L);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(q)&&(n.md_inside=!0)}return e.backUp(1),n.htmlState=t.startState(F),a(e,n,f)}if("<"===h&&e.match(/^\/\w*?>/))return n.md_inside=!1,"tag";var T=!1;if(!i.underscoresBreakWords&&"_"===h&&"_"!==e.peek()&&e.match(/(\w)/,!1)){var M=e.pos-2;if(M>=0){var C=e.string.charAt(M);"_"!==C&&C.match(/(\w)/,!1)&&(T=!0)}}if("*"===h||"_"===h&&!T)if(l&&" "===e.peek());else{if(n.strong===h&&e.eat(h)){i.highlightFormatting&&(n.formatting="strong");var v=u(n);return n.strong=!1,v}if(!n.strong&&e.eat(h))return n.strong=h,i.highlightFormatting&&(n.formatting="strong"),u(n);if(n.em===h){i.highlightFormatting&&(n.formatting="em");var v=u(n);return n.em=!1,v}if(!n.em)return n.em=h,i.highlightFormatting&&(n.formatting="em"),u(n)}else if(" "===h&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return u(n);e.backUp(1)}if(i.strikethrough)if("~"===h&&e.eatWhile(h)){if(n.strikethrough){i.highlightFormatting&&(n.formatting="strikethrough");var v=u(n);return n.strikethrough=!1,v}if(e.match(/^[^\s]/,!1))return n.strikethrough=!0,i.highlightFormatting&&(n.formatting="strikethrough"),u(n)}else if(" "===h&&e.match(/^~~/,!0)){if(" "===e.peek())return u(n);e.backUp(2)}return" "===h&&(e.match(/ +$/,!1)?n.trailingSpace++:n.trailingSpace&&(n.trailingSpaceNewLine=!0)),u(n)}function d(t,e){var n=t.next();if(">"===n){e.f=e.inline=c,i.highlightFormatting&&(e.formatting="link");var r=u(e);return r?r+=" ":r="",r+w.linkInline}return t.match(/^[^>]+/,!0),w.linkInline}function k(t,e){if(t.eatSpace())return null;var n=t.next();return"("===n||"["===n?(e.f=e.inline=p("("===n?")":"]"),i.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,u(e)):"error"}function p(t){return function(e,n){var r=e.next();if(r===t){n.f=n.inline=c,i.highlightFormatting&&(n.formatting="link-string");var a=u(n);return n.linkHref=!1,a}return e.match(L(t),!0)&&e.backUp(1),n.linkHref=!0,u(n)}}function v(t,e){return t.match(/^[^\]]*\]:/,!1)?(e.f=x,t.next(),i.highlightFormatting&&(e.formatting="link"),e.linkText=!0,u(e)):r(t,e,c)}function x(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=S,i.highlightFormatting&&(e.formatting="link");var n=u(e);return e.linkText=!1,n}return t.match(/^[^\]]+/,!0),w.linkText}function S(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=c,w.linkHref+" url")}function L(t){return $[t]||(t=(t+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),$[t]=new RegExp("^(?:[^\\\\]|\\\\.)*?("+t+")")),$[t]}var q=t.modes.hasOwnProperty("xml"),F=t.getMode(e,q?{name:"xml",htmlMode:!0}:"text/plain");void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.underscoresBreakWords&&(i.underscoresBreakWords=!0),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1),void 0===i.tokenTypeOverrides&&(i.tokenTypeOverrides={});var b=0,w={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"tag",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough"};for(var T in w)w.hasOwnProperty(T)&&i.tokenTypeOverrides[T]&&(w[T]=i.tokenTypeOverrides[T]);var M=/^([*\-_])(?:\s*\1){2,}\s*$/,C=/^[*\-+]\s+/,y=/^[0-9]+([.)])\s+/,D=/^\[(x| )\](?=\s)/,B=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,_=/^ *(?:\={1,}|-{1,})\s*$/,O=/^[^#!\[\]*_\\<>` "'(~]+/,H=new RegExp("^("+(i.fencedCodeBlocks===!0?"~~~+|```+":i.fencedCodeBlocks)+")[ \\t]*([\\w+#]*)"),$=[],N={startState:function(){return{f:h,prevLine:null,thisLine:null,block:h,htmlState:null,indentation:0,inline:c,text:m,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,em:!1,strong:!1,header:0,hr:!1,taskList:!1,list:!1,listDepth:0,quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,fencedChars:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.this,block:e.block,htmlState:e.htmlState&&t.copyState(F,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkTitle:e.linkTitle,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,header:e.header,hr:e.hr,taskList:e.taskList,list:e.list,listDepth:e.listDepth,quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedChars:e.fencedChars}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine){var i=e.header||e.hr;if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0)||i){if(l(e),!i)return null;e.prevLine=null}e.prevLine=e.thisLine,e.thisLine=t,e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.f=e.block;var n=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length,r=4*Math.floor((n-e.indentation)/4);r>4&&(r=4);var a=e.indentation+r;if(e.indentationDiff=a-e.indentation,e.indentation=a,n>0)return null}return e.f(t,e)},innerMode:function(t){return t.block==f?{state:t.htmlState,mode:F}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:N}},blankLine:l,getType:u,fold:"markdown"};return N},"xml"),t.defineMIME("text/x-markdown","markdown")});