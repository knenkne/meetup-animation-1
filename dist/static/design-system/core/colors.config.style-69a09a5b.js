import { _ as _slicedToArray } from './_rollupPluginBabelHelpers-3e859d87.js';

/* Новая палитра. Использовать только эти цвета в дизайне 3.0. */

/* Calc rgba from hex value*/
var hex2rgba = function hex2rgba(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var _hex$match$map = hex.match(/\w\w/g).map(function (x) {
    return parseInt(x, 16);
  }),
      _hex$match$map2 = _slicedToArray(_hex$match$map, 3),
      r = _hex$match$map2[0],
      g = _hex$match$map2[1],
      b = _hex$match$map2[2];

  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(alpha / 100, ")");
};
/* RED */

var red9 = '#280000';
var red8 = '#510000';
var red7 = '#7a0000';
var red6 = '#a30000';
var red5 = '#cc0000';
var red4 = '#d63333';
var red3 = '#e06666';
var red2 = '#ea9999';
var red1 = '#f4cccc';
var red0 = '#f9e5e5';
/* ORANGE */

var orange9 = '#311402';
var orange8 = '#622804';
var orange7 = '#933c06';
var orange6 = '#c45008';
var orange5 = '#f6650a';
var orange4 = '#fe8240';
var orange3 = '#ff9e69';
var orange2 = '#ffb992';
var orange1 = '#ffd4bc';
var orange0 = '#ffefe6';
/* YELLOW */

var yellow9 = '#332800';
var yellow8 = '#665100';
var yellow7 = '#997a00';
/* yellow-7 - gold */

var yellow6 = '#cca300';
var yellow5 = '#ffcc00';
var yellow4 = '#ffd633';
var yellow3 = '#ffe066';
var yellow2 = '#ffea99';
var yellow1 = '#fff4cc';
var yellow0 = '#fff9e5';
/* LIME */

var lime9 = '#1e280a';
var lime8 = '#3d5114';
var lime7 = '#5b7a1e';
var lime6 = '#7aa328';
var lime5 = '#99cc33';
var lime4 = '#add65b';
var lime3 = '#c1e084';
var lime2 = '#d6eaad';
var lime1 = '#eaf4d6';
var lime0 = '#f4f9ea';
/* GREEN */

var green9 = '#012110';
var green8 = '#034220';
var green7 = '#046331';
var green6 = '#068441';
var green5 = '#08a652';
var green4 = '#34b76f';
var green3 = '#60c78d';
var green2 = '#8bd8aa';
var green1 = '#b7e8c8';
var green0 = '#e3f9e5';
/* TEAL */

var teal9 = '#00281e';
var teal8 = '#00513d';
var teal7 = '#007a5b';
var teal6 = '#00a37a';
var teal5 = '#00cc99';
var teal4 = '#33d6ad';
var teal3 = '#66e0c1';
var teal2 = '#99ead6';
var teal1 = '#ccf4ea';
var teal0 = '#e5f9f4';
/* AQUA */

var aqua9 = '#0a2828';
var aqua8 = '#145151';
var aqua7 = '#1e7a7a';
var aqua6 = '#28a3a3';
var aqua5 = '#33cccc';
var aqua4 = '#5bd6d6';
var aqua3 = '#84e0e0';
var aqua2 = '#adeaea';
var aqua1 = '#d6f4f4';
var aqua0 = '#eaf9f9';
/* SKY BLUE */

var skyBlue9 = '#0a2833';
var skyBlue8 = '#145166';
var skyBlue7 = '#1e7a99';
var skyBlue6 = '#28a3cc';
var skyBlue5 = '#33ccff';
var skyBlue4 = '#5bd6ff';
var skyBlue3 = '#84e0ff';
var skyBlue2 = '#adeaff';
var skyBlue1 = '#d6f4ff';
var skyBlue0 = '#eaf9ff';
/* BLUE */

var blue9 = '#0a0a1e';
var blue8 = '#14143d';
var blue7 = '#1e1e5b';
var blue6 = '#28287a';
var blue5 = '#333399';
var blue4 = '#5b5bad';
var blue3 = '#8484c1';
var blue2 = '#adadd6';
var blue1 = '#d6d6ea';
var blue0 = '#eaeaf4';
/* VIOLET */

var violet9 = '#140028';
var violet8 = '#280051';
var violet7 = '#3d007a';
var violet6 = '#5100a3';
var violet5 = '#6600cc';
var violet4 = '#8433d6';
var violet3 = '#a366e0';
var violet2 = '#c199ea';
var violet1 = '#e0ccf4';
var violet0 = '#efe5f9';
/* PURPLE */

var purple9 = '#1e0a1e';
var purple8 = '#3d143d';
var purple7 = '#5b1e5b';
var purple6 = '#7a287a';
var purple5 = '#993399';
var purple4 = '#ad5bad';
var purple3 = '#c184c1';
var purple2 = '#d6add6';
var purple1 = '#ead6ea';
var purple0 = '#f4eaf4';
/* PINK */

