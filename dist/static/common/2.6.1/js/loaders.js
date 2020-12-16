!(function () {
  function e(e) {
    return e[Math.floor(Math.random() * e.length)]
  }
  function t(e) {
    var t = e.replace("****", "2020").split("."),
      n = t[0],
      a = t[1] - 1,
      r = t[2]
    return new Date(r, a, n, 0, 0, 0)
  }
  var n = {
      morning: { interval: [7, 11], title: "Доброе утро!" },
      day: { interval: [12, 17], title: "Добрый день!" },
      evening: { interval: [18, 22], title: "Добрый вечер!" },
    },
    a = { birthday: "С Днём Рождения!", none: "" },
    r = 200
  window.getLoader = function (i, o, s) {
    var l = Object.keys(i),
      u = null,
      c = (function () {
        var e = new Date()
        return (
          e.setHours(0),
          e.setMinutes(0),
          e.setSeconds(0),
          e.setMilliseconds(0),
          e
        )
      })().getTime(),
      d = [],
      v = [],
      p = [],
      f = document.querySelector(".scaffold__entry")
    l.forEach(function (e) {
      var n = i[e],
        a = n.options
      if (a)
        var r = a.start,
          o = a.end,
          s = a.birthDay
      if (r && o) {
        var l = t(r).getTime(),
          u = t(o).getTime()
        c >= l && c <= u && v.push(n)
      } else s ? d.push(n) : p.push(n)
    })
    var g = s && t(s).getTime() === c,
      h =
        o +
        "/loaders/" +
        (u =
          g && d.length
            ? i[e(d).value]
            : v.length
            ? i[e(v).value]
            : i[e(p).value]).value +
        ".json",
      m = new XMLHttpRequest()
    if ((m.open("GET", h, !1), m.send(), u && m.status === r)) {
      var y = JSON.parse(m.responseText)
      lottie.setQuality("low")
      var w = lottie.loadAnimation({
        container: f,
        renderer: "svg",
        loop: !1,
        autoplay: !1,
        animationData: y,
        rendererSettings: {
          progressiveLoad: !0,
          preserveAspectRatio: "xMidYMid slice",
        },
      })
      w.setSubframe(!1), w.play()
      var M = u.options && u.options.greeting,
        b = document.createElement("p")
      ;(b.textContent = M
        ? a[M]
        : (function () {
            var e = new Date().getHours(),
              t = "Доброй ночи!"
            return 'Добрый вечер,\nМаксим!'
          })()),
        b.classList.add("greet"),
        g && b.classList.add("birthday"),
        f.appendChild(b)
    }
  }
})()
