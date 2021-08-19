;
window.OP3 = {
    "Meta": {
        "wpLocale": "en_US",
        "pageTitle": "Home",
        "pageDescription": "",
        "pageFeaturedImage": false,
        "pageId": 104,
        "homeUrl": "http:\/\/valhalla.financial",
        "siteUrl": "http:\/\/valhalla.financial",
        "pageUrl": "http:\/\/valhalla.financial\/",
        "facebookAppId": false,
        "facebookLang": false
    },
    "GoogleRecaptcha": {
        "googleRecaptchaSiteKey": false
    },
    "Settings": {
        "lazyLoadAssets": "default"
    }
};
! function(t, o, n) {
    t(function() {
        t('a[href^="#"]').on("click", function(n) {
            if ("1" === t(this).attr("data-op3-smooth-scroll")) {
                let i = this.hash;
                t("html, body").animate({
                    scrollTop: t(i).offset().top
                }, 1500, function() {
                    o.location.hash = i
                }), n.preventDefault()
            }
        })
    })
}(jQuery, window, document);
! function(i, t, o) {
    "use strict";
    if (void 0 === i) throw "Missing dependency: jQuery\nhttps://code.jquery.com/";
    var n = function(i, t) {
        if (!(this instanceof n)) throw "Accordion: Accordion is a constructor.";
        this._element = i, this._options = t, this._init()
    };
    i.extend(n.prototype, {
        _defaults: {
            parent: null,
            questionClass: ".question",
            answerClass: ".answer",
            itemClass: ".item",
            closeOthers: !0,
            animationDuration: 200
        },
        _init: function() {
            for (var t in this._element = i(this._element).addClass("jquery-accordion").data("jquery-accordion", this).get(0), this._options = i.extend(!0, {}, this._defaults, this._options), this._options) t in this._defaults || delete this._options[t];
            i(this._element).on("click.jqueryaccordion", this._options.questionClass, this._handleQuestionClick.bind(this)), i(this._element).trigger("jqueryaccordioninit")
        },
        _handleQuestionClick: function(t) {
            t.stopPropagation();
            var o = i(t.currentTarget);
            this.toggle(o)
        },
        toggle: function(t) {
            i(this._element).trigger("jqueryaccordiontoggle");
            var o = t.parent().find(this._options.answerClass).first(),
                n = t.closest(this._options.itemClass);
            this._options.closeOthers && n.siblings().removeClass("jquery-accordion-active").find(this._options.answerClass).slideUp(this._options.animationDuration), n.toggleClass("jquery-accordion-active"), o.slideToggle(this._options.animationDuration), i(this._element).trigger("jqueryaccordiontoggled")
        },
        open: function(i) {
            i.addClass("jquery-accordion-active").find(this._options.answerClass).first().slideDown(this._options.animationDuration)
        },
        close: function(i) {
            i.removeClass("jquery-accordion-active").find(this._options.answerClass).first().slideUp(this._options.animationDuration)
        },
        destroy: function() {
            i(this._element).removeClass("jquery-accordion").removeData("jquery-accordion").trigger("jqueryaccordiondestroy"), this._element = null, this._options = null
        },
        options: function(i, t) {
            if (!(i in this._options)) throw "Accordion: invalid options key '" + i + "'";
            if (void 0 === t) return this._options[i];
            this._options[i] = t
        }
    }), i.fn.accordion = function(t) {
        var o = i(this),
            s = Array.prototype.slice.call(arguments, 1);
        return o.each(function() {
            var e = i(this).data("jquery-accordion");
            if (e || (e = new n(this, "object" == typeof t ? t : {})), "string" == typeof t) {
                if (!("_" !== t.substr(0, 1) && t in e && "function" == typeof e[t])) throw "Accordion: no method named '" + t + "'";
                var r = e[t].apply(e, s);
                if (void 0 !== r) return o = r, !1
            }
        }), o
    }
}(window.jQuery, window, document);
! function(e, t, a) {
    "use strict";
    e(function() {
        e('[data-op3-element-type="faq"]').each(function() {
            var t = e(this),
                a = t.find(".op3-faq-wrapper").attr("data-op3-close-other-tabs") || 0;
            t.accordion({
                questionClass: ".op3-faqitem-header",
                answerClass: ".op3-faqitem-content",
                itemClass: '.op3-element[data-op3-element-type="faqitem"]',
                closeOthers: parseInt(a)
            })
        })
    })
}(jQuery, window, document);
! function(r, e, o) {
    e.OP3 = e.OP3 || {}, OP3.ProgressBar = {}, OP3.ProgressBar.init = function() {
        var e = r('.op3-element[data-op3-element-type="progressbar"]');
        if (!e) return !1;
        OP3.ProgressBar.observer = new IntersectionObserver(function(e, o) {
            e.forEach(function(e) {
                e.isIntersecting && (r(e.target).removeClass("op3-progressbar-no-animaton"), OP3.ProgressBar.observer.unobserve(e.target))
            })
        }), e.each(function() {
            r(this).find('.op3-progressbar-content[data-op-animation-toggle="1"]') && (r(this).addClass("op3-progressbar-no-animaton"), OP3.ProgressBar.observer.observe(this))
        })
    }, r(o).ready(function() {
        OP3.ProgressBar.init()
    })
}(jQuery, window, document);
Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && t.nodeType === Node.ELEMENT_NODE);
    return null
});
! function(e, t) {
    "use strict";
    if ("function" != typeof e.ResizeObserver) {
        var n = function(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseInt(t.getPropertyValue("padding-top")),
                r = parseInt(t.getPropertyValue("padding-right")),
                i = parseInt(t.getPropertyValue("padding-bottom")),
                o = parseInt(t.getPropertyValue("padding-left")),
                a = {
                    x: o,
                    y: n,
                    width: e.clientWidth - o - r,
                    height: e.clientHeight - n - i
                };
            for (var s in a.left = a.x, a.top = a.y, a.right = a.left + a.width, a.bottom = a.top + a.height, a) Object.defineProperty(this, s, {
                value: a[s],
                writable: !1,
                enumerable: !0,
                configurable: !1
            })
        };
        n.prototype = {
            constructor: n
        };
        var r = function(e) {
            Object.defineProperty(this, "target", {
                value: e,
                writable: !1,
                enumerable: !0,
                configurable: !1
            }), Object.defineProperty(this, "contentRect", {
                value: new n(e),
                writable: !1,
                enumerable: !0,
                configurable: !1
            })
        };
        r.prototype = {
            constructor: r
        };
        var i = function(e) {
            if (!(this instanceof i)) throw "Failed to construct 'ResizeObserver': Please use the 'new' operator, this DOM object constructor cannot be called as a function.";
            if (void 0 === e) throw "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
            if ("function" != typeof e) throw "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
            this._callback = e, this._observables = [], this._boundIntervalHandler = this._intervalHandler.bind(this), this._interval = null
        };
        i.prototype = {
            constructor: i,
            observe: function(e) {
                if (!(e instanceof Element)) throw "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
                if (!this._observables.some(function(t) {
                        return t.target === e
                    })) {
                    var t = new r(e);
                    this._observables.push(t)
                }
                this._interval || (this._interval = this._boundIntervalHandler())
            },
            unobserve: function(e) {
                this._observables = this._observables.filter(function(t) {
                    return t.target !== e
                }), this._observables.length || this.disconnect()
            },
            disconnect: function() {
                e.clearInterval(this._interval), this._interval = null, this._observables = []
            },
            _intervalHandler: function() {
                var t = this._observables,
                    n = t.map(function(e, n) {
                        var i = new r(e.target);
                        return e.contentRect.height === i.contentRect.height && e.contentRect.width === i.contentRect.width ? null : (t[n] = i, i)
                    }).filter(function(e) {
                        return null !== e
                    });
                return n.length > 0 && this._callback(n), this._interval = e.requestAnimationFrame(this._boundIntervalHandler), this._interval
            }
        }, e.ResizeObserver = i
    }
}(window, document);
! function() {
    "use strict";
    if ("object" == typeof window)
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function() {
                return this.intersectionRatio > 0
            }
        });
        else {
            var t = window.document,
                e = [],
                n = null,
                o = null;
            r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r._setupCrossOriginUpdater = function() {
                return n || (n = function(t, n) {
                    o = t && n ? a(t, n) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, e.forEach(function(t) {
                        t._checkForIntersections()
                    })
                }), n
            }, r._resetCrossOriginUpdater = function() {
                n = null, o = null
            }, r.prototype.observe = function(t) {
                if (!this._observationTargets.some(function(e) {
                        return e.element == t
                    })) {
                    if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
                }
            }, r.prototype.unobserve = function(t) {
                this._observationTargets = this._observationTargets.filter(function(e) {
                    return e.element != t
                }), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
            }, r.prototype.disconnect = function() {
                this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
            }, r.prototype.takeRecords = function() {
                var t = this._queuedEntries.slice();
                return this._queuedEntries = [], t
            }, r.prototype._initThresholds = function(t) {
                var e = t || [0];
                return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return t !== n[e - 1]
                })
            }, r.prototype._parseRootMargin = function(t) {
                var e = (t || "0px").split(/\s+/).map(function(t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(e[1]),
                        unit: e[2]
                    }
                });
                return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
            }, r.prototype._monitorIntersections = function(e) {
                var n = e.defaultView;
                if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                    var o = this._checkForIntersections,
                        i = null,
                        r = null;
                    if (this.POLL_INTERVAL ? i = n.setInterval(o, this.POLL_INTERVAL) : (s(n, "resize", o, !0), s(e, "scroll", o, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (r = new n.MutationObserver(o)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push(function() {
                            var t = e.defaultView;
                            t && (i && t.clearInterval(i), h(t, "resize", o, !0)), h(e, "scroll", o, !0), r && r.disconnect()
                        }), e != (this.root && this.root.ownerDocument || t)) {
                        var c = p(e);
                        c && this._monitorIntersections(c.ownerDocument)
                    }
                }
            }, r.prototype._unmonitorIntersections = function(e) {
                var n = this._monitoringDocuments.indexOf(e);
                if (-1 != n) {
                    var o = this.root && this.root.ownerDocument || t;
                    if (!this._observationTargets.some(function(t) {
                            var n = t.element.ownerDocument;
                            if (n == e) return !0;
                            for (; n && n != o;) {
                                var i = p(n);
                                if ((n = i && i.ownerDocument) == e) return !0
                            }
                            return !1
                        })) {
                        var i = this._monitoringUnsubscribes[n];
                        if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), i(), e != o) {
                            var r = p(e);
                            r && this._unmonitorIntersections(r.ownerDocument)
                        }
                    }
                }
            }, r.prototype._unmonitorAllIntersections = function() {
                var t = this._monitoringUnsubscribes.slice(0);
                this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }, r.prototype._checkForIntersections = function() {
                if (this.root || !n || o) {
                    var t = this._rootIsInDom(),
                        e = t ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(o) {
                        var r = o.element,
                            s = c(r),
                            h = this._rootContainsTarget(r),
                            u = o.entry,
                            a = t && h && this._computeTargetAndRootIntersection(r, s, e),
                            l = o.entry = new i({
                                time: window.performance && performance.now && performance.now(),
                                target: r,
                                boundingClientRect: s,
                                rootBounds: n && !this.root ? null : e,
                                intersectionRect: a
                            });
                        u ? t && h ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }
            }, r.prototype._computeTargetAndRootIntersection = function(e, i, r) {
                if ("none" != window.getComputedStyle(e).display) {
                    for (var s, h, u, l, p, d, g, m, v = i, _ = f(e), b = !1; !b && _;) {
                        var w = null,
                            y = 1 == _.nodeType ? window.getComputedStyle(_) : {};
                        if ("none" == y.display) return null;
                        if (_ == this.root || 9 == _.nodeType)
                            if (b = !0, _ == this.root || _ == t) n && !this.root ? !o || 0 == o.width && 0 == o.height ? (_ = null, w = null, v = null) : w = o : w = r;
                            else {
                                var I = f(_),
                                    E = I && c(I),
                                    T = I && this._computeTargetAndRootIntersection(I, E, r);
                                E && T ? (_ = I, w = a(E, T)) : (_ = null, v = null)
                            }
                        else {
                            var R = _.ownerDocument;
                            _ != R.body && _ != R.documentElement && "visible" != y.overflow && (w = c(_))
                        }
                        if (w && (s = w, h = v, void 0, void 0, void 0, void 0, void 0, void 0, u = Math.max(s.top, h.top), l = Math.min(s.bottom, h.bottom), p = Math.max(s.left, h.left), d = Math.min(s.right, h.right), m = l - u, v = (g = d - p) >= 0 && m >= 0 && {
                                top: u,
                                bottom: l,
                                left: p,
                                right: d,
                                width: g,
                                height: m
                            } || null), !v) break;
                        _ = _ && f(_)
                    }
                    return v
                }
            }, r.prototype._getRootRect = function() {
                var e;
                if (this.root) e = c(this.root);
                else {
                    var n = t.documentElement,
                        o = t.body;
                    e = {
                        top: 0,
                        left: 0,
                        right: n.clientWidth || o.clientWidth,
                        width: n.clientWidth || o.clientWidth,
                        bottom: n.clientHeight || o.clientHeight,
                        height: n.clientHeight || o.clientHeight
                    }
                }
                return this._expandRectByRootMargin(e)
            }, r.prototype._expandRectByRootMargin = function(t) {
                var e = this._rootMarginValues.map(function(e, n) {
                        return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                    }),
                    n = {
                        top: t.top - e[0],
                        right: t.right + e[1],
                        bottom: t.bottom + e[2],
                        left: t.left - e[3]
                    };
                return n.width = n.right - n.left, n.height = n.bottom - n.top, n
            }, r.prototype._hasCrossedThreshold = function(t, e) {
                var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                    o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (n !== o)
                    for (var i = 0; i < this.thresholds.length; i++) {
                        var r = this.thresholds[i];
                        if (r == n || r == o || r < n != r < o) return !0
                    }
            }, r.prototype._rootIsInDom = function() {
                return !this.root || l(t, this.root)
            }, r.prototype._rootContainsTarget = function(e) {
                return l(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
            }, r.prototype._registerInstance = function() {
                e.indexOf(this) < 0 && e.push(this)
            }, r.prototype._unregisterInstance = function() {
                var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
            }, window.IntersectionObserver = r, window.IntersectionObserverEntry = i
        }
    function i(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = u(t.rootBounds), this.boundingClientRect = u(t.boundingClientRect), this.intersectionRect = u(t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }), this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect,
            n = e.width * e.height,
            o = this.intersectionRect,
            i = o.width * o.height;
        this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
    }

    function r(t, e) {
        var n, o, i, r = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, i = null, function() {
            i || (i = setTimeout(function() {
                n(), i = null
            }, o))
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
            return t.value + t.unit
        }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
    }

    function s(t, e, n, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }

    function h(t, e, n, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }

    function c(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }), e) : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }

    function u(t) {
        return !t || "x" in t ? t : {
            top: t.top,
            y: t.top,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            right: t.right,
            width: t.width,
            height: t.height
        }
    }

    function a(t, e) {
        var n = e.top - t.top,
            o = e.left - t.left;
        return {
            top: n,
            left: o,
            height: e.height,
            width: e.width,
            bottom: n + e.height,
            right: o + e.width
        }
    }

    function l(t, e) {
        for (var n = e; n;) {
            if (n == t) return !0;
            n = f(n)
        }
        return !1
    }

    function f(e) {
        var n = e.parentNode;
        return 9 == e.nodeType && e != t ? p(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
    }

    function p(t) {
        try {
            return t.defaultView && t.defaultView.frameElement || null
        } catch (t) {
            return null
        }
    }
}();
! function(t, e, i) {
    "use strict";
    var h = function(e) {
            if ("contain" !== e && "cover" !== e) throw "jQuery.objectFit: observer must be initialized with contain or cover argument.";
            if (t(this).attr("data-object-fit", e).attr("data-object-ratio", this.offsetWidth / this.offsetHeight), -1 === f.indexOf(this)) {
                if (f.push(this), s) {
                    var i = this.parentElement;
                    t(i).data("jquery-object-fit-target", this), s.observe(i)
                }
                o.call(this)
            }
        },
        a = function() {
            if (s) {
                var e = this.parentElement;
                t(e).removeData("jquery-object-fit-target").removeData("jquery-object-fit-adjust-height"), s.unobserve(e)
            }
            var i = f.indexOf(this); - 1 !== i && f.splice(i, 1), t(this).removeAttr("data-object-fit-ratio").removeAttr("data-object-fit"), o.call(this)
        },
        o = function(e, i) {
            var h = t(this),
                a = h.attr("data-object-fit"),
                o = 1 * h.attr("data-object-ratio"),
                r = r || this.parentElement.offsetWidth,
                n = n || this.parentElement.offsetHeight,
                c = null,
                s = {
                    width: "",
                    height: ""
                };
            "contain" === a ? c = o > r / n ? "height" : "width" : "cover" === a && (c = o > r / n ? "width" : "height"), "width" === c ? (s.height = n + (n % 2 == 0 ? 0 : 1), s.width = Math.ceil(s.height * o)) : "height" === c && (s.width = r + (r % 2 == 0 ? 0 : 1), s.height = Math.ceil(s.width / o)), h.data("jquery-object-fit-adjust-height") && (s.height = s.height + h.data("jquery-object-fit-adjust-height"), s.width = Math.ceil(s.height * o)), h.css(s).trigger("objectfit", {
                target: this.parentElement,
                fit: a,
                ratio: o,
                width: s.width,
                height: s.height
            })
        },
        r = function() {
            h.call(this, "contain")
        },
        n = function(t) {
            h.call(this, "cover")
        },
        c = function(t) {
            f.forEach(function(t) {
                o.call(t)
            })
        },
        s = "function" == typeof e.ResizeObserver ? new ResizeObserver(function(e) {
            e.forEach(function(e) {
                var i = t(e.target).data("jquery-object-fit-target"),
                    h = e.width,
                    a = e.height;
                o.call(i, h, a)
            })
        }) : null,
        f = [];
    s || (t(e).on("resize", c), t(e).on("load", c)), t.fn.objectFit = function(e, i) {
        if ("destroy" === e) t(this).each(a);
        else if ("refresh" === e) t(this).each(o);
        else if ("contain" === e) t(this).each(r);
        else {
            if ("cover" !== e) throw "fill" === e ? "jQuery.objectFit: fill method not supported (use css instead)." : 0 === arguments.length ? "jQuery.objectFit: method missing (cover|contain|refresh|destroy)" : "jQuery.objectFit: unknown method " + e + ".";
            t(this).each(n)
        }
        i && t(this).each(function() {
            t(this).data("jquery-object-fit-adjust-height", i)
        })
    }
}(window.jQuery, window, document);
! function(e, o, a) {
    var t = function() {
        var e = a.createElement("script");
        e.id = "op3-youtube-api", e.src = "https://www.youtube.com/iframe_api";
        var o = a.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(e, o)
    };
    o.onYouTubeIframeAPIReady = function() {
        e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""][data-op3-video-url-youtube!=""]').each(function() {
            e(this).closest(".op3-element").attr("id");
            new YT.Player(e(this).find("iframe").get(0), {
                playerVars: {
                    modestbranding: 0,
                    controls: 0,
                    showinfo: 0,
                    wmode: "transparent",
                    branding: 0,
                    rel: 0,
                    autohide: 1
                },
                events: {
                    onReady: onVideoBackgroundPlayerReady,
                    onStateChange: onVideoBackgroundPlayerStateChange
                }
            })
        })
    }, o.onVideoBackgroundPlayerReady = function(e) {
        e.target.mute(), e.target.playVideo()
    }, o.onVideoBackgroundPlayerStateChange = function(e) {
        var o = e.target;
        if (1 === e.data) {
            var a = o.getDuration() - o.getCurrentTime();
            this.rewindTO && clearTimeout(this.rewindTO), this.rewindTO = setTimeout(function() {
                o.seekTo(0)
            }, 1e3 * (a - .5))
        }
    }, e(a).ready(function() {
        var o;
        (o = e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""]')).length > 0 && t(o), e('[data-op3-background="video"][data-op3-video-source!="youtube"][data-op3-src!=""] [data-op3-code]').objectFit("cover"), e('[data-op3-background="video"][data-op3-video-source="youtube"][data-op3-src!=""] [data-op3-code]').objectFit("cover", 130), e('[data-op3-background="video"] [data-op3-video-selfhosted]').each(function(o) {
            var t = this;
            t.autoplay && t.paused && e(a).one("touchstart", function() {
                t.play()
            })
        })
    })
}(jQuery, window, document);
! function(t, a, e) {
    var i = function(t) {
            var a = t.attr("data-op-animation-trigger");
            if (a && "none" !== a) {
                var e = a.indexOf("load") > -1 ? "load" : "scroll",
                    i = t.closest(".op3-element").attr("data-op-animation-state", "enter").attr("data-op-animation-style", t.attr("data-op-animation-style")),
                    o = 0,
                    r = parseFloat(t.attr("data-op-timer-minutes")),
                    s = parseFloat(t.attr("data-op-timer-seconds"));
                r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, a.indexOf("delay") > -1 && (o = 1e3 * (60 * r + s)), i.attr("data-op-timeout", o), n[e](i, o), "load" === a && "1" === t.attr("data-op-animation-loop") && n.scroll(i, o)
            }
        },
        n = {
            load: function(t, a) {
                setTimeout(function() {
                    t.attr("data-op-element-hidden", 0), t.get(0).offsetHeight, t.attr("data-op-animation-state", "enter").attr("data-op-visibility-hidden", 0), t.get(0).offsetHeight, t.attr("data-op-animation-state", "enter enter-active")
                }, a)
            },
            scroll: function(t, a) {
                OP3.AnimationsDelay.observer.observe(t.get(0))
            }
        },
        o = function(a, e) {
            a.forEach(function(a) {
                var e = t(a.target),
                    i = "1" === e.find(" > [data-op-animation-loop]").attr("data-op-animation-loop"),
                    n = parseFloat(e.attr("data-op-timeout"));
                a.isIntersecting ? (setTimeout(function() {
                    e.attr("data-op-animation-state", "enter enter-active").attr("data-op-visibility-hidden", 0)
                }, n), i || OP3.AnimationsDelay.observer.unobserve(a.target)) : i && a.intersectionRatio <= 0 && "enter enter-active" === e.attr("data-op-animation-state") && (OP3.AnimationsDelay.observer.unobserve(a.target), e.attr("data-op-animation-state", "enter").attr("data-op-visibility-hidden", 1), setTimeout(function() {
                    OP3.AnimationsDelay.observer.observe(e.get(0))
                }, 700))
            })
        };
    t(e).ready(function() {
        OP3.AnimationsDelay = {}, OP3.AnimationsDelay.observer = new IntersectionObserver(o), t("[data-op-animation-trigger]").each(function() {
            i(t(this))
        })
    })
}(jQuery, window, document);
! function(e, t, i) {
    var n;
    OP3.Sticky = {}, OP3.Sticky.elements = {}, OP3.Sticky.isInitialized = !1;
    var a, l = function(t) {
        var i = t.parent(),
            a = function(t) {
                var i, a, l = t.attr("data-op3-uuid"),
                    o = t.find(" > [data-op3-sticky]");
                switch (o.attr("data-op3-sticky-until")) {
                    case "1":
                        i = "container", 0 === (a = t.parent().closest(".op3-element")).length && (a = t.closest("[data-op3-children]"));
                        break;
                    case "2":
                        i = "element";
                        break;
                    default:
                        i = "page"
                }
                var s = o.attr("data-op3-sticky-active-desktop"),
                    r = o.attr("data-op3-sticky-active-tablet"),
                    c = o.attr("data-op3-sticky-active-mobile"),
                    d = o.attr("data-op3-sticky-until-element"),
                    m = d ? e("." + o.attr("data-op3-sticky-until-element")) : null,
                    p = parseInt(o.attr("data-op3-sticky-top-desktop"), 10) || 0,
                    u = parseInt(o.attr("data-op3-sticky-top-tablet"), 10),
                    f = parseInt(o.attr("data-op3-sticky-top-mobile"), 10);
                return {
                    uuid: l,
                    $element: t,
                    $container: a,
                    isFixed: !1,
                    desktop: "1" === s || "" === s,
                    tablet: "1" === r || "" === r,
                    mobile: "1" === c,
                    top: {
                        desktop: p,
                        tablet: isNaN(u) ? "" : u,
                        mobile: isNaN(f) ? "" : f
                    },
                    until: i,
                    untilSelector: d,
                    $untilElement: m,
                    adjust: n.height() || 0
                }
            }(i);
        a.blockSize = i.outerHeight(), OP3.Sticky.observer && OP3.Sticky.observer.observe(i.get(0)), OP3.Sticky.elements[a.uuid] = a, d()
    };
    OP3.Sticky.init = l;
    var o = function(t) {
            clearTimeout(a), a = setTimeout(function() {
                t.forEach(function(t) {
                    var i = e(t.target),
                        n = i.attr("data-op3-element-type"),
                        a = i.attr("data-op3-uuid");
                    "row" !== n && "section" !== n || OP3.Sticky.elements[a].blockSize === i.outerHeight() || (OP3.Sticky.elements[a].blockSize = i.outerHeight(), setTimeout(c))
                })
            }, 100)
        },
        s = function(e) {
            e.next(".op3-sticky-filler").remove(), e.css({
                position: "",
                top: "",
                left: "",
                zIndex: "",
                width: "",
                transform: ""
            })
        },
        r = function(e) {
            var t = e.parent(),
                i = t.attr("data-op3-uuid");
            s(t), OP3.Sticky.observer && OP3.Sticky.observer.unobserve(t.get(0)), delete OP3.Sticky.elements[i]
        };
    OP3.Sticky.destroy = r;
    OP3.Sticky.refresh = function(e) {
        r(e), l(e)
    };
    var c = function() {
        d()
    };
    OP3.Sticky.reposition = c;
    var d = function(n) {
            var a = "mobile";
            t.matchMedia("screen and (min-width: 767px)").matches && (a = "tablet"), t.matchMedia("screen and (min-width: 1023px)").matches && (a = "desktop"), OP3.Sticky.isInitialized && p(), Object.keys(OP3.Sticky.elements).forEach(function(n, l) {
                var o = OP3.Sticky.elements[n],
                    r = o.isFixed,
                    c = t.pageYOffset,
                    d = o.$element.offset().top,
                    m = o.adjust,
                    p = o.top.desktop + m,
                    u = parseInt(o.$element.css("margin-top"), 10),
                    f = o.$filler ? o.$filler.offset().top : 0;
                if ("tablet" === a && "" !== o.top.tablet && (p = o.top.tablet + m), "mobile" === a && "" === o.top.mobile && o.top.tablet && (p = o.top.tablet + m), "mobile" === a && "" !== o.top.mobile && (p = o.top.mobile + m), !o[a]) {
                    if (!o.isFixed) return;
                    return s(o.$element), o.isFixed = !1, void(o.$filler = null)
                }
                if (!r && c >= d - p) {
                    var k = e('<div class="op3-sticky-filler" />').height(o.$element.outerHeight() + u);
                    o.$element.after(k), o.$element.is(":visible") && o.$element.css("width", o.$element.outerWidth() + "px"), o.$element.css({
                        position: "fixed",
                        top: p - u + "px",
                        left: o.$element.offset().left + "px",
                        zIndex: 1e3 - l,
                        transform: ""
                    }), o.$filler = k, o.isFixed = !0, r = !0
                } else r && c < f - p + u && (p = "", s(o.$element), o.isFixed = !1, r = !1, o.$filler = null);
                var y, b, v, h = 0;
                if (r && "page" === o.until) {
                    v = o.$element.data("translateY") || 0;
                    var $ = o.$element.offset().top + o.$element.outerHeight();
                    $ > i.body.clientHeight + v && (h = v - ($ - i.body.clientHeight), o.$element.data("translateY", h))
                }
                r && "container" === o.until && (y = o.$container.get(0).getClientRects(), b = o.$element.get(0).getClientRects(), (h = (v = o.$element.data("translateY") || 0) - (b[0].bottom - y[0].bottom)) > 0 && (h = 0), o.$element.data("translateY", h)), r && "element" === o.until && o.untilSelector && o.$untilElement.length > 0 && (rectsElementUntil = o.$untilElement.get(0).getClientRects(), b = o.$element.get(0).getClientRects(), (h = (v = o.$element.data("translateY") || 0) - (b[0].bottom - rectsElementUntil[0].top)) > 0 && (h = 0), o.$element.data("translateY", h)), r && o.$element.css({
                    transform: "translateY(" + h + "px)"
                })
            })
        },
        m = function(e) {
            Object.keys(OP3.Sticky.elements).forEach(function(e, t) {
                var i = OP3.Sticky.elements[e];
                s(i.$element), i.isFixed = !1, i.$filler = null
            }), d()
        },
        p = function() {
            var t = {};
            e('[data-op3-sticky="1"]').each(function(i) {
                var n = e(this).closest(".op3-element").attr("data-op3-uuid");
                OP3.Sticky.elements[n];
                t[n] = OP3.Sticky.elements[n]
            }), OP3.Sticky.elements = t
        };
    OP3.Sticky.sortElements = p, e(i).ready(function() {
        ! function() {
            var i = e('[data-op3-sticky="1"]');
            if (n = e("#wpadminbar"), 0 !== i.length || "designer" === OP3.layer) {
                if (t.document.addEventListener("scroll", d, {
                        passive: !0
                    }), t.matchMedia("screen and (max-width: 1024px)").matches) try {
                    t.matchMedia("(orientation: portrait)").addListener(m)
                } catch (e) {} else t.addEventListener("resize", m, {
                    passive: !0
                });
                t.ResizeObserver && (OP3.Sticky.observer = new ResizeObserver(o)), OP3.bind && OP3.bind("paddingdragend", c), i.each(function() {
                    l(e(this))
                }), OP3.Sticky.isInitialized = !0
            }
        }()
    })
}(jQuery, window, document);
! function(e, t, i) {
    "use strict";
    if (void 0 === e) throw "Missing dependency: jQuery\nhttps://code.jquery.com/";
    var s = function(e, t) {
        if (!(this instanceof s)) throw "SimpleNavTree: SimpleNavTree is a constructor.";
        this._element = e, this._options = t, this._init()
    };
    e.extend(s.prototype, {
        _defaults: {
            eventTrigger: "hover",
            ulSelector: "ul",
            liSelector: "li",
            dropdownArrowSelector: ".jquery-simple-nav-tree-arrow",
            collapseDelay: 0,
            eventTriggerAttribute: "data-trigger"
        },
        _init: function() {
            if (this._element = e(this._element).data("jquery-simple-nav-tree", this).addClass("jquery-simple-nav-tree").get(0), !(this._element instanceof Node)) throw "SimpleNavTree: element argument must be of type Node.";
            for (var t in this._options = e.extend({}, this._defaults, this._options), this._options) t in this._defaults || delete this._options[t];
            this.$ui = {
                document: e(this._element.ownerDocument),
                element: e(this._element),
                ul: e(this._element).find(this._options.ulSelector).addClass("jquery-simple-nav-tree-ul"),
                li: e(this._element).find(this._options.liSelector).addClass("jquery-simple-nav-tree-li")
            }, this._uuid = this.$ui.element.attr("id") || this._getUuid(), this._bind()
        },
        destroy: function() {
            this._unbind(), this.$ui.element.removeData("jquery-simple-nav-tree").removeClass("jquery-simple-nav-tree"), this._element = null, this._options = null, delete this.$ui, delete this._uuid
        },
        _getUuid: function() {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", i = 0; i < 8; i++) t += e.charAt(Math.floor(Math.random() * e.length));
            var s = this.$ui.document.data("jquery-simple-nav-tree-uuids");
            return s || (s = [], this.$ui.document.data("jquery-simple-nav-tree-uuids", s)), -1 !== s.indexOf(t) ? this._getUuid() : (s.push(t), t)
        },
        _bind: function() {
            this._unbind();
            var e = ".jquery-simple-nav-tree-" + this._uuid,
                t = this._options.eventTrigger;
            "click" !== t && "auto" !== t || (this.$ui.element.on("click" + e, this._options.liSelector, this._handleListClick.bind(this)), this.$ui.document.on("click" + e, this._handleDocumentClick.bind(this))), "hover" !== t && "auto" !== t || this.$ui.element.on("mouseenter" + e, this._options.liSelector, this._handleListMouseEnter.bind(this)).on("mouseleave" + e, this._options.liSelector, this._handleListMouseLeave.bind(this))
        },
        _unbind: function() {
            e(null).add(this.$ui.element).add(this.$ui.document).off(".jquery-simple-nav-tree-" + this._uuid)
        },
        toggle: function(t) {
            var i = e(t).closest(this._options.liSelector).first();
            i.length && (i.is(".jquery-simple-nav-tree-expand") ? this.collapse(i) : this.expand(i))
        },
        expand: function(t) {
            var s = e(t).closest(this._options.liSelector).first();
            if (s.length) {
                var n = s.parents(this._options.liSelector),
                    o = s.find(this._options.liSelector);
                this.$ui.li.not(s).not(n).not(o).removeClass("jquery-simple-nav-tree-expand"), e(null).add(s).add(n).addClass("jquery-simple-nav-tree-expand");
                var l = s.find(this._options.ulSelector).first(),
                    r = l.get(0).getBoundingClientRect(),
                    a = i.documentElement.getBoundingClientRect();
                r.x + r.width > a.width && l.addClass("jquery-simple-nav-tree-expand-flip")
            }
        },
        collapse: function(t, i) {
            var s = e(t).closest(this._options.liSelector).first();
            if (s.length) {
                var n = s.find(this.$ui.li);
                (n = n.add(s)).removeClass("jquery-simple-nav-tree-expand")
            }
        },
        collapseAll: function() {
            e(this.$ui.li).removeClass("jquery-simple-nav-tree-expand")
        },
        _handleListMouseEnter: function(t) {
            "auto" === this._options.eventTrigger && "hover" !== e(this._element).attr(this._options.eventTriggerAttribute) || (this._hoverCollapseInterval && this._hoverCollapseDelay && clearInterval(this._hoverCollapseInterval), this.expand(t.currentTarget))
        },
        _handleListMouseLeave: function(t) {
            "auto" === this._options.eventTrigger && "hover" !== e(this._element).attr(this._options.eventTriggerAttribute) || (this._hoverCollapseInterval && this._hoverCollapseDelay && clearInterval(this._hoverCollapseInterval), this._hoverCollapseDelay = function(e) {
                this.collapse(e), clearInterval(this._hoverCollapseInterval), delete this._hoverCollapseInterval, delete this._hoverCollapseDelay
            }.bind(this, t.currentTarget), this._hoverCollapseInterval = setTimeout(this._hoverCollapseDelay, this._options.collapseDelay))
        },
        _handleListClick: function(t) {
            if ("auto" !== this._options.eventTrigger || "click" === e(this._element).attr(this._options.eventTriggerAttribute)) {
                var i = e(t.currentTarget).closest(this._options.liSelector).first();
                i.length && (i.is(".jquery-simple-nav-tree-expand") ? this.collapse(i, !0) : this.expand(i), t.stopPropagation(), e(t.target).is(this._options.dropdownArrowSelector) && t.preventDefault())
            }
        },
        _handleDocumentClick: function(t) {
            if ("auto" !== this._options.eventTrigger || "click" === e(this._element).attr(this._options.eventTriggerAttribute)) {
                var i = e(t.target);
                i.closest(this.$ui.li).length || (this.collapseAll(), i.is(this._options.dropdownArrowSelector) && t.preventDefault())
            }
        }
    }), e.fn.simpleNavTree = function(t) {
        var i = e(this),
            n = Array.prototype.slice.call(arguments, 1);
        return i.each(function() {
            var o = e(this).data("jquery-simple-nav-tree");
            if (o || (o = new s(this, "object" == typeof t ? t : {})), "string" == typeof t) {
                if (!("_" !== t.substr(0, 1) && t in o && "function" == typeof o[t])) throw "SimpleNavTree: no method named '" + t + "'";
                var l = o[t].apply(o, n);
                if (void 0 !== l) return i = l, !1
            }
        }), i
    }
}(jQuery, window, document);
! function(e, t, n) {
    "use strict";
    e(function() {
        var n = function(e) {
                e.hasClass("op3-hamburger-is-animating") || (e.addClass("op3-hamburger-animate-out"), setTimeout(function() {
                    e.removeClass("op3-hamburger-show op3-hamburger-animate-in op3-hamburger-animate-out op3-hamburger-is-animating")
                }, 600))
            },
            o = function(e) {
                var t = "hover";
                "none" !== e.find(".op3-hamburger").css("display") && (t = "click"), e.attr("data-op3-simplenavtree-trigger", t)
            };
        e(t).on("resize", function() {
            e('.op3-element[data-op3-element-type="treemenu"]').each(function() {
                o(e(this))
            })
        }), e('.op3-element[data-op3-element-type="treemenu"]').attr("data-op3-simplenavtree-trigger", "hover").simpleNavTree({
            ulSelector: ".op3-treemenuitem-children-content",
            liSelector: ".op3-treemenuitem-content",
            dropdownArrowSelector: ".op3-dropdown-icon",
            collapseDelay: 600,
            eventTrigger: "auto",
            eventTriggerAttribute: "data-op3-simplenavtree-trigger"
        }).on("click", ".op3-treemenuitem-link", function(t) {
            !e(t.target).is(".op3-dropdown-icon") && e(this).attr("href").indexOf("#") > -1 && n(e(this).closest(".op3-treemenu-content").find(" > .op3-hamburger"))
        }).each(function() {
            o(e(this))
        }).find(".op3-hamburger").on("click", function(t) {
            var o, r = e(this);
            (t.preventDefault(), r.hasClass("op3-hamburger-show")) ? n(r): (o = r).hasClass("op3-hamburger-is-animating") || (o.addClass("op3-hamburger-show op3-hamburger-is-animating"), setTimeout(function() {
                o.addClass("op3-hamburger-animate-in")
            }), setTimeout(function() {
                o.removeClass("op3-hamburger-is-animating")
            }, 600))
        }).siblings(".op3-hamburger-close").on("click", function(t) {
            t.preventDefault(), n(e(this).siblings(".op3-hamburger"))
        })
    })
}(jQuery, window, document);