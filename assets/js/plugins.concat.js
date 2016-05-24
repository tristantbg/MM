// jQuery RoyalSlider plugin. Custom build. Copyright 2011-2015 Dmitry Semenov http://dimsemenov.com
// http://dimsemenov.com/private/home.php?build=bullets_thumbnails_tabs_fullscreen_autoplay_video_animated-blocks_auto-height_global-caption_active-class_deeplinking_visible-nearby
// jquery.royalslider v9.5.7
(function(n) {
    function v(b, f) {
        var c, a = this,
            e = window.navigator,
            g = e.userAgent.toLowerCase();
        a.uid = n.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var d = document.createElement("div").style,
            h = ["webkit", "Moz", "ms", "O"],
            k = "",
            l = 0,
            q;
        for (c = 0; c < h.length; c++) q = h[c], !k && q + "Transform" in d && (k = q), q = q.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[q + "RequestAnimationFrame"], window.cancelAnimationFrame = window[q + "CancelAnimationFrame"] || window[q + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - l)),
                e = window.setTimeout(function() {
                    a(c + d)
                }, d);
            l = c + d;
            return e
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        });
        a.isIPAD = g.match(/(ipad)/);
        a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
        c = function(a) {
            a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }(g);
        h = {};
        c.browser && (h[c.browser] = !0, h.version = c.version);
        h.chrome && (h.webkit = !0);
        a._a = h;
        a.isAndroid = -1 < g.indexOf("android");
        a.slider = n(b);
        a.ev = n(a);
        a._b = n(document);
        a.st = n.extend({}, n.fn.royalSlider.defaults, f);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        !a.st.allowCSS3 || h.webkit && !a.st.allowCSS3OnWebkit || (c = k + (k ? "T" : "t"), a._e = c + "ransform" in d && c + "ransition" in d, a._e && (a._f = k + (k ? "P" : "p") + "erspective" in d));
        k = k.toLowerCase();
        a._g = "-" + k + "-";
        a._h = "vertical" === a.st.slidesOrientation ? !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        n.each(n.rsModules, function(b, c) {
            "uid" !== b && c.call(a)
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function() {
            a._s(this, !0)
        });
        a.st.randomizeSlides && a.slides.sort(function() {
            return .5 - Math.random()
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId > a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.pointerMultitouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        d = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 = 6 > a.numSlides ? a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = d = n(d + "</div></div>");
        var m = a.ns,
            k = function(b, c, d, e, f) {
                a._j1 = b + c + m;
                a._k1 = b + d + m;
                a._l1 = b + e + m;
                f && (a._m1 = b + f + m)
            };
        c = e.pointerEnabled;
        a.pointerEnabled = c || e.msPointerEnabled;
        a.pointerEnabled ? (a.hasTouch = !1, a._n1 = .2, a.pointerMultitouch = Boolean(1 < e[(c ? "m" : "msM") + "axTouchPoints"]), c ? k("pointer", "down", "move", "up", "cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 = a._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + m, a._k1 += " touchmove" + m, a._l1 += " touchend" + m, a._m1 += " touchcancel" + m, a._n1 = .5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = .2));
        a.st.sliderDrag && (a._f1 = !0, h.msie || h.opera ? a._g1 = a._h1 = "move" : h.mozilla ? (a._g1 = "-moz-grab", a._h1 = "-moz-grabbing") : h.webkit && -1 != e.platform.indexOf("Mac") && (a._g1 = "-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(d);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.pointerEnabled && a._p1.css((c ? "" : "-ms-") + "touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = n('<div class="rsPreloader"></div>');
        e = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (h.webkit && !h.chrome && a.slider.addClass("rsWebkit3d"), a._y1 = "translate3d(", a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, e.css(h))) : (a._x1 = "left", a._w1 = "top");
        var p;
        n(window).on("resize" + a.ns, function() {
            p && clearTimeout(p);
            p = setTimeout(function() {
                a.updateSliderSize()
            }, 50)
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        a.st.arrowsNavHideOnTouch && (a.hasTouch || a.pointerMultitouch) && (a.st.arrowsNav = !1);
        a.st.arrowsNav && (e = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e), a._c2 = e.children(".rsArrowLeft").click(function(b) {
            b.preventDefault();
            a.prev()
        }), a._d2 = e.children(".rsArrowRight").click(function(b) {
            b.preventDefault();
            a.next()
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), e.one("mousemove.arrowshover", function() {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden")
        }), e.hover(function() {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
        }, function() {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
        })), a.ev.on("rsOnUpdateNav", function() {
            a._f2()
        }), a._f2());
        if (a.hasTouch && a.st.sliderTouch || !a.hasTouch && a.st.sliderDrag) a._p1.on(a._j1, function(b) {
            a._g2(b)
        });
        else a.dragSuccess = !1;
        var r = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        a._p1.click(function(b) {
            if (!a.dragSuccess) {
                var c = n(b.target).attr("class");
                if (-1 !== n.inArray(c, r) && a.toggleVideo()) return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (n(b.target).closest(".rsNoDrag", a._r1).length) return !0;
                    a._i2(b)
                }
                a.ev.trigger("rsSlideClick", b)
            }
        }).on("click.rs", "a", function(b) {
            if (a.dragSuccess) return !1;
            a._h2 = !0;
            setTimeout(function() {
                a._h2 = !1
            }, 3)
        });
        a.ev.trigger("rsAfterInit")
    }
    n.rsModules || (n.rsModules = {
        uid: 0
    });
    v.prototype = {
        constructor: v,
        _i2: function(b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev()
        },
        _t: function() {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop) 2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b
        },
        _s: function(b, f) {
            function c(b, c) {
                c ? g.images.push(b.attr(c)) : g.images.push(b.text());
                if (h) {
                    h = !1;
                    g.caption = "src" === c ? b.attr("alt") : b.contents();
                    g.image = g.images[0];
                    g.videoURL = b.attr("data-rsVideo");
                    var d = b.attr("data-rsw"),
                        e = b.attr("data-rsh");
                    "undefined" !== typeof d && !1 !== d && "undefined" !== typeof e && !1 !== e ? (g.iW = parseInt(d, 10), g.iH = parseInt(e, 10)) : a.st.imgWidth && a.st.imgHeight && (g.iW = a.st.imgWidth, g.iH = a.st.imgHeight)
                }
            }
            var a = this,
                e, g = {},
                d, h = !0;
            b = n(b);
            a._k2 = b;
            a.ev.trigger("rsBeforeParseNode", [b, g]);
            if (!g.stopParsing) return b = a._k2, g.id = a._r, g.contentAdded = !1, a._r++, g.images = [], g.isBig = !1, g.hasCover || (b.hasClass("rsImg") ? (d = b, e = !0) : (d = b.find(".rsImg"), d.length && (e = !0)), e ? (g.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function() {
                var a = n(this);
                a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a)
            })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (g.caption = d.remove()), g.content = b, a.ev.trigger("rsAfterParseNode", [b, g]), f && a.slides.push(g), 0 === g.images.length && (g.isLoaded = !0, g.isRendered = !1, g.isLoading = !1, g.images = null), g
        },
        _b2: function() {
            var b = this,
                f, c, a = function(a) {
                    37 === a ? b.prev() : 39 === a && b.next()
                };
            b._b.on("keydown" + b.ns, function(e) {
                if (!b.st.keyboardNavEnabled) return !0;
                if (!(b._l2 || (c = e.keyCode, 37 !== c && 39 !== c || f))) {
                    if (document.activeElement && /(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName)) return !0;
                    b.isFullscreen && e.preventDefault();
                    a(c);
                    f = setInterval(function() {
                        a(c)
                    }, 700)
                }
            }).on("keyup" + b.ns, function(a) {
                f && (clearInterval(f), f = null)
            })
        },
        goTo: function(b, f) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f)
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            n.removeData(this.slider, "royalSlider");
            n(window).off("resize" + this.ns);
            this.loadingTimeout && clearTimeout(this.loadingTimeout);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null
        },
        _n2: function(b, f) {
            function c(c, f, g) {
                c.isAdded ? (a(f, c), e(f, c)) : (g || (g = d.slidesJQ[f]), c.holder ? g = c.holder : (g = d.slidesJQ[f] = n(g), c.holder = g), c.appendOnLoaded = !1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded = !0)
            }

            function a(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
            }

            function e(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
            }

            function g(a) {
                if (l) {
                    if (a > q - 1) return g(a - q);
                    if (0 > a) return g(q + a)
                }
                return a
            }
            var d = this,
                h, k, l = d._z,
                q = d.numSlides;
            if (!isNaN(f)) return g(f);
            var m = d.currSlideId,
                p, r = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
                t = Math.min(2, r),
                w = !1,
                v = !1,
                u;
            for (k = m; k < m + 1 + t; k++)
                if (u = g(k), (h = d.slides[u]) && (!h.isAdded || !h.positionSet)) {
                    w = !0;
                    break
                }
            for (k = m - 1; k > m - 1 - t; k--)
                if (u = g(k), (h = d.slides[u]) && (!h.isAdded || !h.positionSet)) {
                    v = !0;
                    break
                }
            if (w)
                for (k = m; k < m + r + 1; k++) u = g(k), p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides, (h = d.slides[u]) && c(h, u);
            if (v)
                for (k = m - 1; k > m - 1 - r; k--) u = g(k), p = Math.floor((d._u - (m - k)) / q) * q, (h = d.slides[u]) && c(h, u);
            if (!b)
                for (t = g(m - r), m = g(m + r), r = t > m ? 0 : t, k = 0; k < q; k++) t > m && k > t - 1 || !(k < r || k > m) || (h = d.slides[k]) && h.holder && (h.holder.detach(), h.isAdded = !1)
        },
        setItemHtml: function(b, f) {
            var c = this,
                a = function() {
                    if (!b.images) b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
                    else if (!b.isLoading) {
                        var a, f;
                        b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
                        a && !a.is("img") && a.each(function() {
                            var a = n(this),
                                c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = n(c) : a.replaceWith(c)
                        });
                        a = f ? b.content : b.content.find("img.rsImg");
                        k();
                        a.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig) n("<img />").on("load.rs error.rs", function(a) {
                            n(this).off("load.rs error.rs");
                            e([this], !0)
                        }).attr("src", b.image);
                        else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            a = function(a) {
                                n(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && e(b.loaded, !1)
                            };
                            for (var g = 0; g < b.images.length; g++) {
                                var h = n("<img />");
                                b.numStartedLoad++;
                                h.on("load.rs error.rs", a).attr("src", b.images[g])
                            }
                        }
                    }
                },
                e = function(a, c) {
                    if (a.length) {
                        var d = a[0];
                        if (c !== b.isBig)(d = b.holder.children()) && 1 < d.length && l();
                        else if (b.iW && b.iH) g();
                        else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH) g();
                        else {
                            var e = new Image;
                            e.onload = function() {
                                e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function() {
                                    e.width && (b.iW = e.width, b.iH = e.height);
                                    g()
                                }, 1E3)
                            };
                            e.src = d.src
                        }
                    } else g()
                },
                g = function() {
                    b.isLoaded = !0;
                    b.isLoading = !1;
                    d();
                    l();
                    h()
                },
                d = function() {
                    if (!b.isAppended && c.ev) {
                        var a = c.st.visibleNearby,
                            d = b.id - c._o;
                        f || b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 || c._l2) || -1 !== d && 1 !== d) || (a = {
                            visibility: "visible",
                            opacity: 0
                        }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                            b.content.css("opacity", 1)
                        }, 16));
                        b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                        b.isAppended = !0;
                        b.isLoaded && (c._q2(b), h());
                        b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                            c.ev.trigger("rsMaybeSizeReady", b)
                        }, 100))
                    }
                },
                h = function() {
                    !b.loadedTriggered && c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
                },
                k = function() {
                    c.st.usePreloader && b.holder.html(c._q1.clone())
                },
                l = function(a) {
                    c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
                };
            b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
        },
        _p2: function(b, f, c) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1
        },
        _g2: function(b, f) {
            var c = this,
                a, e = "touchstart" === b.type;
            c._s2 = e;
            c.ev.trigger("rsDragStart");
            if (n(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
            !f && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2) e && (c._v2 = !0);
            else {
                e && (c._v2 = !1);
                c._w2();
                if (e) {
                    var g = b.originalEvent.touches;
                    if (g && 0 < g.length) a = g[0], 1 < g.length && (c._v2 = !0);
                    else return
                } else b.preventDefault(), a = b, c.pointerEnabled && (a = a.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function(a) {
                    c._x2(a, f)
                }).on(c._l1, function(a) {
                    c._y2(a, f)
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = a.pageX;
                c._c3 = a.pageY;
                c._d3 = c._v = (f ? c._e3 : c._h) ? a.pageX : a.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = f ? c._i3 : c._p;
                c._j3 = (new Date).getTime();
                if (e) c._e1.on(c._m1, function(a) {
                    c._y2(a, f)
                })
            }
        },
        _k3: function(b, f) {
            if (this._l3) {
                var c = this._m3,
                    a = b.pageX - this._b3,
                    e = b.pageY - this._c3,
                    g = this._h3 + a,
                    d = this._h3 + e,
                    h = f ? this._e3 : this._h,
                    g = h ? g : d,
                    d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== e && (this._g3 = 0 < e ? 1 : -1);
                d = h ? this._b3 : this._c3;
                a = h ? a : e;
                f ? g > this._n3 ? g = this._h3 + a * this._n1 : g < this._o3 && (g = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId && 0 < d - this._d3 && (g = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (g = this._h3 + a * this._n1));
                this._h3 = g;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                f ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(b, f) {
            var c = this,
                a, e = "touchmove" === b.type;
            if (!c._s2 || e) {
                if (e) {
                    if (c._r3) return;
                    var g = b.originalEvent.touches;
                    if (g) {
                        if (1 < g.length) return;
                        a = g[0]
                    } else return
                } else a = b, c.pointerEnabled && (a = a.originalEvent);
                c._a3 || (c._e && (f ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
                    c._l2 && (c._t3 = requestAnimationFrame(h), c._u3 && c._k3(c._u3, f))
                }());
                if (c._l3) b.preventDefault(), c._m3 = (new Date).getTime(), c._u3 = a;
                else if (g = f ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (g ? -7 : 7), 7 < a) {
                    if (g) b.preventDefault(), c._z2 = "x";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                } else if (-7 > a) {
                    if (!g) b.preventDefault(),
                        c._z2 = "y";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                }
            }
        },
        _v3: function(b, f) {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2(b)
        },
        _y2: function(b, f) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a
            }

            function a(a, b) {
                if (e._l || f) h = (-e._u - e._d1) * e._w, k = Math.abs(e._p - h), e._c = k / b, a && (e._c += 250), e._c = c(e._c), e._x3(h, !1)
            }
            var e = this,
                g, d, h, k;
            g = -1 < b.type.indexOf("touch");
            if (!e._s2 || g)
                if (e._s2 = !1, e.ev.trigger("rsDragRelease"), e._u3 = null, e._l2 = !1, e._r3 = !1, e._l3 = !1, e._m3 = 0, cancelAnimationFrame(e._t3), e._a3 && (f ? e._q3(e._h3) : e._l && e._p3(e._h3)), e._b.off(e._k1).off(e._l1), g && e._e1.off(e._m1), e._i1(), !e._a3 && !e._v2 && f && e._w3) {
                    var l = n(b.target).closest(".rsNavItem");
                    l.length && e.goTo(l.index())
                } else {
                    d = f ? e._e3 : e._h;
                    if (!e._a3 || "y" === e._z2 && d || "x" === e._z2 && !d)
                        if (!f && e._t2) {
                            e._t2 = !1;
                            if (e.st.navigateByClick) {
                                e._i2(e.pointerEnabled ? b.originalEvent : b);
                                e.dragSuccess = !0;
                                return
                            }
                            e.dragSuccess = !0
                        } else {
                            e._t2 = !1;
                            e.dragSuccess = !1;
                            return
                        }
                    else e.dragSuccess = !0;
                    e._t2 = !1;
                    e._z2 = "";
                    var q = e.st.minSlideOffset;
                    g = g ? b.originalEvent.changedTouches[0] : e.pointerEnabled ? b.originalEvent : b;
                    var m = d ? g.pageX : g.pageY,
                        p = e._d3;
                    g = e._v;
                    var r = e.currSlideId,
                        t = e.numSlides,
                        w = d ? e._f3 : e._g3,
                        v = e._z;
                    Math.abs(m - p);
                    g = m - g;
                    d = (new Date).getTime() - e._j3;
                    d = Math.abs(g) / d;
                    if (0 === w || 1 >= t) a(!0, d);
                    else {
                        if (!v && !f)
                            if (0 >= r) {
                                if (0 < w) {
                                    a(!0, d);
                                    return
                                }
                            } else if (r >= t - 1 && 0 > w) {
                            a(!0, d);
                            return
                        }
                        if (f) {
                            h = e._i3;
                            if (h > e._n3) h = e._n3;
                            else if (h < e._o3) h = e._o3;
                            else {
                                m = d * d / .006;
                                l = -e._i3;
                                p = e._y3 - e._z3 + e._i3;
                                0 < g && m > l ? (l += e._z3 / (15 / (m / d * .003)), d = d * l / m, m = l) : 0 > g && m > p && (p += e._z3 / (15 / (m / d * .003)), d = d * p / m, m = p);
                                l = Math.max(Math.round(d / .003), 50);
                                h += m * (0 > g ? -1 : 1);
                                if (h > e._n3) {
                                    e._a4(h, l, !0, e._n3, 200);
                                    return
                                }
                                if (h < e._o3) {
                                    e._a4(h, l, !0, e._o3, 200);
                                    return
                                }
                            }
                            e._a4(h, l, !0)
                        } else l = function(a) {
                            var b = Math.floor(a / e._w);
                            a - b * e._w > q && b++;
                            return b
                        }, p + q < m ? 0 > w ? a(!1, d) : (l = l(m - p), e._m2(e.currSlideId - l, c(Math.abs(e._p - (-e._u - e._d1 + l) * e._w) / d), !1, !0, !0)) : p - q > m ? 0 < w ? a(!1, d) : (l = l(p - m), e._m2(e.currSlideId + l, c(Math.abs(e._p - (-e._u - e._d1 - l) * e._w) / d), !1, !0, !0)) : a(!1, d)
                    }
                }
        },
        _p3: function(b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
        },
        updateSliderSize: function(b) {
            var f, c;
            if (this.slider) {
                if (this.st.autoScaleSlider) {
                    var a = this.st.autoScaleSliderWidth,
                        e = this.st.autoScaleSliderHeight;
                    this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", e / a * f), f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", a / e * c), c = this.slider.height()), f = this.slider.width())
                } else f = this.slider.width(),
                    c = this.slider.height();
                if (b || f != this.width || c != this.height) {
                    this.width = f;
                    this.height = c;
                    this._b4 = f;
                    this._c4 = c;
                    this.ev.trigger("rsBeforeSizeSet");
                    this.ev.trigger("rsAfterSizePropSet");
                    this._e1.css({
                        width: this._b4,
                        height: this._c4
                    });
                    this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                    this._d4 = this.st.imageScalePadding;
                    for (f = 0; f < this.slides.length; f++) b = this.slides[f], b.positionSet = !1, b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
                    if (this._e4)
                        for (f = 0; f < this._e4.length; f++) b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
                    this._n2();
                    this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                    this.ev.trigger("rsOnUpdateNav")
                }
                this._j2 = this._e1.offset();
                this._j2 = this._j2[this._i]
            }
        },
        appendSlide: function(b, f) {
            var c = this._s(b);
            if (isNaN(f) || f > this.numSlides) f = this.numSlides;
            this.slides.splice(f, 0, c);
            this.slidesJQ.splice(f, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
            f <= this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [c, f]);
            this._f4(f);
            f === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(b) {
            var f = this.slides[b];
            f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--, this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(b) {
            var f = this;
            b = f.numSlides;
            b = 0 >= f._u ? 0 : Math.floor(f._u / b);
            f.numSlides = f.slides.length;
            0 === f.numSlides ? (f.currSlideId = f._d1 = f._u = 0, f.currSlide = f._g4 = null) : f._u = b * f.numSlides + f.currSlideId;
            for (b = 0; b < f.numSlides; b++) f.slides[b].id = b;
            f.currSlide = f.slides[f.currSlideId];
            f._r1 = f.slidesJQ[f.currSlideId];
            f.currSlideId >= f.numSlides ? f.goTo(f.numSlides - 1) : 0 > f.currSlideId && f.goTo(0);
            f._t();
            f._l && f._p1.css(f._g + f._u1, "0ms");
            f._h4 && clearTimeout(f._h4);
            f._h4 = setTimeout(function() {
                f._l && f._p3((-f._u - f._d1) * f._w);
                f._n2();
                f._l || f._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14);
            f.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(b) {
            this._m2("next", this.st.transitionSpeed, !0, !b)
        },
        prev: function(b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b)
        },
        _m2: function(b, f, c, a, e) {
            var g = this,
                d, h, k;
            g.ev.trigger("rsBeforeMove", [b, a]);
            k = "next" === b ? g.currSlideId + 1 : "prev" === b ? g.currSlideId - 1 : b = parseInt(b, 10);
            if (!g._z) {
                if (0 > k) {
                    g._i4("left", !a);
                    return
                }
                if (k >= g.numSlides) {
                    g._i4("right", !a);
                    return
                }
            }
            g._r2 && (g._u2(!0), c = !1);
            h = k - g.currSlideId;
            k = g._o2 = g.currSlideId;
            var l = g.currSlideId + h;
            a = g._u;
            var n;
            g._z ? (l = g._n2(!1, l), a += h) : a = l;
            g._o = l;
            g._g4 = g.slidesJQ[g.currSlideId];
            g._u = a;
            g.currSlideId = g._o;
            g.currSlide = g.slides[g.currSlideId];
            g._r1 = g.slidesJQ[g.currSlideId];
            var l = g.st.slidesDiff,
                m = Boolean(0 < h);
            h = Math.abs(h);
            var p = Math.floor(k / g._y),
                r = Math.floor((k + (m ? l : -l)) / g._y),
                p = (m ? Math.max(p, r) : Math.min(p, r)) * g._y + (m ? g._y - 1 : 0);
            p > g.numSlides - 1 ? p = g.numSlides - 1 : 0 > p && (p = 0);
            k = m ? p - k : k - p;
            k > g._y && (k = g._y);
            if (h > k + l)
                for (g._d1 += (h - (k + l)) * (m ? -1 : 1), f *= 1.4, k = 0; k < g.numSlides; k++) g.slides[k].positionSet = !1;
            g._c = f;
            g._n2(!0);
            e || (n = !0);
            d = (-a - g._d1) * g._w;
            n ? setTimeout(function() {
                g._j4 = !1;
                g._x3(d, b, !1, c);
                g.ev.trigger("rsOnUpdateNav")
            }, 0) : (g._x3(d, b, !1, c), g.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(b, f, c, a, e) {
            function g() {
                var a;
                h && (a = h.data("rsTimeout")) && (h !== k && h.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), h.data("rsTimeout", ""));
                if (a = k.data("rsTimeout")) clearTimeout(a), k.data("rsTimeout", "")
            }
            var d = this,
                h, k, l = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] : n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function() {
                d._p3(b)
            }, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function() {
                l[d._g + d._u1] = "0ms";
                l.zIndex = 0;
                l.display = "none";
                h.data("rsTimeout", "");
                h.css(l);
                setTimeout(function() {
                    h.css("opacity", 0)
                }, 16)
            }, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout", setTimeout(function() {
                k.css(d._g + d._u1, d._c + "ms");
                k.data("rsTimeout", setTimeout(function() {
                    k.css("opacity", 1);
                    k.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, k.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function() {
                h.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = e ? setTimeout(function() {
                d.loadingTimeout = null;
                e.call()
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null;
                d._k4(f)
            }, d._c + 60)
        },
        _u2: function(b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l)
                if (!this._e) this._p1.stop(!0),
                    this._p = parseInt(this._p1.css(this._h ? this._x1 : this._w1), 10);
                else {
                    if (!b) {
                        b = this._p;
                        var f = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms");
                        b !== f && this._p3(f)
                    }
                }
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var b = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                f = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10)
        },
        _m4: function(b, f) {
            return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
        },
        _k4: function(b) {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(b, f) {
            var c = this,
                a = (-c._u - c._d1) * c._w;
            if (0 !== c.numSlides && !c._r2)
                if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, f);
                else if (c._l) {
                c._c = 200;
                var e = function() {
                    c._r2 = !1
                };
                c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function() {
                    c._r2 = !1;
                    c._x3(a, "", !1, !0, e)
                })
            }
        },
        _q2: function(b, f) {
            if (!b.isRendered) {
                var c = b.content,
                    a = "rsMainSlideImage",
                    e, g = n.isFunction(this.st.imageAlignCenter) ? this.st.imageAlignCenter(b) : this.st.imageAlignCenter,
                    d = n.isFunction(this.st.imageScaleMode) ? this.st.imageScaleMode(b) : this.st.imageScaleMode,
                    h;
                b.videoURL && (a = "rsVideoContainer", "fill" !== d ? e = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
                    width: "100%",
                    height: "100%"
                }), a = "rsMainSlideImage"));
                c.hasClass(a) || (c = c.find("." + a));
                if (c) {
                    var k = b.iW,
                        l = b.iH;
                    b.isRendered = !0;
                    if ("none" !== d || g) {
                        a = "fill" !== d ? this._d4 : 0;
                        h = this._b4 - 2 * a;
                        var q = this._c4 - 2 * a,
                            m, p, r = {};
                        "fit-if-smaller" === d && (k > h || l > q) && (d = "fit");
                        if ("fill" === d || "fit" === d) m = h / k, p = q / l, m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1, k = Math.ceil(k * m, 10), l = Math.ceil(l * m, 10);
                        "none" !== d && (r.width = k, r.height = l, e && c.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        g && (r.marginLeft = Math.floor((h - k) / 2) + a, r.marginTop = Math.floor((q - l) / 2) + a);
                        c.css(r)
                    }
                }
            }
        }
    };
    n.rsProto = v.prototype;
    n.fn.royalSlider = function(b) {
        var f = arguments;
        return this.each(function() {
            var c = n(this);
            if ("object" !== typeof b && b) {
                if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(f, 1))
            } else c.data("royalSlider") || c.data("royalSlider", new v(c, b))
        })
    };
    n.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    n.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    };
    n.extend(jQuery.easing, {
        easeInOutSine: function(b, f, c, a, e) {
            return -a / 2 * (Math.cos(Math.PI * f / e) - 1) + c
        },
        easeOutSine: function(b, f, c, a, e) {
            return a * Math.sin(f / e * (Math.PI / 2)) + c
        },
        easeOutCubic: function(b, f, c, a, e) {
            return a * ((f = f / e - 1) * f * f + 1) + c
        }
    })
})(jQuery, window);
// jquery.rs.bullets v1.0.1
(function(c) {
    c.extend(c.rsProto, {
        _i5: function() {
            var a = this;
            "bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function() {
                a._j5 = !0;
                a.slider.addClass("rsWithBullets");
                for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
                a._k5 = b = c(b + "</div>");
                a._l5 = b.appendTo(a.slider).children();
                a._k5.on("click.rs", ".rsNavItem", function(b) {
                    a._m5 || a.goTo(c(this).index())
                })
            }), a.ev.on("rsOnAppendSlide", function(b, c, d) {
                d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                a._l5 = a._k5.children()
            }), a.ev.on("rsOnRemoveSlide", function(b, c) {
                var d = a._l5.eq(c);
                d && d.length && (d.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function() {
                var b = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                b = a._l5.eq(b);
                b.addClass("rsNavSelected");
                a._n5 = b
            }))
        }
    });
    c.rsModules.bullets = c.rsProto._i5
})(jQuery);
// jquery.rs.thumbnails v1.0.8
(function(f) {
    f.extend(f.rsProto, {
        _h6: function() {
            var a = this;
            "thumbnails" === a.st.controlNavigation && (a._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, a.st.thumbs = f.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin = a.st.thumbs.spacing), a.ev.on("rsBeforeParseNode", function(a, b, c) {
                b = f(b);
                c.thumbnail = b.find(".rsTmb").remove();
                c.thumbnail.length ? c.thumbnail = f(document.createElement("div")).append(c.thumbnail).html() : (c.thumbnail = b.attr("data-rsTmb"), c.thumbnail || (c.thumbnail = b.find(".rsImg").attr("data-rsTmb")), c.thumbnail = c.thumbnail ? '<img src="' + c.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._k6()
            }), a._n5 = null, a.ev.on("rsOnUpdateNav", function() {
                var e = f(a._l5[a.currSlideId]);
                e !== a._n5 && (a._n5 && (a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), a._n5 = e.addClass("rsNavSelected"))
            }), a.ev.on("rsOnAppendSlide", function(e, b, c) {
                e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + b.thumbnail + "</div>";
                a._e && a._s3.css(a._g + "transition-duration", "0ms");
                c >= a.numSlides ? a._s3.append(e) : a._l5.eq(c).before(e);
                a._l5 = a._s3.children();
                a.updateThumbsSize(!0)
            }), a.ev.on("rsOnRemoveSlide", function(e, b) {
                var c = a._l5.eq(b);
                c && (a._e && a._s3.css(a._g + "transition-duration", "0ms"), c.remove(), a._l5 = a._s3.children(), a.updateThumbsSize(!0))
            }))
        },
        _k6: function() {
            var a = this,
                e = "rsThumbs",
                b = a.st.thumbs,
                c = "",
                g, d, h = b.spacing;
            a._j5 = !0;
            a._e3 = "vertical" === b.orientation ? !1 : !0;
            a._n6 = g = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
            a._i3 = 0;
            a._p6 = !1;
            a._m5 = !1;
            a._l6 = !1;
            a._q6 = b.arrows && b.navigation;
            d = a._e3 ? "Hor" : "Ver";
            a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
            c += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
            a._o6 = b.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var k = 0; k < a.numSlides; k++) d = a.slides[k], c += "<div" + g + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 + "</div>";
            c = f(c + "</div></div>");
            g = {};
            b.paddingTop && (g[a._e3 ? "paddingTop" : "paddingLeft"] = b.paddingTop);
            b.paddingBottom && (g[a._e3 ? "paddingBottom" : "paddingRight"] = b.paddingBottom);
            c.css(g);
            a._s3 = f(c).find("." + e + "Container");
            a._q6 && (e += "Arrow", b.arrowLeft ? a._r6 = b.arrowLeft : (a._r6 = f('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), c.append(a._r6)), b.arrowRight ? a._s6 = b.arrowRight : (a._s6 = f('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) + a._u6) * a._t6 + a.st.thumbs.firstMargin;
                a._a4(b > a._n3 ? a._n3 : b)
            }), a._s6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6 + a.st.thumbs.firstMargin;
                a._a4(b < a._o3 ? a._o3 : b)
            }), b.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), c.one("mousemove.rsarrowshover", function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }), c.hover(function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }, function() {
                a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0))
            })));
            a._k5 = c;
            a._l5 = a._s3.children();
            a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
            a.slider.append(c);
            a._w3 = !0;
            a._v6 = h;
            b.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
            a._k5.on("click.rs", ".rsNavItem", function(b) {
                a._m5 || a.goTo(f(this).index())
            });
            a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                a._w6 = a._e3 ? a._c4 : a._b4;
                a.updateThumbsSize(!0)
            });
            a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(b, c) {
                a.updateThumbsSize(!0, c)
            })
        },
        updateThumbsSize: function(a, e) {
            var b = this,
                c = b._l5.first(),
                f = {},
                d = b._l5.length;
            b._t6 = (b._e3 ? (c.outerWidth() + 30) : c.outerHeight()) + b._v6;
            b._y3 = d * b._t6 - b._v6;
            f[b._e3 ? "width" : "height"] = b._y3 + b._v6;
            b._z3 = b._e3 ? b._k5.outerWidth() : void 0 !== e ? e : b._k5.outerHeight();
            b._w3 && (b.isFullscreen || b.st.thumbs.fitInViewport) && (b._e3 ? b._c4 = b._w6 - b._k5.outerHeight() : b._b4 = b._w6 - b._k5.outerWidth());
            b._z3 && (b._o3 = -(b._y3 - b._z3) - b.st.thumbs.firstMargin, b._n3 = b.st.thumbs.firstMargin, b._u6 = Math.floor(b._z3 / b._t6), b._y3 < b._z3 ? (b.st.thumbs.autoCenter ? b._q3((b._z3 - b._y3) / 2 + (d*20)) : b._q3(b._n3), b.st.thumbs.arrows && b._r6 && (b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6 = !1, b._m5 = !1, b._k5.off(b._j1)) : b.st.thumbs.navigation && !b._l6 && (b._l6 = !0, !b.hasTouch && b.st.thumbs.drag || b.hasTouch && b.st.thumbs.touch) && (b._m5 = !0, b._k5.on(b._j1, function(a) {
                b._g2(a, !0)
            })), b._s3.css(f), a && e && b._m6(b.currSlideId, !0))
        },
        setThumbsOrientation: function(a, e) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
        },
        _q3: function(a) {
            this._i3 = a;
            this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
        },
        _a4: function(a, e, b, c, g) {
            var d = this;
            if (d._l6) {
                e || (e = d.st.thumbs.transitionSpeed);
                d._i3 = a;
                d._x6 && clearTimeout(d._x6);
                d._p6 && (d._e || d._s3.stop(), b = !0);
                var h = {};
                d._p6 = !0;
                d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] = b ? f.rsCSS3Easing[d.st.easeOut] : f.rsCSS3Easing[d.st.easeInOut], d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, b ? "easeOutCubic" : d.st.easeInOut));
                c && (d._i3 = c);
                d._y6();
                d._x6 = setTimeout(function() {
                    d._p6 = !1;
                    g && (d._a4(c, g, !0), g = null)
                }, e)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(a, e) {
            var b = 0,
                c, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                d = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (b = 1), d = -a + this._u6 - 2 + b, c = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 + this._n3) : c = this._n3, c !== this._i3 && (b = void 0 === c ? this._i3 : c, b > this._n3 ? this._q3(this._n3) : b < this._o3 ? this._q3(this._o3) : void 0 !== c && (e ? this._q3(c) : this._a4(c))), this._y6())
        }
    });
    f.rsModules.thumbnails = f.rsProto._h6
})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e) {
    e.extend(e.rsProto, {
        _f6: function() {
            var a = this;
            "tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function(a, d, b) {
                d = e(d);
                b.thumbnail = d.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._g6()
            }), a.ev.on("rsOnAppendSlide", function(c, d, b) {
                b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
                a._l5 = a._k5.children()
            }), a.ev.on("rsOnRemoveSlide", function(c, d) {
                var b = a._l5.eq(d);
                b && (b.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function() {
                var c = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                c = a._l5.eq(c);
                c.addClass("rsNavSelected");
                a._n5 = c
            }))
        },
        _g6: function() {
            var a = this,
                c;
            a._j5 = !0;
            c = '<div class="rsNav rsTabs">';
            for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
            c = e(c + "</div>");
            a._k5 = c;
            a._l5 = c.children(".rsNavItem");
            a.slider.append(c);
            a._k5.click(function(b) {
                b = e(b.target).closest(".rsNavItem");
                b.length && a.goTo(b.index())
            })
        }
    });
    e.rsModules.tabs = e.rsProto._f6
})(jQuery);
// jquery.rs.fullscreen v1.0.6
(function(c) {
    c.extend(c.rsProto, {
        _q5: function() {
            var a = this;
            a._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            };
            a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
            if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function() {
                a._s5()
            })
        },
        _s5: function() {
            var a = this;
            a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
            if (a.st.fullscreen.nativeFS) {
                var b = {
                        supportsFullScreen: !1,
                        isFullScreen: function() {
                            return !1
                        },
                        requestFullScreen: function() {},
                        cancelFullScreen: function() {},
                        fullScreenEventName: "",
                        prefix: ""
                    },
                    d = ["webkit", "moz", "o", "ms", "khtml"];
                if ("undefined" != typeof document.cancelFullScreen) b.supportsFullScreen = !0;
                else
                    for (var e = 0, f = d.length; e < f; e++)
                        if (b.prefix = d[e], "undefined" != typeof document[b.prefix + "CancelFullScreen"]) {
                            b.supportsFullScreen = !0;
                            break
                        }
                b.supportsFullScreen ? (a.nativeFS = !0, b.fullScreenEventName = b.prefix + "fullscreenchange" + a.ns, b.isFullScreen = function() {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, b.requestFullScreen = function(a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
                }, b.cancelFullScreen = function(a) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }, a._u5 = b) : a._u5 = !1
            }
            a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function() {
                a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen()
            }))
        },
        enterFullscreen: function(a) {
            var b = this;
            if (b._u5)
                if (a) b._u5.requestFullScreen(c("html")[0]);
                else {
                    b._b.on(b._u5.fullScreenEventName, function(a) {
                        b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0)
                    });
                    b._u5.requestFullScreen(c("html")[0]);
                    return
                }
            if (!b._w5) {
                b._w5 = !0;
                b._b.on("keyup" + b.ns + "fullscreen", function(a) {
                    27 === a.keyCode && b.exitFullscreen()
                });
                b._t5 && b._b2();
                a = c(window);
                b._x5 = a.scrollTop();
                b._y5 = a.scrollLeft();
                b._z5 = c("html").attr("style");
                b._a6 = c("body").attr("style");
                b._b6 = b.slider.attr("style");
                c("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                });
                b.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
                b.isFullscreen = !0;
                b._w5 = !1;
                b.updateSliderSize();
                b.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(a) {
            var b = this;
            if (b._u5) {
                if (!a) {
                    b._u5.cancelFullScreen(c("html")[0]);
                    return
                }
                b._b.off(b._u5.fullScreenEventName)
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.off("keyup" + b.ns + "fullscreen");
                b._t5 && b._b.off("keydown" + b.ns);
                c("html").attr("style", b._z5 || "");
                c("body").attr("style", b._a6 || "");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, a.slideId = -99, a.isBigLoaded = a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
                b.isFullscreen = !1;
                a = c(window);
                a.scrollTop(b._x5);
                a.scrollLeft(b._y5);
                b._w5 = !1;
                b.slider.removeClass("rsFullscreen");
                b.updateSliderSize();
                setTimeout(function() {
                    b.updateSliderSize()
                }, 1);
                b.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(a, b) {
            var d = a.isLoaded || a.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>';
            a.content.hasClass("rsImg") ? a.content = c(d) : a.content.find(".rsImg").eq(0).replaceWith(d);
            a.isLoaded || a.isLoading || !a.holder || a.holder.html(a.content)
        }
    });
    c.rsModules.fullscreen = c.rsProto._q5
})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b) {
    b.extend(b.rsProto, {
        _x4: function() {
            var a = this,
                d;
            a._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2E3
            };
            !a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
            a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
            a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function(a, c, f) {
                c = b(c);
                if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10)
            }), a.ev.one("rsAfterInit", function() {
                a._z4()
            }), a.ev.on("rsBeforeDestroy", function() {
                a.stopAutoPlay();
                a.slider.off("mouseenter mouseleave");
                b(window).off("blur" + a.ns + " focus" + a.ns)
            }))
        },
        _z4: function() {
            var a = this;
            a.startAutoPlay();
            a.ev.on("rsAfterContentSet", function(b, e) {
                a._l2 || a._r2 || !a._a5 || e !== a.currSlide || a._b5()
            });
            a.ev.on("rsDragRelease", function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.ev.on("rsAfterSlideChange", function() {
                a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5())
            });
            a.ev.on("rsDragStart", function() {
                a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a.ev.on("rsBeforeMove", function(b, e, c) {
                a._a5 && (c && a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a._e5 = !1;
            a.ev.on("rsVideoStop", function() {
                a._a5 && (a._e5 = !1, a._b5())
            });
            a.ev.on("rsVideoPlay", function() {
                a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0)
            });
            b(window).on("blur" + a.ns, function() {
                a._a5 && (a._c5 = !0, a._d5())
            }).on("focus" + a.ns, function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function() {
                a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0)
            }, function() {
                a._a5 && (a._f5 = !1, a._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0;
            this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1;
            this._d5()
        },
        _b5: function() {
            var a = this;
            a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function() {
                var b;
                a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0);
                a.next(!0);
                b && (a.st.loopRewind = !1)
            }, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
        },
        _d5: function() {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    });
    b.rsModules.autoplay = b.rsProto._x4
})(jQuery);
// jquery.rs.video v1.1.3
(function(f) {
    f.extend(f.rsProto, {
        _z6: function() {
            var a = this;
            a._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            };
            a.st.video = f.extend({}, a._a7, a.st.video);
            a.ev.on("rsBeforeSizeSet", function() {
                a._b7 && setTimeout(function() {
                    var b = a._r1,
                        b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
                    a._c7 && a._c7.css({
                        width: b.width(),
                        height: b.height()
                    })
                }, 32)
            });
            var d = a._a.mozilla;
            a.ev.on("rsAfterParseNode", function(b, c, e) {
                b = f(c);
                if (e.videoURL) {
                    a.st.video.disableCSS3inFF && d && (a._e = a._f = !1);
                    c = f('<div class="rsVideoContainer"></div>');
                    var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    b.hasClass("rsImg") ? e.content = c.append(b).append(g) : e.content.find(".rsImg").wrap(c).after(g)
                }
            });
            a.ev.on("rsAfterSlideChange", function() {
                a.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var a = this;
            if (!a._b7) {
                var d = a.currSlide;
                if (!d.videoURL) return !1;
                a._d7 = d;
                var b = a._e7 = d.content,
                    d = d.videoURL,
                    c, e;
                d.match(/youtu\.be/i) || d.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = d.match(e)) && 11 == e[7].length && (c = e[7]), void 0 !== c && (a._c7 = a.st.video.youTubeCode.replace("%id%", c))) : d.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = d.match(e)) && (c = e[2]), void 0 !== c && (a._c7 = a.st.video.vimeoCode.replace("%id%", c)));
                a.videoObj = f(a._c7);
                a.ev.trigger("rsOnCreateVideoElement", [d]);
                a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer"), a._c7.css({
                    width: b.width(),
                    height: b.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(b) {
                    a.stopVideo();
                    b.preventDefault();
                    b.stopPropagation();
                    return !1
                }), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._f7(!1), setTimeout(function() {
                    a._c7.addClass("rsVideoActive")
                }, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
                return !0
            }
            return !1
        },
        stopVideo: function() {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function() {
                a.ev.trigger("rsOnDestroyVideoElement", [a.videoObj]);
                var d = a._c7.find("iframe");
                if (d.length) try {
                    d.attr("src", "")
                } catch (b) {}
                a._c7.remove();
                a._c7 = null
            }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
        },
        _f7: function(a, d) {
            var b = [],
                c = this.st.video;
            c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5));
            c.autoHideControlNav && this._k5 && b.push(this._k5);
            c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks);
            c.autoHideCaption && this.globalCaption && b.push(this.globalCaption);
            this.slider[a ? "removeClass" : "addClass"]("rsVideoPlaying");
            if (b.length)
                for (c = 0; c < b.length; c++) a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
        }
    });
    f.rsModules.video = f.rsProto._z6
})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l) {
    l.extend(l.rsProto, {
        _p4: function() {
            function m() {
                var g = a.currSlide;
                if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
                    if (0 < a._s4.length) {
                        for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
                        a._s4 = []
                    }
                    if (0 < a._r4.length) {
                        var f;
                        for (b = 0; b < a._r4.length; b++)
                            if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
                        a._r4 = []
                    }
                    g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks))
                }
            }
            var a = this,
                b;
            a._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            };
            a.st.block = l.extend({}, a._q4, a.st.block);
            a._r4 = [];
            a._s4 = [];
            a.ev.on("rsAfterInit", function() {
                m()
            });
            a.ev.on("rsBeforeParseNode", function(a, b, d) {
                b = l(b);
                d.animBlocks = b.find(".rsABlock").css("display", "none");
                d.animBlocks.length || (b.hasClass("rsABlock") ? d.animBlocks = b.css("display", "none") : d.animBlocks = !1)
            });
            a.ev.on("rsAfterContentSet", function(b, f) {
                f.id === a.slides[a.currSlideId].id && setTimeout(function() {
                    m()
                }, a.st.fadeinLoadedSlide ? 300 : 0)
            });
            a.ev.on("rsAfterSlideChange", function() {
                m()
            })
        },
        _v4: function(l, a) {
            setTimeout(function() {
                l.css(a)
            }, 6)
        },
        _u4: function(m) {
            var a = this,
                b, g, f, d, h, e, n;
            a._s4 = [];
            m.each(function(m) {
                b = l(this);
                g = {};
                f = {};
                d = null;
                var c = b.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : a.st.block.moveOffset;
                if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
                    var p;
                    p = "right" === e || "left" === e ? !0 : !1;
                    var k;
                    n = !1;
                    a._e ? (k = 0, h = a._x1) : (p ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", n = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", n = !0), h = "margin-" + h, n && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), void 0 === k && (k = parseInt(b.css(h), 10), isNaN(k) && (k = 0), b.data("rs-start-move-prop", k))));
                    f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, p);
                    g[h] = a._m4(k, p)
                }
                c = b.attr("data-fade-effect");
                if (!c) c = a.st.block.fadeEffect;
                else if ("none" === c.toLowerCase() || "false" === c.toLowerCase()) c = !1;
                c && (f.opacity = 0, g.opacity = 1);
                if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), d.easing || (d.easing = a.st.block.easing), d.css3Easing = l.rsCSS3Easing[d.easing], d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * m);
                c = {};
                a._e && (c[a._g + a._u1] = "0ms");
                c.moveProp = g.moveProp;
                c.opacity = g.opacity;
                c.display = "none";
                a._r4.push({
                    block: b,
                    css: c
                });
                a._v4(b, f);
                a._s4.push(setTimeout(function(b, d, c, e) {
                    return function() {
                        b.css("display", "block");
                        if (c) {
                            var g = {};
                            if (a._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp);
                                c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
                                g[a._g + a._t1] = f;
                                g[a._g + a._u1] = c.speed + "ms";
                                g[a._g + a._v1] = c.css3Easing;
                                b.css(g);
                                setTimeout(function() {
                                    b.css(d)
                                }, 24)
                            } else setTimeout(function() {
                                b.animate(d, c.speed, c.easing)
                            }, 16)
                        }
                        delete a._s4[e]
                    }
                }(b, g, d, m), 6 >= d.delay ? 12 : d.delay))
            })
        }
    });
    l.rsModules.animatedBlocks = l.rsProto._p4
})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b) {
    b.extend(b.rsProto, {
        _w4: function() {
            var a = this;
            if (a.st.autoHeight) {
                var b, c, e, f = !0,
                    d = function(d) {
                        e = a.slides[a.currSlideId];
                        (b = e.holder) && (c = b.height()) && void 0 !== c && c > (a.st.minAutoHeight || 30) && (a._c4 = c, a._e || !d ? a._e1.css("height", c) : a._e1.stop(!0, !0).animate({
                            height: c
                        }, a.st.transitionSpeed), a.ev.trigger("rsAutoHeightChange", c), f && (a._e && setTimeout(function() {
                            a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
                        }, 16), f = !1))
                    };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight", function(a, b) {
                    e === b && d()
                });
                a.ev.on("rsAfterContentSet.rsAutoHeight", function(a, b) {
                    e === b && d()
                });
                a.slider.addClass("rsAutoHeight");
                a.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        d(!1);
                        setTimeout(function() {
                            a.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                });
                a.ev.on("rsBeforeAnimStart", function() {
                    d(!0)
                });
                a.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        d(!1)
                    }, 16)
                })
            }
        }
    });
    b.rsModules.autoHeight = b.rsProto._w4
})(jQuery);
// jquery.rs.global-caption v1.0.1
(function(b) {
    b.extend(b.rsProto, {
        _d6: function() {
            var a = this;
            a.st.globalCaption && (a.ev.on("rsAfterInit", function() {
                a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside ? a._e1 : a.slider);
                a.globalCaption.html(a.currSlide.caption || "")
            }), a.ev.on("rsBeforeAnimStart", function() {
                a.globalCaption.html(a.currSlide.caption || "")
            }))
        }
    });
    b.rsModules.globalCaption = b.rsProto._d6
})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c) {
    c.rsProto._o4 = function() {
        var b, a = this;
        if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function() {
            b && clearTimeout(b);
            b = setTimeout(function() {
                a._g4 && a._g4.removeClass("rsActiveSlide");
                a._r1 && a._r1.addClass("rsActiveSlide");
                b = null
            }, 50)
        })
    };
    c.rsModules.activeClass = c.rsProto._o4
})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b) {
    b.extend(b.rsProto, {
        _o5: function() {
            var a = this,
                h, d, f;
            a._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            };
            a.st.deeplinking = b.extend({}, a._p5, a.st.deeplinking);
            if (a.st.deeplinking.enabled) {
                var g = a.st.deeplinking.change,
                    e = a.st.deeplinking.prefix,
                    c = "#" + e,
                    k = function() {
                        var a = window.location.hash;
                        return a && 0 < a.indexOf(e) && (a = parseInt(a.substring(c.length), 10), 0 <= a) ? a - 1 : -1
                    },
                    p = k(); - 1 !== p && (a.st.startSlideId = p);
                g && (b(window).on("hashchange" + a.ns, function(b) {
                    h || (b = k(), 0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1), a.goTo(b)))
                }), a.ev.on("rsBeforeAnimStart", function() {
                    d && clearTimeout(d);
                    f && clearTimeout(f)
                }), a.ev.on("rsAfterSlideChange", function() {
                    d && clearTimeout(d);
                    f && clearTimeout(f);
                    f = setTimeout(function() {
                        h = !0;
                        window.location.replace(("" + window.location).split("#")[0] + c + (a.currSlideId + 1));
                        d = setTimeout(function() {
                            h = !1;
                            d = null
                        }, 60)
                    }, 400)
                }));
                a.ev.on("rsBeforeDestroy", function() {
                    d = f = null;
                    g && b(window).off("hashchange" + a.ns)
                })
            }
        }
    });
    b.rsModules.deeplinking = b.rsProto._o5
})(jQuery);
(function(b, a, h) {
    function d(a) {
        a = a || location.href;
        return "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var f = document,
        g, e = b.event.special,
        c = f.documentMode,
        k = "onhashchange" in a && (c === h || 7 < c);
    b.fn.hashchange = function(a) {
        return a ? this.bind("hashchange", a) : this.trigger("hashchange")
    };
    b.fn.hashchange.delay = 50;
    e.hashchange = b.extend(e.hashchange, {
        setup: function() {
            if (k) return !1;
            b(g.start)
        },
        teardown: function() {
            if (k) return !1;
            b(g.stop)
        }
    });
    g = function() {
        function g() {
            var f = d(),
                e = q(l);
            f !== l ? (m(l = f, e), b(a).trigger("hashchange")) : e !== l && (location.href = location.href.replace(/#.*/, "") + e);
            c = setTimeout(g, b.fn.hashchange.delay)
        }
        var e = {},
            c, l = d(),
            n = function(a) {
                return a
            },
            m = n,
            q = n;
        e.start = function() {
            c || g()
        };
        e.stop = function() {
            c && clearTimeout(c);
            c = h
        };
        a.attachEvent && !a.addEventListener && !k && function() {
            var a, c;
            e.start = function() {
                a || (c = (c = b.fn.hashchange.src) && c + d(), a = b('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    c || m(d());
                    g()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, f.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (a.document.title = f.title)
                    } catch (b) {}
                })
            };
            e.stop = n;
            q = function() {
                return d(a.location.href)
            };
            m = function(c, e) {
                var d = a.document,
                    g = b.fn.hashchange.domain;
                c !== e && (d.title = f.title, d.open(), g && d.write('<script>document.domain="' + g + '"\x3c/script>'), d.close(), a.location.hash = c)
            }
        }();
        return e
    }()
})(jQuery, this);
// jquery.rs.visible-nearby v1.0.2
(function(d) {
    d.rsProto._g7 = function() {
        var a = this;
        a.st.visibleNearby && a.st.visibleNearby.enabled && (a._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, a.st.visibleNearby = d.extend({}, a._h7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function() {
            a._i7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
            a.st.visibleNearby.hiddenOverflow || a._i7.css("overflow", "visible");
            a._o1 = a.st.controlsInside ? a._i7 : a.slider
        }), a.ev.on("rsAfterSizePropSet", function() {
            var b, c = a.st.visibleNearby;
            b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
            a._h ? (a._b4 *= b, a._i7.css({
                height: a._c4,
                width: a._b4 / b
            }), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._i7.css({
                height: a._c4 / b,
                width: a._b4
            }), a._d = a._c4 * (1 - b) / 2 / b);
            c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
            c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d)
        }))
    };
    d.rsModules.visibleNearby = d.rsProto._g7
})(jQuery);
/*! lazysizes - v1.4.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes"in b.createElement("img"),f="addEventListener",g="getAttribute",h=a[f],i=a.setTimeout,j=a.requestAnimationFrame||i,k=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],m={},n=Array.prototype.forEach,o=function(a,b){return m[b]||(m[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),m[b].test(a[g]("class")||"")&&m[b]},p=function(a,b){o(a,b)||a.setAttribute("class",(a[g]("class")||"").trim()+" "+b)},q=function(a,b){var c;(c=o(a,b))&&a.setAttribute("class",(a[g]("class")||"").replace(c," "))},r=function(a,b,c){var d=c?f:"removeEventListener";c&&r(a,b),l.forEach(function(c){a[d](c,b)})},s=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},t=function(b,d){var f;!e&&(f=a.picturefill||c.pf)?f({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},u=function(a,b){return(getComputedStyle(a,null)||{})[b]},v=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},w=function(b){var c,d=0,e=a.Date,f=function(){c=!1,d=e.now(),b()},g=function(){i(f)},h=function(){j(g)};return function(){if(!c){var a=125-(e.now()-d);c=!0,6>a&&(a=6),i(h,a)}}},x=function(){var e,l,m,v,x,z,A,B,C,D,E,F,G,H,I,J=/^img$/i,K=/^iframe$/i,L="onscroll"in a&&!/glebot/.test(navigator.userAgent),M=0,N=0,O=0,P=0,Q=function(a){O--,a&&a.target&&r(a.target,Q),(!a||0>O||!a.target)&&(O=0)},R=function(a,c){var e,f=a,g="hidden"==u(b.body,"visibility")||"hidden"!=u(a,"visibility");for(C-=c,F+=c,D-=c,E+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(u(f,"opacity")||1)>0,g&&"visible"!=u(f,"overflow")&&(e=f.getBoundingClientRect(),g=E>e.left&&D<e.right&&F>e.top-1&&C<e.bottom+1);return g},S=function(){var a,b,f,h,i,j,k,n,o;if((x=c.loadMode)&&8>O&&(a=e.length)){b=0,P++,null==H&&("expand"in c||(c.expand=d.clientHeight>600?d.clientWidth>860?500:410:359),G=c.expand,H=G*c.expFactor),H>N&&1>O&&P>3&&x>2?(N=H,P=0):N=x>1&&P>2&&6>O?G:M;for(;a>b;b++)if(e[b]&&!e[b]._lazyRace)if(L)if((n=e[b][g]("data-expand"))&&(j=1*n)||(j=N),o!==j&&(A=innerWidth+j*I,B=innerHeight+j,k=-1*j,o=j),f=e[b].getBoundingClientRect(),(F=f.bottom)>=k&&(C=f.top)<=B&&(E=f.right)>=k*I&&(D=f.left)<=A&&(F||E||D||C)&&(m&&3>O&&!n&&(3>x||4>P)||R(e[b],j))){if(Y(e[b]),i=!0,O>9)break}else!i&&m&&!h&&4>O&&4>P&&x>2&&(l[0]||c.preloadAfterLoad)&&(l[0]||!n&&(F||E||D||C||"auto"!=e[b][g](c.sizesAttr)))&&(h=l[0]||e[b]);else Y(e[b]);h&&!i&&Y(h)}},T=w(S),U=function(a){p(a.target,c.loadedClass),q(a.target,c.loadingClass),r(a.target,U)},V=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},W=function(a){var b,d,e=a[g](c.srcsetAttr);(b=c.customMedia[a[g]("data-media")||a[g]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},X=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,j(c))}}(),Y=function(a){var b,d,e,f,h,j,l,u=J.test(a.nodeName),w=u&&(a[g](c.sizesAttr)||a[g]("sizes")),x="auto"==w;(!x&&m||!u||!a.src&&!a.srcset||a.complete||o(a,c.errorClass))&&(x&&(l=a.offsetWidth),a._lazyRace=!0,O++,X(function(){a._lazyRace&&delete a._lazyRace,(h=s(a,"lazybeforeunveil")).defaultPrevented||(w&&(x?(y.updateElem(a,!0,l),p(a,c.autosizesClass)):a.setAttribute("sizes",w)),d=a[g](c.srcsetAttr),b=a[g](c.srcAttr),u&&(e=a.parentNode,f=e&&k.test(e.nodeName||"")),j=h.detail.firesLoad||"src"in a&&(d||b||f),h={target:a},j&&(r(a,Q,!0),clearTimeout(v),v=i(Q,2500),p(a,c.loadingClass),r(a,U,!0)),f&&n.call(e.getElementsByTagName("source"),W),d?a.setAttribute("srcset",d):b&&!f&&(K.test(a.nodeName)?V(a,b):a.src=b),(d||f)&&t(a,{src:b})),q(a,c.lazyClass),(!j||a.complete)&&(j?Q(h):O--,U(h))}))},Z=function(){if(!m){if(Date.now()-z<999)return void i(Z,999);var a,b=function(){c.loadMode=3,T()};m=!0,c.loadMode=3,O||(P?T():i(S)),h("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=i(b,99)},!0)}};return{_:function(){z=Date.now(),e=b.getElementsByClassName(c.lazyClass),l=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),I=c.hFac,h("scroll",T,!0),h("resize",T,!0),a.MutationObserver?new MutationObserver(T).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",T,!0),d[f]("DOMAttrModified",T,!0),setInterval(T,999)),h("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[f](a,T,!0)}),/d$|^c/.test(b.readyState)?Z():(h("load",Z),b[f]("DOMContentLoaded",T),i(Z,2e4)),T(e.length>0)},checkElems:T,unveil:Y}}(),y=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=v(a,h,c),g=s(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),k.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||t(a,g.detail)}},e=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},f=w(e);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),h("resize",f)},checkElems:f,updateElem:d}}(),z=function(){z.i||(z.i=!0,y._(),x._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,i(function(){c.init&&z()})}(),{cfg:c,autoSizer:y,loader:x,init:z,uP:t,aC:p,rC:q,hC:o,fire:s,gW:v}}});
/*! lazysizes - v1.4.0 */
!function(a,b,c){"use strict";if(a.addEventListener){var d,e=/^picture$/i,f=b.documentElement,g=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c=function(b,c,d,e,f,g,h,i){a.push({c:c,u:d,w:1*("w"==i?h:e)})};return function(d){return a=[],d.replace(b,c),a}}(),h=function(){var a=function(a,b){return a.w-b.w},b=function(b,c){var d={srcset:b.getAttribute(lazySizes.cfg.srcsetAttr)||""},e=g(d.srcset);return Object.defineProperty(b,c,{value:d,writable:!0}),d.cands=e,d.index=0,d.dirty=!1,e[0]&&e[0].w?(e.sort(a),d.cSrcset=[e[d.index].c]):(d.cSrcset=d.srcset?[d.srcset]:[],d.cands=[]),d};return function(a,c){var d,f,g,h;if(!a[c]&&(h=a.parentNode||{},a[c]=b(a,c),a[c].isImg=!0,e.test(h.nodeName||"")))for(a[c].picture=!0,d=h.getElementsByTagName("source"),f=0,g=d.length;g>f;f++)b(d[f],c).isImg=!1;return a[c]}}(),i={_lazyOptimumx:function(){var a=function(a,b,c){var d,e;return a&&a.w?a.w>c?!1:(d=1-a.w/c,e=b/c-1,0>e-d):!0};return function(b,c){var d,e;for(d=b.index+1;d<b.cands.length&&(e=b.cands[d],e.w<=c||a(b.cands[d-1],e.w,c));d++)b.cSrcset.push(e.c),b.index=d}}()},j=function(){var a=function(a,b,c,d){var e,f=a[d];f&&(e=f.index,i[d](f,b),f.dirty&&e==f.index||(f.cSrcset.join(", "),a.setAttribute(c,f.cSrcset.join(", ")),f.dirty=!0))};return function(b,c,d,e){var f,g,h,i,j=b[e];if(j.width=c,j.picture&&(g=b.parentNode))for(f=g.getElementsByTagName("source"),i=0,h=f.length;h>i;i++)a(f[i],c,d,e);a(b,c,d,e)}}(),k=function(a){var b=a.getAttribute("data-optimumx")||a.getAttribute("data-maxdpr");return b&&(b="auto"==b?d.getOptimumX(a):parseFloat(b,10)),b},l=function(){a.lazySizes&&!a.lazySizes.getOptimumX&&(lazySizes.getX=k,lazySizes.pWS=g,f.removeEventListener("lazybeforeunveil",l))};f.addEventListener("lazybeforeunveil",l),setTimeout(l),d=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,d||(d={},a.lazySizesConfig=d),"function"!=typeof d.getOptimumX&&(d.getOptimumX=function(){var b=a.devicePixelRatio||1;return b>2.5?b*=.6:b>1.9&&(b*=.8),Math.min(Math.round(100*b)/100,2)}),a.devicePixelRatio&&(addEventListener("lazybeforesizes",function(a){var b,c,d,e;a.defaultPrevented||!(b=k(a.target))||b>=devicePixelRatio||(c=h(a.target,"_lazyOptimumx"),d=a.detail.width*b,d&&(c.width||0)<d&&(e=a.detail.dataAttr?lazySizes.cfg.srcsetAttr:"srcset",j(a.target,d,e,"_lazyOptimumx")))}),addEventListener("lazybeforeunveil",function(a){a.target._lazyOptimumx&&!a.detail.reloaded&&(a.target._lazyOptimumx=null)}))}}(window,document);
$(function(){$(".oembed-video .thumb, .oembed-video .play").click(function(){var t=$(this).parent(),e=t.find("iframe, object");e.attr("src",e.attr("data-src")),e.css({display:"block"}),t.find(".play, .thumb").remove()})});