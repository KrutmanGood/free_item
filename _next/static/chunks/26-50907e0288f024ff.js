(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26], {
        2026: function(c, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return cs
                }
            });
            var a = n(7437),
                t = n(2265),
                r = n(212),
                o = n(3999),
                s = n.n(o),
                i = function(c) {
                    switch (c) {
                        case "cn":
                            return "cn";
                        case "cnt":
                            return "cnt";
                        case "kr":
                            return "ko";
                        case "id":
                        case "fa":
                        case "nl":
                        case "no":
                        case "vi":
                        case "ms":
                        case "th":
                        case "pl":
                            return "en";
                        default:
                            return c
                    }
                },
                l = function(c) {
                    switch (c) {
                        case "kr":
                            return "ko";
                        case "fa":
                        case "ms":
                        case "nl":
                        case "no":
                        case "id":
                        case "vi":
                        case "th":
                        case "pl":
                            return "en";
                        default:
                            return c
                    }
                },
                d = function(c) {
                    switch (c) {
                        case "cn":
                            return "cn";
                        case "cnt":
                            return "cnt";
                        case "kr":
                            return "ko";
                        case "th":
                        case "no":
                        case "pl":
                            return "en";
                        default:
                            return c
                    }
                },
                u = n(6463),
                f = {
                    ar: "العربية",
                    cn: "简体中文",
                    cnt: "繁體中文",
                    de: "Deutsch",
                    en: "English",
                    es: "Espa\xf1ol",
                    fa: "فارسی",
                    fi: "Suomi",
                    fr: "Fran\xe7ais",
                    he: "עִברִית",
                    id: "Bahasa Indonesia",
                    it: "Italiano",
                    jp: "日本語",
                    kr: "한국어",
                    ms: "Bahasa Melayu",
                    nl: "Nederlands",
                    no: "Norsk",
                    pl: "Polski",
                    pt: "Portugu\xeas",
                    ru: "ру́сский",
                    th: "ไทย",
                    tr: "T\xfcrk\xe7e",
                    vi: "Tiếng Việt"
                },
                h = {
                    jp: "ja",
                    kr: "ko",
                    cn: "zh",
                    cnt: "zh_tw"
                },
                _ = n(1031),
                p = n.n(_),
                m = function(c) {
                    var e = c.currentLocale,
                        n = c.availableLocales,
                        t = (0, u.usePathname)(),
                        r = function(c) {
                            if (t.startsWith("/supportcreator")) {
                                var n = h[c] || c,
                                    a = h[e] || e,
                                    r = t.replace("/".concat(a), "/".concat(n)),
                                    o = window.location.search;
                                window.location.href = "".concat(r).concat(null != o ? o : "");
                                return
                            }
                            var s = t.replace("/".concat(e, "/"), "/".concat(c, "/")),
                                i = window.location.search;
                            window.location.href = "".concat(s).concat(null != i ? i : "")
                        };
                    if (1 === n.length) return null;
                    var o = f[e].length;
                    return (0, a.jsx)("div", {
                        className: "language-dropdown-wrapper ".concat(p()["language-dropdown-wrapper"]),
                        children: (0, a.jsx)("select", {
                            style: {
                                width: "".concat(Math.max(9 * o + 50, 120), "px")
                            },
                            className: "language-dropdown ".concat(p()["language-dropdown"]),
                            onChange: function(c) {
                                return r(c.target.value)
                            },
                            name: "locales",
                            id: "locales",
                            "aria-label": "Select a language",
                            value: e,
                            children: n.map(function(c) {
                                return (0, a.jsx)("option", {
                                    value: c,
                                    children: f[c]
                                }, c)
                            })
                        })
                    })
                },
                v = n(7002),
                g = n(5302),
                b = n.n(g),
                w = n(7938),
                x = n.n(w),
                j = function(c) {
                    var e = c.children,
                        n = c.link,
                        t = c.testId,
                        r = c.onClick,
                        o = c.id;
                    return (0, a.jsx)("a", {
                        id: o,
                        className: "".concat(x().button, " button"),
                        href: n,
                        onClick: r,
                        "data-testid": t,
                        children: e
                    })
                },
                A = n(1943),
                k = n(1735),
                C = function(c) {
                    var e = (0, u.useParams)(),
                        n = (0, v._)(t.useState("default"), 2),
                        a = n[0],
                        r = n[1];
                    return t.useEffect(function() {
                        var n = window.location.search;
                        if (n) {
                            if (n.includes("addFriend") || n.includes("add_friend")) {
                                r("add_friend");
                                return
                            }
                            if (n.includes("copyDeck")) {
                                r("copy_deck");
                                return
                            }
                            if (n.includes("join_team")) {
                                r("join_team");
                                return
                            }
                            if (n.includes("join_clan")) {
                                r("join_clan");
                                return
                            }
                            if (n.includes("supercell_id")) {
                                r("scid_friend");
                                return
                            }
                            if (n.includes("supportcreator")) {
                                r("support_creator");
                                return
                            }
                            if (n.includes("action") && n.includes("voucher") || (null == c ? void 0 : c.includes("voucher")) || "voucher" === e.action) {
                                r("voucher");
                                return
                            }
                        }
                    }, [c, e.action]), a
                },
                y = ["c7b3ae504a1b28a27450e1521b9db8144ca90084ad2f671d1a76ccfe310cca0d", "72a96f91b76e8aab2ff2957b818a09c46b20884d430cdf2fb1a3eaca11c8e50b", "9916b57e74b5a5d627f5b404fdfb259cbe723bebf40df64f57f6870a87f354af", "26019356398e1c404ec0042c5ebca04adeb7fe98d43e51271a64e03e25b3b02d", "fdd33245fe1db5dd18d010310f51e69af72de5c48e90fadc3d35aeaf66894001", "fc2e93d540ee2fb78ee4d2da0d67f6bc79bedd5cd151bba418771caf007a8232", "6e1260458a64034eb708e2cdccae6cf8fa45fc2d6ea6b5bc02e56def3d7e075f", "9afa365dbf9c32c32369c900bceefb032512383633f08e28c630132074017445", "3896aff321726635079ca11183268fea00d77e9b5604039329ba33407fc1d542", "ea2543ca24750a6222e9877ed7ddc22d2e7ca167e93a6b79c4db7a7afde44282", "70c76294e42b9a16ff730dee32a398c95075b831d886be6a11c81b8c52758f70", "c41e56eee40333b5e91db682835bbcbd1d42a7c1ab108884dc0012a5e15df2f9", "6d3438beb1348085a3c173d5293cc458ce5630df66a5621dea912591d4391eb2", "abf04582bafbc21b4926d22ecbf8e34b2d5f1ee9db8ba6893e14d66c66ab546a", "8005a67894bd015c3a87dcd4d42bbe672462062d90882863f56b25e45284ba52"];

            function M(c) {
                var e, n = c.leadKey,
                    r = c.t,
                    o = (0, v._)((0, t.useState)(null !== (e = r[null != n ? n : "lead_default"]) && void 0 !== e ? e : r.lead_default), 2),
                    s = o[0],
                    i = o[1],
                    l = C();
                return (0, t.useEffect)(function() {
                    if (!n) {
                        if ("add_friend" === l && r.lead_add_friend) {
                            i(r.lead_add_friend);
                            return
                        }
                        if ("join_clan" === l && r.lead_join_clan) {
                            i(r.lead_join_clan);
                            return
                        }
                        if ("join_team" === l && r.lead_join_team) {
                            i(r.lead_join_team);
                            return
                        }
                        if ("support_creator" === l && r.lead_support_creator) {
                            i(r.lead_support_creator);
                            return
                        }
                        if ("scid_friend" === l && r.lead_scid_friend && i(r.lead_scid_friend), "voucher" === l && r.lead_voucher) {
                            var c = new URLSearchParams(window.location.search).get("code");
                            if (!c) {
                                i(r.lead_voucher);
                                return
                            }(0, A._)(function() {
                                var e, n;
                                return (0, k.Jh)(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, L(c)];
                                        case 1:
                                            return e = a.sent(), y.includes(e) && i(null !== (n = r.lead_voucher_spongebob) && void 0 !== n ? n : r.lead_voucher), [2]
                                    }
                                })
                            })(), i(r.lead_voucher);
                            return
                        }
                    }
                }, [n, l, r.lead_add_friend, r.lead_join_clan, r.lead_join_team, r.lead_support_creator, r.lead_voucher, r.lead_voucher_spongebob, r.lead_scid_friend]), (0, a.jsx)("p", {
                    children: s
                })
            }

            function L(c) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = (0, A._)(function(c) {
                    var e;
                    return (0, k.Jh)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), e = new TextEncoder().encode(c), [4, crypto.subtle.digest("SHA-256", e)];
                            case 1:
                                return [2, Array.from(new Uint8Array(n.sent())).map(function(c) {
                                    return c.toString(16).padStart(2, "0")
                                }).join("")];
                            case 2:
                                return n.sent(), [2, ""];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var S = function(c) {
                    var e, n = c.ctaKey,
                        r = c.linkCommandOverride,
                        o = c.t,
                        s = (0, v._)((0, t.useState)(null !== (e = o[null != n ? n : "cta_default"]) && void 0 !== e ? e : o.cta_default), 2),
                        i = s[0],
                        l = s[1],
                        d = C(r);
                    return (0, t.useEffect)(function() {
                        if (!n) {
                            if ("add_friend" === d && o.cta_add_friend) {
                                l(o.cta_add_friend);
                                return
                            }
                            if ("copy_deck" === d && o.cta_copy_deck) {
                                l(o.cta_copy_deck);
                                return
                            }
                            if ("join_clan" === d && o.cta_join_clan) {
                                l(o.cta_join_clan);
                                return
                            }
                            if ("join_team" === d && o.cta_join_team) {
                                l(o.cta_join_team);
                                return
                            }
                            if ("scid_friend" === d && o.cta_scid_friend) {
                                l(o.cta_scid_friend);
                                return
                            }
                            if ("support_creator" === d && o.cta_support_creator) {
                                l(o.cta_support_creator);
                                return
                            }
                            if ("voucher" === d && o.cta_voucher) {
                                var c = new URLSearchParams(window.location.search).get("code");
                                if (!c) {
                                    l(o.cta_voucher);
                                    return
                                }(0, A._)(function() {
                                    var e, n;
                                    return (0, k.Jh)(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, L(c)];
                                            case 1:
                                                return e = a.sent(), y.includes(e) && l(null !== (n = o.cta_voucher_spongebob) && void 0 !== n ? n : o.cta_voucher), [2]
                                        }
                                    })
                                })(), l(o.cta_voucher);
                                return
                            }
                        }
                    }, [n, d, o.cta_add_friend, o.cta_copy_deck, o.cta_join_clan, o.cta_join_team, o.cta_scid_friend, o.cta_support_creator, o.cta_voucher, o.cta_voucher_spongebob]), (0, a.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })
                },
                V = function(c) {
                    var e = c.ctaKey,
                        n = c.link,
                        r = c.onClickLabel,
                        o = c.linkCommandOverride,
                        s = c.hasDownloadLinks,
                        i = c.t,
                        l = (0, v._)((0, t.useState)(n), 2),
                        d = l[0],
                        f = l[1],
                        h = (0, v._)((0, t.useState)(!1), 2),
                        _ = h[0],
                        p = h[1],
                        m = (0, u.usePathname)(),
                        g = (0, u.useParams)(),
                        w = (0, v._)((0, t.useState)(), 2),
                        x = w[0],
                        A = w[1];
                    (0, t.useEffect)(function() {
                        var c = window.location.search;
                        if (g.action) {
                            var e = m.replace("/".concat(g.locale, "/"), "");
                            f("".concat(n).concat(e));
                            return
                        }
                        if (c) {
                            var a = window.location.search.replace("?", "");
                            if (a.startsWith("clashroyale://")) {
                                f(a);
                                return
                            }
                            f(o ? "".concat(n).concat(o).concat(a) : "".concat(n).concat(a))
                        }
                    }, [n, o, g.action, g.locale, m]), (0, t.useEffect)(function() {
                        A("open-game-button")
                    }, []);
                    var k = r && _ ? (0, a.jsx)("div", {
                        className: "".concat(b()["clicked-label"], " clicked-label"),
                        children: r
                    }) : !_ && s ? (0, a.jsx)("div", {
                        className: b()["download-links-heading"],
                        children: i.general_download_game
                    }) : null;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(j, {
                            id: "open-game-button",
                            link: d,
                            onClick: function() {
                                setTimeout(function() {
                                    p(!0)
                                }, 500)
                            },
                            testId: x,
                            children: (0, a.jsx)(S, {
                                ctaKey: e,
                                t: i
                            })
                        }), k]
                    })
                },
                E = ["tiktok", "facebook", "twitter", "instagram", "youtube", "reddit", "discord"],
                N = function(c) {
                    if (!E.includes(c)) throw Error("Invalid SocialMedia: ".concat(c));
                    return c
                },
                H = function(c) {
                    switch (c.type) {
                        case "facebook":
                            return (0, a.jsx)("svg", {
                                viewBox: "0 0 87 87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                children: (0, a.jsx)("path", {
                                    d: "M76.1,0H10.9C4.9,0,0,4.9,0,10.9v65.2C0,82.1,4.9,87,10.9,87h33V55.8H33.5V42.2h10.4v-6.8 c0-10.5,7.7-18.7,17.6-18.7h9.6V32h-8.6c-2.3,0-2.9,1.3-2.9,3.1v7.1h11.5v13.6H59.6V87h16.5c6,0,10.9-4.9,10.9-10.9V10.9 C87,4.9,82.1,0,76.1,0z"
                                })
                            });
                        case "instagram":
                            return (0, a.jsx)("svg", {
                                viewBox: "0 0 87 87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                children: (0, a.jsx)("path", {
                                    d: "M69.8,43.5C69.8,58,58,69.8,43.5,69.8C29,69.8,17.2,58,17.2,43.5c0-1.7,0.2-3.4,0.5-5.1H0v35 C0,80.9,6.1,87,13.6,87h59.8C80.9,87,87,80.9,87,73.4v-35H69.3C69.6,40.1,69.8,41.8,69.8,43.5z M73.4,0H13.6C6.1,0,0,6.1,0,13.6 v14.7h22c4.8-6.7,12.6-11.1,21.5-11.1c8.9,0,16.7,4.4,21.5,11.1h22V13.6C87,6.1,80.9,0,73.4,0z M80.1,16.8c0,1.3-1.1,2.4-2.4,2.4 h-7.3c-1.3,0-2.4-1.1-2.4-2.4V9.5c0-1.3,1.1-2.4,2.4-2.4h7.3c1.3,0,2.4,1.1,2.4,2.4V16.8z M59.7,43.5c0-8.9-7.3-16.2-16.2-16.2 c-8.9,0-16.2,7.3-16.2,16.2c0,8.9,7.2,16.2,16.2,16.2C52.4,59.7,59.7,52.4,59.7,43.5z"
                                })
                            });
                        case "tiktok":
                            return (0, a.jsx)("svg", {
                                width: "87",
                                height: "87",
                                viewBox: "0 0 87 87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M81.4423 37.0888C73.6031 37.0888 66.0439 34.5691 60.3045 30.2295V59.3465C60.3045 73.905 48.4057 85.8038 33.8472 85.8038C19.1488 85.8038 7.25 73.905 7.25 59.3465C7.25 44.788 19.1488 32.8893 33.7072 32.8893C34.8271 32.8893 36.087 33.0292 37.2069 33.1692V47.4477C30.6276 45.4879 23.6283 49.2676 21.6685 55.8469C19.7087 62.4262 23.4883 69.4255 30.0676 71.3853C36.6469 73.345 43.6462 69.5654 45.606 62.9861C45.886 61.8662 46.1659 60.6064 46.1659 59.4865V1.8125H60.8644C60.8644 13.1513 70.1034 22.3904 81.4423 22.3904V37.0888Z",
                                    fill: "white"
                                })
                            });
                        case "twitter":
                            return (0, a.jsx)("svg", {
                                width: "87",
                                height: "87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                viewBox: "0 0 87 87",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M51.0871 36.3487L80.7758 1.8125H73.7405L47.9618 31.7998L27.3724 1.8125H3.625L34.7602 47.1585L3.625 83.375H10.6607L37.8837 51.7074L59.6276 83.375H83.375L51.0854 36.3487H51.0871ZM41.4508 47.5581L38.2961 43.0426L13.1957 7.11276H24.0021L44.2584 36.1093L47.4131 40.6247L73.7439 78.3158H62.9375L41.4508 47.5598V47.5581Z",
                                    fill: "white"
                                })
                            });
                        case "youtube":
                            return (0, a.jsxs)("svg", {
                                viewBox: "0 0 87 87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                children: [(0, a.jsx)("path", {
                                    d: "M42.7,8.1c-0.6-0.1-1.4-0.1-2,0c-1.5,0.3-4.1,1.2-5,4.4c0,0-0.2,1.6-0.2,2.2 v11.2c0,0,0.1,1.9,1.1,3.6c0.8,1.3,2.2,2.4,4.4,2.6c0.3,0,1.3,0,1.6,0c2.1-0.3,3.4-1.4,4.2-2.6c1.1-1.7,1.1-3.6,1.1-3.6V14.7 c0-0.7-0.2-2.2-0.2-2.2C46.9,9.3,44.2,8.4,42.7,8.1 M43.8,14.7v11.2c0,2.7-2,2.5-2,2.5s-2.2,0.2-2.2-2.5V14.7 c0-3.1,2.2-2.9,2.2-2.9C44,11.8,43.8,14.7,43.8,14.7 M27.2,12.5L23.9,0.2H19L25,19v12.7h4.5V19l5.8-18.8h-4.7L27.2,12.5z M59.7,8.2v18.1c-0.7,1.6-2.5,2-2.5,2c-1.6,0-1.3-1.1-1.3-1.1v-19h-4.3v20.3c0,2.2,1.1,3.6,3.4,3.6c2.2,0,4.7-2.9,4.7-2.9v2.7 h4.2V8.2H59.7z"
                                }), (0, a.jsx)("path", {
                                    d: "M73,39C67.8,38,62,38.3,43.3,38c-12.6,0-19,0.2-19.8,0.2 c-8.1,0.5-13.8-0.7-15.8,8.1c-0.9,5-1.4,11.3-1.4,16.1C6.8,73,5.9,85.6,16,86.5c5.2,0.5,18.7,0.7,27.6,0.7 c12.2,0,25.4-0.2,29.9-1.1c2-0.5,3.7-2.5,4.3-3.4c2.6-3.5,2.7-8.9,2.9-20.3C80.2,52.7,80.9,40.1,73,39 M28.2,50.2H23v27.3h-4.7 V50.2h-5v-4.7h14.9C28.2,45.5,28.4,50.2,28.2,50.2 M41.5,77.7h-4.3V75c0,0-2.3,2.9-4.7,2.9c-2.5,0-3.4-1.6-3.4-4.5V53.8h4.3V73 c0,0,0,0.9,1.1,0.9c1.1,0,2.7-1.6,2.7-2v-18h4.3V77.7z M57.9,73.4c0,0-0.5,4.5-3.2,4.5c-2.7,0-4.3-1.6-5.2-2.7v2.5h-4.3v-32h4.3 v10.4c0,0,2.3-2.7,4.3-2.7c2,0,4.1,1.4,4.1,4.3V73.4z M74.2,73.4c-0.7,4.1-5.6,4.5-5.6,4.5c-7.2,0-7-6.8-7-6.8V59.9 c0-0.9,0.4-2.3,0.4-2.3c0.5-1.4,0.9-4.1,6.3-4.1c6.3,0,6.1,6.3,6.1,6.3v6.5h-8.6v4.7c0,1.3,0.7,2.7,2.5,2.7 c1.8,0,1.8-2.7,1.8-2.7v-1.8h4.3C74.4,69.4,74.6,70.5,74.2,73.4 M70.1,59.9c0,0-0.2-2.5-2-2.5c-1.8,0-2.3,2-2.3,2.5v2.9h4.3 V59.9z M51.8,57.4c-1.1,0-2,0.9-2,0.9V73c0.7,0.9,2,0.9,2,0.9c1.8,0,1.8-2,1.8-2V59.9C53.6,58.3,53,57.4,51.8,57.4"
                                })]
                            });
                        case "reddit":
                            return (0, a.jsx)("svg", {
                                viewBox: "0 0 87 87",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                children: (0, a.jsxs)("g", {
                                    children: [(0, a.jsx)("path", {
                                        d: "M0.7,43.8c0-2.9,1.2-5.4,3.5-7.5s5-3.1,8-3.1c2.9,0,5.4,0.9,7.4,2.6H20c6.3-3.9,14.2-5.8,23.7-5.8l0.4-0.3l5-18.9 l17.2,2.6c0,0,0,0.1,0.1,0.1c0,0,0,0,0-0.1c0.1,0,0.4-0.4,0.8-1.1s0.8-1.1,1-1.3c1.6-1.5,3.5-2.3,5.8-2.3c2.3,0,4.3,0.8,5.8,2.3 c1.6,1.5,2.4,3.5,2.4,5.8s-0.8,4.3-2.4,6C78.3,24.2,76.3,25,74,25c-2.7,0-4.7-0.9-6.2-2.7c-1.4-1.8-2.1-4.1-2.1-6.8 c-0.1,0-2.4-0.3-6.9-0.9c-4.5-0.7-7.1-1.1-7.8-1.2h-0.2c-0.1,0.1-0.5,1.4-1.2,3.8c-0.7,2.4-1.4,5-2.1,7.7 c-0.7,2.7-1.1,4.2-1.2,4.5v0.2l0.4,0.3c3.4,0,6.9,0.5,10.5,1.5s6.7,2.3,9.3,4.1l0.2,0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1 c1.2-0.9,2-1.4,2.5-1.8c0.5-0.3,1.2-0.6,2.1-0.9c0.9-0.3,1.9-0.4,3-0.4c3.2,0,6,1.1,8.2,3.4c2.3,2.3,3.4,5,3.4,8.3 c0,2.2-0.6,4.3-1.9,6.1c-1.3,1.8-2.9,3.3-4.9,4.3c0,9.2-6.1,16.4-18.4,21.5c-1.9,0.9-3.3,1.4-4,1.6c-1.5,0.5-3.7,0.9-6.5,1.3 s-5,0.6-6.6,0.6c-5.7,0-11.1-0.8-16.4-2.5c-0.1-0.1-1.8-1-5.1-2.7c-4.5-2.4-8.1-5.2-10.8-8.2C8.9,62.9,7.5,59.3,7.5,55H7.2 c-1.6-0.8-3-2-4.2-3.5l-0.6-0.9c-0.7-1.3-1.2-2.4-1.3-3.2C0.8,46.5,0.7,45.3,0.7,43.8z M3.1,44.6c0,3.1,1.3,5.8,4,7.9 c0.2-2.8,1.4-5.5,3.4-8.2c2-2.7,4.4-5.1,7.2-7.2c-1.7-1.2-3.7-1.8-5.8-1.8c-2.3,0-4.4,1-6.1,2.9S3.1,42.2,3.1,44.6z M10.4,55 c0,2.6,0.7,5,2.2,7.4s3.3,4.4,5.6,6.1c2.3,1.7,4.7,3.1,7.3,4.2s5,1.9,7.4,2.4c3.5,0.7,7,1,10.3,1c5.8,0,11.3-0.9,16.5-2.8 c5.2-1.9,9.6-4.8,13.1-8.7h-0.2c1.4-1.8,2.4-3.4,3-4.9c0.6-1.4,0.9-3.2,0.9-5.1c0-2.6-0.6-5-1.9-7.3c-1.3-2.3-2.9-4.3-4.9-6 c-2-1.7-4.2-3.1-6.5-4.3c-2.3-1.2-4.7-2.1-7.1-2.7c-4-1.1-8.3-1.6-12.8-1.6c-3.5,0-7.1,0.4-10.7,1.3S25.5,36,22,37.7 c-3.4,1.7-6.2,4.1-8.4,7.1C11.5,47.8,10.4,51.2,10.4,55z M23.6,49.8c0-1.7,0.5-3.2,1.6-4.2c1.1-1.1,2.5-1.6,4.2-1.6 c1.7,0,3.2,0.5,4.4,1.6c1.2,1.1,1.8,2.5,1.8,4.2c0,1.7-0.6,3.1-1.8,4.3c-1.2,1.1-2.7,1.7-4.4,1.7s-3.1-0.6-4.2-1.7 C24.1,52.9,23.6,51.5,23.6,49.8z M26.1,61.4h3.1c1.2,2.1,3.1,3.7,5.6,4.9c2.6,1.1,5.2,1.7,7.9,1.7c2.7,0,5.3-0.6,7.8-1.7 c2.5-1.1,4.4-2.7,6-4.9h2.9c-1.2,2.9-3.4,5.2-6.6,6.8c-3.2,1.6-6.6,2.4-10.1,2.4c-3.4,0-6.7-0.8-10-2.4 C29.4,66.5,27.2,64.3,26.1,61.4z M49.9,49.8c0-1.8,0.5-3.2,1.6-4.3c1.1-1,2.5-1.6,4.3-1.6c1.6,0,3,0.6,4.1,1.7 c1.1,1.1,1.7,2.5,1.7,4.1s-0.6,3-1.7,4.2s-2.5,1.8-4.1,1.8c-1.7,0-3.2-0.6-4.3-1.7C50.5,53,49.9,51.5,49.9,49.8z M68,16.6 c0,1.7,0.6,3.1,1.8,4.3c1.2,1.2,2.6,1.8,4.3,1.8c1.7,0,3.1-0.6,4.2-1.7c1.1-1.2,1.6-2.6,1.6-4.3c0-1.6-0.6-3-1.7-4.1 s-2.5-1.7-4.1-1.7c-1.6,0-3,0.6-4.2,1.7C68.6,13.7,68,15,68,16.6z M69,36.5c2.6,1.7,4.8,3.9,6.7,6.6c1.9,2.7,3.2,5.5,4,8.5 c2.8-2,4.2-4.3,4.2-6.8c0-2.7-0.8-5.1-2.5-7.1s-3.9-3-6.6-3C72.7,34.7,70.7,35.3,69,36.5z"
                                    }), (0, a.jsx)("path", {
                                        d: "M43.9,80.9c-5.8,0-11.5-0.9-16.8-2.6c-0.2,0-0.3-0.1-0.4-0.2c-0.2-0.1-1.2-0.6-4.9-2.6c-4.6-2.5-8.4-5.4-11.2-8.6 c-2.7-3.1-4.2-6.8-4.4-11c-1.6-0.9-3-2.1-4.2-3.7l-0.7-0.9c0-0.1-0.1-0.1-0.1-0.2c-0.8-1.4-1.3-2.6-1.5-3.6 c-0.2-1-0.3-2.3-0.3-3.9c0-3.4,1.3-6.3,4-8.6c2.6-2.3,5.6-3.5,9-3.5c3,0,5.5,0.8,7.7,2.4c6.2-3.6,13.9-5.5,23-5.6l4.7-18.1 c0.2-0.7,0.9-1.2,1.7-1.1l16.4,2.4c0.1-0.1,0.1-0.2,0.2-0.3c0.5-0.8,0.9-1.3,1.3-1.6C69.1,7.9,71.4,7,74,7c2.7,0,5,0.9,6.9,2.7 c1.9,1.8,2.8,4.1,2.8,6.9c0,2.7-0.9,5.1-2.8,7c-1.9,2-4.2,2.9-6.9,2.9c-3.2,0-5.6-1.1-7.3-3.3c-1.4-1.8-2.2-3.9-2.4-6.4 c-1-0.1-2.7-0.4-5.7-0.8c-3.2-0.5-5.5-0.8-6.7-1c-0.2,0.5-0.4,1.3-0.7,2.5c-0.7,2.4-1.4,5-2.1,7.7c-0.4,1.5-0.7,2.5-0.9,3.1 c3.1,0.1,6.2,0.6,9.4,1.5c3.4,0.9,6.5,2.2,9.1,3.9c0.9-0.6,1.5-1.1,2-1.4c0.6-0.4,1.4-0.8,2.5-1.1c1-0.3,2.2-0.5,3.5-0.5 c3.6,0,6.7,1.3,9.3,3.8c2.5,2.5,3.8,5.7,3.8,9.4c0,2.5-0.7,4.9-2.1,6.9c-1.2,1.8-2.8,3.2-4.7,4.3c-0.4,9.4-6.9,16.8-19.3,22 c-2,0.9-3.3,1.4-4.1,1.7c-1.6,0.5-3.8,1-6.7,1.4C47.8,80.7,45.6,80.9,43.9,80.9z M28.2,75.6c5,1.6,10.3,2.4,15.7,2.4 c1.5,0,3.7-0.2,6.4-0.6c2.7-0.4,4.8-0.8,6.2-1.3c0.4-0.1,1-0.4,1.8-0.7c-7.9,2.5-16.6,2.9-25.7,1.2c-2-0.4-4-1-6.1-1.8 C27.4,75.1,27.9,75.4,28.2,75.6z M43.4,34.1c-3.4,0-6.9,0.4-10.4,1.2c-3.5,0.8-7,2.1-10.3,3.7c-3.2,1.6-5.8,3.8-7.9,6.6 c-2,2.8-3,5.8-3,9.3c0,2.3,0.7,4.5,2,6.6c1.4,2.2,3.1,4.1,5.2,5.6c2.2,1.6,4.5,3,7,4.1c2.4,1.1,4.8,1.9,7.1,2.3 c9.3,1.7,18.2,1.1,26.1-1.7c4.7-1.7,8.7-4.3,12-7.7c0.1-0.2,0.1-0.4,0.3-0.5c1.3-1.7,2.3-3.2,2.8-4.5c0.5-1.2,0.8-2.8,0.8-4.6 c0-2.3-0.6-4.5-1.7-6.6c-1.2-2.1-2.7-4-4.6-5.5c-1.9-1.6-4.1-3-6.3-4.1c-2.2-1.1-4.5-2-6.8-2.6C52,34.7,47.8,34.1,43.4,34.1z M10.4,61.5c0.3,0.5,0.5,1.1,0.9,1.6C11,62.6,10.7,62,10.4,61.5z M8.2,53.6c0.3,0.1,0.5,0.4,0.7,0.7c0.1-2.6,0.7-5,1.7-7.3 c-1.1,1.9-1.8,3.8-1.9,5.7C8.6,53,8.5,53.4,8.2,53.6z M66.4,37c1.5,0.9,3,2,4.4,3.1c2.2,1.8,4,3.9,5.3,6.4c1.2,2.2,1.9,4.5,2,6.9 c0.1-0.2,0.3-0.4,0.6-0.5c0.1,0,0.2-0.1,0.2-0.1c-0.3-0.2-0.6-0.5-0.7-0.9c-0.7-2.8-2-5.5-3.7-8c-1.8-2.5-3.9-4.6-6.3-6.2 c-0.4-0.2-0.6-0.6-0.7-1c-0.1,0-0.2,0.1-0.3,0.1C67,37,66.7,37.1,66.4,37z M11.9,36.8c-1.9,0-3.5,0.8-5,2.4 c-1.5,1.6-2.3,3.4-2.3,5.4c0,1.8,0.5,3.4,1.6,4.9c0.6-2.1,1.7-4.1,3.1-6c1.7-2.2,3.6-4.2,5.7-6C14.1,37,13,36.8,11.9,36.8z M71.8,36.7c1.9,1.5,3.7,3.4,5.2,5.5c1.5,2.1,2.7,4.4,3.5,6.7c1.3-1.3,1.9-2.7,1.9-4.2c0-2.4-0.7-4.4-2.2-6.1 c-1.4-1.6-3.2-2.4-5.4-2.4C73.7,36.2,72.7,36.4,71.8,36.7z M19.2,37.1C19.2,37.1,19.2,37.1,19.2,37.1c0,0.2,0,0.3-0.1,0.5 c0.2-0.1,0.5-0.3,0.7-0.4h-0.2C19.5,37.2,19.4,37.2,19.2,37.1z M50,31.5c2.3,0.3,4.5,0.7,6.6,1.3c2.1,0.5,4.3,1.3,6.4,2.3 c-1.9-1-4-1.8-6.3-2.4C54.5,32.1,52.2,31.7,50,31.5z M28.8,33.4c-0.7,0.2-1.3,0.4-1.9,0.6C27.5,33.8,28.2,33.6,28.8,33.4z M44.5,31.1c0.5,0,0.9,0,1.4,0c-0.1,0-0.2-0.1-0.2-0.2l-0.4-0.3c-0.1,0-0.1-0.1-0.2-0.1c0,0.1-0.1,0.1-0.2,0.1L44.7,31 C44.6,31.1,44.6,31.1,44.5,31.1z M74,12.3c-1.2,0-2.3,0.4-3.2,1.3c-0.9,0.9-1.3,1.9-1.3,3c0,1.3,0.4,2.3,1.3,3.2 c0.9,0.9,1.9,1.3,3.2,1.3c1.3,0,2.3-0.4,3.1-1.3c0.8-0.9,1.2-1.9,1.2-3.3c0-1.2-0.4-2.2-1.3-3.1C76.2,12.7,75.2,12.3,74,12.3z M42.8,72.1c-3.6,0-7.2-0.9-10.7-2.6c-3.6-1.8-6.1-4.3-7.4-7.6c-0.2-0.5-0.1-1,0.2-1.4s0.7-0.7,1.2-0.7h3.1c0.5,0,1,0.3,1.3,0.8 c1,1.8,2.6,3.2,4.9,4.2c4.8,2.1,10,2,14.5,0c2.2-1,4-2.5,5.3-4.4c0.3-0.4,0.7-0.6,1.2-0.6h2.9c0.5,0,1,0.2,1.2,0.7 c0.3,0.4,0.3,0.9,0.1,1.4c-1.3,3.3-3.8,5.8-7.3,7.6C50.1,71.3,46.5,72.1,42.8,72.1z M55.9,57.2c-2.2,0-4-0.7-5.4-2.1 s-2.1-3.2-2.1-5.3c0-2.2,0.7-4,2.1-5.3c1.4-1.3,3.2-2,5.4-2c2,0,3.8,0.7,5.2,2.1s2.1,3.2,2.1,5.2c0,2-0.7,3.8-2.1,5.2 C59.6,56.5,57.9,57.2,55.9,57.2z M55.9,45.5c-1.4,0-2.5,0.4-3.3,1.1c-0.8,0.8-1.2,1.8-1.2,3.2c0,1.3,0.4,2.4,1.2,3.2 s1.9,1.2,3.2,1.2c1.2,0,2.2-0.4,3-1.3c0.9-0.9,1.3-1.9,1.3-3.1c0-1.2-0.4-2.2-1.3-3.1C58.1,45.9,57.1,45.5,55.9,45.5z M29.4,57.2 c-2.1,0-3.9-0.7-5.3-2.2c-1.4-1.4-2-3.2-2-5.3c0-2.2,0.7-3.9,2-5.3c1.3-1.4,3.1-2,5.3-2c2.1,0,3.9,0.7,5.4,2 c1.5,1.4,2.3,3.1,2.3,5.3c0,2.1-0.8,3.9-2.3,5.3C33.3,56.5,31.5,57.2,29.4,57.2z M29.4,45.5c-1.3,0-2.4,0.4-3.2,1.2 c-0.8,0.8-1.2,1.8-1.2,3.2c0,1.3,0.4,2.4,1.2,3.2c0.8,0.8,1.8,1.2,3.1,1.2c1.3,0,2.4-0.4,3.3-1.3c0.9-0.8,1.3-1.9,1.3-3.2 c0-1.3-0.4-2.3-1.3-3.1C31.9,45.9,30.7,45.5,29.4,45.5z"
                                    })]
                                })
                            });
                        case "discord":
                            return (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 127.14 96.36",
                                style: {
                                    fill: "#fff",
                                    verticalAlign: "middle"
                                },
                                children: (0, a.jsx)("g", {
                                    children: (0, a.jsx)("g", {
                                        id: "Discord_Logos",
                                        "data-name": "Discord Logos",
                                        children: (0, a.jsx)("g", {
                                            children: (0, a.jsx)("path", {
                                                d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                                            })
                                        })
                                    })
                                })
                            });
                        default:
                            return null
                    }
                },
                B = function(c) {
                    switch (c) {
                        case "kr":
                            return "ko";
                        case "jp":
                            return "ja";
                        case "cn":
                        case "cnt":
                            return "zh";
                        default:
                            return c
                    }
                },
                P = function(c) {
                    var e = c.label,
                        n = c.locale;
                    return (0, t.useEffect)(function() {
                        function c() {
                            return (c = (0, A._)(function() {
                                var c, e;
                                return (0, k.Jh)(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (window.OneTrust) return [3, 2];
                                            return [4, new Promise(function(c) {
                                                return setTimeout(c, 100)
                                            })];
                                        case 1:
                                            return a.sent(), [3, 0];
                                        case 2:
                                            try {
                                                e = B(n), null === (c = window.OneTrust) || void 0 === c || c.changeLanguage(e)
                                            } catch (c) {
                                                console.warn(c)
                                            }
                                            return [2]
                                    }
                                })
                            })).apply(this, arguments)
                        }! function() {
                            c.apply(this, arguments)
                        }()
                    }, [n]), (0, a.jsx)("a", {
                        className: "no-track",
                        href: "#",
                        onClick: function() {
                            var c;
                            null === (c = window.OneTrust) || void 0 === c || c.ToggleInfoDisplay()
                        },
                        children: e
                    })
                },
                U = n(2681),
                Z = n.n(U),
                J = {
                    src: "/_next/static/media/deco.71d258f1.png",
                    height: 1128,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEWikqLEo5extMx7fn3+/fr0///FsIfk29L2///29vv///+4vsrR2tLFvZdWbJ/UzNjPpHpVfai/oYazkYX0+f/s6tlFXruWp6urjGLc4fdztNOljqWVfWT6J8JbAAAAG3RSTlMBE4b3Rjf7BRoNK7nZy7PGMOqQ4WWV/Pb9YMmUFq56AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nDXKRxKAIBAEwAE2Aoo5//+dlgf73MAvDMZsCkxzucZoQJF9uxsrlirpqaTIazqkI4XnM/b0bXUPDrxKowIysDeDhAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                R = {
                    src: "/_next/static/media/supercell_logo.73c8fcbc.png",
                    height: 84,
                    width: 104,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEX9/f34+Pj5+fn4+Pj5+fn7+/v6+vr6+vr4+Pj////a2tr09PS0VHKBAAAADHRSTlPLjrabpq7Bgm0TDi+4QhdHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeJwFwYkBwCAMA7GznYeW/fdFgk5vjzGq2rkQMZKgatxZcPk//YHiM9EDEl8AsbR9t8sAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                D = function(c, e) {
                    switch (c) {
                        case "ios":
                            return "/images/common/store-logos/".concat(e, "/app-store.svg");
                        case "android":
                            return "/images/common/store-logos/".concat(e, "/google-play.png");
                        case "amazon":
                            return "/images/common/store-logos/en/amazon.png"
                    }
                },
                O = function(c) {
                    var e = c.media,
                        n = c.url;
                    return (0, a.jsx)("a", {
                        href: n,
                        "aria-label": e,
                        children: (0, a.jsx)(H, {
                            type: e
                        })
                    })
                },
                I = function(c) {
                    var e = c.socialMedia,
                        n = c.translations,
                        t = c.urls,
                        o = c.locale,
                        s = Object.entries(e).map(function(c) {
                            var e = (0, v._)(c, 2),
                                n = e[0],
                                a = e[1];
                            return [N(n), a]
                        }).map(function(c) {
                            var e = (0, v._)(c, 2),
                                n = e[0],
                                t = e[1];
                            return (0, a.jsx)(O, {
                                media: n,
                                url: t
                            }, n)
                        });
                    return (0, a.jsxs)("footer", {
                        className: "".concat(Z().footer),
                        children: [(0, a.jsx)("div", {
                            className: "".concat(Z().links, " links"),
                            children: (0, a.jsxs)("div", {
                                className: Z()["links-wrapper"],
                                children: [(0, a.jsx)("a", {
                                    id: "footer-parens",
                                    href: t.parentsUrl,
                                    children: n.footer_parents
                                }), (0, a.jsx)("a", {
                                    id: "footer-tos",
                                    href: t.termsOfServiceUrl,
                                    children: n.footer_tos
                                }), (0, a.jsx)("a", {
                                    id: "footer-privacy-policy",
                                    href: t.privacyPolicyUrl,
                                    children: n.footer_privacy
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: Z()["footer-bottom"],
                            children: [(0, a.jsxs)("div", {
                                className: Z()["bottom-links"],
                                children: [(0, a.jsx)("a", {
                                    id: "footer-supercell-com",
                                    href: "https://supercell.com",
                                    children: (0, a.jsx)(r.Z, {
                                        src: R,
                                        alt: "Supercell Logo",
                                        width: 52,
                                        height: 42
                                    })
                                }), (0, a.jsx)(P, {
                                    locale: o,
                                    label: n.footer_cookies
                                })]
                            }), (0, a.jsx)("div", {
                                className: Z().social,
                                children: "cn" !== o && s
                            })]
                        })]
                    })
                },
                T = n(7570),
                W = n(7029),
                K = n(6088),
                F = n.n(K),
                X = n(7866),
                G = n.n(X),
                Y = function(c) {
                    var e = c.locale,
                        n = Object.entries(c.downloadLinks).map(function(c) {
                            var n = (0, v._)(c, 2),
                                t = n[0],
                                o = n[1],
                                s = D(t, e);
                            return (0, a.jsx)("a", {
                                href: o,
                                id: "".concat(t, "-download-link"),
                                children: (0, a.jsx)(r.Z, {
                                    alt: t,
                                    height: 60,
                                    width: 200,
                                    src: s,
                                    placeholder: "empty"
                                })
                            }, t)
                        }),
                        t = n.length;
                    return (0, a.jsx)("div", {
                        className: "".concat(G()["download-links"], " download-links"),
                        "data-links-amount": t,
                        children: n
                    })
                },
                q = ["ios", "android"],
                Q = new(F()),
                $ = function(c) {
                    var e = c.downloadLinks,
                        n = (0, v._)((0, t.useState)({
                            name: void 0,
                            version: void 0
                        }), 2),
                        r = n[0],
                        o = n[1];
                    (0, t.useEffect)(function() {
                        o(Q.getOS())
                    }, []);
                    var s = Object.fromEntries(Object.entries(e).filter(function(c) {
                        var e = (0, v._)(c, 2),
                            n = e[0];
                        if (e[1], !r.name) return !1;
                        var a = r.name.toLowerCase();
                        return !q.includes(a) || n === a
                    }));
                    return (0, a.jsx)(Y, (0, W._)((0, T._)({}, c), {
                        downloadLinks: s
                    }))
                },
                cc = n(7587),
                ce = n.n(cc),
                cn = n(9690),
                ca = n.n(cn),
                ct = n(5993);

            function cr() {
                var c = (0, v._)((0, t.useState)([]), 2),
                    e = c[0],
                    n = c[1];
                return (0, t.useEffect)(function() {
                    window.setInterval(function() {
                        var c = Math.floor(6 * Math.random()) + 1,
                            e = 80 * Math.random() + 20,
                            t = window.innerWidth / 2 * Math.random(),
                            r = 10 * Math.random() + 5,
                            o = "".concat(Math.random(), "-").concat(c, "-").concat(e, "-").concat(t, "-").concat(r),
                            s = (0, a.jsx)("img", {
                                alt: "Bubble",
                                src: "/images/game/bubbles/bubble".concat(c, ".svg"),
                                className: "bubble",
                                style: {
                                    width: "".concat(e, "px"),
                                    height: "".concat(e, "px"),
                                    left: "calc(50% + ".concat((125 + t) * (Math.random() > .5 ? 1 : -1), "px)"),
                                    transformOrigin: "center",
                                    animationDuration: "".concat(r, "s")
                                },
                                onAnimationEnd: function() {
                                    n(function(c) {
                                        return c.filter(function(c) {
                                            return c.id !== o
                                        })
                                    })
                                }
                            }, o);
                        n(function(c) {
                            return c.length >= 15 ? c : (0, ct._)(c).concat([{
                                element: s,
                                id: o
                            }])
                        })
                    }, 1e3)
                }, []), (0, a.jsx)("div", {
                    className: "bubbles-container",
                    children: e.map(function(c) {
                        return (0, a.jsx)(t.Fragment, {
                            children: c.element
                        }, c.id)
                    })
                })
            }
            var co = ["boombeach", "clashofclans"];

            function cs(c) {
                var e, n, o, u = c.locale,
                    f = c.config,
                    h = c.gameName,
                    _ = c.children,
                    p = c.ctaKey,
                    g = c.leadKey,
                    b = c.linkCommandOverride,
                    w = c.hideLead,
                    x = (n = (e = (0, v._)((0, t.useState)(f.downloadLinks), 2))[0], o = e[1], (0, t.useEffect)(function() {
                        var c = new URLSearchParams(window.location.search).get("code"),
                            e = new URLSearchParams(window.location.search).get("action");
                        c && "voucher" === e && (0, A._)(function() {
                            var e, n;
                            return (0, k.Jh)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, L(c)];
                                    case 1:
                                        return e = a.sent(), y.includes(e) ? o(null !== (n = f.downloadLinksSpongebob) && void 0 !== n ? n : f.downloadLinks) : o(f.downloadLinks), [2]
                                }
                            })
                        })()
                    }, [f.downloadLinks, f.downloadLinksSpongebob]), n),
                    j = f.translations[u],
                    C = f.localesWithLocalizedLogo.includes(u) ? "/images/game/logo-".concat(u, ".png") : "/images/game/logo.png",
                    z = f.socialMedia,
                    S = "".concat(h, "://"),
                    E = d(u),
                    N = l(u),
                    H = i(u),
                    B = f.gameHomePage,
                    P = Object.keys(x).length > 0;
                return (0, a.jsxs)("section", {
                    className: "".concat(ce().variable, " ").concat(ca().variable),
                    children: [(0, a.jsxs)("main", {
                        className: "".concat(ce().variable, " ").concat(ca().variable, " ").concat(s().main),
                        children: ["brawlstars" === h && (0, a.jsx)(cr, {}), (0, a.jsx)(m, {
                            currentLocale: u,
                            availableLocales: f.locales
                        }), (0, a.jsxs)("div", {
                            className: "".concat(s().contents, " contents"),
                            children: [(0, a.jsx)("a", {
                                id: "game-home-page",
                                href: B,
                                children: (0, a.jsx)(r.Z, {
                                    className: "logo ".concat(s().logo),
                                    alt: "logo",
                                    src: C,
                                    placeholder: "empty",
                                    height: 200,
                                    width: 350
                                })
                            }), (0, a.jsxs)("div", {
                                className: "nested-content ".concat(s()["nested-content"]),
                                children: [!w && (0, a.jsx)(t.Suspense, {
                                    children: (0, a.jsx)(M, {
                                        leadKey: g,
                                        t: j
                                    })
                                }), _, (0, a.jsx)(t.Suspense, {
                                    children: (0, a.jsx)(V, {
                                        linkCommandOverride: b,
                                        hasDownloadLinks: P,
                                        ctaKey: p,
                                        link: S,
                                        onClickLabel: j.general_nothing_happens,
                                        t: j
                                    })
                                }), P && (0, a.jsx)("div", {
                                    children: (0, a.jsx)(t.Suspense, {
                                        fallback: (0, a.jsx)(Y, {
                                            downloadLinks: x,
                                            locale: u
                                        }),
                                        children: (0, a.jsx)($, {
                                            downloadLinks: x,
                                            locale: u
                                        })
                                    })
                                })]
                            }), !co.includes(h) && (0, a.jsx)("section", {
                                className: "".concat(s()["deco-section"], " deco-section"),
                                children: (0, a.jsx)(r.Z, {
                                    width: 350,
                                    className: s().decoration,
                                    alt: "decoration",
                                    src: J,
                                    placeholder: "empty"
                                })
                            })]
                        })]
                    }), (0, a.jsx)(I, {
                        locale: u,
                        urls: {
                            parentsUrl: "https://supercell.com/en/parents/".concat(E),
                            termsOfServiceUrl: "https://supercell.com/en/terms-of-service/".concat(N),
                            privacyPolicyUrl: "https://supercell.com/en/privacy-policy/".concat(H)
                        },
                        translations: j,
                        socialMedia: z
                    })]
                })
            }
        },
        7938: function(c) {
            c.exports = {
                button: "styles_button__DNJ4N"
            }
        },
        7866: function(c) {
            c.exports = {
                extraSmall: "300px",
                small: "576px",
                medium: "768px",
                large: "992px",
                extraLarge: "1200px",
                "download-links": "styles_download-links__y17mc"
            }
        },
        2681: function(c) {
            c.exports = {
                extraSmall: "300px",
                small: "576px",
                medium: "768px",
                large: "992px",
                extraLarge: "1200px",
                footer: "styles_footer__1cZ8q",
                social: "styles_social__J7f1N",
                links: "styles_links__PIaVg",
                "links-wrapper": "styles_links-wrapper__BmrYJ",
                "footer-bottom": "styles_footer-bottom__4Uy_G",
                "bottom-links": "styles_bottom-links__RK3oy"
            }
        },
        1031: function(c) {
            c.exports = {
                "language-dropdown-wrapper": "styles_language-dropdown-wrapper__z8_b8",
                globe: "styles_globe__E9jxy",
                "language-dropdown": "styles_language-dropdown__tj_as"
            }
        },
        5302: function(c) {
            c.exports = {
                "clicked-label": "styles_clicked-label__XpTnN",
                "download-links-heading": "styles_download-links-heading__0ZBue"
            }
        },
        3999: function(c) {
            c.exports = {
                extraSmall: "300px",
                small: "576px",
                medium: "768px",
                large: "992px",
                extraLarge: "1200px",
                main: "styles_main__H_BuV",
                logo: "styles_logo__fO964",
                "deco-section": "styles_deco-section__LmdbE",
                contents: "styles_contents__ElCjD",
                "download-links-heading": "styles_download-links-heading__JzV9U",
                "nested-content": "styles_nested-content__FJZEg"
            }
        }
    }
]);