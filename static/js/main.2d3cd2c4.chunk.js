(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t(19);
    },
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    ,
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(3),
        c = t.n(r),
        i = t(1);
      t(10);
      var o = function () {
        var e = function (e) {
          return function (a) {
            a.preventDefault(),
              (document.getElementById("nav-options").style.visibility =
                "open" === e ? "visible" : "hidden");
          };
        };
        return (
          Object(n.useEffect)(function () {
            window.innerWidth < 768 &&
              document
                .getElementById("nav-options")
                .classList.remove("rightReveal");
          }, []),
          l.a.createElement(
            "nav",
            null,
            l.a.createElement(
              "div",
              { className: "burger-menu leftReveal", onClick: e("open") },
              l.a.createElement("i", {
                id: "mobile",
                className: "fas fa-bars fa-2x",
              })
            ),
            l.a.createElement(
              "div",
              { id: "nav-options", className: "nav-options rightReveal" },
              l.a.createElement(
                "div",
                { className: "options" },
                l.a.createElement(
                  "a",
                  { href: "#introContainer", className: "initial-option" },
                  "Introduction ",
                  l.a.createElement("span", null)
                ),
                l.a.createElement("a", { href: "#work-container" }, "Works"),
                l.a.createElement(
                  "a",
                  { href: "#contact-container" },
                  "Contact"
                )
              ),
              l.a.createElement(
                "div",
                { id: "mobile", className: "closeMenu", onClick: e("close") },
                l.a.createElement("i", { className: "fas fa-times fa-lg" })
              )
            ),
            l.a.createElement(
              "div",
              { className: "brand leftReveal" },
              l.a.createElement("img", { src: "/media/logo.svg", alt: "logo" })
            )
          )
        );
      };
      t(11);
      var s = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            "a",
            { href: "https://github.com/zrDan", target: "blank" },
            l.a.createElement("i", { className: "fab fa-github fa-lg" })
          ),
          l.a.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/daniel-garc\xeda-torres-6974911b3",
              target: "blank",
            },
            l.a.createElement("i", { className: "fab fa-linkedin-in fa-lg" })
          )
        );
      };
      t(12);
      var m = function () {
        return l.a.createElement(
          "div",
          { className: "introContainer", id: "introContainer" },
          l.a.createElement(
            "div",
            { className: "info dropDown" },
            l.a.createElement(
              "div",
              { className: "infoUser" },
              l.a.createElement(
                "div",
                { className: "user" },
                "Daniel ",
                l.a.createElement("br", null),
                " Garc\xeda."
              ),
              l.a.createElement(
                "div",
                { className: "line" },
                l.a.createElement("span", null)
              ),
              l.a.createElement(
                "div",
                { className: "media" },
                l.a.createElement(s, null)
              )
            ),
            l.a.createElement(
              "div",
              { className: "information" },
              l.a.createElement(
                "div",
                { className: "infoTitle" },
                "Software Engineer and Front-end Developer, based in M\xe9xico."
              ),
              l.a.createElement(
                "div",
                { className: "infoDescription" },
                "I'm a software engineer based in M\xe9xico, I specialize in building (and occasionally designing) websites and everything in between."
              )
            )
          )
        );
      };
      var d = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            "div",
            {
              className: "project leftReveal",
              onClick: function () {
                return window.open("https://xdelta.netlify.app", "_blank");
              },
            },
            l.a.createElement(
              "div",
              { className: "project-presentation xdelta" },
              l.a.createElement("span", null)
            ),
            l.a.createElement(
              "div",
              { className: "project-description" },
              l.a.createElement(
                "div",
                { className: "project-title" },
                "x-delta"
              ),
              l.a.createElement(
                "div",
                { className: "project-text" },
                "Design of a web application focused on e-commerce of sneakers."
              )
            ),
            l.a.createElement(
              "div",
              { className: "project-tools" },
              l.a.createElement("div", null, "NodeJs"),
              l.a.createElement("div", null, "React"),
              l.a.createElement("div", null, "Redux"),
              l.a.createElement("div", null, "MongoDB")
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "project rightReveal",
              onClick: function () {
                return window.open("https://aedificium.netlify.app/", "_blank");
              },
            },
            l.a.createElement(
              "div",
              { className: "project-presentation  dashboard" },
              l.a.createElement("span", null)
            ),
            l.a.createElement(
              "div",
              { className: "project-description" },
              l.a.createElement(
                "div",
                { className: "project-title" },
                "aedificium"
              ),
              l.a.createElement(
                "div",
                { className: "project-text" },
                "Design of a web page that shows the information of a business."
              )
            ),
            l.a.createElement(
              "div",
              { className: "project-tools" },
              l.a.createElement("div", null, "HTML"),
              l.a.createElement("div", null, "Css"),
              l.a.createElement("div", null, "Js")
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "project leftReveal",
              onClick: function () {
                return window.open("https://xmonster.netlify.app/m", "_blank");
              },
            },
            l.a.createElement(
              "div",
              { className: "project-presentation  monster" },
              l.a.createElement("span", null)
            ),
            l.a.createElement(
              "div",
              { className: "project-description" },
              l.a.createElement(
                "div",
                { className: "project-title" },
                "monster energy"
              ),
              l.a.createElement(
                "div",
                { className: "project-text" },
                "This is a re-design of monster products section."
              )
            ),
            l.a.createElement(
              "div",
              { className: "project-tools" },
              l.a.createElement("div", null, "React"),
              l.a.createElement("div", null, "Redux")
            )
          )
        );
      };
      t(13);
      var v = function () {
          return l.a.createElement(
            "div",
            { className: "work-container", id: "work-container" },
            l.a.createElement(
              "div",
              { className: "work-info" },
              l.a.createElement(
                "div",
                { className: "work-text leftReveal" },
                l.a.createElement(
                  "div",
                  { className: "work-title" },
                  l.a.createElement("p", null, "- Portfolio "),
                  "All Creative Works."
                ),
                l.a.createElement(
                  "div",
                  { className: "work-description" },
                  "I enjoy creating things that live on the internet."
                )
              ),
              l.a.createElement(
                "div",
                { className: "work-image rightReveal" },
                l.a.createElement("img", { src: "/media/red.svg", alt: "red" })
              )
            ),
            l.a.createElement(
              "div",
              { className: "projects-container" },
              l.a.createElement(d, null)
            )
          );
        },
        E = t(4),
        u = t.n(E);
      t(16);
      var p = function () {
        return l.a.createElement(
          "div",
          { className: "contact-container", id: "contact-container" },
          l.a.createElement(
            "div",
            { className: "contact-info leftReveal" },
            l.a.createElement(
              "div",
              { className: "contact-title" },
              l.a.createElement("p", null, "- Contact "),
              "Got a project?",
              l.a.createElement("br", null),
              "Let\xb4s talk."
            ),
            l.a.createElement(
              "div",
              { className: "contact-description" },
              "My inbox is always open. Whether you have a question, project or just want to say hi, I'll try my best to get back to you!",
              l.a.createElement("p", null, "contact@gtdan.com")
            )
          ),
          l.a.createElement(
            "div",
            { className: "contact-form rightReveal" },
            l.a.createElement(
              "form",
              {
                onSubmit: function (e) {
                  e.preventDefault(),
                    u.a
                      .sendForm(
                        "ownmail",
                        "first_template",
                        e.target,
                        "user_sz4hfUdyeYVh5j2olKNjN"
                      )
                      .then(
                        function (e) {
                          console.log(e.text);
                        },
                        function (e) {
                          console.log(e.text);
                        }
                      ),
                    e.target.reset();
                },
              },
              l.a.createElement(
                "div",
                { className: "form-section" },
                l.a.createElement(
                  "div",
                  { className: "form-label" },
                  "What\xb4s your name?"
                ),
                l.a.createElement("input", {
                  type: "text",
                  name: "name",
                  required: !0,
                })
              ),
              l.a.createElement(
                "div",
                { className: "form-section" },
                l.a.createElement(
                  "div",
                  { className: "form-label" },
                  "Your fancy email"
                ),
                l.a.createElement("input", {
                  type: "email",
                  name: "email",
                  required: !0,
                })
              ),
              l.a.createElement(
                "div",
                { className: "form-section" },
                l.a.createElement(
                  "div",
                  { className: "form-label send-mail" },
                  "Tell me about your project",
                  l.a.createElement(
                    "button",
                    { type: "submit" },
                    l.a.createElement("i", { className: "fas fa-arrow-right" })
                  )
                ),
                l.a.createElement("textarea", {
                  id: "styled",
                  rows: "1",
                  name: "message",
                  required: !0,
                })
              )
            )
          )
        );
      };
      t(17);
      var f = function () {
        return l.a.createElement(
          "div",
          { className: "footer-container" },
          l.a.createElement(
            "div",
            { className: "footer-content bottomReveal" },
            l.a.createElement(
              "div",
              { className: "footer-logo" },
              l.a.createElement("img", { src: "/media/logo.svg", alt: "logo" })
            ),
            l.a.createElement(
              "div",
              { className: "footer-text" },
              "Thanks For Scrolling"
            ),
            l.a.createElement(
              "div",
              { className: "media-footer" },
              l.a.createElement(s, null)
            )
          )
        );
      };
      var N = function () {
        return (
          Object(n.useEffect)(function () {
            Object(i.a)().reveal(".dropDown", {
              delay: 500,
              duration: 950,
              distance: "30px",
              origin: "top",
            }),
              Object(i.a)().reveal(".leftReveal", {
                delay: 600,
                duration: 950,
                distance: "30px",
                origin: "left",
              }),
              Object(i.a)().reveal(".rightReveal", {
                delay: 600,
                duration: 950,
                distance: "30px",
                origin: "right",
              }),
              Object(i.a)().reveal(".bottomReveal", {
                delay: 600,
                duration: 950,
                distance: "10px",
                origin: "bottom",
              });
          }, []),
          l.a.createElement(
            "div",
            { className: "App" },
            l.a.createElement(o, null),
            l.a.createElement(m, null),
            l.a.createElement(v, null),
            l.a.createElement(p, null),
            l.a.createElement(f, null)
          )
        );
      };
      t(18);
      c.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(N, null)),
        document.getElementById("root")
      );
    },
  ],
  [[5, 1, 2]],
]);
//# sourceMappingURL=main.2d3cd2c4.chunk.js.map
