!function(r){"object"==typeof exports&&"object"==typeof module?r(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],r):r(CodeMirror)}(function(r){"use strict";r.defineMode("rpm-changes",function(){var r=/^-+$/,e=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,t=/^[\w+.-]+@[\w.-]+/;return{token:function(n){if(n.sol()){if(n.match(r))return"tag";if(n.match(e))return"tag"}return n.match(t)?"string":(n.next(),null)}}}),r.defineMIME("text/x-rpm-changes","rpm-changes"),r.defineMode("rpm-spec",function(){var r=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,e=/^[a-zA-Z0-9()]+:/,t=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,n=/^%(ifnarch|ifarch|if)/,o=/^%(else|endif)/,a=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;return{startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(i,c){var p=i.peek();if("#"==p)return i.skipToEnd(),"comment";if(i.sol()){if(i.match(e))return"header";if(i.match(t))return"atom"}if(i.match(/^\$\w+/))return"def";if(i.match(/^\$\{\w+\}/))return"def";if(i.match(o))return"keyword";if(i.match(n))return c.controlFlow=!0,"keyword";if(c.controlFlow){if(i.match(a))return"operator";if(i.match(/^(\d+)/))return"number";i.eol()&&(c.controlFlow=!1)}if(i.match(r))return i.eol()&&(c.controlFlow=!1),"number";if(i.match(/^%[\w]+/))return i.match(/^\(/)&&(c.macroParameters=!0),"keyword";if(c.macroParameters){if(i.match(/^\d+/))return"number";if(i.match(/^\)/))return c.macroParameters=!1,"keyword"}return i.match(/^%\{\??[\w \-\:\!]+\}/)?(i.eol()&&(c.controlFlow=!1),"def"):(i.next(),null)}}}),r.defineMIME("text/x-rpm-spec","rpm-spec")});