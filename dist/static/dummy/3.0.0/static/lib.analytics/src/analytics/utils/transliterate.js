const TRANSLITERATE_MAP = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'shh',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e-',
    ю: 'yu',
    я: 'ya',
    ' ': '_',
    '/': '_-_'
}


export const transliterate = (value = '') => value
    .split('')
    .map((char) => {
        const lowerChar = char.toLowerCase()
        return TRANSLITERATE_MAP.hasOwnProperty(lowerChar) ? TRANSLITERATE_MAP[lowerChar] : lowerChar
    })
    .join('')