var pink9 = '#280a14';
var pink8 = '#511428';
var pink7 = '#7a1e3d';
var pink6 = '#a32851';
var pink5 = '#cc3366';
var pink4 = '#d65b84';
var pink3 = '#e084a3';
var pink2 = '#eaadc1';
var pink1 = '#f4d6e0';
var pink0 = '#f9eaef';
/* GRAY */

var gray9 = '#262626';
var gray8 = '#4D4D4D';
var gray7 = '#737373';
var gray6 = '#909090';
var gray5 = '#adadad';
var gray4 = '#C2C2C2';
var gray3 = '#d6d6d6';
var gray2 = '#EBEBEB';
var gray1 = '#F2F2F2';
var gray0 = '#FAFAFA';
/* GRAY ALPHA */

var gray4A = hex2rgba(gray9, 4);
var gray8A = hex2rgba(gray9, 8);
var gray16A = hex2rgba(gray9, 16);
var gray24A = hex2rgba(gray9, 24);
var gray40A = hex2rgba(gray9, 40);
var gray55A = hex2rgba(gray9, 55);
var gray60A = hex2rgba(gray9, 60);
var gray70A = hex2rgba(gray9, 70);
/* COOl GRAY */

var coolGray9 = '#131618';
var coolGray8 = '#262c31';
var coolGray7 = '#3a424a';
var coolGray6 = '#4d5862';
var coolGray5 = '#616e7c';
var coolGray4 = '#808b95';
var coolGray3 = '#a0a8b0';
var coolGray2 = '#bfc5ca';
var coolGray1 = '#dfe2e4';
var coolGray0 = '#eff0f1';
/* GRAPHITE */

var graphite9 = '#121212';
var graphite8 = '#1e1e1e';
var graphite7 = '#222222';
var graphite6 = '#242424';
var graphite5 = '#272727';
var graphite4 = '#2c2c2c';
var graphite3 = '#2e2e2e';
var graphite2 = '#323232';
var graphite1 = '#353535';
var graphite0 = '#383838';
/* WHITE */

var white = '#ffffff';
var white70A = hex2rgba(white, 60);
var white55A = hex2rgba(white, 55);
/* BLACK */

var black = '#000000';

var colors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hex2rgba: hex2rgba,
    red9: red9,
    red8: red8,
    red7: red7,
    red6: red6,
    red5: red5,
    red4: red4,
    red3: red3,
    red2: red2,
    red1: red1,
    red0: red0,
    orange9: orange9,
    orange8: orange8,
    orange7: orange7,
    orange6: orange6,
    orange5: orange5,
    orange4: orange4,
    orange3: orange3,
    orange2: orange2,
    orange1: orange1,
    orange0: orange0,
    yellow9: yellow9,
    yellow8: yellow8,
    yellow7: yellow7,
    yellow6: yellow6,
    yellow5: yellow5,
    yellow4: yellow4,
    yellow3: yellow3,
    yellow2: yellow2,
    yellow1: yellow1,
    yellow0: yellow0,
    lime9: lime9,
    lime8: lime8,
    lime7: lime7,
    lime6: lime6,
    lime5: lime5,
    lime4: lime4,
    lime3: lime3,
    lime2: lime2,
    lime1: lime1,
    lime0: lime0,
    green9: green9,
    green8: green8,
    green7: green7,
    green6: green6,
    green5: green5,
    green4: green4,
    green3: green3,
    green2: green2,
    green1: green1,
    green0: green0,
    teal9: teal9,
    teal8: teal8,
    teal7: teal7,
    teal6: teal6,
    teal5: teal5,
    teal4: teal4,
    teal3: teal3,
    teal2: teal2,
    teal1: teal1,
    teal0: teal0,
    aqua9: aqua9,
    aqua8: aqua8,
    aqua7: aqua7,
    aqua6: aqua6,
    aqua5: aqua5,
    aqua4: aqua4,
    aqua3: aqua3,
    aqua2: aqua2,
    aqua1: aqua1,
    aqua0: aqua0,
    skyBlue9: skyBlue9,
    skyBlue8: skyBlue8,
    skyBlue7: skyBlue7,
    skyBlue6: skyBlue6,
    skyBlue5: skyBlue5,
    skyBlue4: skyBlue4,
    skyBlue3: skyBlue3,
    skyBlue2: skyBlue2,
    skyBlue1: skyBlue1,
    skyBlue0: skyBlue0,
    blue9: blue9,
    blue8: blue8,
    blue7: blue7,
    blue6: blue6,
    blue5: blue5,
    blue4: blue4,
    blue3: blue3,
    blue2: blue2,
    blue1: blue1,
    blue0: blue0,
    violet9: violet9,
    violet8: violet8,
    violet7: violet7,
    violet6: violet6,
    violet5: violet5,
    violet4: violet4,
    violet3: violet3,
    violet2: violet2,
    violet1: violet1,
    violet0: violet0,
    purple9: purple9,
    purple8: purple8,
    purple7: purple7,
    purple6: purple6,
    purple5: purple5,
    purple4: purple4,
    purple3: purple3,
    purple2: purple2,
    purple1: purple1,
    purple0: purple0,
    pink9: pink9,
    pink8: pink8,
    pink7: pink7,
    pink6: pink6,
    pink5: pink5,
    pink4: pink4,
    pink3: pink3,
    pink2: pink2,
    pink1: pink1,
    pink0: pink0,
    gray9: gray9,
    gray8: gray8,
    gray7: gray7,
    gray6: gray6,
    gray5: gray5,
    gray4: gray4,
    gray3: gray3,
    gray2: gray2,
    gray1: gray1,
    gray0: gray0,
    gray4A: gray4A,
    gray8A: gray8A,
    gray16A: gray16A,
    gray24A: gray24A,
    gray40A: gray40A,
    gray55A: gray55A,
    gray60A: gray60A,
    gray70A: gray70A,
    coolGray9: coolGray9,
    coolGray8: coolGray8,
    coolGray7: coolGray7,
    coolGray6: coolGray6,
    coolGray5: coolGray5,
    coolGray4: coolGray4,
    coolGray3: coolGray3,
    coolGray2: coolGray2,
    coolGray1: coolGray1,
    coolGray0: coolGray0,
    graphite9: graphite9,
    graphite8: graphite8,
    graphite7: graphite7,
    graphite6: graphite6,
    graphite5: graphite5,
    graphite4: graphite4,
    graphite3: graphite3,
    graphite2: graphite2,
    graphite1: graphite1,
    graphite0: graphite0,
    white: white,
    white70A: white70A,
    white55A: white55A,
    black: black
});

