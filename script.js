function getURLParameter(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var Zepto = function () { function t(t) { return null == t ? t + "" : J[U.call(t)] || "object" } function n(n) { return "function" == t(n) } function e(t) { return null != t && t == t.window } function i(t) { return null != t && t.nodeType == t.DOCUMENT_NODE } function r(n) { return "object" == t(n) } function o(t) { return r(t) && !e(t) && Object.getPrototypeOf(t) == Object.prototype } function s(t) { return "number" == typeof t.length } function u(t) { return Z.call(t, function (t) { return null != t }) } function a(t) { return t.length > 0 ? C.fn.concat.apply([], t) : t } function c(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() } function f(t) { return t in k ? k[t] : k[t] = RegExp("(^|\\s)" + t + "(\\s|$)") } function l(t, n) { return "number" != typeof n || z[c(t)] ? n : n + "px" } function h(t) { var n, e; return j[t] || (n = $.createElement(t), $.body.appendChild(n), e = getComputedStyle(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), j[t] = e), j[t] } function p(t) { return "children" in t ? L.call(t.children) : C.map(t.childNodes, function (t) { return 1 == t.nodeType ? t : x }) } function d(t, n) { var e, i = t ? t.length : 0; for (e = 0; i > e; e++) this[e] = t[e]; this.length = i, this.selector = n || "" } function m(t, n, e) { for (N in n) e && (o(n[N]) || Q(n[N])) ? (o(n[N]) && !o(t[N]) && (t[N] = {}), Q(n[N]) && !Q(t[N]) && (t[N] = []), m(t[N], n[N], e)) : n[N] !== x && (t[N] = n[N]) } function g(t, n) { return null == n ? C(t) : C(t).filter(n) } function v(t, e, i, r) { return n(e) ? e.call(t, i, r) : e } function y(t, n, e) { null == e ? t.removeAttribute(n) : t.setAttribute(n, e) } function b(t, n) { var e = t.className || "", i = e && e.baseVal !== x; return n === x ? i ? e.baseVal : e : (i ? e.baseVal = n : t.className = n, x) } function w(t) { var n; try { return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? C.parseJSON(t) : t : n) : t } catch (e) { return t } } function E(t, n) { n(t); for (var e = 0, i = t.childNodes.length; i > e; e++) E(t.childNodes[e], n) } var x, N, C, P, T, O, A = [], S = A.concat, Z = A.filter, L = A.slice, $ = window.document, j = {}, k = {}, z = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 }, M = /^\s*<(\w+|!)[^>]*>/, _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, D = /^(?:body|html)$/i, V = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"], q = ["after", "prepend", "before", "append"], R = $.createElement("table"), B = $.createElement("tr"), H = { tr: $.createElement("tbody"), tbody: R, thead: R, tfoot: R, td: B, th: B, "*": $.createElement("div") }, X = /complete|loaded|interactive/, Y = /^[\w-]*$/, J = {}, U = J.toString, W = {}, G = $.createElement("div"), K = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, Q = Array.isArray || function (t) { return t instanceof Array }; return W.matches = function (t, n) { if (!n || !t || 1 !== t.nodeType) return !1; var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector; if (e) return e.call(t, n); var i, r = t.parentNode, o = !r; return o && (r = G).appendChild(t), i = ~W.qsa(r, n).indexOf(t), o && G.removeChild(t), i }, T = function (t) { return t.replace(/-+(.)?/g, function (t, n) { return n ? n.toUpperCase() : "" }) }, O = function (t) { return Z.call(t, function (n, e) { return t.indexOf(n) == e }) }, W.fragment = function (t, n, e) { var i, r, s; return _.test(t) && (i = C($.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(F, "<$1></$2>")), n === x && (n = M.test(t) && RegExp.$1), n in H || (n = "*"), s = H[n], s.innerHTML = "" + t, i = C.each(L.call(s.childNodes), function () { s.removeChild(this) })), o(e) && (r = C(i), C.each(e, function (t, n) { I.indexOf(t) > -1 ? r[t](n) : r.attr(t, n) })), i }, W.Z = function (t, n) { return new d(t, n) }, W.isZ = function (t) { return t instanceof W.Z }, W.init = function (t, e) { var i; if (!t) return W.Z(); if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && M.test(t)) i = W.fragment(t, RegExp.$1, e), t = null; else { if (e !== x) return C(e).find(t); i = W.qsa($, t) } else { if (n(t)) return C($).ready(t); if (W.isZ(t)) return t; if (Q(t)) i = u(t); else if (r(t)) i = [t], t = null; else if (M.test(t)) i = W.fragment(t.trim(), RegExp.$1, e), t = null; else { if (e !== x) return C(e).find(t); i = W.qsa($, t) } } return W.Z(i, t) }, C = function (t, n) { return W.init(t, n) }, C.extend = function (t) { var n, e = L.call(arguments, 1); return "boolean" == typeof t && (n = t, t = e.shift()), e.forEach(function (e) { m(t, e, n) }), t }, W.qsa = function (t, n) { var e, r = "#" == n[0], o = !r && "." == n[0], s = r || o ? n.slice(1) : n, u = Y.test(s); return i(t) && u && r ? (e = t.getElementById(s)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : L.call(u && !r ? o ? t.getElementsByClassName(s) : t.getElementsByTagName(n) : t.querySelectorAll(n)) }, C.contains = $.documentElement.contains ? function (t, n) { return t !== n && t.contains(n) } : function (t, n) { for (; n && (n = n.parentNode) ;) if (n === t) return !0; return !1 }, C.type = t, C.isFunction = n, C.isWindow = e, C.isArray = Q, C.isPlainObject = o, C.isEmptyObject = function (t) { var n; for (n in t) return !1; return !0 }, C.inArray = function (t, n, e) { return A.indexOf.call(n, t, e) }, C.camelCase = T, C.trim = function (t) { return null == t ? "" : String.prototype.trim.call(t) }, C.uuid = 0, C.support = {}, C.expr = {}, C.map = function (t, n) { var e, i, r, o = []; if (s(t)) for (i = 0; t.length > i; i++) e = n(t[i], i), null != e && o.push(e); else for (r in t) e = n(t[r], r), null != e && o.push(e); return a(o) }, C.each = function (t, n) { var e, i; if (s(t)) { for (e = 0; t.length > e; e++) if (n.call(t[e], e, t[e]) === !1) return t } else for (i in t) if (n.call(t[i], i, t[i]) === !1) return t; return t }, C.grep = function (t, n) { return Z.call(t, n) }, window.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, n) { J["[object " + n + "]"] = n.toLowerCase() }), C.fn = { constructor: W.Z, length: 0, forEach: A.forEach, reduce: A.reduce, push: A.push, sort: A.sort, splice: A.splice, indexOf: A.indexOf, concat: function () { var t, n, e = []; for (t = 0; arguments.length > t; t++) n = arguments[t], e[t] = W.isZ(n) ? n.toArray() : n; return S.apply(W.isZ(this) ? this.toArray() : this, e) }, map: function (t) { return C(C.map(this, function (n, e) { return t.call(n, e, n) })) }, slice: function () { return C(L.apply(this, arguments)) }, ready: function (t) { return X.test($.readyState) && $.body ? t(C) : $.addEventListener("DOMContentLoaded", function () { t(C) }, !1), this }, get: function (t) { return t === x ? L.call(this) : this[t >= 0 ? t : t + this.length] }, toArray: function () { return this.get() }, size: function () { return this.length }, remove: function () { return this.each(function () { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function (t) { return A.every.call(this, function (n, e) { return t.call(n, e, n) !== !1 }), this }, filter: function (t) { return n(t) ? this.not(this.not(t)) : C(Z.call(this, function (n) { return W.matches(n, t) })) }, add: function (t, n) { return C(O(this.concat(C(t, n)))) }, is: function (t) { return this.length > 0 && W.matches(this[0], t) }, not: function (t) { var e = []; if (n(t) && t.call !== x) this.each(function (n) { t.call(this, n) || e.push(this) }); else { var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? L.call(t) : C(t); this.forEach(function (t) { 0 > i.indexOf(t) && e.push(t) }) } return C(e) }, has: function (t) { return this.filter(function () { return r(t) ? C.contains(this, t) : C(this).find(t).size() }) }, eq: function (t) { return -1 === t ? this.slice(t) : this.slice(t, +t + 1) }, first: function () { var t = this[0]; return t && !r(t) ? t : C(t) }, last: function () { var t = this[this.length - 1]; return t && !r(t) ? t : C(t) }, find: function (t) { var n, e = this; return n = t ? "object" == typeof t ? C(t).filter(function () { var t = this; return A.some.call(e, function (n) { return C.contains(n, t) }) }) : 1 == this.length ? C(W.qsa(this[0], t)) : this.map(function () { return W.qsa(this, t) }) : [] }, closest: function (t, n) { var e = this[0], r = !1; for ("object" == typeof t && (r = C(t)) ; e && !(r ? r.indexOf(e) >= 0 : W.matches(e, t)) ;) e = e !== n && !i(e) && e.parentNode; return C(e) }, parents: function (t) { for (var n = [], e = this; e.length > 0;) e = C.map(e, function (t) { return (t = t.parentNode) && !i(t) && 0 > n.indexOf(t) ? (n.push(t), t) : x }); return g(n, t) }, parent: function (t) { return g(O(this.pluck("parentNode")), t) }, children: function (t) { return g(this.map(function () { return p(this) }), t) }, contents: function () { return this.map(function () { return L.call(this.childNodes) }) }, siblings: function (t) { return g(this.map(function (t, n) { return Z.call(p(n.parentNode), function (t) { return t !== n }) }), t) }, empty: function () { return this.each(function () { this.innerHTML = "" }) }, pluck: function (t) { return C.map(this, function (n) { return n[t] }) }, show: function () { return this.each(function () { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName)) }) }, replaceWith: function (t) { return this.before(t).remove() }, wrap: function (t) { var e = n(t); if (this[0] && !e) var i = C(t).get(0), r = i.parentNode || this.length > 1; return this.each(function (n) { C(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i) }) }, wrapAll: function (t) { if (this[0]) { C(this[0]).before(t = C(t)); for (var n; (n = t.children()).length;) t = n.first(); C(t).append(this) } return this }, wrapInner: function (t) { var e = n(t); return this.each(function (n) { var i = C(this), r = i.contents(), o = e ? t.call(this, n) : t; r.length ? r.wrapAll(o) : i.append(o) }) }, unwrap: function () { return this.parent().each(function () { C(this).replaceWith(C(this).children()) }), this }, clone: function () { return this.map(function () { return this.cloneNode(!0) }) }, hide: function () { return this.css("display", "none") }, toggle: function (t) { return this.each(function () { var n = C(this); (t === x ? "none" == n.css("display") : t) ? n.show() : n.hide() }) }, prev: function (t) { return C(this.pluck("previousElementSibling")).filter(t || "*") }, next: function (t) { return C(this.pluck("nextElementSibling")).filter(t || "*") }, html: function (t) { return 0 in arguments ? this.each(function (n) { var e = this.innerHTML; C(this).empty().append(v(this, t, n, e)) }) : 0 in this ? this[0].innerHTML : null }, text: function (t) { return 0 in arguments ? this.each(function (n) { var e = v(this, t, n, this.textContent); this.textContent = null == e ? "" : "" + e }) : 0 in this ? this[0].textContent : null }, attr: function (t, n) { var e; return "string" != typeof t || 1 in arguments ? this.each(function (e) { if (1 === this.nodeType) if (r(t)) for (N in t) y(this, N, t[N]); else y(this, t, v(this, n, e, this.getAttribute(t))) }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e : x }, removeAttr: function (t) { return this.each(function () { 1 === this.nodeType && t.split(" ").forEach(function (t) { y(this, t) }, this) }) }, prop: function (t, n) { return t = K[t] || t, 1 in arguments ? this.each(function (e) { this[t] = v(this, n, e, this[t]) }) : this[0] && this[0][t] }, data: function (t, n) { var e = "data-" + t.replace(V, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(e, n) : this.attr(e); return null !== i ? w(i) : x }, val: function (t) { return 0 in arguments ? this.each(function (n) { this.value = v(this, t, n, this.value) }) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function () { return this.selected }).pluck("value") : this[0].value) }, offset: function (t) { if (t) return this.each(function (n) { var e = C(this), i = v(this, t, n, e.offset()), r = e.offsetParent().offset(), o = { top: i.top - r.top, left: i.left - r.left }; "static" == e.css("position") && (o.position = "relative"), e.css(o) }); if (!this.length) return null; var n = this[0].getBoundingClientRect(); return { left: n.left + window.pageXOffset, top: n.top + window.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) } }, css: function (n, e) { if (2 > arguments.length) { var i = this[0], r = getComputedStyle(i, ""); if (!i) return; if ("string" == typeof n) return i.style[T(n)] || r.getPropertyValue(n); if (Q(n)) { var o = {}; return C.each(n, function (t, n) { o[n] = i.style[T(n)] || r.getPropertyValue(n) }), o } } var s = ""; if ("string" == t(n)) e || 0 === e ? s = c(n) + ":" + l(n, e) : this.each(function () { this.style.removeProperty(c(n)) }); else for (N in n) n[N] || 0 === n[N] ? s += c(N) + ":" + l(N, n[N]) + ";" : this.each(function () { this.style.removeProperty(c(N)) }); return this.each(function () { this.style.cssText += ";" + s }) }, index: function (t) { return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function (t) { return t ? A.some.call(this, function (t) { return this.test(b(t)) }, f(t)) : !1 }, addClass: function (t) { return t ? this.each(function (n) { if ("className" in this) { P = []; var e = b(this), i = v(this, t, n, e); i.split(/\s+/g).forEach(function (t) { C(this).hasClass(t) || P.push(t) }, this), P.length && b(this, e + (e ? " " : "") + P.join(" ")) } }) : this }, removeClass: function (t) { return this.each(function (n) { if ("className" in this) { if (t === x) return b(this, ""); P = b(this), v(this, t, n, P).split(/\s+/g).forEach(function (t) { P = P.replace(f(t), " ") }), b(this, P.trim()) } }) }, toggleClass: function (t, n) { return t ? this.each(function (e) { var i = C(this), r = v(this, t, e, b(this)); r.split(/\s+/g).forEach(function (t) { (n === x ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t) }) }) : this }, scrollTop: function (t) { if (this.length) { var n = "scrollTop" in this[0]; return t === x ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () { this.scrollTop = t } : function () { this.scrollTo(this.scrollX, t) }) } }, scrollLeft: function (t) { if (this.length) { var n = "scrollLeft" in this[0]; return t === x ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () { this.scrollLeft = t } : function () { this.scrollTo(t, this.scrollY) }) } }, position: function () { if (this.length) { var t = this[0], n = this.offsetParent(), e = this.offset(), i = D.test(n[0].nodeName) ? { top: 0, left: 0 } : n.offset(); return e.top -= parseFloat(C(t).css("margin-top")) || 0, e.left -= parseFloat(C(t).css("margin-left")) || 0, i.top += parseFloat(C(n[0]).css("border-top-width")) || 0, i.left += parseFloat(C(n[0]).css("border-left-width")) || 0, { top: e.top - i.top, left: e.left - i.left } } }, offsetParent: function () { return this.map(function () { for (var t = this.offsetParent || $.body; t && !D.test(t.nodeName) && "static" == C(t).css("position") ;) t = t.offsetParent; return t }) } }, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function (t) { var n = t.replace(/./, function (t) { return t[0].toUpperCase() }); C.fn[t] = function (r) { var o, s = this[0]; return r === x ? e(s) ? s["inner" + n] : i(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (n) { s = C(this), s.css(t, v(this, r, n, s[t]())) }) } }), q.forEach(function (n, e) { var i = e % 2; C.fn[n] = function () { var n, r, o = C.map(arguments, function (e) { return n = t(e), "object" == n || "array" == n || null == e ? e : W.fragment(e) }), s = this.length > 1; return 1 > o.length ? this : this.each(function (t, n) { r = i ? n : n.parentNode, n = 0 == e ? n.nextSibling : 1 == e ? n.firstChild : 2 == e ? n : null; var u = C.contains($.documentElement, r); o.forEach(function (t) { if (s) t = t.cloneNode(!0); else if (!r) return C(t).remove(); r.insertBefore(t, n), u && E(t, function (t) { null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML) }) }) }) }, C.fn[i ? n + "To" : "insert" + (e ? "Before" : "After")] = function (t) { return C(t)[n](this), this } }), W.Z.prototype = d.prototype = C.fn, W.uniq = O, W.deserializeValue = w, C.zepto = W, C }(); window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) { function n(t) { return t._zid || (t._zid = h++) } function e(t, e, o, s) { if (e = i(e), e.ns) var u = r(e.ns); return (g[n(t)] || []).filter(function (t) { return !(!t || e.e && t.e != e.e || e.ns && !u.test(t.ns) || o && n(t.fn) !== n(o) || s && t.sel != s) }) } function i(t) { var n = ("" + t).split("."); return { e: n[0], ns: n.slice(1).sort().join(" ") } } function r(t) { return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") } function o(t, n) { return t.del && !y && t.e in b || !!n } function s(t) { return w[t] || y && b[t] || t } function u(e, r, u, a, f, h, p) { var d = n(e), m = g[d] || (g[d] = []); r.split(/\s/).forEach(function (n) { if ("ready" == n) return t(document).ready(u); var r = i(n); r.fn = u, r.sel = f, r.e in w && (u = function (n) { var e = n.relatedTarget; return !e || e !== this && !t.contains(this, e) ? r.fn.apply(this, arguments) : l }), r.del = h; var d = h || u; r.proxy = function (t) { if (t = c(t), !t.isImmediatePropagationStopped()) { t.data = a; var n = d.apply(e, t._args == l ? [t] : [t].concat(t._args)); return n === !1 && (t.preventDefault(), t.stopPropagation()), n } }, r.i = m.length, m.push(r), "addEventListener" in e && e.addEventListener(s(r.e), r.proxy, o(r, p)) }) } function a(t, i, r, u, a) { var c = n(t); (i || "").split(/\s/).forEach(function (n) { e(t, n, r, u).forEach(function (n) { delete g[c][n.i], "removeEventListener" in t && t.removeEventListener(s(n.e), n.proxy, o(n, a)) }) }) } function c(n, e) { return (e || !n.isDefaultPrevented) && (e || (e = n), t.each(C, function (t, i) { var r = e[t]; n[t] = function () { return this[i] = E, r && r.apply(e, arguments) }, n[i] = x }), (e.defaultPrevented !== l ? e.defaultPrevented : "returnValue" in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault()) && (n.isDefaultPrevented = E)), n } function f(t) { var n, e = { originalEvent: t }; for (n in t) N.test(n) || t[n] === l || (e[n] = t[n]); return c(e, t) } var l, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function (t) { return "string" == typeof t }, g = {}, v = {}, y = "onfocusin" in window, b = { focus: "focusin", blur: "focusout" }, w = { mouseenter: "mouseover", mouseleave: "mouseout" }; v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = { add: u, remove: a }, t.proxy = function (e, i) { var r = 2 in arguments && p.call(arguments, 2); if (d(e)) { var o = function () { return e.apply(i, r ? r.concat(p.call(arguments)) : arguments) }; return o._zid = n(e), o } if (m(i)) return r ? (r.unshift(e[i], e), t.proxy.apply(null, r)) : t.proxy(e[i], e); throw new TypeError("expected function") }, t.fn.bind = function (t, n, e) { return this.on(t, n, e) }, t.fn.unbind = function (t, n) { return this.off(t, n) }, t.fn.one = function (t, n, e, i) { return this.on(t, n, e, i, 1) }; var E = function () { return !0 }, x = function () { return !1 }, N = /^([A-Z]|returnValue$|layer[XY]$)/, C = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" }; t.fn.delegate = function (t, n, e) { return this.on(n, t, e) }, t.fn.undelegate = function (t, n, e) { return this.off(n, t, e) }, t.fn.live = function (n, e) { return t(document.body).delegate(this.selector, n, e), this }, t.fn.die = function (n, e) { return t(document.body).undelegate(this.selector, n, e), this }, t.fn.on = function (n, e, i, r, o) { var s, c, h = this; return n && !m(n) ? (t.each(n, function (t, n) { h.on(t, e, i, n, o) }), h) : (m(e) || d(r) || r === !1 || (r = i, i = e, e = l), (d(i) || i === !1) && (r = i, i = l), r === !1 && (r = x), h.each(function (h, d) { o && (s = function (t) { return a(d, t.type, r), r.apply(this, arguments) }), e && (c = function (n) { var i, o = t(n.target).closest(e, d).get(0); return o && o !== d ? (i = t.extend(f(n), { currentTarget: o, liveFired: d }), (s || r).apply(o, [i].concat(p.call(arguments, 1)))) : l }), u(d, n, r, i, e, c || s) })) }, t.fn.off = function (n, e, i) { var r = this; return n && !m(n) ? (t.each(n, function (t, n) { r.off(t, e, n) }), r) : (m(e) || d(i) || i === !1 || (i = e, e = l), i === !1 && (i = x), r.each(function () { a(this, n, i, e) })) }, t.fn.trigger = function (n, e) { return n = m(n) || t.isPlainObject(n) ? t.Event(n) : c(n), n._args = e, this.each(function () { "dispatchEvent" in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, e) }) }, t.fn.triggerHandler = function (n, i) { var r, o; return this.each(function (s, u) { r = f(m(n) ? t.Event(n) : n), r._args = i, r.target = u, t.each(e(u, n.type || n), function (t, n) { return o = n.proxy(r), r.isImmediatePropagationStopped() ? !1 : l }) }), o }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (n) { t.fn[n] = function (t) { return t ? this.bind(n, t) : this.trigger(n) } }), ["focus", "blur"].forEach(function (n) { t.fn[n] = function (t) { return t ? this.bind(n, t) : this.each(function () { try { this[n]() } catch (t) { } }), this } }), t.Event = function (t, n) { m(t) || (n = t, t = n.type); var e = document.createEvent(v[t] || "Events"), i = !0; if (n) for (var r in n) "bubbles" == r ? i = !!n[r] : e[r] = n[r]; return e.initEvent(t, i, !0), c(e) } }(Zepto), function (t, n) { function e(t) { return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase() } function i(t) { return r ? r + t : t.toLowerCase() } var r, o, s, u, a, c, f, l, h, p, d = "", m = { Webkit: "webkit", Moz: "", O: "o" }, g = window.document, v = g.createElement("div"), y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, b = {}; t.each(m, function (t, e) { return v.style[t + "TransitionProperty"] !== n ? (d = "-" + t.toLowerCase() + "-", r = e, !1) : n }), o = d + "transform", b[s = d + "transition-property"] = b[u = d + "transition-duration"] = b[c = d + "transition-delay"] = b[a = d + "transition-timing-function"] = b[f = d + "animation-name"] = b[l = d + "animation-duration"] = b[p = d + "animation-delay"] = b[h = d + "animation-timing-function"] = "", t.fx = { off: r === n && v.style.transitionProperty === n, speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: d, transitionEnd: i("TransitionEnd"), animationEnd: i("AnimationEnd") }, t.fn.animate = function (e, i, r, o, s) { return t.isFunction(i) && (o = i, r = n, i = n), t.isFunction(r) && (o = r, r = n), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(e, i, r, o, s) }, t.fn.anim = function (i, r, d, m, g) { var v, w, E, x = {}, N = "", C = this, P = t.fx.transitionEnd, T = !1; if (r === n && (r = t.fx.speeds._default / 1e3), g === n && (g = 0), t.fx.off && (r = 0), "string" == typeof i) x[f] = i, x[l] = r + "s", x[p] = g + "s", x[h] = d || "linear", P = t.fx.animationEnd; else { w = []; for (v in i) y.test(v) ? N += v + "(" + i[v] + ") " : (x[v] = i[v], w.push(e(v))); N && (x[o] = N, w.push(o)), r > 0 && "object" == typeof i && (x[s] = w.join(", "), x[u] = r + "s", x[c] = g + "s", x[a] = d || "linear") } return E = function (e) { if (e !== n) { if (e.target !== e.currentTarget) return; t(e.target).unbind(P, E) } else t(this).unbind(P, E); T = !0, t(this).css(b), m && m.call(this) }, r > 0 && (this.bind(P, E), setTimeout(function () { T || E.call(C) }, 1e3 * r + 25)), this.size() && this.get(0).clientLeft, this.css(x), 0 >= r && setTimeout(function () { C.each(function () { E.call(this) }) }, 0), this }, v = null }(Zepto), function (t, n) { function e(e, i, r, o, s) { "function" != typeof i || s || (s = i, i = n); var u = { opacity: r }; return o && (u.scale = o, e.css(t.fx.cssPrefix + "transform-origin", "0 0")), e.animate(u, i, null, s) } function i(n, i, r, o) { return e(n, i, 0, r, function () { s.call(t(this)), o && o.call(this) }) } var r = window.document, o = (r.documentElement, t.fn.show), s = t.fn.hide, u = t.fn.toggle; t.fn.show = function (t, i) { return o.call(this), t === n ? t = 0 : this.css("opacity", 0), e(this, t, 1, "1,1", i) }, t.fn.hide = function (t, e) { return t === n ? s.call(this) : i(this, t, "0,0", e) }, t.fn.toggle = function (e, i) { return e === n || "boolean" == typeof e ? u.call(this, e) : this.each(function () { var n = t(this); n["none" == n.css("display") ? "show" : "hide"](e, i) }) }, t.fn.fadeTo = function (t, n, i) { return e(this, t, n, null, i) }, t.fn.fadeIn = function (t, n) { var e = this.css("opacity"); return e > 0 ? this.css("opacity", 0) : e = 1, o.call(this).fadeTo(t, e, n) }, t.fn.fadeOut = function (t, n) { return i(this, t, null, n) }, t.fn.fadeToggle = function (n, e) { return this.each(function () { var i = t(this); i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](n, e) }) } }(Zepto);
        function startTimer(t, e) { function n() { o = t - ((Date.now() - i) / 1e3 | 0), a = o / 60 | 0, r = o % 60 | 0, a = 10 > a ? "0" + a : a, r = 10 > r ? "0" + r : r, e.textContent = a + ":" + r, 0 >= o && (i = Date.now() + 1e3) } var o, a, r, i = Date.now(); n(), setInterval(n, 1e3) } window.onload = function () { var t = 120, e = document.querySelector("#time"); startTimer(t, e) };
        function get_date(e) { return today = (now.getDate() - e) + ". " + monthNames[now.getMonth()] + " " + now.getFullYear() } var dayNames = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"), monthNames = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"), now = new Date, today = now.getDate() + ". " + monthNames[now.getMonth()] + " " + now.getFullYear();
        $(document).ready(function () { setTimeout(function () { $("#comment1").fadeIn() }, 1e4), setTimeout(function () { $("#comment2").fadeIn() }, 12e3), setTimeout(function () { $("#comment3").fadeIn() }, 13e3), setTimeout(function () { $("#comment4").fadeIn() }, 18e3), setTimeout(function () { $("#comment5").fadeIn() }, 2e4), setTimeout(function () { $("#comment6").fadeIn() }, 22e3), $(".bq1").click(function () { $("#q1").fadeOut(0), $("#q2").fadeIn(500) }), $(".bq2").click(function () { $("#q2").fadeOut(0), $("#q3").fadeIn(500) }), $(".bq3").click(function () { $("#q3").fadeOut(0), $("#q4").fadeIn(500) }), $(".bq4").click(function () { $("#content1").fadeOut(0), $("#content2").fadeIn(), setTimeout(function () { $("#result1").fadeIn(1e3) }, 3e3), setTimeout(function () { $("#result2").fadeIn(1e3) }, 4500), setTimeout(function () { $("#result3").fadeIn(1e3) }, 6e3), setTimeout(function () { $("#content2").fadeOut() }, 7500), setTimeout(function () { $("#content3").fadeIn() }, 7500) }) });
        function startTimer(t, e) { function n() { o = t - ((Date.now() - i) / 1e3 | 0), a = o / 60 | 0, r = o % 60 | 0, a = 10 > a ? "0" + a : a, r = 10 > r ? "0" + r : r, e.textContent = a + ":" + r, 0 >= o && (i = Date.now() + 1e3) } var o, a, r, i = Date.now(); n(), setInterval(n, 1e3) } window.onload = function () { var t = 120, e = document.querySelector("#time"); startTimer(t, e) };
        function startTimer(t, e) { var n, o = t; setInterval(function () { n = parseInt(o % 60, 10), n = 10 > n ? "0" + n : n, e.textContent = n, --o < 0 && (e.textContent = "Wenige") }, 6e3) } window.onload = function () { var t = 20, e = document.querySelector("#time"); startTimer(t, e) };
    
