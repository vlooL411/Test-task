_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [5],
  {
    0: function (n, e, t) {
      t("74v/"), (n.exports = t("nOHt"));
    },
    "74v/": function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t("cha2");
        },
      ]);
    },
    DNQZ: function (n, e, t) {
      n.exports = {
        header: "header_header__Ie74F",
        code: "header_code__31C7C",
        cart: "header_cart__2647W",
        quantity: "header_quantity__2UsFr",
      };
    },
    NHVU: function (n, e, t) {},
    QxQM: function (n, e, t) {},
    cha2: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, "CartContext", function () {
          return _;
        });
      var a = t("q1tI"),
        r = t.n(a),
        c = (t("QxQM"), t("NHVU"), t("DNQZ")),
        u = t.n(c),
        o = r.a.createElement,
        s = function () {
          var n = u.a.header,
            e = u.a.cart,
            t = u.a.code,
            a = u.a.quantity;
          return o(
            "div",
            { className: n },
            o(
              "p",
              null,
              o(
                "span",
                { className: t },
                o("em", null, "<"),
                o("i", null, "/"),
                o("em", null, ">")
              ),
              o("span", null, "Front-end Developer Test Task"),
              o(
                "span",
                { className: e },
                "cart",
                o("img", { src: "svg/cart.svg" }),
                o(_.Consumer, null, function (n) {
                  var e = n.count;
                  return e ? o("span", { className: a }, e) : null;
                })
              )
            )
          );
        },
        l = r.a.createElement,
        _ = Object(a.createContext)(null);
      e.default = function (n) {
        var e = n.Component,
          t = n.pageProps,
          r = Object(a.useState)(0),
          c = r[0],
          u = r[1];
        return l(
          "div",
          { className: "root" },
          l(
            _.Provider,
            { value: { count: c, changeCount: u } },
            l(s, null),
            l(e, t)
          )
        );
      };
    },
  },
  [[0, 0, 2, 1, 3]],
]);