export { teal7 as $, yellow4 as A, yellow3 as B, yellow2 as C, yellow1 as D, yellow0 as E, lime9 as F, lime8 as G, lime7 as H, lime6 as I, lime5 as J, lime4 as K, lime3 as L, lime2 as M, lime1 as N, lime0 as O, green9 as P, green8 as Q, green7 as R, green6 as S, green5 as T, green4 as U, green3 as V, green2 as W, green1 as X, green0 as Y, teal9 as Z, teal8 as _, red8 as a, pink3 as a$, teal6 as a0, teal5 as a1, teal4 as a2, teal3 as a3, teal2 as a4, teal1 as a5, teal0 as a6, aqua9 as a7, aqua8 as a8, aqua7 as a9, blue0 as aA, violet9 as aB, violet8 as aC, violet7 as aD, violet6 as aE, violet5 as aF, violet4 as aG, violet3 as aH, violet2 as aI, violet1 as aJ, violet0 as aK, purple9 as aL, purple8 as aM, purple7 as aN, purple6 as aO, purple5 as aP, purple4 as aQ, purple3 as aR, purple2 as aS, purple1 as aT, purple0 as aU, pink9 as aV, pink8 as aW, pink7 as aX, pink6 as aY, pink5 as aZ, pink4 as a_, aqua6 as aa, aqua5 as ab, aqua4 as ac, aqua3 as ad, aqua2 as ae, aqua1 as af, aqua0 as ag, skyBlue9 as ah, skyBlue8 as ai, skyBlue7 as aj, skyBlue6 as ak, skyBlue5 as al, skyBlue4 as am, skyBlue3 as an, skyBlue2 as ao, skyBlue1 as ap, skyBlue0 as aq, blue9 as ar, blue8 as as, blue7 as at, blue6 as au, blue5 as av, blue4 as aw, blue3 as ax, blue2 as ay, blue1 as az, red7 as b, pink2 as b0, pink1 as b1, pink0 as b2, gray9 as b3, gray8 as b4, gray7 as b5, gray6 as b6, gray5 as b7, gray4 as b8, gray3 as b9, graphite4 as bA, graphite3 as bB, graphite2 as bC, graphite1 as bD, graphite0 as bE, white as bF, white70A as bG, white55A as bH, black as bI, colors as bJ, gray2 as ba, gray1 as bb, gray0 as bc, gray4A as bd, gray8A as be, gray16A as bf, gray24A as bg, gray40A as bh, gray55A as bi, gray60A as bj, gray70A as bk, coolGray9 as bl, coolGray8 as bm, coolGray7 as bn, coolGray6 as bo, coolGray5 as bp, coolGray4 as bq, coolGray3 as br, coolGray2 as bs, coolGray1 as bt, coolGray0 as bu, graphite9 as bv, graphite8 as bw, graphite7 as bx, graphite6 as by, graphite5 as bz, red6 as c, red5 as d, red4 as e, red3 as f, red2 as g, hex2rgba as h, red1 as i, red0 as j, orange8 as k, orange7 as l, orange6 as m, orange5 as n, orange9 as o, orange4 as p, orange3 as q, red9 as r, orange2 as s, orange1 as t, orange0 as u, yellow8 as v, yellow7 as w, yellow6 as x, yellow9 as y, yellow5 as z };
//# sourceMappingURL=colors.config.style-69a09a5b.js.map
