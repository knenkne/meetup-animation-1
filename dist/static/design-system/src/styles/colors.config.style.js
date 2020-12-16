/* Новая палитра. Использовать только эти цвета в дизайне 3.0. */

/* Calc rgba from hex value*/
export const hex2rgba = (hex, alpha = 100) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha / 100})`
}


/* RED */

export const red9 = '#280000'
export const red8 = '#510000'
export const red7 = '#7a0000'
export const red6 = '#a30000'
export const red5 = '#cc0000'
export const red4 = '#d63333'
export const red3 = '#e06666'
export const red2 = '#ea9999'
export const red1 = '#f4cccc'
export const red0 = '#f9e5e5'

/* ORANGE */

export const orange9 = '#311402'
export const orange8 = '#622804'
export const orange7 = '#933c06'
export const orange6 = '#c45008'
export const orange5 = '#f6650a'
export const orange4 = '#fe8240'
export const orange3 = '#ff9e69'
export const orange2 = '#ffb992'
export const orange1 = '#ffd4bc'
export const orange0 = '#ffefe6'

/* YELLOW */

export const yellow9 = '#332800'
export const yellow8 = '#665100'
export const yellow7 = '#997a00'

/* yellow-7 - gold */
export const yellow6 = '#cca300'
export const yellow5 = '#ffcc00'
export const yellow4 = '#ffd633'
export const yellow3 = '#ffe066'
export const yellow2 = '#ffea99'
export const yellow1 = '#fff4cc'
export const yellow0 = '#fff9e5'

/* LIME */

export const lime9 = '#1e280a'
export const lime8 = '#3d5114'
export const lime7 = '#5b7a1e'
export const lime6 = '#7aa328'
export const lime5 = '#99cc33'
export const lime4 = '#add65b'
export const lime3 = '#c1e084'
export const lime2 = '#d6eaad'
export const lime1 = '#eaf4d6'
export const lime0 = '#f4f9ea'

/* GREEN */

export const green9 = '#012110'
export const green8 = '#034220'
export const green7 = '#046331'
export const green6 = '#068441'
export const green5 = '#08a652'
export const green4 = '#34b76f'
export const green3 = '#60c78d'
export const green2 = '#8bd8aa'
export const green1 = '#b7e8c8'
export const green0 = '#e3f9e5'

/* TEAL */

export const teal9 = '#00281e'
export const teal8 = '#00513d'
export const teal7 = '#007a5b'
export const teal6 = '#00a37a'
export const teal5 = '#00cc99'
export const teal4 = '#33d6ad'
export const teal3 = '#66e0c1'
export const teal2 = '#99ead6'
export const teal1 = '#ccf4ea'
export const teal0 = '#e5f9f4'

/* AQUA */

export const aqua9 = '#0a2828'
export const aqua8 = '#145151'
export const aqua7 = '#1e7a7a'
export const aqua6 = '#28a3a3'
export const aqua5 = '#33cccc'
export const aqua4 = '#5bd6d6'
export const aqua3 = '#84e0e0'
export const aqua2 = '#adeaea'
export const aqua1 = '#d6f4f4'
export const aqua0 = '#eaf9f9'

/* SKY BLUE */

export const skyBlue9 = '#0a2833'
export const skyBlue8 = '#145166'
export const skyBlue7 = '#1e7a99'
export const skyBlue6 = '#28a3cc'
export const skyBlue5 = '#33ccff'
export const skyBlue4 = '#5bd6ff'
export const skyBlue3 = '#84e0ff'
export const skyBlue2 = '#adeaff'
export const skyBlue1 = '#d6f4ff'
export const skyBlue0 = '#eaf9ff'

/* BLUE */

export const blue9 = '#0a0a1e'
export const blue8 = '#14143d'
export const blue7 = '#1e1e5b'
export const blue6 = '#28287a'
export const blue5 = '#333399'
export const blue4 = '#5b5bad'
export const blue3 = '#8484c1'
export const blue2 = '#adadd6'
export const blue1 = '#d6d6ea'
export const blue0 = '#eaeaf4'

/* VIOLET */

export const violet9 = '#140028'
export const violet8 = '#280051'
export const violet7 = '#3d007a'
export const violet6 = '#5100a3'
export const violet5 = '#6600cc'
export const violet4 = '#8433d6'
export const violet3 = '#a366e0'
export const violet2 = '#c199ea'
export const violet1 = '#e0ccf4'
export const violet0 = '#efe5f9'

/* PURPLE */

export const purple9 = '#1e0a1e'
export const purple8 = '#3d143d'
export const purple7 = '#5b1e5b'
export const purple6 = '#7a287a'
export const purple5 = '#993399'
export const purple4 = '#ad5bad'
export const purple3 = '#c184c1'
export const purple2 = '#d6add6'
export const purple1 = '#ead6ea'
export const purple0 = '#f4eaf4'

/* PINK */

export const pink9 = '#280a14'
export const pink8 = '#511428'
export const pink7 = '#7a1e3d'
export const pink6 = '#a32851'
export const pink5 = '#cc3366'
export const pink4 = '#d65b84'
export const pink3 = '#e084a3'
export const pink2 = '#eaadc1'
export const pink1 = '#f4d6e0'
export const pink0 = '#f9eaef'

/* GRAY */

export const gray9 = '#262626'
export const gray8 = '#4D4D4D'
export const gray7 = '#737373'
export const gray6 = '#909090'
export const gray5 = '#adadad'
export const gray4 = '#C2C2C2'
export const gray3 = '#d6d6d6'
export const gray2 = '#EBEBEB'
export const gray1 = '#F2F2F2'
export const gray0 = '#FAFAFA'

/* GRAY ALPHA */
export const gray4A = hex2rgba(gray9, 4)
export const gray8A = hex2rgba(gray9, 8)
export const gray16A = hex2rgba(gray9, 16)
export const gray24A = hex2rgba(gray9, 24)
export const gray40A = hex2rgba(gray9, 40)
export const gray55A = hex2rgba(gray9, 55)
export const gray60A = hex2rgba(gray9, 60)
export const gray70A = hex2rgba(gray9, 70)

/* COOl GRAY */

export const coolGray9 = '#131618'
export const coolGray8 = '#262c31'
export const coolGray7 = '#3a424a'
export const coolGray6 = '#4d5862'
export const coolGray5 = '#616e7c'
export const coolGray4 = '#808b95'
export const coolGray3 = '#a0a8b0'
export const coolGray2 = '#bfc5ca'
export const coolGray1 = '#dfe2e4'
export const coolGray0 = '#eff0f1'

/* GRAPHITE */
export const graphite9 = '#121212'
export const graphite8 = '#1e1e1e'
export const graphite7 = '#222222'
export const graphite6 = '#242424'
export const graphite5 = '#272727'
export const graphite4 = '#2c2c2c'
export const graphite3 = '#2e2e2e'
export const graphite2 = '#323232'
export const graphite1 = '#353535'
export const graphite0 = '#383838'


/* WHITE */
export const white = '#ffffff'

export const white70A = hex2rgba(white, 60)
export const white55A = hex2rgba(white, 55)

/* BLACK */
export const black = '#000000'
